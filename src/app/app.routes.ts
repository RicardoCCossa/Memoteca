import { Routes } from '@angular/router';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { ListarPensamento } from './componentes/listar-pensamento/listar-pensamento';

export const routes: Routes = [
  {
    path: '', redirectTo: 'criarPensamento', pathMatch: 'full'
  },
  {
    path: 'criarPensamento', component: CriarPensamento
  },
  {
    path: 'listarPensamento', component: ListarPensamento
  }
];
 