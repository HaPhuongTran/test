package entity;


//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToOne;
import org.springframework.stereotype.Component;

import entity.Stock;

@Entity
@Component
public class color_stock {
	@Id
	private String name_Of_Color;
	
	@OneToOne
	@JoinColumns({
		  @JoinColumn(name = "name_Of_Stock"),
		  @JoinColumn(name = "date")
		})
	private Stock stock;
	
	
	public String getNamOfColor() {
		return name_Of_Color;
	}
	
	public void setNameOfColor(String name_Of_Color) {
		this.name_Of_Color = name_Of_Color;
	}
	
}
