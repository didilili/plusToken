//从服务端获取数据【模拟】
function sercer_load(callback){
	//ajax获取数据
	var res = [
		{id:1,icon:'../../images/icons/logo.png',name:'PLUS',price:"100.141",update:"0",status:0},	
		{id:2,icon:'../../images/icons/ETH.svg',name:'EHT',price:"100.141",update:"0",status:1},
		{id:3,icon:'../../images/icons/BTC.svg',name:'BTC',price:"100.141",update:"0",status:0},
		{id:4,icon:'../../images/icons/LTC.svg',name:'LTC',price:"100.141",update:"0",status:1},
		{id:5,icon:'../../images/icons/BCH.svg',name:'BCH',price:"100.141",update:"0",status:0},
		{id:6,icon:'../../images/icons/XRP.svg',name:'XRP',price:"100.141",update:"0",status:1},
		{id:7,icon:'../../images/icons/EOS_.svg',name:'EOS',price:"100.141",update:"0",status:0},
		{id:8,icon:'../../images/icons/DOGE.svg',name:'DOGE',price:"100.141",update:"0",status:1},	
	];
	
	callback(res);
}

//下拉刷新
function pulldown(){
	sercer_load(function(re){
		document.getElementById("gold_list").innerHTML = '';//因为是重新加载，所以先清空DOM
		reLoad(re);
		
		//刷新结束
		mui.toast('Refreshed');
		mui('.about_ours').pullRefresh().endPulldown(true);
	});
}

//上拉加载
function pullup(){
	var that = this;
	
	sercer_load(function(re){
		reLoad(re);
		//加载结束
		that.endPullupToRefresh(true);
		mui('.about_ours').pullRefresh().refresh(true);
	});
}


//页面渲染
function reLoad(list){		
	//DOM操作，渲染页面
	var ul = document.getElementById("gold_list");
	
	for (let i=0; i<list.length; i++) {
		var color = list[i].status==0 ? "green" : "red";
		var fuhao = list[i].status==0 ? "-" : "+";
		
		var li = document.createElement("li");
		var div = document.createElement("div");
		var img = document.createElement("img");
		var span = document.createElement("span");
		var span2 = document.createElement("span");
		var span3 = document.createElement("span");
		var button = document.createElement("button");
		
		li.classList.add("mui-table-view-cell");
		li.setAttribute('data-name',list[i].name);
		li.setAttribute('data-id',list[i].id);
		li.setAttribute('data-index',i);

		img.src = list[i].icon;
		img.classList.add('my-name');
		img.setAttribute('style',"-webkit-transform: translateY(3%);");
		
		span.classList.add('my-span');
		span.innerText = list[i].name;
		
		div.appendChild(img);
		div.appendChild(span);
		
		span2.classList.add('my-number');
		span2.style.color = color;
		span2.innerText = '$'+list[i].price;
		
		span3.classList.add('my-time');
		span3.classList.add('bi-but');
		button.style.background = color;
		button.innerText = fuhao+list[i].update+"%";

		span3.appendChild(button);
	
		li.appendChild(div);
		li.appendChild(span2);
		li.appendChild(span3);
		ul.appendChild(li);
		
	}
}


mui.ready(function(){
	mui(".mui-table-view").on('tap','li',function(){
		mui.openWindow({url:'gold.html'});
	});
})