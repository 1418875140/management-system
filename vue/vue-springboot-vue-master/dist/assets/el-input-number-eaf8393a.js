import{aY as G,b as se,aZ as oe,a_ as p,a$ as Q,b0 as T,Z as y,b1 as h,d as X,b2 as ie,u as ce,r as de,J as me,b3 as pe,C as I,b4 as A,b5 as be,b6 as fe,K as ve,o as Ne,b7 as Ve,a as v,c as z,O as H,f as t,n as O,aw as P,a4 as L,w as W,l as F,H as Ie,b8 as he,E as Z,ak as q,b9 as ye,ba as Ee,ac as k,ay as we,_ as ge,G as _e,N as Se,bb as J,q as Ae}from"./index-6e278e4c.js";const Pe=100,Fe=600,j={beforeMount(l,N){const i=N.value,{interval:r=Pe,delay:E=Fe}=G(i)?{}:i;let c,m;const u=()=>G(i)?i():i.handler(),b=()=>{m&&(clearTimeout(m),m=void 0),c&&(clearInterval(c),c=void 0)};l.addEventListener("mousedown",w=>{w.button===0&&(b(),u(),document.addEventListener("mouseup",()=>b(),{once:!0}),m=setTimeout(()=>{c=setInterval(()=>{u()},r)},E))})}},ke=se({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:oe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Te={[Q]:(l,N)=>N!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[T]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},Ce=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],Be=X({name:"ElInputNumber"}),De=X({...Be,props:ke,emits:Te,setup(l,{expose:N,emit:i}){const r=l,{t:E}=ie(),c=ce("input-number"),m=de(),u=me({currentValue:r.modelValue,userInput:null}),{formItem:b}=pe(),w=I(()=>p(r.modelValue)&&r.modelValue<=r.min),R=I(()=>p(r.modelValue)&&r.modelValue>=r.max),ee=I(()=>{const e=Y(r.step);return A(r.precision)?Math.max(Y(r.modelValue),e):(e>r.precision,r.precision)}),C=I(()=>r.controls&&r.controlsPosition==="right"),U=be(),V=fe(),x=I(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";A(r.precision)||(e=e.toFixed(r.precision))}return e}),B=(e,n)=>{if(A(n)&&(n=ee.value),n===0)return Math.round(e);let a=String(e);const s=a.indexOf(".");if(s===-1||!a.replace(".","").split("")[s+n])return e;const _=a.length;return a.charAt(_-1)==="5"&&(a=`${a.slice(0,Math.max(0,_-1))}6`),Number.parseFloat(Number(a).toFixed(n))},Y=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let s=0;return a!==-1&&(s=n.length-a-1),s},$=(e,n=1)=>p(e)?B(e+r.step*n):u.currentValue,D=()=>{if(r.readonly||V.value||R.value)return;const e=Number(x.value)||0,n=$(e);g(n),i(T,u.currentValue)},K=()=>{if(r.readonly||V.value||w.value)return;const e=Number(x.value)||0,n=$(e,-1);g(n),i(T,u.currentValue)},M=(e,n)=>{const{max:a,min:s,step:o,precision:f,stepStrictly:_,valueOnClear:S}=r;a<s&&_e("InputNumber","min should not be greater than max.");let d=Number(e);if(y(e)||Number.isNaN(d))return null;if(e===""){if(S===null)return null;d=Se(S)?{min:s,max:a}[S]:S}return _&&(d=B(Math.round(d/o)*o,f)),A(f)||(d=B(d,f)),(d>a||d<s)&&(d=d>a?a:s,n&&i(h,d)),d},g=(e,n=!0)=>{var a;const s=u.currentValue,o=M(e);if(!n){i(h,o);return}s!==o&&(u.userInput=null,i(h,o),i(Q,o,s),r.validateEvent&&((a=b==null?void 0:b.validate)==null||a.call(b,"change").catch(f=>J())),u.currentValue=o)},ne=e=>{u.userInput=e;const n=e===""?null:Number(e);i(T,n),g(n,!1)},te=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&g(n),u.userInput=null},ae=()=>{var e,n;(n=(e=m.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=m.value)==null?void 0:e.blur)==null||n.call(e)},le=e=>{i("focus",e)},ue=e=>{var n;i("blur",e),r.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"blur").catch(a=>J()))};return ve(()=>r.modelValue,e=>{const n=M(u.userInput),a=M(e,!0);!p(n)&&(!n||n!==a)&&(u.currentValue=a,u.userInput=null)},{immediate:!0}),Ne(()=>{var e;const{min:n,max:a,modelValue:s}=r,o=(e=m.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(V.value)),!p(s)&&s!=null){let f=Number(s);Number.isNaN(f)&&(f=null),i(h,f)}}),Ve(()=>{var e,n;const a=(e=m.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),N({focus:ae,blur:re}),(e,n)=>(v(),z("div",{class:O([t(c).b(),t(c).m(t(U)),t(c).is("disabled",t(V)),t(c).is("without-controls",!e.controls),t(c).is("controls-right",t(C))]),onDragstart:n[1]||(n[1]=k(()=>{},["prevent"]))},[e.controls?H((v(),z("span",{key:0,role:"button","aria-label":t(E)("el.inputNumber.decrease"),class:O([t(c).e("decrease"),t(c).is("disabled",t(w))]),onKeydown:P(K,["enter"])},[L(t(Z),null,{default:W(()=>[t(C)?(v(),F(t(Ie),{key:0})):(v(),F(t(he),{key:1}))]),_:1})],42,Ce)),[[t(j),K]]):q("v-if",!0),e.controls?H((v(),z("span",{key:1,role:"button","aria-label":t(E)("el.inputNumber.increase"),class:O([t(c).e("increase"),t(c).is("disabled",t(R))]),onKeydown:P(D,["enter"])},[L(t(Z),null,{default:W(()=>[t(C)?(v(),F(t(ye),{key:0})):(v(),F(t(Ee),{key:1}))]),_:1})],42,xe)),[[t(j),D]]):q("v-if",!0),L(t(we),{id:e.id,ref_key:"input",ref:m,type:"number",step:e.step,"model-value":t(x),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t(U),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=k(()=>{},["prevent"])),onKeydown:[P(k(D,["prevent"]),["up"]),P(k(K,["prevent"]),["down"])],onBlur:ue,onFocus:le,onInput:ne,onChange:te},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Ke=ge(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const ze=Ae(Ke);export{ze as E};
