package br.com.siswbrasil.escritorio.config;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class OpenApiConfig {
	
//	@Value("${app.version}")
	private String appVersion;	
	
//	@Value("${app.name}")
	private String appName;
	
//	@Value("${app.description}")
	private String description;		

	@Bean
	GroupedOpenApi api() {
		return GroupedOpenApi.builder().group("escritorio").pathsToMatch("/api/**").build();
	}

	@Bean
	OpenAPI customOpenAPI() {
		// @formatter:off		
		return new OpenAPI()
				.info(
						new Info()
						.title(appName)
						.description(description)
						.version(appVersion))
				
				.components(new Components()
				.addSecuritySchemes("bearer-key",
						new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
		// @formatter:on
	}

}
