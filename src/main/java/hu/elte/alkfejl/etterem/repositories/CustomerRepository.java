package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Customer;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    public Optional<Customer> findByFullname(String fullname);

    public Optional<Customer> findByAddress(String address);

    public Optional<Customer> findByPhone(String phone);

    public Optional<Customer> findByEmail(String email);

    //public List<Customer> findByEmail(String email);



}
