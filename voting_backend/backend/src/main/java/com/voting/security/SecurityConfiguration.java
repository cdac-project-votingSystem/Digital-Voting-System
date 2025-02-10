package com.voting.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfiguration {

    @Autowired
    private CustomJWTAuthenticationFilter customJWTAuthenticationFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	// Configure the bean to customize spring security filter chain
		@Bean
		public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
		    http
		        .cors(Customizer.withDefaults()) // Add this line to enable CORS in Security
		        .csrf(csrf -> csrf.disable())
		        .authorizeHttpRequests(request -> request
		            .requestMatchers(
		                "/signup", "/login",
		                "/v*/api-doc*/**", "/swagger-ui/**", 
		                "/advanceSearch/**", "/politicalParty/**", 
		                "/feedback/**", "/constituency/**","/election/**","/candidates/**","/result/**"
		            ).permitAll()
		            .requestMatchers(HttpMethod.OPTIONS).permitAll()
		            .requestMatchers("/voters/**").hasRole("VOTER")
		            .requestMatchers("/admin/**").hasRole("ADMIN")
		            .anyRequest().authenticated()
		        )
		        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		    http.addFilterBefore(customJWTAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

		    return http.build();
		}

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }


}
