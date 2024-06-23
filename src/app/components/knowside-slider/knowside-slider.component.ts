import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-knowside-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './knowside-slider.component.html',
  styleUrl: './knowside-slider.component.css'
})
export class KnowsideSliderComponent {
  knownSide: number;
  onKnownSideChange = output<number>();
  knownSideControl: FormControl;

  constructor (
    private storageService: StorageService,
  ) {
    this.knownSide = this.storageService.duct.height!.getValue();
    this.knownSideControl = new FormControl(this.knownSide);
  }

  handleChange(): void {
    this.knownSide = this.knownSideControl.value!;
    this.onKnownSideChange.emit(this.knownSide);
  }

  increaseValue() {
    if (this.knownSideControl.value! < 3000) {
      this.knownSideControl.setValue(this.knownSideControl.value! + 100);
      this.handleChange()
    }
  }

  decreaseValue() {
    if (this.knownSideControl.value! > 100) {
      this.knownSideControl.setValue(this.knownSideControl.value! - 100);
      this.handleChange()
    }
  }
}
