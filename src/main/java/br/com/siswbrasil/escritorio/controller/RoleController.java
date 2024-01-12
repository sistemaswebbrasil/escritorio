package br.com.siswbrasil.escritorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.siswbrasil.escritorio.entity.Role;
import br.com.siswbrasil.escritorio.repository.RoleRepository;
import br.com.siswbrasil.escritorio.service.RoleService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/api/roles")
public class RoleController implements RoleControllerOpenApi {

	@Autowired
	private RoleRepository repository;

	@Autowired
	private RoleService service;

	@Override
	@GetMapping
	public List<Role> list() {
		return repository.findAll();
	}

	@Override
	@GetMapping("{id}")
	public Role getById(@PathVariable Long id) {
		return service.getById(id);
	}

	@Override
	@PostMapping
	public void create(@RequestBody @Valid Role form) {
		service.create(form);
	}

	@Override
	@PutMapping("/{id}")
	public Role update(@PathVariable Long id, @RequestBody @Valid Role form) {
		return service.update(id, form);
	}

	@Override
	@DeleteMapping("/{id}")
	public void deleteById(Long id) {
		service.deleteById(id);
	}

}
