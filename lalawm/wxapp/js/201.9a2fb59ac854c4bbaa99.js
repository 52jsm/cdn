webpackJsonp([201],{TE5m:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("Gu7T"),e=i.n(s),n=i("woOf"),r=i.n(n),c=i("Cz8s"),l=i("75NE"),o=i("deIj"),v={components:{PublicHeader:c.a,CountDown:l.a},data:function(){return{activityid:0,uid:0,activity:{},takeinfo:{helper:[]},rank:[],self:1,more:[],rankType:"helper",bargainSuccessPopup:!1,bargainprice:0,showPreLoading:!0,zhezhaoShow:!1}},methods:{onLoad:function(){var t=this;Object(o.a)({vue:t,url:"kanjia/activity/share",data:{activityid:t.activityid,uid:t.uid,page:1,psize:6},success:function(a){t.activity=r()(t.activity,a.activity),t.takeinfo=r()(t.takeinfo,a.takeinfo),t.rank=[].concat(e()(a.rank)),t.self=a.self,t.more=[].concat(e()(a.more));var i=window._share;i&&(i.success=function(){t.util.request({url:"gohome/common/share",data:{id:t.id,type:"kanjia"}}).then(function(t){})}),t.wx.share(i)}})},onToggleRank:function(t){t!=this.rankType&&(this.rankType=t)},onTogglePopup:function(){this.bargainSuccessPopup=!this.bargainSuccessPopup},onBargain:function(){var t=this;Object(o.c)({vue:t,url:"kanjia/activity/bargain",data:{activityid:t.activityid,uid:t.uid},success:function(a){var i=a;t.bargainprice=i.bargainprice,t.takeinfo.price=i.afterprice,t.takeinfo.per_price=(t.activity.oldprice-t.takeinfo.price)/(t.activity.oldprice-t.activity.price)*100,t.takeinfo.helper.push(i),t.onTogglePopup()}})}},mounted:function(){this.$route.query&&this.$route.query.activityid&&(this.activityid=this.$route.query.activityid),this.$route.query&&this.$route.query.uid&&(this.uid=this.$route.query.uid),this.onLoad()}},d={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"kanjia-share"}},[i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("div",{staticClass:"bottom"},[1==t.activity.status?i("div",{staticClass:"flex padding-15-l c-white margin-10-b"},[i("span",{staticClass:"font-12 margin-5-r"},[t._v("距结束")]),t._v(" "),i("count-down",{attrs:{endTime:t.activity.endtime}})],1):t._e(),t._v(" "),i("div",{staticClass:"margin-15-lr margin-15-b padding-15 bg-default radius-3"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"img-100",attrs:{src:t.takeinfo.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"font-12 margin-5-b"},[t._v(t._s(t.takeinfo.nickname))]),t._v(" "),i("div",{staticClass:"font-500"},[t._v("我正在"+t._s(t.activity.price)+t._s(t.Lang.dollarSignCn)+"抢这件商品，快来帮帮我吧!")])])]),t._v(" "),i("router-link",{staticClass:"bg-gray padding-15 radius-3 margin-15-t flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:t.activityid}})}},[i("div",{staticClass:"goods-thumb"},[i("img",{staticClass:"img-100",attrs:{src:t.activity.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-info"},[i("ul",{},[t.activity.store?i("li",{staticClass:"font-500"},[t._v(t._s(t.activity.store.title))]):t._e(),t._v(" "),i("li",{staticClass:"margin-5-t"},[t._v(t._s(t.activity.name))])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"c-danger font-15 font-500 margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.activity.price))]),t._v(" "),i("div",{staticClass:"c-gray font-13 line-through"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.activity.oldprice))])])])]),t._v(" "),1==t.takeinfo.status?[i("div",{staticClass:"progress margin-15-t"},[i("div",{staticClass:"progress-inner"},[i("div",{staticClass:"now-price",style:{left:t.takeinfo.per_price+"%"}},[t._v("现价"+t._s(t.Lang.dollarSign)+t._s(t.takeinfo.price))]),t._v(" "),i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",style:{width:t.takeinfo.per_price+"%"}})])]),t._v(" "),i("div",{staticClass:"flex-lr font-14 margin-5-t"},[i("div",[t._v(t._s(t.Lang.dollarSign)+t._s(t.activity.oldprice))]),t._v(" "),i("div",{staticClass:"c-danger"},[t._v(t._s(t.Lang.dollarSign)+t._s(t.activity.price))])])])]:2==t.takeinfo.status?[t._m(1)]:t._e(),t._v(" "),1==t.self?i("div",{staticClass:"btn-group margin-15-t flex-center"},[i("div",{staticClass:"btn-item he margin-10-lr",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[t._v("找人帮砍")]),t._v(" "),1==t.takeinfo.now_price_buy?i("router-link",{staticClass:"btn-item he margin-10-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/order/create",query:{activityid:t.activityid}})}},[t._v("当前价格购买")]):t.takeinfo.price==t.activity.price?i("router-link",{staticClass:"btn-item he margin-10-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/order/create",query:{activityid:t.activityid}})}},[t._v("立即下单")]):t._e()],1):0==t.self?i("div",{staticClass:"btn-group margin-15-t flex-lr"},[1==t.takeinfo.status?i("div",{staticClass:"btn-item he",on:{click:t.onBargain}},[t._v("帮TA砍价")]):t._e(),t._v(" "),1==t.takeinfo.status?i("div",{staticClass:"btn-item he",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[t._v("帮TA分享")]):t._e(),t._v(" "),i("router-link",{staticClass:"btn-item me",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:t.activityid}})}},[t._v("我也要抢")])],1):t._e()],2),t._v(" "),i("div",{staticClass:"margin-15 bg-default rank"},[i("ul",{staticClass:"flex-lr rank-title"},[i("li",{class:{active:"helper"==t.rankType},on:{click:function(a){return t.onToggleRank("helper")}}},[t._v("帮砍团")]),t._v(" "),i("li",{class:{active:"rank"==t.rankType},on:{click:function(a){return t.onToggleRank("rank")}}},[t._v("排行榜")])]),t._v(" "),"helper"==t.rankType?i("div",{staticClass:"padding-15-lr padding-15-b"},[t.takeinfo.helper&&t.takeinfo.helper.length>0?t._l(t.takeinfo.helper,function(a,s){return i("div",{key:s,staticClass:"rank-item margin-15-t flex-lr"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"img-100",attrs:{src:a.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"user-info flex-lr padding-10-f"},[i("ul",[i("li",{staticClass:"margin-5-b"},[t._v(t._s(a.nickname))]),t._v(" "),i("li",{staticClass:"font-12 c-gray"},[t._v(t._s(a.createtime_cn))])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"icon-axe margin-5-r"}),t._v(" "),i("div",{staticClass:"c-danger"},[t._v("砍掉 "+t._s(t.Lang.dollarSign)+t._s(a.bargainprice))])])])])}):[i("div",{staticClass:"margin-15-t text-center font-14 c-gray"},[t._v("\n\t\t\t\t\t\t\t暂时没有人帮忙砍价哦~\n\t\t\t\t\t\t")])]],2):"rank"==t.rankType?i("div",{staticClass:"padding-15-lr padding-15-b"},[t.rank.length>0?t._l(t.rank,function(a,s){return i("div",{key:s,staticClass:"rank-item margin-15-t flex-lr"},[i("div",{staticClass:"avatar"},[i("img",{staticClass:"img-100",attrs:{src:a.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"user-info flex-lr padding-10-f"},[i("ul",[i("li",{staticClass:"margin-5-b"},[t._v(t._s(a.nickname))]),t._v(" "),i("li",{staticClass:"font-12 c-gray"},[t._v(t._s(a.createtime_cn))])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"icon-axe margin-5-r"}),t._v(" "),i("div",{staticClass:"c-danger"},[t._v("砍掉 "+t._s(t.Lang.dollarSign)+t._s(a.bargainprice))])])])])}):i("div",{staticClass:"margin-15-t text-center font-14 c-gray"},[t._v("\n\t\t\t\t\t\t没有人登榜哦~\n\t\t\t\t\t")])],2):t._e()]),t._v(" "),t.more.length>0?[i("div",{staticClass:"margin-15-t c-white text-center font-14"},[t._v("更多活动")]),t._v(" "),i("div",{staticClass:"activity-list"},t._l(t.more,function(a,s){return i("router-link",{key:a.id,staticClass:"activity-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:a.id}})}},[i("div",{staticClass:"item-inner"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:a.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(a.name))]),t._v(" "),i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(t.Lang.dollarSign)+t._s(a.oldprice))])]),t._v(" "),i("div",{staticClass:"c-gray font-12"},[t._v("已售"+t._s(a.sailed)+"份")])])])])}),1)]:t._e()],2)]),t._v(" "),i("van-popup",{staticClass:"popup-remind",model:{value:t.bargainSuccessPopup,callback:function(a){t.bargainSuccessPopup=a},expression:"bargainSuccessPopup"}},[i("div",{staticClass:"remind-tip"},[i("p",[t._v("恭喜! 你成功帮")]),t._v(" "),i("p",{staticClass:"c-danger w-100 ellipsis"},[t._v(t._s(t.takeinfo.nickname))]),t._v(" "),i("p",[t._v("砍掉了")]),t._v(" "),i("div",{staticClass:"c-danger"},[i("span",{staticClass:"font-20"},[t._v(t._s(t.Lang.dollarSign))]),t._v(" "),i("span",{staticClass:"cut-price"},[t._v(t._s(t.bargainprice))])])]),t._v(" "),i("div",{staticClass:"remind-close",on:{click:t.onTogglePopup}},[t._v("我知道了")])]),t._v(" "),i("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?i("div",{staticClass:"share-zhezhao",on:{click:function(a){t.zhezhaoShow=!t.zhezhaoShow}}},[i("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()]),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"top-logo"},[a("img",{staticClass:"w-100",attrs:{src:"static/img/kanjia_share_top.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"kanjia-success"},[a("img",{attrs:{src:"static/img/kanjia_success.png",alt:""}})])}]};var g=i("VU/8")(v,d,!1,function(t){i("d92j")},null,null);a.default=g.exports},d92j:function(t,a){}});
//# sourceMappingURL=201.9a2fb59ac854c4bbaa99.js.map