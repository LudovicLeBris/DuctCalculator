import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow30 extends Singularity {
  override readonly name = 'sharpElbow30';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
