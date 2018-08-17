window.onload = function(){
	
	var res = [
		{id:1,name:'common problem',content:"common problemcommon problemcommon problemcommon problemcommon problemcommon problemcommon problemcommon problemcommon problemcommon problem"},
		{id:2,name:'Cooperative investment',content:"Cooperative investmentCooperative investmentCooperative investmentCooperative investmentCooperative investmentCooperative investment"},
		{id:3,name:'Merchant help',content:"Merchant helpMerchant helpMerchant helpMerchant helpMerchant helpMerchant helpMerchant helpCooperative investmentCooperative investment"},
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