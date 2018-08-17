window.onload = function(){
	
	var res = [
		{id:1,name:'常见问题',content:"常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题"},
		{id:2,name:'合作招商',content:"合作招商合作招商合作招商合作招商合作招商合作招商合作招商合作招商"},
		{id:3,name:'商家帮助',content:"商家帮助商家帮助商家帮助商家帮助商家帮助商家帮助商家帮助商家帮助"},
	];
	
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
  
  mui(".mui-table-view").on('tap','li',function(){
  	var index = this.getAttribute('data-index');
  	
  	mui.openWindow({
			url:'info.html',
			id:'info',
			extras:{
				title:res[index].name,
				content:res[index].content 
			},
		});
  });
}