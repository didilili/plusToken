window.onload = function(){
var res = new Array(
	{id:1,mobile:'13615408184',time:'07-19 12:11',status:0},
	{id:2,mobile:'17388714407',time:'07-19 12:11',status:0},
 );
	
reLoad(res);

function reLoad(res){ 
  for (let i=0; i<res.length; i++) {
  	
  	var li = document.createElement('li');
  	li.setAttribute('class','mui-table-view-cell');
  	li.setAttribute('data-index',i);
  	
  	var mobile = document.createElement('span');
  	mobile.setAttribute('class','my-name');
  	mobile.setAttribute('style','-webkit-transform: translateY(3%);');
  	mobile.innerText = res[i].mobile;
  	
  	var status = document.createElement('span');
  	status.setAttribute('class','my-number');
  	status.innerText = res[i].status==0?"未开启":"已开启";
  	
  	var time = document.createElement('span');
  	time.setAttribute('class','my-time');
  	time.innerText = res[i].time;
  
  	li.appendChild(mobile);
  	li.appendChild(status);
  	li.appendChild(time);
  	
  	document.getElementById("list").appendChild(li);
  }

}
  
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
   	mui(".mui-table-view").on('tap','li',function(){
   			mui.openWindow({url:'friends_ai_dog.html'});
   	});
   	
   	document.getElementById("search").addEventListener('tap',function(){
   		var mobile = document.getElementById("mobile").value;
   		document.getElementById("mobile").value = '';
   		
   		var user;
   		var index; 
   		for (let i=0; i<res.length; i++) {
   			if(res[i].mobile == mobile){
   				user = res[i];
   				index = i;
   				break;
   			}
   		}
   		
   		
   		console.log(index);
   		if(!user){
   			mui.confirm('没有找到该用户','搜索结果',['OK']);
				$('#list').empty();//清空节点
				reLoad(res);//重新加载
				return false;
   		}
   		
   		
   		$('#list').empty();
   		
   		var list = document.getElementById("list");
			
	  	var li = document.createElement('li');
	  	li.setAttribute('class','mui-table-view-cell');
	  	li.setAttribute('data-index',index);
	  	
	  	var mobile = document.createElement('span');
	  	mobile.setAttribute('class','my-name');
	  	mobile.setAttribute('style','-webkit-transform: translateY(3%);');
	  	mobile.innerText = user.mobile;
	  	
	  	var status = document.createElement('span');
	  	status.setAttribute('class','my-number');
	  	status.innerText = user.status==0?"未开启":"已开启";
	  	
	  	var time = document.createElement('span');
	  	time.setAttribute('class','my-time');
	  	time.innerText = user.time;
	  
	  	li.appendChild(mobile);
	  	li.appendChild(status);
	  	li.appendChild(time);
	  	
	  	list.appendChild(li);
   	});
  });
}