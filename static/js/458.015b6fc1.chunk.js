"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[458],{1458:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ln}});var i,r,o=t(9439),c=t(2791),a=t(9434),s=t(4164),l=t(168),u=t(225),d=u.Z.div(i||(i=(0,l.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(3px);\n"]))),h=u.Z.div(r||(r=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  height: 480px;\n  width: 300px;\n  padding: ",";\n  background-color: ",";\n  box-shadow: ",";\n  @media screen and (min-width: 768px) {\n    width: 400px;\n    height: 450px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.secondaryBg}),(function(n){return n.theme.shadows.items})),f=t(184),p=document.getElementById("modal-root");function m(n){var e=n.modalToggle,t=n.children;(0,c.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(n){n.currentTarget!==n.target&&"Escape"!==n.code||e()};return(0,s.createPortal)((0,f.jsx)(d,{onClick:i,children:(0,f.jsx)(h,{children:t})}),p)}t(8404);var x,g,b,w,j,Z,v,y,k=t(3634),C=function(n){return n.contacts.items},z=function(n){return n.filter},S=function(n){return n.contacts.isLoading},T=function(){return{contacts:(0,a.v9)(C),filter:(0,a.v9)(z),contactOperationLoading:(0,a.v9)(S)}},I=t(3853),B=t(5737),E=t.n(B),L=u.Z.button(x||(x=(0,l.Z)(["\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  margin: 10px;\n  width: 36px;\n  height: 36px;\n\n  transition: color 250ms linear, box-shadow 250ms linear;\n  svg {\n    fill: currentColor;\n    width: 26px;\n    height: 26px;\n  }\n  &:hover,\n  &:focus {\n    color: #f70606;\n  }\n"]))),A=u.Z.h3(g||(g=(0,l.Z)(["\n  text-align: center;\n  font-weight: ",";\n  font-size: ",";\n  margin: "," 0;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.space[4]})),_=u.Z.label(b||(b=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.space[3]})),W=u.Z.span(w||(w=(0,l.Z)(["\n  font-weight: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[2]}));var N,O,D,J,K,V,q,F,G,H,M,P,R=u.Z.input(j||(j=(0,l.Z)(["\n  height: 35px;\n  width: 260px;\n\n  padding: 2px 10px;\n  outline: none;\n  transition: border-color 250ms linear, background-color 250ms linear;\n  border: 1px solid;\n  border-radius: ",";\n\n  border-color: ",";\n  background-color: ",";\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"])),(function(n){return n.theme.radii.none}),(function(n){var e=n.value;return e.length<=2||e.length>=20?function(n){return n.theme.colors.errorBg}:"#CACACA"}),(function(n){var e=n.value;if(e.length<=2||e.length>=20)return function(n){return n.theme.colors.error}})),U=(0,u.Z)(E())(Z||(Z=(0,l.Z)(["\n  .form-control {\n    border-radius: "," !important;\n    width: 260px !important;\n    @media screen and (min-width: 768px) {\n      width: 300px !important;\n    }\n  }\n"])),(function(n){return n.theme.radii.none})),X=u.Z.p(v||(v=(0,l.Z)(["\n  position: absolute;\n  bottom: 130px;\n  right: 50%;\n  transform: translateX(50%);\n  z-index: 10;\n  width: 250px;\n  font-style: italic;\n  font-size: ",";\n  text-align: center;\n  border: ",";\n  border-color: ",";\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.borders.light}),(function(n){return n.theme.colors.errorBg}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.error}),(function(n){return n.theme.radii.normal})),$=(0,u.Z)(I.BJv)(y||(y=(0,l.Z)(["\n  position: absolute;\n  top: -11px;\n  left: -11px;\n\n  width: 20px;\n  height: 20px;\n  fill: yellow;\n  border: none;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryBorder})),Q=t(6856),Y=t(4087),nn=t(4224),en=function(n){var e=n.modalToggle,t=n.contactId,i=(0,c.useState)(""),r=(0,o.Z)(i,2),s=r[0],l=r[1],u=(0,c.useState)(""),d=(0,o.Z)(u,2),h=d[0],p=d[1],m=(0,c.useState)("Add contact"),x=(0,o.Z)(m,2),g=x[0],b=x[1],w=(0,c.useState)(null),j=(0,o.Z)(w,2),Z=j[0],v=j[1],y=(0,a.I0)(),C=T(),z=C.contacts,S=C.contactOperationLoading;(0,c.useEffect)((function(){if(t){b("Update contact");var n=z.find((function(n){return n.id===t}));l(n.name),p(n.number)}}),[t,z]),(0,c.useEffect)((function(){if(S)return function(){l(""),p(""),e()}}),[S,e]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(A,{children:"Enter name and phone number"}),(0,f.jsx)(L,{type:"button",onClick:e,children:(0,f.jsx)(I.q5L,{})}),(0,f.jsxs)(Y.xu,{as:"form",display:"flex",flexDirection:"column",alignItems:"center",onChange:function(){v(null)},onSubmit:function(n){n.preventDefault(),v(null);var e=z.filter((function(n){return n.name===s||n.number===h}));s.length>=20||s.length<=2?v("Name is to short or to large"):h.length<12?v("Number is not valid"):e.length>=1?v("".concat(s," with ").concat(h," already exist")):y(t?(0,k.Tk)({contactId:t,name:s,number:h}):(0,k.uK)({name:s,number:h}))},children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(W,{children:"Name"}),(0,f.jsx)(R,{type:"text",name:"name",value:s,onChange:function(n){l(n.currentTarget.value)}})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)(W,{children:"Number"}),(0,f.jsx)(U,{isValid:function(n){return!(n.length<12)||void 0},type:"phone",country:"ua",value:h,onChange:function(n){return p(n)}})]}),Z&&(0,f.jsxs)(X,{children:[(0,f.jsx)($,{}),Z]}),(0,f.jsx)(nn.z,{borderRadius:0,marginTop:"60px",isDisabled:Z,type:"submit",isLoading:S,loadingText:"Working....",colorScheme:"teal",variant:"solid",leftIcon:(0,f.jsx)(Q.div,{}),children:g})]})]})},tn=t(1413),rn=t(9126),on=u.Z.ul(N||(N=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: ",";\n  height: 60px;\n  @media screen and (min-width: 1024px) {\n    margin-left: ",";\n    margin-top: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[0]})),cn=u.Z.li(O||(O=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  min-width: 100%;\n  text-align: center;\n  padding: ",";\n  background-color: ",";\n\n  p {\n    font-weight: ",";\n    text-transform: capitalize;\n    font-size: ",";\n    min-width: 40%;\n  }\n\n  @media screen and (max-width: 767px) {\n    &:nth-of-type(2n + 1) {\n      background-color: ",";\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 375px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    min-width: 450px;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.secondaryBg}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.contactBg})),an=(0,u.Z)(rn.Ph1)(D||(D=(0,l.Z)(["\n  fill: #4271f3;\n  width: 18px;\n  height: 18px;\n  transition: fill 250ms linear;\n  &:hover,\n  &:focus {\n    fill: #1b54f2;\n  }\n"]))),sn=(0,u.Z)(rn.HJl)(J||(J=(0,l.Z)(["\n  fill: #ce2727;\n  width: 18px;\n  height: 18px;\n  transition: fill 250ms linear;\n  &:hover,\n  &:focus {\n    fill: #fa0000;\n  }\n"]))),ln=u.Z.button(K||(K=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: ",";\n  background-color: transparent;\n\n  padding: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.space[2]})),un=t(3204),dn=function(n){var e=n.modalToggle,t=n.id,i=n.name,r=n.number,s=(0,c.useState)(!1),l=(0,o.Z)(s,2),u=l[0],d=l[1],h=(0,a.I0)();return(0,f.jsxs)(cn,{children:[(0,f.jsx)("p",{children:i}),(0,f.jsx)("p",{children:r}),(0,f.jsxs)(Y.xu,{display:"flex",minWidth:"20%",justifyContent:"flex-end",children:[(0,f.jsx)(ln,{type:"button",onClick:function(){return e(t)},children:(0,f.jsx)(an,{})}),(0,f.jsx)(ln,{type:"button",onClick:function(){return function(n){d(!0),h((0,k.GK)(n))}(t)},children:u?(0,f.jsx)(un.$,{size:"sm",color:"red.500"}):(0,f.jsx)(sn,{})})]})]})},hn=function(n){var e=n.modalToggle,t=T(),i=t.contacts,r=t.filter,o=(0,c.useMemo)((function(){return i.filter((function(n){return n.name.toLowerCase().includes(r)}))}),[i,r]);return(0,f.jsx)(on,{as:"ul",display:"flex",flexWrap:"wrap",gridGap:2,children:o.map((function(n){return(0,f.jsx)(dn,(0,tn.Z)({modalToggle:e},n),n.id)}))})},fn=t(4808),pn=t(6069),mn=t(972),xn=t(1016),gn=t(1352),bn=t(6117),wn=t(8092),jn=t(3728),Zn=u.Z.span(V||(V=(0,l.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  margin-right: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.space[3]})),vn=(0,u.Z)(jn.Vph)(q||(q=(0,l.Z)(["\n  min-width: 40px;\n  height: 40px;\n  margin-right: 45px;\n"]))),yn=function(){var n=(0,a.I0)();return(0,f.jsx)(mn.U,{bg:"secondaryBg","min-width":"320px",mb:1,defaultIndex:[1],allowMultiple:!0,children:(0,f.jsxs)(xn.Q,{children:[(0,f.jsx)("h2",{children:(0,f.jsxs)(gn.K,{justifyContent:"center",height:14,_expanded:{bg:"#2470A0",color:"white"},children:[(0,f.jsxs)(Y.xu,{as:"span",display:"flex",alignItems:"center",textAlign:"center",children:[(0,f.jsx)(vn,{width:"24px",height:"24px"}),(0,f.jsx)(Zn,{children:"Search "})]}),(0,f.jsx)(bn.X,{width:"35px",height:"35px"})]})}),(0,f.jsx)(wn.H,{display:"flex",justifyContent:"center",pb:2,children:(0,f.jsx)(pn.I,{type:"text",name:"filter",onChange:function(e){n((0,fn.pe)(e.currentTarget.value.toLowerCase()))},width:"350px",variant:"filled",placeholder:"Enter name to find",p:2})})]})})},kn=u.Z.div(F||(F=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  font-size: ",";\n  background: ",";\n  margin-bottom: ",";\n\n  span {\n    font-size: ",";\n    font-weight: ",";\n  }\n  svg {\n    margin-right: ",";\n    width: 40px;\n    height: 40px;\n  }\n  p {\n    margin-left: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    justify-content: space-around;\n  }\n"])),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.colors.secondaryBg}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),Cn=function(){var n=T(),e=n.contacts,t=n.contactOperationLoading;return(0,f.jsx)(kn,{children:(0,f.jsxs)(Y.xu,{display:"flex",alignItems:"center",children:[(0,f.jsx)(jn.AJ5,{}),t?(0,f.jsx)(un.$,{color:"teal"}):(0,f.jsx)("span",{children:e.length}),(0,f.jsx)("p",{children:"contacts"})]})})},zn=(0,u.Z)(jn.qVg)(G||(G=(0,l.Z)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 34px;\n  fill: green;\n"]))),Sn=function(n){var e=n.modalToggle;return(0,f.jsxs)(nn.z,{display:"flex",justifyContent:"center",textAlign:"center",borderRadius:"none",w:"100%",height:14,type:"button",onClick:e,colorScheme:"teal",variant:"solid",fontSize:24,children:[(0,f.jsx)(zn,{}),"Add Contact"]})},Tn=t(2902),In=u.Z.div(H||(H=(0,l.Z)(["\n  background-color: ",";\n  height: 100vh;\n  padding-top: ",";\n  @media screen and (min-width: 768px) {\n    padding-top: ",";\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    padding-left: ",";\n    padding-right: ",";\n  }\n"])),(function(n){return n.theme.colors.thirdBg}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),Bn=u.Z.div(M||(M=(0,l.Z)(["\n  margin-bottom: ",";\n\n  @media screen and (min-width: 1024px) {\n    min-width: 400px;\n  }\n"])),(function(n){return n.theme.space[2]})),En=(0,u.Z)(Tn.E)(P||(P=(0,l.Z)(["\n  position: absolute;\n  top: 70px;\n  left: 0;\n  width: 100%;\n"]))),Ln=function(){var n=(0,c.useState)(!1),e=(0,o.Z)(n,2),t=e[0],i=e[1],r=(0,c.useState)(null),s=(0,o.Z)(r,2),l=s[0],u=s[1],d=T().contactOperationLoading,h=(0,a.I0)();(0,c.useEffect)((function(){h((0,k.yF)())}),[h]);var p=function(n){i(!t),u("object"!==typeof n?n:null)};return(0,f.jsxs)(In,{children:[(0,f.jsxs)(Bn,{children:[(0,f.jsx)(Cn,{}),(0,f.jsx)(yn,{}),(0,f.jsx)(Sn,{modalToggle:p})]}),d&&(0,f.jsx)(En,{size:"xs",isIndeterminate:!0}),(0,f.jsx)(hn,{modalToggle:p}),t&&(0,f.jsx)(m,{modalToggle:p,children:(0,f.jsx)(en,{modalToggle:p,contactId:l})})]})}}}]);
//# sourceMappingURL=458.015b6fc1.chunk.js.map