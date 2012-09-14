function tv_perf() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';	
	var w = Ti.UI.createWindow();	
	var v = Ti.UI.createView();	
	var tv = Ti.UI.createTableView({
		top:0,
		height:280,
		borderWidth:1,
		borderColor:"black"
	});
	var l = Ti.UI.createLabel({
		text:"running",
		width:"auto",
		height:"auto",
		bottom:15
	});
	//TODO review this part of code if layout height/widht - 'auto' and right/bottom properties will be implemented for BB
	if (isBlackberry) {
		l.width = 700;
		l.height = 70;
		l.top = 1100;
	}
	v.add(tv);
	v.add(l);
	w.add(v);
	
	var count = 500;
	var ts = new Date();
	
	var data = [];
	
	for (var c=0;c<count;c++)
	{
		var row;
		if (isBlackberry) {
			row = {title:"Row "+(c+1), className: "row"};
		} else {
			row = Ti.UI.createTableViewRow({title:"Row "+(c+1), className: "row"});
		}		
		data[c] = row;
	}
	
	tv.data = data;
	
	var ts2 = new Date();
	var duration = ts2.getTime() - ts.getTime();
	var each = duration / count;
	l.text = "Executed: "+count+" iterations\nTook: " + duration +" ms\n" + each.toFixed(2) + " ms/row";
	return w;
};

module.exports = tv_perf;