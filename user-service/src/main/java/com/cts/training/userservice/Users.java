package com.cts.training.userservice;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "users")
@XmlRootElement(name = "userlist")
public class Users {
	
	@Id
	@GeneratedValue
	private int id;
	private String username;
	private String password1;
	private String password2;
	private String email;
	private long phone;
	private boolean enabled=true;
	private String active="no";
	private String role="ROLE_USER";
	
	@Transient
	private String regStatus;
	
	public Users() {}
	
	public Users(int id, String username, String password1, String password2, String email, long phone, boolean enabled,
			String active, String role, String regStatus) {
		super();
		this.id = id;
		this.username = username;
		this.password1 = password1;
		this.password2 = password2;
		this.email = email;
		this.phone = phone;
		this.enabled = enabled;
		this.active = active;
		this.role = role;
		this.regStatus = regStatus;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword1() {
		return password1;
	}
	public void setPassword1(String password1) {
		this.password1 = password1;
	}
	public String getPassword2() {
		return password2;
	}
	public void setPassword2(String password2) {
		this.password2 = password2;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getRegStatus() {
		return regStatus;
	}

	public void setRegStatus(String regStatus) {
		this.regStatus = regStatus;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public Object findByEmail(String b) {
		// TODO Auto-generated method stub
		return null;
	}

	public String getRole() {
		return role;
	}
	
	public void setRole(String role) {
		this.role = role;
	}
	
}
