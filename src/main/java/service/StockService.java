package service;

import java.sql.Date;
import java.util.List;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import entity.Stock;

@Component
@Service
public interface StockService {
	String save(Stock stock );
	List<String> get (String nameStock);
	List<Stock> list();
	void update(String nameStock, Date date, Stock stock);
	void delete(String nameStock, Date date);
}
