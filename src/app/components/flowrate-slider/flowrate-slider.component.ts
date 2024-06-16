import { Component, output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Flowrate } from '../../models/airflow/flowrate.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-flowrate-slider',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './flowrate-slider.component.html',
  styleUrl: './flowrate-slider.component.css'
})
export class FlowrateSliderComponent {
  flowrate: Flowrate;
  onFlowrateChange = output<Flowrate>();
  flowrateControl = new FormControl(1000)
  step:number = 100;

  constructor () {
    this.flowrate = new Flowrate;
  }

  handleChange(): void {
    this.setStep(this.flowrateControl.value!);
    this.flowrate.setValue(this.flowrateControl.value!);
    this.onFlowrateChange.emit(this.flowrate);
  }

  setStep(value:number): void {
    if (value < 1000) {
      this.step = 10;
    } else if (value >= 1000 && value < 10000) {
      this.step = 100;
    } else if (value >= 10000 && value < 30000) {
      this.step = 200;
    } else if (value >= 30000) {
      this.step = 500;
    }
  }

  increaseValue() {
    if (this.flowrateControl.value! < 100000) {
      this.flowrateControl.setValue(this.flowrateControl.value! + this.step);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.flowrateControl.value! > 10) {
      this.flowrateControl.setValue(this.flowrateControl.value! - this.step);
      this.handleChange()
    }
  }
}
