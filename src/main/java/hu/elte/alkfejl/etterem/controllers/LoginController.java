package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.entities.Customer;
import hu.elte.alkfejl.etterem.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

//@RestController
//@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private UserDetailsService userDetailsService;

    /*@Autowired
    AuthenticationManager authManager;*/

    @Autowired
    SecurityContext securityContext;

    /*@PostMapping("")
    public ResponseEntity<Customer> post(@RequestBody Customer newCustomer) {
        Optional<Customer> customer = customerRepo.findByEmail(newCustomer.getEmail());
        // If the user exists, we log him/her in
        if(customer.isPresent()) {
            UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(newCustomer.getFullname(), newCustomer.getPassword());
            Authentication auth = authManager.authenticate(authReq);
            SecurityContext sc = SecurityContextHolder.getContext();
            securityContext.setAuthentication(auth);
            return ResponseEntity.ok().build();
        }

        // Otherwise return with not found
        return ResponseEntity.notFound().build();
    }*/
    
}
