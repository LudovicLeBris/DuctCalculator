import { Injectable } from '@angular/core';
import { GeneralDuctCalculationService } from './general-duct-calculation.service';
import { Width } from '../models/duct/width.model';
import { Height } from '../models/duct/height.model';
import { Section } from '../models/duct/section.model';
import { Ratio } from '../models/duct/ratio.model';

@Injectable({
  providedIn: 'root'
})
export class RectangularDuctCalculationService extends GeneralDuctCalculationService {

  constructor() {super()}

  static equivalentDiameter(width: Width, height: Height): number {
    return (1.265 * (width.getValue() * height.getValue()) ** 0.6)
    / (width.getValue() + height.getValue()) ** 0.2;
  }

  static ratio(width: Width, height: Height): number {
    if (width.getValue() > height.getValue()) {
      return width.getValue() / height.getValue();
    } else {
      return height.getValue() / width.getValue();
    }
  }

  static sideSize(section: Section, knownSideSize: number): number {
    return ((section.getValue()) / (knownSideSize / 1000))*1000;
  }

  static sectionByDimensions(width: Width, height: Height) {
    const equivalentDiameter = this.equivalentDiameter(width, height);
    return (Math.PI * (equivalentDiameter/1000)**2)/4;
  }

  static dimensionsByRatio(section: Section, ratio: Ratio): [number, number] {
    const largestSide = (Math.sqrt(ratio.getValue()*section.getValue())*1000);
    const smalletSide = this.sideSize(section, largestSide);
    return [largestSide, smalletSide];
  }
}
