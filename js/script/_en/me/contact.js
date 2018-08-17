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
    		mui.toast('Please enter your name');return false;
    	}
    	
    	var tel = document.getElementById("tel").value;
    	if(!tel){
    		mui.toast('Please enter your tel');return false;
    	}
    	if(!(/^1[34578]\d{9}$/.test(tel))){ 
	        mui.toast("tel is incorrect，please refill");  
	        return false; 
	    } 
    	
    	var email = document.getElementById("email").value;
    	if(!email){
    		mui.toast('please enter your e-mail');return false;
    	}
//  	
    	if(!( /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email))){ 
	        mui.toast("e-mail is incorrect，please refill");  
	        return false; 
	    } 
    	
    	
    	var text  = document.getElementById("text").value;
    	if(!text){
    		mui.toast('Please enter your message');return false;
    	}
    	
    	mui.confirm('We have received your message and the customer service will get in touch with you as soon as possible.','Submitted successfully',['OK'],function(){
    		mui.back();
    	})
    	
    })