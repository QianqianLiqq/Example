Morik.Office.UserconfigPanel = function(config) {
	Morik.Office.UserconfigPanel.superclass.constructor.call(this, config);

	// 加上服务器上的jsp数据生成
	// 生成Company类型
	var proxy = new Ext.data.HttpProxy( {
		url : 'UserConfigServlet'
	});

	var recordType = new Ext.data.Record.create([ {
		name : "id",
		type : "int"
	}, {
		name : "username",
		type : "string"
	}, {
		name : "password",
		type : "string"
	},{
		name : "name",
		type : "string"
	},{
		name : "sex",
		type : "string"
	},{
		name : "age",
		type : "string"
	},{
		name : "telephone",
		type : "string"
	},{
		name : "usertype",
		type : "string"
	}]);

	// 定义分析器
	var reader = new Ext.data.JsonReader( {
		totalProperty : "totalProperty",
		root : "root",
		id : "id"
	}, recordType);

	// 定义store
	var ds = new Ext.data.Store( {
		proxy : proxy,
		reader : reader
	});
this.ds=ds;
	// 第二，讲一下cm,grid

	var cm = new Ext.grid.ColumnModel({
		defaultSortable : true,
		defaultWidth : 120,
		columns : [ {
			header : '用户编号',
			width : 80,
			name:'id',
			dataIndex : 'id'
		}, {
			header : '用户名',
			dataIndex : 'username'
		}, {
			header : '密码',
			//width : 300,
			dataIndex : 'password'
		},{
			header : '姓名',
			//width : 300,
			dataIndex : 'name'
		},{
			header : '性别',
			//width : 300,
			dataIndex : 'sex'
		},{
			header : '年龄',
			//width : 300,
			dataIndex : 'age'
		},{
			header : '联系方式',
			//width : 300,
			dataIndex : 'telephone'
		},{
			header : '身份',
			//width : 300,
			dataIndex : 'usertype'
		}]
	});
	
	//定义分页按钮
    var pagingBar = new Ext.PagingToolbar({
    	id:'pagingToolbar' ,
        pageSize: 10,
        store: ds,
        displayInfo: true,
        beforePageText:"第",
        afterPageText:"页，共{0}页",
        displayMsg: '共有 {2}，当前显示 {0} - {1}条',
        emptyMsg: "没有数据"
    });          
    var pagingToolbar = Ext.getCmp('pagingToolbar')
    //alert(pagingToolbar.getPageData().activePage) 
    
    
    //定义搜索控件
    var tbar=new Ext.Toolbar({
      items:[
      "请输入查询信息:",
      "-",
      {
       xtype:"textfield",
       name:"message",
       id:"message",
       emptyText:"==请输入==",
       allowBlank:false,
       validateOnBlur:true,//失去焦点验证
       blankText:"请输入要查询的信息",
       msgTarget:"side"       
      },
      "-",
      {
       id:"btnS",
       xtype:'button',
       text:"查询",
       handler:function(){      
       	  //用baseParams传递参数
       	  //往store添加baseParams
       	  var message=Ext.getCmp("message").getValue()
       	  //var baseParams={message: message}
       	  //Ext.apply(this.baseParams, baseParams);
          //Ext.apply(Ext.getCmp("grid").store.baseParams, { message: message });
          ds.load({params:{start:0,limit:10,message: message}});
       }
      }]
   });
   
   
    
	var grid = new Ext.grid.GridPanel( {
		id:'grid',
		cm : cm,
		store : ds,		
		width : 920,
		height : 400,
		bbar:pagingBar,
		loadMask:{msg:'正在载入数据,请稍等...'},
		tbar:tbar,//设置搜索控件
		title : '用户列表',
		buttons:[{
			id:"btnAdd",
			text:"添加用户",
			handler: function(){
				var form = new Ext.FormPanel({
					labelWidth : 60,
					layout:'form',
					defaults : {
						xtype:'textfield',
			            border : false,
			            allowBlank : false,
			            msgTarget : 'side',
			            blankText : '该字段不允许为空'
		            },
		            waitMsgTarget : true,
		            items:[{
		            	fieldLabel : '用&nbsp&nbsp户&nbsp&nbsp名',
		            	name : 'username',
					    regex:/^[0-9a-zA-Z]{2,6}$/,
					    regexText:'只能为两到六位的数字或大小写字母'
		            },{
					    fieldLabel : '密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码',
					    inputType : 'password',
					    name : 'password',
					    id:'pass1',
					    inputType : 'password',
					    regex:/^.{4,}$/,
					    regexText:'长度不能少于四位'
				    },{
				    	fieldLabel : '姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名',
					    name : 'name'	
				    },{
				    	fieldLabel : '性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别',
				        xtype : 'combo', 
				        name:'sex',
				        width:128,
				        store :['男','女'],
				        readOnly : true,  
				        triggerAction : 'all',
				        allowBlank : false,  
                        blankText : '必须选择用户性别'
				    },{
				    	fieldLabel : '年&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp龄',
					    name : 'age'
				    },{
				    	fieldLabel : '联系方式',
					    name : 'telephone'
				    },{
				    	fieldLabel : '身&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp份',
				        xtype : 'combo', 
				        name:'usertype',
				        width:128,
				        store :['普通用户','系统管理员'],
				        readOnly : true,  
				        triggerAction : 'all',
				        allowBlank : false,  
                        blankText : '必须选择用户身份'
				    }],
				    buttons:[{
				    	text : '添加',
			            handler : function() {
				        form.getForm().submit( {
					        success : function(f, a) {					        	
						         Ext.Msg.alert('提示消息','添加成功',function(){
						            win.close();
						            ds.load({params:{start:0,limit:10}});
						         }
						        
						        );
					        },
					        failure : function(f, a) {
						        Ext.Msg.alert('Failure','该用户已存在'
						        
						        );
//					 	        Ext.Msg.show({
//				                    title:'Failure',
//				                    msg:'该用户已存在'
//						        });
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
				var win = new Ext.Window({
                    items : [form]
                });
                win.show();
                win.setSize(250, 250);
			}		    
		},{
			id:"btnDel",
			text:"删除用户",			
			handler:function(){
				var rows = grid.getSelectionModel().getSelected();
				if(!rows){
				    Ext.Msg.alert("提示信息", "请选择一行");
				}else{
					Ext.Msg.confirm('提示信息','确定要删除用户？',function(btn){
				       if(btn=='yes'){	
				    	  Ext.Ajax.request({
				    	  url : 'DelServlet',
				    	  params: {data: rows.get("id")},
				    	  success: function (response, options){
				    	  	var respText = Ext.decode(response.responseText);
				    	  	if (respText.success){
				    	  		Ext.MessageBox.alert("提示信息",respText.info,function(){
				    	  		     ds.load({params:{start:0,limit:10}});
				    	  		})
				    	  	}else{
				    	  		 Ext.MessageBox.alert("提示信息",respText.info);
				    	  	}
				    	  }
				    	})
				    }
				})
				}
				
			}

		}]
	});
	//ds.load();	
    ds.load({params:{start:0,limit:10,message:""}});
	
    
   
	this.add(grid);
	// 第三、调整，tbar分页,工具栏
	
}
Ext.extend(Morik.Office.UserconfigPanel, Ext.Panel, {});