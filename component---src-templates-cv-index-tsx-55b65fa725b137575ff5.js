(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[779],{7381:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ce}});var n=a(8611),r=a(5245),o=a(9931),l=a.n(o),c=a(6974),i=a(3500),m=a(7852),s=a.n(m),u=a(6723),d=a.n(u),p=a(4038),f=a.n(p),E=a(8401),v=a.n(E),h=a(9387),C=a.n(h),g=a(9086),y=a(7294);function Z(e){var t=e.children,a=e.className,n=e.title;return y.createElement("div",{className:l()("block-module--block--ONh8g",a)},(0,g.JG)(n)&&y.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.DarkGray,className:"block-module--title--cf1tR"},n),t)}var L=a(7294),k=a(7294);function N(e){var t=e.children;return k.createElement("ul",{className:"list-module--aside-list--jHUtR"},L.Children.map(t,(function(e,t){return k.createElement("li",{key:t,className:"list-module--aside-list_item--LVrWr"},e)})))}(N||(N={})).ItemWithIcon=function(e){var t=e.children,a=e.icon;return k.createElement("div",{className:"list-module--item-with-icon--Hrrra"},k.createElement("div",{className:"list-module--item-with-icon__icon--kmJdw"},a),k.createElement("div",{className:"list-module--item-with-icon__content--O9lD5"},t))};var w=a(5470),b=a(7294),V=(0,L.createContext)(void 0);function _(e){var t=e.children,a=e.cv;return b.createElement(V.Provider,{value:a},t)}function x(){var e=(0,L.useContext)(V);return(0,w.W)(e,"useCV must be used within CVProvider")}var M,R,P,W,H;R=M||(M={}),function(e){e.Email="email",e.Phone="phone",e.Location="location"}(P||(P={})),R.ContactType=P,(P||(P=R.ContactType||(R.ContactType={}))).toLabel=function(e){switch(e){case P.Email:return"Email";case P.Phone:return"Phone";case P.Location:return"Location";default:return(0,i.vE)(e)}},function(e){e.English="english",e.Ukrainian="ukrainian"}(W||(W={})),R.LanguageType=W,function(e){e.Text="text",e.Experience="experience",e.Education="education"}(H||(H={})),R.ContentType=H;var T=a(7294),U=["type"],D=["type"];function G(e){var t=e.asideClassName,a=x(),n=a.profile,r=a.contacts,o=a.socials,m=a.languages;return T.createElement("aside",{className:l()("aside-module--aside--We4F1",t)},T.createElement(Z,null,T.createElement("img",{src:n.avatarURL,alt:n.name,className:"aside-module--profile-avatar--pX6GC"}),T.createElement(c.Z,{as:"h1",variant:c.Z.Variant.Heading,fontWeight:c.Z.Weight.Medium,fontColor:c.Z.Color.Black},n.name),T.createElement(c.Z,{as:"h2",variant:c.Z.Variant.Title,fontWeight:c.Z.Weight.Medium,className:"aside-module--position--Pom0f"},n.position)),T.createElement(Z,{title:"Contacts"},T.createElement(N,null,r.map((function(e){return T.createElement(N.ItemWithIcon,{icon:T.createElement("span",{className:"aside-module--icon-container--MrCp6"},T.createElement(B,{type:e.type,className:"aside-module--icon-container__icon--wrydJ"})),key:e.type},T.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.LightGray},M.ContactType.toLabel(e.type)),T.createElement(c.Z,Object.assign({as:"h5",variant:c.Z.Variant.ParagraphMD,fontColor:c.Z.Color.DarkGray,fontWeight:c.Z.Weight.Medium},function(e){var t=e.type,a=e.value;switch(t){case M.ContactType.Email:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+a};case M.ContactType.Phone:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"tel:"+a};case M.ContactType.Location:return{};default:return(0,i.vE)(t)}}(e)),e.value))})))),T.createElement(Z,{title:"Socials"},T.createElement(N,null,o.map((function(e){var t=e.name,a=e.profileURL,n=e.username,r=e.iconURL;return T.createElement(N.ItemWithIcon,{icon:T.createElement("img",{src:r,alt:t,className:"aside-module--social-icon--8uzm8"}),key:t},T.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.LightGray},t),T.createElement(c.Z,{as:"a",href:a,variant:c.Z.Variant.ParagraphMD,fontColor:c.Z.Color.DarkGray,fontWeight:c.Z.Weight.Medium},n))})))),T.createElement(Z,{title:"Languages"},T.createElement(N,null,m.map((function(e){var t=e.name,a=e.level,n=e.type;return T.createElement(N.ItemWithIcon,{icon:T.createElement(J,{type:n,className:"aside-module--flag-icon--45tkN"}),key:t},T.createElement(c.Z,{as:"h5",variant:c.Z.Variant.ParagraphMD,fontColor:c.Z.Color.DarkGray,fontWeight:c.Z.Weight.Medium},t),T.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.LightGray},a))})))))}function B(e){var t=e.type,a=(0,r.Z)(e,U);switch(t){case M.ContactType.Email:return T.createElement(d(),a);case M.ContactType.Phone:return T.createElement(f(),a);case M.ContactType.Location:return T.createElement(s(),a);default:return(0,i.vE)(t)}}function J(e){var t=e.type,a=(0,r.Z)(e,D);switch(t){case M.LanguageType.English:return T.createElement(C(),a);case M.LanguageType.Ukrainian:return T.createElement(v(),a);default:return(0,i.vE)(t)}}var I=a(2973),O=["January","February","March","April","May","June","July","August","September","October","November","December"];var F=a(7294),A=["children"];function S(e){var t=e.children,a=(0,r.Z)(e,A);return F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg"},a,{className:"svg-defs-module--svg-defs--6VqW2"}),F.createElement("defs",null,t))}var j=a(6234),Q=a.n(j),X=a(7294),Y=["url"];function q(e){var t=e.className,a=e.content;return X.createElement("section",{className:l()("block-module--block--TMDTY",t)},X.createElement(c.Z,{variant:c.Z.Variant.Title,fontColor:c.Z.Color.Black,fontWeight:c.Z.Weight.Medium,className:"block-module--title--RstB1"},a.title),function(){var e=a.type;switch(e){case M.ContentType.Text:return a.data.map((function(e,t){var a=e.variant,n=e.color,r=e.weight,o=e.text;return X.createElement(c.Z,{key:t,variant:null!=a?a:c.Z.Variant.ParagraphMD,fontColor:n,fontWeight:r,className:"block-module--paragraph--hkRVQ"},o)}));case M.ContentType.Education:return X.createElement("ul",{className:"block-module--education-list--y2OcA"},a.data.map((function(e,t){return X.createElement("li",{key:t,className:"block-module--education-list__item--CcnhP"},X.createElement(K,{companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,courseName:e.courseName,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,certificateURL:e.certificateURL}))})));case M.ContentType.Experience:return X.createElement("ul",{className:"block-module--experience-list--vaLgY"},a.data.map((function(e,t){return X.createElement("li",{key:t,className:"block-module--experience-list__item--h7AFH"},X.createElement(z,{companyName:e.companyName,companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,location:e.location,position:e.position}))})));default:return(0,i.vE)(e)}}())}function z(e){var t=e.companyName,a=e.companyLogoURL,n=e.companyURL,r=e.position,o=e.description,l=e.dateStarted,i=e.dateEnded,m=e.location;return X.createElement("div",{className:"block-module--experience--6wXXQ"},X.createElement(S,{viewBox:"0 0 24 24"},X.createElement("clipPath",{id:"shape"},X.createElement("path",{fill:"#000",d:"M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"}))),X.createElement("div",{className:"block-module--experience__header--hFq5w"},X.createElement("div",{className:"block-module--experience__company--r60ua"},X.createElement(ee,{className:"block-module--experience__company-logo--j0KQM",url:a}),X.createElement("div",{className:"block-module--experience__company-info--UJslJ"},X.createElement(c.Z,Object.assign({as:"h2",variant:c.Z.Variant.ParagraphMD,fontWeight:c.Z.Weight.Medium,fontColor:c.Z.Color.Black,className:"block-module--experience__company-name--1Facc",nowrap:!0},$(n)),t),X.createElement(c.Z,{as:"h3",variant:c.Z.Variant.Caption,fontColor:c.Z.Color.LightGray,nowrap:!0},r))),X.createElement("div",{className:"block-module--experience__metrics--7dgP5"},X.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.DarkGray,className:"block-module--experience__dates--OqFsw",nowrap:!0},te(l)," -"," ",(0,I.m)(i,te,"Present")," ·"," ",function(e,t){void 0===t&&(t=Date.now());var a=Math.abs(e-t),n=Math.floor(a/1e3/60/60/24/30),r=Math.floor(n/12),o=n%12+1;return[r>0?r+" yr"+(r>1?"s":""):void 0,o+" "+(o>1?"mos":"mon")].join(" ")}(l,i)),X.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.LightGray,className:"block-module--experience__location--gYaP7",nowrap:!0},X.createElement(s(),{className:"block-module--experience__location-icon--fp55f"}),X.createElement("span",null,m)))),X.createElement("div",null,o.map((function(e,t){var a=e.variant,n=e.color,r=e.weight,o=e.text;return X.createElement(c.Z,{key:t,variant:null!=a?a:c.Z.Variant.ParagraphSM,fontColor:n,fontWeight:r,className:"block-module--experience__paragraph--cxFOx"},o)}))))}function K(e){var t=e.companyLogoURL,a=e.companyURL,n=e.courseName,r=e.dateStarted,o=e.dateEnded,l=e.description,i=e.certificateURL;return X.createElement("div",{className:"block-module--education--IbX-9"},X.createElement(ee,{className:"block-module--education__company-logo--PlMs3",url:t}),X.createElement("div",{className:"block-module--education__info--lPGQn"},X.createElement(c.Z,Object.assign({as:"h2",variant:c.Z.Variant.ParagraphMD,fontWeight:c.Z.Weight.Medium,fontColor:c.Z.Color.Black,nowrap:!0},$(a)),n),X.createElement(c.Z,{variant:c.Z.Variant.Caption,fontColor:c.Z.Color.Gray,nowrap:!0},te(r)," -"," ",(0,I.m)(o,te,"Present")),(0,g.JG)(l)&&X.createElement(c.Z,{as:"h3",variant:c.Z.Variant.Caption,fontColor:c.Z.Color.DarkGray,nowrap:!0},l),(0,g.JG)(i)&&X.createElement(c.Z,{as:"a",href:i,target:"_blank",rel:"noopener noreferrer",variant:c.Z.Variant.Caption,className:"block-module--education__certificate--xkeTf",fontColor:c.Z.Color.DarkGray,nowrap:!0},X.createElement("span",{className:"block-module--education__certificate-icon-container--fKats"},X.createElement(Q(),{className:"block-module--education__certificate-icon--xHh8W"})),X.createElement("span",null,"Course certificate"))))}function $(e){return(0,g.JG)(e)?{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"}:{}}function ee(e){var t=e.url,a=(0,r.Z)(e,Y);return X.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a),X.createElement("g",{clipPath:"url(#shape)"},X.createElement("rect",{x:"0",y:"0",width:"200",height:"100",fill:"#E2E6EE"}),X.createElement("image",{href:t,height:"100%",width:"100%"})))}function te(e){var t=new Date(e);return function(e){return O[e.getMonth()]}(t).substring(0,3)+" "+t.getFullYear()}var ae=a(7294);function ne(e){var t=e.mainClassName,a=x().body;return ae.createElement("main",{className:l()("main-module--main--3IVJs",t)},a.map((function(e,t){return ae.createElement(q,{key:t,content:e})})))}var re=a(7294);function oe(){return re.createElement("div",{className:"cv-module--wrapper--yA9A8"},re.createElement("article",{className:"cv-module--content--ZW3Z+"},re.createElement(G,{asideClassName:"cv-module--aside--HJwI+"}),re.createElement(ne,{mainClassName:"cv-module--main--4HNpd"})))}var le=a(7294);function ce(e){var t=e.pageContext;return le.createElement(n.T,{title:t.profile.name+" CV",rootClassName:"index-module--root---DmFV"},le.createElement(_,{cv:t},le.createElement(oe,null)))}},9387:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("rect",{width:"100%",height:"100%",fill:"#22438B",key:0}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z",fill:"white",key:1}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.444553 -0.0666656L-0.444336 0.866668L15.5557 12.0667L16.4446 11.1333L0.444553 -0.0666656Z",fill:"#C7152A",key:2}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70293 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z",fill:"white",key:3}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5939 -0.0928001L16.4446 0.866667L0.444553 12.0667L-0.444336 11.1333L15.5939 -0.0928001Z",fill:"#C7152A",key:4}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.77789 -0.0666656H10.2223V3.66667H16.4446V8.33333H10.2223V12.0667H5.77789V8.33333H-0.444336V3.66667H5.77789V-0.0666656Z",fill:"white",key:5}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66678 -0.0666656H9.33344V4.6H16.4446V7.4H9.33344V12.0667H6.66678V7.4H-0.444336V4.6H6.66678V-0.0666656Z",fill:"#C7152A",key:6})])}r.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=r,r.default=r},8401:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("rect",{width:"100%",height:"100%",fill:"#F8D648",key:0}),n.createElement("rect",{width:"100%",height:"50%",fill:"#225CB5",key:1})])}r.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=r,r.default=r},6234:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M2.26361 4.77813C1.84232 4.77813 1.46252 4.52436 1.30127 4.13516C1.14003 3.74595 1.22909 3.29794 1.52694 3L1.96902 2.55792L2.26361 2.8525L1.82173 3.29438C1.66383 3.45228 1.60216 3.68243 1.65996 3.89813C1.71775 4.11384 1.88623 4.28232 2.10194 4.34011C2.31764 4.39791 2.54779 4.33624 2.70569 4.17834L3.14757 3.73646L3.44215 4.03125L3.00027 4.47313C2.80529 4.66907 2.54004 4.7789 2.26361 4.77813ZM2.4109 3.88375L2.11632 3.58917L3.58944 2.11605L3.88402 2.41063L2.41111 3.88355L2.4109 3.88375ZM4.03152 3.44188L3.73673 3.1473L4.17861 2.70542C4.33866 2.54799 4.40198 2.31681 4.34449 2.09979C4.287 1.88277 4.11753 1.71326 3.90053 1.65572C3.68352 1.59818 3.45233 1.66145 3.29486 1.82146L2.85277 2.26334L2.55819 1.96875L3.00027 1.52667C3.40758 1.12291 4.06464 1.12435 4.47018 1.52989C4.87572 1.93543 4.87716 2.59249 4.4734 2.9998L4.03152 3.44167V3.44188Z"}))}r.defaultProps={viewBox:"0 0 6 6"},e.exports=r,r.default=r},7852:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M3 5.75C2.68423 5.48066 2.39155 5.18538 2.125 4.86725C1.725 4.3895 1.25 3.678 1.25 3C1.24965 2.29188 1.67606 1.65334 2.33027 1.38235C2.98447 1.11135 3.73752 1.26131 4.238 1.76225C4.56712 2.0899 4.75148 2.53559 4.75001 3C4.75001 3.678 4.275 4.3895 3.875 4.86725C3.60845 5.18538 3.31577 5.48066 3 5.75ZM3 2.25C2.73205 2.25 2.48446 2.39295 2.35048 2.625C2.21651 2.85705 2.21651 3.14295 2.35048 3.375C2.48446 3.60705 2.73205 3.75 3 3.75C3.41421 3.75 3.75 3.41421 3.75 3C3.75 2.58578 3.41421 2.25 3 2.25Z"}))}r.defaultProps={viewBox:"0 0 6 7"},e.exports=r,r.default=r},6723:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M8.3335 8.33334H1.66683C1.20659 8.33334 0.833496 7.96024 0.833496 7.5V2.46376C0.852916 2.01773 1.22038 1.66625 1.66683 1.66667H8.3335C8.79373 1.66667 9.16683 2.03977 9.16683 2.50001V7.5C9.16683 7.96024 8.79373 8.33334 8.3335 8.33334ZM1.66683 3.27834V7.50001H8.3335V3.27834L5.00016 5.50001L1.66683 3.27834ZM2.00016 2.50001L5.00016 4.50001L8.00016 2.50001H2.00016Z"}))}r.defaultProps={viewBox:"0 0 10 10"},e.exports=r,r.default=r},4038:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M7.91546 8.33333C4.36062 8.33837 1.6627 5.60813 1.66651 2.08438C1.66651 1.85427 1.85306 1.66667 2.08317 1.66667H3.18291C3.3894 1.66667 3.56481 1.81839 3.59513 2.02264C3.6678 2.51217 3.81033 2.98874 4.01837 3.4378L4.06119 3.53022C4.12072 3.65872 4.08037 3.8114 3.96512 3.8937C3.62455 4.13692 3.49439 4.62649 3.75971 5.00849C4.09266 5.48785 4.51236 5.90746 4.99162 6.24026C5.3736 6.50551 5.86309 6.37537 6.1063 6.03486C6.18866 5.91955 6.34142 5.87917 6.47 5.93873L6.562 5.98135C7.01108 6.18938 7.48769 6.33191 7.97727 6.40457C8.18152 6.43488 8.33317 6.61029 8.33317 6.81678V7.91666C8.33317 8.14678 8.14617 8.33333 7.91605 8.33333L7.91546 8.33333Z"}))}r.defaultProps={viewBox:"0 0 10 10"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-templates-cv-index-tsx-55b65fa725b137575ff5.js.map