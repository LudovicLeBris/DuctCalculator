import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Flowspeed } from '../../models/airflow/flowspeed.model';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-flowspeed-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './flowspeed-slider.component.html',
  styleUrl: './flowspeed-slider.component.css'
})
export class FlowspeedSliderComponent {
  flowspeed: Flowspeed;
  onFlowspeedChange = output<Flowspeed>();
  flowspeedControl: FormControl;

  constructor (
    private storageService: StorageService,
  ) {
    this.flowspeed = this.storageService.airflow.flowspeed;
    this.flowspeedControl = new FormControl(this.flowspeed.getValue());
  }

  handleChange(): void {
    this.flowspeed.setValue(this.flowspeedControl.value!);
    this.onFlowspeedChange.emit(this.flowspeed);
  }

  increaseValue() {
    if (this.flowspeedControl.value! < 15) {
      this.flowspeedControl.setValue(this.flowspeedControl.value! + 0.1);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.flowspeedControl.value! > 0.1) {
      this.flowspeedControl.setValue(this.flowspeedControl.value! - 0.1);
      this.handleChange()
    }
  }
}
