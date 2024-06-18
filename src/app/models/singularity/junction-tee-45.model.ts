import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class JunctionTee45 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'junc45Tee';
    this.setProps();
  }
}
