package br.com.siswbrasil.escritorio.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class UserInfo {

	private UserInfo() {
		throw new IllegalStateException("Utility class");
	}

	public static Authentication getAuthentication() {
		return SecurityContextHolder.getContext().getAuthentication();
	}

	public static Long getPerson() {
		try {
			var detail =  SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			return 1L;
		} catch (Exception e) {
			return null;
		}
	}
	
}

