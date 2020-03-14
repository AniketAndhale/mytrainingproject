package com.cts.training.userservice;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
public interface UsersRepo extends JpaRepository<Users, Integer> {
	Users findByEmail(String email);
	public Optional<Users> findByUsernameAndPassword1(String username, String password1);

}