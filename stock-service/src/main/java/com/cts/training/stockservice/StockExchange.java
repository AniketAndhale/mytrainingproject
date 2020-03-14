package com.cts.training.stockservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "stock")
@XmlRootElement(name = "stocklist")
public class StockExchange {
	@Id
	@GeneratedValue
	private int id;
	private String stockexchangename;
	private String brief;
	private String address;
	private String remark;
	public StockExchange()
	{
		
	}
	public StockExchange(int id, String stockexchangename, String brief, String address, String remark) {
		super();
		this.id = id;
		this.stockexchangename = stockexchangename;
		this.brief = brief;
		this.address = address;
		this.remark = remark;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStockexchangename() {
		return stockexchangename;
	}
	public void setStockexchangename(String stockexchangename) {
		this.stockexchangename = stockexchangename;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", stockexchangename=" + stockexchangename + ", brief=" + brief
				+ ", address=" + address + ", remark=" + remark + "]";
	}
	
}
