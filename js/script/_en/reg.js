var img = new Array(
	{id:1,value:'6031',src:'../../images/verify1.jpg'},
	{id:2,value:'7831',src:'../../images/6215.jpg'},
	{id:3,value:'0520',src:'../../images/9905.jpg'},
	{id:4,value:'6031',src:'../../images/verify1.jpg'},
	{id:5,value:'7831',src:'../../images/6215.jpg'},
	{id:6,value:'0520',src:'../../images/9905.jpg'},
	{id:7,value:'6031',src:'../../images/verify1.jpg'},
	{id:8,value:'7831',src:'../../images/6215.jpg'},
	{id:9,value:'0520',src:'../../images/9905.jpg'},
	{id:10,value:'6031',src:'../../images/verify1.jpg'},
);

$(function(){
	setImg();
});

function setImg(){
	var num = Math.floor(Math.random()*10);
	console.log(num);
	document.getElementById("imgCheck").setAttribute('data-value',img[num].value);
	document.getElementById("imgCheck").setAttribute('src',img[num].src);
	document.getElementById("imgCheck").setAttribute('data-index',num);
}
document.getElementById("area").addEventListener('tap', function() {
	var picker = new mui.PopPicker();
	picker.setData([
		{value: "1", text: "+86 China"},
		{value: "2", text: "+1 America"},
		{value: "3", text: "+44 England"},
		{value: "4", text: "+33 France"},
		{value: "5", text: "+49 Germany"},
		{value: "6", text: "+39 Italy"},
		{value: "7", text: "+52 Mexico"},
		{value: "8", text: "+55 Brazil"},
	])

	picker.show(function(SelectedItem) {

		$("#area").val(SelectedItem[0].text);
		$("#area").attr('data-value',SelectedItem[0].value);
	})
});

//提交事件
document.getElementById("next").addEventListener('tap', function() {
	var area = document.getElementById("area").getAttribute('data-value');
	if(!area){
		mui.toast('Please select your country code'); return false;
	}
	
	var mobile = document.getElementById("mobile").value;
	if(!mobile){
		mui.toast('Please enter phone number'); return false;
	}
	
	if(!(/^1[34578]\d{9}$/.test(mobile))){ 
        mui.toast("The mobile number is incorrect, please refill");  
        return false; 
    } 
	
	var password = document.getElementById("password").value;
	if(!password){
		mui.toast('Please enter your password'); return false;
	}
	
	var password2 = document.getElementById("password2").value;
	if(password2 != password){
		mui.toast('Two password entries are inconsistent'); return false;
	}

	
	var imgcode = document.getElementById("imgcode").value;
	var imgIndex = document.getElementById("imgCheck").getAttribute('data-index');
	if(!imgcode){
		mui.toast('please enter verification code'); return false;
	}
	
	if(imgcode != img[imgIndex].value){
		mui.toast('Code is incorrect'); return false;	
	}
	
	var data = {
		password:password,
		mobile:mobile,
		area_id:area,
	};
	
	mui.openWindow({
		url:'./set_pwd.html',
		id:'set_pwd',
		extras:data,
	});
});