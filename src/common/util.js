import Vue from 'vue'
import { Toast, Indicator } from 'mint-ui'
import router from '../router/index'
class Tokyo {
    go(path) {
        // 跳转页面
        // router.push("/" + path);
        // let baseUrl = window.location;
        // console.log(herf);
        let href = this.getUrlPath(path);
        window.open(href, '_blank');
    }
    getUrlPath(path) {
        // 获取URL地址
        // 这部分代码就是处理标题兼容问题的。
        // 由于在window.location.origin Chrome支持，IE11不支持。
        let loc = window.location;
        let portStr = ":" + loc.port;
        let pathName = "/" + path;
        return loc.protocol + "//" + loc.hostname + portStr + pathName;
    }
    getUrlType(type) {
        // 获取URL地址
        // 中文 '', 英文'en'
        let loc = window.location;
        let portStr = ":" + loc.port;
        let fileName = "/" + type;
        let pathName = loc.pathname.replace("/en", '');
        return loc.protocol + "//" + loc.hostname + portStr + fileName + pathName;
    }
    toast(msg) {
        // 弹窗
        Toast(msg)
    }
    openIndicator(msg) {
        Indicator.open({
            text: msg || '加载中...',
            spinnerType: 'fading-circle' //'snake','fading-circle','double-bounce','triple-bounce'
        });
    }
    closeIndicator() {
        Indicator.close();
    }
    setLocalItem(key, val) {
        //localStorage 操作
        if (val instanceof Object) {
            val = JSON.stringify(val);
        } else {
            val + "";
        }
        return localStorage.setItem(key, val);
    }
    getLocalItem(key) {
        // 转换为json格式
        var local = localStorage.getItem(key);
        if (local) {
            try {
                return JSON.parse(local);
            } catch (e) {}
        }
        return local;
    }
    getLocalString(key) {
        // 直接获取字符串
        var local = localStorage.getItem(key);
        return local;
    }
    removeLocalItem(key) {
        localStorage.removeItem(key);
    }
    base64() {
            let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let base = {
                encode: (input) => {
                    var output = "";
                    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                    var i = 0;
                    input = base._utf8_encode(input);
                    while (i < input.length) {
                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);
                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;
                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }
                        output = output +
                            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
                    }
                    return output;
                },
                decode: (input) => {
                    var output = "";
                    var chr1, chr2, chr3;
                    var enc1, enc2, enc3, enc4;
                    var i = 0;
                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    while (i < input.length) {
                        enc1 = _keyStr.indexOf(input.charAt(i++));
                        enc2 = _keyStr.indexOf(input.charAt(i++));
                        enc3 = _keyStr.indexOf(input.charAt(i++));
                        enc4 = _keyStr.indexOf(input.charAt(i++));
                        chr1 = (enc1 << 2) | (enc2 >> 4);
                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                        chr3 = ((enc3 & 3) << 6) | enc4;
                        output = output + String.fromCharCode(chr1);
                        if (enc3 != 64) {
                            output = output + String.fromCharCode(chr2);
                        }
                        if (enc4 != 64) {
                            output = output + String.fromCharCode(chr3);
                        }
                    }
                    output = base._utf8_decode(output);
                    return output;
                },
                _utf8_encode: (string) => {
                    string = string.replace(/\r\n/g, "\n");
                    var utftext = "";
                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }

                    }
                    return utftext;
                },
                _utf8_decode: (utftext) => {
                    var string = "";
                    var i = 0;
                    var c = c1 = c2 = 0;
                    while (i < utftext.length) {
                        c = utftext.charCodeAt(i);
                        if (c < 128) {
                            string += String.fromCharCode(c);
                            i++;
                        } else if ((c > 191) && (c < 224)) {
                            c2 = utftext.charCodeAt(i + 1);
                            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                            i += 2;
                        } else {
                            c2 = utftext.charCodeAt(i + 1);
                            c3 = utftext.charCodeAt(i + 2);
                            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                            i += 3;
                        }
                    }
                    return string;
                }
            }
            return base;
        }
        // 读取本地json 
    getProjectConfig(cb) {
        const result = fetch('./static/project.json');
        result.then((res) => {
            return res.json()
        }).then(function(project) {
            cb(project.project);
        })
    }
    isPC() {
        return this.getPlatForm() == "PC";
    }
    getPlatForm() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "IOS", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.toLowerCase().indexOf(Agents[v].toLowerCase()) > 0) {
                    return Agents[v];
                }
            }
            return "PC";
        }
        //日期格式转换为通用格式
    dateSwitchCommon(date) {
            var str = date.replace((/-|\./g), "/");
            return str;
        }
        // 格式化日期 返回年月日 
    FormatDateLack(dates) {
            const arr = this.dateToArray(dates);
            const date = arr[0] + "/" + arr[1] + "/" + arr[2];
            return date;
        }
        // 把日期分割成数组
    dateToArray(date) {
        var myArray = Array();
        myArray[0] = date.getFullYear();
        myArray[1] = date.getMonth() + 1;
        myArray[2] = date.getDate();
        myArray[3] = date.getHours();
        myArray[4] = date.getMinutes();
        myArray[5] = date.getSeconds();
        if (myArray[1] < 10) {
            myArray[1] = "0" + myArray[1];
        };
        if (myArray[2] < 10) {
            myArray[2] = "0" + myArray[2];
        };
        if (myArray[3] < 10) {
            myArray[3] = "0" + myArray[3];
        };
        if (myArray[4] < 10) {
            myArray[4] = "0" + myArray[4];
        };
        if (myArray[5] < 10) {
            myArray[5] = "0" + myArray[5];
        };
        return myArray;
    }
    NuberBetween(start, end) {
        let s = this.dateSwitchCommon(start);
        let e = this.dateSwitchCommon(end);
        let sms = (Number(new Date(e).getTime()) - Number(new Date(s).getTime()));
        let day = 24 * 60 * 60 * 1000;
        console.log(start, end);
        return Math.round(sms / day);
    };

}
export default new Tokyo()