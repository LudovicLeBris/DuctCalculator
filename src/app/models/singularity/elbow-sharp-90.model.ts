import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow90 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sharpElbow90';
    this.setProps();
  }
}
