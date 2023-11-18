import{s as t,u as i,j as e,C as o}from"./index-d7cdf673.js";import{B as r}from"./Button-7244c090.js";const s="/SwiftWheels-Rentals-App/assets/AdobeStock_86477498-20be7c31.jpg",c=t.div`
    position: relative;
    background-image: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
        url(${s});
    background-size: cover;
    background-repeat: no-repeat;
`,l=t.div`
    height: 100vh;

    h2 {
        color: var(--color-hero);
        width: 100%;
        /* max-width: 598px; */
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2; /* 111.429% */
        letter-spacing: 0.7px;
        text-align: center;
        margin-bottom: 32px;
    }
    /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 28px;
`,p=()=>{const n=i(),a=()=>{n("/catalog")};return e.jsx(c,{children:e.jsx(o,{children:e.jsxs(l,{children:[e.jsx("h2",{children:"Welcome to SwiftWheels-rentals!"}),e.jsx(r,{onClick:a,children:"Find a car"})]})})})};export{p as default};
