package dao;

import java.sql.Date;
import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaDelete;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Root;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import entity.Stock;

@Component
public class StockDaoImp implements StockDao{
	@Autowired
	private EntityManagerFactory entitymanger;
	
	@Override
	public String save(Stock stock) {
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		session.getTransaction().begin();
		session.save(stock);
		session.getTransaction().commit();
		return stock.getNameOfStock();
	}
	
	@Override
	public List<String> get(String nameStock) {
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaQuery<String> criteriaQuery = criteriaBuilder.createQuery(String.class);
		Root<Stock> root = criteriaQuery.from(Stock.class);
		criteriaQuery.select(root.get("data")).where(criteriaBuilder.equal(root.get("name_Of_Stock"), nameStock));
		Query<String> query = session.createQuery(criteriaQuery);
		List<String> listStock = query.getResultList();
		return listStock;
	}
	
	@Override
	public List<Stock> list(){
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Stock> cq = cb.createQuery(Stock.class);
		Root<Stock> root = cq.from(Stock.class);
		cq.select(root);
		Query<Stock> query = session.createQuery(cq);
		return query.getResultList();
	}
	
	@Override 
	public void update(String namestock, Date date, Stock stock) {
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		session.getTransaction().begin();
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaUpdate<Stock> criteriaUpdate = criteriaBuilder.createCriteriaUpdate(Stock.class);
		Root<Stock> root = criteriaUpdate.from(Stock.class);
		criteriaUpdate.set("data", stock.getData());
		criteriaUpdate.where(criteriaBuilder.and(criteriaBuilder.equal(root.get("name_Of_Stock"), namestock), criteriaBuilder.equal(root.get("date"), date)));
		session.createQuery(criteriaUpdate).executeUpdate();
		session.getTransaction().commit();
	}
	
	@Override
	public void delete(String namestock, Date date) {
		Session session = entitymanger.unwrap(SessionFactory.class).openSession();
		session.getTransaction().begin();
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaDelete<Stock> criteriaDelete = criteriaBuilder.createCriteriaDelete(Stock.class);
		Root<Stock> root = criteriaDelete.from(Stock.class);
		criteriaDelete.where(criteriaBuilder.and(criteriaBuilder.equal(root.get("name_Of_Stock"), namestock), criteriaBuilder.equal(root.get("date"), date)));
		session.createQuery(criteriaDelete).executeUpdate();
		session.getTransaction().commit();
	}
	

}