package com.lxy.mail;

public class Test { 
	 /** 
	  * @param args 
	  */ 
	 public static void main(String[] args) { 
	  // TODO Auto-generated method stub 
	  // �������Ҫ�������ʼ� 
	  MailSenderInfo mailInfo = new MailSenderInfo(); 
	  mailInfo.setMailServerHost("smtp.126.com"); // ��������ķ�����163�������Ϊsmtp.163.com�� 
	    mailInfo.setMailServerPort("25"); 
	    mailInfo.setValidate(true); 
	    mailInfo.setUserName("*****");  // �����˻� 
	    mailInfo.setPassword("*****");// �������� 
	    mailInfo.setFromAddress("15029010036@126.com"); // �����˵������ַ 
	    mailInfo.setToAddress("121374067@qq.com");  // Ҫ���͵������ַ 
	    mailInfo.setSubject("**����ҳ"); // ������� 
	     
	    // �ʼ����� 
	    // mailInfo.setContent("��ê�");  //�ı���ʽ���ʼ����� 
	     
	    // htmlҳ���ʽ���ʼ����� 
	    mailInfo.setContent("<div style='width:500px;height:100px;background-color:yellow;text-align:center;color:red;font-size:20px;border:solid red;'><b><a href='http://121374067.qzone.qq.com/'>��ӭ�����ҵ���ҳ��</a></b></div>"); 
	 // �������Ҫ�������ʼ� 
	    SimpleMailSender sms = new SimpleMailSender(); 
	     
	    //boolean flag = sms.sendTextMail(mailInfo);// ���������ʽ 
	     
	    boolean flag = sms.sendHtmlMail(mailInfo);// ����html��ʽ 
	     
	    if(flag){ 
	      
	     System.out.println("���ͳɹ���"); 
	      
	    }else{ 
	      
	     System.out.println("����ʧ�ܪ�"); 
	      
	    } 
	   } 
	   
 } 
	   

