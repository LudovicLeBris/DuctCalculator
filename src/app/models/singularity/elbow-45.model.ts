import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow45 extends Singularity {
  override readonly name = 'elbow45';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
