package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Courier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourierRepository extends CrudRepository<Courier, Integer> {

}
