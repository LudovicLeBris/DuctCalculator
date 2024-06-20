import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apd-selector',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    LengthSliderComponent,
  ],
  templateUrl: './apd-selector.component.html',
  styleUrl: './apd-selector.component.css'
})
export class ApdSelectorComponent {
  air = Air.getInstance();
  duct = new Duct;
  airflow = new Airflow;
  apd = new Apd;

  constructor (
    private airSetupService: AirSetupService,
    private storageService: StorageService,
    private linearApdCalculationService: LinearApdCalculationService,
  )
  {
    this.airSetupService.getAir().subscribe(() => {this.calculateLinearApd();})
    this.duct = this.storageService.duct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
  }

  handleLengthChange($event: Length): void {
    this.duct.length = $event;
    this.calculateLinearApd();
  }

  calculateLinearApd(): void {
    const linearApd = this.linearApdCalculationService.getlinearApd(this.air, this.duct, this.airflow);
    this.apd.linearApd.setValue(linearApd);
  }

}
