import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow45 extends Singularity {
  override readonly name = 'sharpElbow45';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
