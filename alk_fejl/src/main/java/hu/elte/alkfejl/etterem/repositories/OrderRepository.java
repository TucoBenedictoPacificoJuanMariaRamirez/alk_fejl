package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
    public Optional<Order> findByCustomer(String customer);

    public Optional<Order> findByCourier(String courier);



}
