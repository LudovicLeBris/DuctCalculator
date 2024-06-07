import { Routes } from '@angular/router';
import { DuctSelectorComponent } from './duct/duct-selector/duct-selector.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/duct-selector', pathMatch: 'full'
  },
  {
    path:'duct-selector',
    component: DuctSelectorComponent,
  },
];
