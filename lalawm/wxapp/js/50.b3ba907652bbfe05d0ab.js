webpackJsonp([50],{Bm5s:function(t,e){},ROgv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("XbGN"),a={data:function(){return{preLoading:!0,relate:{},settle:{},respon:""}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/poster/vue_index"}).then(function(e){t.preLoading=!1;var s=e.data.message;if(s.errno)return t.util.$toast(s.message),!1;t.relate=s.message.group_relate,t.settle=s.message.settle,t.respon=s.message.respon,t.util.isGlala()&&n.a.longpress({url:t.respon})})}},mounted:function(){this.onLoad()},destroyed:function(){this.util.isGlala()&&n.a.removeEventListener("longpress")}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"spread-poster"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.respon,alt:""}})]),t._v(" "),s("div",{staticClass:"tips-group bg-default margin-15-lr margin-15-t"},[t._m(0),t._v(" "),s("ul",{staticClass:"padding-15-lr padding-10-tb"},[s("li",[t._v("\n\t\t\t\t\t\t1.长按图片下载海报到相册,转发此海报给微信好友或分享到朋友圈。\n\t\t\t\t\t")]),t._v(" "),s("li",[t._v("\n\t\t\t\t\t\t2.好友扫描您分享海报上的二维码,并且下单。\n\t\t\t\t\t")]),t._v(" "),s("li",[1==t.settle.balance_condition?[t._v("3.确认收货之后,您就可以获得佣金。")]:[t._v("3.好友下单后,确认收货并评价之后,您就可以获得佣金。")]],2)])])]),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.preLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"padding-15-lr"},[e("div",{staticClass:"padding-15-tb van-hairline--bottom c-gray"},[this._v("如何赚钱")])])}]};var r=s("VU/8")(a,i,!1,function(t){s("Bm5s")},null,null);e.default=r.exports}});
//# sourceMappingURL=50.b3ba907652bbfe05d0ab.js.map