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
	public Role create(Role form) {
		form.setId(null);
		return repository.save(form);
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
		var role = getById(id);
		var inUse = role.getUsers().stream().filter(i -> i.getRoles().contains(role.getName())).findFirst().isPresent();
		if (inUse) {
			throw new CustomException(HttpStatus.BAD_REQUEST,
					"Registro selecionado não pode excluído,pois já está em uso");
		}
		repository.delete(role);
	}
}
