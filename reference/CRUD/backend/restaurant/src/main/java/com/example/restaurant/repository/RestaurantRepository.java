package com.example.restaurant.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.restaurant.Model.Variables;
import org.springframework.stereotype.Repository;


@Repository
public interface RestaurantRepository extends JpaRepository<Variables, Long> {
}
