import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow60 extends Singularity {
  override readonly name = 'sharpElbow60';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
