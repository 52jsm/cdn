webpackJsonp([49],{Npin:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Gu7T"),a=i.n(s),r={data:function(){return{member:{},diytips:[],showPreLoading:!0}},components:{PublicHeader:i("Cz8s").a},methods:{onLoad:function(){var e=this;this.util.request({url:"deliveryCard/index/power"}).then(function(t){e.showPreLoading=!1;var i=t.data.message;if(i.errno)return e.util.$toast(i.message),!1;i=i.message,e.member=i.member,e.diytips=[].concat(a()(i.diytips))})}},mounted:function(){this.onLoad()}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"deliveryCard-power"}},[i("public-header",{attrs:{title:"配送会员卡"}}),e._v(" "),i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",{staticClass:"tequan-info"},[e._v("特权说明")]),e._v(" "),e.diytips.length>0?i("ul",{staticClass:"tequan-list"},e._l(e.diytips,function(t,s){return i("li",{key:s,staticClass:"ellipsis"},[e._v(e._s(t.text))])}),0):i("ul",{staticClass:"tequan-list"},[i("li",[e._v("仅支持平台配送商户使用")]),e._v(" "),i("li",[e._v("下单配送费直接扣除")]),e._v(" "),e.member.setmeal_day_free_limit>0?i("li",[e._v("每日仅限"+e._s(e.member.setmeal_day_free_limit)+"单享受特权")]):i("li",[e._v("每日限次享受特权")]),e._v(" "),e.member.setmeal_deliveryfee_free_limit>0?i("li",[e._v("每单最高减免配送费"+e._s(e.member.setmeal_deliveryfee_free_limit)+e._s(e.Lang.dollarSignCn))]):i("li",[e._v("免费送金额不设限制")])]),e._v(" "),i("div",{staticClass:"card-button"},[i("router-link",{staticClass:"button-round",attrs:{to:e.util.getUrl({path:"/pages/home/index"})}},[e._v("现在去购物")])],1)]),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tequan-pic"},[t("img",{attrs:{src:"static/img/card-privilege.jpg",alt:""}})])}]};var l=i("VU/8")(r,n,!1,function(e){i("OYBf")},null,null);t.default=l.exports},OYBf:function(e,t){}});
//# sourceMappingURL=49.27a08e22462d2f870ed5.js.map