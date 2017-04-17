<%@ page language="java" pageEncoding="UTF-8"%><%@page import="java.util.*"%><%
	    String name = request.getParameter("user");
	    String pwd =  request.getParameter("pass");
//	    String code = request.getParameter("checkcode");
//	    String scode = (session.getAttribute("validate_code")).toString();
	    if("jlpch".equals(name)&&"123456".equals(pwd)){
	    out.println("{success:true,url:\"main.html\"}");
	    }else {
	     out.println("{success:false,errors:[");
	     if(!"jlpch".equals(name))
	       out.println("{id:\"user\",msg:\"用户名不对\"}");
	     if(!"123456".equals(pwd))
	        out.println(",{id:\"pass\",msg:\"密码不对\"}");
//	     if(!scode.equals(code))
//	        out.println(",{id:\"checkcode\",msg:\"验证码不对\"}");
	        
	    out.println("]}");
	    }
%>
