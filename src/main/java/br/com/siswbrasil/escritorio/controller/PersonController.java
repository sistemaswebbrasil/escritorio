package br.com.siswbrasil.escritorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.siswbrasil.escritorio.entity.Person;
import br.com.siswbrasil.escritorio.repository.PersonRepository;
import br.com.siswbrasil.escritorio.service.PersonService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/api/persons")
public class PersonController {

	@Autowired
	private PersonRepository repository;

	@Autowired
	private PersonService service;

	@GetMapping
	public List<Person> list() {
		return repository.findAll();
	}

	@GetMapping("{id}")
	public Person findById(@PathVariable @NonNull Long id) {
		return service.findById(id);
	}

	@PostMapping
	public void create(@RequestBody @Valid Person form) {
		System.out.println(form);
		service.create(form);
	}

	@PutMapping("/{id}")
	public Person update(@PathVariable Long id, @RequestBody @Valid Person form) {
		return service.update(id, form);
	}

	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id) {
		service.deleteById(id);
	}

}
