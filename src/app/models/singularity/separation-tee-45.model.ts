import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SeparationTee45 extends Singularity {
  override readonly name = 'sep45Tee';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
