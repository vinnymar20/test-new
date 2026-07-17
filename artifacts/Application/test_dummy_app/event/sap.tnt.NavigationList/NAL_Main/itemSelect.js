// The following parameters are available via oEvent.getParameter("parameterName"); 
// 
// item - sap.ui.core.Item
// 

var menuKey =
    oEvent.getParameter("item").getKey();

navigateTo(menuKey);