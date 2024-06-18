import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SeparationTee90 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sep90Tee';
    this.setProps();
  }
}
