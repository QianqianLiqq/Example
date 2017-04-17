package com.lxy.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.RequestDispatcher;

import com.lxy.*;

/**
 * 鐢ㄦ埛鏁版嵁搴撴搷浣滅被
 * @author lixiyu
 */
public class UserDao {
	/**
	 * 娣诲姞鐢ㄦ埛
	 * @param user 鐢ㄦ埛瀵硅薄
	 */
	public void saveUser(User user){
		// 鑾峰彇鏁版嵁搴撹繛鎺onnection瀵硅薄
		Connection conn = ConnectDB.getConnection();
		// 鎻掑叆鐢ㄦ埛娉ㄥ唽淇℃伅鐨凷QL璇彞
		String sql = "insert into users(username,password,name,sex,age,telephone,usertype) values(?,?,?,?,?,?,?)";
		try {
			// 鑾峰彇PreparedStatement瀵硅薄
			PreparedStatement ps = conn.prepareStatement(sql);
			// 瀵筍QL璇彞鐨勫崰浣嶇鍙傛暟杩涜鍔ㄦ�佽祴鍊�
			ps.setString(1, user.getUsername());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getName());
			ps.setString(4, user.getSex());
			ps.setString(5, user.getAge());
			ps.setString(6, user.getTelephone());
			ps.setString(7, user.getUsertype());

			// 鎵ц鏇存柊鎿嶄綔
			ps.executeUpdate();
			// 閲婃斁姝� PreparedStatement 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
			ps.close();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			// 鍏抽棴鏁版嵁搴撹繛鎺�
			ConnectDB.closeConnection(conn);
		}
	}
	
	/**
	 * 删除用户
	 * */
	public boolean delUser(int id){
		Connection conn = ConnectDB.getConnection();
		String sql="select * from users where id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();
			if(rs.next()){
				String sql1="delete from users where id = ?";
			    ps = conn.prepareStatement(sql1);
			    ps.setInt(1, id);
			    ps.executeUpdate();
			    return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			ConnectDB.closeConnection(conn);
		}
		return false;
	}
	
	
	
	/**
	 * 鐢ㄦ埛鐧诲綍
	 * @param username 鐢ㄦ埛鍚�
	 * @param password 瀵嗙爜
	 * @return 鐢ㄦ埛瀵硅薄
	 */
	public User login(String username, String password){
		User user = null;
		// 鑾峰彇鏁版嵁搴撹繛鎺onnection瀵硅薄
		Connection conn = ConnectDB.getConnection();
		// 鏍规嵁鐢ㄦ埛鍚嶅強瀵嗙爜鏌ヨ鐢ㄦ埛淇℃伅
		String sql = "select * from users where username = ? and password = ? ";
		try {
			//鑾峰彇PreparedStatement瀵硅薄
			PreparedStatement ps = conn.prepareStatement(sql);
			// 瀵筍QL璇彞鐨勫崰浣嶇鍙傛暟杩涜鍔ㄦ�佽祴鍊�
			ps.setString(1, username);
			ps.setString(2, password);
			// 鎵ц鏌ヨ鑾峰彇缁撴灉闆�
			ResultSet rs = ps.executeQuery();
			// 鍒ゆ柇缁撴灉闆嗘槸鍚︽湁鏁�
			if(rs.next()){
				// 瀹炰緥鍖栦竴涓敤鎴峰璞�
				user = new User();
				// 瀵圭敤鎴峰璞″睘鎬ц祴鍊�
				user.setId(rs.getInt("id"));
				user.setUsername(rs.getString("username"));
				user.setPassword(rs.getString("password"));
	
			}
			// 閲婃斁姝� ResultSet 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
			rs.close();
			// 閲婃斁姝� PreparedStatement 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
			ps.close();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			// 鍏抽棴鏁版嵁搴撹繛鎺�
			ConnectDB.closeConnection(conn);
		}
		return user;
	}
	/**
	 * 鍒ゆ柇鐢ㄦ埛鍚嶅湪鏁版嵁搴撲腑鏄惁瀛樺湪
	 * @param username 鐢ㄦ埛鍚�
	 * @return 甯冨皵鍊�
	 */
	public boolean userIsExist(String username){
		// 鑾峰彇鏁版嵁搴撹繛鎺onnection瀵硅薄
		Connection conn = ConnectDB.getConnection();
		// 鏍规嵁鎸囧畾鐢ㄦ埛鍚嶆煡璇㈢敤鎴蜂俊鎭�
		String sql = "select * from users where username = ?";
		try {
			// 鑾峰彇PreparedStatement瀵硅薄
			PreparedStatement ps = conn.prepareStatement(sql);
			// 瀵圭敤鎴峰璞″睘鎬ц祴鍊�
			ps.setString(1, username);
			// 鎵ц鏌ヨ鑾峰彇缁撴灉闆�
			ResultSet rs = ps.executeQuery();
			// 鍒ゆ柇缁撴灉闆嗘槸鍚︽湁鏁�
			if(!rs.next()){
				// 濡傛灉鏃犳晥鍒欒瘉鏄庢鐢ㄦ埛鍚嶅彲鐢�
				return true;
			}
			// 閲婃斁姝� ResultSet 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
			rs.close();
			// 閲婃斁姝� PreparedStatement 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
			ps.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			// 鍏抽棴鏁版嵁搴撹繛鎺�
			ConnectDB.closeConnection(conn);
		}
		return false; 
	}
	
