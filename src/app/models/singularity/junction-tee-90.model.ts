import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class JunctionTee90 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'junc90Tee';
    this.setProps();
  }
}
