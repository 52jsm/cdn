webpackJsonp([3],{"6MX2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{agreement:a("q0vl").a},data:function(){return{status:0,spread_status:1,checked:!0,configRelate:{},configTemplate:{},title:"",spread:{},price:0,frquency:0,username:"",mobile:"",agreement:"",showAgreement:!1}},methods:{onToggleShowAgreement:function(){this.showAgreement=!this.showAgreement},onLoad:function(){var t=this;this.util.request({url:"spread/register/index"}).then(function(e){var a=e.data.message;-1e3!=a.errno?-1001!=a.errno?(t.configRelate=a.message.configRelate,t.configTemplate=a.message.configTemplate,t.title=a.message.title,t.spread=a.message.spread,t.price=a.message.price?a.message.price:0,t.frquency=a.message.frquency?a.message.frquency:0,t.agreement=a.message.agreement):t.spread_status=0:t.$router.replace(t.util.getUrl({path:"/plugin/pages/spread/index"}))})},onApplication:function(){var t=this;return this.username?this.mobile?this.util.isValidMobile(this.mobile)?void this.util.request({url:"spread/register/application",data:{name:this.username,mobile:this.mobile}}).then(function(e){var a=e.data.message;if(a.errno){if(-1e3==a.errno)return t.$toast("恭喜您已成为推广员"),void t.$router.push(t.util.getUrl({path:"/"}));t.$toast(a.message)}else t.util.$toast("您已成功提交申请,等待管理员审核","",1e3),t.onLoad()}):(this.$toast("手机号格式错误"),!1):(this.$toast("手机号不能为空"),!1):(this.$toast("姓名不能为空"),!1)},onSubmit:function(){var t=this;this.util.request({url:"spread/register/index",method:"POST"}).then(function(e){-1e3==e.data.message.errno?(t.$toast("恭喜您已成为推广员"),t.$router.replace(t.util.getUrl({path:"/"}))):t.onLoad()})}},mounted:function(){this.onLoad()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"spread-register"}},[a("div",{staticClass:"content"},[a("img",{attrs:{src:t.configTemplate.avatar,alt:""}}),t._v(" "),t.configRelate.become>1&&1==t.spread_status?[a("div",{staticClass:"list-group van-hairline--top"},[a("div",{staticClass:"list-group-title"},[a("van-icon",{attrs:{name:"lights"}}),t._v("友情提醒\n\t\t\t\t")],1),t._v(" "),2==t.configRelate.become?a("div",{staticClass:"list van-hairline--top van-hairline--bottom"},[a("div",{staticClass:"list-inner"},[a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t\t本店累计消费满 "),a("span",[t._v(t._s(t.configRelate.become_ordercount))]),t._v("次，才可能成为<"),a("span",[t._v(t._s(t.title))]),t._v(">平台推广员，您已消费"),a("span",[t._v(t._s(t.frquency))]),t._v("次\n\t\t\t\t\t\t\t，"+t._s(t.frquency>=t.configRelate.become_ordercount?"请点击下方按钮申请成为推广员":"请继续努力！")+"\n\t\t\t\t\t\t")])])]):3==t.configRelate.become?a("div",{staticClass:"list van-hairline--top van-hairline--bottom"},[a("div",{staticClass:"list-inner"},[a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t\t本店累计消费满 "),a("span",[t._v(t._s(t.configRelate.become_moneycount))]),t._v(t._s(t.Lang.dollarSignCn)+"，才可能成为<"),a("span",[t._v(t._s(t.title))]),t._v(">平台推广员，您已消费"),a("span",[t._v(t._s(t.price))]),t._v(t._s(t.Lang.dollarSignCn)+"\n\t\t\t\t\t\t\t，"+t._s(t.price>=t.configRelate.become_moneycount?"请点击下方按钮申请成为推广员":"请继续努力！")+"\n\t\t\t\t\t\t")])])]):t._e()]),t._v(" "),2==t.configRelate.become&&t.frquency>=t.configRelate.become_ordercount||3==t.configRelate.become&&t.price>=t.configRelate.become_moneycount?a("div",{attrs:{id:"confirm"},on:{click:t.onSubmit}},[t._v("申请成为推广员")]):a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/home/index"}),id:"confirm"}},[t._v("继续去购物")])]:1==t.configRelate.become&&1==t.spread_status?a("div",{staticClass:"cell-group van-hairline--top"},[a("div",{staticClass:"cell-title"},[t._v("\n\t\t\t\t欢迎加入 "),a("span",[t._v(t._s(t.title))]),t._v("，请填写申请信息\n\t\t\t")]),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{label:"姓名",placeholder:"请填写真实姓名，用于结算",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("van-field",{attrs:{type:"mobile",label:"手机号",placeholder:"填写手机号方便联系",required:""},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),t._v(" "),1==t.configRelate.open_protocol?a("div",{staticClass:"cell-group"},[a("div",{staticClass:"cell"},[a("div",{staticClass:"checked"},[a("van-icon",{attrs:{name:"check"}})],1),t._v("\n\t\t\t\t\t我已经阅读并了解了 \n\t\t\t\t\t"),a("span",{on:{click:t.onToggleShowAgreement}},[t._v("【推广员申请协议】")])])]):t._e()],1):t._e(),t._v(" "),1==t.configRelate.become&&1==t.spread_status?a("div",{attrs:{id:"application"},on:{click:t.onApplication}},[t._v("申请成为推广员")]):0==t.spread_status?a("div",{staticClass:"container"},[a("div",{staticClass:"icon-area"},[a("van-icon",{attrs:{name:"icon"}})],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"btn-area"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/home/index"})}},[t._v("确定")])],1),t._v(" "),a("div",{staticClass:"extra-area"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/home/index"})}},[t._v("返回首页")])],1)]):t._e()],2),t._v(" "),a("agreement",{attrs:{show:t.showAgreement,title:"推广员申请协议",content:t.agreement},on:{agreementHide:t.onToggleShowAgreement}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-area"},[e("div",{staticClass:"msg-title"},[this._v("您已提交推广员申请,请等待管理员审核")]),this._v(" "),e("div",{staticClass:"desc"},[this._v("请等待管理员审核")])])}]};var n=a("VU/8")(s,i,!1,function(t){a("huQx")},null,null);e.default=n.exports},huQx:function(t,e){}});
//# sourceMappingURL=3.c24fb6d3205ff086c06a.js.map