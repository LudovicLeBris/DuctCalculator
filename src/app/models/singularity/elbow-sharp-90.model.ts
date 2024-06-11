import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow90 extends Singularity {
  override readonly name = 'sharpElbow90';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
