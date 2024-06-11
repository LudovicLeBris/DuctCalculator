import { Diameter } from "./diameter.model";
import { Height } from "./height.model";
import { Length } from "./length.model";
import { Material } from "./material.model";
import { Ratio } from "./ratio.model";
import { Section } from "./section.model";
import { Shape } from "./shape.model";
import { Width } from "./width.model";

abstract class DuctCore {
  protected shape: Shape;
  public section: Section;
  public material: Material;
  public equivalentDiameter: number;
  public length: Length;

  constructor (
    shape: Shape,
  ) {
    this.shape = shape;
    this.material = new Material;
    this.section = new Section;
    this.equivalentDiameter = 0;
    this.length = new Length;
  }
}

interface IDuctFactory {
  createDuct(shape: Shape): DuctCore
}

export class CircularDuct extends DuctCore {
  public diameter: Diameter;

  constructor (shape: Shape) {
    super(shape);
    this.diameter = new Diameter;
  }

}

export class RectangularDuct extends DuctCore  {
  public width: Width;
  public height: Height;
  public ratio: Ratio;

  constructor(shape: Shape) {
    super(shape);
    this.width = new Width;
    this.height = new Height;
    this.ratio = new Ratio;
  }
}

class DuctFactory implements IDuctFactory {
  public createDuct(shape: Shape): DuctCore {
    switch (shape.getValue()) {
      case 'circular':
        return new CircularDuct(shape);
        break;
      case 'rectangular':
        return new RectangularDuct(shape);
        break;
      default:
        return new CircularDuct(shape);
        break;
    }
  }
}
