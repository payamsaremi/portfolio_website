(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{424:function(n,e,t){"use strict";t.r(e);var r=t(28),o=(t(89),t(13),t(34),t(35),t(14),{name:"P5Canvas",data:function(){return{width:0,height:0,xoff:0}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(13).then(t.t.bind(null,431,7));case 2:r=e.sent,o=r.default,new o((function(s){s.setup=function(){n.width=window.innerWidth,n.height=window.innerHeight,s.createCanvas(n.width,n.height)},s.draw=function(){s.noLoop();s.map(s.noise(n.xoff),0,1,0,n.width);n.xoff+=.01,s.background(33,33,33);for(var i=0;i<5;i+=.01){var e=s.map(s.noise(i),0,1,0,n.width);i+=.01,s.ellipse(e,n.height/2,50,50)}}}),"p5Canvas");case 6:case"end":return e.stop()}}),e)})))()}}),c=t(98),component=Object(c.a)(o,(function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("div",{attrs:{id:"p5Canvas"}})])}],!1,null,null,null);e.default=component.exports}}]);