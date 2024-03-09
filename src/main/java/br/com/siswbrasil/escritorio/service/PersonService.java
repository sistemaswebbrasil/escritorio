package br.com.siswbrasil.escritorio.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import br.com.siswbrasil.escritorio.entity.Person;
import br.com.siswbrasil.escritorio.exception.CustomException;
import br.com.siswbrasil.escritorio.repository.PersonRepository;
import jakarta.transaction.Transactional;

@Service
public class PersonService {

	@Autowired
	private PersonRepository repository;

	public Person findById(@NonNull Long id) {
		return repository.findById(id).orElseThrow(() -> new CustomException(HttpStatus.NOT_FOUND, "Person not found"));
	}

	@Transactional
	public Person create(@NonNull Person form) {
		try {
			form.setId(null);
			return repository.save(form);			
		} catch (Exception e) {
			e.printStackTrace();
			throw new CustomException(HttpStatus.INTERNAL_SERVER_ERROR, "Falha ao criar nova Pessoa");
		}

	}

	@Transactional
	public Person update(@NonNull Long id, @NonNull Person form) {
		var entity = findById(id);
		BeanUtils.copyProperties(form, entity, "id", "updateAt", "createAt", "idUserInsert");
		return repository.save(form);
	}

	@Transactional
	public void deleteById(@NonNull Long id) {
		var role = findById(id);
		repository.delete(role);
	}

}
