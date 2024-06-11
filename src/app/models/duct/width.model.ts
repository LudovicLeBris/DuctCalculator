import { TechnicalProperty } from "../technical-property.model";

export class Width extends TechnicalProperty {
  override readonly name = 'width';
  override readonly displayName = 'largeur';
  override readonly unit = 'mm';
  override readonly icon = 'width';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
};
