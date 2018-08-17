var save = function(successCB,errorCB,fileName,imgID,overwrite,format,quality,clip){
		errorCB		=  errorCB	 || function(){};
		fileName 	=  fileName  || Date.parse( new Date());
		imgID			=	 imgID		 || String(Date.parse( new Date()));
		overwrite =  overwrite || true;
		format		=  format    || 'png';
		quality 	=  quality   || 50;
		clip 			=  clip      || {top:'0px',left:'0px',width:'100%',height:'100%'};
		
		var self = plus.webview.currentWebview();
		var bitmap = new plus.nativeObj.Bitmap(imgID);
		
		//绘制截图
		self.draw(bitmap,function(){
				// 保存Bitmap图片
         bitmap.save('_doc/'+fileName+'.'+format, {overwrite: overwrite,format:format,quality:quality,clip:clip}
	        , function(i) {
	    				//保存到系统相册
	    				plus.gallery.save(i.target,function(d){
	    						//销毁Bitmap图片
	    						bitmap.clear();
	    						successCB({success:'success',details:d});
	    				}, function(e){
	    						//销毁Bitmap图片
	    						bitmap.clear();
	    						errorCB({error:'图片保存至相册失败',details:e});
	    				});
	    		}, function(e) {
	    				bitmap.clear();
	    				errorCB({error:'图片保存失败',details:e});
	    		}
	    	);
		
		},function(e){
				errorCB({error:'截屏绘制失败',details:e});
		});
}
