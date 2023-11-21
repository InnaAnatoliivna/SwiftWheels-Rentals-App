import{s as v,u as m,a as j,r as s,j as t,C as A,L,c as F}from"./index-07cb6942.js";import{d as y,A as w,L as P}from"./LoadMore-9bf97d95.js";import{B}from"./Button-9c581831.js";const C=v.div`
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
`,k=()=>{const l=m(),n=j(y),[a,g]=s.useState([]),[r,d]=s.useState(1),i=12,[h,o]=s.useState(!1);s.useEffect(()=>{(async()=>{try{o(!0);const e=await F();if(e){const f=e.filter(u=>n.includes(u.id));g(f.slice(0,r*i))}o(!1)}catch(e){throw o(!1),console.error("Error fetching adverts: ",e.message),e}})()},[n,r]);const p=()=>{d(c=>c+1)},x=a.length<r*i;return t.jsx(A,{children:h?t.jsx(L,{}):t.jsxs(t.Fragment,{children:[a.length>0?t.jsx(w,{adverts:a}):t.jsxs(C,{children:[t.jsx("p",{children:"Unfortunately, the list is empty."}),t.jsx(B,{onClick:()=>l("/catalog"),children:"Back to the catalog"})]}),!x&&t.jsx(P,{onLoadMore:p})]})})};export{k as default};
