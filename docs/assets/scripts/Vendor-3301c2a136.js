!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,r){function s(e,t){return(void 0===e?"undefined":n(e))===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(){var e=t.body;return e||((e=a(C?"svg":"body")).fake=!0),e}function c(e,n,r,s){var i,c,l,u,f="modernizr",d=a("div"),p=o();if(parseInt(r,10))for(;r--;)(l=a("div")).id=s?s[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),c=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!c}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var i=e.console;null!==s?r&&(s=s.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function f(t,n){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(l(t[s]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+l(t[s])+":"+n+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,n,o){function c(){u&&(delete x.style,delete x.modElem)}if(o=!s(o,"undefined")&&o,!s(n,"undefined")){var l=f(e,n);if(!s(l,"undefined"))return l}for(var u,p,m,h,g,v=["modernizr","tspan","samp"];!x.style&&v.length;)u=!0,x.modElem=a(v.shift()),x.style=x.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=x.style[h],i(h,"-")&&(h=d(h)),x.style[h]!==r){if(o||s(n,"undefined"))return c(),"pfx"!=t||h;try{x.style[h]=n}catch(e){}if(x.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],s(r,"function")?m(r,n||t):r);return!1}function g(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(a+" ")+a).split(" ");return s(t,"string")||s(t,"undefined")?p(o,t,r,i):(o=(e+" "+T.join(a+" ")+a).split(" "),h(o,t,n))}function v(e,t,n){return g(e,r,r,t,n)}var A=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},z=function(){};z.prototype=y,z=new z;var b=[],w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S=y._config.usePrefixes?"Moz O ms Webkit".split(" "):[];y._cssomPrefixes=S;var E={elem:a("modernizr")};z._q.push(function(){delete E.elem});var x={style:E.elem.style};z._q.unshift(function(){delete x.style});var T=y._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];y._domPrefixes=T,y.testAllProps=g,y.testAllProps=v,z.addTest("flexbox",v("flexBasis","1px",!0)),z.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,i,a;for(var o in A)if(A.hasOwnProperty(o)){if(e=[],(t=A[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(a=e[i].split(".")).length?z[a[0]]=r:(!z[a[0]]||z[a[0]]instanceof Boolean||(z[a[0]]=new Boolean(z[a[0]])),z[a[0]][a[1]]=r),b.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=w.className,n=z._config.classPrefix||"";if(C&&(t=t.baseVal),z._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}z._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}(b),delete y.addTest,delete y.addAsyncTest;for(var M=0;M<z._q.length;M++)z._q[M]();e.Modernizr=z}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){$=!1,U=s.devicePixelRatio,D={},I={},z.DPR=U||1,O.width=Math.max(s.innerWidth||0,T.clientWidth),O.height=Math.max(s.innerHeight||0,T.clientHeight),O.vw=O.width/100,O.vh=O.height/100,y=[O.height,O.width,U].join("-"),O.em=z.getEmValue(),O.rem=O.em}function l(e,t,n,r){var s,i,a;return"saveData"===L.algorithm?e>2.7?a=n+1:(i=(t-n)*(s=Math.pow(e-.6,1.5)),r&&(i+=.1*s),a=e+i):a=n>1?Math.sqrt(e*t):e,a>n}function u(e){var t,n=z.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=z.setRes(n),z.applySetCandidate(t,e))),e[z.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=(n=e[z.ns].sets)&&n[n.length-1]),(r=p(t,n))&&(t=z.makeUrl(t),e[z.ns].curSrc=t,e[z.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function p(e,t){var n,r,s;if(e&&t)for(s=z.parseSet(t),e=z.makeUrl(e),n=0;n<s.length;n++)if(e===z.makeUrl(s[n].url)){r=s[n];break}return r}function m(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[z.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,l,u,f,p=!1,m={};for(a=0;a<i.length;a++)c=(o=i[a])[o.length-1],l=o.substring(0,o.length-1),u=parseInt(l,10),f=parseFloat(l),V.test(l)&&"w"===c?((e||n)&&(p=!0),0===u?p=!0:e=u):J.test(l)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):V.test(l)&&"h"===c?((r||n)&&(p=!0),0===u?p=!0:r=u):p=!0;p||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var s,i,a,c,l,u=e.length,f=0,d=[];;){if(n(q),f>=u)return d;s=n(Q),i=[],","===s.slice(-1)?(s=s.replace(G,""),r()):function(){for(n(j),a="",c="in descriptor";;){if(l=e.charAt(f),"in descriptor"===c)if(o(l))a&&(i.push(a),a="",c="after descriptor");else{if(","===l)return f+=1,a&&i.push(a),void r();if("("===l)a+=l,c="in parens";else{if(""===l)return a&&i.push(a),void r();a+=l}}else if("in parens"===c)if(")"===l)a+=l,c="in descriptor";else{if(""===l)return i.push(a),void r();a+=l}else if("after descriptor"===c)if(o(l));else{if(""===l)return void r();c="in descriptor",f-=1}f+=1}}()}}function g(e){var t,n,r,s,i,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,l=0,u=!1;;){if(""===(r=e.charAt(l)))return t(),n(),a;if(u){if("*"===r&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(o(r)){if(e.charAt(l-1)&&o(e.charAt(l-1))||!s){l+=1;continue}if(0===c){t(),l+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),l+=1;continue}if("/"===r&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}s+=r,l+=1}}}(e)).length,t=0;t<r;t++)if(s=n[t],i=s[s.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||!!l.test(e)||"0"===e||"-0"===e||"+0"===e}(i)){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),z.matchesMedia(s))return a}return"100vw"}i.createElement("picture");var v,A,y,z={},b=!1,w=function(){},C=i.createElement("img"),S=C.getAttribute,E=C.setAttribute,x=C.removeAttribute,T=i.documentElement,M={},L={algorithm:""},P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,N="currentSrc",_=/\s+\+?\d+(e\d+)?w/,B=/(\([^)]+\))?\s*(.+)/,k=s.picturefillCFG,W="font-size:100%!important;",$=!0,D={},I={},U=s.devicePixelRatio,O={px:1,in:96},F=i.createElement("a"),H=!1,j=/^[ \t\n\r\u000c]+/,q=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in D))if(D[t]=!1,r&&(s=t.match(e)))D[t]=s[1]*O[s[2]];else try{D[t]=new Function("e",n(t))(O)}catch(e){}return D[t]}}(),Y=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(b){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||z.qsa(s.context||i,s.reevaluate||s.reselect?z.sel:z.selShort),r=t.length){for(z.setupRun(s),H=!0,n=0;n<r;n++)z.fillImg(t[n],s);z.teardownRun(s)}}};s.console&&console.warn,N in C||(N="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in C,z.supSizes="sizes"in C,z.supPicture=!!s.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&function(e){C.srcset="data:,a",e.src="data:,a",z.supSrcset=C.complete===e.complete,z.supPicture=z.supSrcset&&z.supPicture}(i.createElement("img")),z.supSrcset&&!z.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(z.supSizes=!0),A=z.supSrcset&&!z.supSizes,b=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():b=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=L,z.DPR=U||1,z.u=O,z.types=M,z.setSize=w,z.makeUrl=X(function(e){return F.href=e,F.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||Z(e)},z.calcLength=function(e){var t=Z(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||M[e]},z.parseSize=X(function(e){var t=(e||"").match(B);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!v&&(e=i.body)){var t=i.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=W,e.style.cssText=W,e.appendChild(t),v=t.offsetWidth,e.removeChild(t),v=parseFloat(v,10),T.style.cssText=n,e.style.cssText=r}return v||16},z.calcListLength=function(e){if(!(e in I)||L.uT){var t=z.calcLength(g(e));I[e]=t||O.width}return I[e]},z.setRes=function(e){var t;if(e)for(var n=0,r=(t=z.parseSet(e)).length;n<r;n++)Y(t[n],e.sizes);return t},z.setRes.res=Y,z.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,u,p,m=t[z.ns],h=z.DPR;if(o=m.curSrc||t[N],(c=m.curCan||d(t,o,e[0].set))&&c.set===e[0].set&&((p=R&&!t.complete&&c.res-.1>h)||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(f),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=h){a=e[s=r-1]&&(p||o!==z.makeUrl(n.url))&&l(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(u=z.makeUrl(a.url),m.curSrc=u,m.curCan=a,u!==o&&z.setSrc(t,a),z.setSize(t))}},z.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},z.getSet=function(e){var t,n,r,s=!1,i=e[z.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&z.matchesMedia(n.media)&&(r=z.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},z.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[z.ns];(void 0===c.src||n.src)&&(c.src=S.call(e,"src"),c.src?E.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!z.supSrcset||e.srcset)&&(r=S.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:S.call(e,"sizes")},c.sets.push(s),(i=(A||c.src)&&_.test(c.srcset||""))||!c.src||p(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!z.supSrcset||i&&!z.supSizes),a&&z.supSrcset&&!c.supported&&(r?(E.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==z.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},z.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),n=e[z.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:u(e))},z.setupRun=function(){H&&!$&&U===s.devicePixelRatio||c()},z.supPicture?(ee=w,z.fillImg=w):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(z.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=T.clientHeight;K(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(function(){$=Math.max(s.innerWidth||0,T.clientWidth)!==O.width||T.clientHeight!==a,a=T.clientHeight,$&&z.fillImgs()},99)),K(i,"readystatechange",n)}(),z.picturefill=ee,z.fillImgs=ee,z.teardownRun=w,ee._=z,s.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(L[t]=e[0],H&&z.fillImgs({reselect:!0}))}};for(;k&&k.length;)s.picturefillCFG.push(k.shift());s.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),z.supPicture||(M["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){M[e]=!1,ee()},n.onload=function(){M[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=n(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,s=e.Date,i=e.HTMLPictureElement,a=e.addEventListener,o=e.setTimeout,c=e.requestAnimationFrame||o,l=e.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,m=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e.getAttribute("class")||"")&&d[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),f.forEach(function(n){e[r](n,t)})},A=function(e,n,r,s,i){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!s,!i,r||{}),e.dispatchEvent(a),a},y=function(t,r){var s;!i&&(s=e.picturefill||n.pf)?s({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},b=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},w=function(){var e,n,r=[],s=function(){var t;for(e=!0,n=!1;r.length;)(t=r.shift())[0].apply(t[1],t[2]);e=!1},i=function(i){e?i.apply(this,arguments):(r.push([i,this,arguments]),n||(n=!0,(t.hidden?o:c)(s)))};return i._lsFlush=s,i}(),C=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w(function(){e.apply(t,n)})}},S=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},a=l?function(){l(i,{timeout:r}),666!==r&&(r=666)}:C(function(){o(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,(i=125-(s.now()-n))<0&&(i=0),e||i<9&&l?a():o(a,i))}},E=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?o(i,99-e):(l||r)(r)};return function(){n=s.now(),t||(t=o(i,99))}},x=function(){var i,c,l,f,d,b,x,M,L,P,R,N,_,B,k,W=/^img$/i,$=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,U=0,O=-1,F=function(e){U--,e&&e.target&&v(e.target,F),(!e||U<0||!e.target)&&(U=0)},H=function(e,n){var s,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,N+=n,P-=n,R+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(s=i.getBoundingClientRect(),a=R>s.left&&P<s.right&&N>s.top-1&&L<s.bottom+1);return a},j=function(){var e,s,a,o,u,f,p,m,h;if((d=n.loadMode)&&U<8&&(e=i.length)){s=0,O++,null==B&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),_=n.expand,B=_*n.expFactor),I<B&&U<1&&O>2&&d>2&&!t.hidden?(I=B,O=0):I=d>1&&O>1&&U<6?_:0;for(;s<e;s++)if(i[s]&&!i[s]._lazyRace)if(D)if((m=i[s].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(x=innerWidth+f*k,M=innerHeight+f,p=-1*f,h=f),a=i[s].getBoundingClientRect(),(N=a.bottom)>=p&&(L=a.top)<=M&&(R=a.right)>=p*k&&(P=a.left)<=x&&(N||R||P||L)&&(l&&U<3&&!m&&(d<3||O<4)||H(i[s],f))){if(Z(i[s]),u=!0,U>9)break}else!u&&l&&!o&&U<4&&O<4&&d>2&&(c[0]||n.preloadAfterLoad)&&(c[0]||!m&&(N||R||P||L||"auto"!=i[s].getAttribute(n.sizesAttr)))&&(o=c[0]||i[s]);else Z(i[s]);o&&!u&&Z(o)}},q=S(j),Q=function(e){h(e.target,n.loadedClass),g(e.target,n.loadingClass),v(e.target,V)},G=C(Q),V=function(e){G({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,r,s=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),s&&e.setAttribute("srcset",s),t&&((r=e.parentNode).insertBefore(e.cloneNode(),e),r.removeChild(e))},X=C(function(e,t,r,s,i){var a,c,l,d,m,z;(m=A(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(r?h(e,n.autosizesClass):e.setAttribute("sizes",s)),c=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),i&&(d=(l=e.parentNode)&&u.test(l.nodeName||"")),z=t.firesLoad||"src"in e&&(c||a||d),m={target:e},z&&(v(e,F,!0),clearTimeout(f),f=o(F,2500),h(e,n.loadingClass),v(e,V,!0)),d&&p.call(l.getElementsByTagName("source"),K),c?e.setAttribute("srcset",c):a&&!d&&($.test(e.nodeName)?J(e,a):e.src=a),(c||d)&&y(e,{src:a})),w(function(){e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),z&&!e.complete||(z?F(m):U--,Q(m))})}),Z=function(e){var t,r=W.test(e.nodeName),s=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&l||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=A(e,"lazyunveilread").detail,i&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,U++,X(e,t,i,s,r))},Y=function(){if(!l)if(s.now()-b<999)o(Y,999);else{var e=E(function(){n.loadMode=3,q()});l=!0,n.loadMode=3,q(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){b=s.now(),i=t.getElementsByClassName(n.lazyClass),c=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),k=n.hFac,a("scroll",q,!0),a("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",q,!0),r.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),a("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Y():(a("load",Y),t.addEventListener("DOMContentLoaded",q),o(Y,2e4)),i.length?j():q()},checkElems:q,unveil:Z}}(),T=function(){var e,r=C(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),u.test(t.nodeName||""))for(i=0,a=(s=t.getElementsByTagName("source")).length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||y(e,n.detail)}),s=function(e,t,n){var s,i=e.parentNode;i&&(n=b(e,i,n),(s=A(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&r(e,i,s,n))},i=E(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])});return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",i)},checkElems:i,updateElem:s}}(),M=function(){M.i||(M.i=!0,T._(),x._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,o(function(){n.init&&M()})}(),{cfg:n,autoSizer:T,loader:x,init:M,uP:y,aC:h,rC:g,hC:m,fire:A,gW:b,rAF:w}}})}]);