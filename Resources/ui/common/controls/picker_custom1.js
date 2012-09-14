function picker_custom1() {
	//TODO remove this lines when Jira TIMOB-9788 and TIMOB-8829 tasks will be implemented.
	if (Titanium.Platform.osname === 'blackberry'){
		alert('Custom Picker and PickerRow are not implemented for Blackberry yet');
		return;
	}
	var win = Ti.UI.createWindow();
	win.backgroundColor = 'black';
	
	var picker = Ti.UI.createPicker({backgroundColor:'#ff9900'});
	
	function addRow(text)
	{
		var row = Ti.UI.createPickerRow();
		var label = Ti.UI.createLabel({
			text:text,
			font:{fontSize:24,fontWeight:'bold'},
			color:text,
			width:'auto',
			height:'auto'
		});
		row.add(label);
		picker.add(row);
	}
	
	addRow('red');
	addRow('green');
	addRow('blue');
	addRow('orange');
	addRow('purple');
	addRow('brown');
	addRow('yellow');
	
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

module.exports = picker_custom1;