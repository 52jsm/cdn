webpackJsonp([153],{"U6+M":function(e,t){},uRgP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Gu7T"),s=a.n(i),o=a("mvHQ"),n=a.n(o),l=a("Cz8s"),r=a("q0vl"),c=a("+TmT"),u=a("P8xa"),g=a("WkcG"),d={components:{PublicHeader:l.a,Uploader:c.a,Agreement:r.a,imessage:u.a,failedTips:g.a},data:function(){return{showPreLoading:!0,submitting:!1,store:{title:"",telephone:"",address:"",content:"",haodian_cid:0,haodian_child_id:0,logo:"",category_cn1:"",category_cn2:""},qualification:[],logo:[],thumbs:[],popupStatus:{category:!1,agreement:!1,time:!1},columns:[{values:[],defaultIndex:0},{values:[],defaultIndex:0}],meal:{selectIndex:0,price:0,days:0},config:{},agreement:{title:"",value:""},message:{type:"",message:"",description:"",redirect:"",btnText:""},check:1,currentDate:"08:00",failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"},getLocationStatus:!0}},methods:{onTogglePopup:function(e){this.popupStatus[e]=!this.popupStatus[e]},onConfirmCategory:function(e){e[1]?(this.store.haodian_cid=e[1].parentid,this.store.haodian_child_id=e[1].id,this.store.category_cn=e[0].title+"-"+e[1].title):(this.store.haodian_cid=e[0].id,this.store.haodian_child_id=0,this.store.category_cn=e[0].title),this.onTogglePopup("category")},onChangeCategory:function(e,t){t[0].child&&t[0].child.length>0?e.setColumnValues(1,t[0].child):e.setColumnValues(1,[])},onSelectMeal:function(e){this.meal.selectIndex=e;var t=this.config.meal[e];this.meal.price=t.price,this.meal.days=t.time},onCalculate:function(){var e=this;this.util.request({url:"haodian/settle/calculate",data:{meal_index:this.meal.selectIndex}}).then(function(t){t.data.message;e.meal.price=t.data.message.message.price})},onChangeLogo:function(e){e[0]?this.store.logo=e[0].filename:this.store.logo=""},onChangeThumbs:function(e){this.thumbs=e},onChangeQualification:function(e){this.qualification=e},onSubmit:function(){var e=this;return!this.submitting&&(this.store.telephone?this.util.isValidMobile(this.store.telephone)?this.store.address?this.store.title?this.store.haodian_cid?1!=this.config.qualification_verify_status||this.qualification[0]&&this.qualification[0].filename?(this.submitting=!0,void this.util.request({url:"haodian/settle/store",method:"POST",data:{store:n()(this.store),thumbs:this.thumbs,qualification:this.qualification,meal:this.meal}}).then(function(t){var a=t.data.message;if(-1==a.errno)return e.$toast(a.message),e.submitting=!1,!1;-1006==a.errno&&e.util.$toast("请支付",e.util.getUrl({path:"pages/public/pay",query:{order_id:a.message,order_type:"haodian"}}),1e3,"replace"),e.onLoad()})):(this.$toast("请上传营业执照照片"),!1):(this.$toast("请选择商户分类"),!1):(this.$toast("商户名称不能为空"),!1):(this.$toast("商户地址不能为空"),!1):(this.$toast("手机号格式错误"),!1):(this.$toast("手机号不能为空"),!1))},onLoad:function(){var e=this;this.util.request({url:"haodian/settle/store",data:{forceLocation:1}}).then(function(t){e.showPreLoading=!1;var a=t.data.message;if(-1e3==a.errno)e.util.$toast(a.message,e.util.getUrl({path:"/gohome/pages/haodian/settle"}),1e3,"replace");else if(-1005==a.errno||0==a.errno||-1004==a.errno)e.message={type:"info",message:a.message.message,redirect:e.util.getUrl({path:"/gohome/pages/haodian/index"}),btnText:"确定"};else if(-1==a.errno)e.message={type:"error",message:a.message,redirect:e.util.getUrl({path:"/gohome/pages/haodian/index"}),btnText:"返回"};else if(-1006==a.errno)e.message={type:"info",message:a.message.message,redirect:e.util.getUrl({path:"/pages/public/pay",query:{order_id:a.message.order_id,order_type:"haodian"}}),btnText:"前去支付"};else{e.agreement=a.message.agreement,e.config=a.message.config,e.config.meal&&e.config.meal.length>0&&(e.meal.price=e.config.meal[0].price,e.meal.days=e.config.meal[0].time);var i=a.message.categorys;e.columns[0].values=i,e.columns[0].values[0].child&&(e.columns[1].values=i[0].child),e.columns=[].concat(s()(e.columns))}}).catch(function(t){"fail"==window.forceGetLocationStatus&&(e.showPreLoading=!1,e.getLocationStatus=!1)})}},mounted:function(){this.onLoad()}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"haodian-application"}},[a("public-header",{attrs:{title:"好店入驻"}}),e._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",[a("van-field",{attrs:{label:"店铺名称",placeholder:"请填写店铺名称","input-align":"right"},model:{value:e.store.title,callback:function(t){e.$set(e.store,"title",t)},expression:"store.title"}}),e._v(" "),a("van-field",{attrs:{label:"店铺电话",placeholder:"请填写店铺电话","input-align":"right"},model:{value:e.store.telephone,callback:function(t){e.$set(e.store,"telephone",t)},expression:"store.telephone"}}),e._v(" "),a("van-cell",{attrs:{title:"行业分类"}},[a("div",{attrs:{slot:"right-icon"},on:{click:function(t){return e.onTogglePopup("category")}},slot:"right-icon"},[a("span",[e._v(e._s(e.store.category_cn?e.store.category_cn:"请选择"))]),e._v(" "),a("van-icon",{attrs:{name:"arrow"}})],1)]),e._v(" "),e._e(),e._v(" "),a("van-field",{attrs:{label:"店铺地址",placeholder:"请填写店铺地址","input-align":"right"},model:{value:e.store.address,callback:function(t){e.$set(e.store,"address",t)},expression:"store.address"}}),e._v(" "),a("van-field",{attrs:{label:"店铺简介",type:"textarea",placeholder:"请填写店铺简介",rows:"1","input-align":"right",autosize:""},model:{value:e.store.content,callback:function(t){e.$set(e.store,"content",t)},expression:"store.content"}})],1),e._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{staticClass:"upload-img"},[a("div",{staticClass:"goods-img"},[a("div",[e._v("添加店铺图标")])]),e._v(" "),a("uploader",{attrs:{max:1,value:e.logo},on:{onGetUrl:e.onChangeLogo,delete:e.onChangeLogo}})],1)]),e._v(" "),a("van-cell",[a("div",{staticClass:"upload-img"},[a("div",{staticClass:"goods-img"},[a("div",[e._v("营业资质照(依次上传营业执照、餐饮服务许可证、其他资质)")])]),e._v(" "),a("uploader",{attrs:{max:3,value:e.qualification},on:{onGetUrl:e.onChangeQualification,delete:e.onChangeQualification}})],1)]),e._v(" "),a("van-cell",[a("div",{staticClass:"upload-img"},[a("div",{staticClass:"goods-img"},[a("div",[e._v("添加店铺详情图")])]),e._v(" "),a("uploader",{attrs:{max:4,value:e.thumbs},on:{onGetUrl:e.onChangeThumbs,delete:e.onChangeThumbs}})],1)])],1),e._v(" "),e.config.meal&&e.config.meal.length>0?[a("van-radio-group",{staticClass:"margin-10-t",model:{value:e.meal.selectIndex,callback:function(t){e.$set(e.meal,"selectIndex",t)},expression:"meal.selectIndex"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"入驻费用"}}),e._v(" "),e._l(e.config.meal,function(t,i){return a("van-cell",{key:i,attrs:{clickable:""},on:{click:function(t){return e.onSelectMeal(i)}}},[a("div",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title)),a("span",{staticClass:"c-danger"},[e._v("（"+e._s(t.time)+"天 / "+e._s(e.Lang.dollarSign)+e._s(t.price)+"）")])]),e._v(" "),a("van-radio",{attrs:{name:i}})],1)})],2)],1)]:e._e(),e._v(" "),a("div",{staticClass:"tips flex",on:{click:function(t){return e.onTogglePopup("agreement")}}},[a("i",{staticClass:"icon",class:{"icon-check":"1"==e.check}}),e._v(" "),a("span",[e._v("我已阅读并同意")]),e._v(" "),a("span",{staticClass:"c-danger"},[e._v("《商家入驻协议》")])]),e._v(" "),a("div",{staticClass:"padding-15"},[e.meal.price>0?a("van-button",{staticClass:"bg-danger",attrs:{size:"normal",block:"",disabled:e.submitting},on:{click:e.onSubmit}},[e._v("确认支付"+e._s(e.Lang.dollarSign)+e._s(e.meal.price))]):a("van-button",{staticClass:"bg-danger",attrs:{size:"normal",block:"",disabled:e.submitting},on:{click:e.onSubmit}},[e._v("提交")])],1)],2),e._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:e.popupStatus.category,callback:function(t){e.$set(e.popupStatus,"category",t)},expression:"popupStatus.category"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"所属分类",columns:e.columns,"value-key":"title"},on:{cancel:function(t){return e.onTogglePopup("category")},confirm:e.onConfirmCategory,change:e.onChangeCategory}})],1),e._v(" "),a("agreement",{attrs:{show:e.popupStatus.agreement,title:e.agreement.title,content:e.agreement.value},on:{agreementHide:function(t){return e.onTogglePopup("agreement")}}}),e._v(" "),e.message.type?a("imessage",{attrs:{message:e.message}}):e._e(),e._v(" "),a("transition",{attrs:{name:"loading"}},[e.showPreLoading?a("iloading"):e._e()],1),e._v(" "),e.getLocationStatus?e._e():a("failed-tips",{attrs:{failedTips:e.failedTips}})],1)},staticRenderFns:[]};var h=a("VU/8")(d,m,!1,function(e){a("U6+M")},null,null);t.default=h.exports}});
//# sourceMappingURL=153.a4b79eecdc414af541bb.js.map