(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{41:function(n,e,t){n.exports=t(83)},83:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(17),o=t.n(c),i=t(1),l=t(15),u=t(3),s=t(20);const f=Object(s.a)(Object(s.a)({},{bodyText:"#52504f",link:"#42b0ef",nameText:"#f7f7f7",nameTextShadow:"2px 2px #66453e",burgerMenuColor:"#f7f7f7",burgerMenuLinkColor:"#fdfdfd",aboutMeText:"#f7f7f7",aboutMeTextShadow:"2px 2px #59668a",navLinkText:"#fff",brandColorPrimary:"#374f84"}),{borderRadius:"3px"});var d=t(34),m=t.n(d),x=(t(48),t(14)),p=t(2);"".concat(480,"px"),"".concat(768,"px"),"".concat(992,"px"),"".concat(1200,"px"),"".concat(1600,"px");const b={xs:"".concat(767,"px"),sm:"".concat(991,"px"),md:"".concat(1199,"px"),lg:"".concat(1599,"px")};function h(){const n=Object(p.a)(["\n\tfont-family: Pacifico, cursive;\n\tfont-size: 11rem;\n\tpadding: 1rem 4rem;\n\tfont-style: italic;\n\tcolor: ",";\n\ttext-shadow: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\tfont-size: 6rem;\n\t}\n"]);return h=function(){return n},n}function g(){const n=Object(p.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex: 1 1 100%;\n\tbackground-color: #374f84;\n"]);return g=function(){return n},n}function w(){const n=Object(p.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n"]);return w=function(){return n},n}function E(){return a.a.createElement(y,null,a.a.createElement(j,null,a.a.createElement(O,null,"Ulises")))}const y=i.c.div(w()),j=i.c.div(g()),O=i.c.h1(h(),n=>n.theme.nameText,n=>n.theme.nameTextShadow,b.xs);var k=t(40),v=t(38),z=t.n(v);function T(){const n=Object(p.a)(["\n    font-size: 1.15rem;\n"]);return T=function(){return n},n}function M(){const n=Object(p.a)(["\n    font-size: 1.55rem;\n    font-weight: bold;\n"]);return M=function(){return n},n}function B(){const n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return B=function(){return n},n}function S(){const n=Object(p.a)(["\n    display: flex;\n"]);return S=function(){return n},n}function C(){const n=Object(p.a)(["\n    max-width: 200px;\n    max-height: 200px;\n\n    @media only screen and (max-width: ",") {\n        max-width: 80px;\n        max-height: 80px;\n    }\n"]);return C=function(){return n},n}function N(){const n=Object(p.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    column-gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    max-width: 650px;\n    width: 650px;\n    margin: 0 0 1rem;\n    padding: 1rem;\n    border-radius: 3px;\n    background: #f7eeee;\n    box-shadow: 1px 2px 8px 0px #d8d8d8eb;\n\n    @media only screen and (max-width: ",") {\n        max-width: 98%;\n        width: 98%;\n    }\n"]);return N=function(){return n},n}function P(){const n=Object(p.a)(["\n    cursor: pointer;\n    color: #52504f;\n"]);return P=function(){return n},n}function H(){const n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%;\n    align-items: center;\n"]);return H=function(){return n},n}function I(){const n=Object(p.a)(["\n    position: sticky;\n    top: 0;\n    background-color: #6a98bf;\n    color: #fff;\n    font-size: 5rem;\n    font-weight: bold;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n    font-style: italic;\n    color: #f7f7f7;\n    text-shadow: 2px 2px #66453e;\n\n\n    @media only screen and (max-width: ",") {\n        font-size: 3rem;\n        height: 50px;\n    }\n"]);return I=function(){return n},n}function A(){const n=Object(p.a)(["\n    display: flex;\n    background: #3f4d73;\n    flex-direction: column;\n    width: 100%;\n"]);return A=function(){return n},n}let L=null;function J(){const n=a.a.useState([]),e=Object(k.a)(n,2),t=e[0],r=e[1];return a.a.useEffect(()=>{z.a.get("https://www.reddit.com/r/EarthPorn/top/.json?limit=10").then(n=>{L=function(n=[]){if(L)return L;const e=[];return n.forEach(({kind:n,data:t})=>{var r;e.push({author:t.author,id:t.id,title:(r=t.title,r.replace(/\[.*\]/,"")),url:t.url,ups:t.ups,href:"https://reddit.com".concat(t.permalink)})}),e}(n.data.data.children),r(L)}).catch(console.error)}),a.a.createElement(U,null,a.a.createElement(G,null,"Pictures of Earth \ud83c\udf0e"),a.a.createElement(R,null,t.map(n=>a.a.createElement(W,{href:n.href,target:"_blank"},a.a.createElement(_,{key:n.id},a.a.createElement(D,null,a.a.createElement(q,{src:n.url})),a.a.createElement(F,null,a.a.createElement(K,null,n.title||"Generic earth title"),a.a.createElement(Q,null,n.author)))))))}const U=i.c.div(A()),G=i.c.h1(I(),b.xs),R=i.c.div(H()),W=i.c.a(P()),_=i.c.div(N(),b.xs),q=i.c.img(C(),b.xs),D=i.c.div(S()),F=i.c.div(B()),K=i.c.h2(M()),Q=i.c.h3(T()),V=Object(x.withNavigationContext)(({fullpage:n})=>{const e=n.navigation.animation||"foldOutAnimation";return a.a.createElement(x.Provider,{slug:"page-one"},a.a.createElement(m.a,{bullets:!1,animation:e,className:"c-awesome-slider",media:[{slug:"page-one",className:"c-slider-slug",children:a.a.createElement(E,null)},{slug:"page-two",className:"c-slider-slug",children:a.a.createElement(J,null)}]}))});var X=t(39);function Y(){const n=Object(p.a)(["\n    color: #f7f7f7;\n"]);return Y=function(){return n},n}function Z(){const n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Z=function(){return n},n}function $(){return a.a.createElement(X.slide,{animation:"stack",styles:{bmBurgerButton:{position:"fixed",width:"36px",height:"30px",left:"36px",top:"36px"},bmBurgerBars:{background:"#2d303c"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"#373a47",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em"},bmItem:{display:"flex"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}}},a.a.createElement(nn,null,a.a.createElement(en,{to:"/"},"Home"),a.a.createElement(en,{to:"/about"},"About")))}const nn=i.c.div(Z()),en=Object(i.c)(l.b)(Y());function tn(){const n=Object(p.a)(["\n  display: flex;\n  font-size: 5rem;\n  padding: 1rem 4rem;\n  color: ",";\n  text-shadow: ",";\n\n  @media only screen and (max-width: ",") {\n    font-size: 3rem;\n    padding: 1rem 1.75rem;\n  }\n"]);return tn=function(){return n},n}function rn(){const n=Object(p.a)(["\n  display: flex;\n  flex: 1 1 100%;\n  justify-content: center;\n  align-items: center;\n  background: #374f84;\n"]);return rn=function(){return n},n}function an(){const n=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return an=function(){return n},n}function cn(){return a.a.createElement(on,null,a.a.createElement(ln,null,a.a.createElement(un,null,"Hi, my name is Ulises. I do web things.")))}const on=i.c.div(an()),ln=i.c.div(rn()),un=i.c.h1(tn(),n=>n.theme.aboutMeText,n=>n.theme.aboutMeTextShadow,b.xs);function sn(){const n=Object(p.a)(["\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        color: ",";\n        font-family: Helvetica Neue, Arial, sans-serif;\n        font-size: 16px;\n        font-size: 1.6rem;\n        line-height: 1.25;\n        word-break: break-word;\n        word-wrap: break-word;\n        overflow-wrap: break-word;\n    }\n\n    a {\n        color: ",";\n        text-decoration: none;\n    };\n"]);return sn=function(){return n},n}const fn=Object(i.b)(sn(),n=>n.theme.bodyText,n=>n.theme.link);function dn(){return a.a.createElement(i.a,{theme:f},a.a.createElement(l.a,{basename:"/"},a.a.createElement($,null),a.a.createElement(u.a,{exact:!0,path:"/",component:V}),a.a.createElement(u.a,{path:"/about",component:cn}),a.a.createElement(fn,null)))}const mn=document.getElementById("root");o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(dn,null)),mn)}},[[41,1,2]]]);
//# sourceMappingURL=main.bb58131a.chunk.js.map