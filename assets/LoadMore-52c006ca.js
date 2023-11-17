import{R as k,d as $,e as D,s as o,j as e,a as E,r as u,g as P,h as z,i as O,k as L,o as T}from"./index-659f9cbc.js";import{B as R}from"./Button-c3dcc8fc.js";function W(t=k){const s=t===k?$:D(t);return function(){const{store:i}=s();return i}}const N=W();function H(t=k){const s=t===k?N:W(t);return function(){return s().dispatch}}const F=H(),U=o.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,q=({children:t})=>e.jsx(U,{children:t});let r=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,n)=>(n&=63,n<36?s+=n.toString(36):n<62?s+=(n-26).toString(36).toUpperCase():n>62?s+="-":s+="_",s),"");const G=o.div`
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
`,V=o.div`
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
`,X=o.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,Y=t=>t.adverts.items,ue=t=>t.adverts.isLoading,ge=t=>t.adverts.currentPage,fe=t=>t.adverts.perPage,_=t=>t.favorities.favorities,J=t=>t.modal.isOpen,B="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",K=o.svg`
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
`,Q=({advertId:t,isFavorite:s})=>{const n=F(),i=E(Y),[a,c]=u.useState(!1),l=g=>{const p=i==null?void 0:i.find(f=>f.id===g);a?a&&(c(!1),n(P(p))):s?(c(!1),n(P(p))):(c(!0),n(z(p)))};return e.jsx("div",{onClick:()=>l(t),children:e.jsx(K,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${B}#icon-heart`})})})},Z=({advert:t,handleOpenModal:s})=>{const{img:n,make:i,year:a,model:c,rentalPrice:l,rentalCompany:g,type:p,id:f,functionalities:x}=t,h=E(_),[w,m]=u.useState(!1);u.useEffect(()=>{if(t){const d=h.find(b=>t.id===b);m(!!d)}},[t,h]);const M=x.reduce((d,b)=>b.length<d.length?b:d,x[0]),j=t.address.split(",").map(d=>d.trim()),y=j[1],v=j[2],S=()=>{s(t)};return e.jsxs(G,{children:[e.jsx(V,{children:e.jsx("img",{src:n,alt:"rental car"})}),e.jsxs("p",{children:[i,e.jsxs("span",{className:"accent",children:[c,","]}),a,e.jsx("span",{className:"price",children:l})]}),e.jsxs(X,{children:[e.jsxs("li",{children:[y,"  |"]},r()),e.jsxs("li",{children:[v,"  |"]},r()),e.jsxs("li",{children:[g,"  |"]},r()),e.jsxs("li",{children:[c,"  |"]},r()),e.jsxs("li",{children:[p,"  |"]},r()),e.jsxs("li",{children:[f,"  |"]},r()),e.jsx("li",{children:M},r())]}),e.jsx(R,{onClick:S,children:"Learn more"}),e.jsx(Q,{advertId:t.id,isFavorite:w})]})},ee=o.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;
`,te=o.li`
    position: relative;
`,se=({onClick:t,children:s})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:s}),re=o.div`
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
`,ne=o.div`
    position: relative;
`,oe=o.svg`
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
`,ie=o.div`
overflow-y: auto; 
`,ae=o.div`
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
`,I=o.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,A=o.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,ce=o.a`
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
`,le=({advert:t})=>{const{img:s,make:n,year:i,model:a,rentalPrice:c,type:l,id:g,fuelConsumption:p,engineSize:f,functionalities:x,accessories:h,rentalConditions:w,mileage:m}=t,C=t.address.split(",").map(d=>d.trim()),j=C[1],y=C[2],v=w,S=v.split("  ").map(d=>d.trim());return console.log(v),e.jsxs(ie,{children:[e.jsx(ae,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[a,","]}),i]}),e.jsxs(I,{children:[e.jsxs("li",{children:[j,"  |"]},r()),e.jsxs("li",{children:[y,"  |"]},r()),e.jsxs("li",{children:["Id: ",g,"  |"]},r()),e.jsxs("li",{children:["Year: ",i,"  |"]},r()),e.jsxs("li",{children:["Type: ",l,"  |"]},r()),e.jsxs("li",{children:["Fuel Concumption: ",p,"  |"]},r()),e.jsxs("li",{children:["Engine Size: ",f,"  |"]},r())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(I,{children:[e.jsxs("li",{children:[h[0],"  |"]},r()),e.jsxs("li",{children:[h[1],"  |"]},r()),e.jsxs("li",{children:[h[2],"  |"]},r()),e.jsxs("li",{children:[x[0],"  |"]},r()),e.jsxs("li",{children:[x[1],"  |"]},r()),e.jsx("li",{children:x[2]},r())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(I,{children:[e.jsx(A,{children:S[0]},r()),e.jsxs(A,{children:["Mileage: ",m.toLocaleString("en-US",{useGrouping:!0})]},r()),e.jsxs(A,{children:["Price: ",c]},r())]}),e.jsx("div",{children:e.jsx(ce,{href:"tel:+380730000000",children:"Rental car"})})]})},de=({advert:t})=>{const s=F();u.useEffect(()=>{const a=c=>{c.code==="Escape"&&s(L())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),u.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const n=a=>{a.currentTarget===a.target&&s(L())},i=()=>s(L());return O.createPortal(e.jsx(se,{onClick:n,children:e.jsxs(re,{children:[e.jsx(ne,{children:e.jsx(oe,{width:"24",height:"24",onClick:i,children:e.jsx("use",{href:`${B}#icon-x`})})}),e.jsx(le,{advert:t})]})}),document.querySelector("#modal-root"))},me=({adverts:t})=>{const s=F(),n=E(J),[i,a]=u.useState(null),c=l=>{s(T()),a(l)};return e.jsxs(ee,{children:[t.map(l=>e.jsx(te,{children:e.jsx(q,{children:e.jsx(Z,{advert:l,handleOpenModal:c})})},l.id)),n&&e.jsx(de,{advert:i})]})},pe=o.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
`,je=({onLoadMore:t})=>{const s=async n=>{n.preventDefault(),t()};return e.jsx(pe,{children:e.jsx(R,{onClick:s,children:"Load more"})})};export{me as A,je as L,ue as a,ge as b,fe as c,_ as d,Y as s,F as u};
