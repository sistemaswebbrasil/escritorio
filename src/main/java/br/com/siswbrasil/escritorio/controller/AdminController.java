package br.com.siswbrasil.escritorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.siswbrasil.escritorio.entity.User;
import br.com.siswbrasil.escritorio.repository.UserRepository;

@RestController
@RequestMapping(path = "/api/admin")
public class AdminController {
	
	@Autowired
	private UserRepository repository;

	@PreAuthorize("hasRole('ADMIN')")
//	@PostAuthorize("hasRole('ADMIN') or hasRole('ROLE_ADMIN')")
	@GetMapping("/users")
	public List<User> list() {
		return repository.findAll();
	}

}
