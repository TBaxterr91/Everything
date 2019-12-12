package com.nationwide.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nationwide.Entity.QuestionEntity;
import com.nationwide.repository.QuestionRepo;

@Service
public class QuestionService {
	
	@Autowired
	private QuestionRepo qRepo;
	
	public List<QuestionEntity> showAllQuestionRatings() {
		return qRepo.findAll();
	}
	
	public Optional<QuestionEntity> findQuestionRating(Integer q_id) {
		return qRepo.findById(q_id);
	}

	public void editQuestionRating(QuestionEntity ref) {
		qRepo.save(ref);
		
	}
	public int totalQuestionRating() { 
		return qRepo.totalQRatings();
	}
	
	public int totalQuestionRatingsByQuestionId(int q_id) {
		return qRepo.totalQRatingsByQId(q_id);
	}
}
