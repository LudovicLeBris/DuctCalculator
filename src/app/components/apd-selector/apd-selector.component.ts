import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
import { SingularitiesValues, Singularity } from '../../models/singularity/singularity.model';
import { SingularityFactory } from '../../models/singularity/singularity-factory';
import { Singularities } from '../../models/singularity/singularities.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SingularApdService } from '../../services/singular-apd.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

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
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
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
  singularities = new Singularities();
  singularitiesControl = new FormControl([]);

  constructor (
    private airSetupService: AirSetupService,
    private storageService: StorageService,
    private linearApdCalculationService: LinearApdCalculationService,
    private singularApdService: SingularApdService,
  )
  {
    this.airSetupService.getAir().subscribe(() => {
      this.calculateLinearApd();
      this.calculateSingularApd();
      this.calculateTotalApd();
    })
    this.duct = this.storageService.duct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
    this.apd.additionalApd.setValue(0);
    this.apd.singularApd.setValue(0);

  }
  ngOnInit(): void {
    this.calculateLinearApd();
    this.calculateSingularApd();
    this.calculateTotalApd();
    this.initSingularityList();
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

  handleSingularitiesListChange(): void {
    if (!this.singularitiesControl.value) {
      this.singularities.getSingularities().forEach(singularity => {
        singularity.setQuantity(0);
      });
      return;
    }
    this.singularities.getSingularities().forEach(singularity => {
      const isInSelectedList: boolean = (this.singularitiesControl.value as string[]).includes(singularity.getName());
      if (!isInSelectedList) {
        singularity.setQuantity(0);
      } else if (isInSelectedList && singularity.getQuantity() === 0) {
        singularity.setQuantity(1);
      }
    });
    // console.log(this.singularities.getSingularities());
    this.calculateSingularApd();
    this.calculateTotalApd();
  }

  handleAddSingularityQuantity(singularity: Singularity) {
    singularity.setQuantity(singularity.getQuantity() + 1);
    this.calculateSingularApd();
    this.calculateTotalApd();
  }

  handleRemoveSingularityQuantity(singularity: Singularity) {
    if (singularity.getQuantity() > 1) {
      singularity.setQuantity(singularity.getQuantity() - 1);
      this.calculateSingularApd();
      this.calculateTotalApd();
    } else {
      return;
    }
  }

  selectedSingularity(singularityName: string): Singularity | undefined {
    return this.singularities.getSingularityByName(singularityName);
  }

  calculateSingularApdByQuantity(singularity: Singularity): number {
    return this.singularApdService.singularApdByQuantity(singularity, this.air, this.airflow);
  }

}
