import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Length } from '../../models/duct/length.model';

@Component({
  selector: 'app-length-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './length-slider.component.html',
  styleUrl: './length-slider.component.css'
})
export class LengthSliderComponent {
  length: Length;
  onLengthChange = output<Length>();
  lengthControl = new FormControl(1);

  constructor () {
    this.length = new Length();
  }

  handleChange(): void {
    this.length.setValue(this.lengthControl.value!);
    this.onLengthChange.emit(this.length);
  }

  increaseValue() {
    if (this.lengthControl.value! < 50) {
      this.lengthControl.setValue(this.lengthControl.value! + 1);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.lengthControl.value! > 10) {
      this.lengthControl.setValue(this.lengthControl.value! - 1);
      this.handleChange()
    }
  }
}