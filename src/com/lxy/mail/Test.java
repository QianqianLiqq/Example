package com.lxy.mail;

public class Test { 
	 /** 
	  * @param args 
	  */ 
	 public static void main(String[] args) { 
	  // TODO Auto-generated method stub 
	  // 这个类主要是设置邮件 
	  MailSenderInfo mailInfo = new MailSenderInfo(); 
	  mailInfo.setMailServerHost("smtp.126.com"); // 发送邮箱的服务器163的邮箱就为smtp.163.com 
	    mailInfo.setMailServerPort("25"); 
	    mailInfo.setValidate(true); 
	    mailInfo.setUserName("*****");  // 邮箱账户 
	    mailInfo.setPassword("*****");// 邮箱密码 
	    mailInfo.setFromAddress("15029010036@126.com"); // 发送人的邮箱地址 
	    mailInfo.setToAddress("121374067@qq.com");  // 要发送的邮箱地址 
	    mailInfo.setSubject("**的主页"); // 邮箱标题 
	     
	    // 邮件内容 
	    // mailInfo.setContent("你好");  //文本格式的邮件内容 
	     
	    // html页面格式的邮件内容 
	    mailInfo.setContent("<div style='width:500px;height:100px;background-color:yellow;text-align:center;color:red;font-size:20px;border:solid red;'><b><a href='http://121374067.qzone.qq.com/'>欢迎来到我的主页</a></b></div>"); 
	 // 这个类主要来发送邮件 
	    SimpleMailSender sms = new SimpleMailSender(); 
	     
	    //boolean flag = sms.sendTextMail(mailInfo);// 发送文体格式 
	     
	    boolean flag = sms.sendHtmlMail(mailInfo);// 发送html格式 
	     
	    if(flag){ 
	      
	     System.out.println("发送成功"); 
	      
	    }else{ 
	      
	     System.out.println("发送失败"); 
	      
	    } 
	   } 
	   
 } 
	   

