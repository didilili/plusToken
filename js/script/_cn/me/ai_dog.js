mui.plusReady(function(){
	//关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
	mui(".mui-table-view-cell").on('toggle','div',function(event){
		var name = this.getAttribute('id');
		var id = this.getAttribute('data-id');//传给服务端的ID
		
		if(event.detail.isActive){//开启
			mui.prompt('请输入开启数量','','开启'+name,['确定','取消'],function(e){
				console.log(JSON.stringify(e));	
				
				if(e.index == 1){//点击取消
		    		mui("#"+name).switch().toggle();
		    		return false;
				}
				else if(e.index == 0)
				{
			
					var num = parseFloat(e.value);
					
					if(!num){
			    		mui("#"+name).switch().toggle();
						mui.toast('请输入有效数值');
						return false;
					}
					
					mui.prompt('请输入交易密码','','交易密码',['确定','取消'],function(e2){
						if(e2.index == 1){//点击取消
				    		mui("#"+name).switch().toggle();
				    		return false;
						}
						else if(e2.index == 0)
						{
							//mui.post();
							mui.toast('已开启')
						}
						else
						{
							console.log('back键返回');
							mui("#"+name).switch().toggle();
						    return false;
						}
						
						console.log(e2.value);
					});
				}
				else
				{
					console.log('back键返回');
					mui("#"+name).switch().toggle();
				    return false;
				}
			});
		 }
		
		console.log("你关闭了"+name+"的开关");
	});
	
	document.getElementById("dog_history").addEventListener('tap',function(){
		mui.openWindow({
			url:'list_com.html',
			extras:{title:'开启记录'},
		})
	})
})