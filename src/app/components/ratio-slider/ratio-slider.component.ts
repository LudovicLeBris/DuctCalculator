import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Ratio } from '../../models/duct/ratio.model';

@Component({
  selector: 'app-ratio-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './ratio-slider.component.html',
  styleUrl: './ratio-slider.component.css'
})
export class RatioSliderComponent {
  ratio: Ratio;
  onRatioChange = output<number>();
  ratioControl = new FormControl(1);

  constructor () {
    this.ratio = new Ratio;
  }

  handleChange(): void {
    this.ratio.setValue(this.ratioControl.value!);
    this.onRatioChange.emit(this.ratio.getValue());
  }

  increaseValue() {
    if (this.ratioControl.value! < 10) {
      this.ratioControl.setValue(this.ratioControl.value! + 0.1);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.ratioControl.value! > 1) {
      this.ratioControl.setValue(this.ratioControl.value! - 0.1);
      this.handleChange()
    }
  }
}
