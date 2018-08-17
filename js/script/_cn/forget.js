
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
		console.log(SelectedItem);
		$("#pwd_type").val(SelectedItem[0].text);
		$("#pwd_type").attr('data-value',SelectedItem[0].value);
	})
});

document.getElementById("queding").addEventListener('tap', function() {
	
	var pwd_type = document.getElementById("pwd_type").getAttribute("data-value");
	var key = document.getElementById("key").value;
	
	
	console.log(pwd_type);
	console.log(key);
	
	if(!pwd_type){
		mui.toast('请选择您要找回的密码');
		return false;
	}
	
	if(!key){
		mui.toast('请填写您的私钥');
		return false;
	}
	
 	mui.confirm(
 	'您的密码已重置为：123456，请重新登录后设置新密码',
 	'密码已找回',
 	new Array('好的'),
 	function(e){
		mui.back();
 	});
	
});