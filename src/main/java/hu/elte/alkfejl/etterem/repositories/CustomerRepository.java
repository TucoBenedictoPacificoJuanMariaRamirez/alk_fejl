package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Customer;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    public Optional<Customer> findByName(String name);
    
}
