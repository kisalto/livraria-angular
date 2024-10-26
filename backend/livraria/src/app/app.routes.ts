import { Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrosListComponent } from './components/livros/livros-list/livros-list.component';
import { LivrosFormComponent } from './components/livros/livros-form/livros-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    { path: 'main', component: PrincipalComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'livros', component: LivrosListComponent},
        {path: 'livros/new', component: LivrosFormComponent}
    ]}
];