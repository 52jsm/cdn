webpackJsonp([82],{MANH:function(t,i){},oKT1:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("mvHQ"),n=a.n(e),s=a("woOf"),l=a.n(s),o=a("Cz8s"),c=a("+TmT"),r=a("WkcG"),u=a("deIj"),d={components:{PublicHeader:o.a,uploader:c.a,failedTips:r.a},data:function(){return{showPreLoading:!0,category:{},stickShow:!0,publish:{content:"",parentid:0,childid:0,sid:0,is_stick:0,days:0,nickname:"",mobile:"",keyword:[],thumbs:[]},calculate:{final_fee:0},black_member:{status:!1},failedTips:{type:"message",tips:"",btnText:"关闭",link:"/gohome/pages/tongcheng/index"}}},methods:{onToggleTag:function(t){var i=this.publish.keyword.indexOf(t);if(-1!=i)return this.publish.keyword.splice(i,1),void(this.publish=l()({},this.publish));this.publish.keyword.push(t),this.publish=l()({},this.publish)},onToggleStick:function(){},onSelectStick:function(t){if(this.calculate&&1!=this.calculate.stick_is_available)return this.util.$toast("置顶位已售完,暂时不可购买","",1e3),!1;this.publish.days=t,this.onLoad()},onUploadThumb:function(t){this.publish.thumbs=t},onLoad:function(){var t=this;Object(u.a)({vue:t,url:"tongcheng/publish/post",data:{parentid:t.parentid,childid:t.childid,publish:n()(t.publish),information_id:t.information_id},success:function(i){t.category=i.category,t.publish.nickname=i.member.realname,t.publish.mobile=i.member.mobile,t.calculate=i.calculate,t.information_id>0&&(t.publish=l()(t.publish,i.publish))},fail:function(i){if(-1e3==i.errno){var a=i.message.black_member;return t.black_member=a,void(t.failedTips.tips=a.tip)}t.util.$toast(i.message,t.util.getUrl({path:"/gohome/pages/tongcheng/index"}),1e3)}})},onSubmit:function(){var t=this;t.publish.content?Object(u.c)({vue:t,url:"tongcheng/publish/post",data:{parentid:t.parentid,childid:t.childid,information_id:t.information_id,publish:n()(t.publish)},success:function(i){1==i.need_pay?t.util.$toast("请支付",t.util.getUrl({path:"/pages/public/pay",query:{order_id:i.id,order_type:"tongcheng"}}),1500,"replace"):t.util.$toast(i.message,t.util.getUrl({path:"/gohome/pages/tongcheng/detail",query:{id:i.information_id}}),1e3)}}):t.util.$toast("请输入内容")}},created:function(){this.$route.query&&(this.parentid=this.$route.query.parentid,this.childid=0,this.$route.query.childid>0&&(this.childid=this.$route.query.childid),this.information_id=0,this.$route.query.information_id>0&&(this.information_id=this.$route.query.information_id))},mounted:function(){this.onLoad()}},p={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"publish-post"}},[a("public-header",{attrs:{title:t.category.title}}),t._v(" "),t.black_member.status?a("failed-tips",{attrs:{failedTips:t.failedTips}}):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"bg-default font-14"},[a("p",{staticClass:"c-gray padding-15-lr padding-15-t"},[t._v("信息内容：")]),t._v(" "),a("van-field",{staticClass:"font-15",attrs:{type:"textarea",placeholder:"请输入信息内容",rows:"5"},model:{value:t.publish.content,callback:function(i){t.$set(t.publish,"content",i)},expression:"publish.content"}})],1),t._v(" "),a("div",{staticClass:"bg-default margin-10-t"},[a("p",{staticClass:"c-gray padding-15-lr padding-15-t font-14"},[t._v("添加图片")]),t._v(" "),a("uploader",{staticClass:"uploader",attrs:{max:8,value:t.publish.thumbs},on:{onGetUrl:t.onUploadThumb,delete:t.onUploadThumb}})],1),t._v(" "),a("div",{staticClass:"bg-default margin-10-t"},[a("p",{staticClass:"c-gray padding-15-lr padding-15-t font-14"},[t._v("选择标签")]),t._v(" "),a("ul",{staticClass:"tags"},[t._l(t.category.tags,function(i,e){return t.category.tags?[a("li",{staticClass:"tag-item",class:{active:t.publish.keyword.indexOf(i)>=0},on:{click:function(a){return t.onToggleTag(i)}}},[t._v(t._s(i))])]:t._e()})],2)]),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t"},[a("van-field",{attrs:{label:"联系人",placeholder:"请输入联系人姓名","input-align":"right"},model:{value:t.publish.nickname,callback:function(i){t.$set(t.publish,"nickname",i)},expression:"publish.nickname"}}),t._v(" "),a("van-field",{attrs:{label:"联系方式",placeholder:"请输入联系方式","input-align":"right"},model:{value:t.publish.mobile,callback:function(i){t.$set(t.publish,"mobile",i)},expression:"publish.mobile"}}),t._v(" "),t._e(),t._v(" "),t.category.price>0&&0==t.information_id?a("van-cell",{attrs:{title:"发布费用"}},[a("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",[t._v(t._s(t.category.price)+t._s(t.Lang.dollarSignCn))]),t._v(" "),a("van-icon",{staticClass:"c-gray margin-5-l",attrs:{name:"arrow"}})],1)]):t._e()],1),t._v(" "),0==t.information_id?[t.category.config&&t.category.config.stick_price?a("van-radio-group",{staticClass:"margin-10-t",on:{change:t.onToggleStick},model:{value:t.publish.days,callback:function(i){t.$set(t.publish,"days",i)},expression:"publish.days"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"置顶设置",value:t.publish.days>0?"置顶"+t.publish.days+"天":""},on:{click:t.onToggleStick}}),t._v(" "),t.stickShow?[t._l(t.category.config.stick_price,function(i){return t.category.config&&t.category.config.stick_price?[a("van-cell",{staticClass:"border-0px",attrs:{title:"置顶"+i.day+"天",clickable:""},on:{click:function(a){return t.onSelectStick(i.day)}}},[a("van-radio",{attrs:{name:i.day}})],1)]:t._e()}),t._v(" "),a("van-cell",{staticClass:"border-0px",attrs:{title:"不置顶",clickable:""},on:{click:function(i){return t.onSelectStick(0)}}},[a("van-radio",{attrs:{name:0}})],1)]:t._e()],2)],1):t._e()]:t._e(),t._v(" "),a("div",{staticClass:"padding-15",on:{click:function(i){return t.onSubmit()}}},[t.information_id>0?a("van-button",{staticClass:"bg-danger font-16",attrs:{size:"normal",block:""}},[t._v(t._s(t.calculate.final_fee>0?"确认修改("+t.Lang.dollarSign+t.calculate.final_fee+")":"确认修改"))]):a("van-button",{staticClass:"bg-danger font-16",attrs:{size:"normal",block:""}},[t._v(t._s(t.calculate.final_fee>0?"确认发布("+t.Lang.dollarSign+t.calculate.final_fee+")":"确认发布"))])],1)],2),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var h=a("VU/8")(d,p,!1,function(t){a("MANH")},null,null);i.default=h.exports}});
//# sourceMappingURL=82.a50928cd31e52b167605.js.map