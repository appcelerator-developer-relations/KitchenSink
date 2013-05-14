
function picker_multi1(_args) {
	var win = Ti.UI.createWindow({
			title:_args.title
		}),
		isTizen = Ti.Platform.osname === 'tizen';
	win.backgroundColor = 'black';
	
	var picker = Ti.UI.createPicker();
	
	if (isTizen) {
		// On Mobile Web/Tizen, by default, the picker fills the entire view it is contained,
		// unless the size is provided.
		picker.width = 150;
		picker.height = 110;
		picker.color = '#fc0';
	}

	var column1 = Ti.UI.createPickerColumn();

	column1.addRow(Ti.UI.createPickerRow({title:'Bananas',custom_item:'b'}));
	column1.addRow(Ti.UI.createPickerRow({title:'Strawberries',custom_item:'s', selected:true}));
	column1.addRow(Ti.UI.createPickerRow({title:'Mangos',custom_item:'m'}));
	column1.addRow(Ti.UI.createPickerRow({title:'Grapes',custom_item:'g'}));
	
	var column2 = Ti.UI.createPickerColumn();
	column2.addRow(Ti.UI.createPickerRow({title:'red'}));
	column2.addRow(Ti.UI.createPickerRow({title:'green'}));
	column2.addRow(Ti.UI.createPickerRow({title:'blue'}));
	column2.addRow(Ti.UI.createPickerRow({title:'orange'}));
	
	// 2 columns as an array
	picker.add([column1,column2]);
	
	
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

module.exports = picker_multi1;
