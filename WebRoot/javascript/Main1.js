Ext.onReady(function() {

	Ext.BLANK_IMAGE_URL = 'pic/s.gif';
	Ext.QuickTips.init();
	Ext.lib.Ajax.defaultPostHeader += ";charset=utf-8";

	// 1、创建head部分
		var head = new Ext.Panel({
			region : 'north',
			border : false,
			html : '<div style="background:url(pic/main1.gif) repeat-x; height:78px;"></div>',
			height : 80
		});

		// 2、创建foot部分
		var foot = new Ext.Panel({
			region : 'south',
			html : '<div style="background:url(pic/main2.gif) repeat-x; height:33px; ">'
					+ '<div style="float:left;font:normal 12px tahoma, arial, sans-serif, 宋体;margin:10px 0 0 10px;">'
					+ 'Power By:	<span style="color:blue">彭仁夔</span> &nbsp;</div>'
					+ '<div	style="float:right;margin:10px;font:normal 12px tahoma, arial, sans-serif, 宋体;" >'
					+ '版权所有：<a href="http://www.morik.com">www.morik.com</a></div>'
					+ '</div>',
			height : 35
		});

		// 3、创建leftMenu部分
		// var leftmenu = new Ext.Panel( {
		// region : 'west',
		// html : '<div>导航菜单</div>',
		// width : 200
		// });

		// 4、创建主内容部分
		// var mainTab = new Ext.Panel( {
		// region : 'center',
		// html : '<div>主内容部分</div>'
		// });

		var t1 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode( {
				text : "我的办公桌",
				expanded : true,
				children : [ {
					id : "docRec",
					text : "接收公文",
					leaf : true
				}, {
					id : "docSend",
					text : "发送公文",
					leaf : true
				}, {
					id : "docManage",
					text : "公文管理",
					leaf : true
				}]
			})
		});

		var t2 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode( {
				text : "主数据管理",
				expanded : true,
				children : [ {
					id : "department",
					text : "部门管理",
					leaf : true
				}, {
					id : "company",
					text : "公司管理",
					leaf : true
				}, {
					id : "permissions",
					text : "权限管理",
					children : [ {
						id : "permission",
						text : "权限管理",
						leaf : true
					}, {
						id : "permissionType",
						text : "权限类别",
						leaf : true
					}]
				}]
			})

		});

		var leftmenu = new Morik.Office.LeftMenu({
			title : '我的办公系统',
		//	items : [ {
			//	title : '我的办公桌',
		//		items : [t1]
		//	}, {
		//		title : '主数据管理',
		//		items : [t2]
		//	}]
		 trees : [t1, t2]
		});

		var mainTab = new Morik.Office.MainingPanel({
			style : 'padding:0 6px 0 0',
			autoScroll : true,
			region : 'center',
			deferredRender : false,
			activeTab : 0,
			resizeTabs : true,
			inTabWidth : 100,
			tabWidth : 90,
			enableTabScroll : true,
			items : [{
				title : '我的首页',
				html : '<div style="background:url(pic/main.gif) no-repeat center middle; height:508px;"></div>'
			}]
		});

		// 5、建立leftmenu和mainTab两者之间的关系
		leftmenu.on("nodeClick", function(nodeAttr) {
			mainTab.loadTab(nodeAttr);
		});
		// 6、创建布局
		var viewport = new Ext.Viewport( {
			layout : 'border',
			style : 'border:#024459 2px solid;',
			items : [head, foot, leftmenu, mainTab]
		});

	});