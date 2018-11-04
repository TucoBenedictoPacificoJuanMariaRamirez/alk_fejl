package hu.elte.alkfejl.etterem.entities;


import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "Customers")
public class Customer implements Serializable  {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique = true)
    @NotNull
    private String email;
    
    @Column
    @NotNull
    private String password;
 
    @Column
    @NotNull
    private String fullname;
    
    @Column
    @NotNull
    private String address;
    
    @Column(unique = true)
    @NotNull
    private String phone;
    
    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    private List<Order> orders;
    
    public enum Role {
        ROLE_GUEST, ROLE_CUSTOMER
    }
}
