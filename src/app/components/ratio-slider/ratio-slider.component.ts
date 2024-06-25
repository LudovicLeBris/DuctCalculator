import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Ratio } from '../../models/duct/ratio.model';
import { StorageService } from '../../services/storage.service';
import { LongPressDirective } from '../directives/long-press.directive';

@Component({
  selector: 'app-ratio-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    LongPressDirective,
  ],
  templateUrl: './ratio-slider.component.html',
  styleUrl: './ratio-slider.component.css'
})
export class RatioSliderComponent {
  ratio: Ratio;
  onRatioChange = output<number>();
  ratioControl: FormControl;

  constructor (
    private storageService: StorageService,
  ) {
    this.ratio = this.storageService.duct.ratio!;
    this.ratioControl = new FormControl(this.ratio.getValue());
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
