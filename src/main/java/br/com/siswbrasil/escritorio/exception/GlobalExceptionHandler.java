package br.com.siswbrasil.escritorio.exception;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException.Forbidden;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@Autowired
	private MessageSource messageSource;	

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<DefaultException> NotFoundException(NotFoundException e) {

		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new DefaultException(HttpStatus.NOT_FOUND.getReasonPhrase()));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<DefaultException> sNotFoundException(NotFoundException e) {

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase()));
	}

	@ExceptionHandler(Forbidden.class)
	public ResponseEntity<DefaultException> ForbiddenException(Forbidden e) {

		return ResponseEntity.status(HttpStatus.FORBIDDEN)
				.body(new DefaultException(HttpStatus.FORBIDDEN.getReasonPhrase()));
	}

	@ExceptionHandler(BadRequestException.class)
	public ResponseEntity<DefaultException> BadRequestException(BadRequestException e) {

		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new DefaultException(HttpStatus.BAD_REQUEST.getReasonPhrase()));
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<DefaultException> IllegalArgumentException(IllegalArgumentException e) {

		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new DefaultException(HttpStatus.BAD_REQUEST.getReasonPhrase()));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> MethodArgumentNotValidException(MethodArgumentNotValidException e) {

		Map<String, String> errors = new HashMap<>();
		e.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});

		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new DefaultException(HttpStatus.BAD_REQUEST.getReasonPhrase(), errors));
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<DefaultException> dataIntegrityViolationException(DataIntegrityViolationException e) {
		e.printStackTrace();
		var message = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
		Throwable rootCause = ExceptionUtils.getRootCause(e.getCause());		
		if(rootCause.getMessage().substring(0,38).equalsIgnoreCase("Unique index or primary key violation:")) {
			message = messageSource.getMessage("exception.unique.violation", null, null);
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException(message));
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<DefaultException> runtimeException(RuntimeException e) {

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException(e.getMessage().toString()));
	}

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<DefaultException> customException(CustomException e) {
		var msg = e.getStatusText();
		return ResponseEntity.status(e.getStatusCode()).body(new DefaultException(msg));
	}

	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<DefaultException> badCredentialsException(BadCredentialsException e) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new DefaultException(e.getMessage().toString()));
	}

}