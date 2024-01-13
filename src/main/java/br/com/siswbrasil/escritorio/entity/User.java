package br.com.siswbrasil.escritorio.entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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

	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public User(String email, String password, String name) {
		this.email = email;
		this.password = password;
		this.name = name;
	}
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> permissions = new HashSet<>();	

	@JsonIgnore
	@Transient	
	private List<GrantedAuthority> authorities = new ArrayList<>();

	@Transient
	private List<String> roles;

	public List<String> getRoles() {
		if (!permissions.isEmpty()) {		
			return permissions.stream().map(i -> i.getName().toUpperCase()).collect(Collectors.toList());			
		}
		return roles;
	}

	public List<GrantedAuthority> getAuthorities() {
		if (!permissions.isEmpty()) {		
			return permissions.stream().map(i -> new SimpleGrantedAuthority(i.getName().toUpperCase())).collect(Collectors.toList());			
		}
		return authorities;
	}

}
