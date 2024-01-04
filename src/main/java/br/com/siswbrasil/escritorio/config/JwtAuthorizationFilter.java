package br.com.siswbrasil.escritorio.config;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.siswbrasil.escritorio.util.JwtUtil;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

	private final JwtUtil jwtUtil;
	private final ObjectMapper mapper;

	public JwtAuthorizationFilter(JwtUtil jwtUtil, ObjectMapper mapper) {
		this.jwtUtil = jwtUtil;
		this.mapper = mapper;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws IOException, ServletException {
		Map<String, Object> errorDetails = new HashMap<>();

		try {
			String accessToken = jwtUtil.resolveToken(request);
			if (accessToken == null) {
				filterChain.doFilter(request, response);
				return;
			}
			log.info("token : " + accessToken);
			Claims claims = jwtUtil.resolveClaims(request);
			if (claims != null && jwtUtil.validateClaims(claims)) {
				@SuppressWarnings("null")
				String email = claims.getSubject();
				@SuppressWarnings({ "unchecked" })
				List<String> roleNames = (List<String>) claims.get("roles");

				var roles = roleNames.stream().map(role -> new SimpleGrantedAuthority("ROLE_".concat(role)))
						.collect(Collectors.toList());

				Authentication authentication = new UsernamePasswordAuthenticationToken(email, "", roles);
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		} catch (Exception e) {
			e.printStackTrace();
			errorDetails.put("message", "Authentication Error");
			errorDetails.put("details", e.getMessage());
			response.setStatus(HttpStatus.UNAUTHORIZED.value());
			response.setContentType(MediaType.APPLICATION_JSON_VALUE);
			mapper.writeValue(response.getWriter(), errorDetails);
		}
		filterChain.doFilter(request, response);
	}
}
