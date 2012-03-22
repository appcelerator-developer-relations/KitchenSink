function custom_fonts() {
	var win = Ti.UI.createWindow();
	
	var label = Ti.UI.createLabel({
		text:"Appcelerator\nFTW!",
		font:{fontSize:54,fontFamily:"Comic Zine OT"},
		width:"auto",
		textAlign:"center"
	});
	
	win.add(label);
	return win;
}

module.exports = custom_fonts;