mui.ready(function(){
	
	mui(".mui-active").on('click','a',function(e){
		var web_url = this.getAttribute('data-url');
		plus.runtime.openURL(web_url);
	})
})