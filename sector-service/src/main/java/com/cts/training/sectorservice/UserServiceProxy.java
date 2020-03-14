package com.cts.training.sectorservice;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


//@FeignClient("user-service")
//@FeignClient(name="",url="http://localhost:8000/users")
@FeignClient("netfix-zuul-api-gateway-server")
public interface UserServiceProxy {
	@RequestMapping(value = "/user-service/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAll();

}
