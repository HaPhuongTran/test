package entity;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Component;


@Component
@Entity
public class Stock implements Serializable {
	
	@Id
	private String name_Of_Stock;
	
	@Id
	//@CreationTimestamp
	//@Temporal(TemporalType.TIMESTAMP)
	private String date = new SimpleDateFormat("dd/MM/yyyy").format(Calendar.getInstance().getTime());
	
	private float data;
	
	@ManyToOne
	private color_stock name_Color;
	
	@ManyToOne
	private color_stock date_color;

	
	
	public String getNameOfStock() {
		return name_Of_Stock;
	}
	
	public void setNameOfStock(String name_Of_Stock) {
		this.name_Of_Stock = name_Of_Stock;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public float getData() {
		return data;
	}
	
	public void setData(float data) {
		this.data=data;
	} 
	
}
