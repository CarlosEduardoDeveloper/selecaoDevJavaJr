import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Tarefas } from './../model/tarefas';
import { TarefasService } from './../service/tarefas.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  formGroup!: FormGroup;
  listaDeTarefas$: Observable<Tarefas[]>;
  displayedColumns = ['id', 'descricao', 'flag', 'acoes'];

  constructor(
    private formBuilder: FormBuilder,
    private tarefasService: TarefasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.listaDeTarefas$ = this.tarefasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar tarefas.');
        return of([])
      })
    ) ;
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['nova'], {relativeTo: this.route});
  }


  onEdit(element: Tarefas){
    this.router.navigate(['editar', element.id], {relativeTo: this.route});
  }

  onDelete(id: string){
    this.tarefasService.deletar(id).subscribe(
      data => {
        console.log(data);
      }
    )
    location.reload();
  }

  private buildForm(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      id: [null],
      descricao: [null],
      flag: [null]
    });
  }

}
