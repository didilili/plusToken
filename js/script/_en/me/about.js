window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
  
  
document.getElementById("fwxy").addEventListener('tap',function(e){
	mui.confirm('The service agreement service agreement service agreement service agreement','Service agreement',['OK'],function(){
		
	})
});
  
  document.getElementById("syxy").addEventListener('tap',function(e){
  	  mui.confirm('Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement Use Agreement'
  	  ,"Use Agreement"
  	  ,["OK"],function(){
		
		})	
  })
  
  document.getElementById("rjbb").addEventListener('tap',function(e){
  	mui.toast('1.0.0')
  })
}