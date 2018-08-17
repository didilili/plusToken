window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
  });
 
 
  var flag = localStorage.getItem('language_flag');
	var old_back = mui.back;
	mui.back = function(){
			if(flag){
				localStorage.removeItem('language_flag');
				
				var webview = plus.webview.create('../index.html','index');
	    	webview.show();
			}else{
	    	localStorage.removeItem('language_flag');
				
				old_back();
			}
			
	};
  
  
  document.getElementById("lang").addEventListener('click',function(){
  			var thisLang = localStorage.getItem('language');
  			
	 		  //询问框
			  layer.open({
			    content: 'Please select the language you want to use'
			    ,btn: ['简体中文', 'English']
			    ,yes: function(index){
			      if(thisLang == "_cn"){
			      	mui.toast('目前已是简体中文，无需重复选择')
			      	layer.close(index);
			      	return false;
			      }
			      
			      localStorage.setItem('language_flag',true);
			      localStorage.setItem('language','_cn');
			      location_lang('../../_cn/me/settings.html');
			      
			    }
			    ,no:function(){
			    	if(thisLang == "_en"){
			      	mui.toast('Currently in English, no need to repeat')
			      	layer.close(index);
			      	return false;
			    	}
			    	
			    	localStorage.setItem('language_flag',true);
			    	localStorage.setItem('language','_en');
			    	location_lang('../../_en/me/settings.html');
			    }
			  });
  })
  
  document.getElementById("password").addEventListener('tap',function(){
  		mui.openWindow({url:'change_pwd.html'})
  })
  
  document.getElementById("key").addEventListener('tap',function(){
  		mui.prompt('Please enter your transaction password','transaction password','Password validation',['OK','Cancel'],function(e){
  				if(e.index == 0){
  					if(!e.value){
  							mui.toast('Please enter the transaction password');
  							return false;
  					}
  					
  					mui.openWindow({
  						url:'key.html',
  						extras:{key:'tyukkmnbvdfyuilmnbgtyujnbvcfghbvcxdrthbvcdsertyujmnbvfgyuikmnbhyuikmn'},
  					});
  				}
  		});
  })
  
  var location_lang = function(l_url){
  	var curr = plus.webview.currentWebview();
	   	var wvs = plus.webview.all();
        for (var i = 0, len = wvs.length; i < len; i++) {
            //关闭除当前页面外的其他页面
            if (wvs[i].getURL() == curr.getURL())
                continue;
            plus.webview.close(wvs[i]);
        }
	   	
	   		//打开login页面后再关闭setting页面
        plus.webview.open(l_url);
        curr.close();
  }
}