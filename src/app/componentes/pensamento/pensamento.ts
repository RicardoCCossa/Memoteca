import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  imports: [],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
  pensamento = {
    conteudo: "Angular",
    autoria: "Ricardo",
    modelo: "modelo3"
  }
}
