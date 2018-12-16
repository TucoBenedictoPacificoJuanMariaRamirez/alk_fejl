package hu.elte.alkfejl.etterem.controllers;

import hu.elte.alkfejl.etterem.entities.Customer;
import hu.elte.alkfejl.etterem.entities.Order;
import hu.elte.alkfejl.etterem.repositories.CustomerRepository;
import hu.elte.alkfejl.etterem.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private CustomerRepository customerRepo;

    @GetMapping("")
    public ResponseEntity<Iterable<Order>> getAll() {
        return ResponseEntity.ok(orderRepo.findAll());
    }

    @PostMapping("")
    public ResponseEntity<Order> post(@RequestBody Order order) {
        order.setId(null);
        return ResponseEntity.ok(orderRepo.save(order));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> get(@PathVariable Integer id) {
        Optional<Order> order = orderRepo.findById(id);
        if(! order.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(order.get());
    }

    @GetMapping("/{c}")
    public ResponseEntity<Iterable<Order>> getOrders(@PathVariable String customerEmail) {
        Optional<Customer> customer = customerRepo.findByEmail(customerEmail);
        if(customer.isPresent()) {
            Iterable<Order> orders = orderRepo.findAllByCustomer(customer.get());
            return ResponseEntity.ok(orders);
        }
        return ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Order> patch(@PathVariable Integer id, @RequestBody Order newOrder) {
        Optional<Order> order = orderRepo.findById(id);
        if(! order.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        newOrder.setId(id);
        return ResponseEntity.ok(orderRepo.save(newOrder));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> delete(@PathVariable Integer id) {
        Optional<Order> order = orderRepo.findById(id);
        if(! order.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        orderRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
