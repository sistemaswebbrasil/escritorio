package br.com.siswbrasil.escritorio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.siswbrasil.escritorio.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
