import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PensamentoModel } from '../../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

    pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento() {
    alert("Salvando")
  }

  cancelarPensamento() {
    alert("Cancelar")
  }
}
