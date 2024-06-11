import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow60 extends Singularity {
  override readonly name = 'elbow60';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
