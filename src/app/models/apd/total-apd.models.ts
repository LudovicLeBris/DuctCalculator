import { TechnicalProperty } from "../technical-property.model";

export class TotalApd extends TechnicalProperty{
  override readonly name = 'totalApd';
  override readonly displayName = 'PdC totales';
  override readonly unit = 'Pa';
  override readonly icon = 'total_apd';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
