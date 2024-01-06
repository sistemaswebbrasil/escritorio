package br.com.siswbrasil.escritorio.config;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.util.StringUtils;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;


@Configuration
public class CorsConfig {

	@Bean
	FilterRegistrationBean<CorsFilter> corsFilterRegistrationBean() {

		FilterRegistrationBean<CorsFilter> filterRegistrationBean = new FilterRegistrationBean<CorsFilter>();
		filterRegistrationBean.setFilter(new CorsFilter(request -> {
			String origin = request.getHeader(HttpHeaders.ORIGIN);

			if (!StringUtils.hasText(origin)) {
				// Not a CORS request.
				return null;
			}

			/**
			 * TODO You can write your own logic code to determine whether to allow the
			 * current request or not.
			 * 
			 * log.info("origin = {}", origin);
			 */

			CorsConfiguration configuration = new CorsConfiguration();

			configuration.addAllowedOrigin(origin);

			String accessControlRequestHeaders = request.getHeader(HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS);
			if (StringUtils.hasText(accessControlRequestHeaders)) {
				Stream.of(accessControlRequestHeaders.split(",")).map(String::trim).distinct()
						.forEach(configuration::addAllowedHeader);
			}

			configuration.addExposedHeader("*");

			configuration.setAllowCredentials(true);

			configuration
					.setAllowedMethods(List.of("GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "TRACE"));

			return configuration;
		}));
		filterRegistrationBean.addUrlPatterns("/*");
		filterRegistrationBean.setOrder(Integer.MIN_VALUE); // Ensure first execution
		return filterRegistrationBean;
	}

}
