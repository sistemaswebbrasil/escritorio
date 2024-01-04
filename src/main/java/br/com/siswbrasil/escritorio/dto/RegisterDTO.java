package br.com.siswbrasil.escritorio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterDTO {

	@NotNull
	private String name;
	
	@NotNull
	@Email
	private String email;
	
	@NotNull
	@Size(min = 8 , message="{validation.password.size}")
	@Pattern(regexp = "(?=^.{8,}$)((?=.*\\d)(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$", message="{validation.password.strength}")
	private String password;

}
