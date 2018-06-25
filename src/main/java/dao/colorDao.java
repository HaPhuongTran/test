package dao;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import entity.color_stock;

@Component
@Service
public interface colorDao {
	String save(color_stock color );
	//String get (String colorStock);
//	List<Stock> list();
//	void update(String nameStock, Stock stock);
//	void delete(String nameStock);
}