
import { TarefasComponent } from './tarefas/tarefas.component';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasResolver } from './guards/tarefas.resolver';

const routes: Routes = [
  { path: '', component: TarefasComponent},
  { path: 'nova', component: TarefasFormComponent, resolve: {tarefas: TarefasResolver}},
  { path: 'editar/:id', component: TarefasFormComponent, resolve: {tarefas: TarefasResolver}}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class TarefasRoutingModule {}

