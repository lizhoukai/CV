webpackJsonp([1,0],[function(t,e,n){"use strict";n(7)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),s=(a(i),n(9)),o=(a(s),n(23)),r=a(o),l=n(22),c=a(l),u=n(21),d=a(u),p=n(24),f=a(p),m=n(20),h=a(m);e["default"]={name:"app",data:function(){return{bgUrl:"http://7xnjvz.com1.z0.glb.clouddn.com/2016091468798code.jpg",loading:!0,loadOver:!1,isShow:!1,styleMask:{width:"100%",height:"100%"}}},components:{"panel-loader":r["default"],"panel-intro":d["default"],"panel-layer":c["default"],"panel-wall":f["default"],"panel-casesShow":h["default"]},mounted:function(){var t=this;$(window).load(function(){t.loading=!1,t.loadOver=!0})},methods:{moveLayer:function(t){var e=$(window).width(),n=$(window).height(),a=.5-t.pageX/e,i=.5-t.pageY/n;$(".cover").each(function(t,e){var n=parseInt($(e).data("offset")),s="translate3d("+Math.round(a*n)+"px,"+Math.round(i*n)+"px, 0px)";$(e).css({"-webkit-transform":s,transform:s,"moz-transform":s})})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"casesShow",data:function(){return{tags:[{type:"all",name:"全部标签"},{type:"HTML5",name:"HTML5"},{type:"CSS3",name:"CSS3"},{type:"JavaScript",name:"JavaScript"},{type:"webApp",name:"webApp"}]}},mounted:function(){var t=this.$parent.$data;console.log(t.loadOver)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{message:"爱折腾,爱旅游,热爱生活",text:"Front-end Developer",copyright:"©Copyright 2016 - Leon All rights reserved."}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}},ready:function(){}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{msg:"Hello World!",items:[{type:"left",list:[{name:"个人博客",url:"http://7xnjvz.com1.z0.glb.clouddn.com/avatar.png",link:"http://likr.cn",text:"记录零散思绪和成长记录"},{name:"HTML5",status:"html"}]},{type:"middle",list:[{name:"CSS3",status:"css"},{name:""},{name:"关于我"}]},{type:"right",list:[{name:"JavaScript",status:"js"},{name:"折腾案例",url:"http://7xnjvz.com1.z0.glb.clouddn.com/2016091494119code.png",status:"mobile",text:"有趣的idea，疯狂造轮子 ~"}]}],backgroundImg:[{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg1.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg2.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg3.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg4.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg5.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg6.png"},{url:"http://7xnjvz.com1.z0.glb.clouddn.com/bg7.png"}]}},methods:{casesShow:function(){var t=this.$parent.$data,e=parseInt(6*Math.random());t.loadOver=!1,t.loading=!1,t.isShow=!0,console.log(e),t.bgUrl=this.backgroundImg[e].url}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var i=n(33),s=a(i),o=n(19),r=a(o),l=n(17),c=a(l),u=n(31),d=a(u),p=n(18),f=a(p),m=n(32),h=a(m),v=n(8),_=(a(v),void 0);s["default"].use(d["default"]),s["default"].use(f["default"]),s["default"].use(h["default"]),window.$=window.jQuery=c["default"],window.Vue=s["default"],window.router=_=new h["default"];new s["default"]({el:"#container",render:function(t){return t(r["default"])}});t.exports={}},function(t,e){"use strict";!function(t,e){function n(){var e=s.getBoundingClientRect().width;e/l>540&&(e=540*l);var n=e/10;s.style.fontSize=n+"px",u.rem=t.rem=n}var a,i=t.document,s=i.documentElement,o=i.querySelector('meta[name="viewport"]'),r=i.querySelector('meta[name="flexible"]'),l=0,c=0,u=e.flexible||(e.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),l=parseInt(1/c))}else if(r){var p=r.getAttribute("content");if(p){var f=p.match(/initial\-dpr=([\d\.]+)/),m=p.match(/maximum\-dpr=([\d\.]+)/);f&&(l=parseFloat(f[1]),c=parseFloat((1/l).toFixed(2))),m&&(l=parseFloat(m[1]),c=parseFloat((1/l).toFixed(2)))}}if(!l&&!c){var h=t.navigator.userAgent,v=(!!h.match(/android/gi),!!h.match(/iphone/gi)),_=v&&!!h.match(/OS 9_3/),g=t.devicePixelRatio;l=v&&!_?g>=3&&(!l||l>=3)?3:g>=2&&(!l||l>=2)?2:1:1,c=1/l}if(s.setAttribute("data-dpr",l),!o)if(o=i.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(o);else{var w=i.createElement("div");w.appendChild(o),i.write(w.innerHTML)}t.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(a),a=setTimeout(n,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*l+"px":i.addEventListener("DOMContentLoaded",function(){i.body.style.fontSize=12*l+"px"},!1),n(),u.dpr=t.dpr=l,u.refreshRem=n,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){var a,i;n(11),a=n(1);var s=n(25);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(16),a=n(2);var s=n(30);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-6",t.exports=a},function(t,e,n){var a,i;n(14),a=n(3);var s=n(28);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-4",t.exports=a},function(t,e,n){var a,i;n(12),a=n(4);var s=n(26);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-2",t.exports=a},function(t,e,n){var a,i;n(13),a=n(5);var s=n(27);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-3",t.exports=a},function(t,e,n){var a,i;n(15),a=n(6);var s=n(29);i=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(i=a=a["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-5",t.exports=a},function(module,exports){module.exports={render:function(){with(this)return _h("div",{style:{background:"url("+bgUrl+") top center /cover"},attrs:{id:"app"},on:{mousemove:function(t){moveLayer(t)}}},[_h("panel-loader",{directives:[{name:"show",value:1==loading,expression:"loading == true"}]})," ",_h("panel-intro",{directives:[{name:"show",value:1==loadOver,expression:"loadOver == true"}]})," ",_h("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInDown","leave-active-class":"animated bounceOutRight"}},[_h("panel-layer",{directives:[{name:"show",value:1==loadOver,expression:"loadOver == true"}]})])," ",_h("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated slideInUp","leave-active-class":"animated bounceOutRight"}},[_h("panel-wall",{directives:[{name:"show",value:1==loadOver,expression:"loadOver == true"}]})])," ",_h("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn","leave-active-class":"animated bounceOutRight"}},[_h("panel-casesShow",{directives:[{name:"show",value:1==isShow,expression:"isShow == true"}]})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("section",{staticClass:"panel-layer"},[_h("div",{staticClass:"clouds cover",attrs:{"data-offset":"90"}})])}]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("section",{staticClass:"panel-loader"},[_h("div",{staticClass:"loader-inner"},[_h("span",{staticClass:"double-bounce1"})," ",_h("span",{staticClass:"double-bounce2"})])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"panel-copyright"},[_m(0)," ",_h("div",{staticClass:"panel-intro"},[_h("p",{staticClass:"msg"},[_s(message)])," ",_h("p",{staticClass:"text"},[_s(text)])," ",_h("p",{staticClass:"copyright"},[_s(copyright)])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"panel-mask"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"panel-wall"},[_l(items,function(t){return"left"==t.type?_h("ul",{staticClass:"wall-left wall-column"},[_l(t.list,function(t){return t.url?_h("li",[_h("a",{attrs:{href:t.link,target:"_blank"}},[_h("div",{staticClass:"item-head"},[_h("i",{staticClass:"avatar"},[_h("img",{attrs:{src:t.url,alt:""}})])])," ",_h("div",{staticClass:"item-body"},[_h("p",[_s(t.name)])])])," ",_h("div",{staticClass:"review"},[_h("p",[_s(t.text)])])]):_h("li",{on:{click:casesShow}},[_s(t.name)])})," "]):_e()})," ",_l(items,function(t){return"middle"==t.type?_h("ul",{staticClass:"wall-middle wall-column"},[_l(t.list,function(t){return["关于我"==t.name?_h("li",[_h("a",{attrs:{href:"about.html"}},[_s(t.name)])]):_e()," ",t.name?_e():_h("li")," ","CSS3"==t.name?_h("li",{on:{click:casesShow}},[_s(t.name)]):_e()]})]):_e()})," ",_l(items,function(t){return"right"==t.type?_h("ul",{staticClass:"wall-right wall-column"},[_l(t.list,function(t){return t.url?_h("li",{on:{click:casesShow}},[_h("a",[_h("div",{staticClass:"item-head"},[_h("p",[_s(t.name)])])," ",_h("div",{staticClass:"item-body"},[_h("i",{staticClass:"avatar"},[_h("img",{attrs:{src:t.url,alt:""}})])])])," ",_h("div",{staticClass:"review"},[_h("p",[_s(t.text)])])]):_h("li",{on:{click:casesShow}},[_s(t.name)])})," "]):_e()})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"panel-casesShow"},[_h("nav",{staticClass:"nav-tags"},[_h("ul",[_l(tags,function(t){return _h("li",[_h("a",{attrs:{href:"javascript:;"}},[_s(t.name)])])})])])," ",_h("main",{staticClass:"show-container"},[_h("div",{staticClass:"show-item webapp"},[_h("div",{staticClass:"si-content"},[_m(0)," ",_h("iframe",{staticClass:"iframe",attrs:{src:"http://kevin.coding.io/AppMobile/WebApp/licai1/"}})])," ",_m(1)," ",_m(2)])])])},staticRenderFns:[function(){with(this)return _h("img",{attrs:{src:"http://7xnjvz.com1.z0.glb.clouddn.com/mobile-simulator.png",alt:""}})},function(){with(this)return _h("div",{staticClass:"si-sidebar"})},function(){with(this)return _h("div",{staticClass:"si-qrcode"})}]}}]);
//# sourceMappingURL=app.e9bedb2655fd8b559d0d.js.map