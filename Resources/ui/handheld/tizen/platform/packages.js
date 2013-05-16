// this test demonstrates work with Tizen.Package module

function tizenPackage(title) {
	var Tizen = require('tizen'); 
	win = Ti.UI.createWindow({
		layout: 'vertical',
		bakgroundColor: '#ffffff'
	}),
	button = Ti.UI.createButton({
		top: 10,
		left: 10,
		title: 'Get packages info'
	}),
	headView = Ti.UI.createView({
		layout: 'horizontal',
		backgroundColor:'#999999',
		height: 25,
		bottom: 0,
	}),
	headLabel = Ti.UI.createLabel({
		color: '#ffffff',
		text: 'Packages'
	});
	tabView = Ti.UI.createTableView({
		top: 10,
		headerView: headView,
		backgroundColor: '#ffffff',
		rowBackgroundColor: '#999999',
		data : []
	});
	
	button.addEventListener('click', getPackagesInfo);
	
	headView.add(headLabel);
	win.add(button);
	win.add(tabView);
	
	return win;
	
	// get info about all installed pakages
	function getPackagesInfo() {
		Tizen.Package.getPackagesInfo(onListInstalledPackages);
	}
	

	// this callbeck accepts array of PackageInformation as property informationArray of response object 
	function onListInstalledPackages(response) {
		if (response.success) {
			var dictionary = [],
				packages = response.informationArray,
				i = 0,
				l = packages.length;
			for (; i < l; i++) {

				// clone the package info object, it needed for using it after callback execute,
				// because returned array ceases to exist
				var clon = {};
				clon.name = packages[i].name;
				clon.iconPath = packages[i].iconPath;
				clon.id = packages[i].id;
				clon.version = packages[i].versoin;
				clon.totalSize = packages[i].totalSize;
				clon.appIds = packages[i].appIds.join(', ');

				// creating row for tableView
				dictionary.push(createRow(clon));
			}
			tabView.setData(dictionary);
		} else {
			alert(response.error);
		}
		
	}
	
	// this function creates row for table view
	function createRow(package) {
		var row = Ti.UI.createTableViewRow({
			touchEnabled: true,
			height: 50
		}),
		view = Ti.UI.createView({
			layout: 'horizontal'
		}),
		label = Ti.UI.createLabel({
			text: package.name,
			left: 10
		}),
		imageView = Ti.UI.createView({
			width: 46,
			height: 46,
		});

		// folowing cod check if iconPath valid
		var regexp = new RegExp('^\/[A-Za-z0-9\/_\.-]*\.(jpe?g|png|gif)$');
		var test = regexp.test(package.iconPath);

		// image package icon
		if(test) {
			var im = document.createElement('img');
			im.width = 46;
			im.height = 46;
			im.src = package.iconPath;

			imageView.domNode.appendChild(im);
		}
		
		view.add(imageView);
		view.add(label);
		row.add(view);
		
		row.addEventListener('click', function() {
			showPackageInfo(package);
		});
		return row;
	}
	
	// this function shows window with basic package information
	function showPackageInfo(package) {
		var wind1 = Ti.UI.createWindow({
			backgroundColor: '#ffffff',
			layout: 'vertical'
		}),
		button = Ti.UI.createButton({
			top: 10,
			title: 'OK'
		});
		scrollView = Ti.UI.createScrollView({
			backgroundColor: '#aaaaaa',
			height: '90%', 
			showVerticalScrollIndicator: true,
			contentHeight: 'auto',
			layout: 'vertical'
		});
		wind1.add(scrollView);
		wind1.add(button);
		
		button.addEventListener('click', function() {
			wind1.close();
		});
		
		var id = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'id : ' + package.id
		}),
		name = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'name : ' + package.name
		}),
		iconPath = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'iconPath : ' + package.iconPath
		}),
		version = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'version : ' + package.version
		}),
		totalSize = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'totalSize : ' + package.totalSize
		});

		var appIds = Ti.UI.createLabel({
			backgroundColor: '#cccccc',
			top: 2,
			width: '100%',
			text: 'appIds : ' + package.appIds
		});

		scrollView.add(id);
		scrollView.add(name);
		scrollView.add(iconPath);
		scrollView.add(version);
		scrollView.add(totalSize);
		scrollView.add(appIds);
		
		wind1.open();
	}
}

module.exports = tizenPackage;