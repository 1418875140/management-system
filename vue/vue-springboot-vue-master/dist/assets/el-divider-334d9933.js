import{b as c,g as p,d as a,u,C as v,a as r,c as o,n as i,f as s,e as m,ak as f,as as y,_ as S,q as _}from"./index-6e278e4c.js";const b=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),g=a({name:"ElDivider"}),h=a({...g,props:b,setup(n){const l=n,e=u("divider"),d=v(()=>e.cssVar({"border-style":l.borderStyle}));return(t,P)=>(r(),o("div",{class:i([s(e).b(),s(e).m(t.direction)]),style:y(s(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(r(),o("div",{key:0,class:i([s(e).e("text"),s(e).is(t.contentPosition)])},[m(t.$slots,"default")],2)):f("v-if",!0)],6))}});var k=S(h,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const C=_(k);export{C as E};
