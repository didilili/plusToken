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
  			extras:{title:'Smart income today'},
  		});
  });
  
  document.getElementById("link").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'Link income today'},
  		});
  });
  
  document.getElementById("executive").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:"Today executive commission"},
  		});
  });
  
  document.getElementById("transaction").addEventListener('tap',function(){
  	mui.openWindow({
  			url:'list_com.html',
  			extras:{title:'Trading commission today'},
  		});
  });
}