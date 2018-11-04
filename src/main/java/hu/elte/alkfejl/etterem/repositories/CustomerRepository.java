package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Customer;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    public Optional<Customer> findByCustomer(String customer);
    
}
