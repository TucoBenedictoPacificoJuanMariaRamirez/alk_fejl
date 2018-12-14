package hu.elte.alkfejl.etterem.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @ManyToMany(mappedBy = "menus")
    @JsonIgnore
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
    
    @Column
    @NotNull
    private String imgUrl;

    public void setId(Integer id) {
        this.id = id;
    }
    
}
