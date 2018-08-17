window.onload = function(){
  mui.plusReady(function(){
    document.getElementById("submit").addEventListener('tap',function(){
    	var address = document.getElementById("address").value;
    	if(!address){
    		mui.toast('Please enter the payee wallet address');return false;
    	}
    	
    	var num = document.getElementById("number").value;
    	if(!num){
    		mui.toast('Please enter the number of transfers');return false;
    	}
    	
    	var pwd = document.getElementById("password").value;
 			if(!pwd){
    		mui.toast('Please enter the transaction password');return false;
    	}
 			
 			mui.toast('Successful transfer');
 			mui.back();
    })
  });
}