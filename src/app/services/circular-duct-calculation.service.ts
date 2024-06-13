import { Injectable } from '@angular/core';
import { GeneralDuctCalculationService } from './general-duct-calculation.service';
import { Diameter } from '../models/duct/diameter.model';

@Injectable({
  providedIn: 'root'
})
export class CircularDuctCalculationService extends GeneralDuctCalculationService {

  constructor() {super()}

  public equivalentDiameter(diameter: Diameter): number {
    return diameter.getValue();
  }

  public sectionByDimensions(diameter: Diameter) {
    const equivalentDiameter = this.equivalentDiameter(diameter);
    return (Math.PI * (equivalentDiameter/1000)**2) / 4;
  }

  public dimensionsBySection(section: number) {
    return (Math.sqrt((section * 4) / Math.PI)) * 1000;
  }
}
