import { ResolveFn, Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';

export const routes: Routes = [
    {path: 'app', title: 'header', component: HeaderComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
    ]},
    {path: '', redirectTo: '/app', pathMatch: 'full'}
];