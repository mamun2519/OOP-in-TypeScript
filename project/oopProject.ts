class StripePayment {
  private stripeSecretKey = "Screet key";
  private Stripe() {
    return new Stripe(this.stripeSecretKey);
  }
  public async paymentByStripe({ customerInfo, amount }: TPaymentInit) {
    if (!customerInfo.email || !amount) {
      throw new Error("email or amount is required");
    }
    const amountInCents = parseInt(amount, 10) * 100;
    if (isNaN(amountInCents) || amountInCents <= 0) {
      throw new Error("Invalid amount value");
    }
    const customer = await this.Stripe().customers.create({
      name: customerInfo.name,
      email: customerInfo.email,
    });
  }
}
