import { Injectable } from '@angular/core';
import { Duct } from '../models/duct/duct.model';
import { Airflow } from '../models/airflow/airflow.model';
import { Apd } from '../models/apd/apd.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  duct= new Duct;
  airflow = new Airflow;
  apd = new Apd;

  constructor() {}

  setDuct(duct: Duct): void {
    this.duct = duct;
  }

  setAirflow(airflow: Airflow): void {
    this.airflow = airflow;
  }

  setApd(apd: Apd): void {
    this.apd = apd;
  }
}
