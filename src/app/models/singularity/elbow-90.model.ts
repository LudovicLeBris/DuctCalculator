import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow90 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'elbow90';
    this.setProps();
  }
}
