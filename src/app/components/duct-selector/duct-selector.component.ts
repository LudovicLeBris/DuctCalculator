import { Component, OnInit } from '@angular/core';
import { Shape } from '../../models/duct/shape.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CircularDuctSetupComponent } from '../circular-duct-setup/circular-duct-setup.component';
import { RectangularDuctSetupComponent } from '../rectangular-duct-setup/rectangular-duct-setup.component';
import { StorageService } from '../../services/storage.service';
import { CircularDuct, Duct, RectangularDuct } from '../../models/duct/duct.model';

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
export class DuctSelectorComponent implements OnInit {
  shapeControl: FormControl;
  shape: Shape = new Shape;
  duct: Duct;


  constructor (
    private storageService: StorageService
  ) {
    this.duct = this.storageService.duct;
    this.shapeControl = new FormControl(this.duct.shape.getValue());
  }

  ngOnInit(): void {
    this.shape = this.duct.shape;
    this.duct.length.setValue(1);
  }

  toggleShape() {
    if (this.shape.getValue() === 'circular') {
      this.shape.setValue('rectangular');
      } else {
      this.shape.setValue('circular');
    }
    this.setNewDuct(this.shape);
  }

  setNewDuct(shape: Shape): void {
    if (shape.getValue() === 'circular') {
      this.duct = new CircularDuct();
      this.duct.length.setValue(1);
    } else if (shape.getValue() === 'rectangular') {
      this.duct = new RectangularDuct();
      this.duct.length.setValue(1);
      this.duct.ratio!.setValue(1);
    }
    this.storageService.setDuct(this.duct);
  }
}
