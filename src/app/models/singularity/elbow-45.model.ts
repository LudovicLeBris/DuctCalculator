import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow45 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'elbow45';
    this.setProps();
  }
}
