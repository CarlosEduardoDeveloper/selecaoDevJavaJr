import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Tarefas } from '../model/tarefas'
import { delay, first, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

private readonly API = 'gerenciador/listar';
private readonly APIPOST = 'gerenciador/salvar';
private readonly APIDELETE = 'gerenciador/excluir';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Tarefas[]>(this.API)
    .pipe(
      first(),
      //delay(2000),
      tap(listaDeTarefas => console.log(listaDeTarefas))
    );
  }

  buscaPorId(id: string){
    return this.httpClient.get<Tarefas>(`${this.API}/${id}`);
  }

  salvar(tarefa: Tarefas){
    return this.httpClient.post<Tarefas>(this.APIPOST, tarefa).pipe(first());
  }

  deletar(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.APIDELETE}/${id}`);
  }


}
