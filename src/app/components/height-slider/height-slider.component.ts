import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Height } from '../../models/duct/height.model';

@Component({
  selector: 'app-height-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './height-slider.component.html',
  styleUrl: './height-slider.component.css'
})
export class HeightSliderComponent {
  height: Height;
  onHeightChange = output<Height>();
  heightControl = new FormControl(200);

  constructor () {
    this.height = new Height();
  }

  handleChange(): void {
    this.height.setValue(this.heightControl.value!);
    this.onHeightChange.emit(this.height);
  }

  increaseValue() {
    if (this.heightControl.value! < 3000) {
      this.heightControl.setValue(this.heightControl.value! + 10);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.heightControl.value! > 10) {
      this.heightControl.setValue(this.heightControl.value! - 10);
      this.handleChange()
    }
  }
}
