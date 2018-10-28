package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

}
