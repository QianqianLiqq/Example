Ext.ns("Morik", "Morik.Office", "Morik.Util", "Morik.Office.Department");
Morik.Office.LeftMenu = function(config) {
	var d = Ext.apply( {// default set
				width : 200,
				split : true,
				region : 'west',
				collapseMode :'mini',
				defaults : {
					border : false
				},
				layoutConfig : {
					animate : true
				}
			}, config || {});

	config = Ext.apply(d, {
		layout : 'accordion',//伸缩菜单布局
		collapsible : true
	});
	
	Morik.Office.LeftMenu.superclass.constructor.call(this, config);
	
	//改进，并为增加了个配置项tree!
	for(var i=0;i<this.trees.length;i++)		 
	 	this.add({title:this.trees[i].getRootNode().text,items:[this.trees[i]]});	

	// 事件处理
	this.addEvents('nodeClick');//注册事件名
	this.initTreeEvent();//运行事件监听函数
	}

Ext.extend(Morik.Office.LeftMenu, Ext.Panel, {
	initTreeEvent : function() {
		if(!this.items) return;
		for (var i = 0;i < this.items.length; i++) {//导航菜单每个子组件
			var p = this.items.itemAt(i);//每个子组件
			if (p)
			var t = p.items.itemAt(0);//每棵树
			if(t)
			t.on( {//通过树组件click事件来构建该leftmenu组件的nodeclick事件
				'click' : function(node, event) {
					if (node && node.isLeaf()) {
						event.stopEvent();//叶子节点，取消其默认事件处理
						this.fireEvent('nodeClick', node.attributes);//执行注册nodeclick事件注册的回调函数
					}
				},
				scope : this
			});
		}
	}
})
