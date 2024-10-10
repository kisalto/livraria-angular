import { Component } from '@angular/core';
import { Livro } from '../../../models/livro';

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [],
  templateUrl: './livros-list.component.html',
  styleUrl: './livros-list.component.css'
})

export class LivrosListComponent {
  livros: Livro[] = [];

  constructor() { this.findAll() }

  findAll() {
    let livro1 = { id: 1, titulo: 'A Study in Scarlet', autor: 'Sir Arthur Connan Doyle' }
    let livro2 = { id: 2, titulo: '813', autor: 'Maurice Leblanc' }
    let livro3 = { id: 3, titulo: 'The Return of Moriarty', autor: 'John Gardner' }

    this.livros.push(livro1, livro2, livro3);
  }

}
