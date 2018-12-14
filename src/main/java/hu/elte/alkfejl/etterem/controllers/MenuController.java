package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.entities.Menu;
import hu.elte.alkfejl.etterem.repositories.MenuRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/menus")
public class MenuController {

    @Autowired
    private MenuRepository menuRepo;

    @GetMapping("")
    public ResponseEntity<Iterable<Menu>> getAll() {
        return ResponseEntity.ok(menuRepo.findAll());
    }

    @PostMapping("")
    public ResponseEntity<Menu> post(@RequestBody Menu menu) {
        menu.setId(null);
        return ResponseEntity.ok(menuRepo.save(menu));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> get(@PathVariable Integer id) {
        Optional<Menu> menu = menuRepo.findById(id);
        if(! menu.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(menu.get());
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Menu> patch(@PathVariable Integer id, @RequestBody Menu newMenu) {
        Optional<Menu> menu = menuRepo.findById(id);
        if(! menu.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        newMenu.setId(id);
        return ResponseEntity.ok(menuRepo.save(newMenu));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Menu> delete(@PathVariable Integer id) {
        Optional<Menu> menu = menuRepo.findById(id);
        if(! menu.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        menuRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }



}