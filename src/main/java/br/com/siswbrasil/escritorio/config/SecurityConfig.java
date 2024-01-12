package br.com.siswbrasil.escritorio.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

	@Autowired
	private CustomUserDetailsService userDetailsService;

	@Autowired
	private JwtAuthorizationFilter jwtAuthorizationFilter;

	private static final String[] AUTH_WHITELIST = {
			// @formatter:off
			"/", 
			"/admin", 
			"/admin/", 
			"/admin/**", 
			"/assets/**", 
			"/js/**",
			"/css/**", 
			"/img/**", 
			"/fonts/**", 
			"/favicon.ico",
			"/favicon.png",
			"/api/register",
			"/token",
			"/api/auth/token",
			"/api/auth/register",
			"/error",
			"/swagger-ui.html",
			"/swagger-ui/**",
			"/v3/**",
			"/api/auth"
			// @formatter:on
	};
	
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	
		http
		.authorizeHttpRequests((authorize) -> {
			authorize.requestMatchers(AUTH_WHITELIST).permitAll();
			authorize.anyRequest().authenticated();
		})
		.csrf(AbstractHttpConfigurer::disable) 
		.sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))		
		.addFilterBefore(jwtAuthorizationFilter,UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}

	@Bean
	AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder)
			throws Exception {
		AuthenticationManagerBuilder authenticationManagerBuilder = http
				.getSharedObject(AuthenticationManagerBuilder.class);
		authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
		return authenticationManagerBuilder.build();
	}

	@Bean
	BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
