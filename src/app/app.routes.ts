import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './root-components';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: './lazy-modules/dashboard/dashboard.module#DashboardModule'
  }
];
