import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class PressedReducer extends Singularity {
  override readonly name = 'pressedReducer';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
