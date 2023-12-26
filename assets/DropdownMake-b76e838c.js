import{R as k,d as P,e as $,s as i,j as e,a as w,g as z,h as B,r as f,i as T,k as L,o as O,l as H}from"./index-7e0d5cfc.js";import{B as R}from"./Button-1636f54e.js";function D(t=k){const s=t===k?P:$(t);return function(){const{store:o}=s();return o}}const N=D();function U(t=k){const s=t===k?N:D(t);return function(){return s().dispatch}}const C=U(),q=i.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,G=({children:t})=>e.jsx(q,{children:t});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,r)=>(r&=63,r<36?s+=r.toString(36):r<62?s+=(r-26).toString(36).toUpperCase():r>62?s+="-":s+="_",s),"");const V=i.div`
p {
    position: relative;
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
`,X=i.div`
    max-width: 274px;
    height: 268px;
    border: 0.1px solid transparent;
    border-radius: 14px;
    overflow: hidden;
    img { 
        display: block;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }
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
`,Y=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,_=t=>t.adverts.items,be=t=>t.adverts.isLoading,ke=t=>t.adverts.currentPage,we=t=>t.adverts.perPage,J=t=>t.favorities.items,K=t=>t.favorities.favorities,Ce=t=>t.filter.makes,Q=t=>t.modal.isOpen,W="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",Z=i.svg`
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
`,ee=({advertId:t,isFavorite:s})=>{const r=C(),o=w(_),a=w(J),c=l=>{const g=o==null?void 0:o.find(p=>p.id===l),u=a==null?void 0:a.find(p=>p.id===l);r(s?z(u):B(g))};return e.jsx("div",{onClick:()=>c(t),children:e.jsx(Z,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${W}#icon-heart`})})})},te="/SwiftWheels-Rentals-App/assets/Car-Hire-Online-ad8eb827.jpg",se=({advert:t,handleOpenModal:s})=>{const{img:r,make:o,year:a,model:c,rentalPrice:l,rentalCompany:g,type:u,id:p,functionalities:x}=t,h=w(K),[y,m]=f.useState(!1);f.useEffect(()=>{const d=h.length>0?h.some(b=>p===b):!1;m(!!d)},[p,h]);const E=x&&Array.isArray(x)?x.reduce((d,b)=>b.length<d.length?b:d,x[0]):"",j=(t.address||"").split(",").map(d=>d.trim()),A=j[1]||"",v=j[2]||"",M=()=>{s(t)};return e.jsxs(V,{children:[e.jsx(X,{children:e.jsx("img",{src:r||te,alt:`${o} ${c}, ${a}`})}),e.jsxs("p",{children:[o,e.jsxs("span",{className:"accent",children:[c,","]}),a,e.jsx("span",{className:"price",children:l})]}),e.jsxs(Y,{children:[e.jsxs("li",{children:[A,"  |"]},n()),e.jsxs("li",{children:[v,"  |"]},n()),e.jsxs("li",{children:[g,"  |"]},n()),e.jsxs("li",{children:[c,"  |"]},n()),e.jsxs("li",{children:[u,"  |"]},n()),e.jsxs("li",{children:[p,"  |"]},n()),e.jsx("li",{children:E},n())]}),e.jsx(R,{onClick:M,children:"Learn more"}),e.jsx(ee,{advertId:t.id,isFavorite:y})]})},re=i.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;


`,ne=i.li`
    position: relative;
`,oe=({onClick:t,children:s})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:s}),ie=i.div`
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
`,ae=i.div`
    position: relative;
`,ce=i.svg`
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
`,le=i.div`
overflow-y: auto; 
`,de=i.div`
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
`,F=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,I=i.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,pe=i.a`
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
`,xe=({advert:t})=>{const{img:s,make:r,year:o,model:a,rentalPrice:c,type:l,id:g,fuelConsumption:u,engineSize:p,functionalities:x,accessories:h,rentalConditions:y,mileage:m}=t,S=t.address.split(",").map(d=>d.trim()),j=S[1],A=S[2],v=y,M=v.split("  ").map(d=>d.trim());return console.log(v),e.jsxs(le,{children:[e.jsx(de,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[r,e.jsxs("span",{className:"accent",children:[a,","]}),o]}),e.jsxs(F,{children:[e.jsxs("li",{children:[j,"  |"]},n()),e.jsxs("li",{children:[A,"  |"]},n()),e.jsxs("li",{children:["Id: ",g,"  |"]},n()),e.jsxs("li",{children:["Year: ",o,"  |"]},n()),e.jsxs("li",{children:["Type: ",l,"  |"]},n()),e.jsxs("li",{children:["Fuel Concumption: ",u,"  |"]},n()),e.jsxs("li",{children:["Engine Size: ",p,"  |"]},n())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(F,{children:[e.jsxs("li",{children:[h[0],"  |"]},n()),e.jsxs("li",{children:[h[1],"  |"]},n()),e.jsxs("li",{children:[h[2],"  |"]},n()),e.jsxs("li",{children:[x[0],"  |"]},n()),e.jsxs("li",{children:[x[1],"  |"]},n()),e.jsx("li",{children:x[2]},n())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(F,{children:[e.jsx(I,{children:M[0]},n()),e.jsxs(I,{children:["Mileage: ",m.toLocaleString("en-US",{useGrouping:!0})]},n()),e.jsxs(I,{children:["Price: ",c]},n())]}),e.jsx("div",{children:e.jsx(pe,{href:"tel:+380730000000",children:"Rental car"})})]})},he=({advert:t})=>{const s=C();f.useEffect(()=>{const a=c=>{c.code==="Escape"&&s(L())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),f.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const r=a=>{a.currentTarget===a.target&&s(L())},o=()=>s(L());return T.createPortal(e.jsx(oe,{onClick:r,children:e.jsxs(ie,{children:[e.jsx(ae,{children:e.jsx(ce,{width:"24",height:"24",onClick:o,children:e.jsx("use",{href:`${W}#icon-x`})})}),e.jsx(xe,{advert:t})]})}),document.querySelector("#modal-root"))},ye=({adverts:t})=>{const s=C(),r=w(Q),[o,a]=f.useState(null),c=l=>{s(O()),a(l)};return e.jsxs(re,{children:[t==null?void 0:t.map(l=>e.jsx(ne,{children:e.jsx(G,{children:e.jsx(se,{advert:l,handleOpenModal:c})})},l.id)),r&&e.jsx(he,{advert:o})]})},ge=i.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
`,Se=({onLoadMore:t})=>{const s=async r=>{r.preventDefault(),t()};return e.jsx(ge,{children:e.jsx(R,{onClick:s,children:"Load more"})})},ue=i.div`
margin: 32px 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
`,fe=i.label`
color: #8A8A89;
font-size: 14px;
font-weight: 500;
line-height: 18px;
`,me=i.select`
width: 300px;
    display: flex;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 14px;
    background-color: transparent;
    outline: none;
    option {
        max-width: 100%;
        color: rgba(18, 20, 23, 0.6);
        font-size: 12px;
        font-weight: 500;
        line-height: 20px; /* 125% */
    }
`,Ae=({makes:t})=>{const s=C(),r=o=>{const a=o.target.value;s(H(a))};return e.jsxs(ue,{children:[e.jsx(fe,{htmlFor:"makeDropdown",children:"Car brand"}),e.jsxs(me,{id:"makeDropdown",onChange:r,children:[e.jsx("option",{value:"",children:"All Makes"}),t&&t.map(o=>e.jsx("option",{value:o,children:o},o))]})]})};export{ye as A,Ae as D,Se as L,be as a,Ce as b,ke as c,we as d,J as e,_ as s,C as u};
