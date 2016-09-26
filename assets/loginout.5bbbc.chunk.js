webpackJsonp([7],{10:function(e,t){"use strict";function n(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e}function o(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight)}function r(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}Object.defineProperty(t,"__esModule",{value:!0});var i={};i.formatDate=function(e){var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"},i.localItem=function(e,t){return 1==arguments.length?localStorage.getItem(e):localStorage.setItem(e,t)},i.removeLocalItem=function(e){return e?localStorage.removeItem(e):localStorage.removeItem()},i.reachBottom=function(){return(n()+o())/r()>=.98},t.Tool=i},20:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Header=t.UserHeadImg=t.TipMsgSignin=t.TabIcon=t.DataLoad=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),u=o(c),s=n(31),f=n(10);n(38);var p=t.DataLoad=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.loadingData,n=e.loadFailed,o=e.msg;return u["default"].createElement("div",null,u["default"].createElement("div",{className:"data-load data-load-"+t}),u["default"].createElement("p",{className:"data-tips-"+n},o))}}]),t}(c.Component);p.propTypes={loadingData:u["default"].PropTypes.bool,loadFailed:u["default"].PropTypes.bool,msg:u["default"].PropTypes.string};var d=t.TabIcon=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.tab,n=e.top,o=e.good;return n?t="top":o&&(t="good"),u["default"].createElement("i",{className:"iconfont icon-"+t})}}]),t}(c.Component);d.propTypes={tab:u["default"].PropTypes.string,top:u["default"].PropTypes.bool,good:u["default"].PropTypes.bool};var m=(t.TipMsgSignin=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"tip-msg-signin"},"你还未登录，请先",u["default"].createElement(s.Link,{to:"/login"},"登录"))}}]),t}(c.Component),t.UserHeadImg=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props.url;return u["default"].createElement("div",{className:"user-headimg",style:{backgroundImage:"url("+e+")"}})}}]),t}(c.Component));m.propTypes={url:u["default"].PropTypes.string};var b=t.Header=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftTo,o=e.leftIcon,r=e.rightTo,i=e.rightIcon,a=e.rightClick,l=null;n&&o?l=u["default"].createElement(s.Link,{to:n},u["default"].createElement("i",{className:"iconfont icon-"+o})):"fanhui"===o&&(l=u["default"].createElement("a",{onClick:this.context.router.goBack},u["default"].createElement("i",{className:"iconfont icon-"+o})));var c=null;return r&&i?c=u["default"].createElement(s.Link,{to:r},u["default"].createElement("i",{className:"iconfont icon-"+i})):a&&i&&(c=u["default"].createElement("div",{onClick:a},u["default"].createElement("i",{className:"iconfont icon-"+i}))),u["default"].createElement("header",{className:"common-header"},u["default"].createElement("div",{className:"icon"},l),u["default"].createElement("h2",{className:"title"},t),u["default"].createElement("div",{className:"icon"},c))}}]),t}(c.Component);b.contextTypes={router:u["default"].PropTypes.object.isRequired};var g=t.Footer=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=JSON.parse(f.Tool.localItem("User")),t=e&&e.loginname?"/user/"+e.loginname:"/login",n=[];return n[this.props.index]="on",u["default"].createElement("footer",{className:"common-footer"},u["default"].createElement("div",{className:"zhanwei"}),u["default"].createElement("ul",{className:"menu"},u["default"].createElement("li",{className:n[0]},u["default"].createElement(s.Link,{to:"/"},u["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),u["default"].createElement("li",{className:n[1]},u["default"].createElement(s.Link,{to:"/topic/create"},u["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),u["default"].createElement("li",{className:n[2]},u["default"].createElement(s.Link,{to:"/my/messages"},u["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),u["default"].createElement("li",{className:n[3]},u["default"].createElement(s.Link,{to:t},u["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(c.Component);g.propTypes={index:u["default"].PropTypes.string},g.defaultProps={index:0}},37:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".data-load-true{margin:20px auto;position:relative;-webkit-animation:rotate-forever 1s infinite linear;animation:rotate-forever 1s infinite linear;height:30px;width:30px;border:4px solid #80bd01;border-right-color:transparent;border-radius:50%}.data-tips-false{display:none}.data-tips-true{display:block;text-align:center;height:60px;line-height:60px}.icon-top{background:red}.icon-job{background:#00b38a}.icon-share{background:green}.icon-ask{background:blue}.icon-good{background:violet}.icon-undefined{display:none}.tip-msg-signin{padding:30px 30px 50px;text-align:center}.tip-msg-signin a{color:#80bd01}.user-headimg{width:38px;height:38px;margin-right:10px;border-radius:50%;border:1px solid #ddd;background-size:cover;background-color:#eee}.common-header{z-index:999;position:relative;background:#80bd01;-webkit-animation:move-down .3s ease-out;animation:move-down .3s ease-out}.common-header,.common-header .icon{height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.common-header .icon{width:50px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.common-header .icon a{display:block;color:#fff}.common-header .iconfont{font-size:24px;color:#fff}.common-header .title{line-height:50px;text-align:center;color:#fff;font-size:16px;margin:0;white-space:nowrap;text-overflow:ellipsis;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .zhanwei{height:50px}.common-footer .menu{position:fixed;right:0;bottom:0;left:0;height:50px;z-index:999;background:#80bd01;display:-webkit-box;display:-ms-flexbox;display:flex}.common-footer .menu li{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .menu a{padding:5px 0;font-size:14px;display:block;line-height:20px;color:#fff;opacity:.8;text-align:center}.common-footer .menu .on{background:#a2f001}.common-footer .menu .on ad{opacity:1;color:#c9fe59}.common-footer .menu .iconfont{display:block}",""])},38:function(e,t,n){var o=n(37);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)},280:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoginOut=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),u=o(c);n(635);var s=t.LoginOut=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"loginOut",value:function n(){var n=this.props.loginOut;n()}},{key:"render",value:function(){var e=this;return u["default"].createElement("div",{className:"signin","data-flex":"dir:top main:center cross:center"},u["default"].createElement("div",{className:"center"},u["default"].createElement("button",{className:"btn btn-red",onClick:function(){return e.loginOut()}},"确认退出登录？")))}}]),t}(c.Component);s.propTypes={loginOut:u["default"].PropTypes.func.isRequired}},289:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(3),u=o(c),s=n(81),f=(n(70),n(20)),p=n(280),d=n(10),m=function(e){function t(e,n){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUnmount",value:function(){}},{key:"handleLoginout",value:function(){d.Tool.removeLocalItem("User"),this.context.router.push("/")}},{key:"render",value:function(){var e=this;return u["default"].createElement("div",null,u["default"].createElement(f.Header,{title:"退出登录",leftIcon:"fanhui"}),u["default"].createElement(p.LoginOut,{loginOut:function(){return e.handleLoginout()}}))}}]),t}(c.Component),b=function(e){return{}},g=function(e){return{dispatch:e}};e.exports=(0,s.connect)(b,g)(m),m.contextTypes={router:u["default"].PropTypes.object}},495:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".signin{height:480px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.signin .center{width:280px}.signin .text{margin-bottom:30px}.signin .text input{box-sizing:border-box;border-radius:5px;border:1px solid #eee}.signin .btn,.signin .text input{width:100%;padding:5px 10px;line-height:28px;font-size:13px}.signin .btn{display:block;border-radius:5px;text-align:center;color:#fff;background:#80bd01}.signin .btn-red{background:#e63e3e}",""])},635:function(e,t,n){var o=n(495);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)}});