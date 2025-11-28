import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listarPensamento = [
    {
    conteudo: "Comunicacao entre componentes",
    autoria: "Ricardo Cossa",
    modelo: "modelo2"
  },
  {
            conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
            autoria: '',
            modelo: 'modelo1'
        },
  ];
}
