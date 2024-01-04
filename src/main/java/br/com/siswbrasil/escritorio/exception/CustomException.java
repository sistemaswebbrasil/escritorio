package br.com.siswbrasil.escritorio.exception;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.client.HttpClientErrorException;

public class CustomException extends HttpClientErrorException {	

	private static final long serialVersionUID = 1L;
	
	public CustomException(HttpStatusCode statusCode, String statusText) {
		super(statusCode, statusText);
	}
	
}
