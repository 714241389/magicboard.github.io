import{g as c,u as d,i as r,d as o,N as p,S as m,t as n}from"./index.b77e2ee3.js";import{B as g}from"./Button.ccb4c380.js";import{g as f}from"./getDeviceId.e8f3946a.js";import{u as h}from"./solid.cab3af3f.js";import"./ButtonBase.98fadafb.js";const _=n("<h1>User Infomation</h1>"),C=n("<p>Deivce Id: </p>"),N=n("<p>Id: </p>"),$=n("<p>User-Device Id: </p>"),D=()=>{const s=c(),i=s.user(),l=d(),a=async()=>{await s.signOut(),l("/login")},u=h();return[_.cloneNode(!0),(()=>{const e=C.cloneNode(!0);return e.firstChild,r(e,f,null),e})(),o(m,{when:i,get fallback(){return o(p,{href:"/login"})},children:e=>[(()=>{const t=N.cloneNode(!0);return t.firstChild,r(t,()=>e.id,null),t})(),(()=>{const t=$.cloneNode(!0);return t.firstChild,r(t,()=>u.getUserDeviceId(),null),t})(),o(g,{onClick:a,children:"Sign out"})]})]};export{D as default};
//# sourceMappingURL=index.b337e167.js.map
