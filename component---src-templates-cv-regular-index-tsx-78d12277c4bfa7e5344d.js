(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[415],{6162:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var n,i=r(a(1506)),l=r(a(5354)),o=r(a(7316)),c=r(a(7154)),s=r(a(1766)),d=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),v=function(e){var t=f(e),a=p(t);return g[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,C=y&&window.IntersectionObserver,L=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&s.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function Z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(L.has(e.target)){var t=L.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),L.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),L.set(e,t)),function(){a.unobserve(e),L.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+s+l+o+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=s.default.createElement(M,(0,c.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?s.default.createElement("picture",null,n(r),o):o})),M=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,h=(0,o.default)(e,u);return s.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},h,{onLoad:l,onError:d,ref:t,loading:f,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));M.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&v(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&C&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,C=e.itemProp,L=e.loading,S=e.draggable,N=p||g;if(!N)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,c.default)({opacity:k?1:0,transition:x?"opacity "+E+"ms":"none"},o),T="boolean"==typeof v?"lightgray":v,H={transitionDelay:E+"ms"},I=(0,c.default)({opacity:this.state.imgLoaded?0:1},x&&H,o,u),P={title:t,alt:this.state.isVisible?"":a,style:I,className:m,itemProp:C},W=this.state.isHydrated?h(N):N[0];if(p)return s.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},s.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),T&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&H)}),W.base64&&s.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:N,generateSources:w}),W.tracedSVG&&s.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:N,generateSources:Z}),this.state.isVisible&&s.default.createElement("picture",null,b(N),s.default.createElement(M,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C,loading:L,draggable:S})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:a,title:t,loading:L},W,{imageVariants:N}))}}));if(g){var O=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete O.display,s.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&s.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},x&&H)}),W.base64&&s.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:N,generateSources:w}),W.tracedSVG&&s.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:N,generateSources:Z}),this.state.isVisible&&s.default.createElement("picture",null,b(N),s.default.createElement(M,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:C,loading:L,draggable:S})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,c.default)({alt:a,title:t,loading:L},W,{imageVariants:N}))}}))}return null},t}(s.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function H(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}x.propTypes={resolutions:_,sizes:T,fixed:H(d.default.oneOfType([_,d.default.arrayOf(_)])),fluid:H(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var I=x;t.Z=I},757:function(e,t,a){"use strict";var r=a(5318);t.M=void 0;var n=r(a(7154)),i=r(a(7316)),l=r(a(1766)),o=r(a(5697)),c=["children"],s=l.default.forwardRef((function(e,t){var a=e.children,r=(0,i.default)(e,c);return l.default.createElement("a",(0,n.default)({ref:t},r,{onClick:function(e){"function"==typeof r.onClick&&r.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),r.target&&"_self"!==r.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:r.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=r.href)}}):t&&(document.location=r.href),!1}}),a)}));t.M=s,s.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}},6442:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Ce}});var r=a(9625),n=a(1766),i=a(1580),l=a(1766),o=(0,n.createContext)(void 0);function c(e){var t=e.children,a=e.cv;return l.createElement(o.Provider,{value:a},t)}var s,d,u,f,m,p=(0,i.createUseContext)(o);d=s||(s={}),function(e){e.Email="email",e.Phone="phone",e.Location="location",e.Site="site"}(u||(u={})),d.ContactType=u,(u||(u=d.ContactType||(d.ContactType={}))).toLabel=function(e){switch(e){case u.Email:return"Email";case u.Phone:return"Phone";case u.Location:return"Location";case u.Site:return"Website";default:return(0,i.assertNever)(e)}},function(e){e.English="english",e.Ukrainian="ukrainian"}(f||(f={})),d.LanguageType=f,function(e){e.Text="text",e.Experience="experience",e.Education="education"}(m||(m={})),d.ContentType=m;var h=a(9931),g=a.n(h),v=a(2254),E=a(1100),y=a(9424),C=a(3366),L=a(6162),b=a(5653),S=a(9297),Z=a.n(S),w=a(3203),N=a.n(w),k=a(1451),R=a.n(k),V=a(9922),M=a.n(V),x=a(6068),_=a.n(x),T=a(2540),H=a.n(T),I=a(1766);function P(e){var t=e.children,a=e.className,r=e.title;return I.createElement("section",{className:g()("_3890f",a)},(0,i.isSomething)(r)&&I.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.DarkGray,className:"_5e45a"},r),t)}var W=a(1766),O=["as","children","className","icon"];function U(e){var t=e.children;return W.createElement("ul",{className:"a6f5c"},n.Children.map(t,(function(e,t){return W.createElement("li",{key:t,className:"d6af2"},e)})))}(U||(U={})).ItemWithIcon=function(e){var t=e.as,a=void 0===t?"div":t,r=e.children,n=e.className,i=e.icon,l=(0,C.Z)(e,O);return W.createElement(a,Object.assign({className:g()("a4ff7",n)},l),W.createElement("div",{className:"c10ce"},i),W.createElement("div",{className:"_7ac5e"},r))};var z="_568f0",B="bff24",D=a(1766),j=["type"],G=["type"];function q(e){var t=e.asideClassName,a=p(),r=a.profile,n=a.contacts,i=a.socials,l=a.languages;return D.createElement("aside",{className:g()("ad15f",t)},D.createElement("div",{className:"_9716a"},D.createElement(P,null,D.createElement(L.Z,{fluid:r.avatar,alt:r.name,className:"_5e1ec",backgroundColor:!0}),D.createElement(b.Z,{as:"h1",variant:b.Z.Variant.Heading,fontWeight:b.Z.Weight.Medium,fontColor:b.Z.Color.Black},r.name),D.createElement(b.Z,{as:"h2",variant:b.Z.Variant.Title,fontWeight:b.Z.Weight.Medium,className:"_32432"},r.position)),D.createElement(P,{title:"Contacts"},D.createElement(U,null,n.map((function(e){return[e,F(e)]})).map((function(e){var t=e[0],a=e[1];return D.createElement(U.ItemWithIcon,Object.assign({icon:D.createElement("span",{className:"_76c13"},D.createElement(A,{type:t.type,role:"img",className:"_74a8c"})),key:t.type},a,{className:g()(z,a.className)}),D.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.LightGray},s.ContactType.toLabel(t.type)),D.createElement(b.Z,{as:"h5",variant:b.Z.Variant.ParagraphMD,fontWeight:b.Z.Weight.Medium},a.children))})))),D.createElement(P,{title:"Socials"},D.createElement(U,null,i.map((function(e){var t=e.name,a=e.profileURL,r=e.username,n=e.iconURL;return D.createElement(U.ItemWithIcon,{icon:D.createElement("img",{src:n,alt:t,className:"_4945e"}),as:"a",href:a,target:"_blank",rel:"noopener noreferrer",className:g()(g()(z,B)),key:t},D.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.LightGray},t),D.createElement(b.Z,{variant:b.Z.Variant.ParagraphMD,fontWeight:b.Z.Weight.Medium},r))})))),D.createElement(P,{title:"Languages"},D.createElement(U,null,l.map((function(e){var t=e.name,a=e.level,r=e.type;return D.createElement(U.ItemWithIcon,{icon:D.createElement(K,{type:r,className:"_2efc3"}),key:t},D.createElement(b.Z,{as:"h5",variant:b.Z.Variant.ParagraphMD,fontColor:b.Z.Color.DarkGray,fontWeight:b.Z.Weight.Medium},t),D.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.LightGray},a))}))))))}function F(e){var t=e.type,a=e.value;switch(t){case s.ContactType.Email:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+a,className:B,children:a};case s.ContactType.Phone:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:"tel:"+a,className:B,children:a};case s.ContactType.Site:return{as:"a",target:"_blank",rel:"noopener noreferrer",href:a,className:B,children:new URL(a).host};case s.ContactType.Location:return{as:"div",children:a};default:return(0,i.assertNever)(t)}}function A(e){var t=e.type,a=(0,C.Z)(e,j);switch(t){case s.ContactType.Email:return D.createElement(N(),a);case s.ContactType.Phone:return D.createElement(R(),a);case s.ContactType.Location:return D.createElement(Z(),a);case s.ContactType.Site:return D.createElement(M(),a);default:return(0,i.assertNever)(t)}}function K(e){var t=e.type,a=(0,C.Z)(e,G);switch(t){case s.LanguageType.English:return D.createElement(H(),a);case s.LanguageType.Ukrainian:return D.createElement(_(),a);default:return(0,i.assertNever)(t)}}var J=a(1536),Y=a.n(J),Q=a(1766);function X(e){return Q.createElement("defs",null,e.children)}var $=a(1766),ee=["url","title"];function te(e){var t=e.url,a=e.title,r=(0,C.Z)(e,ee);return $.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img"},r),$.createElement("title",null,a),$.createElement(X,{singleton:!0,id:"IconShape"},$.createElement("clipPath",{id:"icon-shape"},$.createElement("path",{fill:"#000",d:"M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"}))),$.createElement("g",{clipPath:"url(#icon-shape)"},$.createElement("rect",{x:"0",y:"0",width:"200",height:"100",fill:"transparent"}),$.createElement("image",{href:t,height:"100%",width:"100%"})))}function ae(e,t){return[re(e),(0,i.isNumber)(t)?re(t):t].filter(i.isSomething).join(" - ")}function re(e){var t=new Date(e);return(0,i.getDateMonth)(t).substring(0,3)+" "+t.getUTCFullYear()}var ne=a(1766);function ie(e){var t=e.companyLogoURL,a=e.companyURL,r=e.courseName,n=e.dateStarted,l=e.dateEnded,o=e.description,c=e.certificateURL;return ne.createElement("div",{className:"b8bf6"},ne.createElement("div",{className:"_9e24e"},ne.createElement(te,{title:r+" logo",className:"b3cd3",url:t}),ne.createElement("div",{className:"_84f46"},ne.createElement(b.Z,Object.assign({as:"h2",variant:b.Z.Variant.ParagraphMD,fontWeight:b.Z.Weight.Medium,fontColor:b.Z.Color.Black,nowrap:!0},function(e){return(0,i.isSomething)(e)?{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"}:{}}(a)),r),(0,i.isSomething)(o)&&ne.createElement(b.Z,{as:"h3",variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.DarkGray,nowrap:!0},o),ne.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.Gray,nowrap:!0},ae(n,l)),(0,i.isSomething)(c)&&ne.createElement(b.Z,{as:"a",href:c,target:"_blank",rel:"noopener noreferrer",variant:b.Z.Variant.CaptionSM,className:"_52e4f",nowrap:!0},ne.createElement("span",{className:"_3e94b"},ne.createElement(Y(),{role:"img",className:"bc329"})),ne.createElement("span",null,"Course certificate")))))}var le="_5718c",oe=a(1766);function ce(e){var t=e.companyName,a=e.companyLogoURL,r=e.companyURL,n=e.position,l=e.description,o=e.dateStarted,c=e.dateEnded,s=e.location;return oe.createElement("div",{className:"_4dcce"},oe.createElement("div",{className:"_42055"},oe.createElement("div",{className:"c53af"},oe.createElement(te,{title:t+" logo",className:"_0a285",url:a}),oe.createElement("div",{className:"_5f318"},oe.createElement("div",null,oe.createElement(b.Z,Object.assign({as:"h2",variant:b.Z.Variant.ParagraphMD,fontWeight:b.Z.Weight.Medium,fontColor:b.Z.Color.Black,className:"a5f68",nowrap:!0},function(e){return(0,i.isSomething)(e)?{as:"a",href:e,target:"_blank",rel:"noopener noreferrer"}:{}}(r)),t),oe.createElement(b.Z,{as:"h3",variant:b.Z.Variant.CaptionMD,fontColor:b.Z.Color.DarkGray,nowrap:!0},n)),oe.createElement("div",{className:"edaca"},oe.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.LightGray,className:g()(le,"f0c41"),nowrap:!0},ae(o,null!=c?c:"Present")," · ",function(e,t){void 0===t&&(t=Date.now());var a=Math.abs(e-t),r=Math.floor(a/1e3/60/60/24/30),n=Math.floor(r/12),l=r%12+1;return[n>0?n+" yr"+(n>1?"s":""):void 0,l+" "+(l>1?"mos":"mon")].filter(i.isSomething).join(" ")}(o,c)),oe.createElement(b.Z,{variant:b.Z.Variant.CaptionSM,fontColor:b.Z.Color.LightGray,className:g()(le,"c1dbe"),nowrap:!0},oe.createElement(Z(),{role:"img",className:"_5366a"}),s)))),oe.createElement("div",null,l.map((function(e,t){var a=e.variant,r=e.color,n=e.weight,i=e.text;return oe.createElement(b.Z,{key:t,variant:null!=a?a:b.Z.Variant.ParagraphSM,fontColor:r,fontWeight:n,className:"a01c1"},i)})))))}var se=a(1766);function de(e){var t=e.content;return se.createElement("section",{className:"_4c7f5"},se.createElement(b.Z,{variant:b.Z.Variant.Title,fontColor:b.Z.Color.Black,fontWeight:b.Z.Weight.Medium,className:"_57017"},t.title),function(){var e=t.type;switch(e){case s.ContentType.Text:return t.data.map((function(e,t){var a=e.variant,r=e.color,n=e.weight,i=e.text;return se.createElement(b.Z,{key:t,variant:null!=a?a:b.Z.Variant.ParagraphMD,fontColor:r,fontWeight:n,className:"c5cac"},i)}));case s.ContentType.Education:return se.createElement("ul",{className:"_2916f"},t.data.map((function(e,t){return se.createElement("li",{key:t,className:"_59fab"},se.createElement(ie,{companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,courseName:e.courseName,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,certificateURL:e.certificateURL}))})));case s.ContentType.Experience:return se.createElement("ul",{className:"aa7cc"},t.data.map((function(e,t){return se.createElement("li",{key:t,className:"_7b961"},se.createElement(ce,{companyName:e.companyName,companyLogoURL:e.companyLogoURL,companyURL:e.companyURL,dateStarted:e.dateStarted,dateEnded:e.dateEnded,description:e.description,location:e.location,position:e.position}))})));default:return(0,i.assertNever)(e)}}())}var ue=a(757),fe=a(5385),me=a.n(fe),pe=a(1766);function he(e){var t=e.url,a=e.className,r=(0,y.RR)();return pe.createElement(ue.M,{href:r+t,target:"_blank",className:g()("c5212",a)},"Download CV",pe.createElement(me(),{className:"c30b7"}))}var ge=a(1766);function ve(){var e=p().body;return ge.createElement(E.W,{className:"b7ebd"},ge.createElement("div",{className:"_5b0ba"},ge.createElement("article",{className:"_8ea66"},ge.createElement(q,{asideClassName:"_465b4"}),ge.createElement("main",{className:"a71a9"},e.map((function(e,t){return ge.createElement(de,{key:t,content:e})})))),ge.createElement(Ee,null)))}function Ee(){var e=p().pdfURL,t=(0,y.C7)();return ge.createElement("div",{className:g()("_75c10",t===y.Ie.Down&&"cdcfd")},ge.createElement(v.LW,{className:"_4a948"}),ge.createElement(he,{url:e}))}var ye=a(1766);function Ce(e){var t=e.pageContext;return ye.createElement(r.T,{title:t.cv.profile.name+" CV"},ye.createElement(c,{cv:t.cv},ye.createElement(ve,null)))}},2540:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("rect",{width:"100%",height:"100%",fill:"#22438B",key:0}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.33336 -0.0666656L-0.467529 -0.042399L-0.444418 1.8L14.6507 12.0928L16.4614 12.0583L16.4276 10.2271L1.33336 -0.0666656Z",fill:"white",key:1}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.444553 -0.0666656L-0.444336 0.866668L15.5557 12.0667L16.4446 11.1333L0.444553 -0.0666656Z",fill:"#C7152A",key:2}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6667 -0.0666656H16.4444V1.8C16.4444 1.8 5.99999 8.70293 1.34932 12.0928C1.29332 12.1339 -0.426675 12.0956 -0.426675 12.0956L-0.564453 10.3213L14.6667 -0.0666656Z",fill:"white",key:3}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5939 -0.0928001L16.4446 0.866667L0.444553 12.0667L-0.444336 11.1333L15.5939 -0.0928001Z",fill:"#C7152A",key:4}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.77789 -0.0666656H10.2223V3.66667H16.4446V8.33333H10.2223V12.0667H5.77789V8.33333H-0.444336V3.66667H5.77789V-0.0666656Z",fill:"white",key:5}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.66678 -0.0666656H9.33344V4.6H16.4446V7.4H9.33344V12.0667H6.66678V7.4H-0.444336V4.6H6.66678V-0.0666656Z",fill:"#C7152A",key:6})])}n.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=n,n.default=n},6068:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0,-1H16V12H0Z",fill:"#F8D648",key:0}),r.createElement("path",{d:"M0,-1H16V6H0Z",fill:"#225CB5",key:1})])}n.defaultProps={viewBox:"0 0 16 12",fill:"none"},e.exports=n,n.default=n},1536:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Attachment icon"),r.createElement("path",{d:"M2.52709 7.55627C1.68452 7.55627 0.924916 7.04872 0.602426 6.27032C0.279935 5.49191 0.458063 4.59588 1.05376 4.00001L1.93793 3.11584L2.52709 3.70501L1.64334 4.58876C1.32753 4.90457 1.2042 5.36487 1.31979 5.79627C1.43538 6.22767 1.77235 6.56463 2.20375 6.68023C2.63515 6.79582 3.09545 6.67248 3.41126 6.35668L4.29501 5.47293L4.88418 6.06251L4.00043 6.94626C3.61046 7.33815 3.07995 7.55779 2.52709 7.55627ZM2.82168 5.76751L2.23251 5.17834L5.17876 2.23209L5.76793 2.82126L2.82209 5.76709L2.82168 5.76751ZM6.06293 4.88376L5.47334 4.29459L6.35709 3.41084C6.6772 3.09598 6.80384 2.63362 6.68886 2.19958C6.57388 1.76555 6.23494 1.42653 5.80093 1.31144C5.36692 1.19636 4.90453 1.32289 4.58959 1.64293L3.70543 2.52668L3.11626 1.93751L4.00043 1.05334C4.81504 0.245828 6.12917 0.248705 6.94024 1.05978C7.75131 1.87085 7.75419 3.18497 6.94668 3.99959L6.06293 4.88334V4.88376Z",key:1})])}n.defaultProps={viewBox:"0 0 8 8"},e.exports=n,n.default=n},9922:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Browse icon"),r.createElement("path",{d:"M0 10.0001C0 4.48012 4.47 0.00012207 10 0.00012207C15.52 0.00012207 20 4.48012 20 10.0001C20 15.5301 15.52 20.0001 10 20.0001C4.47 20.0001 0 15.5301 0 10.0001ZM12.23 11.8301L13.85 6.71012C13.96 6.36012 13.64 6.03012 13.29 6.14012L8.17 7.74012C7.96 7.81012 7.79 7.97012 7.73 8.18012L6.13 13.3101C6.02 13.6501 6.35 13.9801 6.69 13.8701L11.79 12.2701C12 12.2101 12.17 12.0401 12.23 11.8301Z",key:1})])}n.defaultProps={viewBox:"0 0 20 20"},e.exports=n,n.default=n},5385:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Download icon"),r.createElement("path",{opacity:"0.4",d:"M17.554 7.29619C20.005 7.29619 22 9.35598 22 11.8876V16.9199C22 19.4454 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35185 3.991 7.29619 6.438 7.29619H7.378L17.554 7.29619Z",key:1}),r.createElement("path",{d:"M12.5462 16.0374L15.4552 13.0695C15.7552 12.7627 15.7552 12.2691 15.4532 11.9634C15.1512 11.6587 14.6642 11.6597 14.3642 11.9654L12.7712 13.5905L12.7712 3.2821C12.7712 2.85042 12.4262 2.5 12.0002 2.5C11.5752 2.5 11.2312 2.85042 11.2312 3.2821L11.2312 13.5905L9.63718 11.9654C9.33718 11.6597 8.85018 11.6587 8.54818 11.9634C8.39718 12.1168 8.32118 12.3168 8.32118 12.518C8.32118 12.717 8.39718 12.9171 8.54618 13.0695L11.4552 16.0374C11.6002 16.1847 11.7962 16.268 12.0002 16.268C12.2052 16.268 12.4012 16.1847 12.5462 16.0374Z",key:2})])}n.defaultProps={viewBox:"0 0 24 24"},e.exports=n,n.default=n},9297:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Location icon"),r.createElement("path",{d:"M0.5 8.31776C0.5 3.71789 4.34388 0 8.99345 0C13.6561 0 17.5 3.71789 17.5 8.31776C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.72854 19.7524C9.24251 20.0704 8.80387 20.0944 8.27045 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.31776ZM6.19423 8.57675C6.19423 10.1177 7.45166 11.3297 8.99345 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.57675C11.8058 7.0478 10.5362 5.77683 8.99345 5.77683C7.45166 5.77683 6.19423 7.0478 6.19423 8.57675Z",key:1})])}n.defaultProps={viewBox:"0 0 18 20"},e.exports=n,n.default=n},3203:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Mail icon"),r.createElement("path",{d:"M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54Z",key:1})])}n.defaultProps={viewBox:"0 0 20 18"},e.exports=n,n.default=n},1451:function(e,t,a){var r=a(1766);function n(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Phone icon"),r.createElement("path",{d:"M9.53174 10.4724C13.5208 14.4604 14.4258 9.84672 16.9656 12.3848C19.4143 14.8328 20.8216 15.3232 17.7192 18.4247C17.3306 18.737 14.8616 22.4943 6.1846 13.8197C-2.49348 5.144 1.26158 2.67244 1.57397 2.28395C4.68387 -0.826154 5.16586 0.589383 7.61449 3.03733C10.1544 5.5765 5.54266 6.48441 9.53174 10.4724Z",key:1})])}n.defaultProps={viewBox:"0 0 20 20"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-cv-regular-index-tsx-78d12277c4bfa7e5344d.js.map