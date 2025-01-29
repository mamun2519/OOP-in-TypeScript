class StripePayment {
  private stripeSecretKey = demoAppConfig?.stripe?.serverSecretKey;

  private Stripe() {
    return new Stripe(this.stripeSecretKey);
  }
  public async paymentInit({ customerInfo, amount }: TPaymentInit) {
    const { name, email } = customerInfo;
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
}
