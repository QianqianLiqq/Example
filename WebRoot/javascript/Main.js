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
					+ 'Power By:	<span style="color:blue">华中科技大学</span> &nbsp;</div>'
					+ '<div	style="float:right;margin:10px;font:normal 12px tahoma, arial, sans-serif, 宋体;" >'
					+ '版权所有：<a href="http://www.morik.com">www.morik.com</a></div>'
					+ '</div>',
			height : 35
		});

		 

		var t1 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode( {
				text : "评价任务管理",
				expanded : true,
				children : [ {
					id : "docRec",
					text : "任务1",
					leaf : true
				}, {
					id : "docSend",
					text : "任务2",
					leaf : true
				}]
			})
		});

		var t2 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode( {
				text : "评价任务查询",
				expanded : true,
				children : [ {
					id : "department",
					text : "列表查询",
					leaf : true
				}, {
					id : "company",
					text : "统计分析",
					leaf : true
				}]
			})

		});
		
		
		var t3 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode( {
				text : "指标体系维护",
				expanded : true,
				children : [ {
					id : "department",
					text : "指标体系修改",
					leaf : true
				}, {
					id : "company",
					text : "指标体系查询",
					leaf : true
				}]
			})

		});

		
		var t4 = new Ext.tree.TreePanel( {
			border : false,
			rootVisible : false,
			root : new Ext.tree.AsyncTreeNode({text:"系统配置",id:"4",expanded : true}),
			loader:new Ext.tree.TreeLoader({dataUrl:'MenuServlet'})

		});
		t4.on("beforeload" , function(node,e){  
            t4.loader.dataUrl = 'MenuServlet?parentId='+node.id;            
        });  
       
        

		
//		var t4 = new Ext.tree.TreePanel( {
//			border : false,
//			rootVisible : false,
//			root : new Ext.tree.AsyncTreeNode({
//				text : "系统配置",
//				expanded : true,
//				children : [ {
//					id : "userconfig",
//					text : "用户及角色配置",
//					leaf : true
//				}, {
//					id : "permissionConfig",
//					text : "角色及权限配置",
//					leaf : true
//				}]
//
//			})
//
//		});
		
		
		var leftmenu = new Morik.Office.LeftMenu({
			title : '***综合评价',
		//	items : [ {
			//	title : '我的办公桌',
		//		items : [t1]
		//	}, {
		//		title : '主数据管理',
		//		items : [t2]
		//	}]
		 trees : [t1,t2,t3,t4]
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

		// 5、建立leftmenu和mainTab两者之间的关系 nodeAttr
		leftmenu.on("nodeClick", function(node) {
			mainTab.loadTab(node);
		});
		// 6、创建布局
		var viewport = new Ext.Viewport( {
			layout : 'border',
			style : 'border:#024459 2px solid;',
			items : [head, foot, leftmenu, mainTab]
		});

	});