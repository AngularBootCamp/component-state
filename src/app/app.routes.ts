import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'do', pathMatch: 'full' },
  {
    path: 'do',
    loadComponent: () => import('./do/do.component')
  },
  {
    path: 'dont',
    loadComponent: () => import('./dont/dont.component')
  }
];
