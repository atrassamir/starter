import d from"./Bh_B2UWN.js";import{a as c,G as l,I as p}from"./DC723pxw.js";import"./BEiouHqi.js";import"./DHs3aRRL.js";import"./BpFBv2As.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(d,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:n})=>t.default({list:e,refresh:o,isPartial:n,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),S=h;export{S as default};
