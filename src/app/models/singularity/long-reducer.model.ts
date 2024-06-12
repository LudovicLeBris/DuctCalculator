import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class LongReducer extends Singularity {

  constructor (shape: ShapeValue) {
    super(shape);
    this.name = 'longReducer';
    this.setProps();
  }
}
