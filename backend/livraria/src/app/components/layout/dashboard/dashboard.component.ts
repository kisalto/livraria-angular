import { Component } from '@angular/core';
import { LivrosListComponent } from '../../livros/livros-list/livros-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LivrosListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
