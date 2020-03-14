package com.cts.training.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepo companyrepo;
	@Autowired
	JavaMailSender jms;

	@Override
	public String addCompany(Company company) {
		Company company1 = new Company();
		BeanUtils.copyProperties(company, company1);
		company1 = companyrepo.save(company1);
		if (company1 != null) {
			return "{\"res\":\"1\"}";
		} else {
			return "{\"res\":\"0\"}";
		}
	}

	@Override
	public void remove(int id) {
		companyrepo.deleteById(id);
	}

	public List<Company> getAllCompany() {
		return companyrepo.findAll();
	}

	@Override
	public Company getOne(int id) {
		Optional<Company> comp = companyrepo.findById(id);
		Company company = comp.get();
		return company;
	}

	@Override
	public String Update(Company companydto)

	{
		Company company = new Company();
		BeanUtils.copyProperties(companydto, company);
		company = companyrepo.save(company);
		if (company != null) {
			return "{\"res\":\"1\"}";
		} else {
			return "{\"res\":\"0\"}";
		}
	}

}
