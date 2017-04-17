package com.lxy;

public class Menu {

	private int id;  
    private String text;  
    private boolean leaf;  
    private int parentId;
    private String name;
    
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public int getParentId() {
		return parentId;
	}
	public void setParentId(int parentId) {
		this.parentId = parentId;
	}	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	   
}
