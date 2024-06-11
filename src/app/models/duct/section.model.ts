import { TechnicalProperty } from "../technical-property.model";

export class Section extends TechnicalProperty {
  override readonly name = 'section';
  override readonly displayName = 'section';
  override readonly unit = 'm²';
  override readonly icon = 'section';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
