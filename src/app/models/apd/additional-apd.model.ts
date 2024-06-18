import { TechnicalProperty } from "../technical-property.model";

export class AdditionalApd extends TechnicalProperty {
  override readonly name = 'additionalApd';
  override readonly displayName = 'PdC additionnelles';
  override readonly unit = 'Pa';
  override readonly icon = 'additional_apd';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
