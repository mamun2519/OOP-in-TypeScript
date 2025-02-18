export class StripePayment {
  private _stripeSecretKey = demoAppConfig?.stripe?.serverSecretKey;
  private _name?: string;
  private _email?: string;
  private _amount?: string;
  constructor(name?: string, email?: string, amount?: string) {
    this._email = email;
    this._amount = amount;
    this._name = name;
  }
  private Stripe() {
    return new Stripe(this._stripeSecretKey);
  }
  public async paymentInit() {
    // const { name, email } = customerInfo
    const name = this._name;
    const email = this._email;
    const amount = this._amount;
    if (!email || !amount) {
      throw new Error("email or amount is required");
    }
    const amountInCents = parseInt(amount, 10) * 100;
    if (isNaN(amountInCents) || amountInCents <= 0) {
      throw new Error("Invalid amount value");
    }

    try {
      const customer = await this.createCustomer({
        name,
        email,
      });

      const paymentIntent = await this.createPaymentIntents({
        amount,
        email,
        customerId: customer.id,
      });
      return {
        clientSecret: paymentIntent.client_secret,
      };
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        switch (error.type) {
          case "StripeCardError":
            throw new Error(`A payment error occurred: ${error.message}`);
          case "StripeInvalidRequestError":
            throw new Error(`Invalid request: ${error.message}`);
          case "StripeAPIError":
            throw new Error(`Internal Stripe API error: ${error.message}`);
          case "StripeConnectionError":
            throw new Error(`Network error: ${error.message}`);
          case "StripeAuthenticationError":
            throw new Error(`Authentication error: ${error.message}`);
          default:
            throw new Error(`Unexpected error: ${error.message}`);
        }
      }

      throw new Error("An unexpected error occurred");
    }
  }

  public async stripeHostedCreateSession(payload: TCreateSession) {
    const { amount } = payload;
    if (!amount) {
      throw new Error("amount is required ");
    }

    const amountInCents = parseInt(amount, 10) * 100;

    if (isNaN(amountInCents) || amountInCents <= 0) {
      throw new Error("Invalid amount Price");
    }
    try {
      //* create product id from Stripe,
      const session: any = await this.CreateStripeSession(payload);
      if (!session.clientSecret) {
        throw new Error("Client secret not found in session");
      }
      return session.clientSecret;
    } catch (error) {
      throw new Error(
        "Unable to create Stripe session. Please try again later."
      );
    }
  }

  private async createCustomer({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) {
    return await this.Stripe().customers.create({
      name: name,
      email: email,
    });
  }

  private async createPaymentIntents({
    amount,
    email,
    customerId,
  }: {
    amount: string;
    email: string;
    customerId: string;
  }) {
    return this.Stripe().paymentIntents.create({
      amount: parseInt(amount) * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: false,
      },
      payment_method_types: ["card"],
      receipt_email: email,
      customer: customerId,
    });
  }

  private async CreateStripeSession(payload: TCreateSession) {
    const product = await this.createProductByStripe(payload.productName);

    let price;
    if (product) {
      //* create a pricing from Stripe
      price = await this.createPricesByStripe(payload.amount, product.id);
    }

    if (price?.id) {
      //* create a checkout session from Stripe
      const session = await this.createStripeCheckoutSession(price?.id);

      if (!session.client_secret) {
        throw new Error("Client secret not found in session");
      }
      return { clientSecret: session.client_secret };
    } else {
      throw new Error("Failed to create price");
      // return { success: false }
    }
  }

  private async createProductByStripe(productName: string) {
    return this.Stripe().products.create({
      name: productName || "One-time donation",
    });
  }
  private async createPricesByStripe(amount: string, productId: string) {
    return await this.Stripe().prices.create({
      unit_amount: parseInt(amount) * 100,
      currency: "usd",
      product: productId,
    });
  }

  private async createStripeCheckoutSession(priceId: string) {
    return await this.Stripe().checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      mode: "payment",
      return_url:
        "http://localhost:5173/return?session_id={CHECKOUT_SESSION_ID}",
    });
  }
}
