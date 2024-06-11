import { ShapeValue } from "../duct/shape.model";
import { Singularity } from "./singularity.model";

export class LongReducer extends Singularity {
  override readonly name = 'longReducer';

  constructor (shape: ShapeValue) {
    super(shape);
    this.setProps();
  }
}
