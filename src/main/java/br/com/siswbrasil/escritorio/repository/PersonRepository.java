package br.com.siswbrasil.escritorio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.siswbrasil.escritorio.entity.Person;
import br.com.siswbrasil.escritorio.entity.User;

public interface PersonRepository extends JpaRepository<Person, Long> {

}
