(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{424:function(n,t,e){"use strict";e.r(t);var r=e(28),o=(e(89),e(13),e(34),e(35),e(14),{name:"P5Canvas",data:function(){return{width:0,height:0,xoff:0}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(13).then(e.t.bind(null,431,7));case 2:r=t.sent,o=r.default,new o((function(s){s.setup=function(){n.width=window.innerWidth,n.height=window.innerHeight,s.createCanvas(n.width,n.height)},s.draw=function(){s.noLoop();s.map(s.noise(n.xoff),0,1,0,n.width);n.xoff+=.01,s.background(33,33,33);for(var i=0;i<5;i+=.01){var t=s.map(s.noise(i),0,1,0,n.width);i+=.01,s.ellipse(t,n.height/2,50,50)}}}),"p5Canvas");case 6:case"end":return t.stop()}}),t)})))()}}),c=e(98),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{attrs:{id:"p5Canvas"}})])}],!1,null,null,null);t.default=component.exports},432:function(n,t,e){"use strict";e.r(t);var r={components:{P5Canvas:e(424).default}},o=e(98),component=Object(o.a)(r,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("p-5-canvas")],1)}),[],!1,null,null,null);t.default=component.exports}}]);