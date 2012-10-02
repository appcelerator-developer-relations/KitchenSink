function filesystem(_args) {
	var win = Titanium.UI.createWindow({
		title:_args.title
	});
	
	// path variables
	Titanium.API.info('Resources Directory :' + Titanium.Filesystem.resourcesDirectory);
	Titanium.API.info('Temp Directory :' + Titanium.Filesystem.tempDirectory);
	Titanium.API.info('Application Directory :' + Titanium.Filesystem.applicationDirectory);
	Titanium.API.info('Application Data Directory :' + Titanium.Filesystem.applicationDataDirectory);
	Titanium.API.info('Application Support Directory :' + Titanium.Filesystem.applicationSupportDirectory);
	
	Titanium.API.info('External Storage Available :' + Titanium.Filesystem.isExternalStoragePresent());
	Titanium.API.info('Separator :' + Titanium.Filesystem.separator);
	Titanium.API.info('Line Ending :' + Titanium.Filesystem.lineEnding);
	
	
	var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'etc/text.txt');
	Ti.API.info('file = ' + f);
	var contents = f.read();
	Ti.API.info("contents blob object = "+contents);
	Ti.API.info('contents = ' + contents.text);
	Ti.API.info('mime type = ' + contents.mimeType);
	Ti.API.info('Blob\'s file = ' + contents.file);
	Ti.API.info('nativePath = ' + f.nativePath);
	Ti.API.info('Blob\'s file nativePath= ' + contents.file.nativePath);
	Ti.API.info('exists = ' + f.exists());
	Ti.API.info('size = ' + f.size);
	Ti.API.info('readonly = ' + f.readonly);
	Ti.API.info('symbolicLink = ' + f.symbolicLink);
	Ti.API.info('executable = ' + f.executable);
	Ti.API.info('hidden = ' + f.hidden);
	Ti.API.info('writable = ' + f.writable);
	Ti.API.info('name = ' + f.name);
	Ti.API.info('extension = ' + f.extension());
	Ti.API.info('resolve = ' + f.resolve());
	Ti.API.info('created = ' + String(new Date(f.createTimestamp()))); // #2085 test
	
	var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory);
	Ti.API.info('directoryListing = ' + dir.getDirectoryListing());
	Ti.API.info('getParent = ' + dir.getParent());
	Ti.API.info('spaceAvailable = ' + dir.spaceAvailable());
	
	var newDir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'mydir');
	Ti.API.info("Created mydir: " + newDir.createDirectory());
	Ti.API.info('newdir ' + newDir);
	var newFile = Titanium.Filesystem.getFile(newDir.nativePath,'newfile.txt');
	newFile.write(f.read());
	Ti.API.info('directoryListing for newDir = ' + newDir.getDirectoryListing());
	Ti.API.info("newfile.txt created: " + String(new Date(newFile.createTimestamp())));
	Ti.API.info("newfile.txt modified: " + String(new Date(newFile.modificationTimestamp())));
	Ti.API.info("newfile.txt renamed as b.txt: " + newFile.rename('b.txt'));
	
	var renamedFile = Titanium.Filesystem.getFile(newDir.nativePath, 'b.txt');
	Ti.API.info("newfile.txt deleted (expected to fail): " + newFile.deleteFile());
	Ti.API.info("b.txt deleted: " + renamedFile.deleteFile());
	Ti.API.info("mydir deleted: " + newDir.deleteDirectory());
	Ti.API.info('directoryListing for newDir after deleteDirectory = ' + newDir.getDirectoryListing());
	
	if (Ti.Platform.name == 'android') {
		var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);
		Ti.API.info('external directoryListing = ' + dir.getParent().getDirectoryListing());
	}
	
	var l = Titanium.UI.createLabel({text:'Check Log for details', width:300, height:'auto', textAlign:'center'});
	win.add(l);
	
	// test to make sure we can still access compiled JS files
	var jsfile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'app.js');
	Ti.API.info("app.js exists? " + jsfile.exists());
	Ti.API.info("app.js size? " + jsfile.size);
	
	// test to make sure that #3385 is resolved - we can append files, blobs or strings to a file
	// this will go away once Streams are fully integrated into the Filesystem API.
	
	var testfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'text.txt');
	Ti.API.info('text.txt exists? ' + testfile.exists());
	Ti.API.info('text.txt size: ' + testfile.size + ' bytes');
	
	if(!testfile.write("text written via write()\n")) {
		Ti.API.info("could not write string to file.");
	}
	
	if(!testfile.write(Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'etc/text_two.txt'), true)) {
		Ti.API.info("could not append File object to file via write method.");
	}
	
	if(!testfile.write("\nText appended via write()", true)) {
		Ti.API.info("could not append string to file via write method.");
	}
	
	Ti.API.info("------------");
	Ti.API.info("Test file contents:\n" + (testfile.read()).text);
	
	//these should all fail
	var bad_params = [10000, true, {}];
	for(var i = 0, j = bad_params.length; i < j; i++) {
		if(!testfile.write(bad_params[i])) {
			Ti.API.info('Expected failure: (first parameter is "' + (typeof bad_params[i]) + '")');
		}
	}

	return win;
};

module.exports = filesystem;