webpackJsonp([193],{"0Uzo":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Cz8s"),e=i("mzkE"),n=i("deIj"),o={components:{PublicHeader:a.a,PublicFooter:e.a},data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},menufooter:{},isRefresh:!1,showPreLoading:!0}},methods:{onLoad:function(t){var s=this;Object(n.b)({vue:s,force:t,url:"pintuan/index/index",data:{cateid:s.cid,menufooter:1},recordsName:"goods",success:function(t){s.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)}},created:function(){this.$route.query&&this.$route.query.cid>0&&(this.cid=this.$route.query.cid)},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"pintuan-category"}},[i("public-header",{attrs:{title:"钜惠拼团"}}),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:function(s){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无拼团活动!")])]):[i("div",{staticClass:"padding-15-t padding-15-lr font-14 c-danger bg-default"},[t._v("拼团购物更优惠")]),t._v(" "),i("van-list",{staticClass:"activity-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},t._l(t.records.data,function(s,a){return i("div",{key:s.id,staticClass:"activity-item bg-default flex-lr padding-15 van-hairline--bottom"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),i("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.peoplenum)+"人团\n\t\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"font-14 w-100"},[i("div",{staticClass:"flex-lr margin-10-b"},[i("div",{staticClass:"font-500"},[t._v(t._s(s.store.title))]),t._v(" "),t._e()]),t._v(" "),i("p",[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"flex-lr-bottom w-100"},[i("div",[i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v(t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),2==s.status?[i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",staticStyle:{width:"0%"}}),t._v(" "),i("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团0份")])])]:[i("div",{staticClass:"bar",class:{"bar-end":0==s.total}},[-1!=s.total?i("div",{staticClass:"bar-inner",style:"width:"+s.sailed_percent+"%"}):t._e(),t._v(" "),i("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团"+t._s(s.falesailed_total)+"份")])])]],2),t._v(" "),2==s.status?i("div",{staticClass:"btn btn-end"},[t._v("未开始")]):3==s.status?i("div",{staticClass:"btn btn-end"},[t._v("已结束")]):1==s.status?[0==s.total?i("div",{staticClass:"btn btn-end"},[t._v("已抢完")]):i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:s.id}})}},[t._v("去拼团")])]:t._e()],2)])])}),0),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()]],2)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(o,d,!1,function(t){i("rhHz")},null,null);s.default=r.exports},rhHz:function(t,s){}});
//# sourceMappingURL=193.d0fb196b9167e2dd208a.js.map