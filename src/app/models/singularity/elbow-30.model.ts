import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class Elbow30 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'elbow30';
    this.setProps();
  }
}

