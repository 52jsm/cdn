webpackJsonp([138],{"8obW":function(t,e){},ieF3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("woOf"),a=s.n(i),r=s("Cz8s"),o=s("mzkE"),n=s("deIj"),d={components:{PublicHeader:r.a,PublicFooter:o.a},data:function(){return{sid:0,records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},trade_types:{},filter:{items:{trade_type:""}},showPreLoading:!0,isRefresh:!1}},watch:{filter:{handler:function(t,e){this.onLoad(!0)},deep:!0}},methods:{onLoad:function(t){var e=this;Object(n.b)({vue:e,force:t,url:"kabao/index/record",data:{sid:e.sid,page:e.records.page,psize:e.records.psize},success:function(t){e.trade_types=a()({},t.trade_types)}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleTradeType:function(t){this.filter.items.trade_type!=t&&(this.filter.items.trade_type=t)}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.sid=t.sid,this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kabao-record"}},[s("public-header",{attrs:{title:"积分记录"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"tab-group"},t._l(t.trade_types,function(e,i){return s("div",{key:i,staticClass:"tab-item",class:{active:t.filter.items.trade_type==i},on:{click:function(e){return t.onToggleTradeType(i)}}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}),0),t._v(" "),s("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?s("div",{staticClass:"current-list"},[s("div",{staticClass:"no-data"},[s("div",{staticClass:"bg"}),t._v(" "),s("p",[t._v("暂无积分明细～")])])]):s("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[s("div",{staticClass:"current-list"},[s("div",{staticClass:"list-block"},[s("ul",{staticClass:"list"},t._l(t.records.data,function(e,i){return s("li",{key:i,staticClass:"item-content"},[s("div",{staticClass:"item-inner",class:{"van-hairline--top":i>0}},[s("div",{staticClass:"item-title"},[s("div",{staticClass:"item-title-top"},[t._v(t._s(e.trade_type_cn))]),t._v(" "),s("div",{staticClass:"item-title-bottom"},[t._v(t._s(e.addtime_cn))])]),t._v(" "),s("div",{staticClass:"item-after"},[s("div",{staticClass:"item-title-top",class:{"color-success":e.fee>0,"color-danger":e.fee<0}},[t._v(t._s(e.fee>0?"+"+e.fee:e.fee))]),t._v(" "),s("div",{staticClass:"item-title-bottom"},[t._v("剩余 "+t._s(e.amount)+" 积分")])])])])}),0)]),t._v(" "),t.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])])],1)],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var c=s("VU/8")(d,l,!1,function(t){s("8obW")},null,null);e.default=c.exports}});
//# sourceMappingURL=138.d8d6ce546af53c8be480.js.map