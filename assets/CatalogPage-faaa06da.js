import{s as n,j as t,a as o,r as i,C as l,L as u,f as g,b as p}from"./index-21708812.js";import{u as x,s as f,a as m,b as v,A as h}from"./AdvertsList-780aa350.js";import{B as j}from"./Button-c036df31.js";const L=n.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
`,A=({onLoadMore:s})=>{const e=async r=>{r.preventDefault(),s()};return t.jsx(L,{children:t.jsx(j,{onClick:e,children:"Load more"})})},y=n(A)`
    margin-bottom: 70px;
`,P=()=>{const s=x(),e=o(f),r=o(m),a=o(v);i.useEffect(()=>{(async()=>{try{await s(g())}catch(d){console.error("Error fetching adverts: ",d)}})()},[s,a]);const c=async()=>{s(p(a+1))};return t.jsx(l,{children:r?t.jsx(u,{}):t.jsxs(t.Fragment,{children:[t.jsx(h,{adverts:e}),a<3&&t.jsx(y,{onLoadMore:c})]})})};export{P as default};
