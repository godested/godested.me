(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[779],{6162:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var n,i=r(a(1506)),l=r(a(5354)),o=r(a(7316)),s=r(a(7154)),c=r(a(1766)),d=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=Z([].concat(t.fluid))),t.fixed&&(t.fixed=Z([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),v=function(e){var t=f(e),a=p(t);return g[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,C=y&&window.IntersectionObserver,L=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function Z(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var V=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(L.has(e.target)){var t=L.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),L.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),L.set(e,t)),function(){a.unobserve(e),L.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+l+o+a+r+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=c.default.createElement(x,(0,s.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,n(r),o):o})),x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,h=(0,o.default)(e,u);return c.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},h,{onLoad:l,onError:d,ref:t,loading:f,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var M=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&v(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&C&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,C=e.itemProp,L=e.loading,Z=e.draggable,N=p||g;if(!N)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,s.default)({opacity:V?1:0,transition:M?"opacity "+E+"ms":"none"},o),H="boolean"==typeof v?"lightgray":v,I={transitionDelay:E+"ms"},T=(0,s.default)({opacity:this.state.imgLoaded?0:1},M&&I,o,u),W={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:C},P=this.state.isHydrated?h(N):N[0];if(p)return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),H&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&I)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:N,generateSources:S}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:N,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,b(N),c.default.createElement(x,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C,loading:L,draggable:Z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:L},P,{imageVariants:N}))}}));if(g){var O=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete O.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},H&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},M&&I)}),P.base64&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:N,generateSources:S}),P.tracedSVG&&c.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:N,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,b(N),c.default.createElement(x,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C,loading:L,draggable:Z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:L},P,{imageVariants:N}))}}))}return null},t}(c.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),H=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function I(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}M.propTypes={resolutions:_,sizes:H,fixed:I(d.default.oneOfType([_,d.default.arrayOf(_)])),fluid:I(d.default.oneOfType([H,d.default.arrayOf(H)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=M;t.Z=T},6099:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return le}});var r=a(9625),n=a(5245),i=a(1597),l=a(6162),o=a(9931),s=a.n(o),c=a(1339),d=a(1188),u=a(2001),f=a(9297),m=a.n(f),p=a(3203),h=a.n(p),g=a(1451),v=a.n(g),E=a(6068),y=a.n(E),C=a(2540),L=a.n(C),b=a(1766);function Z(e){var t=e.children,a=e.className,r=e.title;return b.createElement("section",{className:s()("_0e49f",a)},(0,u.isSomething)(r)&&b.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.DarkGray,className:"_77441"},r),t)}var w,S,N,V,R,k=a(1766),x=a(1766);function M(e){var t=e.children;return x.createElement("ul",{className:"_2f160"},k.Children.map(t,(function(e,t){return x.createElement("li",{key:t,className:"_6b5b8"},e)})))}(M||(M={})).ItemWithIcon=function(e){var t=e.children,a=e.icon;return x.createElement("div",{className:"_4dee9"},x.createElement("div",{className:"b9cfb"},a),x.createElement("div",{className:"_0b426"},t))},S=w||(w={}),function(e){e.Email="email",e.Phone="phone",e.Location="location"}(N||(N={})),S.ContactType=N,(N||(N=S.ContactType||(S.ContactType={}))).toLabel=function(e){switch(e){case N.Email:return"Email";case N.Phone:return"Phone";case N.Location:return"Location";default:return(0,u.assertNever)(e)}},function(e){e.English="english",e.Ukrainian="ukrainian"}(V||(V={})),S.LanguageType=V,function(e){e.Text="text",e.Experience="experience",e.Education="education"}(R||(R={})),S.ContentType=R;var _=a(1766),H=(0,k.createContext)(void 0);function I(e){var t=e.children,a=e.cv;return _.createElement(H.Provider,{value:a},t)}var T=(0,u.createUseContext)(H),W=a(1766),P=["type"],O=["type"];function U(e){var t=e.asideClassName,a=T(),r=a.profile,n=a.contacts,o=a.socials,f=a.languages,m=(0,i.K2)("1183231854");return W.createElement("aside",{className:s()("_8724b",t)},W.createElement(c.LW,{className:"_0099c"}),W.createElement(Z,null,W.createElement(l.Z,{fluid:m.image.fluid,alt:r.name,className:"b6fde",backgroundColor:!0}),W.createElement(d.Z,{as:"h1",variant:d.Z.Variant.Heading,fontWeight:d.Z.Weight.Medium,fontColor:d.Z.Color.Black},r.name),W.createElement(d.Z,{as:"h2",variant:d.Z.Variant.Title,fontWeight:d.Z.Weight.Medium,className:"_478da"},r.position)),W.createElement(Z,{title:"Contacts"},W.createElement(M,null,n.map((function(e){return W.createElement(M.ItemWithIcon,{icon:W.createElement("span",{className:"_19d6e"},W.createElement(z,{type:e.type,className:"b7518"})),key:e.type},W.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.LightGray},w.ContactType.toLabel(e.type)),W.createElement(d.Z,Object.assign({as:"h5",variant:d.Z.Variant.ParagraphMD,fontColor:d.Z.Color.DarkGray,fontWeight:d.Z.Weight.Medium},function(e){var t=e.type,a=e.value;switch(t){case w.ContactType.Email:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+a};case w.ContactType.Phone:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"tel:"+a};case w.ContactType.Location:return{};default:return(0,u.assertNever)(t)}}(e)),e.value))})))),W.createElement(Z,{title:"Socials"},W.createElement(M,null,o.map((function(e){var t=e.name,a=e.profileURL,r=e.username,n=e.iconURL;return W.createElement(M.ItemWithIcon,{icon:W.createElement("img",{src:n,alt:t,className:"_472a4"}),key:t},W.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.LightGray},t),W.createElement(d.Z,{as:"a",href:a,variant:d.Z.Variant.ParagraphMD,fontColor:d.Z.Color.DarkGray,fontWeight:d.Z.Weight.Medium},r))})))),W.createElement(Z,{title:"Languages"},W.createElement(M,null,f.map((function(e){var t=e.name,a=e.level,r=e.type;return W.createElement(M.ItemWithIcon,{icon:W.createElement(G,{type:r,className:"_9b3ac"}),key:t},W.createElement(d.Z,{as:"h5",variant:d.Z.Variant.ParagraphMD,fontColor:d.Z.Color.DarkGray,fontWeight:d.Z.Weight.Medium},t),W.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.LightGray},a))})))))}function z(e){var t=e.type,a=(0,n.Z)(e,P);switch(t){case w.ContactType.Email:return W.createElement(h(),a);case w.ContactType.Phone:return W.createElement(v(),a);case w.ContactType.Location:return W.createElement(m(),a);default:return(0,u.assertNever)(t)}}function G(e){var t=e.type,a=(0,n.Z)(e,O);switch(t){case w.LanguageType.English:return W.createElement(L(),a);case w.LanguageType.Ukrainian:return W.createElement(y(),a);default:return(0,u.assertNever)(t)}}var D=a(1766);function j(e){return D.createElement("defs",null,e.children)}var B=a(4234),q=a.n(B),F=a(1766),A=["url"];function J(e){var t=e.className,a=e.content;return F.createElement("section",{className:s()("a1894",t)},F.createElement(d.Z,{variant:d.Z.Variant.Title,fontColor:d.Z.Color.Black,fontWeight:d.Z.Weight.Medium,className:"e0c78"},a.title),function(){var e=a.type;switch(e){case w.ContentType.Text:return a.data.map((function(e,t){var a=e.variant,r=e.color,n=e.weight,i=e.text;return F.createElement(d.Z,{key:t,variant:null!=a?a:d.Z.Variant.ParagraphMD,fontColor:r,fontWeight:n,className:"_06fb4"},i)}));case w.ContentType.Education:return F.createElement("ul",{className:"b47b0"},a.data.map((function(e,t){return F.createElement("li",{key:t,className:"_770d6"},F.createElement(Y,{companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,courseName:e.courseName,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,certificateURL:e.certificateURL}))})));case w.ContentType.Experience:return F.createElement("ul",{className:"_21fb8"},a.data.map((function(e,t){return F.createElement("li",{key:t,className:"_35c18"},F.createElement(K,{companyName:e.companyName,companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,location:e.location,position:e.position}))})));default:return(0,u.assertNever)(e)}}())}function K(e){var t=e.companyName,a=e.companyLogoURL,r=e.companyURL,n=e.position,i=e.description,l=e.dateStarted,o=e.dateEnded,s=e.location;return F.createElement("div",{className:"_885cf"},F.createElement("div",{className:"_62cbf"},F.createElement("div",{className:"f9dc0"},F.createElement(X,{className:"_77992",url:a}),F.createElement("div",{className:"_8c162"},F.createElement(d.Z,Object.assign({as:"h2",variant:d.Z.Variant.ParagraphMD,fontWeight:d.Z.Weight.Medium,fontColor:d.Z.Color.Black,className:"_54092",nowrap:!0},Q(r)),t),F.createElement(d.Z,{as:"h3",variant:d.Z.Variant.Caption,fontColor:d.Z.Color.LightGray,nowrap:!0},n))),F.createElement("div",{className:"_85290"},F.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.DarkGray,className:"af72f",nowrap:!0},$(l,null!=o?o:"Present")," · ",function(e,t){void 0===t&&(t=Date.now());var a=Math.abs(e-t),r=Math.floor(a/1e3/60/60/24/30),n=Math.floor(r/12),i=r%12+1;return[n>0?n+" yr"+(n>1?"s":""):void 0,i+" "+(i>1?"mos":"mon")].filter(u.isSomething).join(" ")}(l,o)),F.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.LightGray,className:"_3da7f",nowrap:!0},F.createElement(m(),{className:"_5fe3a"}),F.createElement("span",null,s)))),F.createElement("div",null,i.map((function(e,t){var a=e.variant,r=e.color,n=e.weight,i=e.text;return F.createElement(d.Z,{key:t,variant:null!=a?a:d.Z.Variant.ParagraphSM,fontColor:r,fontWeight:n,className:"f98a0"},i)}))))}function Y(e){var t=e.companyLogoURL,a=e.companyURL,r=e.courseName,n=e.dateStarted,i=e.dateEnded,l=e.description,o=e.certificateURL;return F.createElement("div",{className:"fc00d"},F.createElement(X,{className:"ac1ba",url:t}),F.createElement("div",{className:"a6c86"},F.createElement(d.Z,Object.assign({as:"h2",variant:d.Z.Variant.ParagraphMD,fontWeight:d.Z.Weight.Medium,fontColor:d.Z.Color.Black,nowrap:!0},Q(a)),r),F.createElement(d.Z,{variant:d.Z.Variant.Caption,fontColor:d.Z.Color.Gray,nowrap:!0},$(n,i)),(0,u.isSomething)(l)&&F.createElement(d.Z,{as:"h3",variant:d.Z.Variant.Caption,fontColor:d.Z.Color.DarkGray,nowrap:!0},l),(0,u.isSomething)(o)&&F.createElement(d.Z,{as:"a",href:o,target:"_blank",rel:"noopener noreferrer",variant:d.Z.Variant.Caption,className:"_87f3c",nowrap:!0},F.createElement("span",{className:"_754b5"},F.createElement(q(),{className:"_71750"})),F.createElement("span",null,"Course certificate"))))}function Q(e){return(0,u.isSomething)(e)?{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"}:{}}function X(e){var t=e.url,a=(0,n.Z)(e,A);return F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a),F.createElement(j,{singleton:!0,id:"IconShape"},F.createElement("clipPath",{id:"icon-shape"},F.createElement("path",{fill:"#000",d:"M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"}))),F.createElement("g",{clipPath:"url(#icon-shape)"},F.createElement("rect",{x:"0",y:"0",width:"200",height:"100",fill:"transparent"}),F.createElement("image",{href:t,height:"100%",width:"100%"})))}function $(e,t){return[ee(e),(0,u.isNumber)(t)?ee(t):t].filter(u.isSomething).join(" - ")}function ee(e){var t=new Date(e);return(0,u.getDateMonth)(t).substring(0,3)+" "+t.getFullYear()}var te=a(1766);function ae(e){var t=e.mainClassName,a=T().body;return te.createElement("main",{className:s()("_1b25f",t)},a.map((function(e,t){return te.createElement(J,{key:t,content:e})})))}var re=a(1766);function ne(){return re.createElement("div",{className:"_85765"},re.createElement("article",{className:"_549f4"},re.createElement(U,{asideClassName:"_1316c"}),re.createElement(ae,{mainClassName:"_6d953"})))}var ie=a(1766);function le(e){var t=e.pageContext;return ie.createElement(r.T,{title:t.cv.profile.name+" CV"},ie.createElement(I,{cv:t.cv},ie.createElement(ne,null)))}},2540:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("rect",{width:"100%",height:"100%",fill:"#22438B",key:0}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z",fill:"white",key:1}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.444553 -0.0666656L-0.444336 0.866668L15.5557 12.0667L16.4446 11.1333L0.444553 -0.0666656Z",fill:"#C7152A",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70293 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z",fill:"white",key:3}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5939 -0.0928001L16.4446 0.866667L0.444553 12.0667L-0.444336 11.1333L15.5939 -0.0928001Z",fill:"#C7152A",key:4}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.77789 -0.0666656H10.2223V3.66667H16.4446V8.33333H10.2223V12.0667H5.77789V8.33333H-0.444336V3.66667H5.77789V-0.0666656Z",fill:"white",key:5}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66678 -0.0666656H9.33344V4.6H16.4446V7.4H9.33344V12.0667H6.66678V7.4H-0.444336V4.6H6.66678V-0.0666656Z",fill:"#C7152A",key:6})])}n.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=n,n.default=n},6068:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("rect",{width:"100%",height:"100%",fill:"#F8D648",key:0}),r.createElement("rect",{width:"100%",height:"50%",fill:"#225CB5",key:1})])}n.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=n,n.default=n},4234:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M2.26361 4.77813C1.84232 4.77813 1.46252 4.52436 1.30127 4.13516C1.14003 3.74595 1.22909 3.29794 1.52694 3L1.96902 2.55792L2.26361 2.8525L1.82173 3.29438C1.66383 3.45228 1.60216 3.68243 1.65996 3.89813C1.71775 4.11384 1.88623 4.28232 2.10194 4.34011C2.31764 4.39791 2.54779 4.33624 2.70569 4.17834L3.14757 3.73646L3.44215 4.03125L3.00027 4.47313C2.80529 4.66907 2.54004 4.7789 2.26361 4.77813ZM2.4109 3.88375L2.11632 3.58917L3.58944 2.11605L3.88402 2.41063L2.41111 3.88355L2.4109 3.88375ZM4.03152 3.44188L3.73673 3.1473L4.17861 2.70542C4.33866 2.54799 4.40198 2.31681 4.34449 2.09979C4.287 1.88277 4.11753 1.71326 3.90053 1.65572C3.68352 1.59818 3.45233 1.66145 3.29486 1.82146L2.85277 2.26334L2.55819 1.96875L3.00027 1.52667C3.40758 1.12291 4.06464 1.12435 4.47018 1.52989C4.87572 1.93543 4.87716 2.59249 4.4734 2.9998L4.03152 3.44167V3.44188Z"}))}n.defaultProps={viewBox:"0 0 6 6"},e.exports=n,n.default=n},9297:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M3 5.75C2.68423 5.48066 2.39155 5.18538 2.125 4.86725C1.725 4.3895 1.25 3.678 1.25 3C1.24965 2.29188 1.67606 1.65334 2.33027 1.38235C2.98447 1.11135 3.73752 1.26131 4.238 1.76225C4.56712 2.0899 4.75148 2.53559 4.75001 3C4.75001 3.678 4.275 4.3895 3.875 4.86725C3.60845 5.18538 3.31577 5.48066 3 5.75ZM3 2.25C2.73205 2.25 2.48446 2.39295 2.35048 2.625C2.21651 2.85705 2.21651 3.14295 2.35048 3.375C2.48446 3.60705 2.73205 3.75 3 3.75C3.41421 3.75 3.75 3.41421 3.75 3C3.75 2.58578 3.41421 2.25 3 2.25Z"}))}n.defaultProps={viewBox:"0 0 6 7"},e.exports=n,n.default=n},3203:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M8.3335 8.33334H1.66683C1.20659 8.33334 0.833496 7.96024 0.833496 7.5V2.46376C0.852916 2.01773 1.22038 1.66625 1.66683 1.66667H8.3335C8.79373 1.66667 9.16683 2.03977 9.16683 2.50001V7.5C9.16683 7.96024 8.79373 8.33334 8.3335 8.33334ZM1.66683 3.27834V7.50001H8.3335V3.27834L5.00016 5.50001L1.66683 3.27834ZM2.00016 2.50001L5.00016 4.50001L8.00016 2.50001H2.00016Z"}))}n.defaultProps={viewBox:"0 0 10 10"},e.exports=n,n.default=n},1451:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M7.91546 8.33333C4.36062 8.33837 1.6627 5.60813 1.66651 2.08438C1.66651 1.85427 1.85306 1.66667 2.08317 1.66667H3.18291C3.3894 1.66667 3.56481 1.81839 3.59513 2.02264C3.6678 2.51217 3.81033 2.98874 4.01837 3.4378L4.06119 3.53022C4.12072 3.65872 4.08037 3.8114 3.96512 3.8937C3.62455 4.13692 3.49439 4.62649 3.75971 5.00849C4.09266 5.48785 4.51236 5.90746 4.99162 6.24026C5.3736 6.50551 5.86309 6.37537 6.1063 6.03486C6.18866 5.91955 6.34142 5.87917 6.47 5.93873L6.562 5.98135C7.01108 6.18938 7.48769 6.33191 7.97727 6.40457C8.18152 6.43488 8.33317 6.61029 8.33317 6.81678V7.91666C8.33317 8.14678 8.14617 8.33333 7.91605 8.33333L7.91546 8.33333Z"}))}n.defaultProps={viewBox:"0 0 10 10"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-cv-index-tsx-dfe72311c067cb9af8bf.js.map