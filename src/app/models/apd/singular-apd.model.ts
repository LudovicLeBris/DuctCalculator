import { TechnicalProperty } from "../technical-property.model";

export class SingularApd extends TechnicalProperty{
  override readonly name = 'singularApd';
  override readonly displayName = 'PdC singulaire';
  override readonly unit = 'Pa';
  override readonly icon = 'singular_apd';

  declare protected value: number;

  public override getValue(): number {
    return this.value;
  }

  public override setValue(value: number): void {
    this.value = value;
  }
}
