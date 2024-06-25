import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Diameter, DiameterValue, normalizedDiameters } from '../../models/duct/diameter.model';
import { StorageService } from '../../services/storage.service';
import { LongPressDirective } from '../directives/long-press.directive';

@Component({
  selector: 'app-diameter-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    LongPressDirective,
  ],
  templateUrl: './diameter-slider.component.html',
  styleUrl: './diameter-slider.component.css'
})
export class DiameterSliderComponent {
  diameter: Diameter;
  diameterIndex: number = 4;
  diameters = normalizedDiameters;
  onDiameterChange = output<Diameter>();
  diameterControl = new FormControl(3);
  max: number = this.diameters.length - 1;

  constructor (
    private storageService: StorageService,
  ) {
    this.diameter = this.storageService.duct.diameter!;
    this.diameterControl.setValue(this.findDiameterIndex(this.diameter));
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

  findDiameterIndex(diameter: Diameter) {
    const index = this.diameters.findIndex(diameterSeeked => diameterSeeked === diameter.getValue());
    return index;
  }
}
