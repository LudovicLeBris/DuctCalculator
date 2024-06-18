import { TechnicalProperty } from "../technical-property.model";

type MaterialProperty = {
  name: string,
  displayName: string,
  roughness: number
};

export const materialList: MaterialProperty[] = [
  {
    name: 'galvanised_steel',
    displayName: 'acier galvanisé',
    roughness: 0.0001
  },
  {
    name: 'aluminium',
    displayName: 'aluminium',
    roughness: 0.000002
  },
  {
    name: 'steel',
    displayName: 'acier',
    roughness: 0.00005
  },
  {
    name: 'cast_iron',
    displayName: 'fonte',
    roughness: 0.0002
  },
  {
    name: 'plastic',
    displayName: 'plastique',
    roughness: 0.000002
  },
  {
    name: 'smooth_concrete',
    displayName: 'béton doux',
    roughness: 0.0003
  },
  {
    name: 'ordinary_concrete',
    displayName: 'béton ordinaire',
    roughness: 0.001
  },
  {
    name: 'brick',
    displayName: 'brique',
    roughness: 0.002
  },
  {
    name: 'terracotta',
    displayName: 'terre cuite',
    roughness: 0.005
  },
] as const;

type MaterialValue = (typeof materialList)[number];

export class Material extends TechnicalProperty {
  override readonly name = 'material';
  override readonly displayName = 'Matériaux';
  override readonly icon = 'material';

  declare protected value: MaterialValue;

  constructor () {
    super();
    this.value = materialList[0];
  }

  public override getValue(): MaterialValue {
    return this.value;
  }

  public override setValue(value: MaterialValue): void {
    this.value = value;
  }
}
