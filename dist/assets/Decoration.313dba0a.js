import{u as I}from"./useProp.afe31ed3.js";import{d as V,r as n,w as B,o as i,c as o,l as G,F as x,e as M,u as t,m,b as c,p as A,j as F,f as H,_ as R}from"./index.b33072fc.js";const j=r=>(A("data-v-916e6264"),r=r(),F(),r),E={class:"dv-decoration-1"},W=["width","height"],q=["fill","x","y","width","height"],J=["values","begin"],K=["fill","x","y","width","height"],O=["values"],Q=["values"],T=["values"],U=["values"],X=["fill","x","y","height"],Y=j(()=>c("animate",{attributeName:"width",values:"0;40;0",dur:"2s",repeatCount:"indefinite"},null,-1)),Z=["values"],ee=V({__name:"Decoration",props:{component:null},setup(r){const $=r,{propValue:e}=I($.component),f=n(200),w=n(60),d=n([200,50]),g=n([1,1]),S=n(4),h=n(20),y=n(Number(e.base.pointSideLength)/2),v=n([]),a=n([]),N=s=>{const u=s[0].contentRect;f.value=u.width,w.value=u.height,C()},C=()=>{k(),P(),D()},k=()=>{const[s,l]=d.value,u=s/(h.value+1),p=l/(S.value+1);let _=new Array(S.value).fill(0).map((L,b)=>new Array(h.value).fill(0).map((te,z)=>[u*(z+1),p*(b+1)]));v.value=_.reduce((L,b)=>[...L,...b],[])},P=()=>{const s=v.value[h.value*2-1],l=v.value[h.value*2-3];a.value=[s,l]},D=()=>{const[s,l]=d.value;g.value=[f.value/s,w.value/l]};return(s,l)=>{const u=H("resize");return B((i(),o("div",E,[(i(),o("svg",{width:`${d.value[0]}px`,height:`${d.value[1]}px`,style:G(`transform:scale(${g.value[0]},${g.value[1]});`)},[(i(!0),o(x,null,M(v.value,(p,_)=>(i(),o(x,{key:_},[Math.random()>.6?(i(),o("rect",{key:_,fill:t(e).base.color1,x:p[0]-y.value,y:p[1]-y.value,width:t(e).base.pointSideLength,height:t(e).base.pointSideLength},[Math.random()>.6?(i(),o("animate",{key:0,attributeName:"fill",values:`${t(e).base.color1};transparent`,dur:"1s",begin:Math.random()*2,repeatCount:"indefinite"},null,8,J)):m("",!0)],8,q)):m("",!0)],64))),128)),a.value[0]?(i(),o("rect",{key:0,fill:t(e).base.color2,x:a.value[0][0]-t(e).base.pointSideLength,y:a.value[0][1]-t(e).base.pointSideLength,width:t(e).base.pointSideLength*2,height:t(e).base.pointSideLength*2},[c("animate",{attributeName:"width",values:`0;${t(e).base.pointSideLength*2}`,dur:"2s",repeatCount:"indefinite"},null,8,O),c("animate",{attributeName:"height",values:`0;${t(e).base.pointSideLength*2}`,dur:"2s",repeatCount:"indefinite"},null,8,Q),c("animate",{attributeName:"x",values:`${a.value[0][0]};${a.value[0][0]-t(e).base.pointSideLength}`,dur:"2s",repeatCount:"indefinite"},null,8,T),c("animate",{attributeName:"y",values:`${a.value[0][1]};${a.value[0][1]-t(e).base.pointSideLength}`,dur:"2s",repeatCount:"indefinite"},null,8,U)],8,K)):m("",!0),a.value[1]?(i(),o("rect",{key:1,fill:t(e).base.color2,x:a.value[1][0]-40,y:a.value[1][1]-t(e).base.pointSideLength,width:40,height:t(e).base.pointSideLength*2},[Y,c("animate",{attributeName:"x",values:`${a.value[1][0]};${a.value[1][0]-40};${a.value[1][0]}`,dur:"2s",repeatCount:"indefinite"},null,8,Z)],8,X)):m("",!0)],12,W))])),[[u,N]])}}});const se=R(ee,[["__scopeId","data-v-916e6264"]]);export{se as default};
