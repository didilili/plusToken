 document.getElementById("add").addEventListener('tap',function(e){
   	mui.openWindow({url:"add.html"});
 });

window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
    
    mui(".mui-slider-right").on('tap','a',function(e){
    	var id = this.getAttribute('data-id');
    	console.log(id);
    	
    	  //询问框
		  layer.open({
		    content: '您确定要删除吗？'
		    ,btn: ['删除', '取消']
		    ,yes: function(index){
		    	var li = document.getElementById(id);
    			li.parentNode.removeChild(li);
		      
		    	layer.close(index);
		    }
		  });
    });
});
}