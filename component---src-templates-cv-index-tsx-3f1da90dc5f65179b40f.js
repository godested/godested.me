(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[779],{7275:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return re}});var n=a(8611),r=a(5245),o=a(9931),l=a.n(o),c=a(2735),i=a(6974),m=a(4168),s=a(7852),u=a.n(s),d=a(6723),p=a.n(d),f=a(4038),h=a.n(f),E=a(8401),C=a.n(E),v=a(9387),g=a.n(v),y=a(7294);function Z(e){var t=e.children,a=e.className,n=e.title;return y.createElement("div",{className:l()("block-module--block--ONh8g",a)},(0,m.isSomething)(n)&&y.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.DarkGray,className:"block-module--title--cf1tR"},n),t)}var L,k,N,w,_,b=a(7294),x=a(7294);function V(e){var t=e.children;return x.createElement("ul",{className:"list-module--aside-list--jHUtR"},b.Children.map(t,(function(e,t){return x.createElement("li",{key:t,className:"list-module--aside-list_item--LVrWr"},e)})))}(V||(V={})).ItemWithIcon=function(e){var t=e.children,a=e.icon;return x.createElement("div",{className:"list-module--item-with-icon--Hrrra"},x.createElement("div",{className:"list-module--item-with-icon__icon--kmJdw"},a),x.createElement("div",{className:"list-module--item-with-icon__content--O9lD5"},t))},k=L||(L={}),function(e){e.Email="email",e.Phone="phone",e.Location="location"}(N||(N={})),k.ContactType=N,(N||(N=k.ContactType||(k.ContactType={}))).toLabel=function(e){switch(e){case N.Email:return"Email";case N.Phone:return"Phone";case N.Location:return"Location";default:return(0,m.assertNever)(e)}},function(e){e.English="english",e.Ukrainian="ukrainian"}(w||(w={})),k.LanguageType=w,function(e){e.Text="text",e.Experience="experience",e.Education="education"}(_||(_={})),k.ContentType=_;var M=a(7294),R=(0,b.createContext)(void 0);function P(e){var t=e.children,a=e.cv;return M.createElement(R.Provider,{value:a},t)}var W=(0,m.createUseContext)(R),H=a(7294),T=["type"],U=["type"];function D(e){var t=e.asideClassName,a=W(),n=a.profile,r=a.contacts,o=a.socials,s=a.languages;return H.createElement("aside",{className:l()("aside-module--aside--We4F1",t)},H.createElement(c.LW,{className:"aside-module--theme-toggler--kPp0v"}),H.createElement(Z,null,H.createElement("img",{src:n.avatarURL,alt:n.name,className:"aside-module--profile-avatar--pX6GC"}),H.createElement(i.Z,{as:"h1",variant:i.Z.Variant.Heading,fontWeight:i.Z.Weight.Medium,fontColor:i.Z.Color.Black},n.name),H.createElement(i.Z,{as:"h2",variant:i.Z.Variant.Title,fontWeight:i.Z.Weight.Medium,className:"aside-module--position--Pom0f"},n.position)),H.createElement(Z,{title:"Contacts"},H.createElement(V,null,r.map((function(e){return H.createElement(V.ItemWithIcon,{icon:H.createElement("span",{className:"aside-module--icon-container--MrCp6"},H.createElement(S,{type:e.type,className:"aside-module--icon-container__icon--wrydJ"})),key:e.type},H.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.LightGray},L.ContactType.toLabel(e.type)),H.createElement(i.Z,Object.assign({as:"h5",variant:i.Z.Variant.ParagraphMD,fontColor:i.Z.Color.DarkGray,fontWeight:i.Z.Weight.Medium},function(e){var t=e.type,a=e.value;switch(t){case L.ContactType.Email:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+a};case L.ContactType.Phone:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"tel:"+a};case L.ContactType.Location:return{};default:return(0,m.assertNever)(t)}}(e)),e.value))})))),H.createElement(Z,{title:"Socials"},H.createElement(V,null,o.map((function(e){var t=e.name,a=e.profileURL,n=e.username,r=e.iconURL;return H.createElement(V.ItemWithIcon,{icon:H.createElement("img",{src:r,alt:t,className:"aside-module--social-icon--8uzm8"}),key:t},H.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.LightGray},t),H.createElement(i.Z,{as:"a",href:a,variant:i.Z.Variant.ParagraphMD,fontColor:i.Z.Color.DarkGray,fontWeight:i.Z.Weight.Medium},n))})))),H.createElement(Z,{title:"Languages"},H.createElement(V,null,s.map((function(e){var t=e.name,a=e.level,n=e.type;return H.createElement(V.ItemWithIcon,{icon:H.createElement(B,{type:n,className:"aside-module--flag-icon--45tkN"}),key:t},H.createElement(i.Z,{as:"h5",variant:i.Z.Variant.ParagraphMD,fontColor:i.Z.Color.DarkGray,fontWeight:i.Z.Weight.Medium},t),H.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.LightGray},a))})))))}function S(e){var t=e.type,a=(0,r.Z)(e,T);switch(t){case L.ContactType.Email:return H.createElement(p(),a);case L.ContactType.Phone:return H.createElement(h(),a);case L.ContactType.Location:return H.createElement(u(),a);default:return(0,m.assertNever)(t)}}function B(e){var t=e.type,a=(0,r.Z)(e,U);switch(t){case L.LanguageType.English:return H.createElement(g(),a);case L.LanguageType.Ukrainian:return H.createElement(C(),a);default:return(0,m.assertNever)(t)}}var G=a(7294);function I(e){return G.createElement("defs",null,e.children)}var O=a(6234),j=a.n(O),F=a(7294),A=["url"];function J(e){var t=e.className,a=e.content;return F.createElement("section",{className:l()("block-module--block--TMDTY",t)},F.createElement(i.Z,{variant:i.Z.Variant.Title,fontColor:i.Z.Color.Black,fontWeight:i.Z.Weight.Medium,className:"block-module--title--RstB1"},a.title),function(){var e=a.type;switch(e){case L.ContentType.Text:return a.data.map((function(e,t){var a=e.variant,n=e.color,r=e.weight,o=e.text;return F.createElement(i.Z,{key:t,variant:null!=a?a:i.Z.Variant.ParagraphMD,fontColor:n,fontWeight:r,className:"block-module--paragraph--hkRVQ"},o)}));case L.ContentType.Education:return F.createElement("ul",{className:"block-module--education-list--y2OcA"},a.data.map((function(e,t){return F.createElement("li",{key:t,className:"block-module--education-list__item--CcnhP"},F.createElement(X,{companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,courseName:e.courseName,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,certificateURL:e.certificateURL}))})));case L.ContentType.Experience:return F.createElement("ul",{className:"block-module--experience-list--vaLgY"},a.data.map((function(e,t){return F.createElement("li",{key:t,className:"block-module--experience-list__item--h7AFH"},F.createElement(Q,{companyName:e.companyName,companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,location:e.location,position:e.position}))})));default:return(0,m.assertNever)(e)}}())}function Q(e){var t=e.companyName,a=e.companyLogoURL,n=e.companyURL,r=e.position,o=e.description,l=e.dateStarted,c=e.dateEnded,s=e.location;return F.createElement("div",{className:"block-module--experience--6wXXQ"},F.createElement("div",{className:"block-module--experience__header--hFq5w"},F.createElement("div",{className:"block-module--experience__company--r60ua"},F.createElement(q,{className:"block-module--experience__company-logo--j0KQM",url:a}),F.createElement("div",{className:"block-module--experience__company-info--UJslJ"},F.createElement(i.Z,Object.assign({as:"h2",variant:i.Z.Variant.ParagraphMD,fontWeight:i.Z.Weight.Medium,fontColor:i.Z.Color.Black,className:"block-module--experience__company-name--1Facc",nowrap:!0},Y(n)),t),F.createElement(i.Z,{as:"h3",variant:i.Z.Variant.Caption,fontColor:i.Z.Color.LightGray,nowrap:!0},r))),F.createElement("div",{className:"block-module--experience__metrics--7dgP5"},F.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.DarkGray,className:"block-module--experience__dates--OqFsw",nowrap:!0},z(l,null!=c?c:"Present")," · ",function(e,t){void 0===t&&(t=Date.now());var a=Math.abs(e-t),n=Math.floor(a/1e3/60/60/24/30),r=Math.floor(n/12),o=n%12+1;return[r>0?r+" yr"+(r>1?"s":""):void 0,o+" "+(o>1?"mos":"mon")].filter(m.isSomething).join(" ")}(l,c)),F.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.LightGray,className:"block-module--experience__location--gYaP7",nowrap:!0},F.createElement(u(),{className:"block-module--experience__location-icon--fp55f"}),F.createElement("span",null,s)))),F.createElement("div",null,o.map((function(e,t){var a=e.variant,n=e.color,r=e.weight,o=e.text;return F.createElement(i.Z,{key:t,variant:null!=a?a:i.Z.Variant.ParagraphSM,fontColor:n,fontWeight:r,className:"block-module--experience__paragraph--cxFOx"},o)}))))}function X(e){var t=e.companyLogoURL,a=e.companyURL,n=e.courseName,r=e.dateStarted,o=e.dateEnded,l=e.description,c=e.certificateURL;return F.createElement("div",{className:"block-module--education--IbX-9"},F.createElement(q,{className:"block-module--education__company-logo--PlMs3",url:t}),F.createElement("div",{className:"block-module--education__info--lPGQn"},F.createElement(i.Z,Object.assign({as:"h2",variant:i.Z.Variant.ParagraphMD,fontWeight:i.Z.Weight.Medium,fontColor:i.Z.Color.Black,nowrap:!0},Y(a)),n),F.createElement(i.Z,{variant:i.Z.Variant.Caption,fontColor:i.Z.Color.Gray,nowrap:!0},z(r,o)),(0,m.isSomething)(l)&&F.createElement(i.Z,{as:"h3",variant:i.Z.Variant.Caption,fontColor:i.Z.Color.DarkGray,nowrap:!0},l),(0,m.isSomething)(c)&&F.createElement(i.Z,{as:"a",href:c,target:"_blank",rel:"noopener noreferrer",variant:i.Z.Variant.Caption,className:"block-module--education__certificate--xkeTf",nowrap:!0},F.createElement("span",{className:"block-module--education__certificate-icon-container--fKats"},F.createElement(j(),{className:"block-module--education__certificate-icon--xHh8W"})),F.createElement("span",null,"Course certificate"))))}function Y(e){return(0,m.isSomething)(e)?{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"}:{}}function q(e){var t=e.url,a=(0,r.Z)(e,A);return F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a),F.createElement(I,{singleton:!0,id:"IconShape"},F.createElement("clipPath",{id:"icon-shape"},F.createElement("path",{fill:"#000",d:"M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"}))),F.createElement("g",{clipPath:"url(#icon-shape)"},F.createElement("rect",{x:"0",y:"0",width:"200",height:"100",fill:"transparent"}),F.createElement("image",{href:t,height:"100%",width:"100%"})))}function z(e,t){return[K(e),(0,m.isNumber)(t)?K(t):t].filter(m.isSomething).join(" - ")}function K(e){var t=new Date(e);return(0,m.getDateMonth)(t).substring(0,3)+" "+t.getFullYear()}var $=a(7294);function ee(e){var t=e.mainClassName,a=W().body;return $.createElement("main",{className:l()("main-module--main--3IVJs",t)},a.map((function(e,t){return $.createElement(J,{key:t,content:e})})))}var te=a(7294);function ae(){return te.createElement("div",{className:"cv-module--wrapper--yA9A8"},te.createElement("article",{className:"cv-module--content--ZW3Z+"},te.createElement(D,{asideClassName:"cv-module--aside--HJwI+"}),te.createElement(ee,{mainClassName:"cv-module--main--4HNpd"})))}var ne=a(7294);function re(e){var t=e.pageContext;return ne.createElement(n.T,{title:t.profile.name+" CV"},ne.createElement(P,{cv:t},ne.createElement(ae,null)))}},9387:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("rect",{width:"100%",height:"100%",fill:"#22438B",key:0}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z",fill:"white",key:1}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.444553 -0.0666656L-0.444336 0.866668L15.5557 12.0667L16.4446 11.1333L0.444553 -0.0666656Z",fill:"#C7152A",key:2}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70293 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z",fill:"white",key:3}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5939 -0.0928001L16.4446 0.866667L0.444553 12.0667L-0.444336 11.1333L15.5939 -0.0928001Z",fill:"#C7152A",key:4}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.77789 -0.0666656H10.2223V3.66667H16.4446V8.33333H10.2223V12.0667H5.77789V8.33333H-0.444336V3.66667H5.77789V-0.0666656Z",fill:"white",key:5}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66678 -0.0666656H9.33344V4.6H16.4446V7.4H9.33344V12.0667H6.66678V7.4H-0.444336V4.6H6.66678V-0.0666656Z",fill:"#C7152A",key:6})])}r.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=r,r.default=r},8401:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,[n.createElement("rect",{width:"100%",height:"100%",fill:"#F8D648",key:0}),n.createElement("rect",{width:"100%",height:"50%",fill:"#225CB5",key:1})])}r.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=r,r.default=r},6234:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M2.26361 4.77813C1.84232 4.77813 1.46252 4.52436 1.30127 4.13516C1.14003 3.74595 1.22909 3.29794 1.52694 3L1.96902 2.55792L2.26361 2.8525L1.82173 3.29438C1.66383 3.45228 1.60216 3.68243 1.65996 3.89813C1.71775 4.11384 1.88623 4.28232 2.10194 4.34011C2.31764 4.39791 2.54779 4.33624 2.70569 4.17834L3.14757 3.73646L3.44215 4.03125L3.00027 4.47313C2.80529 4.66907 2.54004 4.7789 2.26361 4.77813ZM2.4109 3.88375L2.11632 3.58917L3.58944 2.11605L3.88402 2.41063L2.41111 3.88355L2.4109 3.88375ZM4.03152 3.44188L3.73673 3.1473L4.17861 2.70542C4.33866 2.54799 4.40198 2.31681 4.34449 2.09979C4.287 1.88277 4.11753 1.71326 3.90053 1.65572C3.68352 1.59818 3.45233 1.66145 3.29486 1.82146L2.85277 2.26334L2.55819 1.96875L3.00027 1.52667C3.40758 1.12291 4.06464 1.12435 4.47018 1.52989C4.87572 1.93543 4.87716 2.59249 4.4734 2.9998L4.03152 3.44167V3.44188Z"}))}r.defaultProps={viewBox:"0 0 6 6"},e.exports=r,r.default=r},7852:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M3 5.75C2.68423 5.48066 2.39155 5.18538 2.125 4.86725C1.725 4.3895 1.25 3.678 1.25 3C1.24965 2.29188 1.67606 1.65334 2.33027 1.38235C2.98447 1.11135 3.73752 1.26131 4.238 1.76225C4.56712 2.0899 4.75148 2.53559 4.75001 3C4.75001 3.678 4.275 4.3895 3.875 4.86725C3.60845 5.18538 3.31577 5.48066 3 5.75ZM3 2.25C2.73205 2.25 2.48446 2.39295 2.35048 2.625C2.21651 2.85705 2.21651 3.14295 2.35048 3.375C2.48446 3.60705 2.73205 3.75 3 3.75C3.41421 3.75 3.75 3.41421 3.75 3C3.75 2.58578 3.41421 2.25 3 2.25Z"}))}r.defaultProps={viewBox:"0 0 6 7"},e.exports=r,r.default=r},6723:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M8.3335 8.33334H1.66683C1.20659 8.33334 0.833496 7.96024 0.833496 7.5V2.46376C0.852916 2.01773 1.22038 1.66625 1.66683 1.66667H8.3335C8.79373 1.66667 9.16683 2.03977 9.16683 2.50001V7.5C9.16683 7.96024 8.79373 8.33334 8.3335 8.33334ZM1.66683 3.27834V7.50001H8.3335V3.27834L5.00016 5.50001L1.66683 3.27834ZM2.00016 2.50001L5.00016 4.50001L8.00016 2.50001H2.00016Z"}))}r.defaultProps={viewBox:"0 0 10 10"},e.exports=r,r.default=r},4038:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M7.91546 8.33333C4.36062 8.33837 1.6627 5.60813 1.66651 2.08438C1.66651 1.85427 1.85306 1.66667 2.08317 1.66667H3.18291C3.3894 1.66667 3.56481 1.81839 3.59513 2.02264C3.6678 2.51217 3.81033 2.98874 4.01837 3.4378L4.06119 3.53022C4.12072 3.65872 4.08037 3.8114 3.96512 3.8937C3.62455 4.13692 3.49439 4.62649 3.75971 5.00849C4.09266 5.48785 4.51236 5.90746 4.99162 6.24026C5.3736 6.50551 5.86309 6.37537 6.1063 6.03486C6.18866 5.91955 6.34142 5.87917 6.47 5.93873L6.562 5.98135C7.01108 6.18938 7.48769 6.33191 7.97727 6.40457C8.18152 6.43488 8.33317 6.61029 8.33317 6.81678V7.91666C8.33317 8.14678 8.14617 8.33333 7.91605 8.33333L7.91546 8.33333Z"}))}r.defaultProps={viewBox:"0 0 10 10"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-templates-cv-index-tsx-3f1da90dc5f65179b40f.js.map