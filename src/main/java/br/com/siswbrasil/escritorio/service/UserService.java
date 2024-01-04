package br.com.siswbrasil.escritorio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.siswbrasil.escritorio.dto.RegisterDTO;
import br.com.siswbrasil.escritorio.entity.User;
import br.com.siswbrasil.escritorio.exception.CustomException;
import br.com.siswbrasil.escritorio.repository.UserRepository;
import jakarta.validation.Valid;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private MessageSource messageSource;

	public User getUserByEmail(String email) {
		return userRepository.findUserByEmail(email);
	}

	public User createUser(@Valid RegisterDTO form) {

		if (getUserByEmail(form.getEmail()) != null) {
			var message = messageSource.getMessage("validation.email.uique", null, null);
			throw new CustomException(HttpStatus.BAD_REQUEST, message);
		}
		;

		User user = new User();
		user.setEmail(form.getEmail());
		user.setName(form.getName());
		user.setRole("USER");

		String password = form.getPassword();
		String encodedPassword = bCryptPasswordEncoder.encode(password);
		System.out.println("encoded password : " + encodedPassword);
		user.setPassword(encodedPassword);
		return userRepository.save(user);
	}
}
