package br.com.siswbrasil.escritorio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.siswbrasil.escritorio.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.email = :email")
	User findUserByEmail(@Param("email") String email);

}
