import { TechnicalProperty } from "../technical-property.model";

export type ShapeValue = 'circular' | 'rectangular';

export class Shape extends TechnicalProperty {
  override readonly name = 'shape';
  override readonly displayName = 'forme';

  declare protected value: ShapeValue;

  constructor () {
    super();
    this.value = 'circular';
    this.setIcon();
  }

  private setIcon(): void {
    if (this.value === 'circular') {
      this.icon = 'circular';
    } else {
      this.icon = 'rectangular';
    }
  }

  public override setValue(value: ShapeValue): void {
    this.value = value;
  }

  public override getValue(): ShapeValue {
    return this.value;
  }
}
