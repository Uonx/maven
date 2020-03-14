$ns("newPage_1.views");

newPage_1.views.newPage_1=function(){
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

	var _label3 = null;

	var _label4 = null;

	var _panel7 = null;

	var _label6 = null;

	var _label7 = null;

	var _label9 = null;

	var _label10 = null;

	var _label11 = null;

	var _label12 = null;

	var _label13 = null;

	var _label14 = null;

	var _label15 = null;

	var _label16 = null;

	var _label18 = null;

	var _label19 = null;

	var _label20 = null;

	var _label21 = null;

	var _label22 = null;

	var _label23 = null;

	var _label24 = null;

	var _label25 = null;

	var _label26 = null;

	var _label43 = null;

	var _panel4 = null;

	var _panel5 = null;

	var _panel6 = null;

	var _label5 = null;

	var _panel8 = null;

	var _label27 = null;

	var _label28 = null;

	var _label30 = null;

	var _label31 = null;

	var _label32 = null;

	var _label33 = null;

	var _label34 = null;

	var _label35 = null;

	var _label36 = null;

	var _label37 = null;

	var _label38 = null;

	var _label39 = null;

	var _label40 = null;

	var _label41 = null;

	var _label42 = null;

	var _panel9 = null;

	var _panel10 = null;

	var _label44 = null;

	var _panel11 = null;

	var _label45 = null;

	var _label47 = null;

	var _label48 = null;

	var _label49 = null;

	var _label50 = null;

	var _label52 = null;

	var _label53 = null;

	var _label54 = null;

	var _label55 = null;

	var _label57 = null;

	var _label58 = null;

	var _label59 = null;

	var _label60 = null;

	var _label61 = null;

	var _label62 = null;

	var _label63 = null;

	var _label64 = null;

	var _label65 = null;

	var _label66 = null;

	var _label67 = null;

	var _rootPane_top = null;

	var _panelNorth = null;

	var _rootPane_left = null;

	var _panelWest = null;

	var _rootPane_right = null;

	var _panelEast = null;

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

		_init_label3();

		_init_label4();

		_init_panel7();

		_init_label6();

		_init_label7();

		_init_label9();

		_init_label10();

		_init_label11();

		_init_label12();

		_init_label13();

		_init_label14();

		_init_label15();

		_init_label16();

		_init_label18();

		_init_label19();

		_init_label20();

		_init_label21();

		_init_label22();

		_init_label23();

		_init_label24();

		_init_label25();

		_init_label26();

		_init_label43();

		_init_panel4();

		_init_panel5();

		_init_panel6();

		_init_label5();

		_init_panel8();

		_init_label27();

		_init_label28();

		_init_label30();

		_init_label31();

		_init_label32();

		_init_label33();

		_init_label34();

		_init_label35();

		_init_label36();

		_init_label37();

		_init_label38();

		_init_label39();

		_init_label40();

		_init_label41();

		_init_label42();

		_init_panel9();

		_init_panel10();

		_init_label44();

		_init_panel11();

		_init_label45();

		_init_label47();

		_init_label48();

		_init_label49();

		_init_label50();

		_init_label52();

		_init_label53();

		_init_label54();

		_init_label55();

		_init_label57();

		_init_label58();

		_init_label59();

		_init_label60();

		_init_label61();

		_init_label62();

		_init_label63();

		_init_label64();

		_init_label65();

		_init_label66();

		_init_label67();

		_init_rootPane_top();

		_init_panelNorth();

		_init_rootPane_left();

		_init_panelWest();

		_init_rootPane_right();

		_init_panelEast();

	  

		me.on("activate", me.controller._onactivate);
	}
	
	//-----定义初始化函数-----
	function _init_rootPane(){
		_rootPane=new mx.containers.PanelLayout({bottomPanelResizable:false,middlePanelWidth:"94%",bottomPanelVisible:true,leftPanelWidth:30,topPanelHeight:10,topPanelResizable:false,leftPanelVisible:true,topPanelVisible:true,middlePanelHeight:"98%",leftPanelResizable:false,rightPanelVisible:true,width:"100%",id:"rootPane",rightPanelResizable:false,height:"100%"});
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
			layoutOptions: {isShowBorder:false,rows:'40%,25%,35%',cols:'100%'}
});
		
		_panelCenter_middle.addControl(_panel1);
	}
	
	function _init_panel2(){
		_panel2=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel2",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'20%,15%,65%',cols:'100%'}
});
		
		_panel1.addControl(_panel2);
	}
	
	function _init_label2(){
		_label2=new mx.controls.Label({css:{fontSize:'25px'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},fontSize:"25px",autoWrap:true,id:"label2",text:"国家电网公司会议费申请单",height:"100%"});
		_panel2.addControl(_label2);
	}	

	
	function _init_panel3(){
		_panel3=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},id:"panel3",height:"100%"});
		_panel2.addControl(_panel3);
	}	

	
	function _init_label3(){
		_label3=new mx.controls.Label({css:{fontSize:'15px',float:'left',marginTop:6,marginLeft:10},width:"210px",fontSize:"15px",autoWrap:true,id:"label3",text:"公司代码：9900 国家电网公司 ",height:"27px"});
		_panel3.addControl(_label3);
	}	

	
	function _init_label4(){
		_label4=new mx.controls.Label({css:{fontSize:'15px',marginTop:6,marginLeft:10},width:"350px",fontSize:"15px",autoWrap:true,id:"label4",text:"利润中心：L990001000 国家电网公司机关财务",height:"27px"});
		_panel3.addControl(_label4);
	}	

	
	function _init_panel7(){
		_panel7=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel7",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'19%,19%,19%,19%,24%',cols:'15%,18%,12%,22%,15%,18%'}
});
		
		_panel2.addControl(_panel7);
	}
	
	function _init_label6(){
		_label6=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label6",text:"经办人",height:"100%"});
		_panel7.addControl(_label6);
	}	

	
	function _init_label7(){
		_label7=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label7",text:"12980   金星",height:"100%"});
		_panel7.addControl(_label7);
	}	

	
	function _init_label9(){
		_label9=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label9",text:"申请部门",height:"100%"});
		_panel7.addControl(_label9);
	}	

	
	function _init_label10(){
		_label10=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label10",text:"人力资源部",height:"100%"});
		_panel7.addControl(_label10);
	}	

	
	function _init_label11(){
		_label11=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label11",text:"附件张数",height:"100%"});
		_panel7.addControl(_label11);
	}	

	
	function _init_label12(){
		_label12=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:5,rowSpan:1,colSpan:1},autoWrap:true,id:"label12",text:"2",height:"100%"});
		_panel7.addControl(_label12);
	}	

	
	function _init_label13(){
		_label13=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label13",text:"申请单号：",height:"100%"});
		_panel7.addControl(_label13);
	}	

	
	function _init_label14(){
		_label14=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label14",text:"870009813",height:"100%"});
		_panel7.addControl(_label14);
	}	

	
	function _init_label15(){
		_label15=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label15",text:"申请日期",height:"100%"});
		_panel7.addControl(_label15);
	}	

	
	function _init_label16(){
		_label16=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label16",text:"2013-05-22 ",height:"100%"});
		_panel7.addControl(_label16);
	}	

	
	function _init_label18(){
		_label18=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label18",text:"支付方式",height:"100%"});
		_panel7.addControl(_label18);
	}	

	
	function _init_label19(){
		_label19=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:1,colIndex:5,rowSpan:1,colSpan:1},autoWrap:true,id:"label19",text:"电子支付",height:"100%"});
		_panel7.addControl(_label19);
	}	

	
	function _init_label20(){
		_label20=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label20",text:"申请事由",height:"100%"});
		_panel7.addControl(_label20);
	}	

	
	function _init_label21(){
		_label21=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:2,colIndex:1,rowSpan:1,colSpan:5},autoWrap:true,id:"label21",text:"申请会议费",height:"100%"});
		_panel7.addControl(_label21);
	}	

	
	function _init_label22(){
		_label22=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:3,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label22",text:"申请金额(大写）",height:"100%"});
		_panel7.addControl(_label22);
	}	

	
	function _init_label23(){
		_label23=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:3,colIndex:1,rowSpan:1,colSpan:3},autoWrap:true,id:"label23",text:"伍仟元整",height:"100%"});
		_panel7.addControl(_label23);
	}	

	
	function _init_label24(){
		_label24=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:3,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label24",text:"申请金额(小写）",height:"100%"});
		_panel7.addControl(_label24);
	}	

	
	function _init_label25(){
		_label25=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:3,colIndex:5,rowSpan:1,colSpan:1},autoWrap:true,id:"label25",text:"5000.00",height:"100%"});
		_panel7.addControl(_label25);
	}	

	
	function _init_label26(){
		_label26=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:4,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label26",text:"申请说明",height:"100%"});
		_panel7.addControl(_label26);
	}	

	
	function _init_label43(){
		_label43=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:4,colIndex:1,rowSpan:1,colSpan:5},autoWrap:true,id:"label43",height:"100%"});
		_panel7.addControl(_label43);
	}	

	
	function _init_panel4(){
		_panel4=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel4",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'8%,82%,10%',cols:'100%'}
});
		
		_panel1.addControl(_panel4);
	}
	
	function _init_panel5(){
		_panel5=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel5",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'20%,80%',cols:'100%'}
});
		
		_panel4.addControl(_panel5);
	}
	
	function _init_panel6(){
		_panel6=new mx.containers.Container({css:{borderLeft:'1px solid rgb(135, 135, 135)',backgroundColor:'rgb(204, 204, 204)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)',textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},id:"panel6",height:"100%"});
		_panel5.addControl(_panel6);
	}	

	
	function _init_label5(){
		_label5=new mx.controls.Label({css:{float:'left',marginTop:2,marginLeft:10},width:"170px",autoWrap:true,id:"label5",text:"申请费用明细",height:"21px"});
		_panel6.addControl(_label5);
	}	

	
	function _init_panel8(){
		_panel8=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel8",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'33%,33%,34%',cols:'10%,20%,9%,6%,15%,28%,12%'}
});
		
		_panel5.addControl(_panel8);
	}
	
	function _init_label27(){
		_label27=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label27",text:"申请人",height:"100%"});
		_panel8.addControl(_label27);
	}	

	
	function _init_label28(){
		_label28=new mx.controls.Label({width:"100%",layoutConfigs:{rowIndex:0,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label28",text:"费用类型",height:"100%"});
		_panel8.addControl(_label28);
	}	

	
	function _init_label30(){
		_label30=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:2,rowSpan:1,colSpan:2},autoWrap:true,id:"label30",text:"金额",height:"100%"});
		_panel8.addControl(_label30);
	}	

	
	function _init_label31(){
		_label31=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label31",text:"货币",height:"100%"});
		_panel8.addControl(_label31);
	}	

	
	function _init_label32(){
		_label32=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:5,rowSpan:1,colSpan:1},autoWrap:true,id:"label32",text:"WBS",height:"100%"});
		_panel8.addControl(_label32);
	}	

	
	function _init_label33(){
		_label33=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:6,rowSpan:1,colSpan:1},autoWrap:true,id:"label33",text:"备注",height:"100%"});
		_panel8.addControl(_label33);
	}	

	
	function _init_label34(){
		_label34=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label34",text:"金星",height:"100%"});
		_panel8.addControl(_label34);
	}	

	
	function _init_label35(){
		_label35=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label35",text:"会议费",height:"100%"});
		_panel8.addControl(_label35);
	}	

	
	function _init_label36(){
		_label36=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"right",width:"100%",layoutConfigs:{rowIndex:1,colIndex:2,rowSpan:1,colSpan:2},autoWrap:true,id:"label36",text:"5000.00",height:"100%"});
		_panel8.addControl(_label36);
	}	

	
	function _init_label37(){
		_label37=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:1,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label37",text:"RMB",height:"100%"});
		_panel8.addControl(_label37);
	}	

	
	function _init_label38(){
		_label38=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:5,rowSpan:1,colSpan:1},autoWrap:true,id:"label38",text:"唐山750kV输变电工程项目",height:"100%"});
		_panel8.addControl(_label38);
	}	

	
	function _init_label39(){
		_label39=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:6,rowSpan:1,colSpan:1},autoWrap:true,id:"label39",height:"100%"});
		_panel8.addControl(_label39);
	}	

	
	function _init_label40(){
		_label40=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)',fontWeight:'bold'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:2},autoWrap:true,id:"label40",text:"合计",height:"100%"});
		_panel8.addControl(_label40);
	}	

	
	function _init_label41(){
		_label41=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"right",width:"100%",layoutConfigs:{rowIndex:2,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label41",text:"5000.00",height:"100%"});
		_panel8.addControl(_label41);
	}	

	
	function _init_label42(){
		_label42=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:3,rowSpan:1,colSpan:4},autoWrap:true,id:"label42",height:"100%"});
		_panel8.addControl(_label42);
	}	

	
	function _init_panel9(){
		_panel9=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel9",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'15%,85%',cols:'100%'}
});
		
		_panel1.addControl(_panel9);
	}
	
	function _init_panel10(){
		_panel10=new mx.containers.Container({css:{backgroundColor:'rgb(204, 204, 204)',borderTop:'1px solid rgb(135, 135, 135)',textAlign:'center',overflow:'hidden'},width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},id:"panel10",height:"100%"});
		_panel9.addControl(_panel10);
	}	

	
	function _init_label44(){
		_label44=new mx.controls.Label({css:{float:'left',marginTop:7,marginLeft:10},width:"170px",autoWrap:true,id:"label44",text:"审批记录",height:"21px"});
		_panel10.addControl(_label44);
	}	

	
	function _init_panel11(){
		_panel11=new mx.containers.Container({			layout:"TableLayout",
			width:"100%",
			layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},
			id:"panel11",
			height:"100%",
			layoutOptions: {isShowBorder:false,rows:'15%,28%,28%,29%',cols:'10%,17%,23%,25%,25%'}
});
		
		_panel9.addControl(_panel11);
	}
	
	function _init_label45(){
		_label45=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label45",text:"审批人",height:"100%"});
		_panel11.addControl(_label45);
	}	

	
	function _init_label47(){
		_label47=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label47",text:"电子签名",height:"100%"});
		_panel11.addControl(_label47);
	}	

	
	function _init_label48(){
		_label48=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label48",text:"审批人岗位",height:"100%"});
		_panel11.addControl(_label48);
	}	

	
	function _init_label49(){
		_label49=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label49",text:"审批时间",height:"100%"});
		_panel11.addControl(_label49);
	}	

	
	function _init_label50(){
		_label50=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},textAlign:"center",width:"100%",layoutConfigs:{rowIndex:0,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label50",text:"审批意见",height:"100%"});
		_panel11.addControl(_label50);
	}	

	
	function _init_label52(){
		_label52=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label52",text:"新建文本",height:"100%"});
		_panel11.addControl(_label52);
	}	

	
	function _init_label53(){
		_label53=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label53",text:"人力资源部综合处处长",height:"100%"});
		_panel11.addControl(_label53);
	}	

	
	function _init_label54(){
		_label54=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label54",text:"2013-05-04 12：50",height:"100%"});
		_panel11.addControl(_label54);
	}	

	
	function _init_label55(){
		_label55=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label55",text:"同意",height:"100%"});
		_panel11.addControl(_label55);
	}	

	
	function _init_label57(){
		_label57=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label57",text:"新建文本",height:"100%"});
		_panel11.addControl(_label57);
	}	

	
	function _init_label58(){
		_label58=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label58",text:"人力资源部主任",height:"100%"});
		_panel11.addControl(_label58);
	}	

	
	function _init_label59(){
		_label59=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label59",text:"2013-05-05 08：12",height:"100%"});
		_panel11.addControl(_label59);
	}	

	
	function _init_label60(){
		_label60=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label60",text:"同意",height:"100%"});
		_panel11.addControl(_label60);
	}	

	
	function _init_label61(){
		_label61=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label61",text:"徐荣",height:"100%"});
		_panel11.addControl(_label61);
	}	

	
	function _init_label62(){
		_label62=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:1,rowSpan:1,colSpan:1},autoWrap:true,id:"label62",text:"新建文本",height:"100%"});
		_panel11.addControl(_label62);
	}	

	
	function _init_label63(){
		_label63=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:2,rowSpan:1,colSpan:1},autoWrap:true,id:"label63",text:"财务资产部成本会计",height:"100%"});
		_panel11.addControl(_label63);
	}	

	
	function _init_label64(){
		_label64=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:3,rowSpan:1,colSpan:1},autoWrap:true,id:"label64",text:"2013-05-05 12:12",height:"100%"});
		_panel11.addControl(_label64);
	}	

	
	function _init_label65(){
		_label65=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'2px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:3,colIndex:4,rowSpan:1,colSpan:1},autoWrap:true,id:"label65",text:"同意",height:"100%"});
		_panel11.addControl(_label65);
	}	

	
	function _init_label66(){
		_label66=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:2,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label66",text:"张明帅",height:"100%"});
		_panel11.addControl(_label66);
	}	

	
	function _init_label67(){
		_label67=new mx.controls.Label({css:{borderLeft:'1px solid rgb(135, 135, 135)',borderRight:'1px solid rgb(135, 135, 135)',borderBottom:'1px solid rgb(135, 135, 135)',borderTop:'1px solid rgb(135, 135, 135)'},width:"100%",layoutConfigs:{rowIndex:1,colIndex:0,rowSpan:1,colSpan:1},autoWrap:true,id:"label67",text:"贺兰",height:"100%"});
		_panel11.addControl(_label67);
	}	

	
	function _init_rootPane_top(){
		_rootPane_top = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"_rootPane_top"
		});
		
		_rootPane.addControl(_rootPane_top,"top");
	}
	
	function _init_panelNorth(){
		_panelNorth=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",id:"panelNorth",height:"100%"});
		_rootPane_top.addControl(_panelNorth);
	}	

	
	function _init_rootPane_left(){
		_rootPane_left = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"_rootPane_left"
		});
		
		_rootPane.addControl(_rootPane_left,"left");
	}
	
	function _init_panelWest(){
		_panelWest=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",id:"panelWest",height:"100%"});
		_rootPane_left.addControl(_panelWest);
	}	

	
	function _init_rootPane_right(){
		_rootPane_right = new mx.containers.Container({
			layout:"mx.layouts.AbsoluteLayout",
			id:"_rootPane_right"
		});
		
		_rootPane.addControl(_rootPane_right,"right");
	}
	
	function _init_panelEast(){
		_panelEast=new mx.containers.Container({css:{textAlign:'center',overflow:'hidden'},width:"100%",id:"panelEast",height:"100%"});
		_rootPane_right.addControl(_panelEast);
	}	

	
	function _init_Window() {		
		if(_Window == null || ((_Window.reusable==false) && _Window.disposed==true)) {
			_Window = newPage_1.context.windowManager.create({
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