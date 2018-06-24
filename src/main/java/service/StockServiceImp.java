package service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.StockDao;
import entity.Stock;

@Component
@Service
public class StockServiceImp implements StockService {
	@Autowired
	private StockDao stockDao;
	
	@Transactional
	@Override
	public String save(Stock stock ) {
		return stockDao.save(stock);
	}
	
	@Override
	public List<String> get(String namestock) {
		return stockDao.get(namestock);
	}
	
	@Override
	public List<String> getDate() {
		return stockDao.getDate();
	}
	
	@Override
	public List<Stock> list(){
		return stockDao.list();
	}
	
	@Override
	public void update(String namestock, Date date, Stock stock) {
		stockDao.update(namestock, date, stock);
	}
	
	@Override 
	public void delete(String namestock, Date date) {
		stockDao.delete(namestock, date);
	}

}

