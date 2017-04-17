package com.lxy.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
	/**
	 * ���ݿ�����
	 * @author lixiyu
	 */
	public class ConnectDB {
		/**
		 * ��ȡ���ݿ�����
		 * @return Connection����
		 */
		public static Connection getConnection(){
			Connection conn = null;
			try {
				// ��������
				Class.forName("com.mysql.jdbc.Driver");
				//Class.forName("oracle.jdbc.driver.OracleDriver");
				// ���ݿ�����url
				String url = "jdbc:mysql://localhost:3306/db_test2";
				//String url = "jdbc:oracle:thin:@localhost:1521:orcl";
				// ��ȡ���ݿ�����
				conn = DriverManager.getConnection(url, "root", "19930210");
				//conn = DriverManager.getConnection(url, "scott", "tiger");
			} catch (Exception e) {
				e.printStackTrace();
			}
			return conn;
		}
		/**
		 * �ر����ݿ�����
		 * @param conn Connection����
		 */
		public static void closeConnection(Connection conn){
			// �ж�conn�Ƿ�Ϊ��
			if(conn != null){
				try {
					conn.close();	// �ر����ݿ�����
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
