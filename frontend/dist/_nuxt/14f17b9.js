(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{417:function(t,e,o){var content=o(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("00815680",content,!0,{sourceMap:!1})},418:function(t,e,o){"use strict";o(417)},419:function(t,e,o){var r=o(134)(!1);r.push([t.i,'p{line-height:1.5em}h1+p,p+p{margin-top:20px}.card-wrap{margin:10px;transform:perspective(1200px);transform-style:preserve-3d;cursor:pointer}.card-wrap:hover .card-info{transform:translateY(0)}.card-wrap:hover .card-info p{opacity:1}.card-wrap:hover .card-info,.card-wrap:hover .card-info p{transition:.6s cubic-bezier(.23,1,.32,1)}.card-wrap:hover .card-info:after{transition:3s cubic-bezier(.23,1,.32,1);opacity:1;transform:translateY(0)}.card-wrap:hover .card-bg{transition:.5s cubic-bezier(.23,1,.32,1),opacity 4s cubic-bezier(.23,1,.32,1);opacity:.8}.card-wrap:hover .card{transition:.5s cubic-bezier(.23,1,.32,1);box-shadow:none}.card-wrap:active .card{box-shadow:0 30px 60px 0 rgba(43,43,43,.66),inset 0 0 0 5px #434343,inset 0 0 0 6px hsla(0,0%,100%,.4)}.card-bg{opacity:.5;position:absolute;top:-40px;left:-40px;width:120%;height:120%;padding:0;background-repeat:no-repeat;background-position:50%;background-size:cover;transition:.8s cubic-bezier(.445,.05,.55,.95),opacity 1s cubic-bezier(.445,.05,.55,.95) .8s;pointer-events:none}.card-info{padding:20px;position:absolute;bottom:0;color:#fff;transform:translateY(40%)}.card-info,.card-info p{transition:.6s cubic-bezier(.215,.61,.355,1)}.card-info p{opacity:0;text-shadow:#000 0 2px 3px}.card-info *{position:relative;z-index:1}.card-info:after{content:"";position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;background-image:linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));background-blend-mode:overlay;opacity:0;transform:translateY(100%);transition:5s cubic-bezier(.445,.05,.55,.95) 1s}.card-info h1{font-family:"Raleway",sans-serif;font-size:36px;font-weight:700;text-shadow:rgba(0,0,0,.5) 0 10px 10px}',""]),t.exports=r},420:function(t,e,o){"use strict";o.r(e);o(33),o(61);var r={mounted:function(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage","link"],data:function(){return{width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}},computed:{mousePX:function(){return this.mouseX/this.width},mousePY:function(){return this.mouseY/this.height},cardStyle:function(){var t=20*this.mousePX,e=-20*this.mousePY;return{transform:"rotateY(".concat(t,"deg) rotateX(").concat(e,"deg)")}},cardBgTransform:function(){var t=-40*this.mousePX,e=-40*this.mousePY;return{transform:"translateX(".concat(t,"px) translateY(").concat(e,"px)")}},cardBgImage:function(){return{backgroundImage:"url(".concat(this.dataImage,")")}}},methods:{handleMouseMove:function(t){try{this.mouseX=t.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=t.pageY-this.$refs.card.offsetTop-this.height/2}catch(e){console.log(t)}},handleMouseEnter:function(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave:function(){var t=this;this.mouseLeaveDelay=setTimeout((function(){t.mouseX=0,t.mouseY=0}),1e3)}}},n=(o(418),o(98)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"card",staticClass:"card-wrap",on:{mousemove:t.handleMouseMove,mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[o("nuxt-link",{attrs:{to:t.link}},[o("div",{staticClass:"card",style:t.cardStyle},[o("div",{staticClass:"card-bg",style:[t.cardBgTransform,t.cardBgImage]}),t._v(" "),o("div",{staticClass:"card-info"},[t._t("category"),t._v(" "),t._t("header"),t._v(" "),t._t("content")],2)])])],1)}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{categories:[{header:"Art",content:"learn about my most recent Art projects, Installations, Photography, Design and Music...",slug:"art"},{header:"Web",content:"Full-Stack Web development is probably something that Im most passionate about, here you can find my most recent works + codes ",slug:"web"},{header:"NFT",content:"Do you love Blockchain? how about computer generated Arts? well here you can Buy, Mint and Sell Arts as NFTs, Click to get started!",slug:"nft"},{header:"Experiance",content:"Do you love Blockchain? how about computer generated Arts? well here you can Buy, Mint and Sell Arts as NFTs, Click to get started!",slug:"experiance"},{header:"Installation",content:"Do you love Blockchain? how about computer generated Arts? well here you can Buy, Mint and Sell Arts as NFTs, Click to get started!",slug:"installation"},{header:"Whoami",content:"Thanks for visiting my Page! Im Payam Saremi, I have created this website to get to know people who are interested in my work, want to know more about me? Y/n",slug:"whoami"}]}}},n=o(98),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"cards-container"},t._l(t.categories,(function(e){return o("card",{key:e.id,attrs:{link:""+e.slug,"data-image":""}},[o("h1",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.header))]),t._v(" "),o("p",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.content))])])})),1),t._v(" "),o("h1",{staticClass:"title",staticStyle:{"padding-top":"50px"}},[t._v("Im@payam.space")])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:o(420).default})}}]);