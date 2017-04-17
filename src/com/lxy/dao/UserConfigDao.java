package com.lxy.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.lxy.User;
import com.mysql.jdbc.PreparedStatement;

public class UserConfigDao {
	private int pageSize=10;
	private int rowCount=0;//从数据库中得到
	private int pageCount =0;//一共有多少页通过pageSize和rowCount获得.
	private Connection conn =null;
	private Statement  sm =null;
	private ResultSet rs =null;

	//得到总页数
	public int getrowCount()
	{
		try
		{
			//得到连接
			conn =ConnectDB.getConnection();
			//3创建Statement 
			sm=conn.createStatement();
			//4查询
		    rs=sm.executeQuery("select count(*) from users ");
			if(rs.next())
			{
				rowCount =rs.getInt(1);
				//计算pageCount
				pageCount=(rowCount+pageSize-1)/pageSize;
				
			}
		}
		catch (Exception ex)
		{
			ex.printStackTrace();
		}
		finally
		{
			ConnectDB.closeConnection(conn);
		}
		return rowCount ;
	}
			
		
		//分页函数
		public String readUser(int pageNow,String message){
			List<User> al =new  ArrayList<User>();
			StringBuffer sb = new StringBuffer(); 
			rowCount=getrowCount();
			try
			{
				//得到连接
				conn = ConnectDB.getConnection();
				//3创建Statement 
				sm=conn.createStatement();
//				String sql="select top "+pageSize
//						 +" * from users where id not in ( select top "+pageSize*(pageNow-1)+" id from users )";
				String sql="select * from users where";
				if (message == null || "".equals(message)) {
					sql+=" id limit "+(pageNow-1)*pageSize+","+pageSize;
				     
				}else{
					sql += " username like '%"+message+"%' or name like '%"+message+"%' and id limit "+(pageNow-1)*pageSize+","+pageSize;
				}
				//sql+=" id limit "+(pageNow-1)*pageSize+","+pageSize;
				//查询出需要显示的记录.
				 rs=sm.executeQuery(sql);
				 while(rs.next())
				 {
					 User user =new User();
					 user.setId(rs.getInt(1));
					 user.setUsername(rs.getString(2));
					 user.setPassword(rs.getString(3));
					 user.setName(rs.getString(4));
					 user.setSex(rs.getString(5));
					 user.setAge(rs.getString(6));
					 user.setTelephone(rs.getString(7));
					 user.setUsertype(rs.getString(8));
					 //将ub放进al中
					 al.add(user);
				 }
					 
			     //拼接json串  
		         if(al!= null) { 
		             sb.append("{totalProperty:"+al.size()+",root:[");
		                for(int i=0;i<al.size();i++) {
		                	User user=al.get(i);
		                	sb.append("{id:'"+user.getId()+"',");
		                	sb.append("username:'"+user.getUsername()+"',");
		                	sb.append("password:'"+user.getPassword()+"',");
		                	sb.append("name:'"+user.getName()+"',");
		                	sb.append("sex:'"+user.getSex()+"',");
		                	sb.append("age:'"+user.getAge()+"',");
		                	sb.append("telephone:'"+user.getTelephone()+"',");
		                	sb.append("usertype:'"+user.getUsertype()+"'}");
		                	if(i!=al.size()-1) {         
	                            sb.append(",");  
	                        }  
		                }
		                sb.append("]}");
		         }
		         return sb.toString(); 
			}
			catch (Exception ex)
			{
				ex.printStackTrace();
			}
			finally
			{
				ConnectDB.closeConnection(conn);	
			}
			return "";
      }
		
		
		
}
