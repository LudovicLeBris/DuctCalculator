import { TechnicalProperty } from "../technical-property.model";

export class TotalAdditionalApd extends TechnicalProperty{
  override readonly name = 'totalAdditionalApd';
  override readonly displayName = 'PdC additionelles totales';
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
