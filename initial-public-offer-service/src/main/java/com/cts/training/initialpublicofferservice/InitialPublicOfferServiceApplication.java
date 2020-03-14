package com.cts.training.initialpublicofferservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class InitialPublicOfferServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InitialPublicOfferServiceApplication.class, args);
	}

}
