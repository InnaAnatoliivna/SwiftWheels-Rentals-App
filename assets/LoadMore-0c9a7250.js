import{R as k,d as O,e as W,s as i,j as e,a as F,r as u,g as R,h as P,i as $,k as T,o as B}from"./index-cf42a5b8.js";import{B as M}from"./Button-c3883d3a.js";function D(t=k){const s=t===k?O:W(t);return function(){const{store:n}=s();return n}}const z=D();function U(t=k){const s=t===k?z:D(t);return function(){return s().dispatch}}const I=U(),H=i.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,q=({children:t})=>e.jsx(H,{children:t});let o=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,r)=>(r&=63,r<36?s+=r.toString(36):r<62?s+=(r-26).toString(36).toUpperCase():r>62?s+="-":s+="_",s),"");const G=i.div`
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
`,V=i.div`
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
`,Y=t=>t.adverts.items,ue=t=>t.adverts.isLoading,fe=t=>t.adverts.currentPage,me=t=>t.adverts.perPage,_=t=>t.favorities.favorities,J=t=>t.modal.isOpen,N="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",K=i.svg`
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
`,Q=({advertId:t,isFavorite:s})=>{const r=I(),n=F(Y),[a,l]=u.useState(!1),c=f=>{const x=n==null?void 0:n.find(h=>h.id===f);a?a&&(l(!1),r(R(x))):s?(l(!1),r(R(x))):(l(!0),r(P(x)))};return e.jsx("div",{onClick:()=>c(t),children:e.jsx(K,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${N}#icon-heart`})})})},Z="/SwiftWheels-Rentals-App/assets/Car-Hire-Online-ad8eb827.jpg",ee=({advert:t,handleOpenModal:s})=>{const{img:r,make:n,year:a,model:l,rentalPrice:c,rentalCompany:f,type:x,id:h,functionalities:p}=t;console.log("adverts CONTENT : START USE EFFECT");const g=F(_),[w,m]=u.useState(!1);u.useEffect(()=>{if(t&&g.length>0){const d=g.find(b=>h===b);m(!!d)}},[t,h,g]),console.log("adverts CONTENT : END USE EFFECT"),console.log("TEST REDUCE : ",p);const C=p?p.reduce((d,b)=>b.length<d.length?b:d,p[0]):"";console.log(C);const v=(t.address||"").split(",").map(d=>d.trim()),S=v[1]||"",j=v[2]||"",E=()=>{s(t)};return console.log("adverts CONTENT : END !!!"),e.jsxs(G,{children:[e.jsx(V,{children:e.jsx("img",{src:r||Z,alt:`${n} ${l}, ${a}`})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[l,","]}),a,e.jsx("span",{className:"price",children:c})]}),e.jsxs(X,{children:[e.jsxs("li",{children:[S,"  |"]},o()),e.jsxs("li",{children:[j,"  |"]},o()),e.jsxs("li",{children:[f,"  |"]},o()),e.jsxs("li",{children:[l,"  |"]},o()),e.jsxs("li",{children:[x,"  |"]},o()),e.jsxs("li",{children:[h,"  |"]},o()),e.jsx("li",{children:C},o())]}),e.jsx(M,{onClick:E,children:"Learn more"}),e.jsx(Q,{advertId:t.id,isFavorite:w})]})},te=i.ul`
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
`,le=i.div`
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
`,L=i.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,A=i.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,ce=i.a`
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
`,de=({advert:t})=>{const{img:s,make:r,year:n,model:a,rentalPrice:l,type:c,id:f,fuelConsumption:x,engineSize:h,functionalities:p,accessories:g,rentalConditions:w,mileage:m}=t,y=t.address.split(",").map(d=>d.trim()),v=y[1],S=y[2],j=w,E=j.split("  ").map(d=>d.trim());return console.log(j),e.jsxs(ae,{children:[e.jsx(le,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[r,e.jsxs("span",{className:"accent",children:[a,","]}),n]}),e.jsxs(L,{children:[e.jsxs("li",{children:[v,"  |"]},o()),e.jsxs("li",{children:[S,"  |"]},o()),e.jsxs("li",{children:["Id: ",f,"  |"]},o()),e.jsxs("li",{children:["Year: ",n,"  |"]},o()),e.jsxs("li",{children:["Type: ",c,"  |"]},o()),e.jsxs("li",{children:["Fuel Concumption: ",x,"  |"]},o()),e.jsxs("li",{children:["Engine Size: ",h,"  |"]},o())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(L,{children:[e.jsxs("li",{children:[g[0],"  |"]},o()),e.jsxs("li",{children:[g[1],"  |"]},o()),e.jsxs("li",{children:[g[2],"  |"]},o()),e.jsxs("li",{children:[p[0],"  |"]},o()),e.jsxs("li",{children:[p[1],"  |"]},o()),e.jsx("li",{children:p[2]},o())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(L,{children:[e.jsx(A,{children:E[0]},o()),e.jsxs(A,{children:["Mileage: ",m.toLocaleString("en-US",{useGrouping:!0})]},o()),e.jsxs(A,{children:["Price: ",l]},o())]}),e.jsx("div",{children:e.jsx(ce,{href:"tel:+380730000000",children:"Rental car"})})]})},pe=({advert:t})=>{const s=I();u.useEffect(()=>{const a=l=>{l.code==="Escape"&&s(T())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),u.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const r=a=>{a.currentTarget===a.target&&s(T())},n=()=>s(T());return $.createPortal(e.jsx(re,{onClick:r,children:e.jsxs(oe,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${N}#icon-x`})})}),e.jsx(de,{advert:t})]})}),document.querySelector("#modal-root"))},ve=({adverts:t})=>{const s=I(),r=F(J),[n,a]=u.useState(null);console.log("adverts LIST : start");const l=c=>{s(B()),a(c)};return console.log("adverts LIST : END"),e.jsxs(te,{children:[t.map(c=>e.jsx(se,{children:e.jsx(q,{children:e.jsx(ee,{advert:c,handleOpenModal:l})})},c.id)),r&&e.jsx(pe,{advert:n})]})},xe=i.div`
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
`,je=({onLoadMore:t})=>{console.log("adverts LOAD MORE : START ");const s=async r=>{r.preventDefault(),t()};return console.log("adverts LOAD MORE : END "),e.jsx(xe,{children:e.jsx(M,{onClick:s,children:"Load more"})})};export{ve as A,je as L,ue as a,fe as b,me as c,_ as d,Y as s,I as u};
