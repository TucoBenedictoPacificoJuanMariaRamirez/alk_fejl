package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.entities.Menu;
import hu.elte.alkfejl.etterem.repositories.MenuRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/menus")
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Menu>> getAll() {
        return ResponseEntity.ok(menuRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Menu> get(@PathVariable Integer id) {
        Optional<Menu> oReservation = menuRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        return ResponseEntity.ok(oReservation.get());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Menu> oReservation = menuRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();   
        }    
        menuRepository.delete(oReservation.get());
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Menu> put(@PathVariable Integer id, @RequestBody Menu menu) {
        Optional<Menu> oMenu = menuRepository.findById(id);
        if (!oMenu.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        menu.setId(id);
        return ResponseEntity.ok(menuRepository.save(menu));
    }
    
}
