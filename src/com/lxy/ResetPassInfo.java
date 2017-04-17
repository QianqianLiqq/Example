package com.lxy;

import java.sql.Timestamp;

public class ResetPassInfo {

	private String username;
	private String email;
	private Timestamp outdate;
    private String signature;
    private boolean state;
    
	
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Timestamp getOutdate() {
		return outdate;
	}
	public void setOutdate(Timestamp outdate) {
		this.outdate = outdate;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
		  
}
