import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Diameter, normalizedDiameters } from '../../models/duct/diameter.model';

@Component({
  selector: 'app-diameter-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './diameter-slider.component.html',
  styleUrl: './diameter-slider.component.css'
})
export class DiameterSliderComponent {
  diameter: Diameter;
  diameterIndex: number = 4;
  diameters = normalizedDiameters;
  onDiameterChange = output<Diameter>();
  diameterControl = new FormControl(4);
  max: number = this.diameters.length - 1;

  constructor () {
    this.diameter = new Diameter;
  }

  handleChange(): void {
    this.diameter.setValue(this.diameters[this.diameterControl.value!]);
    this.onDiameterChange.emit(this.diameter);
  }

  increaseValue() {
    if (this.diameterControl.value! < this.max) {
      this.diameterControl.setValue(this.diameterControl.value! + 1);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.diameterControl.value! > 0) {
      this.diameterControl.setValue(this.diameterControl.value! - 1);
      this.handleChange()
    }
  }
}
