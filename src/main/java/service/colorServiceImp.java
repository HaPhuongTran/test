package service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.StockDao;
import dao.colorDao;
import entity.Stock;
import entity.color_stock;

@Component
@Service
public class colorServiceImp implements colorService {
	@Autowired
	private colorDao colordao;
	
	@Transactional
	@Override
	public String save(color_stock color ) {
		return colordao.save(color);
	}
	
}

