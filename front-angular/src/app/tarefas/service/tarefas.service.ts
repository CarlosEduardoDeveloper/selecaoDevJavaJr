import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Tarefas } from '../model/tarefas'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

private readonly API = 'gerenciador/listar';
private readonly APIPOST = 'gerenciador/salvar';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Tarefas[]>(this.API)
    .pipe(
      first(),
      //delay(2000),
      tap(listaDeTarefas => console.log(listaDeTarefas))
    );
  }

  salvar(tarefa: Tarefas){
    return this.httpClient.post<Tarefas>(this.APIPOST, tarefa).pipe(first());
  }
}
