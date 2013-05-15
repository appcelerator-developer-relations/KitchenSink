function tizenPackage(title) {
	var win = Ti.UI.createWindow({
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
	
	function getPackagesInfo() {
		tizen.package.getPackagesInfo(onListInstalledPackages);
	}
	
//	function clone(obj) {
//		var clon = {};
//		if (obj === null || typeof obj !== 'object') {
//			return obj;
//		}
//		for (var i in obj) {
//			if (obj[i] instanceof Array) {
//				var a = [],
//				j = 0,
//				len = obj[i].length;
//				for (; j < len; j++) {
//					a.push(clone(obj[i][j]));
//				}
//			}
//			clon[i] = clone(obj[i]);
//		}
//		return clon;
//	}
	
	function onListInstalledPackages(packages) {
		var dictionary = [],
			i = 0,
			l = packages.length;
		for (; i < l; i++) {
			var clon = {};
			clon.name = packages[i].name;
			clon.iconPath = packages[i].iconPath;
			clon.id = packages[i].id;
			clon.version = packages[i].versoin;
			clon.totalSize = packages[i].totalSize;
			clon.appIds = packages[i].appIds.join(', ');
			dictionary.push(createRow(clon));
	    	
		}
		tabView.setData(dictionary);
	}
	
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
		var regexp = new RegExp('^\/[A-Za-z0-9\/_\.-]*\.(jpe?g|png|gif)$');
		var test = regexp.test(package.iconPath);
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
//		dataSize = Ti.UI.createLabel({
//			top: 2,
//			width: '100%',
//			text: 'dataSize : ' + package.dataSize
//		}),
//		lastModified = Ti.UI.createLabel({
//			top: 2,
//			width: '100%',
//			text: 'lastModified : ' + package.lastModified
//		}),
//		author = Ti.UI.createLabel({
//			top: 2,
//			width: '100%',
//			text: 'author : ' + package.author
//		}),
//		description = Ti.UI.createLabel({
//			top: 2,
//			width: '100%',
//			text: ' : description' + package.description
//		}),
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
//		scrollView.add(dataSize);
//		scrollView.add(lastModified);
//		scrollView.add(author);
//		scrollView.add(description);
		scrollView.add(appIds);
		
		wind1.open();
	}
}

module.exports = tizenPackage;