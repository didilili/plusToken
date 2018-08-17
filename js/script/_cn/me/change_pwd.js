window.onload = function(){
  mui.plusReady(function(){
  	
  	//忘记密码
document.getElementById("pwd_type").addEventListener('tap', function() {
	var picker = new mui.PopPicker();
	picker.setData([
		{
	    	value: "1",
	    	text: "登录密码"
		},
		{
	    	value: "2",
	    	text: "交易密码"
		},
	])

	picker.show(function(SelectedItem) {
		document.getElementById("pwd_type").value = SelectedItem[0].text;
		document.getElementById("pwd_type").setAttribute('data-value',SelectedItem[0].value);
	})
});

document.getElementById("queding").addEventListener('tap', function() {
	
	var pwd_type = document.getElementById("pwd_type").getAttribute("data-value");
	var key = document.getElementById("key").value;
	var pwd = document.getElementById("pwd").value;
	var pwd2 = document.getElementById("pwd2").value;
	
	
	console.log(pwd_type);
	console.log(key);
	console.log(pwd);
	console.log(pwd2);
	
	if(!pwd_type){
		mui.toast('请选择您要修改的密码');
		return false;
	}
	
	if(!key){
		mui.toast('请填写您的私钥');
		return false;
	}
	
	if(!pwd){
		mui.toast('请填写您的新密码');
		return false;
	}
	
	if(pwd != pwd2){
		mui.toast('密码两次输入不一致');
		return false;
	}
	
	
	
 	mui.confirm(
 	'您的密码已修改',
 	'修改成功',
 	new Array('好的'),
 	function(e){
		mui.back();
 	});
	
});
  	
  });
}