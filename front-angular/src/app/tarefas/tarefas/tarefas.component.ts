import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Tarefas } from './../model/tarefas';
import { TarefasService } from './../service/tarefas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {

  formGroup!: FormGroup;
  listaDeTarefas$: Observable<Tarefas[]>;
  displayedColumns = ['id', 'descricao', 'atividadeConcluida', 'acoes'];

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


  private buildForm(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      id: [null],
      descricao: [null],
      atividadeConcluida: [null]
    });
  }

}
