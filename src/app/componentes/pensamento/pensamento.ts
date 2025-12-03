import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { PensamentoModel } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
   @Input() pensamento!: PensamentoModel;

  larguraPensamento(){
    return this.pensamento.conteudo.length >= 256 
      ? "pensamento-g"
      : "pensamento-p";
  }
}
