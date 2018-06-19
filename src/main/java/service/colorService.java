package service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import entity.Stock;
import entity.color_stock;

@Component
@Service
public interface colorService {
	String save(color_stock color );
	Stock get (String colorStock);
	List<Stock> list();
//	void update(String nameStock, Stock stock);
//	void delete(String nameStock);
}
