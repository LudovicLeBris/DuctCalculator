import { Injectable } from '@angular/core';
import { Airflow } from '../models/airflow/airflow.model';
import { Air } from '../models/air/air.model';
import { Singularity } from '../models/singularity/singularity.model';
import { Singularities } from '../models/singularity/singularities.model';

@Injectable({
  providedIn: 'root'
})
export class SingularApdService {

  constructor() { }

  singularApd(singularity: Singularity, air: Air, airflow: Airflow): number {
    return singularity.getValue() * air.density * (airflow.flowspeed.getValue()**2) / 2;
  }

  singularApdByQuantity(singularity: Singularity, air: Air, airflow: Airflow): number {
    return (singularity.getValue() * singularity.getQuantity()) * air.density * (airflow.flowspeed.getValue()**2) / 2;
  }

  totalSingularApd(singularities: Singularities, air: Air, airflow: Airflow): number {
    return singularities.getTotalSingularitiesValues() * air.density * (airflow.flowspeed.getValue()**2) / 2;
  }
}
