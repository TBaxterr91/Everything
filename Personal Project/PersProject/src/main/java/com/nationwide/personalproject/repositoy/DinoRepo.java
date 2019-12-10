package com.nationwide.personalproject.repositoy;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.nationwide.personalproject.entity.Dinosaur;

@Repository
public interface DinoRepo extends JpaRepository<Dinosaur, Integer> {

	public ArrayList<Dinosaur> findAll();

	public Dinosaur findDinoDataByid(Integer id);
	
	public Dinosaur findDinoDataBynickname(String nickname);

	public ArrayList<Dinosaur> findDinoDataByspecies(String species);

	public ArrayList<Dinosaur> findDinoDataBydiet(String diet);

	public ArrayList<Dinosaur> findBylifespanGreaterThan(int lifespan1);

	public ArrayList<Dinosaur> findBylifespanLessThan(int lifespan1);

	public ArrayList<Dinosaur> findBylifespanBetween(int lifespan1, int lifespan2);

//	public int findBylifespan();
//	
//	public int findBylifespanMeat(String diet);


}
