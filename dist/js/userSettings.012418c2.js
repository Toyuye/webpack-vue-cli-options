(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userSettings"],{"12b2":function(t,e,a){"use strict";var n=a("5438"),i=a.n(n);i.a},"4bb5":function(t,e,a){"use strict";var n=a("2fe1"),i=a("2f62"),s=u("computed",i["e"]),c=u("computed",i["c"]),l=u("methods",i["b"]),o=u("methods",i["d"]);function r(t,e){function a(e){function a(a,n){if("string"===typeof n){var i=n,s=a;return e(i,{namespace:t})(s,i)}var c=a,l=v(n||{},{namespace:t});return e(c,l)}return a}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),a(e)):{State:a(s),Getter:a(c),Mutation:a(o),Action:a(l)}}function u(t,e){function a(a,i){return Object(n["a"])((function(n,s){n[t]||(n[t]={});var c,l=(c={},c[s]=a,c);n[t][s]=void 0!==i?e(i,l)[s]:e(l)[s]}))}function i(t,e){if("string"===typeof e){var n=e,i=t;return a(n,void 0)(i,n)}var s=d(e),c=t;return a(c,s)}return i}function d(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}function v(t,e){var a={};return[t,e].forEach((function(t){Object.keys(t).forEach((function(e){a[e]=t[e]}))})),a}a.d(e,"a",(function(){return r}))},5438:function(t,e,a){},"5d06":function(t,e,a){"use strict";var n=a("8034"),i=a.n(n);i.a},8034:function(t,e,a){},b0b4:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("85f2"),i=a.n(n);function s(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),i()(t,n.key,n)}}function c(t,e,a){return e&&s(t.prototype,e),a&&s(t,a),t}},fc93:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-setting-container"},[a("el-tabs",{attrs:{"tab-position":t.tabPosition}},[a("el-tab-pane",{attrs:{label:"基本设置"}},[a("div",{staticClass:"basic-setup setting-style-right"},[a("h3",{staticClass:"setting-title"},[t._v("基本设置")]),a("div",{staticClass:"settins-base-view"},[a("div",{staticClass:"settins-base-view-left"},[a("el-form",[a("el-form-item",{attrs:{label:"邮箱",size:"small"}},[a("el-input",{model:{value:t.accountSettingData.email,callback:function(e){t.$set(t.accountSettingData,"email",e)},expression:"accountSettingData.email"}})],1),a("el-form-item",{attrs:{label:"昵称",size:"small"}},[a("el-input",{model:{value:t.accountSettingData.nickName,callback:function(e){t.$set(t.accountSettingData,"nickName",e)},expression:"accountSettingData.nickName"}})],1),a("el-form-item",{attrs:{label:"个人简介",size:"small"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8}},model:{value:t.accountSettingData.personalProfile,callback:function(e){t.$set(t.accountSettingData,"personalProfile",e)},expression:"accountSettingData.personalProfile"}})],1),a("el-form-item",{attrs:{label:"国家/地区",size:"small"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.accountSettingData.countryName,callback:function(e){t.$set(t.accountSettingData,"countryName",e)},expression:"accountSettingData.countryName"}},t._l(["中国"],(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{attrs:{label:"所在省市",size:"small"}},[a("el-row",{staticStyle:{margin:"0 -5px"}},[a("el-col",{staticStyle:{padding:"0 5px"},attrs:{span:12}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.accountSettingData.provinceName,callback:function(e){t.$set(t.accountSettingData,"provinceName",e)},expression:"accountSettingData.provinceName"}},t._l(5,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-col",{staticStyle:{padding:"0 5px"},attrs:{span:12}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.accountSettingData.cityName,callback:function(e){t.$set(t.accountSettingData,"cityName",e)},expression:"accountSettingData.cityName"}},t._l(5,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1),a("el-form-item",{attrs:{label:"街道地址",size:"small"}},[a("el-input",{model:{value:t.accountSettingData.streetAddress,callback:function(e){t.$set(t.accountSettingData,"streetAddress",e)},expression:"accountSettingData.streetAddress"}})],1),a("el-form-item",{attrs:{label:"联系电话",size:"small"}},[a("el-row",{staticStyle:{margin:"0 -5px"}},[a("el-col",{staticStyle:{padding:"0 5px"},attrs:{span:8}},[a("el-input",{model:{value:t.accountSettingData.areaCode,callback:function(e){t.$set(t.accountSettingData,"areaCode",e)},expression:"accountSettingData.areaCode"}})],1),a("el-col",{staticStyle:{padding:"0 5px"},attrs:{span:16}},[a("el-input",{model:{value:t.accountSettingData.PhoneNumber,callback:function(e){t.$set(t.accountSettingData,"PhoneNumber",e)},expression:"accountSettingData.PhoneNumber"}})],1)],1)],1)],1),a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("更新基本信息")])],1),a("div",{staticClass:"settins-base-view-right"},[a("div",{staticClass:"avatar-title"},[a("span",[t._v("头像")])]),a("div",[a("el-avatar",{attrs:{size:144,src:t.accountSettingData.avatar},on:{error:function(){return!0}}},[a("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})])],1),a("div",{staticClass:"change-avatar-button"},[a("el-upload",{staticClass:"upload-avatar",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",limit:1}},[a("el-button",{attrs:{size:"small"}},[a("i",{staticClass:"iconfont icon-upload"}),t._v(" 更换头像")])],1)],1)])])])]),a("el-tab-pane",{attrs:{label:"安全设置"}},[a("div",{staticClass:"setting-style-right"},[a("h3",{staticClass:"setting-title"},[t._v("安全设置")]),a("div",{staticClass:"settins-base-view"},[a("ul",{staticClass:"setting-list-items"},t._l(t.accountSettingData.securitySettingData,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"left"},[a("div",{staticClass:"meta-content"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"description"},[t._v(t._s(e.description))])])]),a("div",{staticClass:"right"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleClickSecuritySetting(e.handleType)}}},[t._v(t._s(e.handleType))])],1)])})),0)])])]),a("el-tab-pane",{attrs:{label:"账号绑定"}},[a("div",{staticClass:"setting-style-right"},[a("h3",{staticClass:"setting-title"},[t._v("安全设置")]),a("div",{staticClass:"settins-base-view"},[a("ul",{staticClass:"setting-list-items"},t._l(t.accountSettingData.accountbindingData,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"left"},[a("div",{staticClass:"avatar-account"},[a("el-avatar",{attrs:{size:48,shape:"square",src:e.icon}})],1),a("div",{staticClass:"meta-content"},[a("div",{staticClass:"title"},[t._v(t._s(e.bindName))]),a("div",{staticClass:"description"},[t._v(t._s(e.bindDescription))])])]),a("div",{staticClass:"right"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleClickAccountBind(e.handleType)}}},[t._v(t._s(e.handleType))])],1)])})),0)])])]),a("el-tab-pane",{attrs:{label:"新消息通知"}},[a("div",{staticClass:"setting-style-right"},[a("h3",{staticClass:"setting-title"},[t._v("新消息通知")]),a("div",{staticClass:"settins-base-view"},[a("ul",{staticClass:"setting-list-items"},t._l(t.accountSettingData.messageNotificationData,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"left"},[a("div",{staticClass:"meta-content"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"description"},[t._v(t._s(e.description))])])]),a("div",{staticClass:"right"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return t.handleClikSwitch(e.switch)}},model:{value:e.switch,callback:function(a){t.$set(e,"switch",a)},expression:"item.switch"}})],1)])})),0)])])])],1)],1)},i=[],s=a("d225"),c=a("b0b4"),l=a("308d"),o=a("6bb5"),r=a("4e2b"),u=a("9ab4"),d=a("60a3"),v=a("4bb5"),f=a("d257"),p=a("0421"),b=(Object(v["a"])("user"),function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.tabPosition="left",t.accountSettingData={avatar:"",email:"",nickName:"",personalProfile:"",region:[],countryName:"",provinceName:"",cityName:"",streetAddress:"",areaCode:"",PhoneNumber:"",securitySettingData:[],accountbindingData:[],messageNotificationData:[]},t}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.getAccountSetting(),this.inItTabPosition(),this.addEventListenerScreen()}},{key:"beforeDestroy",value:function(){this.addEventListenerScreen()}},{key:"getAccountSetting",value:function(){var t=this;Object(p["b"])().then((function(e){var a=e.data;"0000"===a.code&&(t.accountSettingData=a.data)}))}},{key:"inItTabPosition",value:function(){return window.innerWidth<768?this.tabPosition="top":this.tabPosition="left"}},{key:"screenWidthThrottle",value:function(){var t=this;return Object(f["g"])((function(){t.inItTabPosition()}),200)}},{key:"addEventListenerScreen",value:function(){window.addEventListener("resize",this.screenWidthThrottle())}},{key:"handleClickSecuritySetting",value:function(t){console.log(t)}},{key:"handleClickAccountBind",value:function(t){console.log(t)}},{key:"handleClikSwitch",value:function(t){return console.log(1),!t}}]),e}(d["e"]));b=u["a"]([Object(d["a"])({name:"UserSettings"})],b);var m=b,g=m,h=(a("5d06"),a("12b2"),a("2877")),y=Object(h["a"])(g,n,i,!1,null,"0aed1545",null);e["default"]=y.exports}}]);
//# sourceMappingURL=userSettings.012418c2.js.map