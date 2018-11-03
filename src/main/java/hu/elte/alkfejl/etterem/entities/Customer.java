package hu.elte.alkfejl.etterem.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "customers")
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @NotNull
    private String name;
    
    @Column(unique = true)
    @NotNull
    private String username;
    
    @Column
    @NotNull
    private String password;
    
    @Column
    @NotNull
    private String address;
    
    @Column(unique = true)
    @NotNull
    private String phone;
    
    @JsonIgnore
    @OneToMany(mappedBy = "customer")
    private List<Order> orders;
    
//    @Column(nullable = false)
//    @Enumerated(EnumType.STRING)
//    private Role role;
//    
//    public enum Role {
//        ROLE_GUEST, ROLE_USER, ROLE_ADMIN
//    }
    
}
