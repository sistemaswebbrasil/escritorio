package br.com.siswbrasil.escritorio.util;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import br.com.siswbrasil.escritorio.config.CustomUserDetails;
import br.com.siswbrasil.escritorio.exception.CustomException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class JwtUtil {
	
	@Autowired
	private MessageSource messageSource;

	private final String secret_key = "mysecretkey";
	private long accessTokenValidity = 8;

	private final JwtParser jwtParser;

	private final String TOKEN_HEADER = "Authorization";
	private final String TOKEN_PREFIX = "Bearer ";

	public JwtUtil() {
		this.jwtParser = Jwts.parser().setSigningKey(secret_key);
	}

	public String createToken(CustomUserDetails user) {
		Claims claims = Jwts.claims().setSubject(user.getUsername());
		claims.put("name", user.getName());
		claims.put("id", user.getId());
		claims.put("email", user.getEmail());
		claims.put("roles", user.getRoles());
		Date tokenCreateTime = new Date();
		Date tokenValidity = new Date(tokenCreateTime.getTime() + TimeUnit.HOURS.toMillis(accessTokenValidity));
		return Jwts.builder().setClaims(claims).setExpiration(tokenValidity)
				.signWith(SignatureAlgorithm.HS256, secret_key).compact();
	}

	private Claims parseJwtClaims(String token) {
		return jwtParser.parseClaimsJws(token).getBody();
	}

	public Claims resolveClaims(HttpServletRequest req) {
		try {
			String token = resolveToken(req);
			if (token != null) {
				return parseJwtClaims(token);
			}
			return null;
		} catch (ExpiredJwtException ex) {
			throw new CustomException(HttpStatus.UNAUTHORIZED, "Token expirado");
		} catch (Exception ex) {
			throw new CustomException(HttpStatus.UNAUTHORIZED, messageSource.getMessage("exception.token.invalid", null, null));
		}
	}

	public String resolveToken(HttpServletRequest request) {

		String bearerToken = request.getHeader(TOKEN_HEADER);
		if (bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
			return bearerToken.substring(TOKEN_PREFIX.length());
		}
		return null;
	}

	public boolean validateClaims(Claims claims) throws AuthenticationException {
		try {
			return claims.getExpiration().after(new Date());
		} catch (Exception e) {
			throw e;
		}
	}

	public String getEmail(Claims claims) {
		return claims.getSubject();
	}

}