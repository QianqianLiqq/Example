Ext.BLANK_IMAGE_URL = 'pic/blank.gif';

var reg = function() {
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	
	Ext.apply(Ext.form.VTypes,{ 
		password:function(val,field){//val指这里的文本框值，field指这个文本框组件，大家要明白这个意思 
		if(field.confirmTo){//confirmTo是我们自定义的配置参数，一般用来保存另外的组件的id值 
		var pwd=Ext.get(field.confirmTo);//取得confirmTo的那个id的值 
		return (val==pwd.getValue()); 
		} 
		return true; 
		} 
		}); 

	/*Ext.apply(Ext.form.VTypes, {
        password : function(val, field) {
            if (field.initialPassField) {
                var pwd = Ext.getCmp(field.initialPassField);
                return (val == pwd.getValue());
            }
            return true;
        },
        passwordText : '两次输入的密码不一致!'
    });*/
	
	var form = new Ext.FormPanel( {
		//defaultType : 'textfield',
		labelWidth : 60,
		style : 'background:#ffffff;padding:13px 30px 0px 16px;',
		region : "center",
		defaults : {
			border : false,
			allowBlank : false,
			msgTarget : 'side',
			blankText : '该字段不允许为空'
		},
		waitMsgTarget : true,
		items : [
				{
					fieldLabel : '账&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号',
					xtype:'textfield',
					name : 'username',
					width : 145,
					regex:/^[0-9a-zA-Z]{2,6}$/,
					regexText:'只能为两到六位的数字或大小写字母'
				},{
					height:5,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码',
					xtype:'textfield',
					inputType : 'password',
					name : 'password',
					width : 145,
					id:'pass1',
					inputType : 'password',
					regex:/^.{4,}$/,
					regexText:'长度不能少于四位'
				},{
					height:5,
					bodyStyle : 'opacity:0'
				},
				{
					fieldLabel : '确认密码',
					xtype:'textfield',
					width : 145,
					name : 'confirmPassword',
					inputType : 'password',
					id:"pass2",
					vtype : 'password',
					//initialPassField : 'pass1',
					vtypeText:"两次输入密码不一致！", 
					confirmTo:"pass1"//要比较的另外一个的组件的id 
				},{
					height:5,
					bodyStyle : 'opacity:0'
				},{	
					fieldLabel: '邮&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp箱',
					xtype:'textfield',
					name:'email',
					width : 145,					
                    regex: /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/,
                    regexText: '邮箱格式不正确'
					//labelStyle:"margin-left:100px;text-align:right"
				}],

				
		buttons : [ {
			text : '注册',
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
					url : 'RegServlet'			
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
		renderTo : 'loginpanel1',
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

	Ext.get('loginpanel1').setStyle('position', 'absolute')
			.center(Ext.getBody());

};

Ext.onReady(reg);

