import { Routes } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { LivrosListComponent } from './components/livros/livros-list/livros-list.component';

export const routes: Routes = [
    { path: 'main', component: PrincipalComponent, children: [
        {path: '', component: TopbarComponent, outlet: 'topbar'},
        {path: '', component: DashboardComponent, outlet: 'dashboard'},
        {path: '', component: LoginComponent, outlet: 'login'},
        {path: '', component: LivrosListComponent, outlet: 'livros-list'}
    ]},
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];