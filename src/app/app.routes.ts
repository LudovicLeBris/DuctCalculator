import { Routes } from '@angular/router';
import { DuctSelectorComponent } from './components/duct-selector/duct-selector.component';
import { AirSetupComponent } from './components/air-setup/air-setup.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/duct-selector', pathMatch: 'full'
  },
  {
    path:'duct-selector',
    component: DuctSelectorComponent,
  },
  {
    path: 'air-setup',
    component: AirSetupComponent,
  }
];
