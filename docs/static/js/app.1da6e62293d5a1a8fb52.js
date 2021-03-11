webpackJsonp([1],{HTPI:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")({name:"App"},i,!1,function(e){n("HTPI")},null,null).exports,s=n("/ocq"),r=n("Dd8w"),a=n.n(r),c=n("NYxO"),d={name:"AppHeader",computed:a()({},Object(c.c)(["getMemoCount"]))},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-header"},[t("h1",[this._v("메모 어플리케이션")]),this._v(" "),t("p",[this._v(this._s(this.getMemoCount)+"개의 메모")])])},staticRenderFns:[]};var l=n("VU/8")(d,u,!1,function(e){n("d200")},null,null).exports,f={name:"MemoForm",data:function(){return{title:"",content:""}},methods:{resetFields:function(){this.title="",this.content=""},addMemo:function(){var e=this.title,t=this.content,n=(new Date).getTime();if(e.length<=0||t.length<=0)return!1;this.$emit("addMemo",{id:n,title:e,content:t}),this.resetFields()}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"memo-form"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addMemo(t)}}},[n("fieldset",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"memo-form__title",attrs:{type:"text",placeholder:"메모의 제목을 입력해주세요."},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"memo-form__content",attrs:{placeholder:"메모의 내용을 입력해주세요."},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),e._v(" "),e._m(0)]),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("등록하기")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{attrs:{type:"reset"}},[t("i",{staticClass:"fas fa-sync-alt"})])}]};var v=n("VU/8")(f,p,!1,function(e){n("vpxc")},"data-v-6421126e",null).exports,h={name:"MemoList",props:{memoItem:{type:Object},editingId:{type:Number}},computed:{isEditing:function(){return this.memoItem.id===this.editingId}},methods:{deleteMemo:function(){var e=this.memoItem.id;this.$emit("deleteMemo",e)},handleDblClick:function(){var e=this;this.$emit("setEditingId",this.memoItem.id),this.$nextTick(function(){e.$refs.content.focus()})},handleBlur:function(){this.$emit("resetEditingId")},updateMemo:function(e){var t=this.memoItem.id,n=e.target.value.trim();if(n.length<=0)return!1;this.$emit("updateMemo",{id:t,content:n}),this.$refs.content.blur()}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"memo-item"},[n("strong",[e._v(e._s(e.memoItem.title))]),e._v(" "),n("div",{staticClass:"memo-con",on:{dblclick:e.handleDblClick}},[e.isEditing?n("input",{ref:"content",attrs:{type:"text"},domProps:{value:e.memoItem.content},on:{blur:e.handleBlur,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateMemo(t)}}}):n("p",[e._v(e._s(e.memoItem.content))])]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.deleteMemo}},[n("i",{staticClass:"fas fa-times"})])])},staticRenderFns:[]};var I="FETCH_MEMOS",M="ADD_MEMO",E="DELETE_MEMO",g="EDIT_MEMO",b={name:"Memo",components:{MemoForm:v,MemoList:n("VU/8")(h,_,!1,function(e){n("xBqf")},"data-v-c428ffa8",null).exports},created:function(){this.fetchMemos()},computed:a()({},Object(c.e)(["memos","editingId"])),methods:a()({},Object(c.b)(["fetchMemos","addMemo","deleteMemo","updateMemo"]),Object(c.d)(["SET_EDITING_ID","RESET_EDITING_ID"]))},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"memo"},[n("memo-form",{on:{addMemo:e.addMemo}}),e._v(" "),n("ul",{staticClass:"memo-list"},e._l(e.memos,function(t){return n("memo-list",{key:t.id,attrs:{memoItem:t,editingId:e.editingId},on:{deleteMemo:e.deleteMemo,updateMemo:e.updateMemo,setEditingId:e.SET_EDITING_ID,resetEditingId:e.RESET_EDITING_ID}})}),1)],1)},staticRenderFns:[]};var x={name:"MemoApp",components:{AppHeader:l,Memo:n("VU/8")(b,D,!1,function(e){n("RXdo")},"data-v-3a83d72b",null).exports}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"memo-app"},[t("app-header"),this._v(" "),t("memo")],1)},staticRenderFns:[]};var C=n("VU/8")(x,T,!1,function(e){n("PUoQ")},null,null).exports;o.a.use(s.a);var y=new s.a({routes:[{path:"/",name:"MemoApp",component:C}]});var $={getMemoCount:function(e){return e.memos.length}};var O,S={fetchMemos:function(e){(0,e.commit)(I)},addMemo:function(e,t){(0,e.commit)(M,t)},deleteMemo:function(e,t){(0,e.commit)(E,t)},updateMemo:function(e,t){(0,e.commit)(g,t)}},N=n("bOdI"),k=n.n(N),F=n("mvHQ"),R=n.n(F),w=(O={},k()(O,I,function(e){e.memos=localStorage.memos?JSON.parse(localStorage.memos):[]}),k()(O,M,function(e,t){e.memos.push(t);var n=R()(e.memos);localStorage.setItem("memos",n)}),k()(O,E,function(e,t){var n=e.memos.findIndex(function(e){return e.id===t});e.memos.splice(n,1);var o=R()(e.memos);localStorage.setItem("memos",o)}),k()(O,g,function(e,t){var n=t.id,o=t.content,i=e.memos.findIndex(function(e){return e.id===n}),m=e.memos[i];e.memos.splice(i,1,a()({},m,{content:o}));var s=R()(e.memos);localStorage.setItem("memos",s)}),k()(O,"SET_EDITING_ID",function(e,t){e.editingId=t}),k()(O,"RESET_EDITING_ID",function(e,t){e.editingId=0}),O);o.a.use(c.a);var A=new c.a.Store({state:{memos:[],editingId:0},getters:$,actions:S,mutations:w});o.a.config.productionTip=!1,new o.a({el:"#app",router:y,store:A,components:{App:m},template:"<App/>",render:function(e){return e(m)}})},PUoQ:function(e,t){},RXdo:function(e,t){},d200:function(e,t){},vpxc:function(e,t){},xBqf:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1da6e62293d5a1a8fb52.js.map