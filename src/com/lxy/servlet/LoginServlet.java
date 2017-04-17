package com.lxy.servlet;


	import java.io.IOException;
	import javax.servlet.ServletException;
	import javax.servlet.http.HttpServlet;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;

	import com.lxy.User;
	import com.lxy.dao.UserDao;
import com.lxy.util.MD5Util;
	/**
	 * 閿熺煫浼欐嫹閿熸枻鎷峰綍Servlet閿熸枻鎷�
	 * @author lixiyu
	 */
	public class LoginServlet extends HttpServlet {
		private static final long serialVersionUID = -3009431503363456775L;
		
		public void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException {
			// 閿熸枻鎷峰彇閿熺煫浼欐嫹閿熸枻鎷�
			String username = request.getParameter("username");
			// 閿熸枻鎷峰彇閿熸枻鎷烽敓鏂ゆ嫹
			String password = request.getParameter("password");
			
			// 瀹為敓鏂ゆ嫹閿熸枻鎷稶serDao閿熸枻鎷烽敓鏂ゆ嫹
			UserDao userDao = new UserDao();	
			// 閿熸枻鎷烽敓鏂ゆ嫹閿熺煫浼欐嫹閿熸枻鎷烽敓鏂ゆ嫹閿熺獤顖ゆ嫹娌￠敓锟�
			User user = userDao.login(username, password);
			// 閿熷彨璁规嫹user閿熻鍑ゆ嫹涓洪敓鏂ゆ嫹
			if(user!=null){
				response.getWriter().println("{success:true,url:\"main.html\"}");
				//response.getWriter().println("{success:true,url:\"main.html\"}");
				//request.getRequestDispatcher("main.html").forward(request, response);
			}else{
				response.getWriter().println("{success:false,msg:\"閻€劍鍩涢崥宥嗗灗鐎靛棛鐖滄稉宥咁嚠\"}");
//				if(!"username".equals(username))
//					response.getWriter().println("{id:\"user\",msg:\"閻€劍鍩涢崥宥勭瑝鐎电"}");
//				     if(!"password".equals(password))
//				    	 response.getWriter().println(",{id:\"pass\",msg:\"鐎靛棛鐖滄稉宥咁嚠\"}");
////				     if(!scode.equals(code))
////				        out.println(",{id:\"checkcode\",msg:\"妤犲矁鐦夐惍浣风瑝鐎电"}");
//				        
//				     response.getWriter().println("]}");
			}
		}

	}


