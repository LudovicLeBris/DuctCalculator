import { Injectable } from '@angular/core';
import { Flowspeed } from '../models/airflow/flowspeed.model';
import { Air } from '../models/air/air.model';
import { CircularDuct, RectangularDuct } from '../models/duct/duct.model';
import { Airflow } from '../models/airflow/airflow.model';

@Injectable({
  providedIn: 'root'
})
export class LinearApdCalculationService {

  constructor() { }

  private getReynolds(flowspeed: number, equivalentDiameter: number, viscosity: number): number {
    return (flowspeed * (equivalentDiameter * 10 ** -3)) / viscosity;
  }

  public getlinearApd(air: Air, duct: CircularDuct | RectangularDuct, airflow: Airflow) {
    let linearApd = 0;

    const length = duct.length.getValue();
    const equivalentDiameter = duct.equivalentDiameter;
    const roughness = duct.material.getValue().roughness;

    const flowspeed = airflow.flowspeed.getValue();

    const reynolds: number = this.getReynolds(flowspeed, equivalentDiameter, air.viscosity);
    const laminarLamdda = 64 / reynolds;

    if (reynolds <= 2400) {
      linearApd = (laminarLamdda * length * air.density * (flowspeed**2)) /
        (2 * (equivalentDiameter / 1000));
      return linearApd;
    }

    const b: number = 2.51 / reynolds;
    const roughnessLambda: number = (1 / (-2 * Math.log10(roughness)))**2;

    let lambdaList: number[] = [(1 / (-2 * Math.log10(roughness + b * (1 / Math.sqrt(roughnessLambda)))))**2];

    for (let index = 0; index < 12; index++) {
      const tempLambda: number = (1 / (-2 * Math.log10(roughness + b * (1 / Math.sqrt(lambdaList.at(-1)!)))))**2;
      lambdaList.push(tempLambda);
    }

    let lambdaList2: number[] = [];

    lambdaList.forEach(lambda => {
      lambdaList2.push(lambda - roughnessLambda);
    });

    const minLambda2: number = Math.min(...lambdaList2.slice(2));

    const definitiveLambda: number = lambdaList[(lambdaList2.slice(0, 6)).findIndex(element => element == minLambda2)];

    linearApd = (definitiveLambda * length * air.density * flowspeed**2) / (2 * (equivalentDiameter / 1000));

    return linearApd;
  }
}
