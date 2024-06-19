import { Injectable } from '@angular/core';
import { Duct } from '../models/duct/duct.model';
import { Airflow } from '../models/airflow/airflow.model';
import { Apd } from '../models/apd/apd.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private duct = new Subject<Duct>();
  duct$ = this.duct.asObservable();

  private airflow = new Subject<Airflow>();
  airflow$ = this.airflow.asObservable();

  private apd = new Subject<Apd>();
  apd$ = this.apd.asObservable();

  constructor() {}

  setDuct(duct: Duct) {
    this.duct.next(duct);
  }

  setAirflow(airflow: Airflow) {
    this.airflow.next(airflow);
  }

  setApd(apd: Apd) {
    this.apd.next(apd);
  }
}
