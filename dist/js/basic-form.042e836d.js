(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basic-form"],{"28c0":function(a,t,e){},"36ad":function(a,t,e){"use strict";var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-header-warp clearfix"},[e("el-breadcrumb",[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[a._v("首页")]),a._l(a.matchRoute,(function(t,s){return e("el-breadcrumb-item",{key:s},[a._v(a._s(t.name))])}))],2),e("div",{staticClass:"page-header-heading"},[e("span",{staticClass:"page-header-heading-title"},[a._t("headingTitle",[a._v(a._s(a.$route.meta.title))])],2),a.$slots.headingExtra?e("span",{staticClass:"page-header-heading-extra"},[a._t("headingExtra")],2):a._e()]),a.$slots.default?e("div",{staticClass:"page-header-content"},[a._t("default")],2):a._e(),a.$slots.headingFooter?e("div",{staticClass:"page-header-footer"},[a._t("headingFooter")],2):a._e()],1)},l=[],i=e("d225"),r=e("b0b4"),o=e("308d"),c=e("6bb5"),n=e("4e2b"),b=e("9ab4"),m=e("60a3"),d=function(a){function t(){var a;return Object(i["a"])(this,t),a=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),a.matchRoute=[],a}return Object(n["a"])(t,a),Object(r["a"])(t,[{key:"created",value:function(){this.matchRoute=this["$route"].matched.map((function(a){return{name:a.meta.title,path:a.path}}))}}]),t}(m["e"]);d=b["a"]([Object(m["a"])({name:"PageHeader"})],d);var u=d,p=u,f=(e("5ef2"),e("bfec"),e("2877")),v=Object(f["a"])(p,s,l,!1,null,"7ec0aa4a",null);t["a"]=v.exports},"435c":function(a,t,e){},"5ef2":function(a,t,e){"use strict";var s=e("435c"),l=e.n(s);l.a},6239:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("PageHeader",[e("span",[a._v("表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。")])]),e("div",{staticClass:"form-container"},[e("el-form",{ref:"form",attrs:{model:a.basicFromData,rules:a.dataRules}},[e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"title"}},[a._v("标题：")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small",prop:"title"}},[e("el-input",{attrs:{id:"title",placeholder:"给目标起个名字"},model:{value:a.basicFromData.title,callback:function(t){a.$set(a.basicFromData,"title",t)},expression:"basicFromData.title"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"date"}},[a._v("起止时间：")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small",prop:"date"}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{id:"date",type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:a.basicFromData.date,callback:function(t){a.$set(a.basicFromData,"date",t)},expression:"basicFromData.date"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"goal"}},[a._v("目标描述：")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small",prop:"goal"}},[e("el-input",{attrs:{id:"goal",type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请输入你的阶段性工作目标"},model:{value:a.basicFromData.goal,callback:function(t){a.$set(a.basicFromData,"goal",t)},expression:"basicFromData.goal"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"standard"}},[a._v("衡量标准：")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small",prop:"standard"}},[e("el-input",{attrs:{id:"standard",type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请输入衡量标准"},model:{value:a.basicFromData.standard,callback:function(t){a.$set(a.basicFromData,"standard",t)},expression:"basicFromData.standard"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"client"}},[a._v("客户\n              "),e("span",[a._v("(选填)\n                "),e("el-tooltip",{attrs:{effect:"dark",content:"目标服务对象",placement:"top"}},[e("i",{staticClass:"iconfont icon-info-circle"})])],1),a._v("：\n            ")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small"}},[e("el-input",{attrs:{id:"client",placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"},model:{value:a.basicFromData.client,callback:function(t){a.$set(a.basicFromData,"client",t)},expression:"basicFromData.client"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",{attrs:{for:"invites"}},[a._v("邀评人 "),e("span",[a._v("(选填)")]),a._v("： ")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small"}},[e("el-input",{attrs:{id:"invites",placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"},model:{value:a.basicFromData.invites,callback:function(t){a.$set(a.basicFromData,"invites",t)},expression:"basicFromData.invites"}})],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",[a._v("权重 "),e("span",[a._v("(选填)")]),a._v("： ")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small"}},[e("el-input-number",{attrs:{"controls-position":"right",min:0,max:100},model:{value:a.basicFromData.weight,callback:function(t){a.$set(a.basicFromData,"weight",t)},expression:"basicFromData.weight"}}),e("span",{staticStyle:{"margin-left":"10px"}},[a._v("%")])],1)],1)],1),e("el-row",[e("el-col",{attrs:{xs:24,sm:8}},[e("div",{staticClass:"label-box"},[e("label",[a._v("目标公开：")])])]),e("el-col",{attrs:{xs:24,sm:10}},[e("el-form-item",{attrs:{size:"small"}},[e("div",[e("div",[e("el-radio",{attrs:{label:1},model:{value:a.basicFromData.public,callback:function(t){a.$set(a.basicFromData,"public",t)},expression:"basicFromData.public"}},[a._v("公开")]),e("el-radio",{attrs:{label:2},model:{value:a.basicFromData.public,callback:function(t){a.$set(a.basicFromData,"public",t)},expression:"basicFromData.public"}},[a._v("部分公开")]),e("el-radio",{attrs:{label:3},model:{value:a.basicFromData.public,callback:function(t){a.$set(a.basicFromData,"public",t)},expression:"basicFromData.public"}},[a._v("不公开")])],1),2===a.basicFromData.public?e("div"):a._e(),e("div",[e("span",[a._v("客户、邀评人默认被分享")])])])])],1)],1),e("el-row",[e("el-col",{staticClass:"el-col-offset-0",attrs:{xs:24,sm:10,offset:8}},[e("el-form-item",{attrs:{size:"small"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(t){return a.subBasicInfoClick("form")}}},[a._v("提交")])],1)],1)],1)],1)],1)],1)},l=[],i=e("d225"),r=e("b0b4"),o=e("308d"),c=e("6bb5"),n=e("4e2b"),b=e("9ab4"),m=e("60a3"),d=e("36ad"),u=function(a){function t(){var a;return Object(i["a"])(this,t),a=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),a.basicFromData={title:"",date:"",goal:"",standard:"",client:"",invites:"",weight:0,public:1},a.dataRules={title:[{required:!0,message:"请输入标题",trigger:"blur"}],date:[{required:!0,message:"请选择起止时间",trigger:"change"}],goal:[{required:!0,message:"请输入目标描述",trigger:"blur"}],standard:[{required:!0,message:"请输入衡量标准",trigger:"blur"}]},a}return Object(n["a"])(t,a),Object(r["a"])(t,[{key:"subBasicInfoClick",value:function(a){var t=this.$refs[a];t.validate((function(a){if(!a)return console.log(222),!1;console.log(11)}))}}]),t}(m["e"]);u=b["a"]([Object(m["a"])({name:"BasicForm",components:{PageHeader:d["a"]}})],u);var p=u,f=p,v=(e("932b"),e("2877")),g=Object(v["a"])(f,s,l,!1,null,"3f9c4d26",null);t["default"]=g.exports},"932b":function(a,t,e){"use strict";var s=e("9780"),l=e.n(s);l.a},9780:function(a,t,e){},bfec:function(a,t,e){"use strict";var s=e("28c0"),l=e.n(s);l.a}}]);
//# sourceMappingURL=basic-form.042e836d.js.map