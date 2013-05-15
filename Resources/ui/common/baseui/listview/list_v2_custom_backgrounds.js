function list_v2_custom_backgrounds(_args) {
	var win = Ti.UI.createWindow({
		title:'Custom Backgrounds',
		layout:'vertical',
	});
	
	var button = Ti.UI.createButton({
		left:20,
		right:20,
		title:'Toggle ListView'
	})
	win.add(button);
	
	var data = [
	{properties:{title:'bgColor red, selectionStyle BLUE', backgroundColor:'red', selectionStyle:Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE}},
	{properties:{title:'bgColor green, selectionStyle GRAY', backgroundColor:'green', selectionStyle:Ti.UI.iPhone.ListViewCellSelectionStyle.GRAY}},
	{properties:{title:'bgColor cyan, selectionStyle NONE', backgroundColor:'cyan', selectionStyle:Ti.UI.iPhone.ListViewCellSelectionStyle.NONE}},
	{properties:{title:'bgColor white, selectedBgColor green', backgroundColor:'white', selectedBackgroundColor:'green'}},
	{properties:{title:'bgImage corkboard, selectionStyle BLUE', backgroundImage:'/images/corkboard.jpg', selectionStyle:Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE}},
	{properties:{title:'bgImage corkboard, selectedBgImage orangeBar', backgroundImage:'/images/corkboard.jpg', selectedBackgroundImage:'/images/slider_orangebar.png'}},
	]
	
	var actualData = [];
	var i;
	for (i=0; i<100; i++) {
		actualData.push(data[i%6]);
	}
	
	var section1 = Ti.UI.createListSection();
	section1.setItems(actualData);
	
	var listView1 = Ti.UI.createListView({top:10});
	listView1.setSections([section1]);

	var section2 = Ti.UI.createListSection();
	section2.setItems(actualData);
	
	var listView2 = Ti.UI.createListView({style:Ti.UI.iPhone.ListViewStyle.GROUPED, top:10});
	listView2.setSections([section2]);

	win.add(listView1);
	
	var isGrouped = false;
	
	button.addEventListener('click',function(){
		if(isGrouped == false) {
			win.remove(listView1);
			win.add(listView2);
		} else {
			win.remove(listView2);
			win.add(listView1);
		}
		isGrouped = !isGrouped;
	})
	
	return win;
};

module.exports = list_v2_custom_backgrounds;	