export abstract class TechnicalProperty {

  protected name: string = '';

  protected displayName: string = '';

  protected unit?: string;

  protected icon?: string;

  protected value?: unknown;

  public setValue(value: unknown): void {
    this.value = value;
  }

  public getValue(): unknown | undefined {
    return this.value;
  }
};
