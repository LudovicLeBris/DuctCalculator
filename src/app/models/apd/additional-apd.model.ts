import { TechnicalProperty } from "../technical-property.model";

export class AdditionalApd extends TechnicalProperty {
  override readonly unit = 'Pa';
  override readonly icon = 'additional_apd';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }

  public setName(name: string): void {
    this.name = name;
    this.displayName = this.name;
  }

  public getName(): string {
    return this.name;
  }

  public setDisplayName(displayName: string): void {
    this.displayName = displayName;
    this.name = this.displayName;
  }

  public getDisplayName(): string {
    return this.displayName;
  }
}
