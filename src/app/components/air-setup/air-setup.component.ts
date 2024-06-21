import { Component } from '@angular/core';
import { Air } from '../../models/air/air.model';
import { CommonModule } from '@angular/common';
import { AltitudeSliderComponent } from '../altitude-slider/altitude-slider.component';
import { TemperatureSliderComponent } from '../temperature-slider/temperature-slider.component';
import { Altitude } from '../../models/air/altitude.model';
import { Temperature } from '../../models/air/temperature.model';
import { AirSetupService } from '../../services/air-setup.service';

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

  constructor (
    private airSetupService: AirSetupService,
  ) {
    this.air = Air.getInstance();
  }

  handleAltitudeChange($event: Altitude):void {
    this.air.setAltitude($event);
    this.airSetupService.setAir(this.air);
  }

  handleTemperatureChange($event: Temperature): void {
    this.air.setTemperature($event)
    this.airSetupService.setAir(this.air);
  }
}
