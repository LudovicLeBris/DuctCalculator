import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Duct } from '../../models/duct/duct.model';
import { Air } from '../../models/air/air.model';
import { Airflow } from '../../models/airflow/airflow.model';
import { Singularities } from '../../models/singularity/singularities.model';
import { Apd } from '../../models/apd/apd.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './results-overview.component.html',
  styleUrl: './results-overview.component.css'
})
export class ResultsOverviewComponent {
  air = Air.getInstance();
  duct: Duct;
  airflow: Airflow;
  singularities: Singularities;
  apd: Apd;

  constructor (
    private storageService: StorageService,
    private router: Router,
  ) {
    this.duct = this.storageService.duct;
    this.airflow = this.storageService.airflow;
    this.singularities = this.storageService.singularities;
    this.apd = this.storageService.apd;
  }

  goBack(): void {
    this.router.navigate(['apd-selector']);
  }
}
