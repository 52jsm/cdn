webpackJsonp([7],{J0CT:function(t,a){},kYuw:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=i("Gu7T"),e=i.n(o),d=i("mvHQ"),s=i.n(d),n=i("woOf"),r=i.n(n),l=i("Dd8w"),h=i.n(l),c=i("NYxO"),g=i("Cz8s"),y=i("mzkE"),u=i("fgl9"),f=i("kEnp"),p=i("qBcp"),m={name:"diyIndex",data:function(){return{title:"",id:0,getLocationFail:!1,showPreLoading:!0,styleContent:"#fff",diydata:{diy:{data:{}},storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[],filter:{cid:0,child_id:0,categorySelectedId:0}},popup:{storeSearch:!1,haodianSearch:!1,serviceQrcode:!1},superRedpacketData:{},guideData:{is_show:!1},tongcheng:{get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},haodian:{page:2,psize:15,loading:!1,loaded:!1,finished:!1,empty:!1,data:[]},haodianExtra:{orderby:"distance",haodian_cid:0,haodian_child_id:0,cIndexActive:0},haodianCategory:[],showSearchSign:!1},showFixedSearchBar:!1,goodsTabActive:0,goodsTabFixed:0,goodsTabHeights:[],goodsTabOffsetTop:0,storesTabActive:0,storesTabActiveReal:0,storesTabFixed:0,storesTabHeights:[],storesTabOffsetTop:0,followHeight:0,scrollFromClickTab:!1,menufooter:{},follow:{},followShow:!1,userAgreement:""}},components:{PublicHeader:g.a,PublicFooter:y.a,diy:f.a,follow:u.a,userAgreement:p.a},watch:{$route:function(){this.id=this.$route.query.id},id:function(){this.onInit()}},methods:h()({},Object(c.b)(["setLocation","getLocation","setState"]),{onInit:function(){var t=this;this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y}),t.onLoad()},successAddress:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y,address:a.address})},fail:function(a){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})},onChangeStoreCategory:function(t){if(1!=this.diy.is_has_allstore||!t.id||t.id==this.diydata.stores.filter.categorySelectedId)return!1;this.diydata.stores.filter.child_id=t.parentid>0?t.id:0,this.diydata.stores.filter.categorySelectedId=t.id,this.onGetStore(!0)},onToggleDiscount:function(t,a){"waimai_stores"==this.diydata.diy.data.items[a].id?this.diydata.diy.data.items[a].data[t].activity.is_show_all=!this.diydata.diy.data.items[a].data[t].activity.is_show_all:this.diydata.stores.data[t].activity.is_show_all=!this.diydata.stores.data[t].activity.is_show_all,this.diydata=r()({},this.diydata)},onToggleStoresTabDiscount:function(t,a,i){this.diydata.diy.data.items[i].data[t].stores[a].activity.is_show_all=!this.diydata.diy.data.items[i].data[t].stores[a].activity.is_show_all},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=r()({},this.diydata.superRedpacketData)},onChangeStoreExtra:function(t){"multiple"==t?(this.diydata.storeExtra.multiple=!0,this.diydata.storeExtra.filter=!1):(this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter=!0),this.diydata.popup.storeSearch=!0},onStoreOrderby:function(t,a,i){if("order"==t)"svipRedpacket"==a?this.diydata.storeExtra.condition.dis=a:(this.diydata.storeExtra.condition.order=a,this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter_title="sailed"!=a&&"distance"!=a?i:"综合排序");else if("discounts"==t){if(this.diydata.storeExtra.condition.dis==a&&(a=""),this.diydata.storeExtra.condition.dis=a,"refresh"!=i)return!1}else{if("mode"==t)return this.diydata.storeExtra.condition.mode==a&&(a=""),this.diydata.storeExtra.condition.mode=a,!1;"clear"==t?(this.diydata.storeExtra.condition.dis="",this.diydata.storeExtra.condition.order="",this.diydata.storeExtra.condition.mode="",this.diydata.storeExtra.filter=!1,this.diydata.storeExtra.filter_title="综合排序"):"finish"==t&&(this.diydata.storeExtra.filter=!1)}this.diydata.popup.storeSearch=!1,this.onGetStore(!0)},onGetStore:function(t){var a=this,i=this;t&&(i.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0,filter:i.diydata.stores.filter}),i.diydata.stores.loading=!0,this.util.request({url:"wmall/home/index/store",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,page:i.diydata.stores.page,psize:i.diydata.stores.psize,cid:i.diydata.stores.filter.cid,child_id:i.diydata.stores.filter.child_id,condition:s()(i.diydata.storeExtra.condition)}}).then(function(o){var d=o.data.message.message;t&&(i.diydata.stores.data=[]),i.diydata.stores.data=[].concat(e()(a.diydata.stores.data),e()(d.stores)),d.pagetotal<=i.diydata.stores.page&&(i.diydata.stores.loaded=1,i.diydata.stores.data.length||(i.diydata.stores.empty=!0),i.diydata.stores.finished=!0),i.diydata.stores.loading=!1,i.diydata.stores.page++,i.diydata.stores.loaded||d.stores.length||a.onGetStore()})},onGetInformation:function(t){var a=this,i=this;t&&(i.diydata.tongcheng={page:1,psize:10,loaded:0,empty:!1,loading:!0,data:[]}),i.diydata.tongcheng.loading=!0,this.util.request({url:"diypage/diy/information",data:{page:i.diydata.tongcheng.page,psize:i.diydata.tongcheng.psize}}).then(function(t){var o=t.data.message.message;i.diydata.tongcheng.data=[].concat(e()(a.diydata.tongcheng.data),e()(o.informations)),o.informations.length<i.diydata.tongcheng.psize&&(i.diydata.tongcheng.loaded=1,i.diydata.tongcheng.data.length||(i.diydata.tongcheng.empty=!0),i.diydata.tongcheng.finished=!0),i.diydata.tongcheng.loading=!1,i.diydata.tongcheng.page++})},onLoad:function(){var t=this;this.util.request({url:"diypage/diy",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,id:this.id,menufooter:1}}).then(function(a){var i=t;i.showPreLoading=!1;var o=a.data.message;if(o.errno)i.util.$toast(o.message);else{if(i.diydata.config=o.message.config,i.diydata.diy=o.message.diy,i.diy=o.message.diy,i.diydata.diy.guide)if(1==i.diydata.diy.guide.params.status&&"interval"==i.diydata.diy.guide.params.show_setting){var d=t.util.getStorage("guideStorage");(!d||d&&!d.show)&&(t.util.setStorage("guideStorage",{show:1},60*i.diydata.diy.guide.params.interval_time),i.diydata.guideData.is_show=!0)}else 1==i.diydata.diy.guide.params.status&&"everytime"==i.diydata.diy.guide.params.show_setting&&(t.util.removeStorage("guideStorage"),i.diydata.guideData.is_show=!0);var s=o.message.default_location;if(s&&s.location_x&&(t.getLocationFail=!1,i.setLocation(s)),i.diydata.diy.tongcheng&&(i.diydata.tongcheng.data=[].concat(e()(i.diydata.diy.tongcheng.informationdata)),0==i.diydata.tongcheng.data.length&&(i.diydata.tongcheng.empty=!0),i.diydata.tongcheng.loading=!1,i.diydata.tongcheng.has_get_all=i.diydata.diy.tongcheng.has_get_all,delete i.diydata.diy.tongcheng,1==i.diydata.tongcheng.has_get_all&&(i.diydata.tongcheng.finished=!0,i.diydata.tongcheng.loaded=!0)),i.diydata.diy.haodian&&(i.diydata.haodianCategory=[].concat(e()(i.diydata.diy.haodian.category)),i.diydata.haodianExtra.haodian_child_id=i.diydata.diy.haodian.haodian_child_id,i.diydata.haodian.data=[].concat(e()(i.diydata.diy.haodian.store)),i.diydata.haodian.loading=!1,(!i.diydata.diy.haodian.store||i.diydata.diy.haodian.store.length<i.diydata.haodian.psize)&&(i.diydata.haodian.loaded=!0),i.diydata.haodian.data.length||(i.diydata.haodian.empty=!0)),i.title=o.message.diy.data.page.title,i.util.setWXTitle(i.title),i.diydata.superRedpacketData=o.message.superRedpacketData,i.diydata.superRedpacketData.is_show=!0,i.diydata.cart_sum=o.message.cart_sum,i.userAgreement=o.message.userAgreement,i.menufooter=window.menufooter,i.follow=window.follow,1==i.diy.data.page.followbar&&i.follow&&1==i.follow.status&&(i.followShow=!0),i.styleContent={"background-color":t.diydata.diy.data.page.background},1==i.diy.is_show_kefu&&i.util.imeiqia(),1==i.diy.is_has_allstore){if(i.diydata.stores.loaded=!1,i.diydata.stores.finished=!1,i.diydata.stores.empty=!1,i.diydata.stores.page=1,i.diydata.stores.filter.cid=i.diy.cid,i.diydata.stores.filter.categorySelectedId=i.diy.cid,(1==t.util.getStorage("itime")||1==t.util.getStorage("jskey"))&&o.message.stores.stores.length>10){var n=Math.floor(5*Math.random());o.message.stores.stores=o.message.stores.stores.slice(2,n)}i.diydata.stores.data=[].concat(e()(o.message.stores.stores)),o.message.stores.pagetotal<=i.diydata.stores.page&&(i.diydata.stores.loaded=1,i.diydata.stores.data.length||(i.diydata.stores.empty=!0),i.diydata.stores.finished=!0),i.diydata.stores.loading=!1,i.diydata.stores.page++,i.diydata.stores.loaded||o.message.stores.stores.length||i.onGetStore()}1==i.diy.is_has_goodsTab&&t.$nextTick(function(){t.onCalculateGoodsTabItemHeight()}),1==i.diy.is_has_storesTab&&t.$nextTick(function(){t.onCalculateStoresTabItemHeight()})}})},onGetCartNums:function(){var t=this;this.util.request({url:"wmall/home/index/cart"}).then(function(a){var i=a.data.message;i.errno?t.util.$toast(i.message):t.diydata.cart_sum=i.message.cart_sum})},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onToggleInformation:function(t){this.diydata.tongcheng.data[t].showall=!this.diydata.tongcheng.data[t].showall},onGetHaodianStore:function(t){var a=this;t&&(a.diydata.haodian={page:1,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),this.util.request({url:"haodian/index/store",data:{lat:a.locationInfo.location_x,lng:a.locationInfo.location_y,page:a.diydata.haodian.page,psize:a.diydata.haodian.psize,orderby:a.diydata.haodianExtra.orderby,haodian_cid:a.diydata.haodianExtra.haodian_cid,haodian_child_id:a.diydata.haodianExtra.haodian_child_id}}).then(function(t){var i=t.data.message.message;a.diydata.haodian.data=[].concat(e()(a.diydata.haodian.data),e()(i.store)),i.store.length<a.diydata.haodian.psize&&(a.diydata.haodian.loaded=!0),a.diydata.haodian.data.length||(a.diydata.haodian.empty=!0),a.diydata.haodian.loading=!1,a.diydata.haodian.page++})},onChangeHaodianExtra:function(t){if("filter"==t)this.diydata.popup.haodianSearch=!this.diydata.popup.haodianSearch;else{if(t==this.diydata.haodianExtra.orderby)return;this.diydata.showSearchSign=!1,this.diydata.haodianExtra.orderby=t,this.diydata.haodianExtra.haodian_cid=0,this.diydata.haodianCategory.length>0&&this.diydata.haodianCategory[0].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[0].children[0].id),this.diydata.haodianExtra.cIndexActive=0,this.onGetHaodianStore(!0)}},onClickHaodianParentCategory:function(t){this.diydata.haodianExtra.cIndexActive=t,this.diydata.haodianCategory.hasOwnProperty(t)&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[t].id,this.diydata.haodianCategory[t].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[t].children[0].id))},onClickHaodianChildCategory:function(t){t&&(this.diydata.haodianExtra.haodian_child_id=t.id,0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id))},onHaodianCategoryConfirm:function(){this.diydata.haodianExtra.haodian_child_id>0&&0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id),this.diydata.showSearchSign=!0,this.onGetHaodianStore(!0),this.onChangeHaodianExtra("filter")},onToggleService:function(){this.diydata.popup.serviceQrcode=!this.diydata.popup.serviceQrcode},onChangeFollowStatus:function(t){t.status||(this.followHeight=0)},onCalculateGoodsTabItemHeight:function(){this.goodsTabOffsetTop=document.getElementsByClassName("goods-tab-inner")[0].offsetTop,this.goodsTabOffsetTop-=document.getElementsByClassName("van-tabs")[0].clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.goodsTabOffsetTop-=this.followHeight);for(var t=document.getElementsByClassName("goods-tab-item"),a=this.goodsTabOffsetTop,i=[],o=0;o<t.length;o++){a+=t[o].clientHeight,i.push(a)}this.goodsTabHeights=i},onToggleGoodsTab:function(t){this.scrollFromClickTab=!0;var a=this.goodsTabOffsetTop-44;t.index>=1&&(a=this.goodsTabHeights[t.index-1]-44),a-=this.followHeight,this.diydata.diy.is_has_location&&a>100?(this.goodsTabFixed=2,a-=52):this.util.isWeixin()?this.goodsTabFixed=1:(this.goodsTabFixed=3,a-=46),window.scrollTo(0,a),this.goodsTabActive=t.index},onCalculateStoresTabItemHeight:function(){this.storesTabOffsetTop=document.getElementsByClassName("stores-tab-group")[0].offsetTop,this.storesTabOffsetTop-=document.getElementById("stores-tab").clientHeight-44,document.getElementById("follow")&&(this.followHeight=document.getElementsByClassName("follow-tips")[0].clientHeight,this.storesTabOffsetTop-=this.followHeight);for(var t=document.getElementsByClassName("stores-tab-list"),a=this.storesTabOffsetTop,i=[],o=0;o<t.length;o++){a+=t[o].clientHeight,i.push(a)}this.storesTabHeights=i},onToggleStoresTab:function(t){this.scrollFromClickTab=!0;var a=this.storesTabOffsetTop-44;t.index>=1&&(a=this.storesTabHeights[t.index-1]-44),a-=this.followHeight,this.diydata.diy.is_has_location&&a>100?(this.storesTabFixed=2,a-=52):this.util.isWeixin()?this.storesTabFixed=1:(this.storesTabFixed=3,a-=46),window.scrollTo(0,a),this.storesTabActive=t.index}}),created:function(){this.$route.query.id?this.id=this.$route.query.id:this.util.$toast("页面不存在！")},computed:h()({},Object(c.c)(["locationInfo"])),activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.storeExtra={condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},void this.onInit();this.onGetCartNums()},mounted:function(){var t=this;window.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(t.showFixedSearchBar=a>100,1==t.diy.is_has_goodsTab){var i=44;if(t.util.isWeixin()||(i=90),t.diydata.diy.is_has_location&&t.showFixedSearchBar&&(i=96),(a=Math.ceil(a+i))>=t.goodsTabOffsetTop?t.diydata.diy.is_has_location&&t.showFixedSearchBar?t.goodsTabFixed=2:t.util.isWeixin()?t.goodsTabFixed=1:t.goodsTabFixed=3:t.goodsTabFixed=0,!t.scrollFromClickTab)for(var o=t.goodsTabHeights,e=o.length,d=0;d<e;d++){if(!o[d+1]){t.goodsTabActive=d;break}if(a<o[d]){t.goodsTabActive=d;break}if(a>=o[d]&&a<o[d+1]){t.goodsTabActive=d+1;break}}}if(1==t.diy.is_has_storesTab){i=44;if(t.util.isWeixin()||(i=90),t.diydata.diy.is_has_location&&t.showFixedSearchBar&&(i=96),(a=Math.ceil(a+i))>=t.storesTabOffsetTop?t.diydata.diy.is_has_location&&t.showFixedSearchBar?t.storesTabFixed=2:t.util.isWeixin()?t.storesTabFixed=1:t.storesTabFixed=3:t.storesTabFixed=0,!t.scrollFromClickTab){var s=t.storesTabHeights;for(e=s.length,d=0;d<e;d++){if(!s[d+1]){t.storesTabActive=d;break}if(a<s[d]){t.storesTabActive=d;break}if(a>=s[d]&&a<s[d+1]){t.storesTabActive=d+1;break}}}}t.scrollFromClickTab=!1})}},_={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"diy"}},[t.util.isGlala()&&!t.util.getStorage("userAgreement")?i("user-agreement",{attrs:{agreement:t.userAgreement}}):t._e(),t._v(" "),t.followShow?i("follow",{attrs:{follow:t.follow},on:{changeStatus:t.onChangeFollowStatus}}):t._e(),t._v(" "),t.isWeixin?t._e():i("public-header",{attrs:{title:t.title}}),t._v(" "),t.menufooter?i("public-footer",{attrs:{menufooter:t.menufooter}}):t._e(),t._v(" "),i("div",{staticClass:"container",style:t.styleContent},[i("diy",{attrs:{diydata:t.diydata,preLoading:t.showPreLoading,getLocationFail:t.getLocationFail,showFixedSearchBar:t.showFixedSearchBar,goodsTabActive:t.goodsTabActive,goodsTabFixed:t.goodsTabFixed,storesTabActive:t.storesTabActive,storesTabFixed:t.storesTabFixed},on:{onToggleDiscount:t.onToggleDiscount,onToggleStoresTabDiscount:t.onToggleStoresTabDiscount,onChangeStoreExtra:t.onChangeStoreExtra,onStoreOrderby:t.onStoreOrderby,onGetStore:t.onGetStore,onCloseRedpacket:t.onCloseRedpacket,onCloseGuide:t.onCloseGuide,onGetInformation:t.onGetInformation,onToggleInformation:t.onToggleInformation,onGetHaodianStore:t.onGetHaodianStore,onChangeHaodianExtra:t.onChangeHaodianExtra,onClickHaodianParentCategory:t.onClickHaodianParentCategory,onClickHaodianChildCategory:t.onClickHaodianChildCategory,onHaodianCategoryConfirm:t.onHaodianCategoryConfirm,onToggleService:t.onToggleService,onToggleGoodsTab:t.onToggleGoodsTab,onToggleStoresTab:t.onToggleStoresTab,onChangeStoreCategory:t.onChangeStoreCategory}})],1)],1)},staticRenderFns:[]};var T=i("VU/8")(m,_,!1,function(t){i("J0CT")},null,null);a.default=T.exports},qBcp:function(t,a,i){"use strict";var o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"user-agreement"}},[i("van-popup",{model:{value:t.popupStatus,callback:function(a){t.popupStatus=a},expression:"popupStatus"}},[i("div",{staticClass:"popup-title van-hairline--bottom"},[i("span",{staticClass:"font-bold"},[t._v("用户服务协议和隐私政策概要")]),t._v(" "),t._e()]),t._v(" "),i("div",{staticClass:"popup-content",domProps:{innerHTML:t._s(t.agreement)}}),t._v(" "),i("ul",{staticClass:"popup-footer flex-lr font-15 van-hairline--top"},[i("li",{staticClass:"c-gray van-hairline--right",on:{click:t.onCancel}},[t._v("暂不使用")]),t._v(" "),i("li",{staticClass:"c-danger",on:{click:t.onConfirm}},[t._v("同意")])])])],1)},staticRenderFns:[]};var e=i("VU/8")({props:{agreement:""},data:function(){return{popupStatus:!0}},methods:{onTogglePopupStatus:function(){this.popupStatus=!this.popupStatus},onCancel:function(){this.util.closeApp(),this.onTogglePopupStatus()},onConfirm:function(){this.util.setStorage("userAgreement",1),this.onTogglePopupStatus()}}},o,!1,function(t){i("wHI3")},null,null);a.a=e.exports},wHI3:function(t,a){}});
//# sourceMappingURL=7.01b543ca1f2f32418873.js.map