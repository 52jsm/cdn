webpackJsonp([187],{"K/+Q":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("Cz8s"),l=i("mzkE"),o=i("deIj"),r={components:{PublicHeader:n.a,PublicFooter:l.a},data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},navs:[],isRefresh:!1,showPreLoading:!0,menufooter:{},black_member:{status:!1},showFailedTips:!1,failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"}}},methods:{onLoad:function(t){var s=this;Object(o.b)({vue:s,force:t,url:"kanjia/activity/index",data:{menufooter:1,forceLocation:1},success:function(t){s.navs=[].concat(e()(t.navs)),s.menufooter=window.menufooter},fail:function(t){if(-1e3==t.errno){var i=t.message.black_member;return s.black_member=i,s.failedTips.tips=i.tip,s.failedTips.btnText="回首页",void(s.failedTips.link="/pages/home/index")}-1!=t.errno||s.util.$toast(t.message)}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"kanjia-index"}},[i("public-header",{attrs:{title:"疯狂砍价"}}),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter,showFailedTips:t.showFailedTips||t.black_member.status,failedTips:t.failedTips}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[i("div",{staticClass:"kanjia-navs margin-10-b"},[i("van-swipe",{attrs:{"indicator-color":"#ff2d4b"}},t._l(t.navs,function(s,a){return i("van-swipe-item",{key:s.id},[i("div",{staticClass:"kanjia-navs-container col-5 circle"},t._l(s,function(s,a){return i("div",{key:s.id,staticClass:"kanjia-nav-col",on:{click:function(i){return t.util.jsUrl(s.link)}}},[i("div",{staticClass:"kanjia-nav-icon"},[i("img",{attrs:{src:s.thumb}})]),t._v(" "),i("div",{staticClass:"kanjia-nav-text"},[t._v(t._s(s.title))])])}),0)])}),1)],1),t._v(" "),i("div",{staticClass:"padding-15-tb padding-10-lr font-14 c-danger bg-default"},[t._v("召集好友来砍价")]),t._v(" "),t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无砍价活动!")])]):i("van-list",{staticClass:"activity-list padding-10-b",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,a){return i("div",{key:s.id,staticClass:"activity-item van-hairline--top"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),3==s.status?i("div",{staticClass:"end-bg"},[i("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),i("div",{staticClass:"title"},[t._v("【邀请好友帮忙砍价】"+t._s(s.name))]),t._v(" "),i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"flex"},[i("div",{staticClass:"c-danger font-16 font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.oldprice))])]),t._v(" "),s.userlist&&s.userlist.length>0?i("div",{staticClass:"buy-history flex"},[i("div",{staticClass:"avatar-list"},t._l(s.userlist,function(s,a){return a<3?i("img",{key:a,attrs:{src:s.avatar}}):t._e()}),0),t._v(" "),i("div",{staticClass:"font-12 c-gray margin-5-l"},[t._v(t._s(s.userlist.length)+"人参与")])]):t._e()]),t._v(" "),1==s.status?[0!=s.total?i("router-link",{staticClass:"btn btn-detail",attrs:{to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:s.id}}),tag:"div"}},[t._v("去砍价")]):i("div",{staticClass:"btn btn-end"},[t._v("已抢光")])]:2==s.status?[i("div",{staticClass:"btn btn-end"},[t._v("未开始")])]:3==s.status?[i("div",{staticClass:"btn btn-end"},[t._v("已结束")])]:t._e()],2)])}),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(r,d,!1,function(t){i("UZee")},null,null);s.default=c.exports},UZee:function(t,s){}});
//# sourceMappingURL=187.f28f856ac9d1e6ce9060.js.map