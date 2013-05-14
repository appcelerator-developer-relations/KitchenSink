function gallery_bg() {
	// Test of Tizen-specific Titanium.Media.openPhotoGallery.
	//Kitchen Sink path:  Phone - Save to Gallery - Background Image
	//Save the image to photoGallery and set this image as background

	var win = Titanium.UI.createWindow();
	
	var f = Ti.App.Properties.getString("filename");
	var bgImage = null;
	if (f != null)
	{
		bgImage	= Titanium.Filesystem.getFile(f);
		win.backgroundImage = bgImage.nativePath;
		
	}
	
	var add = Titanium.UI.createButton({top:20,width:200,height:40, title:'Select Image'});
	win.add(add);
		
	add.addEventListener('click',function()
	{		
		Titanium.Media.openPhotoGallery(
		{	
			success:function(event)
			{
				var image = event.media;
				
				// create new file and remove old one
				var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";
				Ti.App.Properties.setString("filename", filename);
				if (bgImage != null)
				{
					bgImage.deleteFile();
				}
				bgImage = Titanium.Filesystem.getFile(filename);
				bgImage.write(image);
				
				win.backgroundImage = null;
				win.backgroundImage = bgImage.nativePath;	
			},
			cancel:function()
			{
			},
			error:function(error)
			{
			}
		});
	});
	return win;
};

module.exports = gallery_bg;