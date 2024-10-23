import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { MainComponent } from './components/pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
];
