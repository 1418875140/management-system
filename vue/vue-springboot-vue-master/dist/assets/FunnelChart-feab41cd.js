import{i as a}from"./index-21782bc0.js";import{d as l,o,a as r,c as d,n as s,as as u}from"./index-6e278e4c.js";const c=["id"],p=l({__name:"FunnelChart",props:{id:{type:String,default:"funnelChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(e){const n=e,i={title:{show:!0,text:"订单线索转化漏斗图",x:"center",padding:15,textStyle:{fontSize:18,fontStyle:"normal",fontWeight:"bold",color:"#337ecc"}},grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},legend:{x:"center",y:"bottom",data:["Show","Click","Visit","Inquiry","Order"]},series:[{name:"Funnel",type:"funnel",left:"20%",top:60,bottom:60,width:"60%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:60,name:"Visit"},{value:40,name:"Inquiry"},{value:20,name:"Order"},{value:80,name:"Click"},{value:100,name:"Show"}]}]};return o(()=>{const t=a(document.getElementById(n.id));t.setOption(i),window.addEventListener("resize",()=>{t.resize()})}),(t,m)=>(r(),d("div",{id:e.id,class:s(e.className),style:u({height:e.height,width:e.width})},null,14,c))}});export{p as default};
