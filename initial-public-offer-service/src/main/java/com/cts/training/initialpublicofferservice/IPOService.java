package com.cts.training.initialpublicofferservice;

import java.util.List;

public interface IPOService {

		public String addIPO(IPO ipo);
			
			public void remove(int id);
			
			public List<IPO> getAllIPO();
			
			public IPO getOne(int id);
			
			public String  Update(IPO ipo);
							}

