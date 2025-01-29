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
        }
      }

      throw new Error("An unexpected error occurred");
    }
  }
}
