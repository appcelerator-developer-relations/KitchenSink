
// Development of this test is blocked due to https://bugs.tizen.org/jira/browse/TWEB-124

function tizen_datacontrol(args) {
	var self = Ti.UI.createWindow({
			title: args.title
		}),
		label = new Ti.UI.createLabel({
			text: 'NOTE: Service "DataControlProvider" must be running (it is available from Tizen IDE samples).',
			left: 10,
			top: 10
		}),
		Tizen = require('tizen'),
		globalReqId = 0;
		
	self.add(label);


	// Gets MAP type DataControlConsumerObject
	try {
		var globalMappedConsumer = Tizen.DataControl.getDataControlConsumer(
			"http://tizen.org/datacontrol/provider/DictionaryDataControlProvider", "Dictionary", "MAP"
		);

		globalReqId++;
		globalMappedConsumer.getValue(globalReqId, "banana", callback);
	} catch (err) {
		console.log (err.name +": " + err.message);
	}	

	function callback(o) {
		if(o.success) {
			console.log(o.values[0]);
		} else {
			console.log(o.error);
		}
	}
 
	return self;
}

module.exports = tizen_datacontrol;

