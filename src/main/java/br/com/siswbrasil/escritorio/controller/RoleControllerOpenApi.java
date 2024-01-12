package br.com.siswbrasil.escritorio.controller;

import java.util.List;

import br.com.siswbrasil.escritorio.entity.Role;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

public interface RoleControllerOpenApi {

	@Operation(security = { @SecurityRequirement(name = "bearer-key") })
	List<Role> list();

	@Operation(security = { @SecurityRequirement(name = "bearer-key") })
	Role getById(Long id);

	@Operation(security = { @SecurityRequirement(name = "bearer-key") })
	void create(Role form);

	@Operation(security = { @SecurityRequirement(name = "bearer-key") })
	Role update(Long id, Role form);

	@Operation(security = { @SecurityRequirement(name = "bearer-key") })
	void deleteById(Long id);

}