webpackJsonp([42],{G4nj:function(e,t){},VZ3d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("woOf"),s=a.n(o),n=a("Dd8w"),i=a.n(n),r=a("Cz8s"),d=a("mzkE"),u=a("kEnp"),l=a("NYxO"),c=a("5ryX"),m={data:function(){return{showPreLoading:!0,styleContent:"#fff",is_grant:0,title:"",active:1,diydata:{diy:{data:{}},superRedpacketData:{errno:0,message:{},is_show:!0}},gconfig:{mall:{}},store:{},menufooter:{},menu:{css:{},params:{},data:{},position:{left:"inherit",bottom:"80px",right:"15px"}},storeCouponTop:0,storeOnsaleTop:0,storeEvaluateTop:0}},components:{PublicHeader:r.a,PublicFooter:d.a,diy:u.a,navigator:c.a},methods:i()({},Object(l.b)(["setLocation","getLocation"]),{onLoad:function(){var e=this;this.util.request({url:"wmall/store/home/index",data:{sid:this.sid||3,gconfig:1,menufooter:1}}).then(function(t){e.showPreLoading=!1,e.gconfig=window.gconfig;var a=t.data.message;a.errno?e.$toast(a.message):(e.diydata.diy.data=a.message.homepage,e.styleContent={"background-color":e.diydata.diy.data.page.background},e.diydata.superRedpacketData=a.message.superRedpacketData,e.diydata.superRedpacketData.is_show=!0,e.title=e.diydata.diy.data.page.title||"门店首页",e.util.setWXTitle(e.title),e.menufooter=window.menufooter,e.store=a.message.store,e.store.menu&&e.store.menu.data&&(e.menu=e.util.extend(e.menu,e.store.menu.data)),e.$nextTick(function(){e.onCalculateStoreNavHeight()}))})},onChangeTab:function(e){if(0==e)var t=this.storeCouponTop-46;else if(1==e)t=this.storeOnsaleTop-46;else if(2==e)t=this.storeEvaluateTop-46;window.scrollTo(0,t)},getCoupon:function(){var e=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(t){var a=t.data.message;0==a.errno?(e.util.$toast(a.message,"",1e3),e.is_grant=1):e.util.$toast("领取失败","",1e3)})},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=s()({},this.diydata.superRedpacketData)},onCalculateStoreNavHeight:function(){var e=document.getElementsByClassName("diy-store-coupon");e&&e.length>0&&(this.storeCouponTop=document.getElementsByClassName("diy-store-coupon")[0].offsetTop);var t=document.getElementsByClassName("diy-store-onsale");t&&t.length>0&&(this.storeOnsaleTop=document.getElementsByClassName("diy-store-onsale")[0].offsetTop);var a=document.getElementsByClassName("diy-store-evaluate");a&&a.length>0&&(this.storeEvaluateTop=document.getElementsByClassName("diy-store-evaluate")[0].offsetTop)}}),created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)},mounted:function(){this.onLoad()}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"store-home"}},[a("public-header",{attrs:{title:e.title}}),e._v(" "),e.gconfig&&2==e.gconfig.mall.version?a("public-footer",{attrs:{preLoading:e.showPreLoading,menufooter:e.menufooter}}):e._e(),e._v(" "),a("div",{staticClass:"container",style:e.styleContent},[a("diy",{attrs:{diydata:e.diydata,active:e.active,is_grant:e.is_grant,preLoading:e.showPreLoading},on:{onChangeTab:e.onChangeTab,getCoupon:e.getCoupon,onCloseRedpacket:e.onCloseRedpacket}})],1),e._v(" "),e.store.menu&&e.store.menu.path&&1==e.store.menu.path.home?[a("navigator",{attrs:{menu:e.menu}})]:e._e()],2)},staticRenderFns:[]};var p=a("VU/8")(m,g,!1,function(e){a("G4nj")},null,null);t.default=p.exports}});
//# sourceMappingURL=42.bf6e763c2d7d1fe49cc3.js.map