package br.com.siswbrasil.escritorio;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import br.com.siswbrasil.escritorio.config.SecurityConfig;
import br.com.siswbrasil.escritorio.config.controller.TokenController;
import br.com.siswbrasil.escritorio.controller.HelloController;



@WebMvcTest({ HelloController.class, TokenController.class })
@Import(SecurityConfig.class)
public class HelloControllerTests {

	@Autowired
	MockMvc mvc;

	@Test
	void rootWhenAuthenticatedThenSaysHelloUser() throws Exception {
		// @formatter:off
		MvcResult result = this.mvc.perform(post("/token")
			.with(httpBasic("user", "password")))
			.andExpect(status().isOk())
			.andReturn();

		String token = result.getResponse().getContentAsString();

		this.mvc.perform(get("/")
			.header("Authorization", "Bearer " + token))
			.andExpect(content().string("Hello, user!"));
		// @formatter:on
	}

	@Test
	void rootWhenUnauthenticatedThen401() throws Exception {
		this.mvc.perform(get("/"))
				.andExpect(status().isUnauthorized());

	}

	@Test
	void tokenWhenBadCredentialsThen401() throws Exception {

		this.mvc.perform(post("/token"))
				.andExpect(status().isUnauthorized());
 
	}

}
