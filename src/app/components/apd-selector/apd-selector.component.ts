import { Component, OnInit } from '@angular/core';
import { Duct } from '../../models/duct/duct.model';
import { StorageService } from '../../services/storage.service';
import { Airflow } from '../../models/airflow/airflow.model';
import { Apd } from '../../models/apd/apd.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { LengthSliderComponent } from '../length-slider/length-slider.component';
import { Length } from '../../models/duct/length.model';
import { LinearApdCalculationService } from '../../services/linear-apd-calculation.service';
import { Air } from '../../models/air/air.model';
import { AirSetupService } from '../../services/air-setup.service';
import { Singularity } from '../../models/singularity/singularity.model';
import { Singularities } from '../../models/singularity/singularities.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SingularApdService } from '../../services/singular-apd.service';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apd-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    LengthSliderComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './apd-selector.component.html',
  styleUrl: './apd-selector.component.css'
})
export class ApdSelectorComponent implements OnInit {
  air = Air.getInstance();
  duct = new Duct;
  airflow = new Airflow;
  apd = new Apd;
  totalApd: number = 0;
  singularities: Singularities;
  singularitiesControl = new FormControl([]);

  constructor (
    private airSetupService: AirSetupService,
    private storageService: StorageService,
    private linearApdCalculationService: LinearApdCalculationService,
    private singularApdService: SingularApdService,
    private router: Router,
  )
  {
    this.duct = this.storageService.duct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
    this.singularities = this.storageService.singularities;
    this.apd.additionalApd.setValue(0);
    this.airSetupService.getAir().subscribe(() => {
      this.calculateLinearApd();
      this.calculateSingularApd();
      this.calculateTotalApd();
    });

  }
  ngOnInit(): void {
    this.calculateLinearApd();
    this.calculateSingularApd();
    this.calculateTotalApd();
  }

  handleLengthChange($event: Length): void {
    this.duct.length = $event;
    this.calculateLinearApd();
    this.calculateTotalApd();
  }

  calculateLinearApd(): void {
    const linearApd = this.linearApdCalculationService.getlinearApd(this.air, this.duct, this.airflow);
    this.apd.linearApd.setValue(linearApd);
  }

  calculateSingularApd(): void {
    const singularApd = this.singularApdService.totalSingularApd(this.singularities, this.air, this.airflow);
    this.apd.singularApd.setValue(singularApd);
  }

  calculateTotalApd(): void {
    this.totalApd = this.apd.linearApd.getValue() + this.apd.singularApd.getValue() + this.apd.additionalApd.getValue();
    this.apd.totalApd.setValue(this.totalApd);
  }

  handleAddSingularityQuantity(singularity: Singularity) {
    singularity.setQuantity(singularity.getQuantity() + 1);
    this.calculateSingularApd();
    this.calculateTotalApd();
    this.storageService.setSingularities(this.singularities)
  }

  handleRemoveSingularityQuantity(singularity: Singularity) {
    if (singularity.getQuantity() > 0) {
      singularity.setQuantity(singularity.getQuantity() - 1);
      this.calculateSingularApd();
      this.calculateTotalApd();
      this.storageService.setSingularities(this.singularities)
    } else {
      return;
    }
  }

  calculateSingularApdByQuantity(singularity: Singularity): number {
    return this.singularApdService.singularApdByQuantity(singularity, this.air, this.airflow);
  }

  goToDuctSelector(): void {
    this.storageService.setApd(this.apd);
    this.router.navigate(['duct-selector'])
  }

  goToResultsOverview(): void {
    this.router.navigate(['results-overview']);
  }

}
