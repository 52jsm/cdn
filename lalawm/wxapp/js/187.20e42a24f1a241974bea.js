webpackJsonp([187],{"6sao":function(t,s){},mH2u:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("woOf"),i=e.n(a),n=e("Cz8s"),r=e("mzkE"),o=e("deIj"),l={components:{PublicHeader:n.a,PublicFooter:r.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},cateid:0,category:{title:""},isRefresh:!1,showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(t){var s=this;Object(o.b)({vue:s,force:t,url:"kanjia/activity/index",data:{menufooter:1,cateid:s.cateid},success:function(t){s.menufooter=window.menufooter,s.category=i()(s.category,t.category),s.util.setWXTitle(s.category.title)}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.$route.query&&this.$route.query.cateid>0&&(this.cateid=this.$route.query.cateid),this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"kanjia-category"}},[e("public-header",{attrs:{title:t.category.title}}),t._v(" "),e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),e("div",{staticClass:"content"},[e("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?t._e():e("div",{staticClass:"padding-15-tb padding-10-lr font-14 c-danger bg-default"},[t._v("召集好友来砍价")]),t._v(" "),t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("暂无砍价活动!")])]):e("van-list",{staticClass:"activity-list padding-10-b",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,a){return e("div",{key:s.id,staticClass:"activity-item van-hairline--top"},[e("div",{staticClass:"thumb"},[e("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),3==s.status?e("div",{staticClass:"end-bg"},[e("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),e("div",{staticClass:"title"},[t._v("【邀请好友帮忙砍价】"+t._s(s.name))]),t._v(" "),e("div",{staticClass:"flex-lr"},[e("div",{staticClass:"flex-lr"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"c-danger font-16 font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))]),t._v(" "),e("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.oldprice))])]),t._v(" "),s.userlist&&s.userlist.length>0?e("div",{staticClass:"buy-history flex"},[e("div",{staticClass:"avatar-list"},t._l(s.userlist,function(s,a){return a<3?e("img",{key:a,attrs:{src:s.avatar}}):t._e()}),0),t._v(" "),e("div",{staticClass:"font-12 c-gray margin-5-l"},[t._v(t._s(s.userlist.length)+"人参与")])]):t._e()]),t._v(" "),1==s.status?[0!=s.total?e("router-link",{staticClass:"btn btn-detail",attrs:{to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:s.id}}),tag:"div"}},[t._v("去砍价")]):e("div",{staticClass:"btn btn-end"},[t._v("已抢光")])]:2==s.status?[e("div",{staticClass:"btn btn-end"},[t._v("未开始")])]:3==s.status?[e("div",{staticClass:"btn btn-end"},[t._v("已结束")])]:t._e()],2)])}),t._v(" "),t.records.finished?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(l,d,!1,function(t){e("6sao")},null,null);s.default=c.exports}});
//# sourceMappingURL=187.20e42a24f1a241974bea.js.map