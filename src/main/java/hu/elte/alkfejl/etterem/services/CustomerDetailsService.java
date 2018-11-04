package hu.elte.alkfejl.etterem.services;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import hu.elte.alkfejl.etterem.entities.Customer;
import hu.elte.alkfejl.etterem.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomerDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository userRepo;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Customer> oUser = userRepo.findByFullname(username);
        if (!oUser.isPresent()) {
            throw new UsernameNotFoundException(username);
        }
        Customer cust = oUser.get();
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(cust.getRole().toString()));

        return new org.springframework.security.core.userdetails.User(cust.getFullname(), cust.getPassword(), grantedAuthorities);
    }
}