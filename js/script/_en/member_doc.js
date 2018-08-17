document.getElementById("next").addEventListener('tap',function(){
	var box = document.getElementById("doc_checkbox").value;
	console.log(box);
	
	if(box==0){
		mui.toast('Please read the membership agreement first.');
		return false;
	}
	
	mui.openWindow({
		url:'./reg.html',
		id:'reg'
	});
});
