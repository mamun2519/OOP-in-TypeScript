class TemperatureController {
  private currentTemp: number;
  private maxTemp: number;
  constructor(currentTemp: number, maxTemp: number) {
    this.currentTemp = currentTemp;
    this.maxTemp = maxTemp;
  }

  get currentTempF(): number {
    return (this.currentTemp * 9) / 5 + 32;
  }
}
