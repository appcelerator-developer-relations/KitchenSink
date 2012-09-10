function sock_connect() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
	var win = Ti.UI.createWindow();
	
	var connectingSocket = null;
	
	function pumpCallback(e) {
		if (e.bytesProcessed == -1) { // EOF
			statusArea.value = "<EOF> - Can't perform any more operations on connected socket";
		}
		else if (e.errorDescription == null || e.errorDescription == "") {
			statusArea.value = "DATA: "+e.buffer.toString();
		}
		else {
			statusArea.value = "READ ERROR: "+e.errorDescription;
		}
	}
	
	var hostField = Ti.UI.createTextField({
		value:'HOSTNAME',
		top:20 * scaleY,
		left:20 * scaleX,
		width:140 * scaleX,
		height:40 * scaleY,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		autocorrect:false,
		autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
		clearOnEdit:true
	});
	win.add(hostField);
	
	var portField = Ti.UI.createTextField({
		value:'PORT',
		top:20 * scaleY,
		right:20 * scaleX,
		width:100 * scaleX,
		height:40 * scaleY,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		autocorrect:false,
		autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
		clearOnEdit:true
	});
	win.add(portField);
	
	if (isBlackberry) {
		alert('Ti.UI.TextArea is not implemented for BlackBerry yet, so TextFields are used instead of TextAreas for write and status fields.');
	}
	var writeArea
	if (!isBlackberry) {
		writeArea = Ti.UI.createTextArea({
			editable:true,
			value:'Data to write',
			height:100,
			width:300,
			top:80,
			textAlign:'left',
			borderWidth:2,
			borderColor:'#bbb',
			borderRadius:5,
			suppressReturn:false
		});
	} else {
		writeArea = Ti.UI.createTextField({
			editable:true,
			value:'Data to write',
			height:100 * scaleY,
			width:300 * scaleX,
			top:80 * scaleY,
			textAlign:'left',
			borderWidth:2,
			borderColor:'#bbb'
		});
	}
	win.add(writeArea);
	
	var statusArea;
	if (!isBlackberry) {
		statusArea = Ti.UI.createTextArea({
			editable:false,
			value:'Socket status',
			height:100 * scaleY,
			width:300 * scaleX,
			bottom:80 * scaleY,
			textAlign:'left',
			borderWidth:2,
			borderColor:'#bbb',
			borderRadius:5,
			suppressReturn:false
		});
	} else {
		statusArea = Ti.UI.createTextField({
			editable:false,
			value:'Socket status',
			height:50 * scaleY,
			width:300 * scaleX,
			bottom:80 * scaleY,
			textAlign:'left',
			borderWidth:2,
			borderColor:'#bbb'
		});
	}
	win.add(statusArea);
	
	var connectButton = Ti.UI.createButton({
		title:'Connect',
		width:80 * scaleX,
		height:40 * scaleY,
		left:20 * scaleX,
		bottom:20 * scaleY
	});
	connectButton.addEventListener('click', function() {
		if (connectingSocket == null) {
			try {
				connectingSocket = Ti.Network.Socket.createTCP({
					host:hostField.value,
					port:portField.value,
					connected:function(e) {
						e.socket.write(Ti.createBuffer({value:"Well, hello there!"}));
						Ti.Stream.pump(e.socket,pumpCallback,1024, true);
					},
					error:function(e) {
						statusArea.value = "ERROR ("+e.errorCode+"): "+e.error;
					},
					closed:function(e) {
						statusArea.value = "CLOSED CONNECTION TO: "+e.socket.host+":"+e.socket.port;
					}
				});
				connectingSocket.connect();
			}
			catch (e) {
				statusArea.value = "EXCEPTION (connect): "+e.toString();
			}
		}
		else {
			statusArea.value = 'Already created: '+connectingSocket.host +':'+connectingSocket.port;
		}
	});
	win.add(connectButton);
	
	var disconnectButton = Ti.UI.createButton({
		title:'Disconnect',
		width:100 * scaleX,
		height:40 * scaleY,
		right:20 * scaleX,
		bottom:20 * scaleY
	});
	disconnectButton.addEventListener('click', function() {
		if (connectingSocket != null) {
			try {
				connectingSocket.close();
				connectingSocket = null;
				statusArea.value = 'Disconnected';
			}
			catch (e) {
				statusArea.value = "EXCEPTION (close): "+e.toString();
			}
		}
		else {
			statusArea.value = 'Not connected';
		}
	});
	win.add(disconnectButton);
	
	var writeButton = Ti.UI.createButton({
		title:'Write',
		width:80 * scaleX,
		height:40 * scaleY,
		bottom:20 * scaleY,
		left:110 * scaleX
	});
	writeButton.addEventListener('click', function() {
		if (connectingSocket != null && connectingSocket.isWritable()) {
			connectingSocket.write(Ti.createBuffer({value:writeArea.value}));
		}
	});
	win.add(writeButton);
	if (isBlackberry) {
		portField.left = 180 * scaleX;
		writeArea.left = 20 * scaleX;
		statusArea.left = 20 * scaleX;
		statusArea.top = 120 * scaleY;
		connectButton.top = 160 * scaleY;
		connectButton.width = 120 * scaleX;
		disconnectButton.top = 160 * scaleY;
		disconnectButton.left = 250 * scaleX;
		writeButton.top = 160 * scaleY;
		writeButton.left = 160 * scaleX;
		disconnectButton.width = 120 * scaleX;
	}
	return win;
};

module.exports = sock_connect;
