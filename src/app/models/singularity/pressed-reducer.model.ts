import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class PressedReducer extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'pressedReducer';
    this.setProps();
  }
}
