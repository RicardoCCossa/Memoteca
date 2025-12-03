import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Pensamento } from "../pensamento/pensamento";
import { Service } from '../servive/service';

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento {
  listarPensamento: Pensamento[] = [];

  constructor(private service: Service) {}

  ngOnInit() {
this.service.listar();
}
}
