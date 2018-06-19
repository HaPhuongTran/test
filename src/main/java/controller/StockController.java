package controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import entity.Stock;
import service.StockService; 

@Component
@RestController
@CrossOrigin
public class StockController {
	@Autowired
	private StockService stockService;
	   /*---Add new book---*/
	   @PostMapping("/add")
	   public ResponseEntity<Stock> save(@RequestBody  Stock stock){
		   stockService.save(stock);
		   return ResponseEntity.ok().body(stock);
	   }
	   
	   @GetMapping("/add/{namestock}")
	   public ResponseEntity<?> get(@PathVariable("namestock") String namestock) {
		   return (stockService.get(namestock).isEmpty()) ? new ResponseEntity<>(HttpStatus.NOT_FOUND): new ResponseEntity<>(stockService.get(namestock), HttpStatus.FOUND);
	   }
	   
	   @RequestMapping("/liststock")
	   public ResponseEntity<List<Stock>> list() {
	      List<Stock> stock = stockService.list();
	      return ResponseEntity.ok().body(stock);
	   }
	   @PutMapping("/stock/{namestock}/{datestock}")
	   public ResponseEntity<Stock> update(@PathVariable("namestock") String name, @PathVariable("datestock") Date date,  @RequestBody Stock stock) {
	      stockService.update(name, date, stock);
	      return ResponseEntity.ok().body(stock);
	   }
	   
	   @RequestMapping("/delete/{namestock}/{datestock}")
	   public ResponseEntity<List<Stock>> delete(@PathVariable("namestock") String name, @PathVariable("datestock") Date date){
		   stockService.delete(name, date);
		   List<Stock> stock = stockService.list();
		   return ResponseEntity.ok().body(stock);
	   }
}