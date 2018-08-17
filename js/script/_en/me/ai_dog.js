mui.plusReady(function(){
	//关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
    
	mui(".mui-table-view-cell").on('toggle','div',function(event){
		var name = this.getAttribute('id');
		var id = this.getAttribute('data-id');//传给服务端的ID
		
		if(event.detail.isActive){//开启
			mui.prompt('Please enter the number of open','','Open'+name,['OK','Cancel'],function(e){
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
						mui.toast('Please enter a valid value');
						return false;
					}
					
					mui.prompt('Please enter the transaction password','','Password',['OK','Cancel'],function(e2){
						if(e2.index == 1){//点击取消
				    		mui("#"+name).switch().toggle();
				    		return false;
						}
						else if(e2.index == 0)
						{
							//mui.post();
							mui.toast('Opend')
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
			extras:{title:'Open record'},
		})
	})
})