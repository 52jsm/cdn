webpackJsonp([180],{D9F6:function(a,i,d){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=d("Gu7T"),o=d.n(t),n=d("Dd8w"),e=d.n(n),h=d("Cz8s"),s=d("NYxO"),r=d("mzkE"),c=d("kEnp"),y=d("deIj"),l={components:{PublicHeader:h.a,PublicFooter:r.a,diy:c.a},data:function(){return{showPreLoading:!0,diydata:{diy:{data:{}},haodian:{page:2,psize:10,loading:!1,loaded:!1,finished:!1,empty:!1,data:[]},guideData:{is_show:!1},config:{},popup:{haodianSearch:!1},haodianExtra:{orderby:"distance",haodian_cid:0,haodian_child_id:0,cIndexActive:0},haodianCategory:[],showSearchSign:!1},menufooter:{},order_remind:{},showFixedSearchBar:!1,getLocationFail:!1,follow:{}}},methods:e()({},Object(s.b)(["setLocation","getLocation"]),{onLoad:function(){var a=this,i=this;Object(y.a)({vue:i,url:"haodian/index/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,psize:this.diydata.haodian.psize,orderby:i.diydata.haodianExtra.orderby,haodian_cid:i.diydata.haodianExtra.haodian_cid,haodian_child_id:i.diydata.haodianExtra.haodian_child_id,menufooter:1},success:function(d){if(i.diydata.diy=d.diy,i.diydata.config=d.config,i.diydata.cart_sum=d.cart_sum,i.util.setWXTitle(i.diydata.diy.data.page.title),i.diydata.diy.guide)if(1==i.diydata.diy.guide.params.status&&"interval"==i.diydata.diy.guide.params.show_setting){var t=a.util.getStorage("guideStorage");(!t||t&&!t.show)&&(a.util.setStorage("guideStorage",{show:1},60*i.diydata.diy.guide.params.interval_time),i.diydata.guideData.is_show=!0)}else 1==i.diydata.diy.guide.params.status&&"everytime"==i.diydata.diy.guide.params.show_setting&&(a.util.removeStorage("guideStorage"),i.diydata.guideData.is_show=!0);var n=i.diydata.config.default_location;n&&n.location_x&&(a.getLocationFail=!1,i.setLocation(n)),i.diydata.haodianCategory=[].concat(o()(d.diy.haodian.category)),i.diydata.haodianExtra.haodian_child_id=d.diy.haodian.haodian_child_id,i.diydata.haodian.data=[].concat(o()(d.diy.haodian.store)),i.diydata.haodian.loading=!1,(!d.diy.haodian.store||d.diy.haodian.store.length<i.diydata.haodian.psize)&&(i.diydata.haodian.loaded=!0),i.diydata.haodian.data.length||(i.diydata.haodian.empty=!0),i.menufooter=window.menufooter,i.order_remind=window.order,1==i.diydata.diy.is_show_kefu&&i.util.imeiqia()}})},onInit:function(){var a=this;this.getLocation(),this.locationInfo.location_x?(a.getLocationFail=!1,a.locationInfo.last_location_x=this.locationInfo.location_x,a.onLoad()):this.util.getLocation({successLocation:function(i){a.setLocation({location_x:i.location_x,location_y:i.location_y}),a.onLoad()},successAddress:function(i){a.setLocation({location_x:i.location_x,location_y:i.location_y,address:i.address})},fail:function(i){a.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),a.getLocationFail=!0,a.onLoad()}})},onToggleDiscount:function(a,i){"waimai_stores"==this.diydata.diy.data.items[i].id?this.diydata.diy.data.items[i].data[a].activity.is_show_all=!this.diydata.diy.data.items[i].data[a].activity.is_show_all:this.diydata.stores.data[a].activity.is_show_all=!this.diydata.stores.data[a].activity.is_show_all},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onGetHaodianStore:function(a){var i=this;a&&(i.diydata.haodian={page:1,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),this.util.request({url:"haodian/index/store",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,page:i.diydata.haodian.page,psize:i.diydata.haodian.psize,orderby:i.diydata.haodianExtra.orderby,haodian_cid:i.diydata.haodianExtra.haodian_cid,haodian_child_id:i.diydata.haodianExtra.haodian_child_id}}).then(function(a){var d=a.data.message.message;i.diydata.haodian.data=[].concat(o()(i.diydata.haodian.data),o()(d.store)),d.store.length<i.diydata.haodian.psize&&(i.diydata.haodian.loaded=!0),i.diydata.haodian.data.length||(i.diydata.haodian.empty=!0),i.diydata.haodian.loading=!1,i.diydata.haodian.page++})},onChangeHaodianExtra:function(a){if("filter"==a)this.diydata.popup.haodianSearch=!this.diydata.popup.haodianSearch;else{if(a==this.diydata.haodianExtra.orderby)return;this.diydata.showSearchSign=!1,this.diydata.haodianExtra.orderby=a,this.diydata.haodianExtra.haodian_cid=0,this.diydata.haodianCategory.length>0&&this.diydata.haodianCategory[0].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[0].children[0].id),this.diydata.haodianExtra.cIndexActive=0,this.onGetHaodianStore(!0)}},onClickHaodianParentCategory:function(a){this.diydata.haodianExtra.cIndexActive=a,this.diydata.haodianCategory.hasOwnProperty(a)&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[a].id,this.diydata.haodianCategory[a].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[a].children[0].id))},onClickHaodianChildCategory:function(a){a&&(this.diydata.haodianExtra.haodian_child_id=a.id,0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id))},onHaodianCategoryConfirm:function(){this.diydata.haodianExtra.haodian_child_id>0&&0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id),this.diydata.showSearchSign=!0,this.onGetHaodianStore(!0),this.onChangeHaodianExtra("filter")}}),computed:e()({},Object(s.c)(["locationInfo"])),mounted:function(){var a=this;this.onInit(),window.addEventListener("scroll",function(){var i=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.showFixedSearchBar=i>100})},activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.haodian={page:2,psize:10,loading:!1,loaded:!1,finished:!1,empty:!1,data:[]},this.diydata.haodianExtra={orderby:"distance",haodian_cid:0,haodian_child_id:0,cIndexActive:0},void this.onInit()}},g={render:function(){var a=this,i=a.$createElement,d=a._self._c||i;return d("div",{attrs:{id:"haodian-index"}},[d("public-footer",{attrs:{menufooter:a.menufooter,preLoading:a.showPreLoading}}),a._v(" "),d("div",{staticClass:"container"},[d("diy",{attrs:{diydata:a.diydata,preLoading:a.showPreLoading,getLocationFail:a.getLocationFail,showFixedSearchBar:a.showFixedSearchBar},on:{onToggleDiscount:a.onToggleDiscount,onGetHaodianStore:a.onGetHaodianStore,onCloseGuide:a.onCloseGuide,onChangeHaodianExtra:a.onChangeHaodianExtra,onClickHaodianParentCategory:a.onClickHaodianParentCategory,onClickHaodianChildCategory:a.onClickHaodianChildCategory,onHaodianCategoryConfirm:a.onHaodianCategoryConfirm}})],1)],1)},staticRenderFns:[]};var u=d("VU/8")(l,g,!1,function(a){d("e871")},null,null);i.default=u.exports},e871:function(a,i){}});
//# sourceMappingURL=180.851454a044a64c1546ef.js.map