package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.entities.Courier;
import hu.elte.alkfejl.etterem.repositories.CourierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/couriers")
public class CourierController {

    @Autowired
    private CourierRepository courierRepo;

    @GetMapping("")
    public ResponseEntity<Iterable<Courier>> getAll() {
        return ResponseEntity.ok(courierRepo.findAll());
    }

    @PostMapping("")
    public ResponseEntity<Courier> post(@RequestBody Courier courier) {
        courier.setId(null);
        return ResponseEntity.ok(courierRepo.save(courier));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Courier> get(@PathVariable Integer id) {
        Optional<Courier> courier = courierRepo.findById(id);
        if(! courier.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(courier.get());
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Courier> patch(@PathVariable Integer id, @RequestBody Courier newCourier) {
        Optional<Courier> courier = courierRepo.findById(id);
        if(! courier.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        newCourier.setId(id);
        return ResponseEntity.ok(courierRepo.save(newCourier));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Courier> delete(@PathVariable Integer id) {
        Optional<Courier> courier = courierRepo.findById(id);
        if(! courier.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        courierRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
