import{s as u,u as v,a as f,r as a,j as t,C as m,c as j}from"./index-bfe7dbd4.js";import{d as A,A as y,L as F}from"./LoadMore-f734abe7.js";import{B as w}from"./Button-f7c498e6.js";const L=u.div`
    height: 100vh;

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
`,E=()=>{const c=v(),o=f(A),[s,l]=a.useState([]),[r,g]=a.useState(1),n=12;a.useEffect(()=>{(async()=>{try{const e=await j();if(e){const p=e.filter(x=>o.includes(x.id));l(p.slice(0,r*n))}}catch(e){throw console.error("Error fetching adverts: ",e.message),e}})()},[o,r]);const d=()=>{g(i=>i+1)},h=s.length<r*n;return t.jsxs(m,{children:[s.length>0?t.jsx(y,{adverts:s}):t.jsxs(L,{children:[t.jsx("p",{children:"Unfortunately, the list is empty."}),t.jsx(w,{onClick:()=>c("/catalog"),children:"Back to the catalog"})]}),!h&&t.jsx(F,{onLoadMore:d})]})};export{E as default};
