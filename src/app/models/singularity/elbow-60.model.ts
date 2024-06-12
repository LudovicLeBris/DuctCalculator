import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow60 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'elbow60';
    this.setProps();
  }
}
