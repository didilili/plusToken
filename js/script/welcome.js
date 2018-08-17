mui.plusReady(function(){
	//无限加载进度条
//	mui("#demo1").progressbar().show();

	//系统语言
	var storage = window.localStorage; 

//	storage.clear();
	
	var lang = storage.getItem('language');
	var language =  lang ? lang:'_cn';
	
	var path = 'login';
	
	if(storage.getItem('user')){
		path = 'index';
	}
	
	
	console.log(language);
	console.log(path);
	
	var url_loca = './'+language+'/'+path+'.html';
	console.log(url_loca)
	var view = mui.openWindow({
		url: url_loca,
		id: path,
	});
});

