package br.com.siswbrasil.escritorio.entity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USERS")
public class User {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	@Email
	@Column(name = "EMAIL", unique = true)
	private String email;

	@JsonIgnore
	@NotNull
	@Column(name = "PASSWORD")
	private String password;

	@NotEmpty
	@Column(name = "NAME")
	private String name;

	@JsonIgnore
	@Column(name = "ROLE")
	private String role;

	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public User(String email, String password, String name, String role) {
		this.email = email;
		this.password = password;
		this.name = name;
		this.role = role;
	}

	@Transient
	@JsonIgnore
	private List<GrantedAuthority> authorities = new ArrayList<>();

	@Transient
	private List<String> roles;

	public List<String> getRoles() {
		if (StringUtils.hasText(role)) {
			return Collections.singletonList(role);
		}
		return roles;
	}

	public List<GrantedAuthority> getAuthorities() {
		if (StringUtils.hasText(role)) {
			return Collections.singletonList(new SimpleGrantedAuthority(role));
		}
		return authorities;
	}

}
