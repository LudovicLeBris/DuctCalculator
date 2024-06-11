import { TechnicalProperty } from "../technical-property.model";

export class LinearApd extends TechnicalProperty{
  override readonly name = 'linearApd';
  override readonly displayName = 'PdC linéaire';
  override readonly unit = 'Pa';
  override readonly icon = 'linear_apd';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
