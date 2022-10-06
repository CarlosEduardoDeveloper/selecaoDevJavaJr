import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tarefas } from '../model/tarefas';
import { TarefasService } from '../service/tarefas.service';

@Injectable({
  providedIn: 'root'
})
export class TarefasResolver implements Resolve<Tarefas> {

constructor(private service: TarefasService){};

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tarefas> {
    if(route.params && route.params['id']){
      return this.service.buscaPorId(route.params['id']);
    }
    return of({id: '', descricao: '', flag: ''});
  }
}
