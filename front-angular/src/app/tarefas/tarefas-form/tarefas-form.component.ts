import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Tarefas } from '../model/tarefas';
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
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      id: [''],
      descricao: [''],
      atividadeConcluida: ['']
    })
  }

  ngOnInit(): void {
    const tarefas : Tarefas = this.route.snapshot.data['tarefas'];
    this.form.setValue({
      id: tarefas.id,
      descricao: tarefas.descricao,
      atividadeConcluida: tarefas.atividadeConcluida
    })
    console.log(tarefas);
  }

  onSubmit(){
    this.service.salvar(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Atividade salva com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar atividade.', '', {duration: 5000});
  }


}
