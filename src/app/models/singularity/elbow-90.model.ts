import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow90 extends Singularity {
  override readonly name = 'elbow90';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
