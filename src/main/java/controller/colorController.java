package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import entity.color_stock;
import service.colorService;

@Component
@RestController
@CrossOrigin
public class colorController {
	@Autowired
	private colorService colorservice;
	
	@PostMapping("/add/color")
	public ResponseEntity<color_stock>save(@RequestBody color_stock color){
		colorservice.save(color);
		return ResponseEntity.ok().body(color);
	}
}
