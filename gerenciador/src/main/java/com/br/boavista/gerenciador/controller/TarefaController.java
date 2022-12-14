package com.br.boavista.gerenciador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.br.boavista.gerenciador.model.Tarefa;
import com.br.boavista.gerenciador.repository.TarefaRepository;
import com.br.boavista.gerenciador.service.TarefaService;

@RestController
@RequestMapping("/gerenciador")
public class TarefaController {
	
	@Autowired
	TarefaService tarefaService;
	
	@Autowired
	TarefaRepository tarefaRepository;

	
	@GetMapping(value = "listar")
	public List<Tarefa> listar(){
		return tarefaService.listarAtividades();
	}
	
	@GetMapping("/listar/{id}")
	public ResponseEntity <Tarefa> buscaPorId(@PathVariable Long id) {
		return tarefaRepository.findById(id)
				.map(tarefa -> ResponseEntity.ok().body(tarefa))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping(value = "salvar")
	public Tarefa criar(@RequestBody Tarefa tarefa) {
		return tarefaRepository.save(tarefa);
	}
	
	@DeleteMapping("/excluir/{id}")
	@ResponseBody
	public ResponseEntity<String> excluir(@PathVariable Long id) {
		tarefaService.deletarAtividades(id);
		return new ResponseEntity<String>("User deletado com sucesso", HttpStatus.OK);
	}
	
	@PutMapping(value = "atualizar")
	@ResponseBody
	public ResponseEntity<?> editar(@RequestBody Tarefa t) {
    	if(t.getId() == null) {
    		return new ResponseEntity<String>("Id não foi informado para atualização.", HttpStatus.OK);
       	}
    	Tarefa tarefa = tarefaService.atualizarTarefas(t);
    	return new ResponseEntity<Tarefa>(tarefa, HttpStatus.OK);
	}
	
	

}
