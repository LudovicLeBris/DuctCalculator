import { Injectable } from '@angular/core';
import { Flowrate } from '../models/airflow/flowrate.model';
import { Flowspeed } from '../models/airflow/flowspeed.model';
import { DiameterValue, normalizedDiameters } from '../models/duct/diameter.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralDuctCalculationService {

  constructor() { }

  public sectionByFlowrate(flowrate: Flowrate, flowspeed: Flowspeed): number {
    return (flowrate.getValue() / 3600) / flowspeed.getValue();
  }

  public closerNormalizedDiameter(equivalentDiameter: number): DiameterValue {
    return normalizedDiameters.find(diameter => diameter >= equivalentDiameter)!;
  }
}
