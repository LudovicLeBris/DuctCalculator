import { Injectable } from '@angular/core';
import { CircularDuct, Duct } from '../models/duct/duct.model';
import { Airflow } from '../models/airflow/airflow.model';
import { Apd } from '../models/apd/apd.model';
import { Singularities } from '../models/singularity/singularities.model';
import { SingularityFactory } from '../models/singularity/singularity-factory';
import { SingularitiesValues } from '../models/singularity/singularity.model';
import { AdditionalApdList } from '../models/apd/additionals-apd-list.modes';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  duct: Duct;
  airflow: Airflow;
  apd: Apd;
  singularities: Singularities;
  additionalApdList: AdditionalApdList;

  constructor() {
    this.duct = new CircularDuct;
    this.airflow = new Airflow();
    this.apd = new Apd();
    this.singularities = new Singularities;
    this.additionalApdList = new AdditionalApdList;
    this.airflow.flowrate.setValue(1000);
    this.airflow.flowspeed.setValue(7);
    this.duct.length.setValue(1);
    this.duct.diameter?.setValue(250);
    this.initSingularityList();
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

  setSingularities(singularities: Singularities): void {
    this.singularities = singularities;
  }

  initSingularityList():void {
    const singularityFactory = new SingularityFactory(this.duct.shape.getValue());
    for (const singularityType in SingularitiesValues) {
      if (Object.prototype.hasOwnProperty.call(SingularitiesValues, singularityType)) {
        const singularity = singularityFactory.createSingularity(singularityType);
        this.singularities.addSingularity(singularity!);
      }
    }
  }

  setAdditionalApdList(additionalApdList: AdditionalApdList): void {
    this.additionalApdList = additionalApdList;
  }
}
