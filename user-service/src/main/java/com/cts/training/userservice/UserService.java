package com.cts.training.userservice;

import java.util.List;
import java.util.NoSuchElementException;


	public interface UserService {

		public String insert(Users user);
		public void remove(int id);
		public List<Users> getAll();
		public Users getOne(int id);
		public String  alter(Users user);
		public Users getUserByUsernameAndPassword(String username, String password) throws NoSuchElementException;
		public Users getUserByEmail(String email);
	}
