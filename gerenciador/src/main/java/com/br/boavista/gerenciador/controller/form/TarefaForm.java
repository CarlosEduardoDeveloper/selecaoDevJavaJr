package com.br.boavista.gerenciador.controller.form;

import com.br.boavista.gerenciador.model.Tarefa;

public class TarefaForm {
	
	private Long id;
	
	private String descricao;
	
	private Boolean atividadeConcluida = true;
	
	public Tarefa toModel() {
		Tarefa gerenciamento = new Tarefa();
		gerenciamento.setDescricao(descricao);
		gerenciamento.setAtividadeConcluida(atividadeConcluida);
		return gerenciamento;
	}

}
