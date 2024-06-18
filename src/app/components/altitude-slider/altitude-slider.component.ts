import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Altitude } from '../../models/air/altitude.model';
import { CommonModule } from '@angular/common';
import { Air } from '../../models/air/air.model';

@Component({
  selector: 'app-altitude-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './altitude-slider.component.html',
  styleUrl: './altitude-slider.component.css'
})
export class AltitudeSliderComponent {
  air: Air;
  altitude: Altitude;
  onAltitudeChange = output<Altitude>();
  altitudeControl: FormControl;

  constructor () {
    this.air = Air.getInstance();
    this.altitudeControl = new FormControl(this.air.getAltitude().getValue());
    this.altitude = new Altitude();
  }

  handleChange(): void {
    this.altitude.setValue(this.altitudeControl.value!);
    this.air.setAltitude(this.altitude);
    this.onAltitudeChange.emit(this.altitude);
  }

  increaseValue() {
    if (this.altitudeControl.value! < 4000) {
      this.altitudeControl.setValue(this.altitudeControl.value! + 50);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.altitudeControl.value! > 0) {
      this.altitudeControl.setValue(this.altitudeControl.value! - 50);
      this.handleChange()
    }
  }
}
