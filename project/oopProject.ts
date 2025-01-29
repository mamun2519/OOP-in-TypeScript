class StripePayment {
  private stripeSecretKey = demoAppConfig?.stripe?.serverSecretKey;
  stripe = new Stripe();
}
