class AppConfig {
  private static instance: AppConfig;
  private constructor(public apiURL: string) {}
}
