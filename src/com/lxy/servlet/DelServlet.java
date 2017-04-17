package com.lxy.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lxy.User;
import com.lxy.dao.UserDao;


public class DelServlet extends HttpServlet {
	private static final long serialVersionUID = 5280356329609002908L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//response.setContentType("text/json; charset=utf-8"); 
		int id=Integer.parseInt(request.getParameter("data"));
		UserDao userDao=new UserDao();
		boolean flag=userDao.delUser(id);
        if(flag){
        	response.getWriter().write("{success:true,info:'É¾³ý³É¹¦'}");
        }else{
        	response.getWriter().write("{success:false,info:'É¾³ýÊ§°Ü'}");
        }
				

	}



    public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
    	this.doPost(request,response);
    }

}