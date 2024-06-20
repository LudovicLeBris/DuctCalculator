import { Routes } from '@angular/router';
import { DuctSelectorComponent } from './components/duct-selector/duct-selector.component';
import { ApdSelectorComponent } from './components/apd-selector/apd-selector.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/duct-selector', pathMatch: 'full'
  },
  {
    path:'duct-selector',
    component: DuctSelectorComponent,
  },
  {
    path: 'apd-selector',
    component: ApdSelectorComponent,
  },
];
