package com.example.springjwt.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springjwt.models.Variables;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Variables, Long> {
}
