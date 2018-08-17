window.onload = function(){
  mui.plusReady(function(){
    //关闭等待框
    plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();

  	document.getElementById("source").addEventListener('tap', function() {
			var picker = new mui.PopPicker();
			picker.setData([
				{
						text: "PLUS",
			    	id: "5",
			    	source: "PLUS",
			    	aims_id:5,
			    	aims:'ETH',
				},
				{
			  		id: "1",
			    	source: "ETH",
			    	text: "ETH",
			    	aims_id:1,
			    	aims:'PLUS',
				},
				{
			  		id: 2,
			    	source: "BTC",
			    	text: "BTC",
			    	aims_id:2,
			    	aims:'PLUS',
				},
				{
			  		id: 3,
			    	source: "LTC",
			    	text: "LTC",
			    	aims_id:3,
			    	aims:'PLUS',
				},
				{
			  		id: 4,
			    	source: "DOGE",
			    	text: "DOGE",
			    	aims_id:4,
			    	aims:'PLUS',
				}
			])
		
			picker.show(function(SelectedItem) {
				document.getElementById("source").value = SelectedItem[0].source;
				document.getElementById("source").setAttribute('data-value',SelectedItem[0].id);
				
				document.getElementById("aims").value = SelectedItem[0].aims;
				document.getElementById("aims").setAttribute('data-value',SelectedItem[0].aims_id);
			})
		});
		
		document.getElementById("sou").addEventListener('tap',function(){
				var source = document.getElementById("source").value;
				var aims = document.getElementById("aims").value;
				
				if(!(source && aims && source != '点击选择')){
					mui.toast('请先选择');
					return false;
				}
				
				document.getElementById("null_list").setAttribute('style','display: none;')
				
				var name = source+" -> "+aims;
				document.getElementById("name").innerText = name;
				document.getElementById("list").setAttribute('style','')
				
				
		})
  });
}