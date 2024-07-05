import { Component, OnInit } from '@angular/core';
import { CircularDuct } from '../../models/duct/duct.model';
import { Air } from '../../models/air/air.model';
import { Airflow } from '../../models/airflow/airflow.model';
import { LinearApd } from '../../models/apd/linear-apd.model';
import { AirflowCalculationService } from '../../services/airflow-calculation.service';
import { CircularDuctCalculationService } from '../../services/circular-duct-calculation.service';
import { LinearApdCalculationService } from '../../services/linear-apd-calculation.service';
import { Flowrate } from '../../models/airflow/flowrate.model';
import { Flowspeed } from '../../models/airflow/flowspeed.model';
import { Diameter } from '../../models/duct/diameter.model';
import { MatIconModule } from '@angular/material/icon';
import { FlowrateSliderComponent } from '../flowrate-slider/flowrate-slider.component';
import { CommonModule } from '@angular/common';
import { FlowspeedSliderComponent } from '../flowspeed-slider/flowspeed-slider.component';
import { DiameterSliderComponent } from '../diameter-slider/diameter-slider.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Apd } from '../../models/apd/apd.model';
import { AirSetupService } from '../../services/air-setup.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { materialList } from '../../models/duct/material.model';

@Component({
  selector: 'app-circular-duct-setup',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    DiameterSliderComponent,
    FlowrateSliderComponent,
    FlowspeedSliderComponent,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './circular-duct-setup.component.html',
  styleUrl: './circular-duct-setup.component.css'
})
export class CircularDuctSetupComponent implements OnInit {
  air: Air;
  duct: CircularDuct;
  airflow: Airflow;
  apd: Apd;
  linearApd: LinearApd;
  calculatedDimension: number = 0;

  requestedPropertyControl = new FormControl('diameter');
  requestedProperty: 'diameter' | 'flowrate' | 'flowspeed';

  materialControl: FormControl;
  materialList = materialList;

  constructor (
    private airSetupService: AirSetupService,
    private circularDuctCalculationService : CircularDuctCalculationService,
    private airflowCalculationService : AirflowCalculationService,
    private linearApdCalculationService : LinearApdCalculationService,
    private router: Router,
    private storageService: StorageService,
  ) {
    this.air = Air.getInstance();
    this.duct = this.storageService.duct as CircularDuct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
    this.linearApd = new LinearApd();
    this.requestedProperty = 'diameter';
    this.materialControl = new FormControl(this.duct.material.getValue());
  }

  ngOnInit(): void {
    this.duct = this.storageService.duct as CircularDuct;
    this.airflow = this.storageService.airflow;
    this.calculateDimensions(this.airflow.flowrate, this.airflow.flowspeed);
    this.calculateLinearApd();
    this.airSetupService.getAir().subscribe(() => {this.calculateLinearApd()});
    this.materialControl.setValue(this.duct.material.getValue().name);
  }

  toggleRequestedProperty(): void {
    this.requestedProperty = this.requestedPropertyControl.value as 'diameter' | 'flowrate' | 'flowspeed';
  }

  handleDiameterChange($event: Diameter): void {
    this.duct.diameter = $event;
    if (this.requestedProperty === 'flowrate') {
      this.calculateFlowrate(this.airflow.flowspeed, this.duct.diameter);
    } else if (this.requestedProperty === 'flowspeed') {
      this.calculateFlowspeed(this.airflow.flowrate, this.duct.diameter);
    }
    this.calculateLinearApd();
  }

  handleFlowrateChange($event: Flowrate): void {
    this.airflow.flowrate = $event;
    if (this.requestedProperty === 'diameter') {
      this.calculateDimensions(this.airflow.flowrate, this.airflow.flowspeed);
    } else if (this.requestedProperty === 'flowspeed') {
      this.calculateFlowspeed(this.airflow.flowrate, this.duct.diameter);
    }
    this.calculateLinearApd();
  }

  handleFlowspeedChange($event: Flowspeed): void {
    this.airflow.flowspeed = $event;
    if (this.requestedProperty === 'diameter') {
      this.calculateDimensions(this.airflow.flowrate, this.airflow.flowspeed);
    } else if (this.requestedProperty === 'flowrate') {
      this.calculateFlowrate(this.airflow.flowspeed, this.duct.diameter);
    }
    this.calculateLinearApd();
  }

  handleMaterialChange() {
    const materialValue = this.materialControl.value!;
    const materialProperty = this.materialList.find(material => material.name === materialValue)!;
    this.duct.material.setValue(materialProperty);
    this.calculateLinearApd();
  }

  public calculateDimensions(flowrate: Flowrate, flowspeed: Flowspeed): void {
    this.airflow.flowrate = flowrate;
    this.airflow.flowspeed = flowspeed;

    const calculatedSection: number = this.circularDuctCalculationService.sectionByFlowrate(this.airflow.flowrate, this.airflow.flowspeed);
    const dimensionValue: number = this.circularDuctCalculationService.dimensionsBySection(calculatedSection);
    this.calculatedDimension = dimensionValue;

    const upperDiameter = this.circularDuctCalculationService.closerNormalizedDiameter(dimensionValue);
    this.duct.diameter.setValue(upperDiameter);

    const sectionValue = this.circularDuctCalculationService.sectionByDimensions(this.duct.diameter);
    this.duct.section.setValue(sectionValue);
    this.duct.equivalentDiameter = this.circularDuctCalculationService.equivalentDiameter(this.duct.diameter);

    this.storageService.setDuct(this.duct);
  }

  public calculateFlowrate(flowspeed: Flowspeed, diameter: Diameter): void {
    this.airflow.flowspeed = flowspeed;
    this.duct.diameter = diameter;
    this.duct.equivalentDiameter = this.circularDuctCalculationService.equivalentDiameter(diameter);

    const sectionValue: number = this.circularDuctCalculationService.sectionByDimensions(diameter);
    this.duct.section.setValue(sectionValue);

    const flowrateValue: number = this.airflowCalculationService.flowrate(this.airflow.flowspeed, this.duct.section);
    this.airflow.flowrate.setValue(flowrateValue);

    this.storageService.setAirflow(this.airflow);
  }

  public calculateFlowspeed(flowrate: Flowrate, diameter: Diameter): void {
    this.airflow.flowrate = flowrate;
    this.duct.diameter = diameter;
    this.duct.equivalentDiameter = this.circularDuctCalculationService.equivalentDiameter(diameter);

    const sectionValue: number = this.circularDuctCalculationService.sectionByDimensions(diameter);
    this.duct.section.setValue(sectionValue);

    const flowspeedValue: number = this.airflowCalculationService.flowspeed(this.airflow.flowrate, this.duct.section);
    this.airflow.flowspeed.setValue(flowspeedValue);

    this.storageService.setAirflow(this.airflow);
  }

  public calculateLinearApd(): void {
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
