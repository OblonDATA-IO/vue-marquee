(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(t,e,n){},357:function(t,e,n){"use strict";var r=n(322);n.n(r).a},368:function(t,e,n){"use strict";n.r(e);n(9),n(100);var r=n(64),a={name:"MarqueeDemoAsync",data:function(){return{asyncData:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://picsum.photos/v2/list?page=2&limit=5");case 2:return n=e.sent,e.prev=3,e.next=6,n.json();case 6:t.asyncData=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()}},s=(n(357),n(18)),c=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("marquee",{staticClass:"marquee-demo-async",attrs:{"duration-per-slide":"1000",direction:"rtl"}},this._l(this.asyncData,(function(t){var n=t.id,r=t.author;return e("div",{key:n,staticClass:"slide"},[e("img",{attrs:{alt:r,src:"https://picsum.photos/id/"+n+"/400/300"}})])})),0)],1)}),[],!1,null,"0f3fce3f",null);e.default=c.exports}}]);