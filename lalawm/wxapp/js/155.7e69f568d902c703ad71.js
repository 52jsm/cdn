webpackJsonp([155],{Ivo1:function(t,s){},jnDM:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),a=e.n(i),n=e("Cz8s"),d=e("NPH5"),l={data:function(){return{list:{page:1,psize:4,loading:!1,finished:!1,empty:!1,data:[]},showPreLoading:!0}},components:{PublicHeader:n.a,Load:d.a},methods:{onLoad:function(){var t=this;if(this.list.finished)return!1;this.util.request({url:"creditshop/order/list",data:{page:this.list.page,psize:this.list.psize}}).then(function(s){t.showPreLoading=!1;var e=s.data.message;if(e.errno)return t.util.$toast(e.message),!1;e=e.message,t.list.data=[].concat(a()(t.list.data),a()(e)),e.length<t.list.psize&&(t.list.finished=!0,t.list.data.length||(t.list.empty=!0)),t.list.loading=!1,t.list.page++,console.log(t.list)})},onCancel:function(t){var s=this;(t=t)>0&&this.$dialog.confirm({title:"确认取消该订单吗"}).then(function(){s.util.request({url:"creditshop/order/cancel",data:{order_id:t}}).then(function(t){var e=t.data.message;if(e.errno)return s.util.$toast(e.message),!1;s.util.$toast(e.message,"refresh")})})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"creditshop-list"}},[e("public-header",{attrs:{title:"兑换列表"}}),t._v(" "),e("div",{staticClass:"content"},[t.list.empty?e("load",{attrs:{type:"loaded",text:"暂无积分兑换记录"}}):e("van-list",{attrs:{finished:t.list.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.list.loading,callback:function(s){t.$set(t.list,"loading",s)},expression:"list.loading"}},[t._l(t.list.data,function(s,i){return e("div",{key:i,staticClass:"list-item"},[e("div",{staticClass:"first-line"},[e("div",{staticClass:"order-sn"},[t._v("订单号："+t._s(s.order_sn))]),t._v(" "),t._e()]),t._v(" "),e("router-link",{staticClass:"second-line",attrs:{to:t.util.getUrl({path:"/pages/creditshop/detail",query:{id:s.id}})}},[e("div",{staticClass:"left"},[e("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"type"},["goods"==s.goods_type?e("span",[t._v("商品")]):"credit2"==s.goods_type?e("span",[t._v("余额")]):"redpacket"==s.goods_type?e("span",[t._v("红包")]):t._e()]),t._v(" "),e("div",{staticClass:"credit"},[t._v("\n\t\t\t\t\t\t\t"+t._s(s.use_credit1)+"积分\n\t\t\t\t\t\t\t"),s.use_credit2>0?[t._v("\n\t\t\t\t\t\t\t\t+ "+t._s(t.Lang.dollarSign)+t._s(s.use_credit2)+"\n\t\t\t\t\t\t\t")]:t._e()],2)])]),t._v(" "),e("div",{staticClass:"third-line border-1px-t"},[e("div",{staticClass:"code"},[t._v("兑换码："+t._s(s.code))]),t._v(" "),e("div",{staticClass:"btn-group"},[s.use_credit1>0&&0==s.is_pay&&1==s.status&&1==s.use_credit1_status?e("div",{staticClass:"btn bg-default btn-cel",on:{click:function(e){return t.onCancel(s.id)}}},[t._v("\n\t\t\t\t\t\t\t取消订单\n\t\t\t\t\t\t")]):t._e(),t._v(" "),s.use_credit2>0&&0==s.is_pay&&1==s.status?e("router-link",{staticClass:"btn bg-danger",attrs:{to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:s.id,order_type:"creditshop"}})}},[t._v("\n\t\t\t\t\t\t\t立即支付\n\t\t\t\t\t\t")]):t._e()],1)])],1)}),t._v(" "),t.list.finished?e("load",{attrs:{type:"loaded",text:"我是有底线的"}}):t._e()],2)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var o=e("VU/8")(l,r,!1,function(t){e("Ivo1")},null,null);s.default=o.exports}});
//# sourceMappingURL=155.7e69f568d902c703ad71.js.map