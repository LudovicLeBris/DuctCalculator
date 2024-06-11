import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class JunctionTee45 extends Singularity {
  override readonly name = 'junc45Tee';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
