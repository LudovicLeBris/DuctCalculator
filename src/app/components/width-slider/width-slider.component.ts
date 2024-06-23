import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Width } from '../../models/duct/width.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-width-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './width-slider.component.html',
  styleUrl: './width-slider.component.css'
})
export class WidthSliderComponent {
  width: Width;
  onWidthChange = output<Width>();
  widthControl: FormControl;

  constructor (
    private storageService: StorageService,
  ) {
    this.width = this.storageService.duct.width!;
    this.widthControl = new FormControl(this.width.getValue());
  }

  handleChange(): void {
    this.width.setValue(this.widthControl.value!);
    this.onWidthChange.emit(this.width);
  }

  increaseValue() {
    if (this.widthControl.value! < 3000) {
      this.widthControl.setValue(this.widthControl.value! + 10);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.widthControl.value! > 10) {
      this.widthControl.setValue(this.widthControl.value! - 10);
      this.handleChange()
    }
  }
}
