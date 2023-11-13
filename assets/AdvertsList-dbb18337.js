import{R as j,c as W,d as B,s as o,j as e,a as L,r as v,e as P,g as $,h as z,i as C,o as D}from"./index-1f7298b6.js";import{B as O}from"./Button-4c81f109.js";function M(t=j){const r=t===j?W:B(t);return function(){const{store:i}=r();return i}}const N=M();function T(t=j){const r=t===j?N:M(t);return function(){return r().dispatch}}const A=T(),H=o.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,U=({children:t})=>e.jsx(H,{children:t});let s=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((r,n)=>(n&=63,n<36?r+=n.toString(36):n<62?r+=(n-26).toString(36).toUpperCase():n>62?r+="-":r+="_",r),"");const q=o.div`
p {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    gap: 6px;
    margin-top: 14px;
    span{
        &.price {
            margin-left: auto;
        }
        &.accent {
            color: var(--color-accent);
        }
    }
}
`,G=o.div`
    max-width: 274px;
    height: 268px;
    border: 0.1px solid transparent;
    border-radius: 14px;
    overflow: hidden;
img { 
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit:cover;}
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.50) 2.5%,
            rgba(18, 20, 23, 0.00) 41.07%
        );
        border-radius: 14px;
    }
`,V=o.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,X=({advert:t,handleOpenModal:r})=>{const{img:n,make:i,year:a,model:l,rentalPrice:c,rentalCompany:d,type:h,id:b,functionalities:p}=t,u=p.reduce((x,g)=>g.length<x.length?g:x,p[0]),f=t.address.split(",").map(x=>x.trim()),I=f[1],m=f[2],k=()=>{r(t)};return e.jsxs(q,{children:[e.jsx(G,{children:e.jsx("img",{src:n,alt:"rental car"})}),e.jsxs("p",{children:[i,e.jsxs("span",{className:"accent",children:[l,","]}),a,e.jsx("span",{className:"price",children:c})]}),e.jsxs(V,{children:[e.jsxs("li",{children:[I,"  |"]},s()),e.jsxs("li",{children:[m,"  |"]},s()),e.jsxs("li",{children:[d,"  |"]},s()),e.jsxs("li",{children:[l,"  |"]},s()),e.jsxs("li",{children:[h,"  |"]},s()),e.jsxs("li",{children:[b,"  |"]},s()),e.jsx("li",{children:u},s())]}),e.jsx(O,{onClick:k,children:"Learn more"})]})},R="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",Y=t=>t.adverts.items,pe=t=>t.adverts.isLoading,xe=t=>t.favorities.favorities,he=t=>t.pagination.currentPage,_=t=>t.modal.isOpen,J=o.svg`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    fill: transparent;
    stroke: var(--color-text-light);
    /* stroke: black; */
    transition: fill linear  500ms, stroke linear 500ms;
    &.active{
        fill: var(--color-accent-active);
        stroke: var(--color-accent-active);
    }
`,K=({advertId:t})=>{const r=A(),n=L(Y),[i,a]=v.useState(!1),l=c=>{const d=n.find(h=>h.id===c);i?i&&d&&(a(!1),r($(d))):d&&(a(!0),r(P(d)))};return e.jsx("div",{onClick:()=>l(t),children:e.jsx(J,{width:"24",height:"24",className:i&&"active",children:e.jsx("use",{href:`${R}#icon-heart`})})})},Q=o.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;
`,Z=o.div`
    position: relative;
`,ee=({onClick:t,children:r})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:r}),te=o.div`
    position: absolute;
    top: 85px;
    left: 50%;
    transform: translate(-50%) rotateX(0);
    transition: transform 250ms linear;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    background: #10100f;
    max-width: 335px;
    width: calc(100% - 40px);
    padding: 32px;

    background: #efefbb; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #d4d3dd,
        #efefbb
  ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #d4d3dd,
        #efefbb
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (min-width: 768px) {
        max-width: 479px;
        width: 479px;
        /* height: 286px; */
    }
`,re=o.div`
    position: relative;
