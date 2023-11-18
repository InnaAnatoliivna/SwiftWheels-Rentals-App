import{s as g,u as d,a as p,r as a,j as e,C as h,b as v}from"./index-d7cdf673.js";import{c as x,A as f}from"./AdvertsList-7ad0112b.js";import{B as u}from"./Button-7244c090.js";const m=g.div`
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
`,w=()=>{const o=d(),s=p(x),[r,i]=a.useState([]),n=12;return a.useEffect(()=>{(async()=>{try{const t=await v();if(t){const c=t.filter(l=>s.includes(l.id));i(c.slice(0,currentPage*n))}}catch(t){throw console.error("Error fetching adverts: ",t.message),t}})()},[s,currentPage]),e.jsx(h,{children:r.length>0?e.jsx(f,{adverts:r}):e.jsxs(m,{children:[e.jsx("p",{children:"Unfortunately, the list is empty."}),e.jsx(u,{onClick:()=>o("/catalog"),children:"Back to the catalog"})]})})};export{w as default};
