package dao;


import java.sql.Date;
import java.util.List;
import org.springframework.stereotype.Component;
import entity.Stock;
@Component
public interface StockDao {
	String save(Stock stock);
	List<String> get(String nameStock);
	//String get(String nameStock);
	List<Stock> list();
	void update(String namestock,Date date, Stock stock);
	void delete(String namestock, Date date);
	//List<String> get(String namestock);
}
