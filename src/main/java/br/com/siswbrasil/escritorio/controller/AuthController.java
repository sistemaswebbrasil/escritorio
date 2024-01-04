package br.com.siswbrasil.escritorio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.siswbrasil.escritorio.config.CustomUserDetails;
import br.com.siswbrasil.escritorio.dto.RegisterDTO;
import br.com.siswbrasil.escritorio.entity.User;
import br.com.siswbrasil.escritorio.repository.UserRepository;
import br.com.siswbrasil.escritorio.service.UserService;
import br.com.siswbrasil.escritorio.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository repository;

	@PostMapping("/token")
	public CustomUserDetails token(@Valid @RequestBody LoginReq loginReq) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
		var user = (CustomUserDetails) authentication.getPrincipal();

		String token = jwtUtil.createToken(user);
		user.setToken(token);

		return user;

	}

	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@GetMapping("/profile")
	public User profile(HttpServletRequest req) {
		var clains = jwtUtil.resolveClaims(req);
		String email = (String) clains.get("email");
		return userService.getUserByEmail(email);
	}

	@PostMapping("/register")
	public User create(@RequestBody @Valid RegisterDTO form) {
		return userService.createUser(form);
	}

	@GetMapping
	public List<User> list() {
		return repository.findAll();
	}

}
