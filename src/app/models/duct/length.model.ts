import { TechnicalProperty } from "../technical-property.model";

export class Length extends TechnicalProperty {
  override readonly name = 'length';
  override readonly displayName = 'longueur'
  override readonly unit = 'm';
  override readonly icon = 'length';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
};
