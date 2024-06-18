import { ShapeValue } from "../duct/shape.model";
import { Elbow30 } from "./elbow-30.model";
import { Elbow45 } from "./elbow-45.model";
import { Elbow60 } from "./elbow-60.model";
import { Elbow90 } from "./elbow-90.model";
import { SharpElbow30 } from "./elbow-sharp-30.model";
import { SharpElbow45 } from "./elbow-sharp-45.model";
import { SharpElbow60 } from "./elbow-sharp-60.model";
import { SharpElbow90 } from "./elbow-sharp-90.model";
import { JunctionTee45 } from "./junction-tee-45.model";
import { JunctionTee90 } from "./junction-tee-90.model";
import { LongReducer } from "./long-reducer.model";
import { PressedReducer } from "./pressed-reducer.model";
import { SeparationTee45 } from "./separation-tee-45.model";
import { SeparationTee90 } from "./separation-tee-90.model";
import { Singularity } from "./singularity.model";

export class SingularityFactory {

  private shape;

  constructor (shape: ShapeValue) {
    this.shape = shape;
  }

  createSingularity(type: string): Singularity | undefined {
    switch (type) {
      case 'elbow30':
        return new Elbow30(this.shape);
        break;
      case 'elbow45':
        return new Elbow45(this.shape);
        break;
      case 'elbow60':
        return new Elbow60(this.shape);
        break;
      case 'elbow90':
        return new Elbow90(this.shape);
        break;
      case 'sharpElbow30':
        return new SharpElbow30(this.shape);
        break;
      case 'sharpElbow45':
        return new SharpElbow45(this.shape);
        break;
      case 'sharpElbow60':
        return new SharpElbow60(this.shape);
        break;
      case 'sharpElbow90':
        return new SharpElbow90(this.shape);
        break;
      case 'sep90Tee':
        return new SeparationTee90(this.shape);
        break;
      case 'junc90Tee':
        return new JunctionTee90(this.shape);
        break;
      case 'sep45Tee':
        return new SeparationTee45(this.shape);
        break;
      case 'junc45Tee':
        return new JunctionTee45(this.shape);
        break;
      case 'pressedReducer':
        return new PressedReducer(this.shape);
        break;
      case 'longReducer':
        return new LongReducer(this.shape);
        break;
      default:
        return undefined;
        break;
    }
  }
}
