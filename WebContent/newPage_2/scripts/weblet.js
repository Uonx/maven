
$import("mx.containers.PanelLayout");
				
$import("mx.containers.Container");
				
$import("mx.containers.Panel");
				
$import("mx.controls.Label");
				
$import("mx.containers.TabControl");
				

				
$import("mx.editors.TextEditor");
				
$import("mx.controls.Button");
				
$import("mx.datacontrols.DataGrid");
$import("mx.datacontainers.GridEntityContainer");
$import("mx.datacontrols.PageNaviBar");
				
$import("mx.datacontrols.DataForm");
$import("mx.datacontainers.FormEntityContainer");
				
$import("mx.windows.Window");
				
$import("newPage_2.views.newPage_2");				
$import("newPage_2.views.newPage_2Controller");				
$import("newPage_2.views.newPage_2UserController");				

mx.weblets.WebletManager.register(
{
    id: "newPage_2",
    name: "newPage_2",
    requires: [],
    onload: function (e) {
		
    }, 
    onstart: function (e) {
    	var mvc = new newPage_2.views.newPage_2UserController();
		e.context.rootViewPort.setViewController(mvc);
    }
});