class StripePayment {
  private stripeSecretKey = demoAppConfig?.stripe?.serverSecretKey;

  private Stripe() {
    return new Stripe(this.stripeSecretKey);
  }
  public async paymentByStripe({ customerInfo, amount }: TPaymentInit) {
    const { name, email } = customerInfo;

    const amountInCents = parseInt(amount, 10) * 100;

    try {
    } catch (error) {}
  }
}
