webpackJsonp([179],{"/PAV":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),e=a.n(i),n=a("Cz8s"),c=a("q0vl"),l={data:function(){return{member:{},vipRedpacket:{params:{},style:{},redpacket:{},powers:{}},meals:[],exchanges:{page:2,psize:15,empty:!1,finished:!1,data:[]},mealActive:{},exchangeActive:{},redpacketActive:{},stores:[],popup:{meal:!1,exchange:!1,agreement:!1},showFixedBtn:!1,preLoading:!0}},components:{PublicHeader:n.a,Agreement:c.a},methods:{onLoad:function(){var t=this;t.util.request({url:"vipRedpacket/index"}).then(function(s){t.preLoading=!1;var a=s.data.message;a.errno?t.util.$toast(a.message):(a=a.message,t.member=t.util.extend(t.member,a.member),t.vipRedpacket=t.util.extend(t.vipRedpacket,a.vipRedpacket),t.meals=[].concat(e()(a.meals)),t.stores=[].concat(e()(a.stores)),t.exchanges.data=[].concat(e()(t.exchanges.data),e()(a.exchanges)),t.exchanges.data.length||(t.exchanges.data.empty=!0),a.exchanges&&a.exchanges.length<t.exchanges.psize&&(t.exchanges.finished=!0),t.util.setWXTitle(t.vipRedpacket.params.title))})},onBuyMeal:function(t){var s=this;s.util.request({url:"vipRedpacket/index/meal",data:{id:t}}).then(function(t){var a=t.data.message;a.errno?s.util.$toast(a.message):(a=a.message,s.mealActive=s.util.extend(s.mealActive,a.meal),s.onTogglePopup("meal"))})},onSubmit:function(){var t=this;t.util.request({url:"vipRedpacket/index/meal",data:{id:t.mealActive.id},method:"POST"}).then(function(s){var a=s.data.message;a.errno?t.util.$toast(a.message):(a=a.message,t.$router.push(t.util.getUrl({path:"pages/public/pay",query:{order_id:a.id,order_type:"vipRedpacket"}})))})},onExchange:function(t){var s=this;if(1!=s.vipRedpacket.params.exchangeStatus)return!1;s.util.request({url:"vipRedpacket/index/exchange",data:{exchange_id:t}}).then(function(t){var a=t.data.message;a.errno?s.util.$toast(a.message):(a=a.message,s.exchangeActive=s.util.extend(s.exchangeActive,a.exchange),s.redpacketActive=s.util.extend(s.redpacketActive,a.redpacket),s.onTogglePopup("exchange"))})},onExchangeSubmit:function(){var t=this;if(1!=t.vipRedpacket.params.exchangeStatus)return!1;t.util.request({url:"vipRedpacket/index/exchange",data:{exchange_id:t.exchangeActive.id,redpacket_id:t.redpacketActive.id},method:"POST"}).then(function(s){var a=s.data.message;a.errno?t.util.$toast(a.message):(t.util.$toast(a.message),t.onTogglePopup("exchange"))})},onLoadMore:function(){var t=this;t.util.request({url:"vipRedpacket/index/more",data:{page:t.exchanges.page,psize:t.exchanges.psize}}).then(function(s){var a=s.data.message;a.errno?t.util.$toast(a.message):(a=a.message,t.exchanges.data=[].concat(e()(t.exchanges.data),e()(a.exchanges)),a.exchanges&&a.exchanges.length<t.exchanges.psize&&(t.exchanges.finished=!0),t.exchanges.page++)})},onTogglePopup:function(t){this.popup[t]=!this.popup[t]}},mounted:function(){var t=this;t.onLoad(),window.addEventListener("scroll",function(){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;s>120&&!t.showFixedBtn?t.showFixedBtn=!0:s<=120&&t.showFixedBtn&&(t.showFixedBtn=!1)})}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"vip-redpacket-index"}},[t.isWeixin?t._e():a("public-header",{attrs:{title:t.vipRedpacket.params.title}}),t._v(" "),t.member.vipRedpacket_status?a("div",{staticClass:"container"},[a("div",{staticClass:"userinfo"},[a("div",{staticClass:"bg"}),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"member margin-15-b flex-lr"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-100",attrs:{src:t.member.avatar}})]),t._v(" "),a("div",{staticClass:"other flex-1"},[a("div",{staticClass:"mobile"},[t._v(t._s(t.member.mobile_secret?t.member.mobile_secret:t.member.nickname))]),t._v(" "),a("div",{staticClass:"status"},[t._v("\n\t\t\t\t\t\t\t当前已开通会员\n\t\t\t\t\t\t\t"),a("span",{staticClass:"font-12 padding-5-lr"},[t._v("|")]),t._v(" "),a("router-link",{attrs:{tag:"span",to:t.util.getUrl({path:"/plugin/pages/vipRedpacket/record"})}},[t._v("购买记录")])],1)])]),t._v(" "),a("ul",{staticClass:"redpacket-total flex-lr"},[a("li",{staticClass:"padding-15-r"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/plugin/pages/vipRedpacket/redpacket"}),tag:"div"}},[t._v("\n\t\t\t\t\t\t\t可用红包"),a("span",{staticClass:"font-20 font-bold padding-5-lr"},[t._v(t._s(t.member.redpacket_num_avaliable))]),t._v("张\n\t\t\t\t\t\t\t"),a("i",{staticClass:"icon icon-right font-12 c-gray margin-15-l"})]),t._v(" "),a("div",{staticClass:"margin-10-t font-12"},[t._v(t._s(t.member.endtime_day)+"到期")])],1),t._v(" "),a("li",{staticClass:"padding-15-l"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/plugin/pages/vipRedpacket/redpacket"}),tag:"div"}},[t._v("\n\t\t\t\t\t\t\t已使用红包"),a("span",{staticClass:"font-20 font-bold padding-5-lr"},[t._v(t._s(t.member.redpacket_num_noavaliable))]),t._v("张\n\t\t\t\t\t\t\t"),a("i",{staticClass:"icon icon-right font-12 c-gray margin-15-l"})]),t._v(" "),a("div",{staticClass:"margin-10-t font-12 c-gray"},[t._v("下单享优惠")])],1)]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权1")]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.vipRedpacket.redpacket.num)+"张"+t._s(t.vipRedpacket.redpacket.discount)+t._s(t.Lang.dollarSignCn)+"会员红包")]),t._v(" "),a("div",{staticClass:"font-14 margin-10-t"},[t._v("本月的会员红包已发放")])]),t._v(" "),a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权2")]),t._v(" "),a("div",{staticClass:"title"},[t._v("低价购买会员加量包")]),t._v(" "),a("div",{staticClass:"flex margin-5-t"},[a("i",{staticClass:"icon icon-warnfill"}),t._v(" "),a("span",{staticClass:"font-12"},[t._v("\n\t\t\t\t\t请在"),a("span",{staticClass:"c-danger"},[t._v(t._s(t.member.endtime_day)+"前")]),t._v("购买使用\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"meals"},t._l(t.meals,function(s,i){return a("div",{key:i,class:{"meal-item":1,active:1==s.buyed}},[a("div",{staticClass:"redpacket"},[a("div",{staticClass:"flex-center padding-10-t"},[a("span",{staticClass:"font-20"},[t._v(t._s(s.discount))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v(t._s(t.Lang.dollarSignCn))]),t._v(" "),a("span",{staticClass:"padding-5-lr"},[t._v("x")]),t._v(" "),a("span",{staticClass:"font-20"},[t._v(" "+t._s(s.num))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v("张")])]),t._v(" "),a("div",{staticClass:"redpacket-title"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"margin-10-t font-bold"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"price-wrap"},[a("div",{staticClass:"price margin-5-r"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.Lang.dollarSign)),a("span",{staticClass:"font-20 font-500"},[t._v(t._s(s.price))])]),t._v(" "),a("div",{staticClass:"old-orice font-12 c-gray line-through"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.Lang.dollarSign)),a("span",[t._v(t._s(s.old_price))])])]),t._v(" "),a("div",{staticClass:"label"},[t._v("限时活动")]),t._v(" "),1==s.buyed?a("div",{staticClass:"buy"},[t._v("已购买")]):a("div",{staticClass:"buy",on:{click:function(a){return t.onBuyMeal(s.id)}}},[t._v("购买")])])}),0)]),t._v(" "),1==t.vipRedpacket.params.exchangeStatus?a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权3")]),t._v(" "),a("div",{staticClass:"title"},[t._v("会员红包免费升级")]),t._v(" "),a("div",{staticClass:"store-redpacket"},t._l(t.exchanges.data,function(s,i){return a("div",{key:i,staticClass:"redpacket-item flex-lr"},[a("div",{staticClass:"left"},[a("div",{staticClass:"logo"},[a("img",{staticClass:"img-100",attrs:{src:s.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",[a("div",{staticClass:"title-wrap w-100 flex"},[a("div",{staticClass:"store-title ellipsis"},[t._v(t._s(s.title))]),t._v(" "),a("i",{staticClass:"icon icon-right font-12 c-gray margin-5-l"})]),t._v(" "),a("div",{staticClass:"flex font-12 margin-5-t"},[a("div",{staticClass:"score"},[a("i",{staticClass:"icon icon-favorfill"}),t._v(" "),a("span",[t._v(t._s(s.score))])]),t._v(" "),a("span",{staticClass:"c-gray"},[t._v("月售"+t._s(s.sailed))])])]),t._v(" "),a("div",{staticClass:"w-100 font-12 ellipsis"},[a("div",{staticClass:"label"},[t._v("优惠可叠加")]),t._v(" "),a("span",{},[t._v(t._s(s.activity))])])])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"flex c-danger"},[a("span",{staticClass:"font-16"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.vipRedpacket.redpacket.discount))]),t._v(" "),a("span",{staticClass:"jiantou"}),t._v(" "),a("span",{staticClass:"font-20 "},[t._v(t._s(t.Lang.dollarSign)+t._s(s.discount))])]),t._v(" "),a("div",{staticClass:"btn-exchange",on:{click:function(a){return t.onExchange(s.id)}}},[t._v("升级")]),t._v(" "),a("div",{staticClass:"font-12 c-gray"},[t._v("需1张会员红包")])])])}),0),t._v(" "),a("div",{staticClass:"flex-center padding-10-t"},[t.exchanges.finished?[a("span",{staticClass:"font-14 margin-5-r c-gray"},[t._v("没有更多了")])]:[t.exchanges.finished?t._e():a("span",{staticClass:"font-14 margin-5-r",on:{click:t.onLoadMore}},[t._v("查看更多")]),t._v(" "),a("i",{staticClass:"icon icon-unfold font-12 c-gray"})]],2)]):t._e(),t._v(" "),a("div",{staticClass:"flex-center padding-15-b"},[a("span",{staticClass:"font-14",on:{click:function(s){return t.onTogglePopup("agreement")}}},[t._v("常见问题与说明")]),t._v(" "),a("i",{staticClass:"icon icon-right c-gray font-12"})])]):a("div",{staticClass:"container",style:{"padding-bottom":(t.showFixedBtn?65:0)+"px"}},[a("div",{staticClass:"userinfo"},[a("div",{staticClass:"bg"}),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"member margin-15-b flex-lr"},[t._m(0),t._v(" "),a("div",{staticClass:"other flex-1"},[a("div",{staticClass:"mobile"},[t._v(t._s(t.member.mobile_secret?t.member.mobile_secret:t.member.nickname))]),t._v(" "),a("div",{staticClass:"status"},[t._v("暂未开通会员")])])]),t._v(" "),a("div",{staticClass:"card flex-lr"},[a("div",[a("div",{staticClass:"font-bold font-18"},[t._v(t._s(t.vipRedpacket.params.title))]),t._v(" "),a("div",{staticClass:"font-14 margin-10-t"},[t._v(t._s(t.vipRedpacket.params.placeholder))])]),t._v(" "),a("div",[a("div",{staticClass:"font-14"},[t._v("\n\t\t\t\t\t\t\t最低"+t._s(t.Lang.dollarSign)),a("span",{staticClass:"font-bold font-20"},[t._v(t._s(t.vipRedpacket.params.price))]),t._v("/月\n\t\t\t\t\t\t")]),t._v(" "),a("router-link",{staticClass:"buy",attrs:{to:t.util.getUrl({path:"/plugin/pages/vipRedpacket/create"}),tag:"div"}},[t._v("立即开通")])],1)])])]),t._v(" "),a("div",{staticClass:"power-wrap padding-15-lr"},[t._m(1),t._v(" "),a("ul",{staticClass:"powers"},t._l(t.vipRedpacket.powers,function(s,i){return a("li",{key:i,staticClass:"power-item"},[a("div",{staticClass:"icon-wrap"},[a("i",{staticClass:"icon",class:s.icon})]),t._v(" "),a("div",[t._v(t._s(s.text))])])}),0)]),t._v(" "),a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权1")]),t._v(" "),a("div",{staticClass:"title"},[t._v("每月享"+t._s(t.vipRedpacket.redpacket.discount*t.vipRedpacket.redpacket.num)+t._s(t.Lang.dollarSignCn)+"无门槛红包")]),t._v(" "),a("div",{staticClass:"tips flex-lr"},[t._m(2),t._v(" "),a("div",[a("div",{staticClass:"power-take"},[a("div",{staticClass:"bg-1"}),t._v(" "),a("div",{staticClass:"bg-2"}),t._v(" "),a("div",{staticClass:"take-num"},[a("span",{staticClass:"c-danger font-20"},[t._v(t._s(t.vipRedpacket.redpacket.discount))]),t._v(" "+t._s(t.Lang.dollarSignCn)+" x "),a("span",{staticClass:"c-danger font-20"},[t._v(t._s(t.vipRedpacket.redpacket.num))]),t._v(" 张\n\t\t\t\t\t\t")])])])])]),t._v(" "),1==t.vipRedpacket.params.exchangeStatus?a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权2")]),t._v(" "),a("div",{staticClass:"title"},[t._v("会员红包可升级至更大金额")]),t._v(" "),a("div",{staticClass:"tips flex-lr"},[t._m(3),t._v(" "),a("div",[a("div",{staticClass:"exchange"},[a("i",{staticClass:"icon icon-forwardfill"}),t._v(" "),a("div",{staticClass:"from"},[a("span",{staticClass:"c-danger font-14"},[t._v("5")]),t._v(t._s(t.Lang.dollarSignCn)+"\n\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"to"},[a("span",{staticClass:"c-danger font-20"},[t._v("6~10")]),t._v(t._s(t.Lang.dollarSignCn)+"\n\t\t\t\t\t\t")])])])]),t._v(" "),t.stores.length>0?a("div",{staticClass:"store-wrap"},[a("van-row",t._l(t.stores,function(t,s){return a("van-col",{key:s,staticClass:"store-item",attrs:{span:"3"}},[a("img",{staticClass:"img-100",attrs:{src:t.logo,alt:""}})])}),1),t._v(" "),a("div",{staticClass:"font-12 margin-5-t"},[t._v("*实际商家和升级金额以外卖首页为准")]),t._v(" "),a("div",{staticClass:"bg"})],1):t._e()]):t._e(),t._v(" "),t.meals.length>0?a("div",{staticClass:"power-content"},[a("div",{staticClass:"number"},[t._v("特权3")]),t._v(" "),a("div",{staticClass:"title"},[t._v("底价购买会员加量包")]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"meals"},t._l(t.meals,function(s,i){return a("div",{key:i,staticClass:"meal-item"},[a("div",{staticClass:"redpacket"},[a("div",{staticClass:"flex-center padding-10-t"},[a("span",{staticClass:"font-20"},[t._v(t._s(s.discount))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v(t._s(t.Lang.dollarSignCn))]),t._v(" "),a("span",{staticClass:"padding-5-lr"},[t._v("x")]),t._v(" "),a("span",{staticClass:"font-20"},[t._v(" "+t._s(s.num))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v("张")])]),t._v(" "),a("div",{staticClass:"redpacket-title"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"margin-10-t font-bold"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"price-wrap"},[a("div",{staticClass:"price margin-5-r"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.Lang.dollarSign)),a("span",{staticClass:"font-20 font-500"},[t._v(t._s(s.price))])]),t._v(" "),a("div",{staticClass:"old-orice font-12 c-gray line-through"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.Lang.dollarSign)),a("span",[t._v(t._s(s.old_price))])])]),t._v(" "),a("div",{staticClass:"label"},[t._v("限时活动")])])}),0)]):t._e(),t._v(" "),a("div",{staticClass:"flex-center padding-15-b"},[a("span",{staticClass:"font-14",on:{click:function(s){return t.onTogglePopup("agreement")}}},[t._v("常见问题与说明")]),t._v(" "),a("i",{staticClass:"icon icon-right c-gray font-12"})]),t._v(" "),a("div",{staticClass:"button-fixed",class:{show:t.showFixedBtn}},[a("div",{staticClass:"inner flex-lr"},[a("div",{staticClass:"tips"},[a("span",{staticClass:"font-bold font-16"},[t._v("尊享会员")]),t._v(" "),a("span",[t._v("最低"+t._s(t.Lang.dollarSign))]),t._v(" "),a("span",{staticClass:"font-20"},[t._v("15")]),t._v(" "),a("span",[t._v("/月")])]),t._v(" "),a("router-link",{staticClass:"buy",attrs:{to:t.util.getUrl({path:"/plugin/pages/vipRedpacket/create"}),tag:"div"}},[t._v("立即开通")])],1)])]),t._v(" "),a("van-popup",{staticClass:"popup-meal",attrs:{position:"bottom"},model:{value:t.popup.meal,callback:function(s){t.$set(t.popup,"meal",s)},expression:"popup.meal"}},[a("div",{staticClass:"popup-title van-hairline--bottom"},[t._v("\n\t\t\t购买加量包\n\t\t\t"),a("i",{staticClass:"icon icon-close",on:{click:function(s){return t.onTogglePopup("meal")}}})]),t._v(" "),a("div",{staticClass:"popup-content"},[a("div",{staticClass:"meal flex-lr"},[a("div",{staticClass:"left"},[a("div",{staticClass:"font-16 font-500"},[t._v(t._s(t.mealActive.title))]),t._v(" "),a("div",{staticClass:"use-time"},[t._v("有效期至："+t._s(t.member.endtime_day))]),t._v(" "),a("div",{staticClass:"font-12 c-gray"},[t._v("会员红包支持金额升级")])]),t._v(" "),a("div",[a("div",{staticClass:"redpacket"},[a("div",{staticClass:"flex-center padding-10-t"},[a("span",{staticClass:"font-20"},[t._v(t._s(t.mealActive.discount))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v(t._s(t.Lang.dollarSignCn))]),t._v(" "),a("span",{staticClass:"padding-5-lr"},[t._v("x")]),t._v(" "),a("span",{staticClass:"font-20"},[t._v(" "+t._s(t.mealActive.num))]),t._v(" "),a("span",{staticClass:"font-12"},[t._v("张")])]),t._v(" "),a("div",{staticClass:"redpacket-title"},[t._v(t._s(t.mealActive.name))]),t._v(" "),a("div",{staticClass:"line"})])])]),t._v(" "),a("div",{staticClass:"van-hairline--top padding-15-tb"},[a("div",{staticClass:"flex-lr"},[a("div",{},[t._v("售卖价")]),t._v(" "),a("div",{staticClass:"flex"},[a("span",{staticClass:"label"},[t._v("限时特惠")]),t._v(" "),a("span",{staticClass:"line-through font-12 c-gray margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.mealActive.old_price))]),t._v(" "),a("span",[t._v(t._s(t.Lang.dollarSign)+t._s(t.mealActive.price))])])]),t._v(" "),a("div",{staticClass:"flex-lr margin-15-t"},[a("div",[t._v("加量包抵扣券")]),t._v(" "),a("div",{staticClass:"c-gray"},[t._v("暂无可用")])])]),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("div",{staticClass:"flex-center use-day"},[a("i",{staticClass:"icon icon-warn margin-5-r"}),t._v("\n\t\t\t\t\t购买后请在"),a("span",{staticClass:"c-danger"},[t._v(t._s(t.member.endtime_day))]),t._v("前使用\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"inner flex-lr"},[a("div",{staticClass:"tips"},[t._v("已优惠"+t._s(t.Lang.dollarSign)+t._s(t.mealActive.discount_price))]),t._v(" "),a("div",{staticClass:"buy",on:{click:t.onSubmit}},[t._v("\n\t\t\t\t\t\t去支付"+t._s(t.Lang.dollarSign)),a("span",{staticClass:"font-20"},[t._v(t._s(t.mealActive.price))])])])])])]),t._v(" "),a("van-popup",{staticClass:"popup-exchange",model:{value:t.popup.exchange,callback:function(s){t.$set(t.popup,"exchange",s)},expression:"popup.exchange"}},[a("div",{staticClass:"title text-center font-16 font-bold"},[t._v("会员红包金额升级")]),t._v(" "),a("div",{staticClass:"line-12 margin-15-tb"},[t._v("当前还有"+t._s(t.member.redpacket_num_avaliable_notstore)+"张尊享会员红包，升级需要消耗1张")]),t._v(" "),a("div",{staticClass:"redpacket"},[a("div",{staticClass:"from"},[a("div",{staticClass:"discount"},[t._v(t._s(t.Lang.dollarSign)+" "),a("span",{staticClass:"font-20"},[t._v(t._s(t.redpacketActive.discount))])]),t._v(" "),a("div",{staticClass:"font-12 padding-10-tb text-center"},[t._v("会员红包")]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("i",{staticClass:"icon icon-forwardfill"}),t._v(" "),a("div",{staticClass:"to"},[a("div",{staticClass:"discount"},[t._v(t._s(t.Lang.dollarSign)),a("span",[t._v(t._s(t.exchangeActive.discount))])]),t._v(" "),a("div",{staticClass:"logo"},[a("img",{staticClass:"img-100",attrs:{src:t.exchangeActive.logo,alt:""}})]),t._v(" "),a("div",{staticClass:"title ellipsis"},[t._v(t._s(t.exchangeActive.title))])])]),t._v(" "),a("div",{staticClass:"btn-exchange",on:{click:t.onExchangeSubmit}},[t._v("确认升级")]),t._v(" "),a("div",{staticClass:"close",on:{click:function(s){return t.onTogglePopup("exchange")}}},[a("i",{staticClass:"icon icon-close font-20"})])]),t._v(" "),a("agreement",{attrs:{show:t.popup.agreement,title:"常见问题与说明",content:t.vipRedpacket.rules},on:{agreementHide:function(s){return t.onTogglePopup("agreement")}}}),t._v(" "),a("iloading",{directives:[{name:"show",rawName:"v-show",value:t.preLoading,expression:"preLoading"}]})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"avatar"},[s("span",{staticClass:"icon icon-crownfill"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[this._v("尊享会员享"),s("span",{staticClass:"power-num"},[this._v("3")]),this._v("大特权")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("i",{staticClass:"icon icon-roundcheckfill"}),this._v(" "),s("span",[this._v("无门槛")])]),this._v(" "),s("li",{staticClass:"margin-5-t"},[s("i",{staticClass:"icon icon-roundcheckfill"}),this._v(" "),s("span",[this._v("可与满减/折扣同享")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("i",{staticClass:"icon icon-roundcheckfill"}),this._v(" "),s("span",[this._v("会员可免费升级")])]),this._v(" "),s("li",{staticClass:"margin-5-t"},[s("i",{staticClass:"icon icon-roundcheckfill"}),this._v(" "),s("span",[this._v("海量商家支持升级")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex margin-5-t"},[s("i",{staticClass:"icon icon-warnfill"}),this._v(" "),s("span",{staticClass:"font-12"},[this._v("开通会员后即可购买和使用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card flex-lr"},[s("div",[s("div",{staticClass:"font-bold font-18"},[this._v("美团会员·尊享版")]),this._v(" "),s("div",{staticClass:"in-use"},[s("i",{staticClass:"icon icon-roundcheckfill"}),this._v(" "),s("span",{staticClass:"font-12"},[this._v("使用中")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"power-wrap padding-15-lr"},[s("div",{staticClass:"title"},[this._v("尊享会员特权")])])}]};var r=a("VU/8")(l,v,!1,function(t){a("OB02")},null,null);s.default=r.exports},OB02:function(t,s){}});
//# sourceMappingURL=179.6888f7d0602ce96b796d.js.map