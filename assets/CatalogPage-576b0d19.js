import{a as t,r as i,j as e,C as d,L as f,f as u,b as A}from"./index-4ae5af94.js";import{u as E,s as L,a as p,b as x,c as P,A as h,L as m}from"./LoadMore-ae2b8ac3.js";import"./Button-5ed76c9e.js";const D=()=>{const o=E(),s=t(L),r=t(p),a=t(x),c=t(P);console.log("before useEffect "),i.useEffect(()=>{(async()=>{try{await o(u())}catch(g){console.error("Error fetching adverts: ",g)}console.log("CATALOG PAGE I AM uSE EFFECT ")})()},[o,a]),console.log("after useEffect "),console.log("TEST DATA :",s);const n=async()=>{o(A(a+1))},l=(s==null?void 0:s.length)<a*c;return console.log("last useEffect "),e.jsx(d,{children:r?e.jsx(f,{}):e.jsxs(e.Fragment,{children:[e.jsx(h,{adverts:s}),!l&&e.jsx(m,{onLoadMore:n})]})})};export{D as default};
