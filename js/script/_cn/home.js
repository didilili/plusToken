//从服务端获取数据【模拟】
function sercer_load(callback){
	//ajax获取数据
	var res = [
		{id:1,icon:'../../images/icons/logo.png',name:'PLUS',num:"1.00",dollar:"1.14026"},	
		{id:2,icon:'../../images/icons/ETH.svg',name:'EHT',num:"0.00",dollar:"0.00"},
		{id:3,icon:'../../images/icons/BTC.svg',name:'BTC',num:"0.00",dollar:"0.00"},
		{id:4,icon:'../../images/icons/LTC.svg',name:'LTC',num:"0.00",dollar:"0.00"},
		{id:5,icon:'../../images/icons/BCH.svg',name:'BCH',num:"0.00",dollar:"0.00"},
		{id:6,icon:'../../images/icons/XRP.svg',name:'XRP',num:"0.00",dollar:"0.00"},
		{id:7,icon:'../../images/icons/EOS_.svg',name:'EOS',num:"0.00",dollar:"0.00"},
		{id:8,icon:'../../images/icons/DOGE.svg',name:'DOGE',num:"0.00",dollar:"0.00"},	
	];
	
	document.getElementById("assets").innerText = 1.14026;
	
	callback(res);
}

//下拉刷新
function pulldown(){
	sercer_load(function(re){
		document.getElementById("gold_list").innerHTML = '';//因为是重新加载，所以先清空DOM
		reLoad(re);
		
		//刷新结束
		mui.toast('已刷新');
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
		var li = document.createElement("li");
		var img = document.createElement("img");
		var span = document.createElement("span");
		var div = document.createElement("div");
		var c = document.createElement("c");
		var c2 = document.createElement("c");
		
		img.src = list[i].icon;
		
		var span_node = document.createTextNode(list[i].name);
		span.appendChild(span_node);
		
		div.classList.add('bi');
		c.classList.add('versions');
		c2.classList.add('versions');
	
		var c_node=document.createTextNode(String(list[i].num));
		c.appendChild(c_node);
		
		var c2_node=document.createTextNode('≈ $ '+ String(list[i].dollar));
		c2.appendChild(c2_node);
		
		div.appendChild(c);
		div.appendChild(c2);
		
		
		li.classList.add("mui-table-view-cell");
		li.setAttribute('data-name',list[i].name);
		li.setAttribute('data-id',list[i].id);
		li.setAttribute('data-index',i);
		
		li.appendChild(img);
		li.appendChild(span);
		li.appendChild(div);
		
		ul.appendChild(li);	
	}
}


window.onload = function(){
	//H5+ plus事件
	mui.plusReady(function(){
		
		//二维码点击
		mui(".qc-p").on('tap','img',function(e){
			mui.openWindow({
				url:'qr_code.html',
				extras:{qr_code:'../../images/qr.png',address:"sdfghjklxcvbnmqwertyuibnmqwertyui"}
			})
		});
		
		//列表点击
		mui(".about_ours .mui-table-view").on('tap','li',function(e){
			var name = this.getAttribute('data-name');
			var id = this.getAttribute('data-id');
			mui.openWindow({
				url:'transaction.html',
				extras:{title:name,id:id},
			});
		});
	});
}

