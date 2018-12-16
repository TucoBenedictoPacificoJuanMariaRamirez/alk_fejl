package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.WebSecurityConfig;
import hu.elte.alkfejl.etterem.entities.Customer;
import hu.elte.alkfejl.etterem.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RestController
@RequestMapping("/api/register")
public class RegistrationController {

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @PostMapping("")
    public ResponseEntity<Customer> post(@RequestBody Customer newCustomer) {
        // If any of the fields empty, we return bad request
        if( newCustomer.getEmail().equals("") ||
            newCustomer.getPassword().equals("") ||
            newCustomer.getAddress().equals("") ||
            newCustomer.getPhone().equals("")
        )
            return ResponseEntity.badRequest().build();

        Optional<Customer> customer = customerRepo.findByEmail(newCustomer.getEmail());
        // If the user does not exist, we add him/her
        if(! customer.isPresent()) {
            newCustomer.setPassword(passwordEncoder.encode(newCustomer.getPassword()));
            customerRepo.save(newCustomer);
            return ResponseEntity.ok().build();
        }

        // Otherwise return with bad request status
        return ResponseEntity.badRequest().build();
    }
}
