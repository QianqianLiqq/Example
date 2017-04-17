Ext.BLANK_IMAGE_URL = 'pic/blank.gif';

var login = function() {
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	// 实现具体的功??

	var form = new Ext.FormPanel( {
		//defaultType : 'textfield',
		labelWidth : 60,
		style : 'background:#ffffff;padding:45px 0px 10px 16px;',
		region : "center",
		defaults : {
			border : false,
			allowBlank : false,
			msgTarget : 'side',
			blankText : '该字段不允许为空'
		},
		waitMsgTarget : true,
		items : [
//			    {
//					height:20,
//					bodyStyle : 'opacity:0'
//				},
				{
					fieldLabel : '登录账号',
					xtype:'textfield',
					name : 'username',
					regex:/^[0-9a-zA-Z]{2,6}$/,
					regexText:'只能为两到六位的数字或大小写字母'
				},{
					height:8,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '登录密码',
					xtype:'textfield',
					name : 'password',
					inputType : 'password',
					regex:/^.{4,}$/,
					regexText:'长度不能少于4位'
				},{
					height:8,
					bodyStyle : 'opacity:0'
				},
				{
					xtype:'panel',
					//height:29,
//					width:200,
//					style : 'margin:5px 0px 15px 140px;' ,
					style:"margin-left:0px;",
					//bodyStyle:{background: 'url(img/aaaa.png)'},//#4a681e
					//bodyStyle:{background: '#4a681e'},
					//bodyStyle:{background: 'rgba(0,0,0,0)'},
					border:false,
					//bodyStyle : 'opacity:0',
					layout:'column',
					items:[{
					    columnWidth: .45,
					    //bodyStyle:{background: '#4a681e'},
					    //bodyStyle:{background: 'url(img/aaaa.png)'},
					    border:false
					},
						{
						xtype:'button',
						width:60,
						text : '登录',
						handler : function() {
				           form.getForm().submit({
					          success : function(f, a) {
						      //OpenFullWin(a.result.url);
						      window.location.href = a.result.url;
						   // window.open('main.html','','fullscreen=1');
					          },
					          failure : function(f, a) {
					          	//Ext.Msg.alert('Failure','用户名或密码错误');
						         Ext.Msg.show({
				                   title:'Failure',
				                   msg:'用户名或密码错误'
						         });
					          },
					         url : 'LoginServlet',
					         waitMsg : '正在登录，请稍等...'
				           });
						}
					},{
					    columnWidth: .15,
					    //bodyStyle:{background: '#4a681e'},
					    border:false
					},{
						xtype:'button',
						width:60,
						text : '取消',
						 handler : function() {
				            form.getForm().reset();
			            }
					}]
				},{
					height:15,
					bodyStyle : 'opacity:0'
				},{
					id : 'file2',
					//hidden: true, 
					xtype : 'label',					
					style:"margin-left:150px;font-size: 13px",
					html:'<a href=register.html><font color=blue>注册账号</font></a>'
					
				}]
				
//		buttons : [ {
//			text : '登录',
//			handler : function() {
//				form.getForm().submit( {
//					success : function(f, a) {
//						OpenFullWin(a.result.url);
//						// window.location.href = a.result.url;
//						// window.open('main.html','','fullscreen=1');
//					},
//					failure : function(f, a) {
//						//Ext.Msg.alert('Failure','用户名或密码错误');
//						Ext.Msg.show({
//				            title:'Failure',
//				            msg:'用户名或密码错误'
//						});
//					},
//					url : 'LoginServlet',
//					waitMsg : '正在登录，请稍等...'
//				});
//			}
//		}, {
//			text : '取消',
//			handler : function() {
//				form.getForm().reset();
//			}
//		}]

	});

	var panel = new Ext.Panel( {
		renderTo : 'loginpanel',
		layout : "border",
		width : 525,
		height : 290,
		defaults : {
			border : false
		},
		items : [ {
			region : "north",
			height : 56,
			html : '<img src="pic/head.gif"/>'
		}, {
			region : "south",
			height : 56,
			html : '<img src="pic/foot.gif"/>'
		}, {
			region : "west",
			width : 253,
			html : '<img src="pic/left.gif"/>'
		}, form]
	});

	Ext.get('loginpanel').setStyle('position', 'absolute')
			.center(Ext.getBody());

};

Ext.onReady(login);

// listeners : {
// 'click' : function(t) {
// must adapt el.dom.src to set
// t.el.dom.src = 'IMG.action?time=' + new Date();
// },
// scope : this
// }

// var n = form.getForm().findField('user').getValue();
// var p = form.getForm().findField('pass').getValue();
// if (n == '123456' && p == '123456') {
// window.location.href = "main.html";
// window.open(document.URL,'','fullscreen=1');
// window.open('main.html','','fullscreen=1');
// } else {
// var a = function() {
// window.location.href = "default.html";
// };
// Ext.MessageBox.alert("出错", "你输入的员工编号或密码错误！请重新输入！", a);
// }
// }


