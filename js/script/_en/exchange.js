window.onload = function(){
  mui.plusReady(function(){
  	var self = plus.webview.currentWebview();
  	
  	//数据
  	var name = self.name;
  	var source_name = 'PLUS';
  	var source = 10;
  	var aims = 0;
  	var fell = 0.02;
  	
  	//可兑换
  	var bei = 1/0.1;
  	var aims_num = source/bei;
  	
  	//页面渲染
  	document.getElementById("source_name").innerText = source_name+' balance';
  	document.getElementById("source_name2").innerText = source_name;
  	document.getElementById("aims_name").innerText = name+' balance';
  	document.getElementById("aims_name2").innerText = name;
  	document.getElementById("source").innerText = source;
  	document.getElementById("aims").innerText = aims;
  	document.getElementById("fell").innerText = 'Handling fee'+fell+"%";
  	document.getElementById("aims_num").innerText = aims_num;
  	
  	//计算可兑换金额
  	$("#address").blur(function(){
				var value = parseFloat($("#address").val());
				
				if(!value || typeof(value)!="number"){
					$("#address").val(parseFloat(source));
					$("#number").val(0);
					return false;
				}
				
				if(parseFloat(value) > parseFloat(source)){
						value = parseFloat(source);
						$("#address").val(value);
				}
				
				var zhi = value/bei;
				
				$("#number").val(zhi);
  	});
  	
  	document.getElementById("submit").addEventListener('tap',function(){
  			var s = document.getElementById("address").value;
  			var a = document.getElementById("number").value;
  			var p = document.getElementById("password").value;
  			
  			if(!a || !s || !p){
  				mui.toast('Please enter the required content');
  				return false;
  			}
  			
  			mui.toast('Redeemed');
				mui.back();
  	})
  	
  });
}