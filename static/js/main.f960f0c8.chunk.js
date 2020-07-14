(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{27:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(20),o=t.n(c),i=t(1),l=(t(10),t(4)),u=t(7);const f=Object(u.a)(Object(u.a)({},{bodyText:"#52504f",link:"#42b0ef",nameText:"#f7f7f7",nameTextShadow:"2px 2px #66453e",burgerMenuColor:"#f7f7f7",burgerMenuLinkColor:"#fdfdfd",aboutMeText:"#f7f7f7",aboutMeTextShadow:"2px 2px #59668a",navLinkText:"#fff",brandColorPrimary:"#374f84"}),{borderRadius:"3px"});var s=t(21),d=t.n(s),m=t(2);"".concat(480,"px"),"".concat(768,"px"),"".concat(992,"px"),"".concat(1200,"px"),"".concat(1600,"px");const x={xs:"".concat(767,"px"),sm:"".concat(991,"px"),md:"".concat(1199,"px"),lg:"".concat(1599,"px")};function p(){const n=Object(m.a)(["\n\tfont-family: Pacifico, cursive;\n\tfont-size: 11rem;\n\tpadding: 1rem 4rem;\n\tfont-style: italic;\n\tcolor: ",";\n\ttext-shadow: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\tfont-size: 3rem;\n\t}\n"]);return p=function(){return n},n}function h(){const n=Object(m.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex: 1 1 100%;\n\tbackground-color: #374f84;\n"]);return h=function(){return n},n}function b(){const n=Object(m.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n"]);return b=function(){return n},n}function g(){return a.a.createElement(w,null,a.a.createElement(E,null,a.a.createElement(y,null,"Ulises")))}const w=i.c.div(b()),E=i.c.div(h()),y=i.c.h1(p(),n=>n.theme.nameText,n=>n.theme.nameTextShadow,x.xs);function j(){const n=Object(m.a)(["\n  display: flex;\n  font-size: 5rem;\n  padding: 1rem 4rem;\n  color: ",";\n  text-shadow: ",";\n\n  @media only screen and (max-width: ",") {\n    font-size: 3rem;\n    padding: 1rem 1.75rem;\n  }\n"]);return j=function(){return n},n}function O(){const n=Object(m.a)(["\n  display: flex;\n  flex: 1 1 100%;\n  justify-content: center;\n  align-items: center;\n  background: #374f84;\n"]);return O=function(){return n},n}function v(){const n=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n"]);return v=function(){return n},n}function k(){return a.a.createElement(z,null,a.a.createElement(T,null,a.a.createElement(M,null,"Hi, my name is Ulises. I do web things.")))}const z=i.c.div(v()),T=i.c.div(O()),M=i.c.h1(j(),n=>n.theme.aboutMeText,n=>n.theme.aboutMeTextShadow,x.xs);var N=t(26),S=t(25),P=t.n(S);function C(){const n=Object(m.a)(["\n    font-size: 1.15rem;\n"]);return C=function(){return n},n}function H(){const n=Object(m.a)(["\n    font-size: 1.55rem;\n    font-weight: bold;\n"]);return H=function(){return n},n}function A(){const n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return A=function(){return n},n}function I(){const n=Object(m.a)(["\n    display: flex;\n"]);return I=function(){return n},n}function J(){const n=Object(m.a)(["\n    max-width: 200px;\n    max-height: 200px;\n"]);return J=function(){return n},n}function L(){const n=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    column-gap: 1rem;\n    justify-content: center;\n    align-items: center;\n    max-width: 650px;\n    width: 650px;\n    margin: 0 0 1rem;\n    padding: 1rem;\n    border-radius: 3px;\n    background: #f7eeee;\n    box-shadow: 2px 1px 3px 1px #d8d8d8eb;\n\n    @media only screen and (max-width: ",") {\n        max-width: 350px;\n        width: 350px;\n    }\n"]);return L=function(){return n},n}function U(){const n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%;\n    align-items: center;\n"]);return U=function(){return n},n}function B(){const n=Object(m.a)(["\n    background-color: #6a98bf;\n    color: #fff;\n    font-size: 5rem;\n    font-weight: bold;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n    font-style: italic;\n    color: #f7f7f7;\n    text-shadow: 2px 2px #66453e;\n\n\n    @media only screen and (max-width: ",") {\n        font-size: 3rem;\n    }\n"]);return B=function(){return n},n}function F(){const n=Object(m.a)(["\n    display: flex;\n    background: #3f4d73;\n    flex-direction: column;\n    width: 100%;\n"]);return F=function(){return n},n}let R=null;function q(){const n=a.a.useState([]),e=Object(N.a)(n,2),t=e[0],r=e[1];return a.a.useEffect(()=>{P.a.get("https://www.reddit.com/r/EarthPorn/top/.json?limit=10").then(n=>{R=function(n=[]){if(R)return R;const e=[];return n.forEach(({kind:n,data:t})=>{var r;e.push({author:t.author,id:t.id,title:(r=t.title,r.replace(/\[.*\]/,"")),url:t.url,ups:t.ups})}),e}(n.data.data.children),r(R)}).catch(console.error)}),a.a.createElement(D,null,a.a.createElement(G,null,"Pictures of Earth \ud83c\udf0e"),a.a.createElement(K,null,t.map(n=>a.a.createElement(Q,{key:n.id},a.a.createElement(W,null,a.a.createElement(V,{src:n.url})),a.a.createElement(X,null,a.a.createElement(Y,null,n.title),a.a.createElement(Z,null,n.author))))))}const D=i.c.div(F()),G=i.c.h1(B(),x.xs),K=i.c.div(U()),Q=i.c.div(L(),x.xs),V=i.c.img(J()),W=i.c.div(I()),X=i.c.div(A()),Y=i.c.h2(H()),Z=i.c.h3(C()),$=Object(l.withNavigationHandlers)(d.a),_=Object(l.withNavigationContext)(({fullpage:n})=>{const e=n.navigation.animation||"foldOutAnimation";return a.a.createElement($,{animation:e,className:"c-awesome-slider",media:[{slug:"page-one",className:"c-slider-slug",children:a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(k,null))},{slug:"page-two",className:"c-slider-slug",children:a.a.createElement(q,null)}]})});function nn(){const n=Object(m.a)(["\n\n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n    }\n\n    html {\n        font-size: 62.5%;\n    }\n\n    body {\n        color: ",";\n        font-family: Helvetica Neue, Arial, sans-serif;\n        font-size: 16px;\n        font-size: 1.6rem;\n        line-height: 1.25;\n        word-break: break-word;\n        word-wrap: break-word;\n        overflow-wrap: break-word;\n    }\n\n    a {\n        color: ",";\n        text-decoration: none;\n    };\n"]);return nn=function(){return n},n}const en=Object(i.b)(nn(),n=>n.theme.bodyText,n=>n.theme.link);function tn(){return a.a.createElement(i.a,{theme:f},a.a.createElement(l.Provider,{slug:"page-one"},a.a.createElement(_,null),a.a.createElement(en,null)))}const rn=document.getElementById("root");o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(tn,null)),rn)}},[[27,1,2]]]);
//# sourceMappingURL=main.f960f0c8.chunk.js.map