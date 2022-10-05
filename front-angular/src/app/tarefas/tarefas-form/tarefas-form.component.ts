import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.scss']
})
export class TarefasFormComponent implements OnInit {

form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: TarefasService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      descricao: [null],
      atividadeConcluida: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.salvar(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){}

  private onError(){
    this.snackBar.open('Erro ao salvar atividade', '', {duration: 5000})
  }

}
