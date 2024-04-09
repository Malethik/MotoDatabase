import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./home/list/list.component'),
  },
  {
    path: 'form',
    title: 'Adding',
    loadComponent: () => import('./home/form/form.component'),
  },
];
