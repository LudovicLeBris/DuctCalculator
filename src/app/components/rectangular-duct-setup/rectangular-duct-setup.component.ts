import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../models/duct/shape.model';
import { Air } from '../../models/air/air.model';
import { Airflow } from '../../models/airflow/airflow.model';
import { LinearApd } from '../../models/apd/linear-apd.model';
import { RectangularDuct } from '../../models/duct/duct.model';
import { AirflowCalculationService } from '../../services/airflow-calculation.service';
import { LinearApdCalculationService } from '../../services/linear-apd-calculation.service';
import { RectangularDuctCalculationService } from '../../services/rectangular-duct-calculation.service';
import { Flowrate } from '../../models/airflow/flowrate.model';
import { Flowspeed } from '../../models/airflow/flowspeed.model';
import { Height } from '../../models/duct/height.model';
import { Width } from '../../models/duct/width.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FlowrateSliderComponent } from '../flowrate-slider/flowrate-slider.component';
import { FlowspeedSliderComponent } from '../flowspeed-slider/flowspeed-slider.component';
import { RatioSliderComponent } from '../ratio-slider/ratio-slider.component';
import { KnowsideSliderComponent } from '../knowside-slider/knowside-slider.component';
import { WidthSliderComponent } from '../width-slider/width-slider.component';
import { HeightSliderComponent } from '../height-slider/height-slider.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Apd } from '../../models/apd/apd.model';
import { AirSetupService } from '../../services/air-setup.service';

@Component({
  selector: 'app-rectangular-duct-setup',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FlowrateSliderComponent,
    FlowspeedSliderComponent,
    WidthSliderComponent,
    HeightSliderComponent,
    RatioSliderComponent,
    KnowsideSliderComponent,
  ],
  templateUrl: './rectangular-duct-setup.component.html',
  styleUrl: './rectangular-duct-setup.component.css'
})
export class RectangularDuctSetupComponent implements OnInit {
  @Input() shape!: Shape;
  air: Air;
  duct: RectangularDuct;
  airflow: Airflow;
  apd: Apd;
  linearApd: LinearApd;
  knownSideSize: number = 0;
  calculatedSideSize: number = 0;

  requestedPropertyControl = new FormControl('dimensions');
  requestedProperty: 'dimensions' | 'flowrate' | 'flowspeed';

  requestedDimensionControl = new FormControl('ratio');
  requestedDimension: 'ratio' | 'knownSize';

  constructor (
    private airSetupService: AirSetupService,
    private rectangularDuctCalculationService : RectangularDuctCalculationService,
    private airflowCalculationService: AirflowCalculationService,
    private linearApdCalculationService: LinearApdCalculationService,
    private router: Router,
    private storageService: StorageService,
  ) {
    this.air = Air.getInstance();
    this.duct = this.storageService.duct as RectangularDuct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
    this.linearApd = new LinearApd();
    this.requestedProperty = 'dimensions';
    this.requestedDimension = 'ratio';
  }

  ngOnInit(): void {
    this.duct = this.storageService.duct as RectangularDuct;
    this.airflow = this.storageService.airflow;
    this.calculateDimensionsByRatio(this.airflow.flowrate, this.airflow.flowspeed, this.duct.ratio.getValue());
    this.calculateLinearApd();
    this.airSetupService.getAir().subscribe(() => {this.calculateLinearApd()});
  }

  toggleRequestedProperty(): void {
    this.requestedProperty = this.requestedPropertyControl.value as 'dimensions' | 'flowrate' | 'flowspeed';
  }

  toggleRequestedDimension(): void {
    this.requestedDimension = this.requestedDimensionControl.value as 'ratio' | 'knownSize';
    if (this.requestedDimension === 'ratio') {
      this.handleRatioChange(this.duct.ratio.getValue());
    } else if (this.requestedDimension === 'knownSize') {
      this.handleKnownSideSizeChange(this.duct.height.getValue());
    }
  }

  handleDimensionChange(): void {
    if (this.requestedProperty === 'flowrate') {
      this.calculateFlowrate(this.airflow.flowspeed, this.duct.width, this.duct.height);
    } if (this.requestedProperty === 'flowspeed') {
      this.calculateFlowspeed(this.airflow.flowrate, this.duct.width, this.duct.height);
    }
    this.calculateLinearApd();
  }

  handleWidthChange($event: Width): void {
    this.duct.width = $event;
    this.handleDimensionChange();
  }

  handleHeightChange($event: Height): void {
    this.duct.height = $event;
    this.handleDimensionChange();
  }

  handleFlowrateChange($event: Flowrate): void {
    this.airflow.flowrate = $event;
    if (this.requestedProperty === 'flowspeed') {
      this.calculateFlowspeed(this.airflow.flowrate, this.duct.width, this.duct.height);
    } else if (this.requestedProperty === 'dimensions') {
      if (this.requestedDimension === 'ratio') {
        this.calculateDimensionsByRatio(this.airflow.flowrate, this.airflow.flowspeed, this.duct.ratio.getValue());
      } else if (this.requestedDimension === 'knownSize') {
        this.calculateDimensionsByKnownSide(this.airflow.flowrate, this.airflow.flowspeed, this.knownSideSize);
      }
    }
    this.calculateLinearApd();
  }

