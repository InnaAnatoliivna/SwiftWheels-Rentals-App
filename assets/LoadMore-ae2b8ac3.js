import{R as k,d as N,e as O,s as i,j as e,a as A,r as j,g as R,h as W,i as P,k as E,o as $}from"./index-4ae5af94.js";import{B as I}from"./Button-5ed76c9e.js";function F(t=k){const s=t===k?N:O(t);return function(){const{store:n}=s();return n}}const B=F();function z(t=k){const s=t===k?B:F(t);return function(){return s().dispatch}}const L=z(),U=i.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,H=({children:t})=>e.jsx(U,{children:t});let o=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,r)=>(r&=63,r<36?s+=r.toString(36):r<62?s+=(r-26).toString(36).toUpperCase():r>62?s+="-":s+="_",s),"");const q=i.div`
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
`,G=i.div`
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
`,V=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,X=t=>t.adverts.items,ge=t=>t.adverts.isLoading,ue=t=>t.adverts.currentPage,fe=t=>t.adverts.perPage,Y=t=>t.favorities.favorities,_=t=>t.modal.isOpen,M="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",J=i.svg`
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
`,K=({advertId:t,isFavorite:s})=>{const r=L(),n=A(X),[a,l]=j.useState(!1),c=u=>{const p=n==null?void 0:n.find(x=>x.id===u);a?a&&(l(!1),r(R(p))):s?(l(!1),r(R(p))):(l(!0),r(W(p)))};return e.jsx("div",{onClick:()=>c(t),children:e.jsx(J,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${M}#icon-heart`})})})},Q="/SwiftWheels-Rentals-App/assets/Car-Hire-Online-ad8eb827.jpg",Z=({advert:t,handleOpenModal:s})=>{const{img:r,make:n,year:a,model:l,rentalPrice:c,rentalCompany:u,type:p,id:x,functionalities:d}=t;console.log("adverts CONTENT : START USE EFFECT");const f=A(Y),w=!1;j.useEffect(()=>{},[t,x,f]),console.log("adverts CONTENT : END USE EFFECT"),console.log("TEST REDUCE : ",d);const v=d&&Array.isArray(d)?d.reduce((h,g)=>g.length<h.length?g:h,d[0]):"";console.log(v);const m=(t.address||"").split(",").map(h=>h.trim()),C=m[1]||"",y=m[2]||"",b=()=>{s(t)};return console.log("adverts CONTENT : END !!!"),e.jsxs(q,{children:[e.jsx(G,{children:e.jsx("img",{src:r||Q,alt:`${n} ${l}, ${a}`})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[l,","]}),a,e.jsx("span",{className:"price",children:c})]}),e.jsxs(V,{children:[e.jsxs("li",{children:[C,"  |"]},o()),e.jsxs("li",{children:[y,"  |"]},o()),e.jsxs("li",{children:[u,"  |"]},o()),e.jsxs("li",{children:[l,"  |"]},o()),e.jsxs("li",{children:[p,"  |"]},o()),e.jsxs("li",{children:[x,"  |"]},o()),e.jsx("li",{children:v},o())]}),e.jsx(I,{onClick:b,children:"Learn more"}),e.jsx(K,{advertId:t.id,isFavorite:w})]})},ee=i.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;


`,te=i.li`
    position: relative;
`,se=({onClick:t,children:s})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:s}),re=i.div`
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
`,oe=i.div`
    position: relative;
`,ne=i.svg`
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
`,ie=i.div`
overflow-y: auto; 
`,ae=i.div`
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
`,S=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,T=i.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,le=i.a`
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
`,ce=({advert:t})=>{const{img:s,make:r,year:n,model:a,rentalPrice:l,type:c,id:u,fuelConsumption:p,engineSize:x,functionalities:d,accessories:f,rentalConditions:w,mileage:v}=t,m=t.address.split(",").map(g=>g.trim()),C=m[1],y=m[2],b=w,h=b.split("  ").map(g=>g.trim());return console.log(b),e.jsxs(ie,{children:[e.jsx(ae,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[r,e.jsxs("span",{className:"accent",children:[a,","]}),n]}),e.jsxs(S,{children:[e.jsxs("li",{children:[C,"  |"]},o()),e.jsxs("li",{children:[y,"  |"]},o()),e.jsxs("li",{children:["Id: ",u,"  |"]},o()),e.jsxs("li",{children:["Year: ",n,"  |"]},o()),e.jsxs("li",{children:["Type: ",c,"  |"]},o()),e.jsxs("li",{children:["Fuel Concumption: ",p,"  |"]},o()),e.jsxs("li",{children:["Engine Size: ",x,"  |"]},o())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(S,{children:[e.jsxs("li",{children:[f[0],"  |"]},o()),e.jsxs("li",{children:[f[1],"  |"]},o()),e.jsxs("li",{children:[f[2],"  |"]},o()),e.jsxs("li",{children:[d[0],"  |"]},o()),e.jsxs("li",{children:[d[1],"  |"]},o()),e.jsx("li",{children:d[2]},o())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(S,{children:[e.jsx(T,{children:h[0]},o()),e.jsxs(T,{children:["Mileage: ",v.toLocaleString("en-US",{useGrouping:!0})]},o()),e.jsxs(T,{children:["Price: ",l]},o())]}),e.jsx("div",{children:e.jsx(le,{href:"tel:+380730000000",children:"Rental car"})})]})},de=({advert:t})=>{const s=L();j.useEffect(()=>{const a=l=>{l.code==="Escape"&&s(E())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),j.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const r=a=>{a.currentTarget===a.target&&s(E())},n=()=>s(E());return P.createPortal(e.jsx(se,{onClick:r,children:e.jsxs(re,{children:[e.jsx(oe,{children:e.jsx(ne,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${M}#icon-x`})})}),e.jsx(ce,{advert:t})]})}),document.querySelector("#modal-root"))},me=({adverts:t})=>{const s=L(),r=A(_),[n,a]=j.useState(null);console.log("adverts LIST : ",t);const l=c=>{s($()),a(c)};return console.log("adverts LIST : END"),e.jsxs(ee,{children:[t==null?void 0:t.map(c=>e.jsx(te,{children:e.jsx(H,{children:e.jsx(Z,{advert:c,handleOpenModal:l})})},c.id)),r&&e.jsx(de,{advert:n})]})},pe=i.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
`,je=({onLoadMore:t})=>{console.log("adverts LOAD MORE : START ");const s=async r=>{r.preventDefault(),t()};return console.log("adverts LOAD MORE : END "),e.jsx(pe,{children:e.jsx(I,{onClick:s,children:"Load more"})})};export{me as A,je as L,ge as a,ue as b,fe as c,Y as d,X as s,L as u};
