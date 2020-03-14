package com.cts.training.stockservice;

import java.util.List;
public interface StockExchangeService {
	
public String addStockExchange(StockExchange stockexchange);
	
	public void remove(int id);
	
	public List<StockExchange> getAllStockExchange();
	
	public StockExchange getOne(int id);
	
	public String  Update(StockExchange stockexchange);

}
