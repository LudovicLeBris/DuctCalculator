import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow60 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sharpElbow60';
    this.setProps();
  }
}
