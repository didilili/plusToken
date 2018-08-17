var res = [
	{id:1,date:'2018-1-19',result:2,msg:'Congratulations on passing the review'},
	{id:2,date:'2018-3-19',result:0,msg:'I will not give you'},
	{id:3,date:'2018-6-19',result:0,msg:'I will not give you*2'},
	{id:4,date:'2018-7-19',result:1,msg:'Reviewing，please wait with patience'},
];

var list = document.getElementById('list');

for (let i=0; i<res.length; i++) {
	
	let li = document.createElement('li');
	
	li.setAttribute('class','mui-table-view-cell');
	li.setAttribute('data-id',res[i].id);
	li.setAttribute('data-index',i);
	
	let node = document.createTextNode(res[i].date);
	li.appendChild(node);
	
	let span = document.createElement('span');
	span.setAttribute('class','mui-badge mui-badge-primary');
	
	let text;
	switch (res[i].result){
		case 0:
			text = 'Did not pass';
		break;
		case 1:
			text = 'Reviewing';
		break;
		case 2:
			text = 'Passed';
		break;
	}
	
	let result = document.createTextNode(text);
	span.appendChild(result);
	
	li.appendChild(span);
	list.appendChild(li);
}


mui.plusReady(function(){
	 //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
    
	document.getElementById("vip").addEventListener('tap',function(){
		
			mui.prompt('Please enter the transaction password','Please enter the transaction password','Apply for VIP',['OK','Cancel'],function(e){
				console.log(JSON.stringify(e));	
				
				if(e.index == 0)
				{
					if(!e.value){
						mui.toast('Please enter the transaction password');
						return false;
					}
					
					var data = {id:5,date:'2018-8-19',result:1,msg:'Reviewing，please wait with patience'};
					console.log(e.value);
					
					var list = document.getElementById('list');
					
					let li = document.createElement('li');
					
					li.setAttribute('class','mui-table-view-cell');
					li.setAttribute('data-id',data.id);
					li.setAttribute('data-index',res.length);
					
					let node = document.createTextNode(data.date);
					li.appendChild(node);
					
					let span = document.createElement('span');
					span.setAttribute('class','mui-badge mui-badge-primary');
					
					let text = 'Reviewing';
					let result = document.createTextNode(text);
					span.appendChild(result);
					
					li.appendChild(span);
					list.appendChild(li);
					
					res.push(data);
					mui.confirm('We have received your application, are under review, please be patient','success',['OK']);
				}
				
			});
	})
	
	mui(".mui-table-view").on('tap','li',function(e){
		var id = this.getAttribute('data-id');
		var index = this.getAttribute('data-index');
		mui.confirm(res[index].msg,'message',['OK']);
	});
});