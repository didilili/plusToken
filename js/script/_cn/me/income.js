window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
  
  
  document.getElementById("AI").addEventListener('tap',function(){
  		mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'今日智能收益'},
  		});
  });
  
  document.getElementById("link").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'今日链接收益'},
  		});
  });
  
  document.getElementById("executive").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'今日高管佣金'},
  		});
  });
  
  document.getElementById("transaction").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'今日交易佣金'},
  		});
  });
}