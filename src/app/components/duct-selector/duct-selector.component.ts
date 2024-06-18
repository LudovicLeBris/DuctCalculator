import { Component } from '@angular/core';
import { Shape } from '../../models/duct/shape.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CircularDuctSetupComponent } from '../circular-duct-setup/circular-duct-setup.component';
import { RectangularDuctSetupComponent } from '../rectangular-duct-setup/rectangular-duct-setup.component';

@Component({
  selector: 'app-duct-selector',
  standalone: true,
  imports: [
    CircularDuctSetupComponent,
    RectangularDuctSetupComponent,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  templateUrl: './duct-selector.component.html',
  styleUrl: './duct-selector.component.css'
})
export class DuctSelectorComponent {
  shapeControl = new FormControl('circular');
  shape: Shape = new Shape;


  constructor () {
    this.shape.setValue('circular');
  }

  toggleShape() {
    if (this.shape.getValue() === 'circular') {
      this.shape.setValue('rectangular');
      } else {
      this.shape.setValue('circular');
    }
  }
}
