package dao;

import javax.persistence.EntityManagerFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

//import entity.Stock;
import entity.color_stock;

@Component
public class colorDaoImp implements colorDao{
	@Autowired
	private EntityManagerFactory entitymanger;
	
	@Override
	public String save(color_stock color) {
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		session.getTransaction().begin();
		session.save(color);
		session.getTransaction().commit();
		return color.getNamOfColor();
	}
	
//	@Override 
//	public String get(String color_name)

}