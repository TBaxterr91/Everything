package com.nationwide.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.nationwide.Entity.AnswerEntity;
import com.nationwide.service.AnswerService;

@RestController
@RequestMapping(value = "/Answers")
public class AnswerController {
	@Autowired
	private AnswerService aService;
	
	@CrossOrigin
	@GetMapping("/ShowAll")
	public List<AnswerEntity> showAllARatings(){
		return aService.showAllAnswerRatings();
	}
	
	@CrossOrigin
	@GetMapping("/AnswerRating/{id}")
	public Optional<AnswerEntity> findARating(@PathVariable Integer id) {
		return aService.findAnswerRating(id);
	}
	
	@CrossOrigin
	@GetMapping("/TotalRatings")
	public int totalARatings() {
		return aService.totalAnswerRating();
	}
	
	@CrossOrigin
	@GetMapping("/TotalRatings/{id}")
	public int totalARatingsByAId(@PathVariable int id) {
		return aService.totalAnswerRatingsByAnswerId(id);
	}
	
	@CrossOrigin
	@GetMapping("/TotalRatingsArray/{ids}")
	public List<Integer> totalARatingsByAIdArray(@RequestParam("a_id") int[] ids) {
		return aService.totalAnswerRatingsByAnswerIdArray(ids);
	}
	
	@CrossOrigin
	@PutMapping("/EditAnswerRating")
	public String editARating(@RequestBody AnswerEntity ref) {
		aService.editAnswerRating(ref);
		return "Answer Rating edited";
	}
}
