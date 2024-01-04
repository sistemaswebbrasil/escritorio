package br.com.siswbrasil.escritorio.exception;

import java.util.Map;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DefaultException {

	private String message;

	private Map<String, String> errors;

	public DefaultException(String message) {
		super();
		this.message = message;
	}

	public DefaultException(String message, Map<String, String> errors) {
		super();
		this.message = message;
		this.errors = errors;
	}

}
