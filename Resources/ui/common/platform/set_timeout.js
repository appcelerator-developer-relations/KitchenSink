function set_timeout(_args) {
	var win = Titanium.UI.createWindow({
		title:_args.title
	});
	
	var label = Ti.UI.createLabel({
		text:'Running...',
		font:{fontFamily:'Helvetica Neue',fontSize:24,fontWeight:'bold'},
		color:'#999',
		textAlign:'center'
	});
	
	var act = Ti.UI.createActivityIndicator({
		bottom:10
	});
	Titanium.UI.iPhone && (act.style = Titanium.UI.iPhone.ActivityIndicatorStyle.DARK);
	act.font = {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'};
	act.color = 'black';
	act.message = 'Waiting for timer to fire...';
	act.show();
	
	win.add(label);
	win.add(act);
	
	var started = new Date().getTime();
	
	setTimeout(function()
	{
		act.hide();
	
		label.text = "3 sec timer fired in\n" + (new Date().getTime()-started)/1000 + " seconds";
	},3000);

	return win;
};

module.exports = set_timeout;
