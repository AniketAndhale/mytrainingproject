package com.cts.training.initialpublicofferservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service

public class IPOServiceImpl implements IPOService{
	
	@Autowired
	IPORepo iporepo;
	@Autowired
	JavaMailSender jms;
	@Override
	public String addIPO(IPO ipo) {
		IPO ipo1 =new IPO();
		BeanUtils.copyProperties(ipo, ipo1);
		ipo1=iporepo.save(ipo1);
		if(ipo1!=null) {
			return "{\"res\":\"1\"}";
		}
		else {
			return "{\"res\":\"0\"}";
		}
	}

	
	@Override
	public void remove(int id) {
		iporepo.deleteById(id);
	}

	public List<IPO> getAllIPO() {
		return iporepo.findAll();
	}

	@Override
	public IPO getOne(int id) {  
		Optional<IPO> ipo1 = iporepo.findById(id);
		IPO ipo = ipo1.get();
		return ipo;
	}

	@Override
	public String Update(IPO ipo1)

	{
		IPO ipo = new IPO();
		BeanUtils.copyProperties(ipo1, ipo);
		ipo = iporepo.save(ipo);
		if (ipo != null) {
			return "{\"res\":\"1\"}";
		} else {
			return "{\"res\":\"0\"}";
		}
	}
}
