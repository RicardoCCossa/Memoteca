import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Pensamento } from '../pensamento/pensamento';

@Injectable({
  providedIn: 'root',
})
export class Service {

  private readonly API = "http://localhost:3000/pensamentos";

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }
}
