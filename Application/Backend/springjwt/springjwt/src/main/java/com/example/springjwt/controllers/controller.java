package com.example.springjwt.controllers;

import com.example.springjwt.exception.exception;
import com.example.springjwt.models.Variables;
import com.example.springjwt.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class controller {
    @Autowired
    RestaurantRepository restaurantRepository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/allList")
    public List<Variables> getAllList()
    {
        return restaurantRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/list")
    public Variables createNote(@Valid @RequestBody Variables variable)
    {
        return restaurantRepository.save(variable);
    }

    @GetMapping("/get/{id}")
    public Variables getListById(@PathVariable(value = "id") Long id)
    {
        return restaurantRepository.findById(id)
                .orElseThrow(()-> new exception("resourceName","fieldName", "fieldValue"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update/{id}")
    public Variables updateList(@PathVariable(value = "id") Long id,
                                @Valid @RequestBody Variables details)
    {
        Variables variable = restaurantRepository.findById(id)
                .orElseThrow(()-> new exception("resourceName","fieldName", "fieldValue"));


        variable.setName(details.getName());
        variable.setEmail(details.getEmail());
        variable.setNo_of_peoples(details.getNo_of_peoples());
        variable.setDate(details.getDate());

        Variables updateVariable = restaurantRepository.save(variable);
        return updateVariable;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteList(@PathVariable(value = "id") Long id)
    {
        Variables variable = restaurantRepository.findById(id)
                .orElseThrow(()-> new exception("resourceName","fieldName", "fieldValue"));

        restaurantRepository.delete(variable);

        return ResponseEntity.ok().build();
    }
}
