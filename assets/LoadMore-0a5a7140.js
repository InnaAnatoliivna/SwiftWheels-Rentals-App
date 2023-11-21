import{R as k,d as D,e as B,s as i,j as e,a as E,r as g,g as R,h as T,i as z,k as I,o as O}from"./index-e4befc3a.js";import{B as W}from"./Button-aea89737.js";function P(t=k){const s=t===k?D:B(t);return function(){const{store:n}=s();return n}}const N=P();function V(t=k){const s=t===k?N:P(t);return function(){return s().dispatch}}const F=V(),H=i.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,U=({children:t})=>e.jsx(H,{children:t});let o=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,r)=>(r&=63,r<36?s+=r.toString(36):r<62?s+=(r-26).toString(36).toUpperCase():r>62?s+="-":s+="_",s),"");const q=i.div`
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
`,X=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,Y=t=>t.adverts.items,ge=t=>t.adverts.isLoading,fe=t=>t.adverts.currentPage,me=t=>t.adverts.perPage,_=t=>t.favorities.favorities,J=t=>t.modal.isOpen,$="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",K=i.svg`
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
`,Q=({advertId:t,isFavorite:s})=>{const r=F(),n=E(Y),[a,c]=g.useState(!1),d=f=>{const h=n==null?void 0:n.find(u=>u.id===f);a?a&&(c(!1),r(R(h))):s?(c(!1),r(R(h))):(c(!0),r(T(h)))};return e.jsx("div",{onClick:()=>d(t),children:e.jsx(K,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${$}#icon-heart`})})})},Z="/SwiftWheels-Rentals-App/assets/Car-Hire-Online-ad8eb827.jpg",ee=({advert:t,handleOpenModal:s})=>{const{img:r,make:n,year:a,model:c,rentalPrice:d,rentalCompany:f,type:h,id:u,functionalities:p}=t,x=E(_),[w,m]=g.useState(!1);console.log(x),g.useEffect(()=>{const l=x.length>0?x.some(b=>u===b):!1;console.log("ISaDDfAVVVV :",l),m(!!l)},[u,x]);const M=p&&Array.isArray(p)?p.reduce((l,b)=>b.length<l.length?b:l,p[0]):"",j=(t.address||"").split(",").map(l=>l.trim()),y=j[1]||"",v=j[2]||"",S=()=>{s(t)};return e.jsxs(q,{children:[e.jsx(G,{children:e.jsx("img",{src:r||Z,alt:`${n} ${c}, ${a}`})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[c,","]}),a,e.jsx("span",{className:"price",children:d})]}),e.jsxs(X,{children:[e.jsxs("li",{children:[y,"  |"]},o()),e.jsxs("li",{children:[v,"  |"]},o()),e.jsxs("li",{children:[f,"  |"]},o()),e.jsxs("li",{children:[c,"  |"]},o()),e.jsxs("li",{children:[h,"  |"]},o()),e.jsxs("li",{children:[u,"  |"]},o()),e.jsx("li",{children:M},o())]}),e.jsx(W,{onClick:S,children:"Learn more"}),e.jsx(Q,{advertId:t.id,isFavorite:w})]})},te=i.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;


`,se=i.li`
    position: relative;
`,re=({onClick:t,children:s})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:s}),oe=i.div`
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
`,ne=i.div`
    position: relative;
`,ie=i.svg`
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
`,ae=i.div`
overflow-y: auto; 
`,ce=i.div`
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
`,A=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,L=i.li`
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
`,de=({advert:t})=>{const{img:s,make:r,year:n,model:a,rentalPrice:c,type:d,id:f,fuelConsumption:h,engineSize:u,functionalities:p,accessories:x,rentalConditions:w,mileage:m}=t,C=t.address.split(",").map(l=>l.trim()),j=C[1],y=C[2],v=w,S=v.split("  ").map(l=>l.trim());return console.log(v),e.jsxs(ae,{children:[e.jsx(ce,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[r,e.jsxs("span",{className:"accent",children:[a,","]}),n]}),e.jsxs(A,{children:[e.jsxs("li",{children:[j,"  |"]},o()),e.jsxs("li",{children:[y,"  |"]},o()),e.jsxs("li",{children:["Id: ",f,"  |"]},o()),e.jsxs("li",{children:["Year: ",n,"  |"]},o()),e.jsxs("li",{children:["Type: ",d,"  |"]},o()),e.jsxs("li",{children:["Fuel Concumption: ",h,"  |"]},o()),e.jsxs("li",{children:["Engine Size: ",u,"  |"]},o())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(A,{children:[e.jsxs("li",{children:[x[0],"  |"]},o()),e.jsxs("li",{children:[x[1],"  |"]},o()),e.jsxs("li",{children:[x[2],"  |"]},o()),e.jsxs("li",{children:[p[0],"  |"]},o()),e.jsxs("li",{children:[p[1],"  |"]},o()),e.jsx("li",{children:p[2]},o())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(A,{children:[e.jsx(L,{children:S[0]},o()),e.jsxs(L,{children:["Mileage: ",m.toLocaleString("en-US",{useGrouping:!0})]},o()),e.jsxs(L,{children:["Price: ",c]},o())]}),e.jsx("div",{children:e.jsx(le,{href:"tel:+380730000000",children:"Rental car"})})]})},pe=({advert:t})=>{const s=F();g.useEffect(()=>{const a=c=>{c.code==="Escape"&&s(I())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),g.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const r=a=>{a.currentTarget===a.target&&s(I())},n=()=>s(I());return z.createPortal(e.jsx(re,{onClick:r,children:e.jsxs(oe,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${$}#icon-x`})})}),e.jsx(de,{advert:t})]})}),document.querySelector("#modal-root"))},je=({adverts:t})=>{const s=F(),r=E(J),[n,a]=g.useState(null);console.log("adverts LIST : ",t);const c=d=>{s(O()),a(d)};return console.log("adverts LIST : END"),e.jsxs(te,{children:[t==null?void 0:t.map(d=>e.jsx(se,{children:e.jsx(U,{children:e.jsx(ee,{advert:d,handleOpenModal:c})})},d.id)),r&&e.jsx(pe,{advert:n})]})},xe=i.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
`,ve=({onLoadMore:t})=>{const s=async r=>{r.preventDefault(),t()};return e.jsx(xe,{children:e.jsx(W,{onClick:s,children:"Load more"})})};export{je as A,ve as L,ge as a,fe as b,me as c,_ as d,Y as s,F as u};
