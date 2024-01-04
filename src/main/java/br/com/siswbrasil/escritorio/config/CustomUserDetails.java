package br.com.siswbrasil.escritorio.config;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@JsonIgnoreProperties(value = "authorities")
public class CustomUserDetails extends User {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String email;

	@Setter
	private String token;

	private List<String> roles;

	public CustomUserDetails(String username, String password, Collection<? extends GrantedAuthority> authorities) {
		super(username, password, authorities);
	}

	public CustomUserDetails(br.com.siswbrasil.escritorio.entity.User user) {
		super(user.getEmail(), user.getPassword(), user.getAuthorities());
		this.id = user.getId();
		this.name = user.getName();
		this.email = user.getEmail();
		this.roles = user.getRoles();
	}

}
