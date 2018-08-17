mui.plusReady(function(){
	var self = plus.webview.currentWebview();
	var address = self.address;
	var code = self.qr_code;
	var title = self.title;
	if(title)
		document.getElementById("title").innerText = title;
		
	document.getElementById("qr_code").src = code;
	document.getElementById("key").value = address;
	
	document.getElementById("save").addEventListener('tap',function(){
		
		save(function(s){
			mui.toast('图片已保存至系统相册');
		},function(e){
			mui.toast('保存失败，请重试')
		})
	})
	
	document.getElementById("copy").addEventListener('tap',function(){
		document.getElementById("key").select();
		document.execCommand('Copy');
		mui.toast('已复制');
	});
})