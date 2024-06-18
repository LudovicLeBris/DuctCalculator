import { TechnicalProperty } from "../technical-property.model";

export class Altitude extends TechnicalProperty {
  override readonly name = 'altitude';
  override readonly displayName = 'altitude';
  override readonly unit = 'm (au dessus du niveau de la mer)';
  override readonly icon: string = 'altitude';

  declare protected value: number;

  constructor () {
    super();
    this.value = 0;
  }

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
