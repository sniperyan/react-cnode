webpackJsonp([3],{2:function(e,t){"use strict";function n(e){return"[object Array]"===v.call(e)}function o(e){return"[object ArrayBuffer]"===v.call(e)}function r(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function l(e){return"number"==typeof e}function s(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function u(e){return"[object Date]"===v.call(e)}function f(e){return"[object File]"===v.call(e)}function p(e){return"[object Blob]"===v.call(e)}function d(e){return"[object Function]"===v.call(e)}function m(e){return c(e)&&d(e.pipe)}function h(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(null,e[a],a,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)g(arguments[n],e);return t}var v=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isFormData:r,isArrayBufferView:a,isString:i,isNumber:l,isObject:c,isUndefined:s,isDate:u,isFile:f,isBlob:p,isFunction:d,isStream:m,isURLSearchParams:h,isStandardBrowserEnv:b,forEach:g,merge:x,trim:y}},10:function(e,t){"use strict";function n(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e}function o(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight)}function r(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}Object.defineProperty(t,"__esModule",{value:!0});var a={};a.formatDate=function(e){var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"},a.localItem=function(e,t){return 1==arguments.length?localStorage.getItem(e):localStorage.setItem(e,t)},a.removeLocalItem=function(e){return e?localStorage.removeItem(e):localStorage.removeItem()},a.reachBottom=function(){return(n()+o())/r()>=.98},t.Tool=a},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Header=t.UserHeadImg=t.TipMsgSignin=t.TabIcon=t.DataLoad=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),c=o(s),u=n(31),f=n(10);n(38);var p=t.DataLoad=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.loadingData,n=e.loadFailed,o=e.msg;return c["default"].createElement("div",null,c["default"].createElement("div",{className:"data-load data-load-"+t}),c["default"].createElement("p",{className:"data-tips-"+n},o))}}]),t}(s.Component);p.propTypes={loadingData:c["default"].PropTypes.bool,loadFailed:c["default"].PropTypes.bool,msg:c["default"].PropTypes.string};var d=t.TabIcon=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.tab,n=e.top,o=e.good;return n?t="top":o&&(t="good"),c["default"].createElement("i",{className:"iconfont icon-"+t})}}]),t}(s.Component);d.propTypes={tab:c["default"].PropTypes.string,top:c["default"].PropTypes.bool,good:c["default"].PropTypes.bool};var m=(t.TipMsgSignin=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"tip-msg-signin"},"你还未登录，请先",c["default"].createElement(u.Link,{to:"/login"},"登录"))}}]),t}(s.Component),t.UserHeadImg=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.url;return c["default"].createElement("div",{className:"user-headimg",style:{backgroundImage:"url("+e+")"}})}}]),t}(s.Component));m.propTypes={url:c["default"].PropTypes.string};var h=t.Header=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftTo,o=e.leftIcon,r=e.rightTo,a=e.rightIcon,i=e.rightClick,l=null;n&&o?l=c["default"].createElement(u.Link,{to:n},c["default"].createElement("i",{className:"iconfont icon-"+o})):"fanhui"===o&&(l=c["default"].createElement("a",{onClick:this.context.router.goBack},c["default"].createElement("i",{className:"iconfont icon-"+o})));var s=null;return r&&a?s=c["default"].createElement(u.Link,{to:r},c["default"].createElement("i",{className:"iconfont icon-"+a})):i&&a&&(s=c["default"].createElement("div",{onClick:i},c["default"].createElement("i",{className:"iconfont icon-"+a}))),c["default"].createElement("header",{className:"common-header"},c["default"].createElement("div",{className:"icon"},l),c["default"].createElement("h2",{className:"title"},t),c["default"].createElement("div",{className:"icon"},s))}}]),t}(s.Component);h.contextTypes={router:c["default"].PropTypes.object.isRequired};var y=t.Footer=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=JSON.parse(f.Tool.localItem("User")),t=e&&e.loginname?"/user/"+e.loginname:"/login",n=[];return n[this.props.index]="on",c["default"].createElement("footer",{className:"common-footer"},c["default"].createElement("div",{className:"zhanwei"}),c["default"].createElement("ul",{className:"menu"},c["default"].createElement("li",{className:n[0]},c["default"].createElement(u.Link,{to:"/"},c["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),c["default"].createElement("li",{className:n[1]},c["default"].createElement(u.Link,{to:"/topic/create"},c["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),c["default"].createElement("li",{className:n[2]},c["default"].createElement(u.Link,{to:"/my/messages"},c["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),c["default"].createElement("li",{className:n[3]},c["default"].createElement(u.Link,{to:t},c["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(s.Component);y.propTypes={index:c["default"].PropTypes.string},y.defaultProps={index:0}},21:function(e,t,n){"use strict";var o=n(2),r=n(48),a=n(54),i=n(22),l=n(52),s="undefined"!=typeof window&&window.btoa||n(47),c=n(55);e.exports=function(e,t,u){var f=u.data,p=u.headers;o.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||l(u.url)||(d=new window.XDomainRequest,m="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),u.auth){var y=u.auth.username||"",b=u.auth.password||"";p.Authorization="Basic "+s(y+":"+b)}if(d.open(u.method.toUpperCase(),r(u.url,u.params,u.paramsSerializer),!0),d.timeout=u.timeout,d[m]=function(){if(d&&(4===d.readyState||h)&&0!==d.status){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,o=u.responseType&&"text"!==u.responseType?d.response:d.responseText,r={data:i(o,n,u.transformResponse),status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:u,request:d};c(e,t,r),d=null}},d.onerror=function(){t(new Error("Network Error")),d=null},d.ontimeout=function(){var e=new Error("timeout of "+u.timeout+"ms exceeded");e.timeout=u.timeout,e.code="ECONNABORTED",t(e),d=null},o.isStandardBrowserEnv()){var g=n(50),x=u.withCredentials||l(u.url)?g.read(u.xsrfCookieName):void 0;x&&(p[u.xsrfHeaderName]=x)}if("setRequestHeader"in d&&o.forEach(p,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),u.withCredentials&&(d.withCredentials=!0),u.responseType)try{d.responseType=u.responseType}catch(v){if("json"!==d.responseType)throw v}u.progress&&("post"===u.method||"put"===u.method?d.upload.addEventListener("progress",u.progress):"get"===u.method&&d.addEventListener("progress",u.progress)),void 0===f&&(f=null),d.send(f)}},22:function(e,t,n){"use strict";var o=n(2);e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},28:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n={method:"get",type:"json",timeout:5e3,url:"",needLoad:!0,data:null,success:null,error:null};for(var o in t)n[o]=t[o];return e(i.setloadFail(!1)),n.needLoad&&e(i.setload(!0)),function(e,t){return(0,s["default"])({method:t.method,responseType:t.type,timeout:t.timeout,data:t.data,url:t.url})}(e,n).then(function(t){return e(i.setload(!1)),200===t.status?t.data.success?(n.success&&n.success(t),t):(e(i.setloadMsg("系统繁忙，请稍后再试！")),e(i.setloadFail(!0)),!1):(e(i.setloadMsg("请求失败，请稍后再试！")),e(i.setloadFail(!0)),!1)})["catch"](function(t){return n.error&&n.error(t),e(i.setloadMsg("网络异常，请稍后再试！")),e(i.setloadFail(!0)),e(i.setload(!1)),!1})};var a=n(57),i=r(a),l=n(41),s=o(l)},37:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".data-load-true{margin:20px auto;position:relative;-webkit-animation:rotate-forever 1s infinite linear;animation:rotate-forever 1s infinite linear;height:30px;width:30px;border:4px solid #80bd01;border-right-color:transparent;border-radius:50%}.data-tips-false{display:none}.data-tips-true{display:block;text-align:center;height:60px;line-height:60px}.icon-top{background:red}.icon-job{background:#00b38a}.icon-share{background:green}.icon-ask{background:blue}.icon-good{background:violet}.icon-undefined{display:none}.tip-msg-signin{padding:30px 30px 50px;text-align:center}.tip-msg-signin a{color:#80bd01}.user-headimg{width:38px;height:38px;margin-right:10px;border-radius:50%;border:1px solid #ddd;background-size:cover;background-color:#eee}.common-header{z-index:999;position:relative;background:#80bd01;-webkit-animation:move-down .3s ease-out;animation:move-down .3s ease-out}.common-header,.common-header .icon{height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.common-header .icon{width:50px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.common-header .icon a{display:block;color:#fff}.common-header .iconfont{font-size:24px;color:#fff}.common-header .title{line-height:50px;text-align:center;color:#fff;font-size:16px;margin:0;white-space:nowrap;text-overflow:ellipsis;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .zhanwei{height:50px}.common-footer .menu{position:fixed;right:0;bottom:0;left:0;height:50px;z-index:999;background:#80bd01;display:-webkit-box;display:-ms-flexbox;display:flex}.common-footer .menu li{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .menu a{padding:5px 0;font-size:14px;display:block;line-height:20px;color:#fff;opacity:.8;text-align:center}.common-footer .menu .on{background:#a2f001}.common-footer .menu .on ad{opacity:1;color:#c9fe59}.common-footer .menu .iconfont{display:block}",""])},38:function(e,t,n){var o=n(37);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)},41:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";function o(e){this.defaults=a.merge({},e),this.interceptors={request:new l,response:new l}}var r=n(45),a=n(2),i=n(44),l=n(43),s=n(51),c=n(49),u=n(46),f=n(22);o.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(r,this.defaults,{method:"get"},e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.withCredentials=e.withCredentials||this.defaults.withCredentials,e.data=f(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};var p=new o(r),d=e.exports=u(o.prototype.request,p);d.request=u(o.prototype.request,p),d.Axios=o,d.defaults=p.defaults,d.interceptors=p.interceptors,d.create=function(e){return new o(e)},d.all=function(e){return Promise.all(e)},d.spread=n(56),a.forEach(["delete","get","head"],function(e){o.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))},d[e]=u(o.prototype[e],p)}),a.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,n,o){return this.request(a.merge(o||{},{method:e,url:t,data:n}))},d[e]=u(o.prototype[e],p)})},43:function(e,t,n){"use strict";function o(){this.handlers=[]}var r=n(2);o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},44:function(e,t,n){(function(t){"use strict";e.exports=function(e){return new Promise(function(o,r){try{var a;"function"==typeof e.adapter?a=e.adapter:"undefined"!=typeof XMLHttpRequest?a=n(21):"undefined"!=typeof t&&(a=n(21)),"function"==typeof a&&a(o,r,e)}catch(i){r(i)}})}}).call(t,n(66))},45:function(e,t,n){"use strict";function o(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r=n(2),a=n(53),i=/^\)\]\}',?\n/,l={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(i,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:r.merge(l),post:r.merge(l),put:r.merge(l)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},46:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},47:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,o,a=String(e),i="",l=0,s=r;a.charAt(0|l)||(s="=",l%1);i+=s.charAt(63&t>>8-l%1*8)){if(o=a.charCodeAt(l+=.75),o>255)throw new n;t=t<<8|o}return i}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},48:function(e,t,n){"use strict";function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(2);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),a=i.join("&")}return a&&(e+=(e.indexOf("?")===-1?"?":"&")+a),e}},49:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},50:function(e,t,n){"use strict";var o=n(2);e.exports=o.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,a,i){var l=[];l.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),o.isString(r)&&l.push("path="+r),o.isString(a)&&l.push("domain="+a),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},51:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},52:function(e,t,n){"use strict";var o=n(2);e.exports=o.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=o.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},53:function(e,t,n){"use strict";var o=n(2);e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},54:function(e,t,n){"use strict";var o=n(2);e.exports=function(e){var t,n,r,a={};return e?(o.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=o.trim(e.substr(0,r)).toLowerCase(),n=o.trim(e.substr(r+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},55:function(e,t){"use strict";e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(n):e(n)}},56:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},57:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return{type:s.SET_DATALOAD,data:e}}function a(e){return{type:s.SET_LOADFAIL,data:e}}function i(e){return{type:s.SET_LOADMSG,data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setload=r,t.setloadFail=a,t.setloadMsg=i;var l=n(12),s=o(l)},139:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return function(t,n){return(0,h["default"])(t,{method:"get",url:d.ACTION_PREFIX+"/api/v1/topic/"+e,success:function(e){t(i(e.data.data))},error:function(e){alert(e.data.error_msg)}})}}function i(e){return{type:d.SET_TOPIC,data:e}}function l(e){return{type:d.SET_REPLYBOX_DISPLAY,data:e}}function s(e,t,n,o){return function(r,a){return(0,h["default"])(r,{method:"post",url:d.ACTION_PREFIX+"/api/v1/reply/"+e+"/ups",needLoad:!1,data:{accesstoken:t},success:function(e){r(c({action:e.data.action,uid:o,index:n}))},error:function(e){alert(e.data.error_msg)}})}}function c(e){return{type:d.SET_ZAN,data:e}}function u(e){return function(t,n){return(0,h["default"])(t,{method:"post",url:d.ACTION_PREFIX+"/api/v1/topic/"+e.id+"/replies",data:{accesstoken:e.accesstoken,"reply_id ":e.reply_id,content:e.content},needLoad:!1,success:function(e){alert("回复成功")},error:function(e){alert(e.data.error_msg)}})}}function f(e){return function(t,n){return(0,h["default"])(t,{method:"post",url:d.ACTION_PREFIX+"/api/v1/topics",data:e,needLoad:!1,success:function(e){},error:function(e){alert(e.data.error_msg)}})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTopicDetail=a,t.setTopicDetail=i,t.setReplybox=l,t.setClickZan=s,t.setZan=c,t.submitReply=u,t.createTopic=f;var p=n(12),d=r(p),m=n(28),h=o(m)},197:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ReplyBox=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),c=o(s),u=t.ReplyBox=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"handleClick",value:function(e){var t=this.props,n=t.data,o=t.loginname,r=t.submit;return n.reply_id?n.content="[@"+o+"](/user/"+o+") "+this.refs.content.value:n.content=this.refs.content.value,""==n.content?alert("回复内容不能为空！"):void r(n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.display,o=t.placeholder;return c["default"].createElement("div",{className:"reply-box",style:{display:n}},c["default"].createElement("div",{className:"text"},c["default"].createElement("textarea",{ref:"content",placeholder:o})),c["default"].createElement("div",{className:"reply-btn"},c["default"].createElement("button",{className:"btn",onClick:function(t){return e.handleClick(t)}},"回复")))}}]),t}(s.Component);u.propTypes={display:c["default"].PropTypes.string,placeholder:c["default"].PropTypes.string,loginname:c["default"].PropTypes.string,data:c["default"].PropTypes.object,submit:c["default"].PropTypes.func},u.contextTypes={router:c["default"].PropTypes.object}},283:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Article=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),c=o(s),u=n(31),f=n(10),p=n(20),d=n(284),m=n(197);n(638),t.Article=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,o=e.create_at,r=e.visit_count,a=e.reply_count,i=e.content,l=e.replies,s=e.author,h=e.User,y=e.submit,b=e.clickZan,g=e.showReplyBox,x=function(){return{__html:i}},v=h?c["default"].createElement(m.ReplyBox,{display:"block",placeholder:"回复支持Markdown语法,请注意标记代码",submit:y,data:{accesstoken:h.accesstoken,id:t}}):c["default"].createElement(p.TipMsgSignin,null);return c["default"].createElement("div",{className:"topic"},c["default"].createElement("div",{className:"user"},c["default"].createElement("div",{className:"headimg"},c["default"].createElement(p.UserHeadImg,{url:s.avatar_url})),c["default"].createElement("div",{className:"data"},c["default"].createElement("div",null,c["default"].createElement(u.Link,{to:"/user/"+s.loginname,className:"name"},s.loginname),c["default"].createElement("time",{"data-flex-box":"1"},f.Tool.formatDate(o)),c["default"].createElement("div",{className:"font"},c["default"].createElement(p.TabIcon,this.props))),c["default"].createElement("div",{className:"qt"},c["default"].createElement("div",null,"阅读：",r),c["default"].createElement("div",null,"回复：",a)))),c["default"].createElement("h2",{className:"tit2"},n),c["default"].createElement("div",{className:"content",dangerouslySetInnerHTML:x()}),c["default"].createElement("h3",{className:"tit3"},"共",c["default"].createElement("em",null,l.length),"条回复"),c["default"].createElement(d.ReList,{submit:y,id:t,list:l,User:h,clickZan:b,showReplyBox:g}),v)}}]),t}(s.Component),d.ReList.propTypes={id:c["default"].PropTypes.string,title:c["default"].PropTypes.string,create_at:c["default"].PropTypes.string,visit_count:c["default"].PropTypes.number,reply_count:c["default"].PropTypes.number,content:c["default"].PropTypes.string,replies:c["default"].PropTypes.array,author:c["default"].PropTypes.object,User:c["default"].PropTypes.object,clickZan:c["default"].PropTypes.func,showReplyBox:c["default"].PropTypes.func,submit:c["default"].PropTypes.func}},284:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ReList=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(3),c=o(s),u=n(31),f=n(10),p=n(20),d=n(197),m=t.ReList=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.isUp=function(e){for(var t=n.props.User,o=t?t.id:"",r=0;r<e.length;r++)if(e[r]===o)return!0;return!1},n}return i(t,e),l(t,[{key:"handleClickZan",value:function(e,t,n){var o=this.props.clickZan;o(e,t,n)}},{key:"showReplyBox",value:function n(e){var n=this.props.showReplyBox;n(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.User,o=t.list,r=t.submit,a=n?n.accesstoken:"";return c["default"].createElement("ul",{className:"re-list"},o.map(function(t,n){var o=t.id,i=t.content,l=t.author,s=t.ups,m=t.create_at,h=t.display;h||(h="none");var y=(new Date(m),e.isUp(s)),b=function(){return{__html:i}};return c["default"].createElement("li",{key:n},c["default"].createElement("div",{className:"headimg"},c["default"].createElement(p.UserHeadImg,{url:l.avatar_url})),c["default"].createElement("div",{className:"main"},c["default"].createElement("div",{className:"top"},c["default"].createElement(u.Link,{to:"/user/"+l.loginname,className:"name"},l.loginname),c["default"].createElement("time",null,f.Tool.formatDate(m)),c["default"].createElement("div",{className:"lou"},"#",++n)),c["default"].createElement("div",{className:"content",dangerouslySetInnerHTML:b()}),c["default"].createElement("div",{className:"bottom"},c["default"].createElement("div",{className:"font font-"+y,onClick:function(){return e.handleClickZan(o,n,l.loginname)}},c["default"].createElement("i",{className:"iconfont icon-dianzan "}),c["default"].createElement("em",null,s.length?s.length:"")),c["default"].createElement("div",{className:"font",onClick:function(){return e.showReplyBox(n)}},c["default"].createElement("i",{className:"iconfont icon-huifu"}))),c["default"].createElement(d.ReplyBox,{placeholder:"@"+l.loginname,submit:r,display:h,loginname:l.loginname,data:{accesstoken:a,id:e.props.id,reply_id:o}})))}))}}]),t}(s.Component);m.propTypes={User:c["default"].PropTypes.object,id:c["default"].PropTypes.string,clickZan:c["default"].PropTypes.func,showReplyBox:c["default"].PropTypes.func,list:c["default"].PropTypes.array,submit:c["default"].PropTypes.func}},291:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),f=r(u),p=n(81),d=n(70),m=n(139),h=o(m),y=n(20),b=n(283),g=n(10),x=function(e){function t(e,n){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.state={page:{scrollX:0,scrollY:0}},o}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.routeParams.id;this.loadData(e)}},{key:"loadData",value:function(e,t){var n=this,o=this.props.actions;o.getTopicDetail(e).then(function(e){e&&t&&window.scrollTo(n.state.page.scrollX,n.state.page.scrollY)})}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUnmount",value:function(){}},{key:"clickZan",value:function(e,t,n){var o=this.props,r=(o.topicDetail,o.actions),a=JSON.parse(g.Tool.localItem("User")),i=a?a.accesstoken:"",l=a?a.id:"";
return i?a.loginname===n?alert("你不能给自己点赞"):void r.setClickZan(e,i,t,l).then(function(e){}):this.context.router.push("login")}},{key:"showReplyBox",value:function(e){var t=this.props,n=t.topicDetail,o=t.actions,r=JSON.parse(g.Tool.localItem("User")),a=r?r.accesstoken:"";return a?(--e,void("block"===n.replies[e].display?o.setReplybox({index:e,display:"none"}):o.setReplybox({index:e,display:"block"}))):this.context.router.push("login")}},{key:"submit",value:function(e){var t=this,n=this.props,o=(n.dispatch,n.actions);o.submitReply(e).then(function(n){n&&(t.setState({page:{scrollX:window.scrollX,scrollY:window.scrollY}}),t.loadData(e.id,!0))})}},{key:"render",value:function(){var e=this,t=this.props,n=t.topicDetail,o=t.loadState,r=t.loadFailed,a=t.msg,i=JSON.parse(g.Tool.localItem("User")),l=o||r?f["default"].createElement(y.DataLoad,{loadingData:o,loadFailed:r,msg:a}):f["default"].createElement(b.Article,s({},n,{User:i,clickZan:function(t,n,o){return e.clickZan(t,n,o)},showReplyBox:function(t){return e.showReplyBox(t)},submit:function(t){return e.submit(t)}}));return f["default"].createElement("div",null,f["default"].createElement(y.Header,{title:"详情",leftIcon:"fanhui"}),l)}}]),t}(u.Component),v=function(e){return{topicDetail:e.topicDetail.topicDetail,loadState:e.load.loadState,loadFailed:e.load.loadFailed,msg:e.load.msg}},w=function(e){return{actions:(0,d.bindActionCreators)(Object.assign({},h),e)}};e.exports=(0,p.connect)(v,w)(x),x.contextTypes={router:f["default"].PropTypes.object}},498:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".topic .user{-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:10px;line-height:20px;font-size:12px;border-bottom:1px solid #ddd}.topic .user,.topic .user .data{display:-webkit-box;display:-ms-flexbox;display:flex}.topic .user .data{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.topic .user .name{font-size:14px;color:#80bd01}.topic .user time{padding-left:5px;line-height:14px;font-size:14px;color:#666}.topic .user .qt{display:-webkit-box;display:-ms-flexbox;display:flex}.topic .user .qt div{padding-right:5px}.topic .user .font{position:absolute;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.topic .user .font .iconfont{width:60px;height:60px;line-height:60px;text-align:center;font-size:32px;color:#fff;opacity:.8}.topic .tit2{padding:10px;font-size:18px;background:#eee}.topic .content{overflow:hidden;padding:10px;line-height:24px;font-size:13px}.topic .tit3{padding:5px 10px;line-height:24px;border-left:8px solid #80bd01;background:#eee;font-weight:400;font-size:14px}.topic .tit3 em{font-style:normal;color:#80bd01}.re-list{margin-bottom:20px}.re-list li{padding:10px 10px 0;border-bottom:1px solid #ddd;display:-webkit-box;display:-ms-flexbox;display:flex}.re-list li .main{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;overflow:hidden}.re-list li .top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.re-list li time{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.re-list li .name{font-size:14px;color:#80bd01}.re-list li .lou{line-height:14px;font-size:14px;color:#aaa}.re-list li time{padding-left:5px;line-height:14px;font-size:14px;color:#666}.re-list li .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.re-list li .bottom .font{position:relative;padding:10px}.re-list li .bottom .font em{font-size:13px;font-style:normal}.re-list a,.re-list li .bottom .font-true{color:#80bd01}.re-list a{target:new front}.reply-box{padding:10px}.reply-box .text{margin-bottom:10px}.reply-box .text textarea{box-sizing:border-box;width:100%;height:120px;padding:10px;line-height:24px;border-radius:5px;border:1px solid #ddd;font-size:13px;resize:none}.reply-box .btn{padding:5px 30px;line-height:24px;border-radius:5px;border:1px solid #6fa401;font-size:14px;color:#fff;background:#80bd01}.reply-box .reply-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}",""])},638:function(e,t,n){var o=n(498);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)}});