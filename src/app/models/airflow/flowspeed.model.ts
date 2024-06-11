import { TechnicalProperty } from "../technical-property.model";

export class Flowspeed extends TechnicalProperty {
  override readonly name = 'flowspeed';
  override readonly displayName = 'vitesse';
  override readonly unit = 'm/s';
  override readonly icon = 'flowspeed';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
