import { Component, DoCheck, Injector, OnInit, Signal, effect, signal } from '@angular/core';
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
import { Router } from '@angular/router';
import { AdditionalApdList } from '../../models/apd/additionals-apd-list.modes';
import { AdditionalApd } from '../../models/apd/additional-apd.model';
import { AdditionalApdFormComponent } from '../additional-apd-form/additional-apd-form.component';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';

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
    AdditionalApdFormComponent,
    MatBottomSheetModule,
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
  additionalApdList: AdditionalApdList;

  constructor (
    private airSetupService: AirSetupService,
    private storageService: StorageService,
    private linearApdCalculationService: LinearApdCalculationService,
    private singularApdService: SingularApdService,
    private _bottonSheet: MatBottomSheet,
    private router: Router,
  )
  {
    this.duct = this.storageService.duct;
    this.airflow = this.storageService.airflow;
    this.apd = this.storageService.apd;
    this.singularities = this.storageService.singularities;
    this.additionalApdList = this.storageService.additionalApdList;
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
    this.calculateAdditionalApd();
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

  calculateAdditionalApd(): void {
    const additionalApd = this.additionalApdList.getTotalAdditionalApdValue();
    this.apd.additionalApd.setValue(additionalApd);
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

  openAddAdditionalApdBottomSheet(): void {
    const _bottomSheetRef = this._bottonSheet.open(AdditionalApdFormComponent, {
      data : undefined,
    })
    _bottomSheetRef.afterDismissed().subscribe(data => {
      if (data) {
        this.additionalApdList.addAdditionalApd(data);
        this.calculateAdditionalApd();
        this.calculateTotalApd();
      }
    });
  }

  openEditAdditionalApdBottomSheet(index : number): void {
    console.log(index);
    const _bottomSheetRef = this._bottonSheet.open(AdditionalApdFormComponent, {
      data : {additionalApd : this.additionalApdList.getAdditionalApdList()[index]},
    })
    _bottomSheetRef.afterDismissed().subscribe(data => {
      if (data) {
        this.additionalApdList.updateAdditionalApd(index, data);
        this.calculateAdditionalApd();
        this.calculateTotalApd();
      }
    });
  }

  removeAdditionalApd(additionalApd : AdditionalApd): void {
    this.additionalApdList.removeAdditionalApd(additionalApd);
    this.calculateAdditionalApd();
    this.calculateTotalApd();
  }

}
