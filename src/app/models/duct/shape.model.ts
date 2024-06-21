import { TechnicalProperty } from "../technical-property.model";

export type ShapeValue = 'circular' | 'rectangular';

export class Shape extends TechnicalProperty {
  override readonly name = 'shape';
  override readonly displayName = 'forme';
  protected override icon = 'circular'

  declare protected value: ShapeValue;
  public valueDisplayName: string;

  constructor () {
    super();
    this.value = 'circular';
    this.valueDisplayName = 'circulaire';
    this.setCharacteristics();
  }

  private setCharacteristics(): void {
    if (this.value === 'circular') {
      this.icon = 'circular';
      this.valueDisplayName = 'circulaire'
    } else {
      this.icon = 'rectangular';
      this.valueDisplayName = 'rectangulaire'
    }
  }

  public override setValue(value: ShapeValue): void {
    this.value = value;
    this.setCharacteristics()
  }

  public override getValue(): ShapeValue {
    return this.value;
  }

  public getIcon(): string {
    return this.icon;
  }
}
