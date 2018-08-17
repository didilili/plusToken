mui.plusReady(function(){
	//关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
	
	mui(".mui-table-view").on("tap",'li',function(e){
		var id = this.getAttribute('data-id');
		
		mui.openWindow({
			url:'info.html',
			id:'info',
			extras:
			{
				content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			},
		});
	});
})