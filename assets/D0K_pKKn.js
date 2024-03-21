import{u as q,d as R,c as x,h as P,r as S,o as A,a as B,b as I,e as E,f as L,g as w,i as U,j as T,p as V,k as H,n as D,l as F,m as z,q as M,w as O,s as $,t as G,v as Q,x as W,y as g,z as _,A as J,B as K,C as X,D as Y,E as Z}from"./_bYNnj5m.js";import{_ as ee}from"./DlAUqK2U.js";async function j(t,a=q()){const{path:l,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(l)))return;const n=a._preloadPromises=a._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>j(t,a));a._routePreloaded.add(l);const s=e.map(c=>{var r;return(r=c.components)==null?void 0:r.default}).filter(c=>typeof c=="function");for(const c of s){const r=Promise.resolve(c()).catch(()=>{}).finally(()=>n.splice(n.indexOf(r)));n.push(r)}await Promise.all(n)}const te=(...t)=>t.find(a=>a!==void 0);function ae(t){const a=t.componentName||"NuxtLink";function l(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return C(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:n(e).path;return{...e,name:void 0,path:C(s,t.trailingSlash)}}return R({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const s=q(),c=F(),r=x(()=>{const o=e.to||e.href||"";return l(o,s.resolve)}),d=x(()=>typeof r.value=="string"&&P(r.value,{acceptRelative:!0})),m=x(()=>e.target&&e.target!=="_self"),b=x(()=>e.external||m.value?!0:typeof r.value=="object"?!1:r.value===""||d.value),k=S(!1),h=S(null),N=o=>{var f;h.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const f=z();let v,i=null;A(()=>{const y=ne();B(()=>{v=I(()=>{var u;(u=h==null?void 0:h.value)!=null&&u.tagName&&(i=y.observe(h.value,async()=>{i==null||i(),i=null;const p=typeof r.value=="string"?r.value:s.resolve(r.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",p).catch(()=>{}),!b.value&&j(r.value,s).catch(()=>{})]),k.value=!0}))})})}),E(()=>{v&&L(v),i==null||i(),i=null})}return()=>{var i,y;if(!b.value){const u={ref:N,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(k.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel||void 0),w(U("RouterLink"),u,n.default)}const o=typeof r.value=="object"?((i=s.resolve(r.value))==null?void 0:i.href)??null:r.value&&!e.external&&!d.value?l(T(c.app.baseURL,r.value),s.resolve):r.value||null,f=e.target||null,v=te(e.noRel?"":e.rel,t.externalRelAttribute,d.value||m.value?"noopener noreferrer":"")||null;if(e.custom){if(!n.default)return null;const u=()=>M(o,{replace:e.replace,external:e.external});return n.default({href:o,navigate:u,get route(){if(!o)return;const p=V(o);return{path:p.pathname,fullPath:p.pathname,get query(){return H(p.search)},hash:p.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:f,isExternal:b.value,isActive:!1,isExactActive:!1})}return w("a",{ref:h,href:o,rel:v,target:f},(y=n.default)==null?void 0:y.call(n))}}})}const re=ae(D);function C(t,a){const l=a==="append"?O:$;return P(t)&&!t.startsWith("http")?t:l(t,!0)}function ne(){const t=z();if(t._observer)return t._observer;let a=null;const l=new Map,e=(s,c)=>(a||(a=new IntersectionObserver(r=>{for(const d of r){const m=l.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&m&&m()}})),l.set(s,c),a.observe(s),()=>{l.delete(s),a.unobserve(s),l.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const se=t=>(Y("data-v-f953313c"),t=t(),Z(),t),le={class:"qiez-dz ss-jgvo abeksbi crnibib ctg-frq ilkmyhw zwgskkr dpyfwcf mdc-qve undbcpm"},ie=se(()=>g("div",{class:"wkhhiql zapolob uluiqsr -_igccx izbbezt"},null,-1)),ce={class:"nsqjdmx ehyyxqv jduequo"},ue=["textContent"],de=["textContent"],fe={class:"vlcmsec _ytwkw- khpatme szcrrbz"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return G({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(l,e)=>{const n=re;return Q(),W("div",le,[ie,g("div",ce,[g("h1",{class:"djl_ppv kdyujqs svifdar lhff_-j",textContent:_(t.statusCode)},null,8,ue),g("p",{class:"qem_thg tb-ripa -glpnep hcaqmts glzqdvf kh_nalx heegspg",textContent:_(t.description)},null,8,de),g("div",fe,[J(n,{to:"/",class:"tsliaok text-md rvkvzhr bjjbpop p_sxmcg y--qmkc xplwvej eantjbd"},{default:K(()=>[X(_(t.backHome),1)]),_:1})])])])}}},me=ee(he,[["__scopeId","data-v-f953313c"]]);export{me as default};