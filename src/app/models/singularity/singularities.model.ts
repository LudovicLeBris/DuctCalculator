import { Singularity } from "./singularity.model";

export class Singularities {
  private singularities: Singularity[];

  constructor () {
    this.singularities = [];
  }

  public getSingularities(): Singularity[] {
    return this.singularities;
  }

  public addSingularity(singularity: Singularity):void {
    this.singularities.push(singularity);
  }

  public removeSingularity(singularity: Singularity): void {
    if (!this.singularities) {
      return;
    }
    this.singularities.splice(this.getSingularityIndex(singularity));
  }

  public setSingularityQuantity(singularity : Singularity, quantity: number):void {
    const singularityToChange = this.singularities[this.getSingularityIndex(singularity)];
    singularityToChange.setQuantity(quantity);
  }

  public getTotalSingularityValue(singularity: Singularity): number {
    const singularityToGet = this.singularities[this.getSingularityIndex(singularity)];
    return singularityToGet.getQuantity() * singularityToGet.getValue();
  }

  public getTotalSingularitiesValues(): number {
    let totalSingularitiesValues: number = 0;
    this.singularities.forEach(singularity => {
      totalSingularitiesValues += singularity.getValue() * singularity.getQuantity();
    });

    return totalSingularitiesValues;
  }

  private getSingularityIndex(singularity: Singularity): number {
    const singularityIndex: number = this.singularities.findIndex(element => element.getName() == singularity.getName());
    return singularityIndex;
  }
}
