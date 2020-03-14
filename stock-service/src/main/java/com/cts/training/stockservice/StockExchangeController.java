package com.cts.training.stockservice;

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
public class StockExchangeController {

	@Autowired
	StockExchangeRepo stockexchangerepo;
	@Autowired
	StockExchangeService stockexchangeservice;
	@Autowired
	JavaMailSender jms;
	@RequestMapping(value = "/stock", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StockExchange> findAll() {
		return stockexchangerepo.findAll();
	}
	@RequestMapping(value = "/stock/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public StockExchange findOne(@PathVariable int id) {
		Optional<StockExchange> stockexchange = stockexchangerepo.findById(id);
		StockExchange stockexchange1 = stockexchange.get();
		return stockexchange1;
	}
	
	@RequestMapping(value = "/stock", method = RequestMethod.POST)
	public String save(@RequestBody StockExchange stockexchange) {
		String stockexchange1=stockexchangeservice.addStockExchange(stockexchange);
		return stockexchange1;
	}
	@RequestMapping(value = "/stock/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		stockexchangeservice.remove(id);
		
	}
	@RequestMapping(value = "/stock", method = RequestMethod.PUT)
	public String update(@RequestBody StockExchange stockexchange) {
		String stockexchange1 = stockexchangeservice.Update(stockexchange);
				
		return stockexchange1;
	}
}



