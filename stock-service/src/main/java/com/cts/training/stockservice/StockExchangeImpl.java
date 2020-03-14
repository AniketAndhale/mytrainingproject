package com.cts.training.stockservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class StockExchangeImpl implements StockExchangeService{
	@Autowired
	StockExchangeRepo stockexchangerepo;
	@Autowired
	JavaMailSender jms;
	@Override
	public String addStockExchange(StockExchange stockexchange) {
		StockExchange Stockexchange =new StockExchange();
		BeanUtils.copyProperties(stockexchange, stockexchange);
		stockexchange=stockexchangerepo.save(stockexchange);
		if(stockexchange!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}
	
	
	@Override
	public void remove(int id) {
		stockexchangerepo.deleteById(id);
	}
	
	@Override
	public List<StockExchange> getAllStockExchange() {
		return stockexchangerepo.findAll();
	}
	
@Override
	public StockExchange getOne(int id) {
		Optional<StockExchange> stock = stockexchangerepo.findById(id);
		StockExchange stockexchange = stock.get();
		return stockexchange;
	}
		
@Override 
	public String  Update(StockExchange stockexchange)

	{
		StockExchange stockexchange1 = new StockExchange();
		BeanUtils.copyProperties(stockexchange, stockexchange1);
		stockexchange1=stockexchangerepo.save(stockexchange1);
		if(stockexchange1!=null) {
		return "{\"res\":\"1\"}";}
		else {
			return "{\"res\":\"0\"}";
		}
	}


}