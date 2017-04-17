package com.lxy.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.lxy.Menu;
import com.lxy.User;

import net.sf.json.JSONArray;

public class MenuDao {
	
    
	public String getMenuString(String parentId){
		List<Menu> menuArray=new  ArrayList<Menu>();
		Connection conn = ConnectDB.getConnection();
		Statement st = null;  
        ResultSet rs = null;
		String sql = "select * from Menu where parentId="+parentId+" order by id";
		try {
			st = conn.createStatement(); 
			rs = st.executeQuery("select parentId from Menu where parentId>0 group by parentId order by parentId"); 
			StringBuffer sb = new StringBuffer();   
			sb.append("|");
			while(rs.next()){
				sb.append(rs.getString("parentId"));
				sb.append("|");
			}
			String parentIDString=sb.toString();
			//System.out.println(parentIDString);
			rs=st.executeQuery(sql);
			while (rs.next()) { 
                Menu menu=new Menu();
                int id=rs.getInt(1);
                menu.setId(rs.getInt(1));
                menu.setText(rs.getString(2));
                menu.setParentId(rs.getInt(3));
                //menu.setLeaf(rs.getBoolean(4));
                menu.setName(rs.getString(5));
                //System.out.println("i="+parentIDString.indexOf("|"+id+"|"));
                if(parentIDString.indexOf("|"+id+"|")>=0){
                	menu.setLeaf(false);                	
                }else{
                	menu.setLeaf(true);
                }
                menuArray.add(menu);
            } 
			JSONArray JsonArray=JSONArray.fromObject(menuArray);
			System.out.println("返回的数据是："+JsonArray.toString());
//            if(menuArray!=null){
//            	System.out.println("ok2");
//            	sb.append("[");
//            	for(int i=0;i<menuArray.size();i++) {
//            		Menu menu=menuArray.get(i);
//            		sb.append("{tid:'"+menu.getTid()+"',");
//            		sb.append("text:'"+menu.getText()+"',");
//            		sb.append("left:'"+menu.isLeaf()+"'}");
//            		if(i!=menuArray.size()-1) {         
//                        sb.append(",");  
//                    }  
//            	}
//            	sb.append("]");
//            }  
            return JsonArray.toString();           
		} catch (Exception ex)
		{			
			ex.printStackTrace();
		}finally
		{
			ConnectDB.closeConnection(conn);	
		}
		return "";
	}

}
