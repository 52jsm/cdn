webpackJsonp([115],{XP1I:function(e,t){},eabg:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Cz8s"),a=s("deIj"),d={data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},showPreLoading:!0}},components:{PublicHeader:i.a},methods:{onLoad:function(){Object(a.b)({vue:this,url:"vipRedpacket/index/record",data:{page:this.records.page,psize:this.records.psize},success:function(e){}})}},mounted:function(){this.onLoad()}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"vip-redpacket-record"}},[e.isWeixin?e._e():s("public-header",{attrs:{title:"购买记录"}}),e._v(" "),s("div",{staticClass:"content"},[e.records.empty?e._e():s("van-list",{attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(t){e.$set(e.records,"loading",t)},expression:"records.loading"}},[e._l(e.records.data,function(t,i){return s("div",{key:i,staticClass:"record-item"},[s("div",{staticClass:"inner flex-lr van-hairline--bottom"},[s("div",[s("div",[e._v(e._s(t.title))]),e._v(" "),s("div",{staticClass:"font-12 c-gray margin-5-t"},[e._v("购买日期："+e._s(t.addtime_cn))])]),e._v(" "),s("div",{staticClass:"c-danger"},[e._v("\n\t\t\t\t\t\t"+e._s(e.Lang.dollarSign)),s("span",{staticClass:"font-20"},[e._v(e._s(t.final_fee))])])])])}),e._v(" "),e.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2),e._v(" "),e.records.empty?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[e._v("暂无购买记录")])]):e._e()],1),e._v(" "),e.showPreLoading?s("iloading"):e._e()],1)},staticRenderFns:[]};var o=s("VU/8")(d,n,!1,function(e){s("XP1I")},null,null);t.default=o.exports}});
//# sourceMappingURL=115.2c0688907de474d70efc.js.map