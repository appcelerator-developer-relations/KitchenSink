function mapview() {
	var win = Titanium.UI.createWindow();
	
	var isAndroid = false;
	if (Titanium.Platform.name == 'android') {
		isAndroid = true;
	}
	
	var isMW = (Ti.Platform.osname === 'mobileweb');
	//
	// CREATE ANNOTATIONS
	//
	var mountainView = Titanium.Map.createAnnotation({
		latitude:37.390749,
		longitude:-122.081651,
		title:"Appcelerator Headquarters",
		subtitle:'Mountain View, CA',
		pincolor: isAndroid ? "orange" : Titanium.Map.ANNOTATION_RED,
		animate:true,
		leftButton: '/images/appcelerator_small.png',
		myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	});
	
	var apple = Titanium.Map.createAnnotation({
		latitude:37.33168900,
		longitude:-122.03073100,
		title:"Steve Jobs",
		subtitle:'Cupertino, CA',
		pincolor:Titanium.Map.ANNOTATION_GREEN,
		animate:true,
		rightButton: '/images/apple_logo.jpg',
		myid:2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	});
	
	var atlantaParams = {
			latitude:33.74511,
			longitude:-84.38993,
			title:"Atlanta, GA",
			subtitle:'Atlanta Braves Stadium\nfoo',
			animate:true,
			leftButton:'/images/atlanta.jpg',
			myid:3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
		};
		
	if (Ti.Platform.osname !== 'mobileweb') {
		atlantaParams.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	}
	
	if (!isAndroid) {
		atlantaParams.pincolor = Titanium.Map.ANNOTATION_PURPLE;
	} else {
		atlantaParams.pinImage = "/images/map-pin.png";
	}
	var atlanta = Titanium.Map.createAnnotation(atlantaParams);
	
	//
	// PRE-DEFINED REGIONS
	//
	var regionAtlanta = {latitude:33.74511,longitude:-84.38993,animate:true,latitudeDelta:0.04, longitudeDelta:0.04};
	var regionSV = {latitude:37.337681,longitude:-122.038193,animate:true,latitudeDelta:0.04, longitudeDelta:0.04};
	
	//
	// CREATE MAP VIEW
	//
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		region:{latitude:33.74511, longitude:-84.38993, latitudeDelta:0.5, longitudeDelta:0.5},
		animate:true,
		regionFit:true,
		userLocation:true,
		annotations:[atlanta,apple]
	});
	
	if (!isAndroid) {
		mapview.addAnnotation(atlanta);
	}
	mapview.selectAnnotation(atlanta);
	win.add(mapview);
	
	//
	// NAVBAR BUTTONS
	//
	
	var removeAll = null;
	var atl = null;
	var sv = null;
	var sat = null;
	var std = null;
	var hyb = null;
	var zoomin = null;
	var zoomout = null;
	var annotationsRemoved = false;
			
	var wireClickHandlers = function() {
		removeAll.addEventListener('click', function() {
			mapview.removeAllAnnotations();
			annotationsRemoved = true;
		});
	
		atl.addEventListener('click', function() {
			// set location to atlanta
			mapview.setLocation(regionAtlanta);
		
			// activate annotation
			if(!annotationsRemoved){
				mapview.selectAnnotation(atlanta,true);
			}
			Ti.API.error("CLICKED ATL");
		});
		
		sv.addEventListener('click', function() {
			Ti.API.info('IN SV CHANGE');
			// set location to sv
			mapview.setLocation(regionSV);
		
			// activate annotation
			if(!annotationsRemoved){
				mapview.selectAnnotation(apple,true);
			}
		});
		
		sat.addEventListener('click',function() {
			// set map type to satellite
			mapview.setMapType(Titanium.Map.SATELLITE_TYPE);
		});
		
		std.addEventListener('click',function() {
			// set map type to standard
			mapview.setMapType(Titanium.Map.STANDARD_TYPE);
		});
		
		hyb.addEventListener('click',function() {
			// set map type to hybrid
			mapview.setMapType(Titanium.Map.HYBRID_TYPE);
		});
		
		zoomin.addEventListener('click',function() {
			mapview.zoom(1);
		});
		
		zoomout.addEventListener('click',function() {
			mapview.zoom(-1);
		});
	};
	
	if (!isAndroid) {
		removeAll = Titanium.UI.createButton({
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
			title:'Remove All'
		});
		win.rightNavButton = removeAll;
	
		//
		// TOOLBAR BUTTONS
		//
		
		// button to change to ATL
		atl = Titanium.UI.createButton({
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
			title:'ATL'
		});
		// activate annotation
		mapview.selectAnnotation(mapview.annotations[0].title,true);
		
		// button to change to SV	
		sv = Titanium.UI.createButton({
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
			title:'SV'
		});
		mapview.addEventListener('complete', function()
		{
			Ti.API.info("map has completed loaded region");
		});
		
		
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		
		// button to change map type to SAT
		sat = Titanium.UI.createButton({
			title:'Sat',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		// button to change map type to STD
		std = Titanium.UI.createButton({
			title:'Std',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		// button to change map type to HYBRID
		hyb = Titanium.UI.createButton({
			title:'Hyb',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		// button to zoom-in
		zoomin = Titanium.UI.createButton({
			title:'+',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		// button to zoom-out
		zoomout = Titanium.UI.createButton({
			title:'-',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		wireClickHandlers();
		
		win.setToolbar([flexSpace,std,flexSpace,hyb,flexSpace,sat,flexSpace,atl,flexSpace,sv,flexSpace,zoomin,flexSpace,zoomout,flexSpace]);
	} else {
		var activity = Ti.Android.currentActivity;
		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			
			atl = menu.add({title : 'ATL'});
			sv = menu.add({title : 'SV'});
			sat = menu.add({title : 'Sat'});
			std = menu.add({title : 'Std'});
			hyb = menu.add({title : 'Hyb'});
			zoomin = menu.add({title : "Zoom In"});
			zoomout = menu.add({title : 'Zoom Out'});
			removeAll = menu.add({title:'Remove All'});
			
			wireClickHandlers();
		};
	}
	
	//
	// EVENT LISTENERS
	//
	
	// region change event listener
	var event1 = 'regionChanged';
	if (Ti.version >= '3.0.0') {
		event1 = 'regionchanged';
	}
	mapview.addEventListener(event1,function(evt)
	{
		Titanium.API.info('maps region has updated to '+evt.longitude+','+evt.latitude+','+evt.latitudeDelta+','+evt.longitudeDelta);
	    Titanium.API.info(mapview.latitudeDelta+','+mapview.longitudeDelta);
	    if(evt.latitudeDelta === mapview.latitudeDelta)
	    {
	        Titanium.API.info('latitudeDelta property matches event values');
	    }
	    if(evt.longitudeDelta === mapview.longitudeDelta)
	    {
	        Titanium.API.info('longitudeDelta property matches event values');
	    }
	});
	
	var annotationAdded = false;
	
	// map view click event listener
	mapview.addEventListener('click',function(evt)
	{
	
		// map event properties
		var annotation = evt.annotation;
		var title = evt.title;
		var clickSource = evt.clicksource;
	
		// custom annotation attribute
		var myid = (evt.annotation)?evt.annotation.myid:-1;
	
		Ti.API.info('mapview click clicksource = ' + clickSource);
		// use custom event attribute to determine if atlanta annotation was clicked
		if (myid == 3 && evt.clicksource == 'rightButton')
		{
			//  change the annotation on the fly
			evt.annotation.rightView = Titanium.UI.createView({width:20,height:20,backgroundColor:'red'});
			evt.annotation.leftView = Titanium.UI.createView({width:20,height:20,backgroundColor:'#336699'});
			evt.annotation.title = "Atlanta?";
			evt.annotation.pincolor = Titanium.Map.ANNOTATION_GREEN;
			evt.annotation.subtitle = 'Appcelerator used to be near here';
			evt.annotation.leftButton = 'images/appcelerator_small.png';
	
		}
		if (myid == 2)
		{
			if(annotationAdded === false)
			{
				mapview.addAnnotation(mountainView);
				annotationAdded=true;
			}
			else
			{
				mapview.removeAnnotation(mountainView);
				annotationAdded=false;
			}
		}
	});
	
	// annotation click event listener (same as above except only fires for a given annotation)
	atlanta.addEventListener('click', function(evt)
	{
		// get event properties
		var annotation = evt.source;
		var clicksource = evt.clicksource;
		Ti.API.info('atlanta annotation click clicksource = ' + clicksource);
	});
	
	apple.addEventListener('click', function(evt)
	{
	
		// get event properties
		var annotation = evt.source;
		var clicksource = evt.clicksource;
		Ti.API.info('apple annotation click clicksource = ' + clicksource);
	
	
	});
	return win;
};

module.exports = mapview;