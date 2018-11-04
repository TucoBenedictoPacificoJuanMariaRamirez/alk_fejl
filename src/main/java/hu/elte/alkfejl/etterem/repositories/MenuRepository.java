package hu.elte.alkfejl.etterem.repositories;

import hu.elte.alkfejl.etterem.entities.Customer;
import hu.elte.alkfejl.etterem.entities.Menu;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends CrudRepository<Menu, Integer> {
    
    public Optional<Menu> findByName(String menu);
    
}
