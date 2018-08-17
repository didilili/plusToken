mui.plusReady(function(){
    //首页返回键处理  2秒内，连续两次按返回键，则退出应用  
	var first = null;  
	mui.back=function(){
	if(!first){  
	        first = new Date().getTime();  
	        mui.toast('Press again to exit the app');  
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
		mui.toast('Please enter in your login account');
		return false;
	}
	
	if(!password){
		mui.toast('Please enter in your login password');
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
	Storage.set('language','_cn');
	mui.openWindow({
		url:'../_cn/login.html',
		id:'login_cn'
	});
});