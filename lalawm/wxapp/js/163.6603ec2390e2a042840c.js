webpackJsonp([163],{"3+J9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("MJLE"),a=n.n(s),r={data:function(){return{preLoading:!0,url:"",settle:{}}},methods:{newQrcode:function(e){new a.a("qrcode",{width:150,height:150,text:e,image:""})},onLoad:function(){var e=this;this.util.request({url:"spread/poster/qrcode"}).then(function(t){e.preLoading=!1;var n=t.data.message;if(n.errno)return e.util.$toast(n.message),!1;e.url=n.message.url,e.settle=n.message.settle,e.newQrcode(e.url)})}},mounted:function(){this.onLoad()}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"spread-qrcode"}},[n("div",{staticClass:"content"},[n("p",{staticClass:"tips"},[e._v("邀请朋友扫描下方二维码")]),e._v(" "),e._m(0),e._v(" "),n("p",{staticClass:"explain"},[e._v("好友扫描您的二维码,并且下单, "+e._s(1==e.settle.balance_condition?"确认收货之后":"确认收货并评价之后")+", 您就可以获得佣金")])]),e._v(" "),n("transition",{attrs:{name:"loading"}},[e.preLoading?n("iloading"):e._e()],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"qrcode-wrap"},[t("div",{attrs:{id:"qrcode"}})])}]};var o=n("VU/8")(r,i,!1,function(e){n("X/ln")},null,null);t.default=o.exports},"X/ln":function(e,t){}});
//# sourceMappingURL=163.6603ec2390e2a042840c.js.map