import { TechnicalProperty } from "../technical-property.model";

export const normalizedDiameters = [
  80,
  160,
  200,
  250,
  315,
  355,
  400,
  450,
  500,
  560,
  630,
  710,
  800,
  900,
  1000,
  1250
] as const;

export type DiameterValue = (typeof normalizedDiameters)[number];

export class Diameter extends TechnicalProperty {
  override readonly name = 'diameter';
  override readonly displayName = 'diamètre';
  override readonly unit = 'mm';
  override readonly icon = 'diameter'

  declare protected value: DiameterValue;

  public override getValue(): DiameterValue {
    return this.value;
  }

  public override setValue(value: DiameterValue): void {
    this.value = value;
  }
};
