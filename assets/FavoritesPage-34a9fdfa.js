import{s as k,u as M,a as p,r as t,c as F,j as e,C as S}from"./index-7e0d5cfc.js";import{u as y,b as A,e as E,D as L,A as P,L as w}from"./DropdownMake-b76e838c.js";import{B}from"./Button-1636f54e.js";const C=k.div`
    height: 100vh;
    position: relative;

    /* padding: 200px 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    p {
        color: var(--color-text);
        width: 100%;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2; /* 111.429% */
        letter-spacing: 0.7px;
        text-align: center;
    }
`,z=()=>{const c=y(),u=M(),a=p(A),n=p(E),[s,d]=t.useState([]),[r,f]=t.useState(1),l=12,[g,x]=t.useState(null),[h,m]=t.useState(null);t.useEffect(()=>{c(F())},[]),t.useEffect(()=>{n&&d(n.slice(0,r*l))},[r,c,n]),t.useEffect(()=>{const o=Array.from(new Set(s.map(i=>i.make).flat()));m(o),a&&x(s.filter(i=>a.includes(i.make)))},[a,s,r]);const v=()=>{f(o=>o+1)},j=s.length<r*l;return e.jsxs(S,{children:[s.length>0?e.jsxs(e.Fragment,{children:[e.jsx(L,{makes:h}),e.jsx(P,{adverts:a?g:s})]}):e.jsxs(C,{children:[e.jsx("p",{children:"Unfortunately, the list is empty."}),e.jsx(B,{onClick:()=>u("/catalog"),children:"Back to the catalog"})]}),!j&&!a&&e.jsx(w,{onLoadMore:v})]})};export{z as default};
