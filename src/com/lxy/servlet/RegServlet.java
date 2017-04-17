package com.lxy.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lxy.User;
import com.lxy.dao.UserDao;
import com.lxy.util.MD5Util;
/**
 * 鐢ㄦ埛娉ㄥ唽鐨凷ervlet绫�
 * @author lixiyu
 */
public class RegServlet extends HttpServlet {
	private static final long serialVersionUID = 5280356329609002908L;

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		// 鑾峰彇鐢ㄦ埛鍚�
		String username = request.getParameter("username");
		// 鑾峰彇瀵嗙爜
		String password = request.getParameter("password");		
		String name=request.getParameter("name");
		String sex = request.getParameter("sex");
		String age=request.getParameter("age");
		String telephone = request.getParameter("telephone");
		String usertype = request.getParameter("usertype");
		
        //瀹炰緥鍖朥serDao瀵硅薄
		UserDao userDao = new UserDao();
		if(username != null && !username.isEmpty()){
			if(userDao.userIsExist(username)){
				// 瀹炰緥鍖栦竴涓猆ser瀵硅薄
				User user = new User();		
				// 瀵圭敤鎴峰璞′腑鐨勫睘鎬ц祴鍊�
				user.setUsername(username);	
				user.setPassword(password);
				user.setName(name);
				user.setSex(sex);
				user.setAge(age);
				user.setTelephone(telephone);
				user.setUsertype(usertype);
				
				// 淇濆瓨鐢ㄦ埛娉ㄥ唽淇℃伅
				userDao.saveUser(user);	
//				request.setAttribute("info", "闁诡収鍘奸弸鈺呮晬鐏炵偓鏆堥柛鎰湰閸ㄦ岸宕濋悤鍌滅＜<br>");
				
				out.println("{success:true,url:\"message.html\"}");
//				out.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">");
//				out.println("<HTML>");
//				out.println("  <head>");
//				out.println("     <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
//				out.println("     <link rel=\"stylesheet\" type=\"text/css\" href=\"extjs/resources/css/ext-all.css\" />");
//				out.println("     <script type=\"text/javascript\"	src=\"extjs/adapter/ext/ext-base.js\"></script>");
//				out.println("     <script type=\"text/javascript\" src=\"extjs/ext-all-debug.js\"></script>");
//				out.println("     <script type=\"text/javascript\" src=\"extjs/ext-lang-zh_CN.js\"></script>");
//				out.println("     <script type=\"text/javascript\" src=\"javascript/FullScreen.js\"></script>");
//				out.println("     <script type=\"text/javascript\" src=\"javascript/Message.js\"></script>");
//				out.println("     <title>濮濓箑娅掓担婊勫灛缁崵绮洪惃鍕櫏閼冲�熺槑娴硷拷</title>");
//				out.println("   </head>");
//				out.println("   <body><div  id='loginpanel2'></div></body>");
//				out.println("</HTML>");
//				return;				
			}else{
//				request.setAttribute("info", "闂佹寧鐟ㄩ銈夋晬濮橆収鍔冮柣鈧妽閸╂盯宕ュ鍛殥閻庢稒锚濠�顏堟晬閿燂拷");
				out.println("{success:false,msg:\"鐢ㄦ埛鍚嶅凡瀛樺湪\"}");
		}
		}
		// 杞彂鍒癿essage.jsp椤甸潰
//		request.getRequestDispatcher("message.html").forward(request, response);
	}



    public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
    	this.doPost(request,response);
    }

}