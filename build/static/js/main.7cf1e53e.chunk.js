(this.webpackJsonpimgfly=this.webpackJsonpimgfly||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),i=n.n(o),s=(n(138),n(139),n(10)),r=n(13),l=n(8),j=n(220),u=n(221),d=n(105),b=n.n(d),g=n(219),O=n(215),h=n(17),p=n(59),m=n(106),f=n.n(m),x=n(121),v=n(252),y=n(53),S=n(34),C=n(28),I=n.n(C);function w(){var e=JSON.parse(localStorage.getItem("user"));return e.access_token?{Authorization:"Bearer ".concat(e.access_token),"Content-Type":"multipart/form-data"}:{}}var k="https://imgl.azurewebsites.net/",L=new(function(){function e(){Object(y.a)(this,e)}return Object(S.a)(e,[{key:"getAll",value:function(){return I.a.get(k+"all")}},{key:"getCollections",value:function(){return I.a.get(k+"collections")}},{key:"getByTag",value:function(e){return I.a.get(k+"tag/"+e)}},{key:"upld",value:function(e){return I.a.post(k+"upld",e,{headers:w()})}},{key:"newCollection",value:function(e){return I.a.post(k+"newcollection",{title:e})}},{key:"register",value:function(e){return I.a.post(k+"register",e)}}]),e}()),N=n(225),E=n(170),T=n(218),A=n(227),B=n(224),F=n(229),D=n(230),P=n(250),G=n(234),R=n(41),U="REGISTER_SUCCESS",_="REGISTER_FAIL",z="LOGIN_SUCCESS",J="LOGIN_FAIL",M="LOGOUT",W="SET_MESSAGE",H="CLEAR_MESSAGE",Y="GETALL",q="SETLOADING",K="GETBYTAG",Q="SETNOIMAGES",V="SETIMAGES",X=n(16),Z="https://imgl.azurewebsites.net/",$=new(function(){function e(){Object(y.a)(this,e)}return Object(S.a)(e,[{key:"login",value:function(e,t){return I.a.post(Z+"login",{username:e,password:t}).then((function(e){return e.data.access_token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data})).catch((function(e){Object(X.f)().push("/hello")}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n,a){return I.a.post(Z+"register",{username:e,password:t,email:n,avatarurl:a})}}]),e}()),ee=n(108),te=n.n(ee),ne=n(247),ae=n(246),ce=n(244),oe=function(){return{type:q}},ie=function(){return function(e){L.getAll().then((function(t){e(function(e){return{type:Y,value:e}}(t.data.imgs)),e(oe())})).catch((function(e){console.log(e)}))}},se=function(e){return function(t){return L.getByTag(e).then((function(e){e.data.imgs.length<1?t({type:Q}):t({type:V}),t(function(e){return{type:K,value:e}}(e.data.imgs)),t(oe())})).catch((function(e){console.log(e)}))}},re=n(116),le=n(77),je=n.n(le),ue=n(226),de=n(117),be=n(228),ge=n(109),Oe=n.n(ge),he=n(236),pe=n(245),me=n(249),fe=n(233),xe=n(43),ve=n(2),ye=Object(O.a)((function(e){return{linkLight:{color:"#212121",textDecoration:"none"}}})),Se=function(e){var t=ye();return Object(ve.jsx)(xe.b,{className:t.linkLight,to:{pathname:"/c/".concat(e.title),state:e.collection},children:Object(ve.jsx)(E.a,{button:!0,children:Object(ve.jsx)(T.a,{primary:e.title})},e.id)})},Ce=n(235),Ie=n(237),we=n(110),ke=n.n(we),Le=n(111),Ne=n.n(Le),Ee=n(112),Te=n.n(Ee),Ae=Object(O.a)((function(e){var t;return{menuButton:{marginRight:e.spacing(2)},title:(t={display:"none"},Object(l.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(l.a)(t,"fontFamily",["Pacifico","cursive"]),t),search:Object(l.a)({position:"relative",display:"flex",flexGrow:5,borderRadius:e.shape.borderRadius,backgroundColor:Object(h.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.c)(e.palette.common.white,.25)},marginRight:e.spacing(4),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"#fafafa"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),drawer:{width:300,maxWidth:360},subheader:{color:"#212121"},grow:{flexGrow:1},loginButtons:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),loginFields:{margin:3,padding:9},loginContent:{justifyContent:"center"},uploadButton:{backgroundColor:"#43a047"},accountButton:{marginLeft:e.spacing(4)},dropspace:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out",marginBottom:10},collectionSelect:{width:"100%",marginTop:3},titleLink:{textDecoration:"none",color:"#fafafa"},uploadSpinner:{padding:"50px",overflow:"hidden"},profileLink:{textDecoration:"none",color:"#212121"},uploadDialog:{overflow:"hidden"},margin:{margin:10}}}));function Be(e){return Object(ve.jsx)(ce.a,Object(r.a)({elevation:6,variant:"filled"},e))}var Fe=Object(R.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message}}),(function(e){return{onLogIn:function(t,n){return e(function(e,t){return function(n){return $.login(e,t).then((function(e){return n({type:z,payload:{user:e}}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:J}),n({type:W,payload:t}),Promise.reject()}))}}(t,n))},onSearch:function(t){return e(se(t))},onAllImgs:function(){return e(ie())},onLogout:function(){return e((function(e){$.logout(),e({type:M})}))}}}))((function(e){var t=Ae(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(!1),d=Object(s.a)(l,2),O=d[0],h=d[1],m=Object(a.useState)(!1),y=Object(s.a)(m,2),S=y[0],C=y[1],I=Object(a.useState)([]),w=Object(s.a)(I,2),k=w[0],R=w[1],U=Object(a.useState)(""),_=Object(s.a)(U,2),z=_[0],J=_[1],M=Object(a.useState)(""),W=Object(s.a)(M,2),H=W[0],Y=W[1],q=Object(a.useState)(!1),K=Object(s.a)(q,2),Q=K[0],V=K[1],Z=Object(a.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],ce=$[1],oe=Object(a.useState)(!1),ie=Object(s.a)(oe,2),se=ie[0],le=ie[1],ge=Object(a.useState)(null),xe=Object(s.a)(ge,2),ye=xe[0],we=xe[1],Le=Object(a.useState)(!1),Ee=Object(s.a)(Le,2),Fe=Ee[0],De=Ee[1],Pe=Object(a.useState)(""),Ge=Object(s.a)(Pe,2),Re=Ge[0],Ue=Ge[1],_e=Object(a.useState)(!1),ze=Object(s.a)(_e,2),Je=ze[0],Me=ze[1],We=Object(a.useState)(!1),He=Object(s.a)(We,2),Ye=He[0],qe=He[1],Ke=Object(a.useState)(null),Qe=Object(s.a)(Ke,2),Ve=Qe[0],Xe=Qe[1],Ze=Object(a.useState)(""),$e=Object(s.a)(Ze,2),et=$e[0],tt=$e[1],nt=Boolean(ye),at=Object(a.useState)(!1),ct=Object(s.a)(at,2),ot=ct[0],it=ct[1],st=Object(a.useState)(""),rt=Object(s.a)(st,2),lt=rt[0],jt=rt[1],ut=Object(a.useState)(""),dt=Object(s.a)(ut,2),bt=dt[0],gt=dt[1],Ot=Object(a.useState)(""),ht=Object(s.a)(Ot,2),pt=ht[0],mt=ht[1],ft=Object(a.useState)([]),xt=Object(s.a)(ft,2),vt=xt[0],yt=xt[1],St=Object(X.f)(),Ct=null;e.isLoggedIn&&(Ct=JSON.parse(localStorage.getItem("user")));var It=function(){Me(!1)},wt=function(){qe(!1)},kt=function(){C(!1)},Lt=function(){V(!1)},Nt=function(){ce(!1)},Et=function(){le(!1)},Tt=function(){De(!1)};return Object(a.useEffect)((function(){L.getCollections().then((function(e){R(e.data.collections)}))}),[]),Object(ve.jsxs)(j.a,{position:"fixed",children:[Object(ve.jsxs)(u.a,{children:[Object(ve.jsx)(g.a,{edge:"start",className:t.menuButton,color:"secondary","aria-label":"open-drawer",onClick:function(){i(!0)},children:Object(ve.jsx)(b.a,{})}),Object(ve.jsx)(p.a,{className:t.title,variant:"h6",children:Object(ve.jsx)("a",{href:"/",className:t.titleLink,children:"Imgfly"})}),Object(ve.jsxs)("div",{className:t.search,children:[Object(ve.jsx)("div",{className:t.searchIcon,children:Object(ve.jsx)(f.a,{})}),Object(ve.jsx)(x.a,{onChange:function(t){e.onSearch(t.target.value),""===t.target.value&&window.location.reload()},onClick:function(){St.push("/")},classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(ve.jsx)("div",{className:t.grow}),e.isLoggedIn?Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(ne.a,{title:"Upload",arrow:!0,children:Object(ve.jsx)(B.a,{variant:"contained",onClick:function(){le(!0)},className:t.uploadButton,children:Object(ve.jsx)(te.a,{})})}),Object(ve.jsx)(g.a,{"aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){we(e.currentTarget)},className:t.accountButton,color:"secondary",children:Object(ve.jsx)(je.a,{})}),Object(ve.jsxs)(de.a,{id:"menu-appbar",anchorEl:ye,open:nt,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},onClose:function(){we(null)},children:[Object(ve.jsx)(ue.a,{children:Object(ve.jsx)("a",{href:"/profile",className:t.profileLink,children:"Profile"})}),Object(ve.jsx)(ue.a,{onClick:function(){e.onLogout(),we(null)},children:"Sign Out"})]})]}):Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(B.a,{onClick:function(){h(!0)},color:"secondary",children:"Login"}),Object(ve.jsx)(B.a,{onClick:function(){C(!0)},className:t.loginButtons,color:"secondary",children:"Sign Up"})]})]}),Object(ve.jsx)(v.a,{anchor:"left",open:o,onClose:function(){i(!1)},children:Object(ve.jsxs)(N.a,{component:"nav",className:t.drawer,subheader:Object(ve.jsx)(A.a,{children:Object(ve.jsx)("h3",{className:t.subheader,children:"Collections"})}),children:[k.map((function(e){return Object(ve.jsx)(Se,{title:e.title,id:e.id,collection:e},e.id)})),Object(ve.jsxs)(E.a,{button:!0,onClick:function(){De(!0)},children:[Object(ve.jsx)(be.a,{children:Object(ve.jsx)(Oe.a,{})}),Object(ve.jsx)(T.a,{primary:"New Collection"})]})]})}),Object(ve.jsxs)(F.a,{open:O,onClose:function(){h(!1)},children:[Object(ve.jsxs)(D.a,{className:t.loginContent,children:[Object(ve.jsx)(P.a,{className:t.loginFields,onChange:function(e){J(e.target.value)},autoFocus:!0,label:"Username"}),Object(ve.jsx)(P.a,{className:t.loginFields,onChange:function(e){Y(e.target.value)},autoFocus:!0,label:"Password",type:"password"})]}),Object(ve.jsxs)(G.a,{children:[Object(ve.jsx)(B.a,{color:"primary",children:"Forgot Password?"}),Object(ve.jsx)(B.a,{onClick:function(t){t.preventDefault(),e.onLogIn(z,H).then((function(){V(!0),h(!1)})).catch((function(e){ce(!0),console.log(e)}))},color:"primary",children:"Login"})]})]}),Object(ve.jsx)(ae.a,{open:Q,autoHideDuration:6e3,onClose:Lt,children:Object(ve.jsx)(Be,{onClose:Lt,severity:"success",children:"Successfully Logged In!"})}),Object(ve.jsx)(ae.a,{open:ee,autoHideDuration:6e3,onClose:Nt,children:Object(ve.jsx)(Be,{onClose:Nt,severity:"error",children:"Invalid Login"})}),Object(ve.jsx)(ae.a,{open:Je,autoHideDuration:6e3,onClose:It,children:Object(ve.jsx)(Be,{onClose:It,severity:"success",children:"New Collection Created!"})}),Object(ve.jsx)(ae.a,{open:Ye,onClose:wt,children:Object(ve.jsx)(Be,{onClose:wt,severity:"error",children:"Error Occured"})}),Object(ve.jsx)(F.a,{open:se,onClose:Et,className:t.uploadDialog,children:ot?Object(ve.jsx)(Ce.a,{className:t.uploadSpinner}):Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsxs)(D.a,{children:[Object(ve.jsx)(re.a,{onDrop:function(e){Xe(e[0]),console.log(Ve)},children:function(e){var n=e.getRootProps,a=e.getInputProps;return Object(ve.jsx)("div",{className:t.dropspace,children:Object(ve.jsxs)("div",Object(r.a)(Object(r.a)({},n()),{},{children:[Object(ve.jsx)("input",Object(r.a)({},a())),Ve?Object(ve.jsx)("p",{children:Ve.name}):Object(ve.jsx)("p",{children:"Drop Img or Click to Select"})]}))})}}),Object(ve.jsx)("div",{children:Object(ve.jsxs)(fe.a,{className:t.collectionSelect,children:[Object(ve.jsx)(me.a,{id:"collect-select",children:"Collections"}),Object(ve.jsx)(pe.a,{value:et,onChange:function(e){tt(e.target.value),console.log(et)},labelId:"collect-select",children:k.map((function(e){return Object(ve.jsx)(ue.a,{value:e.id,children:e.title})}))})]})})]}),Object(ve.jsxs)(G.a,{children:[Object(ve.jsx)(B.a,{color:"primary",onClick:Et,children:"Cancel"}),Object(ve.jsx)(B.a,{color:"primary",onClick:function(){var e=new FormData;e.append("imageurl",Ve,Ve.name),e.append("user_id",Ct.user[0].id),e.append("collections_id",et),it(!0),L.upld(e).then((function(){le(!1),it(!1)})).catch((function(e){console.log(e),qe(!0)}))},children:"Upload"})]})]})}),Object(ve.jsxs)(F.a,{open:Fe,onClose:Tt,children:[Object(ve.jsx)(he.a,{children:"New Collection"}),Object(ve.jsx)(D.a,{children:Object(ve.jsx)(P.a,{autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"name",fullWidth:!0,onChange:function(e){Ue(e.target.value)}})}),Object(ve.jsxs)(G.a,{children:[Object(ve.jsx)(B.a,{onClick:Tt,color:"primary",children:"Cancel"}),Object(ve.jsx)(B.a,{onClick:function(){L.newCollection(Re).then((function(){De(!1),Me(!0)})).catch((function(e){qe(!0),console.log(e)}))},color:"primary",children:"Submit"})]})]}),Object(ve.jsxs)(F.a,{open:S,onClose:kt,children:[Object(ve.jsx)(D.a,{children:Object(ve.jsxs)(fe.a,{children:[Object(ve.jsx)(P.a,{className:t.margin,id:"input-with-icon-textfield",label:"Username",onChange:function(e){jt(e.target.value)},InputProps:{startAdornment:Object(ve.jsx)(Ie.a,{position:"start",children:Object(ve.jsx)(je.a,{})})}}),Object(ve.jsx)(P.a,{className:t.margin,id:"input-with-icon-textfield",label:"Password",type:"password",onChange:function(e){gt(e.target.value)},InputProps:{startAdornment:Object(ve.jsx)(Ie.a,{position:"start",children:Object(ve.jsx)(ke.a,{})})}}),Object(ve.jsx)(P.a,{className:t.margin,id:"input-with-icon-textfield",label:"Email",onChange:function(e){mt(e.target.value)},InputProps:{startAdornment:Object(ve.jsx)(Ie.a,{position:"start",children:Object(ve.jsx)(Ne.a,{})})}}),Object(ve.jsx)(P.a,{className:t.margin,id:"input-with-icon-textfield",label:"Picture",type:"file",onChange:function(e){yt(e.target.files[0])},InputProps:{startAdornment:Object(ve.jsx)(Ie.a,{position:"start",children:Object(ve.jsx)(Te.a,{})})}})]})}),Object(ve.jsxs)(G.a,{children:[Object(ve.jsx)(B.a,{onClick:kt,color:"primary",children:"Cancel"}),Object(ve.jsx)(B.a,{onClick:function(){var e=new FormData;e.append("username",lt),e.append("password",bt),e.append("email",pt),e.append("profilepic",vt,vt.name),L.register(e).then((function(e){C(!1)})).catch((function(e){console.log(e),qe(!0)}))},color:"primary",children:"Submit"})]})]})]})})),De=n(240),Pe=n(241),Ge=n(239),Re=n(22),Ue=n(242),_e=n(238),ze=n(55),Je=n(56),Me=n.n(Je),We=Object(O.a)((function(e){return{root:{backgroundColor:"#bdbdbd"},spinner:{margin:0,position:"absolute",top:"50%",transform:"translate(0, -50%)"},gridTitle:{visibility:"hidden","&:hover":{visibility:"visible"}},grid:{marginTop:"100px"},downloadLink:{textDecoration:"none",color:"#fafafa"}}})),He=Object(R.b)((function(e){return{imgs:e.imgs,loading:e.loading,noImages:e.noImages}}),(function(e){return{onAllImgs:function(){return e(ie())}}}))((function(e){var t=We(),n=Object(Re.a)();Object(a.useEffect)((function(){return e.onAllImgs()}),[]);var c=3;return!0===Object(_e.a)(n.breakpoints.down("sm"))&&(c=1),Object(ve.jsx)("div",{children:Object(ve.jsx)(Ge.a,{maxWidth:"lg",className:t.grid,children:Object(ve.jsx)("div",{children:e.imgs.loading?Object(ve.jsx)(Ce.a,{className:t.spinner}):Object(ve.jsx)("div",{children:e.imgs.noImages?Object(ve.jsx)(p.a,{variant:"h2",children:"No Images Found...oops"}):Object(ve.jsx)(De.a,{cellHeight:500,cols:c,spacing:12,children:e.imgs.imgs.map((function(e){return Object(ve.jsxs)(Pe.a,{cols:1,children:[Object(ve.jsx)(ze.LazyLoadImage,{height:500,width:403,src:e.imageurl,alt:e.tags[0]}),Object(ve.jsx)(Ue.a,{title:e.tags[0],subtitle:Object(ve.jsxs)("span",{children:["Uploaded By: ",e.user[0].username]}),actionIcon:Object(ve.jsxs)(g.a,{color:"secondary",children:[Object(ve.jsxs)("a",{href:e.imageurl,className:t.downloadLink,children:[" ",Object(ve.jsx)(Me.a,{})]})," "]})})]},e.id)}))})})})})})})),Ye=n(119),qe=Object(O.a)((function(e){return{test:{marginTop:"100px"},title:{padding:10,fontFamily:["Pacifico","cursive"]},downloadLink:{textDecoration:"none",color:"#fafafa"}}})),Ke=function(){var e=qe(),t=Object(Re.a)(),n=Object(X.g)().state,c=Object(_e.a)(t.breakpoints.down("sm")),o=Object(a.useState)(!1),i=Object(s.a)(o,2),r=i[0],l=i[1],j=3;return!0===c&&(j=1),Object(a.useEffect)((function(){0===n.imgs.length?l(!0):l(!1)})),Object(ve.jsxs)(Ge.a,{maxWidth:"md",children:[Object(ve.jsx)(Ye.a,{elevation:3,className:e.test,children:Object(ve.jsx)("h1",{className:e.title,children:n.title})}),r?Object(ve.jsx)("h1",{children:"No Images Available"}):Object(ve.jsx)(De.a,{cellHeight:500,cols:j,spacing:12,children:n.imgs.map((function(t){return Object(ve.jsxs)(Pe.a,{cols:1,children:[Object(ve.jsx)(ze.LazyLoadImage,{height:500,width:403,src:t.imageurl,alt:t.tags[0]}),Object(ve.jsx)(Ue.a,{title:t.tags[0],subtitle:Object(ve.jsxs)("span",{children:["Uploaded By: ",t.user[0].username]}),actionIcon:Object(ve.jsxs)(g.a,{color:"secondary",children:[Object(ve.jsxs)("a",{href:t.imageurl,className:e.downloadLink,children:[" ",Object(ve.jsx)(Me.a,{})]})," "]})})]},t.id)}))})]})},Qe=n(248),Ve=Object(O.a)((function(e){return{profilebox:{marginTop:"100px",padding:"10px",marginBottom:"50px"},avatar:{width:e.spacing(12),height:e.spacing(12),margin:"auto",padding:"20px"},spinner:{margin:0,position:"absolute",top:"50%",transform:"translate(0, -50%)"},downloadLink:{textDecoration:"none",color:"#fafafa"}}})),Xe=Object(R.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message}}))((function(e){var t=Ve(),n=Object(a.useState)([]),c=Object(s.a)(n,2),o=c[0],i=c[1],r=Object(a.useState)(!0),l=Object(s.a)(r,2),j=l[0],u=l[1],d=Object(a.useState)(!1),b=Object(s.a)(d,2),O=b[0],h=b[1],m=Object(Re.a)(),f=3;!0===Object(_e.a)(m.breakpoints.down("sm"))&&(f=1);var x=null;return e.isLoggedIn&&(x=JSON.parse(localStorage.getItem("user"))),Object(a.useEffect)((function(){I.a.get("https://imgl.azurewebsites.net/user/"+x.user[0].id,{headers:w()}).then((function(e){i(e.data),console.log(e.data),u(!1),0===e.data.images.length&&h(!0)}))}),[]),Object(ve.jsx)(Ge.a,{maxWidth:"md",children:j?Object(ve.jsx)(Ce.a,{className:t.spinner}):Object(ve.jsxs)("div",{children:[Object(ve.jsxs)(Ye.a,{elevation:3,className:t.profilebox,children:[Object(ve.jsx)(Qe.a,{alt:o.username,src:o.pic,className:t.avatar}),Object(ve.jsxs)(p.a,{variant:"h4",gutterBottom:!0,children:["@",o.username]}),Object(ve.jsx)(p.a,{variant:"subtitle1",gutterBottom:!0,children:o.email})]}),O?Object(ve.jsx)("h5",{children:"No Images Found...Start Uploading"}):Object(ve.jsx)(De.a,{cellHeight:500,cols:f,spacing:12,children:o.images.map((function(e){return Object(ve.jsxs)(Pe.a,{cols:1,children:[Object(ve.jsx)(ze.LazyLoadImage,{height:500,width:403,src:e.imageurl,alt:e.tags[0]}),Object(ve.jsx)(Ue.a,{title:e.tags[0],subtitle:Object(ve.jsxs)("span",{children:["Uploaded By: ",e.user[0].username]}),actionIcon:Object(ve.jsxs)(g.a,{color:"secondary",children:[Object(ve.jsxs)("a",{href:e.imageurl,className:t.downloadLink,children:[" ",Object(ve.jsx)(Me.a,{})]})," "]})})]},e.id)}))})]})})}));var Ze=function(){return Object(a.useEffect)((function(){setInterval((function(){localStorage.removeItem("user")}),9e5)})),Object(ve.jsx)(xe.a,{children:Object(ve.jsxs)("div",{className:"App",children:[Object(ve.jsx)(Fe,{}),Object(ve.jsxs)(X.c,{children:[Object(ve.jsx)(X.a,{exact:!0,path:"/",children:Object(ve.jsx)(He,{})}),Object(ve.jsx)(X.a,{exact:!0,path:"/c/:title",children:Object(ve.jsx)(Ke,{})}),Object(ve.jsx)(X.a,{exact:!0,path:"/profile",children:Object(ve.jsx)(Xe,{})})]})]})})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,253)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},et=n(115),tt=n(243),nt=n(57),at=n(113),ct=JSON.parse(localStorage.getItem("user")),ot=ct?{isLoggedIn:!0,user:ct}:{isLoggedIn:!1,user:null},it={},st={imgs:[],loading:!0,noImages:!1},rt=Object(nt.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case U:case _:return Object(r.a)(Object(r.a)({},e),{},{isLoggedIn:!1});case z:return Object(r.a)(Object(r.a)({},e),{},{isLoggedIn:!0,user:a.user});case J:return Object(r.a)(Object(r.a)({},e),{},{isLoggedIn:!1});case M:return Object(r.a)(Object(r.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case W:return{message:a};case H:return{message:""};default:return e}},imgs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:case K:return Object(r.a)(Object(r.a)({},e),{},{imgs:t.value});case q:return Object(r.a)(Object(r.a)({},e),{},{loading:!1});case Q:return Object(r.a)(Object(r.a)({},e),{},{noImages:!0});case V:return Object(r.a)(Object(r.a)({},e),{},{noImages:!1});default:return e}}}),lt=n(114),jt=Object(nt.createStore)(rt,Object(lt.composeWithDevTools)(Object(nt.applyMiddleware)(at.a))),ut=Object(et.a)({palette:{primary:{main:"#212121",light:"#424242",dark:"#212121"},secondary:{main:"#fafafa",light:"#fafafa",dark:"#fafafa"}}});i.a.render(Object(ve.jsx)(c.a.StrictMode,{children:Object(ve.jsx)(tt.a,{theme:ut,children:Object(ve.jsx)(R.a,{store:jt,children:Object(ve.jsx)(Ze,{})})})}),document.getElementById("root")),$e()}},[[169,1,2]]]);
//# sourceMappingURL=main.7cf1e53e.chunk.js.map