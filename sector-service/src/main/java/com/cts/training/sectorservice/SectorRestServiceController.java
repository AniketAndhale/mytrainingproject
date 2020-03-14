package com.cts.training.sectorservice;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class SectorRestServiceController {
	Logger logger =LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	SectorRepo sectorRepo;
	@Autowired
	SectorService sectorService;
	@Autowired
	private UserServiceProxy proxy;
	
	@RequestMapping(value="/sector",method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Sector> findAll() {
		return sectorRepo.findAll();
	}
	
	@RequestMapping(value="/sector/{id}",method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public Sector findOne(@PathVariable int id) {
		Optional<Sector> se = sectorRepo.findById(id);
		Sector i = se.get();
		return i;
	}
	
	@RequestMapping(value="/sector",method= RequestMethod.POST)
	public String save(@RequestBody Sector se) {
	String sector =sectorService.addSector(se);
		return sector;
	}
	
	@RequestMapping(value="/sector/{id}",method= RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		sectorService.deleteSector(id);
	}
	
	@RequestMapping(value="/sector",method= RequestMethod.PUT)
	public String update(@RequestBody Sector se) {
	//	Company company = companyRepo.save(usr);
		String sector =sectorService.updateSector(se);
		return sector;
	}
	
	@RequestMapping(value = "/users-by-sector", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAllUsersBySector(){
		logger.info("Information");
		List<Users> users = proxy.findAll();
		logger.info("Information -->{}",users);
		return users;
	
		
	}
}
