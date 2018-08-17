window.onload = function(){
	mui.plusReady(function(){
		var self = plus.webview.currentWebview();
		var id = self.id;
		var title = self.title;
		
		//渲染标题
		document.getElementById("title").innerText = title;
		
		//转入事件
		document.getElementById("zr").addEventListener('tap',function(){
			mui.openWindow({
				url:'qr_code.html',
				extras:{qr_code:'../../images/qr.png',address:'zxcvbnmasdfghjkqwertyuiop',title:'转入地址'},
			});
		})
		
		//兑换事件
		document.getElementById("dh").addEventListener('tap',function(){
			mui.openWindow({
				url:'exchange.html',
				extras:{id:id,name:title},
			});			
		})
		
		//转出事件
		document.getElementById("zc").addEventListener('tap',function(){
			mui.openWindow({
				url:'out.html',
				extras:{id:id},
			});
		})
	})
}
