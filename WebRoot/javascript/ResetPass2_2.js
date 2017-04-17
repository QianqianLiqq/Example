Ext.BLANK_IMAGE_URL = 'pic/blank.gif';

var reg = function() {
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";
	Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

	
	
	var form = new Ext.FormPanel( {
		//defaultType : 'textfield',
		labelWidth : 60,
		style : 'background:#ffffff;padding:13px 0px 0px 16px;',
		region : "center",
		defaults : {
			border : false,
			allowBlank : false,
			msgTarget : 'side',
			blankText : '该字段不允许为空'
		},
		waitMsgTarget : true,
		items : [{
					height:40,
					bodyStyle : 'opacity:0'
				},{			
		    	    xtype:'label',
		    	    //style:'padding-top:9px',
		    	    //style:"margin-left:50px;",
		    	    labelWidth : 80,
		    	    html:'<font >对不起，您的找回密码链接已失效</font>'				
	            },{
					height:8,
					bodyStyle : 'opacity:0'
				},{
		    	    xtype:'label',
		    	    //style:'padding-top:9px',
		    	    style:"margin-left:70px;",
		    	    labelWidth : 80,
		    	    html:'<a href=http://localhost:8080/Example/resetPass.html><font color=blue>重新找回密码</font></a>'					        
		}]

	});

	var panel = new Ext.Panel( {
		renderTo : 'loginpanel5',
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

	Ext.get('loginpanel5').setStyle('position', 'absolute')
			.center(Ext.getBody());

};

Ext.onReady(reg);

