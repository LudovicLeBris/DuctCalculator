import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class SharpElbow30 extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'sharpElbow30';
    this.setProps();
  }
}
