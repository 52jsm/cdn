webpackJsonp([159],{"2YCA":function(t,e){},RJR9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Cz8s"),i=s("mzkE"),a=s("deIj"),n={components:{PublicHeader:o.a,PublicFooter:i.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},filter:{items:{type:""}},showPreLoading:!0,isRefresh:!1,menufooter:{}}},methods:{onLoad:function(t){var e=this;Object(a.b)({vue:e,force:t,url:"gohome/favorite/list",data:{menufooter:1},success:function(t){e.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"gohome-favor"}},[s("public-header",{attrs:{title:"我的收藏"}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("van-pull-refresh",{on:{refresh:function(e){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("没有符合条件的数据!")])]):s("van-list",{staticClass:"favorite-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[t._l(t.records.data,function(e,o){return s("router-link",{key:e.id,staticClass:"favorite-item flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/"+e.type+"/detail",query:{id:e.goods_id}})}},[s("div",{staticClass:"favorite-img"},[s("img",{staticClass:"img-100",attrs:{src:e.goods.thumb,alt:""}}),t._v(" "),"pintuan"==e.type?s("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.goods.peoplenum)+"人团\n\t\t\t\t\t\t")]):t._e()]),t._v(" "),s("div",{staticClass:"favorite-info"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"store-name"},[t._v(t._s(e.store.title))]),t._v(" "),s("div",{staticClass:"order-type",class:e.type_all.css},[t._v(t._s(e.type_all.text))])]),t._v(" "),s("div",{staticClass:"goods-name"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.goods.name)+"\n\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"flex goods-price"},[s("div",{staticClass:"c-danger font-16 font-bold"},[t._v(t._s(t.Lang.dollarSign)+t._s(e.goods.price))]),t._v(" "),s("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v(t._s(t.Lang.dollarSign)+t._s(e.goods.oldprice))])])])])}),t._v(" "),t.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(t){s("2YCA")},null,null);e.default=l.exports}});
//# sourceMappingURL=159.ef31afe34b77232623c7.js.map