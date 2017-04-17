Ext.ns("Morik", "Morik.Office", "Morik.Util", "Morik.Office.Department");
Morik.Office.MainingPanel = Ext.extend(Ext.TabPanel, {
	initComponent : function() {//这里通过initComponent函数来初始化mainPanel组件
		// 一些初始化工作
		Morik.Office.MainingPanel.superclass.initComponent.call(this);
		this._cache = {};

	},
	loadTab : function(node) {
		//
		var n = this.getComponent(node.name);//根据节点id，找到tablePanel中的子组件
		if (n) {
			this.setActiveTab(n);
		} else {
			var c = {
				//
				'id' : node.name,
				'title' : node.text,
				closable : true
			};
			//
			var pn = this.findPanel(node.name);
			n = this.add(pn ? new pn(c) : Ext.apply(c, {
				html : '你还没有实现该页面！'
			}))

			n.show().doLayout();
		}
		if (n.ds)
			n.ds.load({params:{start:0, limit:10}});
	},
	findPanel : function(name) {
		var ret = this._cache[name];//从手动建立的关系的集合查找
		if (!ret) {//找不到就采用指定的ns命名空间来构建，如果命名空间没有指定，采用默认命名空间
			var pn = (this.ns ? this.ns : 'Morik.Office') + "."
					+ Ext.util.Format.capitalize(name) + 'Panel';
			var ret = eval(pn);//通过字符串类名找到该类
		}
		return ret;//返回该类
	},
	addPanel : function(name, panel) {
		if (!this._cache)
			this._cache = {};
		this._cache[name] = panel;
	}
});
