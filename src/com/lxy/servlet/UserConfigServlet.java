package com.lxy.servlet;


	import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;

import com.lxy.dao.UserConfigDao;

	
	public class UserConfigServlet extends HttpServlet {
		private static final long serialVersionUID = -3009431503363456775L;
		
		public void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			
			UserConfigDao userConfigDao=new UserConfigDao();
			String message=request.getParameter("message");
			//System.out.println(message);
			int start = Integer.parseInt(request.getParameter("start"));  
	        int limit = Integer.parseInt(request.getParameter("limit"));			
			String jsonStr = userConfigDao.readUser(start/limit + 1,message);
			//System.out.println(jsonStr);
			response.getWriter().write(jsonStr); 
			
		}

	}

