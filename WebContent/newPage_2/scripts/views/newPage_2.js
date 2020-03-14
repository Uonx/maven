$ns("newPage_2.views");

newPage_2.views.newPage_2=function(){
	var me = $extend(mx.views.View);
	var base = {};
	base.init = me.init;
	me.init = function () {
		me.permissionID = "-1";
		base.init();
		_initControls();
	};
	
	//----声明mx组件变量------
	var _rootPane = null;

	var _rootPane_middle = null;

	var _panelCenter = null;

	var _panelCenter_middle = null;

	var _panel1 = null;

	var _panel2 = null;

	var _label2 = null;

	var _panel3 = null;

	var _panel7 = null;

	var _panel8 = null;

	var _panel4 = null;

	var _tabPanel2 = null;

	var _tab_panel19 = null;

	var _panel19 = null;

	var _label40 = null;

	var _label31 = null;

	var _textField24 = null;

	var _label32 = null;

	var _textField26 = null;

	var _label33 = null;

	var _textField27 = null;

	var _label35 = null;

	var _textField28 = null;

	var _label36 = null;

	var _textField29 = null;

	var _label37 = null;

	var _textField30 = null;

	var _label39 = null;

	var _textField31 = null;

	var _tabPanel3 = null;

	var _tab_panel11 = null;

	var _panel11 = null;

	var _panel12 = null;

	var _button3 = null;

	var _button2 = null;

	var _CustomDataTable5 = null;

	var _panel14 = null;

	var _panel15 = null;

	var _label14 = null;

	var _CustomDataForm1 = null;

	var _Window = null;

	
	function _initControls(){
		//---调用初始化函数-----
		_init_rootPane();

		_init_rootPane_middle();

		_init_panelCenter();

		_init_panelCenter_middle();

		_init_panel1();

		_init_panel2();

		_init_label2();

		_init_panel3();

		_init_panel7();

		_init_panel8();

		_init_panel4();

		_init_tabPanel2();

		_init_tab_panel19();

		_init_panel19();

		_init_label40();

		_init_label31();

		_init_textField24();

		_init_label32();

		_init_textField26();

		_init_label33();

		_init_textField27();

		_init_label35();

		_init_textField28();

		_init_label36();

		_init_textField29();

		_init_label37();

		_init_textField30();

		_init_label39();

		_init_textField31();

		_init_tabPanel3();

		_init_tab_panel11();

		_init_panel11();

		_init_panel12();

		_init_button3();

		_init_button2();

		_init_CustomDataTable5();

		_init_panel14();

		_init_panel15();

		_init_label14();

		_init_CustomDataForm1();

	  

		me.on("activate", me.controller._onactivate);
	}
	
	//-----定义初始化函数-----
	function _init_rootPane(){
		_rootPane=new mx.containers.PanelLayout({bottomPanelResizable:false,middlePanelWidth:"99%",bottomPanelVisible:true,topPanelResizable:false,leftPanelVisible:false,topPanelVisible:false,middlePanelHeight:"99%",leftPanelResizable:false,rightPanelVisible:false,width:"100%",id:"rootPane",rightPanelResizable:false,height:"100%"});
		me.addControl(_rootPane);
	}	

	
	function _init_rootPane_middle(){
		_rootPane_middle = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"_rootPane_middle"
		});
		
		_rootPane.addControl(_rootPane_middle,"middle");
	}
	
	function _init_panelCenter(){
		_panelCenter=new mx.containers.PanelLayout({bottomPanelResizable:false,middlePanelWidth:"99%",bottomPanelVisible:true,css:{overflow:'hidden'},topPanelResizable:false,leftPanelVisible:false,topPanelVisible:false,middlePanelHeight:"99%",leftPanelResizable:false,rightPanelVisible:false,width:"100%",id:"panelCenter",rightPanelResizable:false,height:"100%"});
		_rootPane_middle.addControl(_panelCenter);
	}	

	
	function _init_panelCenter_middle(){
		_panelCenter_middle = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"_panelCenter_middle"
		});
		
		_panelCenter.addControl(_panelCenter_middle,"middle");
	}
	
	function _init_panel1(){
		_panel1=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			id:"panel1",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'4%,96%',cols:'100%'}
});
		
		_panelCenter_middle.addControl(_panel1);
	}
	
	function _init_panel2(){
		_panel2=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},id:"panel2",height:"100%"});
		_panel1.addControl(_panel2);
	}	

	
	function _init_label2(){
		_label2=new mx.controls.Label({css:{fontSize:'20px',float:'left',marginTop:-6,marginLeft:10},width:"170px",fontSize:"20px",autoWrap:true,id:"label2",text:"凭证预览",height:"39px"});
		_panel2.addControl(_label2);
	}	

	
	function _init_panel3(){
		_panel3=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel3",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'2%,13%,2.5%,40%,2.5%,40%',cols:'100%'}
});
		
		_panel1.addControl(_panel3);
	}
	
	function _init_panel7(){
		_panel7=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel7",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'50%,50%',cols:'50%,50%'}
});
		
		_panel3.addControl(_panel7);
	}
	
	function _init_panel8(){
		_panel8=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:4,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel8",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'50%,50%',cols:'50%,50%'}
});
		
		_panel3.addControl(_panel8);
	}
	
	function _init_panel4(){
		_panel4=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel4",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'100%',cols:'100%'}
});
		
		_panel3.addControl(_panel4);
	}
	
	function _init_tabPanel2(){
		_tabPanel2=new mx.containers.TabControl({css:{textAlign:'left',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},id:"tabPanel2",height:"100%"});
		_panel4.addControl(_tabPanel2);
	}	

	
	function _init_tab_panel19(){
		_tab_panel19=new mx.containers.TabPage({layout:"FlowLayout",autoInit:true,name:"新建流式布局19",id:"tab_panel19",text:"凭证抬头"});
		_tabPanel2.appendPage(_tab_panel19);
	}
	
	function _init_panel19(){
		_panel19=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",id:"panel19",height:"100%"});
		_tab_panel19.addControl(_panel19);
	}	

	
	function _init_label40(){
		_label40=new mx.controls.Label({css:{float:'left',marginTop:16,marginLeft:10},width:"20px",autoWrap:true,id:"label40",height:"21px"});
		_panel19.addControl(_label40);
	}	

	
	function _init_label31(){
		_label31=new mx.controls.Label({css:{fontSize:'15px',float:'left',marginTop:11,marginLeft:10},width:"70px",fontSize:"15px",autoWrap:true,id:"label31",text:"公司代码",height:"30px"});
		_panel19.addControl(_label31);
	}	

	
	function _init_textField24(){
		_textField24=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField24",
				width:"50px",
				textMode:"normal",
				id:"textField24",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField24.$input.css(inputCss);
		_panel19.addControl(_textField24);
	}
	
	function _init_label32(){
		_label32=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label32",text:"凭证类型",height:"30px"});
		_panel19.addControl(_label32);
	}	

	
	function _init_textField26(){
		_textField26=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField26",
				width:"50px",
				textMode:"normal",
				id:"textField26",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField26.$input.css(inputCss);
		_panel19.addControl(_textField26);
	}
	
	function _init_label33(){
		_label33=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label33",text:"记账日期",height:"30px"});
		_panel19.addControl(_label33);
	}	

	
	function _init_textField27(){
		_textField27=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField27",
				width:"50px",
				textMode:"normal",
				id:"textField27",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField27.$input.css(inputCss);
		_panel19.addControl(_textField27);
	}
	
	function _init_label35(){
		_label35=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label35",text:"货币",height:"30px"});
		_panel19.addControl(_label35);
	}	

	
	function _init_textField28(){
		_textField28=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField28",
				width:"50px",
				textMode:"normal",
				id:"textField28",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField28.$input.css(inputCss);
		_panel19.addControl(_textField28);
	}
	
	function _init_label36(){
		_label36=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label36",text:"参照",height:"30px"});
		_panel19.addControl(_label36);
	}	

	
	function _init_textField29(){
		_textField29=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField29",
				width:"50px",
				textMode:"normal",
				id:"textField29",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField29.$input.css(inputCss);
		_panel19.addControl(_textField29);
	}
	
	function _init_label37(){
		_label37=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label37",text:"制证人",height:"30px"});
		_panel19.addControl(_label37);
	}	

	
	function _init_textField30(){
		_textField30=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField30",
				width:"50px",
				textMode:"normal",
				id:"textField30",
				height:"30px"
		});
		var inputCss = {backgroundColor:'rgb(242, 242, 242)'};
		_textField30.$input.css(inputCss);
		_panel19.addControl(_textField30);
	}
	
	function _init_label39(){
		_label39=new mx.controls.Label({css:{float:'left',marginTop:11,marginLeft:10},textAlign:"center",width:"70px",autoWrap:true,id:"label39",text:"抬头文本",height:"30px"});
		_panel19.addControl(_label39);
	}	

	
	function _init_textField31(){
		_textField31=new mx.editors.TextEditor({
				css:{float:'left',marginTop:11,marginLeft:10},
				lineBreak:false,
				name:"textField31",
				width:"197px",
				textMode:"normal",
				id:"textField31",
				height:"30px"
		});
		_panel19.addControl(_textField31);
	}
	
	function _init_tabPanel3(){
		_tabPanel3=new mx.containers.TabControl({css:{textAlign:'left',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:0,rowSpan:1,colSpan:1},id:"tabPanel3",height:"100%"});
		_panel3.addControl(_tabPanel3);
	}	

	
	function _init_tab_panel11(){
		_tab_panel11=new mx.containers.TabPage({layout:"GridLayout",autoInit:true,name:"新建网格布局11",id:"tab_panel11",text:"凭证行项目"});
		_tabPanel3.appendPage(_tab_panel11);
	}
	
	function _init_panel11(){
		_panel11=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			id:"panel11",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'85%,15%',cols:'100%'}
});
		
		_tab_panel11.addControl(_panel11);
	}
	
	function _init_panel12(){
		_panel12=new mx.containers.Container({css:{overflow:'hidden',textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},id:"panel12",height:"100%"});
		_panel11.addControl(_panel12);
	}	

	
	function _init_button3(){
		_button3=new mx.controls.Button({css:{backgroundColor:'rgb(226, 226, 226)',color:'black',float:'left',marginTop:2,marginLeft:10},width:"70px",id:"button3",text:"新增",height:"30px"});
		_button3.on("click", me._button3_onclick);
		_button3.on('click',button3_onclick);
		_panel12.addControl(_button3);
	}	
  	function button3_onclick(e){
	        		    		 _CustomDataForm1.load();
	}

	
	function _init_button2(){
		_button2=new mx.controls.Button({css:{backgroundColor:'rgb(226, 226, 226)',color:'black',float:'left',marginTop:2,marginLeft:10},width:"70px",id:"button2",text:"保存",height:"30px"});
		_button2.on("click", me._button2_onclick);
		_button2.on('click',button2_onclick);
		_panel12.addControl(_button2);
	}	
  	function button2_onclick(e){
	        			var client = new mx.rpc.RESTClient();
		    		    	    var data = {"items":_CustomDataForm1.entityContainer.getChangedItems()};
		   client.post('http://20.10.104.190:8082/zDzzYs/save',  JSON.stringify(data), function(obj) {
		   if(obj.successful == true) {
				mx.indicate("info", "保存成功。");
				var parName = _CustomDataForm1.entityContainer.primaryKey;
				_CustomDataForm1.load(obj.resultValue.items[0][parName]);
				_CustomDataTable5.load();
			}else {
				mx.indicate("info", "保存失败。");
			}
		  });
			
	}

	

	var _CustomDataTable5_excelUrlParms = new mx.utils.ExcelUtil({baseUrl:Constant.gatewayURL+'/zDzzYs/'});
	var _CustomDataTable5_excelParms = {'tableName':'null','columnNames':'null,null,null,null,null,null,null,null,null,null,null,null,null,null','pageIndex':'1', 'pageSize':'20','columnCaptions':'id,记账科目,特别总账标识,备选统驭科目,供应商,税率,税项,成本中心,内部订单,利润中心,WBS,原因代码,文本,现金预算项','fileName':'zYs'};
  
	function _init_CustomDataTable5(){
		var gridEntityContainer = new mx.datacontainers.GridEntityContainer({
			baseUrl:Constant.gatewayURL+'/zDzzYs/',
			loadMeta:false,
			iscID:"-1",
			primaryKey:"id"
		});
		
		_CustomDataTable5 = new mx.datacontrols.DataGrid({
			columns:[
				{visible:false,dataAlign:"center",name:"id",width:"111px",caption:"id",id:"_column0",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"jzkm",width:"61px",caption:"记账科目",id:"_column1",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"tbzzbs",width:"94px",caption:"特别总账标识",id:"_column2",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"bxtykm",width:"93px",caption:"备选统驭科目",id:"_column3",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"gys",width:"87px",caption:"供应商",id:"_column4",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"sl",width:"61px",caption:"税率",id:"_column6",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"sx",width:"75px",caption:"税项",id:"_column7",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"cbzx",width:"64px",caption:"成本中心",id:"_column8",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"nbdd",width:"84px",caption:"内部订单",id:"_column9",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"lrzx",width:"48px",caption:"利润中心",id:"_column10",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"wbs",width:"58px",caption:"WBS",id:"_column11",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"yydm",width:"32px",caption:"原因代码",id:"_column12",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"wb",width:"49px",caption:"文本",id:"_column13",align:"center",editorType:"TextEditor"},
				{dataAlign:"center",name:"xjysx",width:"49px",caption:"现金预算项",id:"_column14",align:"center",editorType:"TextEditor"}
			],
			
			allowEditing:true,
			allowPaging:true,
			refDataSource:"zYs",
			pageSize:5,
			allowSorting:false,
			pageIndex:1,
			width:"100%",
			layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},
			displayCheckBox:false,
			id:"CustomDataTable5",
			autoWrap:false,
			height:"100%",
			pageNaviBar:new mx.datacontrols.PageNaviBar({
				pageIndex:1,
				pageSize:5,
				id:"PageNaviBar63"
			}),
			entityContainer: gridEntityContainer
		});
		
		_CustomDataTable5.load();
		_panel11.addControl(_CustomDataTable5);
	}
	
	function _init_panel14(){
		_panel14=new mx.containers.Container({			layout:"TableLayout",
			css:{backgroundColor:'white',overflow:'hidden'},
			width:"100%",
			layoutConfigs:{rowIndex:5,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel14",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'15%,85%',cols:'100%'}
});
		
		_panel3.addControl(_panel14);
	}
	
	function _init_panel15(){
		_panel15=new mx.containers.Container({css:{overflow:'hidden',textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},id:"panel15",height:"100%"});
		_panel14.addControl(_panel15);
	}	

	
	function _init_label14(){
		_label14=new mx.controls.Label({css:{float:'left',marginTop:1,marginLeft:10},width:"170px",autoWrap:true,id:"label14",text:"分录详细信息：",height:"35px"});
		_panel15.addControl(_label14);
	}	

	
     //加载表单信息
     
    
	function _init_CustomDataForm1(){
		var formEntityContainer = new mx.datacontainers.FormEntityContainer({
			baseUrl:Constant.gatewayURL+'/zDzzYs/',
			loadMeta:false,
			iscID:"-1",
			primaryKey:"id",
			meta:
			[
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"jzkm",caption:"记账科目"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"tbzzbs",caption:"特别总账标识"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"bxtykm",caption:"备选统驭科目"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"gys",caption:"供应商"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"sl",caption:"税率"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"sx",caption:"税项"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"cbzx",caption:"成本中心"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"nbdd",caption:"内部订单"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"lrzx",caption:"利率中心"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"wbs",caption:"WBS"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"yydm",caption:"原因代码"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"wb",caption:"文本"},
				{readOnly:false,nullable:true,visible:true,valueType:"string",name:"xjysx",caption:"现金预算项"}
			]
		});
		
		_CustomDataForm1 = new mx.datacontrols.DataForm({
			width:"990px",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"CustomDataForm1",
			captionColumnWidth:99,
			maxCols:3,
			height:"218px",
			fields:
			[
				{lineBreak:false,name:"jzkm",caption:"记账科目",textMode:"normal",id:"ctmfld2",editorType:"TextEditor"},
				{lineBreak:false,name:"tbzzbs",caption:"特别总账标识",textMode:"normal",id:"ctmfld4",editorType:"TextEditor"},
				{lineBreak:false,name:"bxtykm",caption:"备选统驭科目",textMode:"normal",id:"ctmfld04",editorType:"TextEditor"},
				{lineBreak:false,name:"gys",caption:"供应商",textMode:"normal",id:"ctmfld6",editorType:"TextEditor"},
				{lineBreak:false,name:"sl",caption:"税率",textMode:"normal",id:"ctmfld8",editorType:"TextEditor"},
				{lineBreak:false,name:"sx",caption:"税项",textMode:"normal",id:"ctmfld17",editorType:"TextEditor"},
				{lineBreak:false,name:"cbzx",caption:"成本中心",textMode:"normal",id:"ctmfld10",editorType:"TextEditor"},
				{lineBreak:false,name:"nbdd",caption:"内部订单",textMode:"normal",id:"ctmfld18",editorType:"TextEditor"},
				{lineBreak:false,name:"lrzx",caption:"利率中心",textMode:"normal",id:"ctmfld19",editorType:"TextEditor"},
				{lineBreak:false,name:"wbs",caption:"WBS",textMode:"normal",id:"ctmfld11",editorType:"TextEditor"},
				{lineBreak:false,name:"yydm",caption:"原因代码",textMode:"normal",id:"ctmfld21",editorType:"TextEditor"},
				{lineBreak:false,name:"wb",caption:"文本",textMode:"normal",id:"ctmfld12",editorType:"TextEditor"},
				{lineBreak:false,name:"xjysx",caption:"现金预算项",textMode:"normal",id:"ctmfld22",editorType:"TextEditor"}
			],
			entityContainer: formEntityContainer
		});
		
		_panel14.addControl(_CustomDataForm1);
	}
	
	function _init_Window() {		
		if(_Window == null || ((_Window.reusable==false) && _Window.disposed==true)) {
			_Window = newPage_2.context.windowManager.create({
				entry:true
			});
		}
		_Window.on("activate", function() {
			_Window.setView(me);
		});
		_Window.on("close", function(e){
		    $.each(_Window.controls, function(i, o){
				o.$e.detach();
			});
		});
	}
	
	me.getWindow = function() {
		_init_Window();
		return _Window;
	};
	
	
	me.findControlById = function(controlId){
		try{
			return me.findControl("id", controlId);
		} catch(err) {
			mx.indicate("info","未找到对应的mx控件:    "+ err.message);
			return null;
		}	
	};
    return me.endOfClass(arguments);
};