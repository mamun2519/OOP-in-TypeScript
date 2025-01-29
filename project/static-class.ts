class AppConfig {
  private static instance: AppConfig;
  private constructor(public apiURL: string) {}
  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("https://api.example.com");
    }
    return AppConfig.instance;
  }

  // Static utility
  static isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }
}

export const config = AppConfig.getInstance();
// if (AppConfig.isProduction()) {
//   console.log("Production mode enabled");
// }
console.log(AppConfig.isProduction());
