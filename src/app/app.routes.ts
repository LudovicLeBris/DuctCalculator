import { Routes } from '@angular/router';
import { DuctSelectorComponent } from './components/duct-selector/duct-selector.component';
import { ApdSelectorComponent } from './components/apd-selector/apd-selector.component';
import { ResultsOverviewComponent } from './components/results-overview/results-overview.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  {
    path: 'results-overview',
    component: ResultsOverviewComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**', pathMatch: 'full',
    component: NotFoundComponent,
  }
];
