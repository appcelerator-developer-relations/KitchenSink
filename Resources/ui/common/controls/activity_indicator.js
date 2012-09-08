function activity_indicator() {
	var isIos = Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad';

	var win = Ti.UI.createWindow({
		backgroundColor : '#13386c'
	});

	//
	// BASE INDICATOR
	//
	var actInd = Titanium.UI.createActivityIndicator({
		bottom : 10,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});
	if (isIos) {
		actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
	} else {
		actInd.style = Ti.UI.ActivityIndicatorStyle.PLAIN;
	}

	var button0 = Titanium.UI.createButton({
		title : 'Hide',
		height : 35,
		width : 130,
		top : 10,
		right : 20
	});

	button0.addEventListener('click', function() {
		actInd.message = null;
		actInd.hide();
	});

	//
	// BASIC ACTIVITY INDICATOR
	//
	var button1 = Titanium.UI.createButton({
		title : 'Show (Basic)',
		height : 35,
		width : 130,
		top : 10,
		left : 20
	});

	button1.addEventListener('click', function() {
		actInd.show();
	});

	//
	// ACTIVITY INDICATOR (BIG)
	//
	var button2 = Titanium.UI.createButton({
		title : 'Show Indicator (BIG)',
		height : 35,
		width : 200,
		top : 55
	});

	button2.addEventListener('click', function() {
		if (isIos) {
			actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.BIG;
		} else {
			actInd.style = Ti.UI.ActivityIndicatorStyle.BIG;
		}
		actInd.show();
	});

	//
	// ACTIVITY INDICATOR (DARK)
	//
	var button3 = Titanium.UI.createButton({
		title : 'Show Indicator (DARK)',
		height : 35,
		width : 200,
		top : 100
	});

	button3.addEventListener('click', function() {
		if (isIos) {
			actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.DARK;
		} else {
			actInd.style = Ti.UI.ActivityIndicatorStyle.DARK;
		}
		actInd.show();
	});

	//
	// ACTIVITY INDICATOR (BIG_DARK)
	//
	var button8 = Titanium.UI.createButton({
		title : 'Show Indicator (BIG_DARK)',
		height : 35,
		width : 200,
		top : 145
	});

	button8.addEventListener('click', function() {
		actInd.style = Ti.UI.ActivityIndicatorStyle.BIG_DARK;
		actInd.show();
	});

	//
	// ACTIVITY INDICATOR (MESSAGE)
	//
	var button4 = Titanium.UI.createButton({
		title : 'Show Indicator (Message)',
		height : 35,
		width : 200,
		top : 145
	});
	if (!isIos) {
		button4.top = 190;
	}
	button4.addEventListener('click', function() {
		if (isIos) {
			actInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
		} else {
			actInd.style = Ti.UI.ActivityIndicatorStyle.PLAIN;
		}
		actInd.font = {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		};
		actInd.color = 'white';
		actInd.message = 'Loading...';
		actInd.width = 210;
		actInd.show();
	});

	//
	// ACTIVITY INDICATOR (TOOLBAR)
	//
	var toolActInd = Titanium.UI.createActivityIndicator();

	var button5 = Titanium.UI.createButton({
		title : 'Show Indicator (Toolbar)',
		height : 35,
		width : 200,
		top : 190
	});

	button5.addEventListener('click', function() {
		toolActInd.style = Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN;
		toolActInd.font = {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		};
		toolActInd.color = 'white';
		toolActInd.message = 'Loading...';
		win.setToolbar([toolActInd], {
			animated : true
		});
		toolActInd.show();
		setTimeout(function() {
			toolActInd.hide();
			win.setToolbar(null, {
				animated : true
			});
		}, 3000);

	});

	//
	// ACTIVITY INDICATOR (NAVBAR)
	//
	var navActInd = Titanium.UI.createActivityIndicator();

	var button6 = Titanium.UI.createButton({
		title : 'Show Indicator (Navbar)',
		height : 35,
		width : 200,
		top : 235
	});

	button6.addEventListener('click', function() {

		win.setRightNavButton(navActInd);
		navActInd.show();
		setTimeout(function() {
			navActInd.hide();
			win.setRightNavButton(null);

		}, 3000);

	});

	//
	// ACTIVITY INDICATOR (TITLE CONTROL)
	//
	var button7 = Titanium.UI.createButton({
		title : 'Show Indicator (Title)',
		height : 35,
		width : 200,
		top : 280
	});

	button7.addEventListener('click', function() {
		win.setTitleControl(actInd);
		actInd.show();

		setTimeout(function() {
			actInd.hide();
			win.setTitleControl(null);
			win.title = 'Activity Indicator';

		}, 3000);
	});

	win.add(actInd);

	// add iOS elements
	if (isIos) {
		win.add(button1);
		win.add(button0);
		win.add(button2);
		win.add(button3);
		win.add(button4);
		win.add(button5);
		win.add(button6);
		win.add(button7);
	} else {
		win.add(button1);
		win.add(button0);
		win.add(button2);
		win.add(button3);
		win.add(button8);
		win.add(button4);
	}

	return win;
};

module.exports = activity_indicator;
