package com.projectask.march.modal;

public class Department {

	
	private Integer id;
	private String departmentName;
	
	
	public Department() {
		super();
	}
	public Department(String departmentName) {
		super();
		this.departmentName = departmentName;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDepartmentName() {
		return departmentName;
	}
	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}
	
}
