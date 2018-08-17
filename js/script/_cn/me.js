mui.plusReady(function(){
	
	mui('.mui-table-view-cell').on('tap', 'a', function(e) {
	    var path = this.getAttribute('href');
	    try{
	   		 mui.openWindow(
		    	{
		    		url:path,
		    		show:{
				    	autoShow:false//页面
				    }
		    	}
		    ); 	
	    }catch(e){
	    	console.log('捕捉到异常');
	    	console.log(e);
	    	mui.toast('暂未启用')
	    }
	   
	});
	
	mui('#out').on('tap', 'button', function(e) {
		
	   	var curr = plus.webview.currentWebview();
	   	var wvs = plus.webview.all();
        for (var i = 0, len = wvs.length; i < len; i++) {
            //关闭除当前页面外的其他页面
            if (wvs[i].getURL() == curr.getURL())
                continue;
            plus.webview.close(wvs[i]);
        }
	   	
	   	//打开login页面后再关闭setting页面
        plus.webview.open('login.html');
        curr.close();
	   	
	   	Storage.del('user');
	    mui.toast('已退出');
	});
})