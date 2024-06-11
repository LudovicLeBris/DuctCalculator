import { TechnicalProperty } from "../technical-property.model";

export class Ratio extends TechnicalProperty {
  override readonly name = 'ratio';
  override readonly displayName = 'ratio';
  override readonly icon = 'ratio';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
