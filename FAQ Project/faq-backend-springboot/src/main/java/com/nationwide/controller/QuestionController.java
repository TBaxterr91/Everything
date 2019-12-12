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
import org.springframework.web.bind.annotation.RestController;
import com.nationwide.Entity.QuestionEntity;
import com.nationwide.service.QuestionService;

@RestController
@RequestMapping(value = "/Questions")
public class QuestionController {
	@Autowired
	private QuestionService qService;
	
	@CrossOrigin
	@GetMapping("/ShowAll")
	public List<QuestionEntity> showAllQRatings(){
		return qService.showAllQuestionRatings();
	}
	
	@CrossOrigin
	@GetMapping("/QuestionRating/{id}")
	public Optional<QuestionEntity> findQRating(@PathVariable Integer id) {
		return qService.findQuestionRating(id);
	}
	
	@CrossOrigin
	@GetMapping("/TotalRatings")
	public int totalQRatings() {
		return qService.totalQuestionRating();
	}
	
	@CrossOrigin
	@GetMapping("/TotalRatings/{id}")
	public int totalQRatingsByQId(@PathVariable int id) {
		return qService.totalQuestionRatingsByQuestionId(id);
	}
	
	@CrossOrigin
	@PutMapping("/EditQuestionRating")
	public String editQRating(@RequestBody QuestionEntity ref) {
		qService.editQuestionRating(ref);
		return "Question Rating edited";
	}
}
