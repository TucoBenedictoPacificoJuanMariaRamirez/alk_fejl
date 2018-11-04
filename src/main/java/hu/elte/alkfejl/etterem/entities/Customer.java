package hu.elte.alkfejl.etterem.entities;


import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
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
    
    public enum Role {
        ROLE_GUEST, ROLE_CUSTOMER
    }
}
