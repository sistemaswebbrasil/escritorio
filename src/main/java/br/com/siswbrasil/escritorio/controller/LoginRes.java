package br.com.siswbrasil.escritorio.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginRes {

	private String email;
	private String name;
	private String token;

}