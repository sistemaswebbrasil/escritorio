package br.com.siswbrasil.escritorio.util;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import br.com.siswbrasil.escritorio.exception.CustomException;
import io.jsonwebtoken.Claims;

public class UserInfo {

	private UserInfo() {
		throw new IllegalStateException("Utility class");
	}

	public static Authentication getAuthentication() {
		return SecurityContextHolder.getContext().getAuthentication();
	}

	public static Long getPersonId() {
		try {	
			Claims clain =   (Claims) SecurityContextHolder.getContext().getAuthentication().getCredentials();
			if(clain.get("id") instanceof Integer id ) {
				return Long.valueOf(id);
			}
			else if(clain.get("id") instanceof Long id ) {
				return id;
			} else {
				throw new CustomException(HttpStatus.UNAUTHORIZED, "Token inválido");
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new CustomException(HttpStatus.UNAUTHORIZED, "Token inválido");  
		}
	}
	
}

