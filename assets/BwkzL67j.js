import{d as k,r as m,o as b,N as O,x as T,O as f,g as v,P as g,M as h,Q as $}from"./_bYNnj5m.js";const p=Symbol.for("nuxt:client-only"),j=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:t,attrs:n}){const u=m(!1);return b(()=>{u.value=!0}),O(p,!0),l=>{var i;if(u.value)return(i=t.default)==null?void 0:i.call(t);const a=t.fallback||t.placeholder;if(a)return a();const c=l.fallback||l.placeholder||"",d=l.fallbackTag||l.placeholderTag||"span";return T(d,n,c)}}}),o=new WeakMap;function N(r){if(o.has(r))return o.get(r);const t={...r};return t.render?t.render=(n,u,l,a,c,d)=>{var i;if(a.mounted$??n.mounted$){const e=(i=r.render)==null?void 0:i.bind(n)(n,u,l,a,c,d);return e.children===null||typeof e.children=="string"?f(e):v(e)}else{const e=g(n._.vnode.el??null)??["<div></div>"];return h(e.join(""),e.length)}}:t.template&&(t.template=`
      <template v-if="mounted$">${r.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(n,u)=>{var i;const l=$(),a={...l.attrs},c=C(l);for(const e in a)delete l.attrs[e];const d=m(!1);return b(()=>{Object.assign(l.attrs,a),l.vnode.dirs=c,d.value=!0}),Promise.resolve(((i=r.setup)==null?void 0:i.call(r,n,u))||{}).then(e=>typeof e!="function"?(e=e||{},e.mounted$=d,e):(...y)=>{if(d.value){const s=e(...y);return s.children===null||typeof s.children=="string"?f(s):v(s)}else{const s=g((l==null?void 0:l.vnode.el)??null)??["<div></div>"];return h(s.join(""),s.length)}})},o.set(r,t),t}function C(r){if(!r||!r.vnode.dirs)return null;const t=r.vnode.dirs;return r.vnode.dirs=null,t}export{p as clientOnlySymbol,N as createClientOnly,j as default};