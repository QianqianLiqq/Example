package com.lxy.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lxy.dao.MenuDao;



public class MenuServlet extends HttpServlet{
	
		private static final long serialVersionUID = -3009431503363456775L;
		
		public void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			String parentId = request.getParameter("parentId");
			System.out.println("parentId="+parentId);
			MenuDao menuDao=new MenuDao();
			if(parentId!=null&&parentId.length()>0){				
				String jsonStr=menuDao.getMenuString(parentId);
				response.getWriter().write(jsonStr);
			}
			
			
	}
}



