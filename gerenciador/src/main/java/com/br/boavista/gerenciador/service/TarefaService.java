package com.br.boavista.gerenciador.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.br.boavista.gerenciador.model.Tarefa;
import com.br.boavista.gerenciador.repository.TarefaRepository;

@Service
public class TarefaService {
	
	@Autowired
	TarefaRepository tarefaRepository;
	
	public List<Tarefa> listarAtividades() {
		return tarefaRepository.findAll();
	}

	public Tarefa salvarAtividades(Tarefa tarefa) {
		return tarefaRepository.save(tarefa);
	}
	
	public void deletarAtividades(Long id) {
		tarefaRepository.deleteById(id);
	}

	public Tarefa buscarPorId(Long id) {
		return tarefaRepository.findById(id).get(); 	
	}
	
	public Tarefa atualizarTarefas(Tarefa tarefa) {
		return tarefaRepository.saveAndFlush(tarefa);
	}
	

}
