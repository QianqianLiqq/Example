package com.lxy.util;

import java.security.MessageDigest;

public class MD5Util {
	public final static String MD5(String s) {      
		  char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',      
		    'a', 'b', 'c', 'd', 'e', 'f' };      
		  try {      
		      byte[] strTemp = s.getBytes();
		      //���MD5ժҪ�㷨�� MessageDigest ����
		      MessageDigest mdTemp = MessageDigest.getInstance("MD5");  
		      //ʹ��ָ�����ֽڸ���ժҪ
		      mdTemp.update(strTemp);
		      //�������
		      byte[] md = mdTemp.digest();
		      //������ת����ʮ�����Ƶ��ַ�����ʽ
		      int j = md.length;      
		      char str[] = new char[j * 2];      
		      int k = 0;      
		      for (int i = 0; i < j; i++) {      
		         byte byte0 = md[i];      
		         str[k++] = hexDigits[byte0 >>> 4 & 0xf];      
		         str[k++] = hexDigits[byte0 & 0xf];      
		      }      
		      return new String(str);      
		  } catch (Exception e) {      
		      return null;      
		  }      
    }
	
//	public static void main(String[] args) {      
//		  //MD5Util aa = new MD5Util();      
//		  System.out.print(MD5Util.MD5("��˳ƽ"));      
//		 }      
		
}
