package com.lxy.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
	/**
	 * 数据库连接
	 * @author lixiyu
	 */
	public class ConnectDB {
		/**
		 * 获取数据库连接
		 * @return Connection对象
		 */
		public static Connection getConnection(){
			Connection conn = null;
			try {
				// 加载驱动
				Class.forName("com.mysql.jdbc.Driver");
				//Class.forName("oracle.jdbc.driver.OracleDriver");
				// 数据库连接url
				String url = "jdbc:mysql://localhost:3306/db_test2";
				//String url = "jdbc:oracle:thin:@localhost:1521:orcl";
				// 获取数据库连接
				conn = DriverManager.getConnection(url, "root", "19930210");
				//conn = DriverManager.getConnection(url, "scott", "tiger");
			} catch (Exception e) {
				e.printStackTrace();
			}
			return conn;
		}
		/**
		 * 关闭数据库连接
		 * @param conn Connection对象
		 */
		public static void closeConnection(Connection conn){
			// 判断conn是否为空
			if(conn != null){
				try {
					conn.close();	// 关闭数据库连接
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
