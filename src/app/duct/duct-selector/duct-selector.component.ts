import { Component } from '@angular/core';
import { DuctSetupComponent } from '../duct-setup/duct-setup.component';

@Component({
  selector: 'app-duct-selector',
  standalone: true,
  imports: [
    DuctSetupComponent,
  ],
  templateUrl: './duct-selector.component.html',
  styleUrl: './duct-selector.component.css'
})
export class DuctSelectorComponent {

}
