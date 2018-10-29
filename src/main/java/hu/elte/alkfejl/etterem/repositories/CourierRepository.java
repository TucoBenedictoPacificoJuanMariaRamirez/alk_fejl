package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Courier;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CourierRepository extends CrudRepository<Courier, Integer> {
    public Optional<Courier> findByName(String name);
}
