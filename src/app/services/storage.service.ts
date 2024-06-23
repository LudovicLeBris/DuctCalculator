import { Injectable } from '@angular/core';
import { CircularDuct, Duct } from '../models/duct/duct.model';
import { Airflow } from '../models/airflow/airflow.model';
import { Apd } from '../models/apd/apd.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  duct: Duct;
  airflow: Airflow;
  apd: Apd;

  constructor() {
    this.duct = new CircularDuct;
    this.airflow = new Airflow();
    this.apd = new Apd();
    this.airflow.flowrate.setValue(1000);
    this.airflow.flowspeed.setValue(7);
    this.duct.length.setValue(1);
    this.duct.diameter?.setValue(250);
  }

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
