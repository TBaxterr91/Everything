package com.nationwide.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nationwide.controller.AccountController;
import com.nationwide.persistence.domain.Account;
import com.nationwide.persistence.repository.AccountRepository;

/**
 * Service class to interact with the database.
 * @author Chris
 * @see AccountController
 *
 */

@Service
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;
	
	
	/**
	 * Checks whether a username is available or not.
	 * @param username that will be checked
	 * @return Boolean value, true for available, false for not available
	 */
	public Boolean checkUsername(String username) {
		return !(accountRepository.findByUsername(username).isPresent());
	}
	
	/**
	 * Create an Account
	 * @param account to be added to database
	 * @throws RuntimeException if an account is entered where the username already exists in the database.
	 * @return Account which is now stored in database.
	 */
	public Account createAccount(Account account) {
		if(checkUsername(account.getUsername())) {
			return accountRepository.saveAndFlush(account);			
		} else {
			throw new RuntimeException("Username already exists");
		}
	}
	
	/**
	 * Checks whether an account's password matches that in the database
	 * @param account which is to be checked
	 * @throws RuntimeException if the account username is not found in the database
	 * @return Boolean value, true for password is correct, false for incorrect
	 */
	public Boolean authenticate(Account account) {
		Account savedAccount = accountRepository.findByUsername(account.getUsername()).orElseThrow(() -> new RuntimeException("Account not found"));
		if(savedAccount.getPassword().equals(account.getPassword())) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Deletes the account
	 * @throws RuntimeException if username is not found
	 * @throws RuntimeException if the entered password is not the same as the one stored in the database
	 * @param account - {@link Account} to be entered
	 */
	public void deleteAccount(Account account) {
		if(authenticate(account)) {
			accountRepository.delete(account);
		} else {
			throw new RuntimeException("Incorrect username or password");
		}
	}
	
}
