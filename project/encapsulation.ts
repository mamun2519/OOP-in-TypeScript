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
  set currentTempC(newTemp: number) {
    if (newTemp > this.maxTemp) {
      throw new Error("Temperature exceeds safety limit");
    }
    this.currentTemp = newTemp;
  }

  private executeCoolingProtocol() {
    this.currentTemp -= 10;
  }

  private logEmergency(): void {
    console.log("Emergency cooldown activated at", new Date());
  }

  public emergencyCoolDown() {
    this.executeCoolingProtocol();
    this.logEmergency();
  }
}

export const reactor = new TemperatureController(100, 150);
reactor.currentTempC = 120;
console.log(reactor.currentTempF);
reactor.emergencyCoolDown();
