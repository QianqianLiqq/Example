Ext.BLANK_IMAGE_URL = 'pic/blank.gif';

var reg = function() {
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
	
	 var viewPort=new Ext.Viewport();
	 var sUserName = document.getElementById("userName").value;

	 
	 Ext.apply(Ext.form.VTypes,{ 
		password:function(val,field){//val指这里的文本框值，field指这个文本框组件，
		if(field.confirmTo){//confirmTo是我们自定义的配置参数，一般用来保存另外的组件的id值 
		var pwd=Ext.get(field.confirmTo);//取得confirmTo的那个id的值 
		return (val==pwd.getValue()); 
		} 
		return true; 
		} 
	 }); 


     var form = new Ext.FormPanel( {
		//defaultType : 'textfield',
		labelWidth : 60,
		style : 'background:#ffffff;padding:13px 40px 0px 16px;',
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
		    	    //style:'padding-top:9px',
		    	    //style:"margin-left:145px;",
		    	    labelWidth : 80,
		    	    html:'<font>请输入新密码:</font>'				
	            },{
					height:10,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '用&nbsp户&nbsp名',
					xtype:'textfield',
					value:sUserName,
					readOnly:true,
					name : 'username',
					//width : 150,
					regex:/^[0-9a-zA-Z]{2,6}$/,
					regexText:'只能为两到六位的数字或大小写字母'
				},{
					height:5,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '密&nbsp&nbsp&nbsp&nbsp&nbsp码',
					xtype:'textfield',
					//width : 150,
					name : 'password',
					id:'pass1',
					inputType : 'password',
					regex:/^.{4,}$/,
					regexText:'长度不能少于4位'
				},{
					height:5,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '确认密码',
					xtype:'textfield',
					inputType : 'password',
					//width : 150,
					name : 'confirmPassword',
					id:"pass2",
					vtype : 'password',
					//initialPassField : 'pass1',
					vtypeText:"两次输入密码不一致！", 
					confirmTo:"pass1"//要比较的另外一个的组件的id 
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
				            msg:'用户名已存在'
						});
					},
					url : 'ResetPassServlet2'			
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
		renderTo : 'loginpanel4',
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

	Ext.get('loginpanel4').setStyle('position', 'absolute')
			.center(Ext.getBody());

};

Ext.onReady(reg);