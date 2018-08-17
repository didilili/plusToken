
//忘记密码
document.getElementById("pwd_type").addEventListener('tap', function() {
	var picker = new mui.PopPicker();
	picker.setData([
		{
	    	value: "1",
	    	text: "Login Password"
		},
		{
	    	value: "2",
	    	text: "Transaction Password"
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
		mui.toast('Please select the password you are looking for');
		return false;
	}
	
	if(!key){
		mui.toast('Please enter in your private key');
		return false;
	}
	
 	mui.confirm(
 	'Your password has been reset to: 123456, please re-login to set a new password',
 	'Password has been reset',
 	new Array('OK'),
 	function(e){
		mui.back();
 	});
	
});