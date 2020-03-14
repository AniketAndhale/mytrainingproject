package com.cts.training.stockpriceservice;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins="*")
@RestController
public class StockPriceRestServiceController {
	Logger logger =LoggerFactory.getLogger(this.getClass());

	@Autowired
	StockPriceRepo stockPriceRepo;
	@Autowired
	StockPriceService stockPriceService;
	
	
	@GetMapping(value="/stockPrice/companyStockPriceBetween/{companyCode}/{stockExchange}/{startDate}/{endDate}",
			produces="application/json")
	public ResponseEntity<?> getCompanyStockPriceDayBetween(@PathVariable String companyCode,
			@PathVariable String stockExchange, @PathVariable String startDate, @PathVariable String endDate){
		return new ResponseEntity<List<StockPriceOnPeriod>>(stockPriceService.getCompanyStockPriceBetween(companyCode, stockExchange, LocalDate.parse(startDate), LocalDate.parse(endDate)),HttpStatus.OK);
	}
	
	@RequestMapping(value="/stockprice",method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<StockPrice> findAll() {
		return stockPriceRepo.findAll();
	}
	
	@RequestMapping(value="/stockprice/{id}",method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public StockPrice findOne(@PathVariable int id) {
		Optional<StockPrice> stock = stockPriceRepo.findById(id);
		StockPrice stockpricereturn = stock.get();
		return stockpricereturn;
	}
	
	@RequestMapping(value="/stockprice",method= RequestMethod.POST)
	public StockPrice save(@RequestBody StockPrice stockprice) {
		StockPrice stock = stockPriceRepo.save(stockprice);
		return stock;
	}
	
	@RequestMapping(value="/stockprice/{id}",method= RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		stockPriceRepo.deleteById(id);
	}
	
	@RequestMapping(value="/stockprice",method= RequestMethod.PUT)
	public StockPrice update(@RequestBody StockPrice spr) {
		StockPrice stock = stockPriceRepo.save(spr);
		return stock;
	}
	
	@PostMapping(value="stockprice/uploadStockSheet", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> uploadStockSheet(@RequestParam("stocksSheet") MultipartFile file){
		logger.info("File Recieved: {} ", file.getOriginalFilename());
		if(file.getOriginalFilename().endsWith(".xls") || file.getOriginalFilename().endsWith(".xlsx")) {
			try {
				return new ResponseEntity<ImportSummary>(stockPriceService.addStockPriceFromExcelSheet(file),HttpStatus.OK);
			}
			catch(IOException e) {
				e.printStackTrace();
				return new ResponseEntity<String>("Error Reading File", HttpStatus.BAD_REQUEST);
			}
			catch(Exception e) {
				e.printStackTrace();
				return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
			}
		}
			else {
				return new ResponseEntity<String>("Wrong File Extension . the File Should be .xls or .xlsx file.",HttpStatus.BAD_REQUEST);
			}
		}
}
