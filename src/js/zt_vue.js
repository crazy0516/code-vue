var app = new Vue({
    el: '#app',
    data: {
        localUrl: window.location.href, //当前地址
        hasGift: "", //是否拥有礼品
        token: "",
        loginUrl: "//m.jiehun.com.cn/login?u=", //登录页面链接
        getUserPrizesUrl: '//open.jiehun.com.cn/activityapi/lottery/get-qualify', //获取我的礼品接口地址,
        getPlayerlistUrl: '//open.jiehun.com.cn/vote/follow/playerlist',//获取我的pick作品接口地址,
        prize: {}, //我的礼品详情,
        hasPick: '',// 是否有pick作品
        pickList: [], //pick作品列表
        lottery_id: '292-293-294'//奖池ID

    },
    created() {
        this.token = this.getCookie("Authorization") ? this.getCookie("Authorization") : this.getCookie("jhu");
        console.log(this.token);
        if (this.token) {
            this.getUserPrizesFn();
            this.getPlayerlistFn();
        }
    },
    methods: {
        //   获取我的pick作品
        getPlayerlistFn: function () {
            var That = this;
            $.ajax({
                url: That.getPlayerlistUrl,
                dataType: 'json',
                contentType: "application/json;charset=utf-8",
                type: 'post',
                beforeSend: function (XMLHttpRequest) {
                    var cityId = That.getCityId();
                    XMLHttpRequest.setRequestHeader("Authorization", That.token);
                    XMLHttpRequest.setRequestHeader("city-id", cityId);
                },
                success: function (receiveData) {
                    console.log(receiveData);
                    if (receiveData.code == 0) {
                        if (receiveData.data.length > 0) {
                            That.hasPick = true;
                            That.pickList = receiveData.data;
                        }
                        else {
                            That.hasPick = false;
                        }
                    }
                },
                error: function (data) { console.log(data) }
            })
        },
        //获取我的礼品
        getUserPrizesFn: function () {
            var That = this;
            $.ajax({
                url: That.getUserPrizesUrl,
                dataType: 'json',
                data: JSON.stringify({
                    Authorization: That.token,
                    lottery_id: That.lottery_id
                }),
                contentType: "application/json;charset=utf-8",
                type: 'post',
                beforeSend: function (XMLHttpRequest) {
                    var cityId = That.getCityId();
                    XMLHttpRequest.setRequestHeader("Authorization", That.token);
                    XMLHttpRequest.setRequestHeader("city-id", cityId);
                },
                success: function (receiveData) {
                    console.log(receiveData)
                    if (receiveData.code == 0) {
                        receiveData = receiveData.data;
                        if (!!receiveData.prize_name) {
                            That.prize = receiveData;
                            That.hasGift = true;
                        }
                        else {
                            That.hasGift = false;
                        }
                    }

                },
                error: function (data) { console.log(data) }
            })
        },
        //获取城市id
        getCityId: function () {
            //判断城市 先从session storage中获取城市信息，在从cookie中获取，都取不到默认为0
            let session_cityid = window.sessionStorage.getItem('city-id');
            let cookie_cityid = this.getCookie('city-id');
            let city_id = 0;
            if (session_cityid) {
                city_id = session_cityid;
            } else if (cookie_cityid) {
                city_id = cookie_cityid;
            }
            return city_id;
        },
        // 跳转到登录页
        toLoginPage: function () {
            if (hbhbrowser.ciwApp) {
                // app登录页
                // alert("app登录")
                callApp("loginApp", {}, "loginCallback")
            } else {
                // wap登录页
                // alert("wap登录")
                location.href = this.loginUrl + this.localUrl;
                // location.href = "//m-beta.jiehun.com.cn/login?u=" + url;
            }
        },
        // 读取cookie
        getCookie: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            arr = document.cookie.match(reg);
            if (arr) {
                return unescape(arr[2]);
            } else {
                return null;
            }
        },
        // 唤起app登录
        callApp: function (handlerName, args, callbackName) {
            callbackName = !!callbackName ? callbackName : '';
            args = JSON.stringify(args) ? JSON.stringify(args) : '';

            let browser = browers();

            if (browser.isApp) {
                if (browser.ios) {
                    window.webkit.messageHandlers.ios.postMessage({
                        "handler": handlerName,
                        "args": args,
                        "callback": callbackName
                    });
                }

                if (browser.android) {
                    hapj_hybrid.android(handlerName, args, callbackName);
                }
            }
        },
        // 判断环境
        browers: function () {
            var ua = navigator.userAgent.toLowerCase();
            // 通过userAgent获取中间的键值对，其中值支持小数点，如v=1.2.2
            var extraMs, extra = {};
            if ((extraMs = /<<([a-z0-9]+\=\w*(?:&[a-z0-9]+\=[\w\.]*)*)>>/.exec(ua.replace('$s=', '&s=')))) {
                var arr = extraMs[1].split('&')
                for (var i in arr) {
                    var ar = arr[i].split('=');
                    extra[ar[0]] = ar[1];
                }
            }
            let isApp = Object.keys(extra).length;
            return {
                android: ua.indexOf('android') > -1,
                ios: /(ipad|ios|iphone)/.test(ua),
                isApp: isApp
            }
        },
        // 登录回调
        loginCallback: function () {
            location.href = this.localUrl;
        }

    },

})