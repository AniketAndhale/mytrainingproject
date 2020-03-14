package com.cts.training.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class CompanyController {
	@Autowired
	UserServiceProxy proxy;

	@Autowired
	CompanyRepo companyrepo;
	@Autowired
	CompanyService companyservice;
	@Autowired
	JavaMailSender jms;
	@RequestMapping(value = "/company", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Company> findAll() {
		return companyrepo.findAll();
	}
	@RequestMapping(value = "/company/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Company findOne(@PathVariable int id) {
		Optional<Company> company = companyrepo.findById(id);
		Company comp = company.get();
		return comp;
	}
	
	@RequestMapping(value = "/company", method = RequestMethod.POST)
	public String save(@RequestBody Company company1) {
		String comp=companyservice.addCompany(company1);
		return comp;
	}
	@RequestMapping(value = "/company/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		companyservice.remove(id);
		
	}
	@RequestMapping(value = "/company", method = RequestMethod.PUT)
	public String update(@RequestBody Company company) {
		String comp = companyservice.Update(company);
				
		return comp;
	}
	
	 @RequestMapping(value = "/users-by-company", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAllUserscompany(){
		return proxy.findAll();
	
		
	}
}








