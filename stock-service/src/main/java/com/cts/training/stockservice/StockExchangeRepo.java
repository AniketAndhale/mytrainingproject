package com.cts.training.stockservice;

import org.springframework.data.jpa.repository.JpaRepository;
public interface StockExchangeRepo extends JpaRepository<StockExchange, Integer> {

}