import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';



@NgModule({
  declarations: [
    TarefasComponent,
    TarefasFormComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    AppMaterialModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class TarefasModule { }
