window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
  
  
document.getElementById("fwxy").addEventListener('tap',function(e){
	mui.confirm('服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议',"服务协议",["OK"],function(){
		
	})
});
  
  document.getElementById("syxy").addEventListener('tap',function(e){
  	  mui.confirm('使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议使用协议',"使用协议",["OK"],function(){
		
		})	
  })
  
  document.getElementById("rjbb").addEventListener('tap',function(e){
  	mui.toast('1.0.0')
  })
}