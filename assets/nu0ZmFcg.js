import{v as k,x as m,y,I as T,c as O,J as f,z as v,K as g,L as h,M as $}from"./CiBUApk_.js";const p=Symbol.for("nuxt:client-only"),j=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:t,attrs:n}){const c=m(!1);return y(()=>{c.value=!0}),T(p,!0),l=>{var i;if(c.value)return(i=t.default)==null?void 0:i.call(t);const a=t.fallback||t.placeholder;if(a)return a();const u=l.fallback||l.placeholder||"",d=l.fallbackTag||l.placeholderTag||"span";return O(d,n,u)}}}),o=new WeakMap;function I(r){if(o.has(r))return o.get(r);const t={...r};return t.render?t.render=(n,c,l,a,u,d)=>{var i;if(a.mounted$??n.mounted$){const e=(i=r.render)==null?void 0:i.bind(n)(n,c,l,a,u,d);return e.children===null||typeof e.children=="string"?f(e):v(e)}else{const e=g(n._.vnode.el??null)??["<div></div>"];return h(e.join(""),e.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${r.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(n,c)=>{var i;const l=$(),a={...l.attrs},u=C(l);for(const e in a)delete l.attrs[e];const d=m(!1);return y(()=>{Object.assign(l.attrs,a),l.vnode.dirs=u,d.value=!0}),Promise.resolve(((i=r.setup)==null?void 0:i.call(r,n,c))||{}).then(e=>typeof e!="function"?(e=e||{},e.mounted$=d,e):(...b)=>{if(d.value){const s=e(...b);return s.children===null||typeof s.children=="string"?f(s):v(s)}else{const s=g((l==null?void 0:l.vnode.el)??null)??["<div></div>"];return h(s.join(""),s.length)}})},o.set(r,t),t}function C(r){if(!r||!r.vnode.dirs)return null;const t=r.vnode.dirs;return r.vnode.dirs=null,t}export{p as clientOnlySymbol,I as createClientOnly,j as default};