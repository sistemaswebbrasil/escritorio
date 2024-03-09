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
import org.springframework.web.servlet.resource.NoResourceFoundException;

import jakarta.validation.UnexpectedTypeException;
import lombok.extern.log4j.Log4j2;

@Log4j2
@ControllerAdvice
public class GlobalExceptionHandler {

	@Autowired
	private MessageSource messageSource;

	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<DefaultException> NotFoundException(NotFoundException e) {
		log.error(e);

		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new DefaultException(HttpStatus.NOT_FOUND.getReasonPhrase()));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<DefaultException> sNotFoundException(NotFoundException e) {
		log.error(e);

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase()));
	}

	@ExceptionHandler(Forbidden.class)
	public ResponseEntity<DefaultException> ForbiddenException(Forbidden e) {
		log.error(e);

		return ResponseEntity.status(HttpStatus.FORBIDDEN)
				.body(new DefaultException(HttpStatus.FORBIDDEN.getReasonPhrase()));
	}

	@ExceptionHandler(BadRequestException.class)
	public ResponseEntity<DefaultException> BadRequestException(BadRequestException e) {
		log.error("erro 1");
		log.error(e);
		

		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new DefaultException(HttpStatus.BAD_REQUEST.getReasonPhrase()));
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<DefaultException> IllegalArgumentException(IllegalArgumentException e) {
		log.error("erro 2");
		log.error(e);

		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(new DefaultException(HttpStatus.BAD_REQUEST.getReasonPhrase()));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> MethodArgumentNotValidException(MethodArgumentNotValidException e) {
		log.error("erro 3");
		log.error(e);

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
		log.error("erro 4");
		log.error(e);
		var message = HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase();
		Throwable rootCause = ExceptionUtils.getRootCause(e.getCause());
		if (rootCause.getMessage().substring(0, 38).equalsIgnoreCase("Unique index or primary key violation:")) {
			message = messageSource.getMessage("exception.unique.violation", null, null);
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new DefaultException(message));
	}

	@ExceptionHandler(NoResourceFoundException.class)
	public ResponseEntity<DefaultException> IllegalStateException(NoResourceFoundException e) {
		log.error("erro 5");
		log.error(e);

		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new DefaultException(HttpStatus.NOT_FOUND.getReasonPhrase()));
	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<DefaultException> runtimeException(RuntimeException e) {
		log.error("erro 6");
		log.error(e);
		e.printStackTrace();

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException(e.getMessage().toString()));
	}
	
	@ExceptionHandler(UnexpectedTypeException.class)
	public ResponseEntity<DefaultException> UnexpectedTypeException(UnexpectedTypeException e) {
		log.error("erro 6.1");
		log.error(e);
		e.printStackTrace();

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body(new DefaultException("Erro interno,favor tentar mais tarde"));
	}	

	@ExceptionHandler(CustomException.class)
	public ResponseEntity<DefaultException> customException(CustomException e) {
		log.error(e);
		var msg = e.getStatusText();
		return ResponseEntity.status(e.getStatusCode()).body(new DefaultException(msg));
	}

	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<DefaultException> badCredentialsException(BadCredentialsException e) {
		log.error(e);
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new DefaultException(e.getMessage().toString()));
	}

}