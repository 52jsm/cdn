webpackJsonp([190],{JU6h:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("mzkE"),i=n("Cz8s"),r={name:"notice",data:function(){return{preLoading:!1,id:Number,content:"",menufooter:{}}},components:{PublicFooter:o.a,PublicHeader:i.a},methods:{onLoad:function(){var t=this;this.preLoading=!0,this.util.request({url:"wmall/home/notice",data:{id:this.id,menufooter:1}}).then(function(e){t.preLoading=!1;var n=e.data.message;if(n.errno)return t.util.$toast(n.message),!1;t.content=n.message.content,t.menufooter=window.menufooter})}},created:function(){this.$route.query.id&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notice"}},[e("public-header",{attrs:{title:"公告"}}),this._v(" "),e("public-footer",{attrs:{menufooter:this.menufooter,preLoading:this.preLoading}}),this._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:this._s(this.content)}})],1)},staticRenderFns:[]};var a=n("VU/8")(r,s,!1,function(t){n("NjEC")},"data-v-0b03d963",null);e.default=a.exports},NjEC:function(t,e){}});
//# sourceMappingURL=190.868fd2ef4eff566223bb.js.map