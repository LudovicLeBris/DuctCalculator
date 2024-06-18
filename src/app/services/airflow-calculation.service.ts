import { Injectable } from '@angular/core';
import { Flowspeed } from '../models/airflow/flowspeed.model';
import { Section } from '../models/duct/section.model';
import { Flowrate } from '../models/airflow/flowrate.model';

@Injectable({
  providedIn: 'root'
})
export class AirflowCalculationService {

  constructor() { }

  public flowrate(flowspeed: Flowspeed, section: Section) {
    return (flowspeed.getValue() * section.getValue()) * 3600;
  }

  public flowspeed(flowrate: Flowrate, section: Section) {
    return (flowrate.getValue() / 3600) / section.getValue();
  }
}
