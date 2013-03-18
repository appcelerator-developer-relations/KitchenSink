var data2 = [];

function handleUpdate(e){
	var item = data2[e.itemIndex];
	if (item.taskTrack.value > 0.99) {
		e.section.updateItemAt(e.itemIndex,{properties:{title:item.taskLabel.text+' is done', color:'#00cc00',accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}})
	} else {
		e.section.updateItemAt(e.itemIndex,data2[e.itemIndex]);
	}
}

function handleChangeEvent(e){
	var item = data2[e.itemIndex];
	item.taskTrack.value = e.value;
	
	if(e.value < 0.33){
		item.taskLabel.color = '#ff0000'
	} else if (e.value < 0.66) {
		item.taskLabel.color = '#ffcc00'
	} else {
		item.taskLabel.color = '#00cc00'
	}
}

function setupTest(win){
	var section1 = Ti.UI.createListSection({headerTitle:'TO DO LIST'});
	var data1 = [
	{properties:{title:'Mark Me Done',height:50,itemId:'0',font:{fontWeight:'normal'}}},
	{properties:{title:'Mark Me Critical',height:50,itemId:'1',font:{fontWeight:'normal'}}},
	]
	data2 = [
	{template:'myCell',taskLabel:{text:'Task 1',color:'#ff0000'},taskTrack:{value:0.2}},
	{template:'myCell',taskLabel:{text:'Task 2',color:'#ffcc00'},taskTrack:{value:0.5}},
	{template:'myCell',taskLabel:{text:'Task 3',color:'#00cc00'},taskTrack:{value:0.8}},
	]
	section1.setItems(data1);
	
	var myTemplate = {
		properties: {height: 50},
		childTemplates:[
		{
			type:'Ti.UI.Label',
			bindId:'taskLabel',
			properties:{ left:0,width:'45%'}
		},
		{
			type:'Ti.UI.Slider',
			bindId:'taskTrack',
			properties:{left:'45%',width:'45%',min:0,max:1},
			events:{
				'change':handleChangeEvent,
				'touchend':handleUpdate,//For iOS
				'stop':handleUpdate//For Android. Undocumented. Needs to move to touchend
			}
		}
		]
	}
	
	var section2 = Ti.UI.createListSection({headerTitle:'TASK PROGRESS'});
	section2.setItems(data2);
	
	var listView = Ti.UI.createListView({
		templates:{'myCell':myTemplate},
		sections:[section1,section2]
	})
	
	listView.addEventListener('itemclick',function(e){
		if(e.itemId == '0'){
			var item = e.section.getItemAt(e.itemIndex);
			item.properties.color = '#00cc00';
			item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
			e.section.updateItemAt(e.itemIndex,item);
		} else if (e.itemId == '1'){
			var item = e.section.getItemAt(e.itemIndex);
			item.properties.color = '#ff0000';
			item.properties.font = {fontWeight:'bold'};
			e.section.updateItemAt(e.itemIndex,item);
		}
	})
	
	win.add(listView);
}

function list_updateitems(_args) {
	var win = Ti.UI.createWindow({
		title:'Update Items',
		orientationModes:[Ti.UI.PORTRAIT]
	});
	
	setupTest(win);
	
	return win;
}

module.exports = list_updateitems;