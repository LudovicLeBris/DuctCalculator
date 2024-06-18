import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SeparationTee45 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sep45Tee';
    this.setProps();
  }
}
