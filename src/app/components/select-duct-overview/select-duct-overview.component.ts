import { Component, Inject } from '@angular/core';
import { Duct } from '../../models/duct/duct.model';
import { StorageService } from '../../services/storage.service';
import { Airflow } from '../../models/airflow/airflow.model';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-duct-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './select-duct-overview.component.html',
  styleUrl: './select-duct-overview.component.css'
})
export class SelectDuctOverviewComponent {
  duct: Duct;
  airflow: Airflow;

  constructor (
    private bottomSheet: MatBottomSheet,
    private storageService: StorageService,
    private router: Router,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {duct: Duct, airflow: Airflow}
  ) {
      this.duct = data.duct!;
      this.airflow = data.airflow!;
  }

  goToApdSelector() {
    this.bottomSheet.dismiss()
    this.storageService.setDuct(this.duct);
    this.storageService.setAirflow(this.airflow);
    this.router.navigate(['apd-selector']);
  }

  goBack() {
    this.bottomSheet.dismiss();
  }
}
