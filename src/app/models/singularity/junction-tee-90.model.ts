import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class JunctionTee90 extends Singularity {
  override readonly name = 'junc90Tee';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
