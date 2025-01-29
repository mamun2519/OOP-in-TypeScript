class StripePayment {
  private stripeSecretKey = demoAppConfig?.stripe?.serverSecretKey;
  private Stripe() {
    return new Stripe(this.stripeSecretKey);
  }
}
