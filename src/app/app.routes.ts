import { Routes } from '@angular/router';
import { HomeComponent } from './features/component/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    }
];
