package com.cts.training.initialpublicofferservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController

public class IPOController {

	@Autowired
	IPORepo ipo1;
	
	@GetMapping("/ipo")
	public List<IPO> findAll() {
		return ipo1.findAll();
	}
	
	@GetMapping("/ipo/{id}")
	public IPO findOne(@PathVariable int id) {
		Optional<IPO> ipo2 = ipo1.findById(id);
		IPO ipo3 = ipo2.get();
		return ipo3;
	}
	
	@PostMapping("/ipo")
	public IPO save(@RequestBody IPO ipo2) {
		IPO ipo3 = ipo1.save(ipo2);
		return ipo3;
	}
	
	@DeleteMapping("/ipo/{id}")
	public void delete(@PathVariable int id) {
	ipo1.deleteById(id);
	}
	
	@PutMapping("/ipo")
	public IPO update(@RequestBody IPO ipo2) {
		IPO	ipo3 = ipo1.save(ipo2);
		return ipo3;
	}
}




