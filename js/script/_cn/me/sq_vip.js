var res = [
	{id:1,date:'2018-1-19',result:2,msg:'恭喜通过审核'},
	{id:2,date:'2018-3-19',result:0,msg:'就不给你过'},
	{id:3,date:'2018-6-19',result:0,msg:'就不给你过*2'},
	{id:4,date:'2018-7-19',result:1,msg:'正在为您审核，请耐心等待'},
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
			text = '未通过';
		break;
		case 1:
			text = '审核中';
		break;
		case 2:
			text = '已通过';
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
		
			mui.prompt('请输入交易密码','请输入交易密码','申请VIP',['确定','取消'],function(e){
				console.log(JSON.stringify(e));	
				
				if(e.index == 0)
				{
					if(!e.value){
						mui.toast('请输入交易密码');
						return false;
					}
					var data = {id:5,date:'2018-8-19',result:1,msg:'正在审核，请耐心等候'};
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
					
					let text = '审核中';
					let result = document.createTextNode(text);
					span.appendChild(result);
					
					li.appendChild(span);
					list.appendChild(li);
					
					res.push(data);
					mui.confirm('我们已收到您的申请，正在审核中，请耐心等待','申请完成',['好的']);
				}
				
			});
	})
	
	mui(".mui-table-view").on('tap','li',function(e){
		var id = this.getAttribute('data-id');
		var index = this.getAttribute('data-index');
		mui.confirm(res[index].msg,'客服留言',['好的']);
	});
});