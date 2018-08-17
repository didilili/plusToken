//协议
const pact = 'http://';
//域名
const domain = 'test.com';

//APIURL
const url = pact+domain;

//本地缓存封装方法
const Storage = {
    get:function (name) {
        return JSON.parse(localStorage.getItem(name));
    },
    set:function (name, val) {
        localStorage.setItem(name, val);
    },
    add : function (name, addVal) {
        let oldVal = this.get(name);
        let newVal = oldVal.concat(addVal);
        this.set(name, newVal);
    },
    has : function (name) {
        let oldVal = this.get(name);
        return oldVal ? true : false;
    },
    clear : function(){
    	localStorage.clear();
    },
    del :function(name){
    	localStorage.removeItem(name);
    }
};
