import { TechnicalProperty } from "../technical-property.model";

export class Height extends TechnicalProperty {
  override readonly name = 'height';
  override readonly displayName = 'hauteur';
  override readonly unit = 'mm';
  override readonly icon = 'height';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
};
