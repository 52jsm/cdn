webpackJsonp([132],{"JEL+":function(t,e){},UvDe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),o=s("q0vl"),a=s("deIj"),n={data:function(){return{mobile:"",yzm:"",code:{text:"获取验证码",downcount:60},sid:0,store:{powers:[]},agreement:"",member:{mobile_secret:""},coupon:{},status:{edit:!1,agreement:!1,bindSuccess:!1},confirmAgreement:!1,islegal:!1,getCode:!1,showPreLoading:!0}},components:{PublicHeader:i.a,agreement:o.a},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"kabao/index/join",data:{sid:t.sid},success:function(e){t.store=t.util.extend(t.store,e.store),t.member=t.util.extend(t.member,e.member),t.mobile=t.member.mobile_secret,t.agreement=e.agreement,t.getCode=!0,t.islegal=!0},fail:function(e){if(-2==e.errno)return t.util.$toast(e.message,t.util.getUrl({path:"/plugin/pages/kabao/detail",query:{sid:t.sid}}),1500,"replace"),!1;t.util.$toast(e.message)}})},onGetCode:function(){var t=this;return!(!t.getCode||60!=t.code.downcount)&&(t.mobile?t.util.isValidMobile(t.mobile)?void t.util.request({url:"system/common/code",method:"POST",data:{mobile:t.mobile,check_captcha:0}}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message),!1;t.code.text=t.code.downcount+"秒后重新获取";var i=setInterval(function(){t.code.downcount--,t.code.downcount<=0?(clearInterval(i),t.code.text="获取验证码",t.code.downcount=60,t.getCode=!0):t.code.text=t.code.downcount+"秒后重新获取"},1e3);t.util.$toast("验证码发送成功, 请注意查收")}):(t.util.$toast("手机号格式错误"),!1):(t.util.$toast("手机号不能为空"),!1))},onSubmit:function(){var t=this;return!!t.islegal&&(t.mobile?t.util.isValidMobile(t.mobile)?t.yzm?t.confirmAgreement?(t.islegal=!1,void Object(a.c)({vue:t,url:"kabao/index/bind",data:{sid:t.sid,mobile:t.mobile,code:t.yzm},success:function(e){e.coupon&&e.coupon.discount>0&&(t.coupon=t.util.extend(t.coupon,e.coupon)),t.onToggleStatus("bindSuccess")},fail:function(e){if(-2==e.errno)return t.util.$toast(e.message,t.util.getUrl({path:"/plugin/pages/kabao/detail",query:{sid:t.sid}}),1500,"replace"),!1;t.util.$toast(e.message)}})):(t.util.$toast("请阅读并同意用户协议"),!1):(t.util.$toast("请输入短信验证码"),!1):(t.util.$toast("手机号格式错误"),!1):(t.util.$toast("手机号不能为空"),!1))},onToggleStatus:function(t){this.status[t]=!this.status[t],"edit"==t&&(this.mobile="")}},mounted:function(){var t=this.util.parseQuery(this.$route.query);this.sid=t.sid>0?t.sid:this.sid,this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kabao-join"}},[s("public-header",{attrs:{title:"加入会员"}}),t._v(" "),s("div",{staticClass:"content bg-default font-14"},[s("div",{staticClass:"card-wrap"},[s("div",{staticClass:"card",style:{background:"url("+t.store.vip_thumb+") no-repeat top center",backgroundSize:"100% auto"}},[s("div",{staticClass:"store-logo"},[s("img",{staticClass:"img-100",attrs:{src:t.store.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"store-title ellipsis"},[t._v(t._s(t.store.title)+"会员卡")])])]),t._v(" "),t.store.powers.length>0?s("div",{staticClass:"padding-15-lr"},[s("ul",{staticClass:"powers van-hairline--bottom"},t._l(t.store.powers,function(e,i){return s("li",{key:i,staticClass:"power-item"},[s("i",{staticClass:"icon",class:e.icon}),t._v(" "),s("span",{staticClass:"title ellipsis"},[t._v(t._s(e.title))])])}),0)]):t._e(),t._v(" "),s("div",{staticClass:"font-12 padding-15 c-gray"},[s("div",[t._v("通过手机号可免费加入会员")]),t._v(" "),t._e()]),t._v(" "),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",disabled:!t.status.edit,placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.status.edit,expression:"!status.edit"}],staticClass:"icon icon-edit font-20",on:{click:function(e){return t.onToggleStatus("edit")}}})]),t._v(" "),t.status.edit?s("div",{staticClass:"input-wrap margin-15-t"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],attrs:{type:"text"},domProps:{value:t.yzm},on:{input:function(e){e.target.composing||(t.yzm=e.target.value)}}}),t._v(" "),s("span",{on:{click:t.onGetCode}},[t._v(t._s(t.code.text))])]):t._e(),t._v(" "),s("div",{staticClass:"tips"},[s("van-checkbox",{attrs:{"checked-color":"#ff2d4b"},model:{value:t.confirmAgreement,callback:function(e){t.confirmAgreement=e},expression:"confirmAgreement"}},[t._v("\n\t\t\t\t我已阅读并同意"),s("span",{staticClass:"c-danger",on:{click:function(e){return e.stopPropagation(),t.onToggleStatus("agreement")}}},[t._v("《用户协议》")]),t._v("，包括入会时提供的手机号接受此品牌发送的商业性信息\n\t\t\t")])],1),t._v(" "),t.mobile&&t.yzm&&t.confirmAgreement?s("div",{staticClass:"btn-join ",on:{click:t.onSubmit}},[t._v("免费加入")]):s("div",{staticClass:"btn-join disabled"},[t._v("免费加入")])]),t._v(" "),s("van-popup",{staticClass:"bind-succcess-popup",attrs:{"close-on-click-overlay":!1},model:{value:t.status.bindSuccess,callback:function(e){t.$set(t.status,"bindSuccess",e)},expression:"status.bindSuccess"}},[s("div",{staticClass:"bind-success"},[t.coupon.discount?t._e():s("img",{attrs:{src:"static/img/pintuan_success_star.png",alt:""}}),t._v(" "),s("div",{staticClass:"font-16 font-bold margin-15-t"},[t._v("恭喜您")]),t._v(" "),s("div",{staticClass:"font-14 c-gray margin-10-t w-100 ellipsis padding-10-lr text-center"},[t._v("成功加入 "+t._s(t.store.title)+" 会员")]),t._v(" "),t.coupon.discount>0?[s("div",{staticClass:"coupon"},[s("div",{staticClass:"left"},[s("div",[s("span",{staticClass:"font-12"},[t._v(t._s(t.Lang.dollarSign))]),t._v(" "),s("span",{staticClass:"font-bold font-20"},[t._v(t._s(t.coupon.discount))])]),t._v(" "),s("div",{staticClass:"font-12 margin-5-t"},[t._v("满"+t._s(t.coupon.condition)+"元")])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"font-bold"},[t._v("绑卡赠送代金券")]),t._v(" "),s("div",{staticClass:"font-12 margin-10-t"},[t._v("有效期"+t._s(t.coupon.use_days_limit)+"天")])])]),t._v(" "),s("span",{staticClass:"c-gray font-12 margin-10-t"},[t._v("代金券已发放到您的账户中")])]:t._e(),t._v(" "),s("div",{staticClass:"btn-detail",on:{click:function(e){return t.util.jsUrl("/plugin/pages/kabao/detail",{sid:t.store.id},"replace")}}},[t._v("确定")])],2)]),t._v(" "),s("agreement",{attrs:{show:t.status.agreement,title:"用户协议",content:t.agreement},on:{agreementHide:function(e){return t.onToggleStatus("agreement")}}}),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(n,c,!1,function(t){s("JEL+")},null,null);e.default=l.exports}});
//# sourceMappingURL=132.840289a49b0a99efb4bf.js.map