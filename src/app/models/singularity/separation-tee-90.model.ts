import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SeparationTee90 extends Singularity {
  override readonly name = 'sep90Tee';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
