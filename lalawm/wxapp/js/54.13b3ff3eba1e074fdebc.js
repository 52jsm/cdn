webpackJsonp([54],{OyMg:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Cz8s"),a=i("mzkE"),r=i("deIj"),n=i("75NE"),o={components:{PublicHeader:e.a,PublicFooter:a.a,CountDown:n.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0}},methods:{onLoad:function(t){Object(r.b)({vue:this,force:t,data:{status:1,menufooter:1},url:"kanjia/record/index"})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"kanjia-record"}},[i("public-header",{attrs:{title:"我的砍价"}}),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("暂无砍价记录!")])]):i("van-list",{staticClass:"record-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,e){return 1==s.goods_status&&0!=s.total?i("div",{key:e,staticClass:"record-item flex-lr"},[i("div",{staticClass:"record-img"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"info w-100"},[i("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(s.name))]),t._v(" "),1==s.status?i("div",{staticClass:"progress"},[i("span",{staticClass:"max-price"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.old_price))]),t._v(" "),i("div",{staticClass:"progress-inner"},[i("div",{staticClass:"now-price",style:{left:s.per_price+"%"}},[t._v(t._s(t.Lang.dollarSign)+t._s(s.price))]),t._v(" "),i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",style:{width:s.per_price+"%"}})])]),t._v(" "),i("span",{staticClass:"min-price"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.new_price))])]):i("div",{staticClass:"flex"},[i("div",{staticClass:"c-danger font-16 font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.old_price))]),t._v(" "),i("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(s.new_price))])]),t._v(" "),i("div",{staticClass:"flex-lr w-100"},[s.price==s.new_price?[i("span",{staticClass:"c-danger font-14"},[t._v("砍价成功")]),t._v(" "),i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/order/create",query:{activityid:s.activityid}})}},[t._v("去下单")])]:[i("div",{staticClass:"flex"},[i("div",{staticClass:"font-12 c-gray margin-5-r"},[t._v("距结束")]),t._v(" "),i("count-down",{attrs:{endTime:s.endtime}})],1),t._v(" "),i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/share",query:{activityid:s.activityid,uid:s.uid}})}},[t._v("找人砍")])]],2)])]):t._e()}),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var d=i("VU/8")(o,l,!1,function(t){i("wG5w")},null,null);s.default=d.exports},wG5w:function(t,s){}});
//# sourceMappingURL=54.13b3ff3eba1e074fdebc.js.map