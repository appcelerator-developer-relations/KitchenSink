function tizenSystemInfo(title) {
	var messageWin = require('ui/handheld/tizen/tizenToast'),
		alertWin = require('ui/handheld/tizen/tizenAlert'),
		Tizen = require('tizen'),
		gBatteryListener;

	function getSystemProperty(property, onSuccess, onError) {
		try {
			Tizen.SystemInfo.getPropertyValue(property, onSuccess, onError);
		} catch (e) {
			onError();
		}
	}

	function showDetailsDialog(propertyName, propertyDetailsHtml) {
		alertWin.showAlert(propertyName + ' details', propertyDetailsHtml, 'Go back to list');
	}

	var win = Ti.UI.createWindow({ backgroundColor: '#fff' }),
		data = [
			{ title: 'Storage information', propertyName: Tizen.SystemInfo.SYSTEM_INFO_PROPERTY_ID_STORAGE, propertyCallback: onStorageSuccess },
			{ title: 'Cpu load', propertyName: Tizen.SystemInfo.SYSTEM_INFO_PROPERTY_ID_CPU, propertyCallback: onCpuInfoSuccess },
			{ title: 'Cellular network state', propertyName: Tizen.SystemInfo.SYSTEM_INFO_PROPERTY_ID_CELLULAR_NETWORK, propertyCallback: onCellSuccess },
			{ title: 'SIM information', propertyName: Tizen.SystemInfo.SYSTEM_INFO_PROPERTY_ID_SIM, propertyCallback: onSimSuccess }
		],
		i = 0,
		dataLength = data.length,
		tableview = Titanium.UI.createTableView();

	// create table view
	for (; i < dataLength; i++ ) {
		data[i].color = '#000';
		data[i].font = { fontWeight: 'bold' };
	};
	tableview.data = data;

	// create table view event listener
	tableview.addEventListener('click', function(e) {
		if (e && e.rowData) {
			var pName = e.rowData.propertyName;
			if (pName) {
				getSystemProperty(pName, e.rowData.propertyCallback, function(er) {
					showDetailsDialog(pName, '<b>API error:</b><br/>' + er.message);
				})
			} else {
				e.rowData.clickCallback && e.rowData.clickCallback(e);
			}
		}
	});

	win.add(tableview);
	return win;

	function onCpuInfoSuccess(cpu) {
		showDetailsDialog('Cpu', 'Load: ' + cpu.load);
	}

	function onStorageSuccess(storages) {
		var storagesInfo = '',
			i = 0,
			units = storages.units,
			storagesCount = units.length;

		for (; i < storagesCount; i++) {
			storagesInfo += formatHeader('Storage #' + (i + 1))+
				formatSubLines([
					'Type: ' + units[i].type,
					'Capacity: ' + Math.floor(units[i].capacity / 1000000) + ' MB',
					'Available capacity: ' + Math.floor(units[i].availableCapacity / 1000000) + ' MB',
					'Removable: ' + (units[i].isRemoveable ? 'Yes' : 'No')
				]);
		}

		showDetailsDialog('Storage', storagesInfo);
	}

	function onCellSuccess(cell) {
		showDetailsDialog('Cellular network', formatSubLines([
			'Status: ' + cell.status,
			'Access Point Name (APN): ' + cell.apn,
			'IP address: ' + cell.ipAddress,
			'Mobile Country Code (MCC): ' + cell.mcc,
			'Mobile Network Code (MNC): ' + cell.mnc,
			'Cell ID: ' + cell.cellid,
			'Location Area Code (LAC): ' + cell.lac,
			'Roaming: ' + (cell.isRoaming ? 'Yes' : 'No')
		]));
	}

	function onSimSuccess(sim) {
		showDetailsDialog('SIM', formatSubLines([
			'Operator Name String (ONS): ' + sim.operatorName,
			'SIM card subscriber number: ' + sim.msisdn,
			'Integrated Circuit Card ID: ' + sim.iccid,
			'Mobile Country Code (MCC): ' + sim.mcc,
			'Mobile Network Code (MNC): ' + sim.mnc,
			'Mobile Subscription Identification Number (MSIN): ' + sim.msin,
			'Service Provider Name (SPN): ' + sim.spn
		]));
	}

	function formatHeader(headerName) {
		return  '<b>' + headerName + '</b> <br />';
	}

	function formatSubLines(lineArray) {
		var result = '<div style="text-align: left; width: 100%">',
			i = 0,
			len = lineArray.length;

		for (; i < len; i++) {
			result +=  lineArray[i] + '<br/>'
		}
		return  result + '</div>';
	}
};

module.exports = tizenSystemInfo;