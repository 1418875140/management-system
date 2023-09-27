import{b as k,aZ as z,b1 as B,N as _,a_ as N,aT as w,a$ as H,r as S,j as J,C as v,b5 as W,b6 as Z,d as y,u as I,a as $,c as G,k as g,O as h,bT as F,f as e,aq as P,n as c,ac as R,e as V,a2 as T,t as D,_ as C,$ as K,as as Q,bv as X,b3 as Y,bo as x,o as ee,p as oe,J as ae,aD as le,K as se,bb as ne,q as te,s as A}from"./index-6e278e4c.js";const M=k({size:z,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),re=k({...M,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),q={[B]:s=>_(s)||N(s)||w(s),[H]:s=>_(s)||N(s)||w(s)},L=Symbol("radioGroupKey"),U=(s,b)=>{const n=S(),a=J(L,void 0),d=v(()=>!!a),m=v({get(){return d.value?a.modelValue:s.modelValue},set(i){d.value?a.changeEvent(i):b&&b(B,i),n.value.checked=s.modelValue===s.label}}),r=W(v(()=>a==null?void 0:a.size)),u=Z(v(()=>a==null?void 0:a.disabled)),l=S(!1),p=v(()=>u.value||d.value&&m.value!==s.label?-1:0);return{radioRef:n,isGroup:d,radioGroup:a,focus:l,size:r,disabled:u,tabIndex:p,modelValue:m}},ie=["value","name","disabled"],de=y({name:"ElRadio"}),ue=y({...de,props:re,emits:q,setup(s,{emit:b}){const n=s,a=I("radio"),{radioRef:d,radioGroup:m,focus:r,size:u,disabled:l,modelValue:p}=U(n,b);function i(){K(()=>b("change",p.value))}return(o,t)=>{var f;return $(),G("label",{class:c([e(a).b(),e(a).is("disabled",e(l)),e(a).is("focus",e(r)),e(a).is("bordered",o.border),e(a).is("checked",e(p)===o.label),e(a).m(e(u))])},[g("span",{class:c([e(a).e("input"),e(a).is("disabled",e(l)),e(a).is("checked",e(p)===o.label)])},[h(g("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=E=>P(p)?p.value=E:null),class:c(e(a).e("original")),value:o.label,name:o.name||((f=e(m))==null?void 0:f.name),disabled:e(l),type:"radio",onFocus:t[1]||(t[1]=E=>r.value=!0),onBlur:t[2]||(t[2]=E=>r.value=!1),onChange:i,onClick:t[3]||(t[3]=R(()=>{},["stop"]))},null,42,ie),[[F,e(p)]]),g("span",{class:c(e(a).e("inner"))},null,2)],2),g("span",{class:c(e(a).e("label")),onKeydown:t[4]||(t[4]=R(()=>{},["stop"]))},[V(o.$slots,"default",{},()=>[T(D(o.label),1)])],34)],2)}}});var pe=C(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const be=k({...M,name:{type:String,default:""}}),me=["value","name","disabled"],ce=y({name:"ElRadioButton"}),fe=y({...ce,props:be,setup(s){const b=s,n=I("radio"),{radioRef:a,focus:d,size:m,disabled:r,modelValue:u,radioGroup:l}=U(b),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(i,o)=>{var t;return $(),G("label",{class:c([e(n).b("button"),e(n).is("active",e(u)===i.label),e(n).is("disabled",e(r)),e(n).is("focus",e(d)),e(n).bm("button",e(m))])},[h(g("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":o[0]||(o[0]=f=>P(u)?u.value=f:null),class:c(e(n).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((t=e(l))==null?void 0:t.name),disabled:e(r),onFocus:o[1]||(o[1]=f=>d.value=!0),onBlur:o[2]||(o[2]=f=>d.value=!1),onClick:o[3]||(o[3]=R(()=>{},["stop"]))},null,42,me),[[F,e(u)]]),g("span",{class:c(e(n).be("button","inner")),style:Q(e(u)===i.label?e(p):{}),onKeydown:o[4]||(o[4]=R(()=>{},["stop"]))},[V(i.$slots,"default",{},()=>[T(D(i.label),1)])],38)],2)}}});var j=C(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=k({id:{type:String,default:void 0},size:z,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=q,ye=["id","aria-label","aria-labelledby"],Re=y({name:"ElRadioGroup"}),ke=y({...Re,props:ve,emits:ge,setup(s,{emit:b}){const n=s,a=I("radio"),d=X(),m=S(),{formItem:r}=Y(),{inputId:u,isLabeledByFormItem:l}=x(n,{formItemContext:r}),p=o=>{b(B,o),K(()=>b("change",o))};ee(()=>{const o=m.value.querySelectorAll("[type=radio]"),t=o[0];!Array.from(o).some(f=>f.checked)&&t&&(t.tabIndex=0)});const i=v(()=>n.name||d.value);return oe(L,ae({...le(n),changeEvent:p,name:i})),se(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(o=>ne()))}),(o,t)=>($(),G("div",{id:e(u),ref_key:"radioGroupRef",ref:m,class:c(e(a).b("group")),role:"radiogroup","aria-label":e(l)?void 0:o.label||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[V(o.$slots,"default")],10,ye))}});var O=C(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Se=te(pe,{RadioButton:j,RadioGroup:O}),Be=A(O);A(j);export{Se as E,Be as a};
