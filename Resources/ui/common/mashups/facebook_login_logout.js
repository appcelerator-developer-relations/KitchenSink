function fb_login_logout(_args) {
	/*globals Titanium, Ti, alert, JSON */
	var win = Ti.UI.createWindow({
		backgroundColor:'#fff'
	});
	Titanium.Facebook.appid = "495338853813822";
	Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
	//
	// Login Status
	//
	var label = Ti.UI.createLabel({
		text:'Logged In = ' + Titanium.Facebook.loggedIn,
		font:{fontSize:14},
		height:'auto',
		top:10,
		textAlign:'center'
	});
	win.add(label);
	
	var forceButton = Ti.UI.createButton({
		title:'Force dialog: '+Titanium.Facebook.forceDialogAuth,
		top:50,
		width:160,
		height:40
	});
	forceButton.addEventListener('click', function() {
		Titanium.Facebook.forceDialogAuth = !Titanium.Facebook.forceDialogAuth;
		forceButton.title = "Force dialog: "+Titanium.Facebook.forceDialogAuth;
	});
	win.add(forceButton);
	
	function updateLoginStatus() {
		label.text = 'Logged In = ' + Titanium.Facebook.loggedIn;
	}
	
	// capture
	Titanium.Facebook.addEventListener('login', updateLoginStatus);
	Titanium.Facebook.addEventListener('logout', updateLoginStatus);
	
	//
	// Login Button
	//
	if(Titanium.Platform.name == 'iPhone OS'){
		win.add(Titanium.Facebook.createLoginButton({
			style:Ti.Facebook.BUTTON_STYLE_WIDE,
			bottom:30
		}));
	}
	else{
		win.add(Titanium.Facebook.createLoginButton({
			style:'wide',
			bottom:30
		}));
	}
	
	return win;
};

module.exports = fb_login_logout;
