
$import("mx.containers.PanelLayout");
				
$import("mx.containers.Container");
				
$import("mx.containers.Panel");
				
$import("mx.controls.Label");
				
$import("mx.windows.Window");
				
$import("newPage_1.views.newPage_1");				
$import("newPage_1.views.newPage_1Controller");				
$import("newPage_1.views.newPage_1UserController");				

mx.weblets.WebletManager.register(
{
    id: "newPage_1",
    name: "newPage_1",
    requires: [],
    onload: function (e) {
		
    }, 
    onstart: function (e) {
    	var mvc = new newPage_1.views.newPage_1UserController();
		e.context.rootViewPort.setViewController(mvc);
    }
});