package hu.elte.alkfejl.etterem.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;


public class Menu implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @ManyToMany
    @JoinTable
    private List<Order> orders;
    
    @Column
    @NotNull
    private String name;
    
    @Column
    @NotNull
    private String details;
    
    @Column
    @NotNull
    private Integer price;

    public void setId(Integer id) {
        this.id = id;
    }
    
}
