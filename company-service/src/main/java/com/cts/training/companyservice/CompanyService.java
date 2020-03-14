package com.cts.training.companyservice;

import java.util.List;

public interface CompanyService {
	public String addCompany(Company companydto);
	
	public void remove(int id);
	
	public List<Company> getAllCompany();
	
	public Company getOne(int id);
	
	public String  Update(Company companydto);

}
