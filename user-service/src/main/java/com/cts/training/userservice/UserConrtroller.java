package com.cts.training.userservice;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController

public class UserConrtroller {

	@Autowired
	UsersRepo userrepo;
	@Autowired
	UserService userservice;
	@Autowired
	JavaMailSender jms;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping(value ="/login")
	public ResponseEntity<?> login(HttpServletRequest request){
		//return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		String authorization= request.getHeader("Authorization");
		logger.info("login done with token --{}",authorization);
		String username = null;
		String password = null;
		if(authorization != null && authorization.startsWith("Basic")) {
			String base64Credentials = authorization.substring("Basic".length()).trim();
			byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
			String credentials = new String(credDecoded,StandardCharsets.UTF_8);
			username= credentials.split(":")[0];
			password=credentials.split(":")[1];
		}
			
		
	try {
		Users user =userservice.getUserByUsernameAndPassword(username,password);
		logger.info("User logged in using username --> {}",username);
		return new ResponseEntity<Users>(user,HttpStatus.OK);
	}
	catch(Exception e)
	{
		System.out.println(e.getStackTrace());
		logger.info("Unauthorized Access Stack Trace -->{}",e.getStackTrace().toString());
		return new ResponseEntity<String>("No user Found",HttpStatus.NOT_FOUND);
	}
}
	
	
	
	
	@RequestMapping(value = "/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAll() {
		return userrepo.findAll();
	}
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Users findOne(@PathVariable int id) {
		Optional<Users> usr = userrepo.findById(id);
		Users us = usr.get();
		return us;
	}
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public String save(@RequestBody Users usr) {
		String us=userservice.insert(usr);
		return us;
	}
	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		userservice.remove(id);
	}
	@RequestMapping(value = "/users", method = RequestMethod.PUT)
	public String update(@RequestBody Users usr) {
		String us = userservice.alter(usr);
				
		return us;
	}
	
	@GetMapping("/users/activate/{email}")
	public Users activate(@PathVariable String email) {
		return userservice.getUserByEmail(email);
	}
}

