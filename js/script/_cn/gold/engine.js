var engine = {
    //通用ajax
//  ajax: {
//      rpc: function (data, callback) {
//          $.ajax({
//              url: '/Service/rpc.ashx',
//              dataType: "json",
//              type: 'post',
//              data: data,
//              success: function (data) {
//                  callback(data);
//              },
//              error: function () {
//                  engine.news("通信异常", 1800);
//              }
//          });
//      },
        //身份验证
        check: {
            member: function (id, callback) {
                var ajax = m.ajax("/service/common.asmx/member", null, function (xml) {
                    var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                    if (obj.HttpResult.data) {
                        var data = m.json.getObject(obj.HttpResult.data.text);
                        engine.confirm("确认会员信息", "会员" + id + "的姓名是【" + data.username + "】，是否确认继续?", callback, function () { });
                    }
                    else {
                        engine.alert("提示", "会员信息不存在", function () { }, 'error');
                    }
                }, true);
                ajax.data.add("id", id);
                ajax.send();
            }
        },
        /*
           [获取申请类型-函数]
           参数：
           id      编号
           callback回调函数
       */
        flowtype: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/flowtype", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取地区信息-函数]
            参数：
            id      编号
            callback回调函数
        */
        place: function (root, callback) {
            var ajax = m.ajax("/service/common.asmx/place", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("root", root);
            ajax.send();
        },
        /*
            [获取语言信息-函数]
            参数：
            id      编号
            callback回调函数
        */
        language: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/language", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取行业信息-函数]
            参数：
            id      编号
            callback回调函数
        */
        trade: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/trade", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取银行信息-函数]
            参数：
            id      编号
            callback回调函数
        */
        bank: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/bank", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取快递信息-函数]
            参数：
            id      编号
            callback回调函数
        */
        express: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/express", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取会员等级-函数]
            参数：
            id      编号
            callback回调函数
        */
        memberlevel: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/memberlevel", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取会员市场-函数]
            参数：
            id      编号
            callback回调函数
        */
        memberarea: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/memberarea", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        },
        /*
            [获取订单状态-函数]
            参数：
            id      编号
            callback回调函数
        */
        orderstate: function (id, callback) {
            var ajax = m.ajax("/service/common.asmx/orderstate", null, function (xml) {
                var obj = mtopt.parse.xmlToJson(mtopt.parse.toXml(xml));
                var jso = m.json.getObject(obj.HttpResult.data.text);
                callback(jso);
            }, true);
            ajax.data.add("id", id);
            ajax.send();
        }
    },
    app: {
        //执行扫码
        qrcode: function () {
            jsBridge.scan({
                needResult: true,
            }, function (text) {
                if (text && text.split(':')[0] == "register") {
                    m.redirect("/User/register?recomid=" + text.split(':')[1]);
                }
                else {
                    engine.news("无法识别的结果", 3000);
                }
            });
        },
        //清除缓存
        clearcache: function () {
            jsBridge.clearCache(function () {
                engine.news("本地缓存已清除", 3000);
            });
        },
        //复制到剪切板
        setclipboard: function (text) {
            jsBridge.setClipboardText(text);
            engine.news("复制成功", 3000);
        },
        //获取剪切板
        getclipboard: function (callback) {
            jsBridge.getClipboardText(function (text) {
                callback(text);
            });
        },
    },
    //语言
    language: function (id) {
        engine.ajax.rpc({ "method": "USER_LANGUAGE", "id": id }, function (data) {
            engine.news("切换语言中，请稍候....", 3000, 6);
            setTimeout(function () { m.reload() }, 800);
        });
    },
    //宽度
    width: 0,
    //高度
    height: 0,
    //滚动条插件
    scroll: {},
    news: function (text, time, i) {
        var i = i || 1;
        ZENG.msgbox.show(text, i, time);
    },
    confirm: function (title, content, okcallback, cancelcallback) {
        bealert.confirm(title, content, function (isConfirm) {
            if (isConfirm) {
                okcallback();
            } else {
                cancelcallback();
            }
        }, { confirmButtonText: '确认', cancelButtonText: '取消', width: 400 });
    },
    alert: function (title, content, callback, style) {
        style = style || 'success';
        bealert.alert(title, content, function () {
            callback();
        }, { type: style, confirmButtonText: '确认' });
    },
    //退出程序
    exit: function () {
        engine.ajax.rpc({ "method": "USER_EXIT" }, function (data) {
            m.redirect("/Home/main");
        });
    },
    notification : function (title, msg) {
        //初始化数据
        var OperaMark = false;
        var Notification = window.Notification || window.mozNotification || window.webkitNotification;
        //判断操作类型
        if (Notification && Notification.permission === "granted") {
            OperaMark = true;
        }
        else if (Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
                if (status === "granted") {
                    OperaMark = true;
                }
            });
        }
        //执行成功代码
        if (OperaMark == true) {
            var instance = new Notification(
                title, {
                    body: msg,
                    icon: "/Images/notification.jpg"
                }
            );
            instance.onclick = function () {
            };
            instance.onerror = function () {
            };
            instance.onshow = function () {
                try {
                    setTimeout(instance.close, 3000);
                }
                catch (e) { }
            };
            instance.onclose = function () {
            };
        }
        else {
            toastr.info(msg, title)
        }
    },
    simoblie: function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
            return true;
        }
        else {
            return false;
        }
    },
    onsize: function () {
        var height = $(window).height() - $(".mn-navbar-top").height() - $(".mn-navbar-bottom").height();
        $(".mn-content").height(height - 120);
    },
    //当前授权SKEY
    skey: "",
    //当前授权CKEY
    ckey: "",
    //定位
    position: {
        map: null,
        timeout: 30000,
        geolocation: null,
        getCurrent: function () {
            engine.position.geolocation.getCurrentPosition();
        },
        init: function () {
            var div = document.createElement("div");
            div.id = "position_map"
            div.style.display = "none";
            engine.position.map = new AMap.Map('position_map')
            engine.position.geolocation = null;
            engine.position.map.plugin('AMap.Geolocation', function () {
                engine.position.geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0,
                    convert: true,
                    showButton: true,
                    buttonPosition: 'LB',
                    buttonOffset: new AMap.Pixel(10, 20),
                    showMarker: true,
                    showCircle: true,
                    panToLocation: true,
                    zoomToAccuracy: true
                });
                engine.position.map.addControl(engine.position.geolocation);
                AMap.event.addListener(engine.position.geolocation, 'complete', function (data) {
                    engine.position.x = data.position.getLng();
                    engine.position.y = data.position.getLat();
                    engine.position.onCurrent(engine.position.x, engine.position.y);
                    //更新到服务器端
                    m.ajax('/Service/position.ashx?x=' + engine.position.x + "&y=" + engine.position.y, null,
                        function () {
                            setTimeout(function () {
                                engine.position.getCurrent();
                            }, engine.position.timeout);
                        }
                    ).send();
                });
            });
            engine.position.getCurrent();
        },
        onCurrent: function (x, y) { },
        x: -1,
        y: -1
    },
    stocktypes: function () {
        engine.ajax.rpc({ "method": "STOCK_FRAMES" }, function (data) {
            var datas = data.Data;
            for (var i in datas) {
                var data = datas[i];
                m.node(".stock-type-" + data.Id + "-price").html(data.Price);
                m.node(".stock-type-" + data.Id + "-maxprice").html(data.MaxPrice);
                m.node(".stock-type-" + data.Id + "-minprice").html(data.MinPrice);
                m.node(".stock-type-" + data.Id + "-amount").html(data.Amount);
                m.node(".stock-type-" + data.Id + "-money").html(data.Money);
                if (data.Rise >= 0) {
                    m.node(".stock-type-" + data.Id + "-rise").html("+" + data.Rise + "%").removeClass("block-down").addClass("block-up");
                    m.node(".stock-type-" + data.Id + "-price").html(data.Price).removeClass("font-down").addClass("font-up");
                }
                else {
                    m.node(".stock-type-" + data.Id + "-rise").html(data.Rise + "%").removeClass("block-up").addClass("block-down");
                    m.node(".stock-type-" + data.Id + "-price").html(data.Price).removeClass("font-up").addClass("font-down");
                }
            }
        });
    },
    //组合认证
    combinationauth: function (callback) {
        $('#combinationauth_iframe').fancybox({
            autoScale: true,
            openEffect: 'iframe'
        });
        $("#combinationauth_iframe").attr("href", "/Shared/verify").click();
        this.combinationcallback = callback;
    },
    combinationcallback: function () {
        
    },
    //加载
    init: function () {
        //读取基本数据
        engine.skey = m.node(".HD_SKEY").value();
        engine.ckey = m.node(".HD_CKEY").value();
        //注册服务器推送
        if (typeof (EventSource) !== "undefined") {
            var source = new EventSource("/service/serversent.ashx?type=1&connectionkey=" + engine.ckey);
            source.onmessage = function (event) {
                if (event.data == null || event.data == "") {
                    return;
                }
                var datas = m.json.getObject(event.data);
                //开始解析内容
                for (var i in datas) {
                    //如果是公告类型
                    if (datas[i].head == 1) {
                        engine.notification(datas[i].title, datas[i].content);
                    }
                        //如果是命令类型
                    else if (datas[i].head == 99) {
                        switch (datas[i].title) {
                            case "EXIT"://如果是退出类型
                                if (datas[i].content.indexOf(engine.ipaddress) < 0) {
                                    engine.exit();
                                }
                                break;
                            case "VIEW"://如果是查看类型
                                m.redirect(datas[i].content);
                                break;
                            case "RELOAD"://如果是刷新
                                m.reload();
                                break;
                        }
                    }
                }
            };
        }
        if (pck && pck.menuid) {
            m.node(".mui-bar .mui-tab-item").removeClass("mui-active");
            m.node(".mui-tab-item-" + pck.menuid).addClass("mui-active");
        }
        mui.init({
            pullRefresh: {
                container: '#wrapper',
                down: {
                    callback: function () {
                        setTimeout(function () { m.reload(); }, 300);
                    }
                },
            }
        });
        mui('.mui-tap-bind').on('tap', 'a', function () {
            if (this.href && this.href.length > 0) {
                document.location.href = this.href;
            }
            else {
                this.onclick();
            }
        });
        engine.position.init();
        $('.fancybox').fancybox();
        if (m.cache.get("iswarning") != "1") {
            bealert.alert("Huobi提醒您", "<p style='text-align:left'>数字货币交易具有极高的风险（预挖、暴涨暴跌、庄家操控、团队解散、技术缺陷等），据国家五部委《关于防范比特币风险的通知》，Huobi仅为数字货币的爱好者提供一个自由的网上交换平台，对币的投资价值不承担任何审查、担保、赔偿的责任。如果您不能接受，请不要进行交易！谢谢！<p>", function () {
                m.cache.set("iswarning", "1");
            }, { type: "warning", confirmButtonText: '我已了解以上风险', width: 400 });
        }
    }
}
$(document).ready(function () {
    engine.init();
});
