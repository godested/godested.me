"use strict";(self.webpackChunkgodested_site=self.webpackChunkgodested_site||[]).push([[452],{965:function(e,t,n){n.d(t,{V:function(){return oe}});var i=n(4217),r=n(9931),a=n.n(r),o=n(8837),s=n(6886),c=n(5692),h=n(1721),u=n(4204),d=new(n(8036).v)(u.o),l=d,f=n(6718),v=n(4314);function p(e){return e&&(0,v.m)(e.schedule)}function _(e,t,n){void 0===e&&(e=0),void 0===n&&(n=l);var i=-1;return null!=t&&(p(t)?n=t:i=t),new f.y((function(t){var r,a=(r=e)instanceof Date&&!isNaN(r)?+e-n.now():e;a<0&&(a=0);var o=0;return n.schedule((function(){t.closed||(t.next(o++),0<=i?this.schedule(void 0,i):t.complete())}),a)}))}var w=n(4316),C=n(2949),m=n(9433),b=n(5885);function g(){return void 0===(e=1)&&(e=1/0),(0,m.z)(b.y,e);var e}function M(e){return e[e.length-1]}function x(e){return p(M(e))?e.pop():void 0}var P=n(9142),y=n(1726),D=n(8163);function R(e,t){return void 0===t&&(t=0),(0,D.e)((function(n,i){i.add(e.schedule((function(){return n.subscribe(i)}),t))}))}var T=n(877),Z=n(5255);function A(e,t){if(!e)throw new Error("Iterable cannot be null");return new f.y((function(n){(0,Z.f)(n,t,(function(){var i=e[Symbol.asyncIterator]();(0,Z.f)(n,t,(function(){i.next().then((function(e){e.done?n.complete():n.next(e.value)}))}),0,!0)}))}))}var k=n(6067),I=n(7738),N=n(408),E=n(5522),L=n(3410),q=n(1188),H=n(5484);function W(e,t){if(null!=e){if((0,k.c)(e))return function(e,t){return(0,P.Xf)(e).pipe(R(t),(0,y.Q)(t))}(e,t);if((0,N.z)(e))return function(e,t){return new f.y((function(n){var i=0;return t.schedule((function(){i===e.length?n.complete():(n.next(e[i++]),n.closed||this.schedule())}))}))}(e,t);if((0,I.t)(e))return function(e,t){return(0,P.Xf)(e).pipe(R(t),(0,y.Q)(t))}(e,t);if((0,L.D)(e))return A(e,t);if((0,E.T)(e))return function(e,t){return new f.y((function(n){var i;return(0,Z.f)(n,t,(function(){i=e[T.h](),(0,Z.f)(n,t,(function(){var e,t,r;try{t=(e=i.next()).value,r=e.done}catch(a){return void n.error(a)}r?n.complete():n.next(t)}),0,!0)})),function(){return(0,v.m)(null==i?void 0:i.return)&&i.return()}}))}(e,t);if((0,H.L)(e))return function(e,t){return A((0,H.Q)(e),t)}(e,t)}throw(0,q.z)(e)}function X(e,t){return t?W(e,t):(0,P.Xf)(e)}function z(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return g()(X(e,x(e)))}var B=n(699);function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var S=n(3144),U=.5*(Math.sqrt(3)-1),F=(3-Math.sqrt(3))/6,V=1/6,Y=(Math.sqrt(5)-1)/4,j=(5-Math.sqrt(5))/20,G=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),J=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random;Q(this,e);var n="function"==typeof t?t:$(t);this.p=O(n),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;i<512;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}return(0,S.Z)(e,[{key:"noise2D",value:function(e,t){var n,i,r=this.permMod12,a=this.perm,o=0,s=0,c=0,h=(e+t)*U,u=Math.floor(e+h),d=Math.floor(t+h),l=(u+d)*F,f=e-(u-l),v=t-(d-l);f>v?(n=1,i=0):(n=0,i=1);var p=f-n+F,_=v-i+F,w=f-1+2*F,C=v-1+2*F,m=255&u,b=255&d,g=.5-f*f-v*v;if(g>=0){var M=3*r[m+a[b]];o=(g*=g)*g*(G[M]*f+G[M+1]*v)}var x=.5-p*p-_*_;if(x>=0){var P=3*r[m+n+a[b+i]];s=(x*=x)*x*(G[P]*p+G[P+1]*_)}var y=.5-w*w-C*C;if(y>=0){var D=3*r[m+1+a[b+1]];c=(y*=y)*y*(G[D]*w+G[D+1]*C)}return 70*(o+s+c)}},{key:"noise3D",value:function(e,t,n){var i,r,a,o,s,c,h,u,d,l,f=this.permMod12,v=this.perm,p=.3333333333333333*(e+t+n),_=Math.floor(e+p),w=Math.floor(t+p),C=Math.floor(n+p),m=(_+w+C)*V,b=e-(_-m),g=t-(w-m),M=n-(C-m);b>=g?g>=M?(s=1,c=0,h=0,u=1,d=1,l=0):b>=M?(s=1,c=0,h=0,u=1,d=0,l=1):(s=0,c=0,h=1,u=1,d=0,l=1):g<M?(s=0,c=0,h=1,u=0,d=1,l=1):b<M?(s=0,c=1,h=0,u=0,d=1,l=1):(s=0,c=1,h=0,u=1,d=1,l=0);var x=b-s+V,P=g-c+V,y=M-h+V,D=b-u+2*V,R=g-d+2*V,T=M-l+2*V,Z=b-1+.5,A=g-1+.5,k=M-1+.5,I=255&_,N=255&w,E=255&C,L=.6-b*b-g*g-M*M;if(L<0)i=0;else{var q=3*f[I+v[N+v[E]]];i=(L*=L)*L*(G[q]*b+G[q+1]*g+G[q+2]*M)}var H=.6-x*x-P*P-y*y;if(H<0)r=0;else{var W=3*f[I+s+v[N+c+v[E+h]]];r=(H*=H)*H*(G[W]*x+G[W+1]*P+G[W+2]*y)}var X=.6-D*D-R*R-T*T;if(X<0)a=0;else{var z=3*f[I+u+v[N+d+v[E+l]]];a=(X*=X)*X*(G[z]*D+G[z+1]*R+G[z+2]*T)}var B=.6-Z*Z-A*A-k*k;if(B<0)o=0;else{var Q=3*f[I+1+v[N+1+v[E+1]]];o=(B*=B)*B*(G[Q]*Z+G[Q+1]*A+G[Q+2]*k)}return 32*(i+r+a+o)}},{key:"noise4D",value:function(e,t,n,i){var r,a,o,s,c,h=this.perm,u=(e+t+n+i)*Y,d=Math.floor(e+u),l=Math.floor(t+u),f=Math.floor(n+u),v=Math.floor(i+u),p=(d+l+f+v)*j,_=e-(d-p),w=t-(l-p),C=n-(f-p),m=i-(v-p),b=0,g=0,M=0,x=0;_>w?b++:g++,_>C?b++:M++,_>m?b++:x++,w>C?g++:M++,w>m?g++:x++,C>m?M++:x++;var P=b>=3?1:0,y=g>=3?1:0,D=M>=3?1:0,R=x>=3?1:0,T=b>=2?1:0,Z=g>=2?1:0,A=M>=2?1:0,k=x>=2?1:0,I=b>=1?1:0,N=g>=1?1:0,E=M>=1?1:0,L=x>=1?1:0,q=_-P+j,H=w-y+j,W=C-D+j,X=m-R+j,z=_-T+2*j,B=w-Z+2*j,Q=C-A+2*j,S=m-k+2*j,U=_-I+3*j,F=w-N+3*j,V=C-E+3*j,G=m-L+3*j,K=_-1+4*j,O=w-1+4*j,$=C-1+4*j,ee=m-1+4*j,te=255&d,ne=255&l,ie=255&f,re=255&v,ae=.6-_*_-w*w-C*C-m*m;if(ae<0)r=0;else{var oe=h[te+h[ne+h[ie+h[re]]]]%32*4;r=(ae*=ae)*ae*(J[oe]*_+J[oe+1]*w+J[oe+2]*C+J[oe+3]*m)}var se=.6-q*q-H*H-W*W-X*X;if(se<0)a=0;else{var ce=h[te+P+h[ne+y+h[ie+D+h[re+R]]]]%32*4;a=(se*=se)*se*(J[ce]*q+J[ce+1]*H+J[ce+2]*W+J[ce+3]*X)}var he=.6-z*z-B*B-Q*Q-S*S;if(he<0)o=0;else{var ue=h[te+T+h[ne+Z+h[ie+A+h[re+k]]]]%32*4;o=(he*=he)*he*(J[ue]*z+J[ue+1]*B+J[ue+2]*Q+J[ue+3]*S)}var de=.6-U*U-F*F-V*V-G*G;if(de<0)s=0;else{var le=h[te+I+h[ne+N+h[ie+E+h[re+L]]]]%32*4;s=(de*=de)*de*(J[le]*U+J[le+1]*F+J[le+2]*V+J[le+3]*G)}var fe=.6-K*K-O*O-$*$-ee*ee;if(fe<0)c=0;else{var ve=h[te+1+h[ne+1+h[ie+1+h[re+1]]]]%32*4;c=(fe*=fe)*fe*(J[ve]*K+J[ve+1]*O+J[ve+2]*$+J[ve+3]*ee)}return 27*(r+a+o+s+c)}}]),e}();function O(e){for(var t=new Uint8Array(256),n=0;n<256;n++)t[n]=n;for(var i=0;i<255;i++){var r=i+~~(e()*(256-i)),a=t[i];t[i]=t[r],t[r]=a}return t}function $(e){var t,n=0,i=0,r=0,a=1,o=(t=4022871197,function(e){e=e.toString();for(var n=0;n<e.length;n++){var i=.02519603282416938*(t+=e.charCodeAt(n));i-=t=i>>>0,t=(i*=t)>>>0,t+=4294967296*(i-=t)}return 2.3283064365386963e-10*(t>>>0)});return n=o(" "),i=o(" "),r=o(" "),(n-=o(e))<0&&(n+=1),(i-=o(e))<0&&(i+=1),(r-=o(e))<0&&(r+=1),function(){var e=2091639*n+2.3283064365386963e-10*a;return n=i,i=r,r=e-(a=0|e)}}var ee=new K,te=.1,ne=function(e){function t(t){var n,i,r;(n=e.call(this)||this)._circleCount=Math.round(.01*Math.max(window.innerWidth,window.innerHeight))*devicePixelRatio,n._circlePropsLength=8*n._circleCount,n._circleProps=new Float32Array(n._circlePropsLength),n._baseRadius=Math.round(.08*Math.max(window.innerWidth,window.innerHeight)*devicePixelRatio)*te,n._rangeRadius=Math.round(.1*Math.max(window.innerWidth,window.innerHeight)*devicePixelRatio)*te,n._lifeTime=0,n._visibleCanvas=t,n._visibleContext=(0,c.unwrap)(n._visibleCanvas.getContext("2d"),"Didn't found canvas context"),n._hiddenCanvas=document.createElement("canvas"),n._hiddenCanvas.style.filter="blur(90px)",n._hiddenContext=(0,c.unwrap)(n._hiddenCanvas.getContext("2d"),"Didn't found canvas context"),n.addDisposable((i=0,r=w.Z,void 0===i&&(i=0),void 0===r&&(r=d),i<0&&(i=0),_(i,i,r)).subscribe((function(){return n.draw()}))),n.addDisposable((0,C.R)(window,"resize",{passive:!0}).pipe(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=x(e);return(0,D.e)((function(t,i){(n?z(e,t,n):z(e,t)).subscribe(i)}))}(void 0),(0,y.Q)(w.Z),(0,B.U)((function(){return{width:window.innerWidth*te,height:window.innerHeight*te}}))).subscribe((function(e){var t=e.width,i=e.height;n._hiddenCanvas.width=t,n._hiddenCanvas.height=i,n._visibleCanvas.width=t,n._visibleCanvas.height=i})));for(var a=0;a<n._circlePropsLength;a+=8)n._circleProps.set(n.createCircleProps(),a);return n}(0,h.Z)(t,e);var n=t.prototype;return n.initCircle=function(e){this._circleProps.set(this.createCircleProps(),e)},n.isInBounds=function(e,t,n){return e<-n||e>this._hiddenCanvas.width+n||t<-n||t>this._hiddenCanvas.height+n},n.createCircleProps=function(){var e=re(this._hiddenCanvas.width),t=re(this._hiddenCanvas.height),n=ee.noise3D(.5*e,.5*t,.5*this._lifeTime),i=re(2*Math.PI),r=re(.020000000000000004,.010000000000000002);return[e,t,r*Math.cos(i),r*Math.sin(i),0,re(500,200),re(this._rangeRadius,this._baseRadius),67+57*n*Math.cos(this._lifeTime)]},n.updateCircles=function(){this._lifeTime+=.01;for(var e=0;e<this._circlePropsLength;e+=8){var t=1+e,n=2+e,i=3+e,r=4+e,a=5+e,o=6+e,s=7+e,c=this._circleProps[e],h=this._circleProps[t],u=this._circleProps[n],d=this._circleProps[i],l=this._circleProps[a],f=this._circleProps[o],v=this._circleProps[s],p=this._circleProps[r],_=10+v%52;this._hiddenContext.save(),this._hiddenContext.beginPath(),this._hiddenContext.arc(c,h,f,0,2*Math.PI),this._hiddenContext.fillStyle="hsla("+_+",85%,60%,"+ie(p,l)+")",this._hiddenContext.fill(),this._hiddenContext.closePath(),this._hiddenContext.restore(),p+=1,this._circleProps[e]=c+u,this._circleProps[t]=h+d,this._circleProps[r]=p,(this.isInBounds(c,h,f)||p>l)&&this.initCircle(e)}},n.draw=function(){this._visibleContext.clearRect(0,0,this._visibleCanvas.width,this._visibleCanvas.height),this.updateCircles(),this._visibleContext.filter="blur(9px)",this._visibleContext.drawImage(this._hiddenCanvas,0,0)},t}(c.Disposable),ie=function(e,t){var n=.5*t;return Math.abs((e+n)%t-n)/n};function re(e,t){return void 0===t&&(t=0),Math.random()*(e-t)+t}var ae=n(6325);function oe(e){var t=e.children,n=e.className,r=(0,s.A4)((function(){return new c.ExpectedRef("hero-canvas")}));return(0,s.Mt)({onEffect:function(e){(0,e.addDisposable)(new ne(r.node))}}),(0,i.useEffect)((function(){(0,c.isSafari)()&&r.node.classList.add("_99933")}),[]),(0,ae.BX)("div",{className:a()("f818b",n),children:[(0,ae.tZ)(o.W,{className:"_4c618"}),(0,ae.tZ)("canvas",{ref:r.update,className:"_51414"}),(0,ae.tZ)("div",{className:"badec",children:t})]})}},2583:function(e,t,n){n.d(t,{T:function(){return a}});var i=n(5186),r=n(6325);function a(e){var t=e.title,n=e.children;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.q,{title:t,defaultTitle:"@godested",titleTemplate:"%s · @godested",children:(0,r.tZ)("html",{lang:"en"})}),n]})}}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-42fbf31be63f1d085d47.js.map