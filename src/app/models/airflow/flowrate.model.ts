import { TechnicalProperty } from "../technical-property.model";

export class Flowrate extends TechnicalProperty {
  override readonly name = 'flowrate';
  override readonly displayName = 'débit';
  override readonly unit = 'm³/h';
  override readonly icon = 'flowrate';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
