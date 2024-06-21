import { Diameter } from "./diameter.model";
import { Height } from "./height.model";
import { Length } from "./length.model";
import { Material } from "./material.model";
import { Ratio } from "./ratio.model";
import { Section } from "./section.model";
import { Shape } from "./shape.model";
import { Width } from "./width.model";

interface IDuct {
  shape: Shape;
  section: Section;
  material: Material;
  equivalentDiameter: number;
  length: Length;
  diameter?: Diameter;
  width?: Width;
  height?: Height;
  ration?: Ratio;
}

export class Duct implements IDuct {
  public shape: Shape;
  public section: Section;
  public material: Material;
  public equivalentDiameter: number;
  public length: Length;
  public diameter?: Diameter;
  public width?: Width;
  public height?: Height;
  public ratio?: Ratio;

  constructor () {
    this.shape = new Shape;
    this.material = new Material;
    this.section = new Section;
    this.equivalentDiameter = 0;
    this.length = new Length;
  }
}

export class CircularDuct extends Duct {
  override readonly shape: Shape;

  public override diameter: Diameter;

  constructor () {
    super();
    this.shape = new Shape;
    this.shape.setValue('circular');
    this.diameter = new Diameter;
  }
}

export class RectangularDuct extends Duct  {
  override readonly shape: Shape;

  public override width: Width;
  public override height: Height;
  public override ratio: Ratio;

  constructor() {
    super();
    this.shape = new Shape;
    this.shape.setValue('rectangular');
    this.width = new Width;
    this.height = new Height;
    this.ratio = new Ratio;
  }
}

