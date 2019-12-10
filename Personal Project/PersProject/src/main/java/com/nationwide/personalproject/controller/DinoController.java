package com.nationwide.personalproject.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nationwide.personalproject.entity.Dinosaur;
import com.nationwide.personalproject.repositoy.DinoRepo;
import com.nationwide.personalproject.service.DinoService;

@RestController
@CrossOrigin("*")
public class DinoController {

	@Autowired
	private DinoRepo repo;
	@Autowired
	private DinoService service;

	@PostMapping("/newDinosaur")
	public String newDino(@RequestBody Dinosaur newref) {
		repo.save(newref);

		return "All good";
	}

	@DeleteMapping("deleteDino/{id}")
	public String deleteDino(@PathVariable Integer id) {
		repo.deleteById(id);
		return "Dino successfully Deleted --- Sorry for your loss!!!";
	}

	@PutMapping("/updateDinosaur")
	public Dinosaur updateDino(@RequestBody Dinosaur dino) {
		Dinosaur dbDino = repo.findDinoDataBynickname(dino.getNickname());
		dbDino.setAttributes(dino);
		repo.flush();
		return dbDino;
	}

	@GetMapping("/ShowAll")
	public ArrayList<Dinosaur> showall() {
		return repo.findAll();
	}

	@GetMapping("/findBynickname/{nickname}")
	public Dinosaur findBynickname(@PathVariable String nickname) {
		return repo.findDinoDataBynickname(nickname);
	}

	@GetMapping("/findByspecies/{species}")
	public ArrayList<Dinosaur> findByspecies(@PathVariable String species) {
		return repo.findDinoDataByspecies(species);
	}

	@GetMapping("/findBydiet/{diet}")
	public ArrayList<Dinosaur> findBydiet(@PathVariable String diet) {
		return repo.findDinoDataBydiet(diet);
	}

	@GetMapping("/lifespanGreaterthan/{lifespan1}")
	public ArrayList<Dinosaur> findBylifespanGreaterThan(@PathVariable int lifespan1) {
		return repo.findBylifespanGreaterThan(lifespan1);
	}

	@GetMapping("/lifespanLessthan/{lifespan1}")
	public ArrayList<Dinosaur> findBylifespanLessThan(@PathVariable int lifespan1) {
		return repo.findBylifespanLessThan(lifespan1);
	}

	@GetMapping("/lifespanBetween/{lifespan1}/{lifespan2}")
	public ArrayList<Dinosaur> findBylifespanBetween(@PathVariable int lifespan1, @PathVariable int lifespan2) {
		return repo.findBylifespanBetween(lifespan1, lifespan2);
	}

//	@GetMapping("/findMaxLifespan")
//	public int findBylifespan() {
//		return service.findBylifespan();
//	}

//	@GetMapping("/findMaxLifespanMeat/{diet1}")
//	public int findBylifespanMeat(@PathVariable String diet1) {
//		return service.findBylifespanMeat(diet1);
//	}
}
