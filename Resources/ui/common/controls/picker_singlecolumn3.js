function picker_single3(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	win.backgroundColor = 'black';
	
	var picker = Ti.UI.createPicker();
	
	// just add each row implicitly to one column
	picker.add(Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'}));
	picker.add(Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s'}));
	picker.add(Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'}));
	picker.add(Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'}));
	
	// turn on the selection indicator (off by default)
	picker.selectionIndicator = true;
	
	win.add(picker);
	
	var label = Ti.UI.createLabel({
		text:'Make a move',
		top:10,
		width:'auto',
		height:'auto',
		textAlign:'center',
		color:'white'
	});
	win.add(label);
	
	
	picker.addEventListener('change',function(e)
	{
		Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.custom_item);
		label.text = "row index: "+e.rowIndex+", column index: "+e.columnIndex;
	});

	return win;
}

module.exports = picker_single3;