function list_updateitems(_args) {
	var win = Ti.UI.createWindow({
		title:'Update Items'
	});
	
	var label = Ti.UI.createLabel({
		text:'NOT IMPLEMENTED YET',
		color:'red',
		font:{fontWeight:'bold',fontSize:'20dp'}	
	})	
	
	win.add(label);
	
	return win;
}

module.exports = list_updateitems;