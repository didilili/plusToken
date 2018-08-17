
mui.plusReady(function(){
    //首页返回键处理  2秒内，连续两次按返回键，则退出应用  
	var first = null;  
	mui.back=function(){
	if(!first){  
	        first = new Date().getTime();  
	        mui.toast('再按一次退出应用');  
	        setTimeout(function(){  
	            first = null;  
	        },2000);  
	    } else {  
	        if(new Date().getTime() - first < 2000){  
	            plus.runtime.quit();  
	        }  
	    }  
	};
})

//注册事件
document.getElementById("reg").addEventListener('tap', function() {
	mui.openWindow({
		url:'./member_doc.html',
		id:'member_doc'
	});
});

//提交事件
document.getElementById("login").addEventListener('tap', function() {
	var mobile = document.getElementById("mobile").value;
	var password = document.getElementById("password").value;
	
	console.log(mobile);
	console.log(password);
	
	if(!mobile){
		mui.toast('请填写您的登录账号');
		return false;
	}
	
	if(!password){
		mui.toast('请填写您的登录密码');
		return false;
	}
	
//	mui.post(url,{mobile:mobile,password:password},function(data){},'json');
	
	Storage.set('user',{mobile:mobile,password:password});
	mui.openWindow({
		url:'./index.html',
		id:'index'
	});
});

//忘记密码
document.getElementById("forgetPassword").addEventListener('tap', function() {
	mui.openWindow({
		url:'./forget.html',
		id:'forget'
	});
});


//切换系统语言
document.getElementById("lang").addEventListener('tap', function() {
	Storage.set('language','_en');
	mui.openWindow({
		url:'../_en/login.html',
		id:'login_en'
	});
});