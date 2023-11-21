import{s as r,u as i,r as a,j as e}from"./index-e4befc3a.js";const n=r.div`
  padding: 200px 0;
`,o=r.div`
  color: var(--color-text);
  /* width: 100%; */
  /* max-width: 598px; */
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2; /* 111.429% */
  letter-spacing: 0.7px;
  text-align: center;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`,x=()=>{const t=i();return a.useEffect(()=>{const s=setTimeout(()=>{t("/")},5e3);return()=>{clearTimeout(s)}},[t]),e.jsx(n,{children:e.jsxs(o,{className:"text-message",children:["404 Not Found. ",e.jsx("br",{}),"Will be redicted to the home page!"]})})};export{x as default};
