package com.example.restaurant.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "restaurant")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {}, allowGetters = true)
public class Variables implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotNull
    private int no_of_peoples;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
   // @JsonFormat(pattern="dd-mm-yyyy")
    private Date date;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNo_of_peoples() {
        return no_of_peoples;
    }

    public void setNo_of_peoples(int no_of_peoples) {
        this.no_of_peoples = no_of_peoples;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
