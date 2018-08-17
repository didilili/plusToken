var self = null;
mui.plusReady(function(){
	self = plus.webview.currentWebview();
});

//提交事件
document.getElementById("reg_now").addEventListener('tap', function() {
	var password = document.getElementById("password").value;
	if(!password){
		mui.toast('Please enter your password'); return false;
	}
	
	var password2 = document.getElementById("password2").value;
	if(password2 != password){
		mui.toast('Two password entries are inconsistent'); return false;
	}
	
	var user = {
		jy_password:password,
		password:self.password,
		mobile:self.mobile,
		area_id:self.area_id,
	};
	
	mui.confirm('Registration is complete, please save your private key','Registration is complete',['OK'],function(){
		Storage.set('user',user);
		mui.openWindow({
			url:'me/key.html',
			extras:{key:'tyukkmnbvdfyuilmnbgtyujnbvcfghbvcxdrthbvcdsertyujmnbvfgyuikmnbhyuikmn',flag:'login'},
		});
	});
});