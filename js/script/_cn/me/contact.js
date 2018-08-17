window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
  });
  
}


    document.getElementById("submit").addEventListener('tap',function(e){
    	var name = document.getElementById("name").value;
    	if(!name){
    		mui.toast('请输入您的姓名');return false;
    	}
    	
    	var tel = document.getElementById("tel").value;
    	if(!tel){
    		mui.toast('请输入您的手机号码');return false;
    	}
    	if(!(/^1[34578]\d{9}$/.test(tel))){ 
	        mui.toast("手机号码有误，请重填");  
	        return false; 
	    } 
    	
    	var email = document.getElementById("email").value;
    	if(!email){
    		mui.toast('请输入您的邮箱');return false;
    	}
//  	
    	if(!( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email))){ 
	        mui.toast("邮箱地址有误，请重填");  
	        return false; 
	    } 
    	
    	
    	var text  = document.getElementById("text").value;
    	if(!text){
    		mui.toast('请输入您的留言');return false;
    	}
    	
    	mui.confirm('我们已收到您的留言,客服会尽快和你取得联系','提交成功',['好的'],function(){
    		mui.back();
    	})
    	
    })