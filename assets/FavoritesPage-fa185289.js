import{s as i,u as o,a as e,r as n,j as t,C as c}from"./index-21708812.js";import{c as l,s as p,A as d}from"./AdvertsList-780aa350.js";import{B as x}from"./Button-c036df31.js";const g=i.div`
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
`,m=()=>{const s=o(),a=JSON.parse(e(l));e(p);const[r,h]=n.useState([]);return t.jsx(c,{children:a.length>0?t.jsx(d,{adverts:r}):t.jsxs(g,{children:[t.jsx("p",{children:"Unfortunately, the list is empty."}),t.jsx(x,{onClick:()=>s("/catalog"),children:"Back to the catalog"})]})})};export{m as default};
