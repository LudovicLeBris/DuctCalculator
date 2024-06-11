import { ShapeValue } from "../duct/shape.model";

export abstract class Singularity {
  protected shape: ShapeValue;
  protected name: string = '';
  protected displayName: string = '';
  protected quantity: number = 0;
  protected value: number = 0;
  protected icon: string = '';

  constructor (shape: ShapeValue) {
    this.shape = shape;
  }

  protected setProps(): void {
    this.displayName = SingularitiesValues[this.name]['displayName'];
    this.icon = SingularitiesValues[this.name]['icon'];
    this.value = SingularitiesValues[this.name]['values'][this.shape];
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getIcon(): string {
    return this.icon;
  }

  public getValue(): number {
    return this.value;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getQuantity(): number {
    return this.quantity;
  }
}

type SingularityValue = {[key: string] : number};

type SingularityProps = {
  displayName : string,
  icon: string,
  values : SingularityValue
};

type SingularityValues = {[key: string] : SingularityProps};


export const SingularitiesValues: SingularityValues = {
  elbow30 : {
    displayName: 'coude à 30°',
    icon :'30_elbow',
    values : {
      circular : 0.17,
      rectangular : 0.15
    }
  },
  elbow45 : {
    displayName : 'coude à 45°',
    icon : '45_elbow',
    values : {
      circular : 0.23,
      rectangular : 0.21
    }
  },
  elbow60 : {
    displayName: 'coude à 60°',
    icon: '60_elbow',
    values: {
      circular : 0.31,
      rectangular : 0.28
    }
  },
  elbow90 : {
    displayName: 'coude à 90°',
    icon: '90_elbow',
    values: {
      circular : 0.4,
      rectangular : 0.36
    }
  },
  sharpElbow30 : {
    displayName: 'coude aigu à 30°',
    icon: '30_sharp_elbow',
    values: {
      circular : 0.16,
      rectangular : 0.17
    }
  },
  sharpElbow45 : {
    displayName: 'coude aigu à 45°',
    icon: '45_sharp_elbow',
    values: {
      circular : 0.32,
      rectangular : 0.34
    }
  },
  sharpElbow60 : {
    displayName: 'coude aigu à 60°',
    icon: '60_sharp_elbow',
    values: {
      circular : 0.56,
      rectangular : 0.59
    }
  },
  sharpElbow90 : {
    displayName: 'coude aigu à 90°',
    icon: '90_sharp_elbow',
    values: {
      circular : 1.2,
      rectangular : 1.28
    }
  },
  sep90Tee : {
    displayName: 'té de séparation à 90°',
    icon: '90_sep_tee',
    values: {
      circular : 2.0,
      rectangular : 2.0
    }
  },
  junc90Tee : {
    displayName: 'té de jonction à 90°',
    icon: '90_junc_tee',
    values: {
      circular : 2.27,
      rectangular : 2.27
    }
  },
  sep45Tee : {
    displayName: 'té de séparation à 45°',
    icon: '45_sep_tee',
    values: {
      circular : 0.58,
      rectangular : 0.58
    }
  },
  junc45Tee : {
    displayName: 'té de jonction à 45°',
    icon: '45_junc_tee',
    values: {
      circular : 1.64,
      rectangular : 1.64
    }
  },
  pressedReducer : {
    displayName: 'réduction courte',
    icon: 'pressed_reduc',
    values: {
      circular : 0.35,
      rectangular : 0.35
    }
  },
  longReducer : {
    displayName: 'réduction longue',
    icon: 'long_reduc',
    values: {
      circular : 0.59,
      rectangular : 0.58
    }
  },
};