`,se=o.svg`
    stroke: var(--color-text);
    padding: 0;
    transition: all 0.1s linear;
    position: relative;
    left: 94%;
    cursor: pointer;
    &:hover,
    &:focus {
        stroke: black;
        }

    @media screen and (min-width: 768px) {
        width: 26px;
        height: 26px;

        svg {
        width: 26px;
        height: 26px;
        }
    }
`,ne=o.div`
overflow-y: auto; 
`,ie=o.div`
    max-width: 469px;
    height: 314px;
    border: 0.1px solid transparent;
    border-radius: 14px;
    overflow: hidden;
    margin-top: 14px;
img { 
    display: block;
    width: 100%;
    height: 100%;
    object-fit:cover;}
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        background: linear-gradient(
            180deg,
            rgba(18, 20, 23, 0.50) 2.5%,
            rgba(18, 20, 23, 0.00) 41.07%
        );
        border-radius: 14px;
    }
`,y=o.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,S=o.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,oe=o.a`
    text-decoration: none;
    display: flex;
    /* justify-content: start; */
    width: 274px;
    height: 44px;
    padding: 12px 99px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: var(--color-accent);
    transition: background-color linear 500ms;
    color: var(--color-text-light);
    cursor: pointer;
    &:hover {
        background-color: var(--color-accent-active);
    }
`,ae=({advert:t})=>{const{img:r,make:n,year:i,model:a,rentalPrice:l,type:c,id:d,fuelConsumption:h,engineSize:b,functionalities:p,accessories:u,rentalConditions:E,mileage:f}=t,m=t.address.split(",").map(w=>w.trim()),k=m[1],x=m[2],g=E,F=g.split("  ").map(w=>w.trim());return console.log(g),e.jsxs(ne,{children:[e.jsx(ie,{children:e.jsx("img",{src:r,alt:"rental car"})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[a,","]}),i]}),e.jsxs(y,{children:[e.jsxs("li",{children:[k,"  |"]},s()),e.jsxs("li",{children:[x,"  |"]},s()),e.jsxs("li",{children:["Id: ",d,"  |"]},s()),e.jsxs("li",{children:["Year: ",i,"  |"]},s()),e.jsxs("li",{children:["Type: ",c,"  |"]},s()),e.jsxs("li",{children:["Fuel Concumption: ",h,"  |"]},s()),e.jsxs("li",{children:["Engine Size: ",b,"  |"]},s())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(y,{children:[e.jsxs("li",{children:[u[0],"  |"]},s()),e.jsxs("li",{children:[u[1],"  |"]},s()),e.jsxs("li",{children:[u[2],"  |"]},s()),e.jsxs("li",{children:[p[0],"  |"]},s()),e.jsxs("li",{children:[p[1],"  |"]},s()),e.jsx("li",{children:p[2]},s())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(y,{children:[e.jsx(S,{children:F[0]},s()),e.jsxs(S,{children:["Mileage: ",f.toLocaleString("en-US",{useGrouping:!0})]},s()),e.jsxs(S,{children:["Price: ",l]},s())]}),e.jsx("div",{children:e.jsx(oe,{href:"tel:+380730000000",children:"Rental car"})})]})},ce=({advert:t})=>{const r=A();v.useEffect(()=>{const a=l=>{l.code==="Escape"&&r(C())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[r]),v.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const n=a=>{a.currentTarget===a.target&&r(C())},i=()=>r(C());return z.createPortal(e.jsx(ee,{onClick:n,children:e.jsxs(te,{children:[e.jsx(re,{children:e.jsx(se,{width:"24",height:"24",onClick:i,children:e.jsx("use",{href:`${R}#icon-x`})})}),e.jsx(ae,{advert:t})]})}),document.querySelector("#modal-root"))},ue=({adverts:t})=>{const r=A(),n=L(_),[i,a]=v.useState(null),l=c=>{r(D()),a(c)};return e.jsxs(Q,{children:[t.map(c=>e.jsx(Z,{children:e.jsxs(U,{children:[e.jsx(X,{advert:c,handleOpenModal:l}),e.jsx(K,{advertId:c.id})]})},c.id)),n&&e.jsx(ce,{advert:i})]})};export{ue as A,pe as a,he as b,xe as c,Y as s,A as u};
