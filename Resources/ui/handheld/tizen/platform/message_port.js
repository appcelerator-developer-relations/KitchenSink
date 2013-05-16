function message_port() {
	//This test required to launch the additional application for speaking.
	//This application "MessagePortTest.wgt" - in the same folder where this file

	var win = Titanium.UI.createWindow(),
		Tizen = require('tizen'),

		button = Titanium.UI.createButton({
			top: 200,
			title:'Send Message',
			height:40,
			width:200
		}),
		hint = Titanium.UI.createLabel({
			top: 30,
			width:300,
			height:'auto',
			color:'#777',
			font:{fontSize:16},
			text:'Before the sending message please check if you already launched MessagePortTest application and the port has created'
		}),
		remoteMsgPort,
		localMsgPort = Tizen.MessagePort.requestLocalMessagePort('MessagePortB');

	button.addEventListener('click', function() {
		try {
			remoteMsgPort = Tizen.MessagePort.requestRemoteMessagePort('D0zb7HQO2e.KSHelp', 'MessagePortA');
			remoteMsgPort.sendMessage([
				{
					key: 'KS',
					value: 'This message from Kitchen Sink'
				}
			], localMsgPort);
			alert('Message was sent, check the additional application');
		} catch (e) {
			alert('Cant create RemoteMessagePort. Reason: '+ e.message);
		}
	});



	win.add(hint);
	win.add(button);
	return win;
}

module.exports = message_port;