//	//鍒ゆ柇杈撳叆鐨勭敤鎴峰悕涓庨偖绠辨槸鍚﹀尮閰�
//	public boolean emailIsTrue(String username,String email){
//		Connection conn = ConnectDB.getConnection();
//		String sql = "select * from tb_user where username = ? and email=?";
//		try {
//			// 鑾峰彇PreparedStatement瀵硅薄
//			PreparedStatement ps = conn.prepareStatement(sql);
//			// 瀵圭敤鎴峰璞″睘鎬ц祴鍊�
//			ps.setString(1, username);
//			ps.setString(2, email);
//
//			ResultSet rs = ps.executeQuery();
//			//  鍒ゆ柇缁撴灉闆嗘槸鍚︽湁鏁�
//			if(rs.next()){
//				return true;
//			}
//			// 閲婃斁姝� ResultSet 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
//			rs.close();
//			// 閲婃斁姝� PreparedStatement 瀵硅薄鐨勬暟鎹簱鍜� JDBC 璧勬簮
//			ps.close();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}finally{
//			// 鍏抽棴鏁版嵁搴撹繛鎺�
//			ConnectDB.closeConnection(conn);
//		}
//		return false;		
//	}
//	
//	
//	//鎵惧洖瀵嗙爜,鎻掑叆淇℃伅 ,杩欓噷鐨刣ate鏄痡ava.sql.Date
//	public boolean insertInfo(ResetPassInfo resetPassInfo ) {
//		int count = 0;
//		Connection conn = ConnectDB.getConnection();
//		String sql = "insert into resetPass(username,email,outdate,signature,state) values(?,?,?,?,?)";
//			PreparedStatement ps;
//			try {
//				ps = conn.prepareStatement(sql);
//				ps.setString(1, resetPassInfo.getUsername());
//				ps.setString(2, resetPassInfo.getEmail());
//				ps.setTimestamp(3, resetPassInfo.getOutdate());
//				ps.setString(4, resetPassInfo.getSignature());
//				ps.setBoolean(5, resetPassInfo.isState());
//				count=ps.executeUpdate();
//				if(count!=0){
//					return true;
//				}
//				ps.close();
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}finally{
//				ConnectDB.closeConnection(conn);
//			}
//			return false;
//	
//	}
//	
//	//鍒ゆ柇閾炬帴鏄惁鏈夋晥
//	public boolean checkResetLink(String username,String validkey){
//		Connection conn = ConnectDB.getConnection();
//	    String sql = "select signature,outdate from resetPass where username = ?";
//	    try{
//	       PreparedStatement ps = conn.prepareStatement(sql);
//	       ps.setString(1, username);
//	       ResultSet rs = ps.executeQuery();
//	       if(rs.last()){//鍙湁鏈�鍚庝竴鏉¤繛鎺ユ湁鏁�
//	    	   String signature = rs.getString(1);
//	    	   Timestamp outdate=rs.getTimestamp(2);
//	    	  if(signature.equals(validkey)){
////		          long current = System.currentTimeMillis();
////		          long time = rs.getTimestamp(outdate).getTime();
//		          if(outdate.getTime()>System.currentTimeMillis()){
//		        	  //琛ㄧず閾炬帴杩樻病杩囨湡
//		              ps.close();
//		              conn.close();
//		              return true;
//		          }else{
//		              ps.close();
//		              conn.close();
//		              return false;
//		          }
//	    	  }
//
//          }
//	   }catch (Exception e) {
//  			e.printStackTrace();
//  		}finally{
//  			// 鍏抽棴鏁版嵁搴撹繛鎺�
//  			ConnectDB.closeConnection(conn);
//  		}
//  		return false;	
//	    }
//	
//	
//	public boolean resetPass(String username,String password){
//		Connection conn = ConnectDB.getConnection();		
//		String sql = "select state from resetPass where username = ? ";		
//		PreparedStatement ps;
//		try {
//			ps = conn.prepareStatement(sql);
//			ps.setString(1, username);
//		    ResultSet rs = ps.executeQuery();
//		    if(rs.last()){
//		    	if(!rs.getBoolean(1)){
//		    		//瀵嗙爜閲嶇疆
//		    		String sql1 = "update tb_user set password=? where username = ? ";	
//		    		ps = conn.prepareStatement(sql1);
//		    		ps.setString(2, username);
//		    		ps.setString(1, password);
//		    		ps.executeUpdate();
//		    		int count=ps.executeUpdate();
//		    		String sql2 = "update resetPass set state=? where username = ? ";
//		    		ps = conn.prepareStatement(sql2);
//		    		ps.setString(2, username);
//		    		ps.setBoolean(1, true);
//		    		ps.executeUpdate();
//		    		if(count!=0){
//		    			return true;
//		    		}
//		    	}
//		    }
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		//return false;
//		return false;
//	    
//            
//            
//		
//	}
}


   