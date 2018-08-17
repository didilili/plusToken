window.onload = function(){
  mui.plusReady(function(){
    document.getElementById("submit").addEventListener('tap',function(){
    	var address = document.getElementById("address").value;
    	if(!address){
    		mui.toast('请输入收款人钱包地址');return false;
    	}
    	
    	var num = document.getElementById("number").value;
    	if(!num){
    		mui.toast('请输入转出数量');return false;
    	}
    	
    	var pwd = document.getElementById("password").value;
 			if(!pwd){
    		mui.toast('请输入交易密码');return false;
    	}
 			
 			mui.toast('转出成功');
 			mui.back();
    })
  });
}