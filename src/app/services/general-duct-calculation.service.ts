import { Injectable } from '@angular/core';
import { Flowrate } from '../models/airflow/flowrate.model';
import { Flowspeed } from '../models/airflow/flowspeed.model';
import { normalizedDiameters } from '../models/duct/diameter.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralDuctCalculationService {

  constructor() { }

  static sectionByFlowrate(flowrate: Flowrate, flowspeed: Flowspeed): number {
    return (flowrate.getValue() / 3600) / flowspeed.getValue();
  }

  static closerNormalizedDiameter(equivalentDiameter: number): number {
    return normalizedDiameters.find(diameter => diameter >= equivalentDiameter)!;
  }
}
