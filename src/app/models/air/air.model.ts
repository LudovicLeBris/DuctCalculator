import { Altitude } from "./altitude.model";
import { Temperature } from "./temperature.model";

export class Air {
  static #instance: Air;

  private altitude: Altitude;
  private temperature: Temperature;

  public density: number = 1.2058928673556562;
  public viscosity: number = 1.5080510051843115e-5;

  constructor () {
    this.altitude = new Altitude;
    this.altitude.setValue(0);

    this.temperature = new Temperature;
    this.temperature.setValue(20);

    this.setDensity();
    this.setViscosity();
  }

  public static getInstance(): Air {
    if (!Air.#instance) {
      Air.#instance = new Air();
    }

    return Air.#instance;
  }

  private setDensity(): void {
    const atmPressure = (760.85 * Math.exp((-0.2840437333 * this.altitude.getValue())
      / (8.31432 * (this.temperature.getValue() + 273.15)))) * 133.32;

    this.density = ((atmPressure *28.976) / (8.314621 * (this.temperature.getValue() + 273.15))) / 1000;
  }

  private setViscosity(): void {
    this.viscosity = (8.8848 * 10 ** (-15) * (this.temperature.getValue() + 273.15) ** 3
      - 3.2398 * 10 ** (-11) * (this.temperature.getValue() + 273.15) ** 2 + 6.2657 * 10 ** (-8)
      * (this.temperature.getValue() + 273.15) + 2.3544 * 10 ** (-6))
      / (353.05 / (this.temperature.getValue() + 273.15));
  }

  public setAltitude(altitude: Altitude): void {
    this.altitude = altitude;
    this.setDensity();
    this.setViscosity();
  }

  public getAltitude(): Altitude {
    return this.altitude;
  }

  public setTemperature(temperature: Temperature): void {
    this.temperature = temperature;
    this.setDensity();
    this.setViscosity();
  }

  public getTemperature(): Temperature {
    return this.temperature;
  }
}
