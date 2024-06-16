import { Component } from '@angular/core';
import { Air } from '../../models/air/air.model';
import { CommonModule } from '@angular/common';
import { AltitudeSliderComponent } from '../altitude-slider/altitude-slider.component';
import { TemperatureSliderComponent } from '../temperature-slider/temperature-slider.component';
import { Altitude } from '../../models/air/altitude.model';
import { Temperature } from '../../models/air/temperature.model';

@Component({
  selector: 'app-air-setup',
  standalone: true,
  imports: [
    CommonModule,
    AltitudeSliderComponent,
    TemperatureSliderComponent,
  ],
  templateUrl: './air-setup.component.html',
  styleUrl: './air-setup.component.css'
})
export class AirSetupComponent {
  air: Air;

  constructor () {
    this.air = Air.getInstance();
  }

  handleAltitudeChange($event: Altitude):void {
    this.air.setAltitude($event);
  }

  handleTemperatureChange($event: Temperature): void {
    this.air.setTemperature($event)
  }
}
