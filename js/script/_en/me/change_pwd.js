window.onload = function(){
  mui.plusReady(function(){
  	
  	//忘记密码
document.getElementById("pwd_type").addEventListener('tap', function() {
	var picker = new mui.PopPicker();
	picker.setData([
		{
	    	value: "1",
	    	text: "login password"
		},
		{
	    	value: "2",
	    	text: "transaction password"
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
		mui.toast('Please select the password you want to modify');
		return false;
	}
	
	if(!key){
		mui.toast('Please fill in your private key');
		return false;
	}
	
	if(!pwd){
		mui.toast('Please fill in your new password');
		return false;
	}
	
	if(pwd != pwd2){
		mui.toast('Password entered twice inconsistent');
		return false;
	}
	
	
	
 	mui.confirm(
 	'Your password has been modified',
 	'Successfully modified',
 	new Array('OK'),
 	function(e){
		mui.back();
 	});
	
});
  	
  });
}