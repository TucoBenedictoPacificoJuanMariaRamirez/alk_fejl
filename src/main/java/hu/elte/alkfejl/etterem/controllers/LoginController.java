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
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private CustomerRepository customerRepo;

    @PostMapping("")
    public ResponseEntity<Customer> post(@RequestBody String email) {
        Optional<Customer> customer = customerRepo.findByEmail(email);
        // If the user exists, we log him/her in
        if(customer.isPresent()) {
            return ResponseEntity.ok(customer.get());
        }
        // Otherwise return with not found
        return ResponseEntity.status(401).build();
    }
    
}
