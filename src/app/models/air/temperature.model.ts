import { TechnicalProperty } from "../technical-property.model";

export class Temperature extends TechnicalProperty {
  override readonly name = 'temperature';
  override readonly displayName = 'temperature';
  override readonly unit = '°C';
  override readonly icon = 'temperature';

  declare protected value: number;

  constructor () {
    super();
    this.value = 20;
  }

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
