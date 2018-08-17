var self = null;
mui.plusReady(function(){
	self = plus.webview.currentWebview();
});

//提交事件
document.getElementById("reg_now").addEventListener('tap', function() {
	var password = document.getElementById("password").value;
	if(!password){
		mui.toast('请输入密码'); return false;
	}
	
	var password2 = document.getElementById("password2").value;
	if(password2 != password){
		mui.toast('两次密码输入不一致'); return false;
	}
	
	var user = {
		jy_password:password,
		password:self.password,
		mobile:self.mobile,
		area_id:self.area_id,
	};
	
	mui.confirm('注册完成，请保存好您的私钥','注册完成',['确定'],function(){
		Storage.set('user',user);
		mui.openWindow({
			url:'me/key.html',
			extras:{key:'tyukkmnbvdfyuilmnbgtyujnbvcfghbvcxdrthbvcdsertyujmnbvfgyuikmnbhyuikmn',flag:'login'},
		});
	});
});