package br.com.siswbrasil.escritorio.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.com.siswbrasil.escritorio.entity.Role;
import br.com.siswbrasil.escritorio.exception.CustomException;
import br.com.siswbrasil.escritorio.repository.RoleRepository;
import jakarta.transaction.Transactional;

@Service
public class RoleService {

	@Autowired
	private RoleRepository repository;

	@Transactional
	public Role create(Role role) {
		return repository.save(role);
	}

	public Role getById(Long id) {
		return repository.findById(id).orElseThrow(() -> new CustomException(HttpStatus.NOT_FOUND, "Not Found"));
	}

	@Transactional
	public Role update(Long id, Role role) {
		var roleDb = getById(id);

		BeanUtils.copyProperties(role, roleDb, "updateAt", "createAt");
		return repository.save(roleDb);
	}

	@Transactional
	public void deleteById(Long id) {
		getById(id);
		repository.deleteById(id);
	}
}
