package hu.elte.alkfejl.etterem.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "Menus")
public class Menu implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

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
