webpackJsonp([55],{FRjJ:function(t,i){},NT0y:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=o("woOf"),n=o.n(a),e=o("Dd8w"),s=o.n(e),d=o("Cz8s"),c=o("kEnp"),l=o("NYxO"),u=o("deIj"),r={data:function(){return{sid:0,diydata:{diy:{data:{items:{},page:{}}},showFixedBtn:!1},is_vip:0,islegal:!1,getLocationFail:!1,showPreLoading:!0}},components:{PublicHeader:d.a,diy:c.a},methods:s()({},Object(l.b)(["setLocation","getLocation"]),{onLoad:function(){var t=this;Object(u.a)({vue:t,url:"kabao/index/detail",data:{lat:t.locationInfo.location_x,lng:t.locationInfo.location_y,sid:t.sid},success:function(i){t.showPreLoading=!1,t.diydata.diy=t.util.extend(t.diydata.diy,i.diy),t.is_vip=t.diydata.diy.data.page.is_vip,t.islegal=!0}})},onToggleDiscount:function(t,i){console.log(i),"vipstore"==this.diydata.diy.data.items[i].id&&(this.diydata.diy.data.items[i].params.store.activity.is_show_all=!this.diydata.diy.data.items[i].params.store.activity.is_show_all),this.diydata=n()({},this.diydata)},onExchangeVipCoupon:function(t){var i=this;if(!i.islegal)return!1;i.islegal=!1,Object(u.c)({vue:i,url:"kabao/index/exchange",data:{coupon_id:t.couponId},success:function(t){i.util.$toast(t),i.islegal=!0},fail:function(t){i.util.$toast(t),i.islegal=!0}})},onInit:function(){var t=this;this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(i){t.setLocation({location_x:i.location_x,location_y:i.location_y}),t.onLoad()},successAddress:function(i){t.setLocation({location_x:i.location_x,location_y:i.location_y,address:i.address})},fail:function(i){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})}}),mounted:function(){var t=this,i=t.util.parseQuery(t.$route.query);t.sid=i.sid>0?i.sid:t.sid,t.onInit(),window.addEventListener("scroll",function(){if(t.is_vip)return!0;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)>210?t.diydata.showFixedBtn||(t.diydata.showFixedBtn=!0):t.diydata.showFixedBtn&&(t.diydata.showFixedBtn=!1)})},computed:s()({},Object(l.c)(["locationInfo"]))},h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"kabao-detail"}},[i("public-header",{attrs:{title:"会员卡详情"}}),this._v(" "),i("div",{staticClass:"container bg-default font-14",style:{paddingBottom:this.diydata.showFixedBtn?"74px":"0px"}},[i("diy",{attrs:{diydata:this.diydata,preLoading:this.showPreLoading,getLocationFail:this.getLocationFail},on:{onToggleDiscount:this.onToggleDiscount,onExchangeVipCoupon:this.onExchangeVipCoupon}})],1)],1)},staticRenderFns:[]};var y=o("VU/8")(r,h,!1,function(t){o("FRjJ")},null,null);i.default=y.exports}});
//# sourceMappingURL=55.a14897c28ba22b02637b.js.map