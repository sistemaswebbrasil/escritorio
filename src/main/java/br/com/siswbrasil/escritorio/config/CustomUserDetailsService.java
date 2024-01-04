package br.com.siswbrasil.escritorio.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.siswbrasil.escritorio.entity.User;
import br.com.siswbrasil.escritorio.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findUserByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("Email not found");
		}
		CustomUserDetails userDetails = new CustomUserDetails(user);
		return userDetails;
	}

}
