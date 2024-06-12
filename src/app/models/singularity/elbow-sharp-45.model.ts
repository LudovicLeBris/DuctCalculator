import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow45 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sharpElbow45';
    this.setProps();
  }
}
