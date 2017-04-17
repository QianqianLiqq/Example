Ext.BLANK_IMAGE_URL = 'pic/blank.gif';

var login = function() {
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	// 实现具体的功??

	var form = new Ext.FormPanel( {
		//defaultType : 'textfield',
		labelWidth : 60,
		style : 'background:#ffffff;padding:35px 32px 0px 16px;',
		region : "center",
		defaults : {
			border : false,
			allowBlank : false,
			msgTarget : 'side',
			blankText : '该字段不允许为空'
		},
		waitMsgTarget : true,
		items : [{
			xtype:'label',		    	   
		    //style:"margin-left:145px;",
		    labelWidth : 80,
		    html:'<font>请输入用户名和邮箱找回密码:</font>'	
		},{
			height:15,
			bodyStyle : 'opacity:0'
		},{	
			xtype:'textfield',
			fieldLabel : '用&nbsp户&nbsp名',
			name : 'username',
			width : 140,
			regex:/^[0-9a-zA-Z]{2,6}$/,
			regexText:'只能为两到六位的数字或大小写字母'
			//style:"margin-left:130px;",
			//labelStyle:"margin-left:100px;text-align:right"
		},{
			height:10,
			bodyStyle : 'opacity:0'
		},{	
			xtype:'textfield',
			name:'email',
			width : 140,
			fieldLabel: '邮&nbsp&nbsp&nbsp&nbsp&nbsp箱',
            regex: /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/,
            regexText: '邮箱格式不正确'
			//labelStyle:"margin-left:100px;text-align:right"
		}],
		buttons : [ {
			text : '确定',
			handler : function() {
				form.getForm().submit( {
					success : function(f, a) {
						//OpenFullWin(a.result.url);
						window.location.href = a.result.url;
						// window.open('main.html','','fullscreen=1');
					},
					failure : function(f, a) {
						//Ext.Msg.alert('Failure','用户名已存在');
						Ext.Msg.show({
				            title:'Failure',
				            msg:'用户名与邮箱不匹配'
						});
					},
					url : 'ResetPassServlet'			
				});
			}
		}, {
			text : '重置',
			handler : function() {
				form.getForm().reset();
			}
		}]


	});

	var panel = new Ext.Panel( {
		renderTo : 'loginpanel3',
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

	Ext.get('loginpanel3').setStyle('position', 'absolute')
			.center(Ext.getBody());

};

Ext.onReady(login);