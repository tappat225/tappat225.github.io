import{l as m}from"./app.QQNziLsE.js";import"./chunks/dayjs.Byk5cVHE.js";import{f,e as _,c as v,Q as n,P as r,U as s,S as x,u as i,W as y,F as h,a0 as g,$ as b,Y as c}from"./framework.DntyxCiH.js";import{u as k}from"./chunks/vue-i18n.C-9EDs2w.js";const C={class:"yun-sponsor-container flex-center flex-col"},w=["title"],S={key:0,class:"sponsor-description",mb:"4",text:"sm"},B={class:"flex justify-around"},z=["href"],$=["src","title"],Y=f({__name:"YunSponsor",setup(q){const{t:d}=k(),o=m(),a=_(!1),u=v(()=>{var l;return((l=o.value.sponsor)==null?void 0:l.title)??d("reward.donate")});return(l,t)=>(r(),n("div",C,[s("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:u.value,text:"red-400",onClick:t[0]||(t[0]=e=>a.value=!a.value)},t[1]||(t[1]=[s("div",{class:"mt-2px","i-ri-heart-fill":""},null,-1)]),8,w),s("div",{class:c(["qrcode-container qrcode flex-center flex-col",a.value&&"show"]),m:"y-4"},[i(o).sponsor.description?(r(),n("div",S,y(i(o).sponsor.description),1)):x("v-if",!0),s("div",B,[(r(!0),n(h,null,g(i(o).sponsor.methods,(e,p)=>(r(),n("a",{key:p,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:e.url,target:"_blank",style:b(`color:${e.color}`)},[s("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:e.url,title:e.name},null,8,$),s("div",{text:"xl",m:"2",class:c(e.icon)},null,2)],12,z))),128))])],2)]))}});export{Y as _};
