import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow30 extends Singularity {
  override readonly name = 'elbow30';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}

