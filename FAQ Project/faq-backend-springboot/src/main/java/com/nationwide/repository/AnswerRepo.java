package com.nationwide.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.nationwide.Entity.AnswerEntity;

@Repository
public interface AnswerRepo extends JpaRepository<AnswerEntity, Integer> {
	
	public List<AnswerEntity> findAll();
	
	public Optional<AnswerEntity> findById(int a_id);
	
	@Query(value = "SELECT SUM(a.rating) FROM AnswerEntity a")
	int totalARatings();
	
	@Query(value = "SELECT SUM(a.rating) FROM AnswerEntity a WHERE a.a_id = :aId")
	int totalARatingsByAId(@Param("aId") int answerId);
	
	@Query(value = "SELECT a FROM AnswerEntity a WHERE a.a_id IN (:aId)")
	List <Integer> totalARatingsByAIdArray(@Param("aId") int[] answerId);
}