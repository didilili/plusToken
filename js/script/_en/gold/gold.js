var pck = {
    title: "Trading Home",
    menuid: "trend",
    mode: 1,
    mode_select: function (elm, id) {
        m.node(".stock-mode a").removeClass("active");
        if (id == 1) {
            m.node(".select-limit").addClass("active");
            m.node(".limit-mode").show();
            m.node(".market-mode").hide();
        }
        else {
            m.node(".select-market").addClass("active");
            m.node(".limit-mode").hide();
            m.node(".market-mode").show();
        }
        pck.mode = id;
    },
    //页面切换操作
    showtread :function(elm) {
        m.node("a", elm.parentNode).removeClass("mui-btn-primary");
        m.node(elm).addClass("mui-btn-primary");
        m.node("#user_panel").hide();
        m.node("#chart_tread").show();
    },
    showbuy: function (elm) {
        m.node("a", elm.parentNode).removeClass("mui-btn-primary");
        m.node(elm).addClass("mui-btn-primary");
        m.node("#user_panel").show();
        m.node("#sell_panel").hide();
        m.node("#buy_panel").show();
        m.node("#chart_tread").hide();
    },
    showsell: function (elm) {
        m.node("a", elm.parentNode).removeClass("mui-btn-primary");
        m.node(elm).addClass("mui-btn-primary");
        m.node("#user_panel").show();
        m.node("#sell_panel").show();
        m.node("#buy_panel").hide();
        m.node("#chart_tread").hide();
    },
    cancel:function(id,type){
       mui.toast('Successfully withdrawn');
    },
    buy: function () {
        if (pck.mode == 1) {
            var price = m.node("#limit_buy_price").value();
            var amount = m.node("#limit_buy_amount").value();
            if (price.length <= 0) {
            	mui.toast('Please enter the price');
                return;
            }
            if (amount.length <= 0 || amount <= 0) {
            	mui.toast('Please enter the quantity');
                return;
            }
            mui.toast('Buy submitted');
        }
        else {
            var amount = m.node("#market_buy_amount").value();
            if (amount.length <= 0 || amount <= 0) {
               	mui.toast('Please enter the planned quantity');
                return;
            }
            
            mui.toast('Buy submitted');
        }
    },
    sell: function () {
        if (pck.mode == 1) {
            var price = m.node("#limit_sell_price").value();
            var amount = m.node("#limit_sell_amount").value();
            if (price.length <= 0) {
            	mui.toast('Please enter the price');
                return;
            }
            if (amount.length <= 0 || amount <= 0) {
            	mui.toast('Please enter the quantity');
                return;
            }
            
            mui.toast('Sell submitted')
    
        }
        else {
            var amount = m.node("#market_sell_amount").value();
            if (amount.length <= 0 || amount <= 0) {
            	mui.toast('Please enter the planned quantity');
                return;
            }
            mui.toast('Sell submitted')
        }
    },
    refurbish: function () {
    		m.node("#member_money span").html(100);
            m.node("#account_money span").html(123456);
            m.node("#newprice").html(200);
            
            m.node("#maxprice").html(300);
            m.node("#minprice").html(50);
            m.node("#amountprice").html(250);
           
            
            if (true) {
                m.node("#newprice").removeClass("down").addClass("up");
            }
            else {
                m.node("#newprice").removeClass("up").addClass("down");
            }
            
            
            //读取买&卖单信息
            m.node("#allentrusts tbody").html("");
            var si = 1;
            var bi = 1;
            var buyhtml = "";
            var sellhtml = "";
            
            buyhtml += "<tr><td><span class='font-buy'>Buy" + 10 + "</span></td><td>" + 11 + "</td><td>" +123 + "</td></tr>";
            sellhtml = "<tr><td><span class='font-sell'>Sell" + 20 + "</span></td><td>" + 21 + "</td><td>" + 123 + "</td></tr>" + sellhtml;
            
            m.node("#allentrusts tbody").html(sellhtml + buyhtml);
            
             //读取委托信息
            var turnoverhtml = "";
            turnoverhtml += "<tr><td>" + "12:30" + "</td><td>" + 'AllEntrust.name' + "</td><td>" + 31 + "</td><td>" + 123 + "</td></tr>";
            m.node("#allturnover tbody").html(turnoverhtml);
            
            var content = "";
            var html = "<tr><td>";
            m.node("#mysentrusts tbody").html("");
            if(true){
        		html += "<span class='font-buy'>Buy</span>";
            }
            else 
            {
                html += "<span class='font-sell'>Sell</span>";
            }
            
            html += "</td><td>" + 10 + "</td><td>" + 123 + "</td>";
            html += "<td><span class='mui-btn mui-btn-xs mui-btn-danger' onclick='pck.cancel(" + 1 + ", " + 1 + ")'>Withdrawal</a></td></tr>";
            content += html;
           
            m.node("#mysentrusts tbody").html(content);
    },
    uiupdate: function () {
        var newprice = m.node("#newprice").html() || 0;
        //刷新买入控件
        {
            var limit_buy_price = m.node("#limit_buy_price").value() || 0;
            var limit_buy_amount = m.node("#limit_buy_amount").value() || 0;
            m.node("#limit_buy_money").value(Number(limit_buy_price * limit_buy_amount).toFixed(2));

            var market_buy_amount = m.node("#market_buy_amount").value() || 0;
            m.node("#market_buy_money").value(Number(market_buy_amount / newprice).toFixed(5));
        }
        //刷新卖出控件
        {
            var limit_sell_price = m.node("#limit_sell_price").value() || 0;
            var limit_sell_amount = m.node("#limit_sell_amount").value() || 0;
            m.node("#limit_sell_money").value(Number(limit_sell_price * limit_sell_amount).toFixed(2));


            var market_sell_amount = m.node("#market_sell_amount").value() || 0;
            m.node("#market_sell_money").value(Number(newprice * market_sell_amount).toFixed(2));
        }
    },
    init: function () {
        pck.refurbish();
//      setInterval(function () { engine.stocktypes(); pck.refurbish(); }, 800);
        //绑定控件
        $('#limit_buy_select').jRange({
            from: 0,
            to: 100,
            step: 1,
            scale: [0, 25, 50, 75, 100],
            format: '%s',
            theme: 'theme-blue',
            width: '100%',
            showLabels: true,
            showScale: true,
            onstatechange: function () {
                var price = m.node("#limit_buy_price").value() || 0;
                var total = $("#member_money span").html() * ($('#limit_buy_select').val() / 100);
                m.node("#limit_buy_money").value(Number(total).toFixed(2));
                m.node("#limit_buy_amount").value(Number(total / price).toFixed(5));
            }
        });
        $('#limit_sell_select').jRange({
            from: 0,
            to: 100,
            step: 1,
            scale: [0, 25, 50, 75, 100],
            format: '%s',
            theme: 'theme-blue',
            width: '100%',
            showLabels: true,
            showScale: true,
            onstatechange: function () {
                var price = m.node("#limit_sell_price").value() || 0;
                var total = $("#account_money span").html() * ($('#limit_sell_select').val() / 100);
                m.node("#limit_sell_money").value(Number(total * price).toFixed(2));
                m.node("#limit_sell_amount").value(Number(total).toFixed(5));
            }
        });
        $('#market_buy_select').jRange({
            from: 0,
            to: 100,
            step: 1,
            scale: [0, 25, 50, 75, 100],
            format: '%s',
            theme: 'theme-blue',
            width: '100%',
            showLabels: true,
            showScale: true,
            onstatechange: function () {
                var price = m.node("#newprice").html() || 0;
                var total = $("#member_money span").html() * ($('#market_buy_select').val() / 100);
                m.node("#market_buy_money").value(Number(total / price).toFixed(5));
                m.node("#market_buy_amount").value(Number(total).toFixed(2));
            }
        });
        $('#market_sell_select').jRange({
            from: 0,
            to: 100,
            step: 1,
            scale: [0, 25, 50, 75, 100],
            format: '%s',
            theme: 'theme-blue',
            width: '100%',
            showLabels: true,
            showScale: true,
            onstatechange: function () {
                var price = m.node("#newprice").html() || 0;
                var total = $("#account_money span").html() * ($('#market_sell_select').val() / 100);
                m.node("#market_sell_money").value(Number(total * price).toFixed(2));
                m.node("#market_sell_amount").value(Number(total).toFixed(5));
            }
        });
    }
}
pck.init();
