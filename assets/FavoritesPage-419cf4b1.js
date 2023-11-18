import{j as t,s as u,u as f,a as m,r as n,C as j,b as A}from"./index-3bb3bce1.js";import{W as L,d as y,A as E}from"./LoadMore.styled-172a6ec2.js";import{B as l}from"./Button-0889417b.js";const F=({onLoadMore:o})=>{console.log("adverts LOAD MORE : START ");const r=async e=>{e.preventDefault(),o()};return console.log("adverts LOAD MORE : END "),t.jsx(L,{children:t.jsx(l,{onClick:r,children:"Load more"})})},w=u.div`
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
`,P=()=>{const o=f(),r=m(y),[e,d]=n.useState([]),[a,g]=n.useState(1),c=12;n.useEffect(()=>{(async()=>{try{const s=await A();if(s){const v=s.filter(x=>r.includes(x.id));d(v.slice(0,a*c))}}catch(s){throw console.error("Error fetching adverts: ",s.message),s}})()},[r,a]);const h=()=>{g(i=>i+1)},p=e.length<a*c;return t.jsxs(j,{children:[e.length>0?t.jsx(E,{adverts:e}):t.jsxs(w,{children:[t.jsx("p",{children:"Unfortunately, the list is empty."}),t.jsx(l,{onClick:()=>o("/catalog"),children:"Back to the catalog"})]}),!p&&t.jsx(F,{onLoadMore:h})]})};export{P as default};
