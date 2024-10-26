import { Component } from '@angular/core';
import { Livro } from '../../../models/livro';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livros-list',
  standalone: true,
  imports: [RouterLink],
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

  deleteById(livro: Livro) {

    Swal.fire({
      title: "tem certeza que deseja deletar o livro " + livro.titulo + "?",
      showCancelButton: true,
      confirmButtonText: "sim",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.livros.findIndex(x => {return x.id == livro.id})
        this.livros.splice(indice,1)
        Swal.fire("deletado com sucesso", "", "success")
      }

    })

  }

}
