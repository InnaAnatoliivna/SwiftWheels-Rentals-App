import{R as k,c as W,d as D,s as a,j as e,a as A,r as u,e as L,g as $,h as O,i as T,o as B}from"./index-f425cfc4.js";import{B as P}from"./Button-9c0b00ba.js";function N(t=k){const s=t===k?W:D(t);return function(){const{store:n}=s();return n}}const z=N();function U(t=k){const s=t===k?z:N(t);return function(){return s().dispatch}}const R=U(),H=a.div`
display: flex;
width: 274px;
height: 426px;
flex-direction: column;
align-items: flex-start;
gap: 28px;
flex-shrink: 0;
`,q=({children:t})=>e.jsx(H,{children:t});let r=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((s,o)=>(o&=63,o<36?s+=o.toString(36):o<62?s+=(o-26).toString(36).toUpperCase():o>62?s+="-":s+="_",s),"");const G=a.div`
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
`,V=a.div`
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
`,X=a.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,Y=t=>t.adverts.items,ge=t=>t.adverts.isLoading,ue=t=>t.adverts.currentPage,_=t=>t.favorities.favorities,J=t=>t.modal.isOpen,M="/SwiftWheels-Rentals-App/assets/icon-sprite-2f349d2b.svg",K=a.svg`
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
`,Q=({advertId:t,isFavorite:s})=>{const o=R(),n=A(Y),[i,l]=u.useState(!1),c=f=>{const h=n==null?void 0:n.find(g=>g.id===f);i?i&&(l(!1),o(L(h))):s?(l(!1),o(L(h))):(l(!0),o($(h)))};return e.jsx("div",{onClick:()=>c(t),children:e.jsx(K,{width:"24",height:"24",className:s&&"active",children:e.jsx("use",{href:`${M}#icon-heart`})})})},Z="/SwiftWheels-Rentals-App/assets/Car-Hire-Online-ad8eb827.jpg",ee=({advert:t,handleOpenModal:s})=>{const{img:o,make:n,year:i,model:l,rentalPrice:c,rentalCompany:f,type:h,id:g,functionalities:p}=t;console.log("adverts CONTENT : START USE EFFECT");const x=A(_),[w,m]=u.useState(!1);u.useEffect(()=>{const d=x&&x.length>0&&x.find(b=>g===b);m(!!d)},[t,g,x]),console.log("adverts CONTENT : END USE EFFECT"),console.log("TEST REDUCE : ",p);const C=p?p.reduce((d,b)=>b.length<d.length?b:d,p[0]):"";console.log(C);const v=(t.address||"").split(",").map(d=>d.trim()),y=v[1]||"",j=v[2]||"",E=()=>{s(t)};return console.log("adverts CONTENT : END !!!"),e.jsxs(G,{children:[e.jsx(V,{children:e.jsx("img",{src:o||Z,alt:`${n} ${l}, ${i}`})}),e.jsxs("p",{children:[n,e.jsxs("span",{className:"accent",children:[l,","]}),i,e.jsx("span",{className:"price",children:c})]}),e.jsxs(X,{children:[e.jsxs("li",{children:[y,"  |"]},r()),e.jsxs("li",{children:[j,"  |"]},r()),e.jsxs("li",{children:[f,"  |"]},r()),e.jsxs("li",{children:[l,"  |"]},r()),e.jsxs("li",{children:[h,"  |"]},r()),e.jsxs("li",{children:[g,"  |"]},r()),e.jsx("li",{children:C},r())]}),e.jsx(P,{onClick:E,children:"Learn more"}),e.jsx(Q,{advertId:t.id,isFavorite:w})]})},te=a.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 100px;


`,se=a.li`
    position: relative;
`,re=({onClick:t,children:s})=>e.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:100,overflow:"auto"},onClick:t,children:s}),oe=a.div`
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
`,ne=a.div`
    position: relative;
`,ie=a.svg`
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
`,ae=a.div`
overflow-y: auto; 
`,le=a.div`
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
`,F=a.ul`
    margin-top: 8px;
    margin-bottom: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-subtext);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`,I=a.li`
border-radius: 12px;
background-color: rgba(18, 20, 23, 0.1);
padding: 7px 14px;
color: var(--color-text);
`,ce=a.a`
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
`,de=({advert:t})=>{const{img:s,make:o,year:n,model:i,rentalPrice:l,type:c,id:f,fuelConsumption:h,engineSize:g,functionalities:p,accessories:x,rentalConditions:w,mileage:m}=t,S=t.address.split(",").map(d=>d.trim()),v=S[1],y=S[2],j=w,E=j.split("  ").map(d=>d.trim());return console.log(j),e.jsxs(ae,{children:[e.jsx(le,{children:e.jsx("img",{src:s,alt:"rental car"})}),e.jsxs("p",{children:[o,e.jsxs("span",{className:"accent",children:[i,","]}),n]}),e.jsxs(F,{children:[e.jsxs("li",{children:[v,"  |"]},r()),e.jsxs("li",{children:[y,"  |"]},r()),e.jsxs("li",{children:["Id: ",f,"  |"]},r()),e.jsxs("li",{children:["Year: ",n,"  |"]},r()),e.jsxs("li",{children:["Type: ",c,"  |"]},r()),e.jsxs("li",{children:["Fuel Concumption: ",h,"  |"]},r()),e.jsxs("li",{children:["Engine Size: ",g,"  |"]},r())]}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsxs(F,{children:[e.jsxs("li",{children:[x[0],"  |"]},r()),e.jsxs("li",{children:[x[1],"  |"]},r()),e.jsxs("li",{children:[x[2],"  |"]},r()),e.jsxs("li",{children:[p[0],"  |"]},r()),e.jsxs("li",{children:[p[1],"  |"]},r()),e.jsx("li",{children:p[2]},r())]}),e.jsx("p",{children:"Rental Conditions: "}),e.jsxs(F,{children:[e.jsx(I,{children:E[0]},r()),e.jsxs(I,{children:["Mileage: ",m.toLocaleString("en-US",{useGrouping:!0})]},r()),e.jsxs(I,{children:["Price: ",l]},r())]}),e.jsx("div",{children:e.jsx(ce,{href:"tel:+380730000000",children:"Rental car"})})]})},pe=({advert:t})=>{const s=R();u.useEffect(()=>{const i=l=>{l.code==="Escape"&&s(T())};return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[s]),u.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]);const o=i=>{i.currentTarget===i.target&&s(T())},n=()=>s(T());return O.createPortal(e.jsx(re,{onClick:o,children:e.jsxs(oe,{children:[e.jsx(ne,{children:e.jsx(ie,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${M}#icon-x`})})}),e.jsx(de,{advert:t})]})}),document.querySelector("#modal-root"))},fe=({adverts:t})=>{const s=R(),o=A(J),[n,i]=u.useState(null);console.log("adverts LIST : start");const l=c=>{s(B()),i(c)};return console.log("adverts LIST : END"),e.jsxs(te,{children:[t.map(c=>e.jsx(se,{children:e.jsx(q,{children:e.jsx(ee,{advert:c,handleOpenModal:l})})},c.id)),o&&e.jsx(pe,{advert:n})]})};export{fe as A,ge as a,ue as b,_ as c,Y as s,R as u};