  handleFlowspeedChange($event: Flowspeed): void {
    this.airflow.flowspeed = $event;
    if (this.requestedProperty === 'flowrate') {
      this.calculateFlowrate(this.airflow.flowspeed, this.duct.width, this.duct.height);
    } else if (this.requestedProperty === 'dimensions') {
      if (this.requestedDimension === 'ratio') {
        this.calculateDimensionsByRatio(this.airflow.flowrate, this.airflow.flowspeed, this.duct.ratio.getValue());
      } else if (this.requestedDimension === 'knownSize') {
        this.calculateDimensionsByKnownSide(this.airflow.flowrate, this.airflow.flowspeed, this.knownSideSize);
      }
    }
    this.calculateLinearApd();
  }

  handleRatioChange($event: number): void {
    this.calculateDimensionsByRatio(this.airflow.flowrate, this.airflow.flowspeed, $event);
    this.calculateLinearApd();
  }

  handleKnownSideSizeChange($event: number): void {
    this.knownSideSize = $event;
    this.calculateDimensionsByKnownSide(this.airflow.flowrate, this.airflow.flowspeed, $event);
    this.calculateLinearApd;
  }

  public calculateDimensionsByRatio(flowrate: Flowrate, flowspeed: Flowspeed, ratio: number): void {
    this.airflow.flowrate = flowrate;
    this.airflow.flowspeed = flowspeed;
    this.duct.ratio.setValue(ratio);

    const calculatedSection: number = this.rectangularDuctCalculationService.sectionByFlowrate(this.airflow.flowrate, this.airflow.flowspeed);
    this.duct.section.setValue(calculatedSection);
    const calculatedDimensions: [number, number] = this.rectangularDuctCalculationService.dimensionsByRatio(this.duct.section, this.duct.ratio);
    this.duct.width.setValue(calculatedDimensions[0]);
    this.duct.height.setValue(calculatedDimensions[1]);
    this.duct.equivalentDiameter = this.rectangularDuctCalculationService.equivalentDiameter(this.duct.width, this.duct.height);

    this.storageService.setDuct(this.duct);
  }

  public calculateDimensionsByKnownSide(flowrate: Flowrate, flowspeed: Flowspeed, knownSideSize: number): void {
    this.airflow.flowrate = flowrate;
    this.airflow.flowspeed = flowspeed;

    const calculatedSection: number = this.rectangularDuctCalculationService.sectionByFlowrate(this.airflow.flowrate, this.airflow.flowspeed);
    this.duct.section.setValue(calculatedSection);
    this.calculatedSideSize = this.rectangularDuctCalculationService.sideSize(this.duct.section, knownSideSize);

    if (knownSideSize > this.calculatedSideSize) {
      this.duct.width.setValue(knownSideSize);
      this.duct.height.setValue(this.calculatedSideSize);
    } else {
      this.duct.width.setValue(this.calculatedSideSize);
      this.duct.height.setValue(knownSideSize);
    }
    this.duct.equivalentDiameter = this.rectangularDuctCalculationService.equivalentDiameter(this.duct.width, this.duct.height);
    this.duct.ratio.setValue(this.rectangularDuctCalculationService.ratio(this.duct.width, this.duct.height));

    this.storageService.setDuct(this.duct);
  }

  public calculateFlowrate(flowspeed: Flowspeed, width: Width, height: Height): void {
    this.airflow.flowspeed = flowspeed;
    this.duct.width = width;
    this.duct.height = height;
    this.duct.equivalentDiameter = this.rectangularDuctCalculationService.equivalentDiameter(this.duct.width, this.duct.height);
    this.duct.ratio.setValue(this.rectangularDuctCalculationService.ratio(this.duct.width, this.duct.height));

    const sectionValue: number = this.rectangularDuctCalculationService.sectionByDimensions(this.duct.width, this.duct.height);
    this.duct.section.setValue(sectionValue);

    const flowrateValue: number = this.airflowCalculationService.flowrate(this.airflow.flowspeed, this.duct.section);
    this.airflow.flowrate.setValue(flowrateValue);

    this.storageService.setAirflow(this.airflow);
  }

  public calculateFlowspeed(flowrate: Flowrate, width: Width, height: Height): void {
    this.airflow.flowrate = flowrate;
    this.duct.width = width;
    this.duct.height = height;
    this.duct.equivalentDiameter = this.rectangularDuctCalculationService.equivalentDiameter(this.duct.width, this.duct.height);
    this.duct.ratio.setValue(this.rectangularDuctCalculationService.ratio(this.duct.width, this.duct.height));

    const sectionValue: number = this.rectangularDuctCalculationService.sectionByDimensions(this.duct.width, this.duct.height);
    this.duct.section.setValue(sectionValue);

    const flowspeedValue: number = this.airflowCalculationService.flowspeed(this.airflow.flowrate, this.duct.section);
    this.airflow.flowspeed.setValue(flowspeedValue);

    this.storageService.setAirflow(this.airflow);
  }

  calculateLinearApd(): void {
    this.linearApd.setValue(this.linearApdCalculationService.getlinearApd(this.air, this.duct, this.airflow));
    this.apd.linearApd = this.linearApd;

    this.storageService.setApd(this.apd);
  }

  public goToApdSelector(): void {
    this.storageService.setDuct(this.duct);
    this.storageService.setAirflow(this.airflow);
    this.storageService.setApd(this.apd);
    this.router.navigate(['apd-selector']);
  }
}
