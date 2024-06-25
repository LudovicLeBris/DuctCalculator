import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Temperature } from '../../models/air/temperature.model';
import { Air } from '../../models/air/air.model';
import { LongPressDirective } from '../directives/long-press.directive';

@Component({
  selector: 'app-temperature-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    LongPressDirective,
  ],
  templateUrl: './temperature-slider.component.html',
  styleUrl: './temperature-slider.component.css'
})
export class TemperatureSliderComponent {
  air: Air;
  temperature: Temperature;
  onTemperatureChange = output<Temperature>();
  temperatureControl: FormControl;

  constructor () {
    this.air = Air.getInstance();
    this.temperatureControl = new FormControl(this.air.getTemperature().getValue());
    this.temperature = new Temperature();
  }

  handleChange(): void {
    this.temperature.setValue(this.temperatureControl.value!);
    this.air.setTemperature(this.temperature);
    this.onTemperatureChange.emit(this.temperature);
  }

  increaseValue() {
    if (this.temperatureControl.value! < 60) {
      this.temperatureControl.setValue(this.temperatureControl.value! + 0.5);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.temperatureControl.value! > -40) {
      this.temperatureControl.setValue(this.temperatureControl.value! - 0.5);
      this.handleChange()
    }
  }
}
