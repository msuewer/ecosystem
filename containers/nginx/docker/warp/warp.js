!function(t,e){function n(t){return function(){return this[t]}}function i(t,e){var n=t.split("."),i=Z;!(n[0]in i)&&i.execScript&&i.execScript("var "+n[0]);for(var o;n.length&&(o=n.shift());)n.length||void 0===e?i=i[o]?i[o]:i[o]={}:i[o]=e}function o(t){return t.call.apply(t.bind,arguments)}function a(t,e){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function r(){return r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a,r.apply(X,arguments)}function s(t,e){this.G=t,this.v=e||t,this.z=this.v.document}function h(t,n,i){t=t.z.getElementsByTagName(n)[0],t||(t=e.documentElement),t&&t.lastChild&&t.insertBefore(i,t.lastChild)}function p(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var a=Y,r=0;r<i.length;r+=1)if(e[o]===i[r]){a=Q;break}a||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(a=Y,r=0;r<n.length;r+=1)if(i[o]===n[r]){a=Q;break}a||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function l(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;o>i;i++)if(n[i]==e)return Q;return Y}function c(t){var e=t.v.location.protocol;return"about:"==e&&(e=t.G.location.protocol),"https:"==e?"https:":"http:"}function u(t,e){var n=t.createElement("link",{rel:"stylesheet",href:e}),i=Y;n.onload=function(){i||(i=Q)},n.onerror=function(){i||(i=Q)},h(t,"head",n)}function f(e,n,i,o){var a=e.z.getElementsByTagName("head")[0];if(a){var r=e.createElement("script",{src:n}),s=Y;return r.onload=r.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=Q,i&&i(X),r.onload=r.onreadystatechange=X,"HEAD"==r.parentNode.tagName&&a.removeChild(r))},a.appendChild(r),t.setTimeout(function(){s||(s=Q,i&&i(Error("Script load timeout")))},o||5e3),r}return X}function d(t,e,n){this.M=t,this.U=e,this.Aa=n}function m(t,e,n,i){this.d=t!=X?t:X,this.o=e!=X?e:X,this.aa=n!=X?n:X,this.f=i!=X?i:X}function g(t){t=ee.exec(t);var e=X,n=X,i=X,o=X;return t&&(t[1]!==X&&t[1]&&(e=parseInt(t[1],10)),t[2]!==X&&t[2]&&(n=parseInt(t[2],10)),t[3]!==X&&t[3]&&(i=parseInt(t[3],10)),t[4]!==X&&t[4]&&(o=/^[0-9]+$/.test(t[4])?parseInt(t[4],10):t[4])),new m(e,n,i,o)}function w(t,e,n,i,o,a,r,s,h,p,l){this.K=t,this.Ga=e,this.za=n,this.fa=i,this.Ea=o,this.ea=a,this.wa=r,this.Fa=s,this.va=h,this.da=p,this.j=l}function v(t,e){this.a=t,this.I=e}function y(t){var e=x(t.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);return""!=e?(/BB\d{2}/.test(e)&&(e="BlackBerry"),e):(t=x(t.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1),""!=t?("Mac_PowerPC"==t&&(t="Macintosh"),t):"Unknown")}function k(t){var e=x(t.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(e||(e=x(t.a,/Windows Phone( OS)? ([^;)]+)/,2))||(e=x(t.a,/(iPhone )?OS ([\d_]+)/,2)))return e;if(e=x(t.a,/(?:Linux|CrOS) ([^;)]+)/,1))for(var e=e.split(/\s/),n=0;n<e.length;n+=1)if(/^[\d\._]+$/.test(e[n]))return e[n];return(t=x(t.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?t:"Unknown"}function b(t){var e=y(t),n=k(t),i=g(n),o=x(t.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),a=g(o),r="Unknown",s=new m,h="Unknown",p=Y;return/OPR\/[\d.]+/.test(t.a)?r="Opera":-1!=t.a.indexOf("Chrome")||-1!=t.a.indexOf("CrMo")||-1!=t.a.indexOf("CriOS")?r="Chrome":/Silk\/\d/.test(t.a)?r="Silk":"BlackBerry"==e||"Android"==e?r="BuiltinBrowser":-1!=t.a.indexOf("PhantomJS")?r="PhantomJS":-1!=t.a.indexOf("Safari")?r="Safari":-1!=t.a.indexOf("AdobeAIR")&&(r="AdobeAIR"),"BuiltinBrowser"==r?h="Unknown":"Silk"==r?h=x(t.a,/Silk\/([\d\._]+)/,1):"Chrome"==r?h=x(t.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=t.a.indexOf("Version/")?h=x(t.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==r?h=x(t.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==r?h=x(t.a,/OPR\/([\d.]+)/,1):"PhantomJS"==r&&(h=x(t.a,/PhantomJS\/([\d.]+)/,1)),s=g(h),p="AdobeAIR"==r?2<s.d||2==s.d&&5<=s.o:"BlackBerry"==e?10<=i.d:"Android"==e?2<i.d||2==i.d&&1<i.o:526<=a.d||525<=a.d&&13<=a.o,new w(r,s,h,"AppleWebKit",a,o,e,i,n,S(t.I),new d(p,536>a.d||536==a.d&&11>a.o,"iPhone"==e||"iPad"==e||"iPod"==e||"Macintosh"==e))}function x(t,e,n){return(t=t.match(e))&&t[n]?t[n]:""}function S(t){return t.documentMode?t.documentMode:void 0}function _(t){this.ua=t||"-"}function O(t,e){this.K=t,this.V=4,this.L="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.L=n[1],this.V=parseInt(n[2],10))}function C(t){return t.L+t.V}function N(t){var e=4,n="n",i=X;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function A(t,e,n){this.c=t,this.m=e,this.O=n,this.h="wf",this.g=new _("-")}function B(t){var e=l(t.m,t.g.f(t.h,"active")),n=[],i=[t.g.f(t.h,"loading")];e||n.push(t.g.f(t.h,"inactive")),p(t.m,n,i),E(t,"inactive")}function E(t,e,n){t.O[e]&&(n?t.O[e](n.getName(),C(n)):t.O[e]())}function M(){this.w={}}function I(t,e){this.c=t,this.C=e,this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}function P(t,e){var n;n=[];for(var i=e.K.split(/,\s*/),o=0;o<i.length;o++){var a=i[o].replace(/['"]/g,"");-1==a.indexOf(" ")?n.push(a):n.push("'"+a+"'")}n=n.join(","),i="normal",o=e.V+"00","o"===e.L?i="oblique":"i"===e.L&&(i="italic"),t.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+n+";"+("font-style:"+i+";font-weight:"+o+";")}function j(t){h(t.c,"body",t.s)}function U(t,e,n,i,o,a,r,s){this.W=t,this.sa=e,this.c=n,this.q=i,this.C=s||"BESbswy",this.j=o,this.F={},this.T=a||5e3,this.Z=r||X,this.B=this.A=X,t=new I(this.c,this.C),j(t);for(var h in ie)ie.hasOwnProperty(h)&&(P(t,new O(ie[h],C(this.q))),this.F[ie[h]]=t.s.offsetWidth);t.remove()}function T(t,e,n){for(var i in ie)if(ie.hasOwnProperty(i)&&e===t.F[ie[i]]&&n===t.F[ie[i]])return Q;return Y}function W(t){var e=t.A.s.offsetWidth,n=t.B.s.offsetWidth;e===t.F.serif&&n===t.F["sans-serif"]||t.j.U&&T(t,e,n)?te()-t.xa>=t.T?t.j.U&&T(t,e,n)&&(t.Z===X||t.Z.hasOwnProperty(t.q.getName()))?F(t,t.W):F(t,t.sa):setTimeout(r(function(){W(this)},t),25):F(t,t.W)}function F(t,e){t.A.remove(),t.B.remove(),e(t.q)}function R(t,e,n,i){this.c=e,this.t=n,this.P=0,this.ba=this.Y=Y,this.T=i,this.j=t.j}function L(t,e,n,i,o){if(0===e.length&&o)B(t.t);else for(t.P+=e.length,o&&(t.Y=o),o=0;o<e.length;o++){var a=e[o],s=n[a.getName()],h=t.t,l=a;p(h.m,[h.g.f(h.h,l.getName(),C(l).toString(),"loading")]),E(h,"fontloading",l),new U(r(t.ga,t),r(t.ha,t),t.c,a,t.j,t.T,i,s).start()}}function z(t){0==--t.P&&t.Y&&(t.ba?(t=t.t,p(t.m,[t.g.f(t.h,"active")],[t.g.f(t.h,"loading"),t.g.f(t.h,"inactive")]),E(t,"active")):B(t.t))}function q(t){this.G=t,this.u=new M,this.ya=new v(t.navigator.userAgent,t.document),this.a=this.ya.parse(),this.Q=this.R=0}function D(t,e){this.c=t,this.e=e,this.k=[]}function V(t,e){this.c=t,this.e=e,this.k=[]}function G(t,e){this.c=t,this.e=e}function $(t,e,n){this.N=t?t:e+oe,this.p=[],this.S=[],this.ca=n||""}function H(t){this.p=t,this.$=[],this.J={}}function J(t,n){this.a=new v(navigator.userAgent,e).parse(),this.c=t,this.e=n}function K(t,e){this.c=t,this.e=e,this.k=[]}var Q=!0,X=null,Y=!1,Z=this,te=Date.now||function(){return+new Date};s.prototype.createElement=function(t,e,n){if(t=this.z.createElement(t),e)for(var i in e)e.hasOwnProperty(i)&&("style"==i?t.style.cssText=e[i]:t.setAttribute(i,e[i]));return n&&t.appendChild(this.z.createTextNode(n)),t},i("webfont.BrowserInfo",d),d.prototype.pa=n("M"),d.prototype.hasWebFontSupport=d.prototype.pa,d.prototype.qa=n("U"),d.prototype.hasWebKitFallbackBug=d.prototype.qa,d.prototype.ra=n("Aa"),d.prototype.hasWebKitMetricsBug=d.prototype.ra;var ee=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;m.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")},i("webfont.UserAgent",w),w.prototype.getName=n("K"),w.prototype.getName=w.prototype.getName,w.prototype.oa=n("za"),w.prototype.getVersion=w.prototype.oa,w.prototype.ka=n("fa"),w.prototype.getEngine=w.prototype.ka,w.prototype.la=n("ea"),w.prototype.getEngineVersion=w.prototype.la,w.prototype.ma=n("wa"),w.prototype.getPlatform=w.prototype.ma,w.prototype.na=n("va"),w.prototype.getPlatformVersion=w.prototype.na,w.prototype.ja=n("da"),w.prototype.getDocumentMode=w.prototype.ja,w.prototype.ia=n("j"),w.prototype.getBrowserInfo=w.prototype.ia;var ne=new w("Unknown",new m,"Unknown","Unknown",new m,"Unknown","Unknown",new m,"Unknown",void 0,new d(Y,Y,Y));v.prototype.parse=function(){var t;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){t=y(this);var e=k(this),n=g(e),i=X,o=X,a=X,r=X,s=x(this.a,/Trident\/([\d\w\.]+)/,1),h=S(this.I),i=-1!=this.a.indexOf("MSIE")?x(this.a,/MSIE ([\d\w\.]+)/,1):x(this.a,/rv:([\d\w\.]+)/,1),o=g(i);""!=s?(a="Trident",r=g(s)):(a="Unknown",r=new m,s="Unknown"),t=new w("MSIE",o,i,a,r,s,t,n,e,h,new d("Windows"==t&&6<=o.d||"Windows Phone"==t&&8<=n.d,Y,Y))}else if(-1!=this.a.indexOf("Opera"))t:if(t="Unknown",e=x(this.a,/Presto\/([\d\w\.]+)/,1),n=g(e),i=k(this),o=g(i),a=S(this.I),n.d!==X?t="Presto":(-1!=this.a.indexOf("Gecko")&&(t="Gecko"),e=x(this.a,/rv:([^\)]+)/,1),n=g(e)),-1!=this.a.indexOf("Opera Mini/"))r=x(this.a,/Opera Mini\/([\d\.]+)/,1),s=g(r),t=new w("OperaMini",s,r,t,n,e,y(this),o,i,a,new d(Y,Y,Y));else{if(-1!=this.a.indexOf("Version/")&&(r=x(this.a,/Version\/([\d\.]+)/,1),s=g(r),s.d!==X)){t=new w("Opera",s,r,t,n,e,y(this),o,i,a,new d(10<=s.d,Y,Y));break t}r=x(this.a,/Opera[\/ ]([\d\.]+)/,1),s=g(r),t=s.d!==X?new w("Opera",s,r,t,n,e,y(this),o,i,a,new d(10<=s.d,Y,Y)):new w("Opera",new m,"Unknown",t,n,e,y(this),o,i,a,new d(Y,Y,Y))}else/OPR\/[\d.]+/.test(this.a)?t=b(this):/AppleWeb(K|k)it/.test(this.a)?t=b(this):-1!=this.a.indexOf("Gecko")?(t="Unknown",e=new m,n="Unknown",i=k(this),o=g(i),a=Y,-1!=this.a.indexOf("Firefox")?(t="Firefox",n=x(this.a,/Firefox\/([\d\w\.]+)/,1),e=g(n),a=3<=e.d&&5<=e.o):-1!=this.a.indexOf("Mozilla")&&(t="Mozilla"),r=x(this.a,/rv:([^\)]+)/,1),s=g(r),a||(a=1<s.d||1==s.d&&9<s.o||1==s.d&&9==s.o&&2<=s.aa||r.match(/1\.9\.1b[123]/)!=X||r.match(/1\.9\.1\.[\d\.]+/)!=X),t=new w(t,e,n,"Gecko",s,r,y(this),o,i,S(this.I),new d(a,Y,Y))):t=ne;return t},_.prototype.f=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.ua)},O.prototype.getName=n("K"),I.prototype.remove=function(){var t=this.s;t.parentNode&&t.parentNode.removeChild(t)};var ie={Da:"serif",Ca:"sans-serif",Ba:"monospace"};U.prototype.start=function(){this.A=new I(this.c,this.C),j(this.A),this.B=new I(this.c,this.C),j(this.B),this.xa=te(),P(this.A,new O(this.q.getName()+",serif",C(this.q))),P(this.B,new O(this.q.getName()+",sans-serif",C(this.q))),W(this)},R.prototype.ga=function(t){var e=this.t;p(e.m,[e.g.f(e.h,t.getName(),C(t).toString(),"active")],[e.g.f(e.h,t.getName(),C(t).toString(),"loading"),e.g.f(e.h,t.getName(),C(t).toString(),"inactive")]),E(e,"fontactive",t),this.ba=Q,z(this)},R.prototype.ha=function(t){var e=this.t,n=l(e.m,e.g.f(e.h,t.getName(),C(t).toString(),"active")),i=[],o=[e.g.f(e.h,t.getName(),C(t).toString(),"loading")];n||i.push(e.g.f(e.h,t.getName(),C(t).toString(),"inactive")),p(e.m,i,o),E(e,"fontinactive",t),z(this)},q.prototype.load=function(t){var e=t.context||this.G;this.c=new s(this.G,e);var e=new A(this.c,e.document.documentElement,t),n=[],i=t.timeout;p(e.m,[e.g.f(e.h,"loading")]),E(e,"loading");var o,n=this.u,a=this.c,h=[];for(o in t)if(t.hasOwnProperty(o)){var l=n.w[o];l&&h.push(l(t[o],a))}for(n=h,this.Q=this.R=n.length,t=new R(this.a,this.c,e,i),o=0,i=n.length;i>o;o++)a=n[o],a.H(this.a,r(this.ta,this,a,e,t))},q.prototype.ta=function(t,e,n,i){var o=this;i?t.load(function(t,e,i){var a=0==--o.R;setTimeout(function(){L(n,t,e||{},i||X,a)},0)}):(t=0==--this.R,this.Q--,t&&0==this.Q&&B(e),L(n,[],{},X,t))},D.prototype.D=function(t){return c(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+t+".js"},D.prototype.H=function(t,e){var n=this.e.id,i=this.c.v,o=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(t,n){for(var i=0,a=n.fonts.length;a>i;++i){var r=n.fonts[i];o.k.push(new O(r.name,N("font-weight:"+r.weight+";font-style:"+r.style)))}e(t)},f(this.c,this.D(n),function(t){t&&e(Y)})):e(Y)},D.prototype.load=function(t){t(this.k)},V.prototype.D=function(t){var e=c(this.c);return(this.e.api||e+"//use.typekit.net")+"/"+t+".js"},V.prototype.H=function(t,e){var n=this.e.id,i=this.e,o=this.c.v,a=this;n?(o.__webfonttypekitmodule__||(o.__webfonttypekitmodule__={}),o.__webfonttypekitmodule__[n]=function(n){n(t,i,function(t,n,i){for(var o=0;o<n.length;o+=1){var r=i[n[o]];if(r)for(var s=0;s<r.length;s+=1)a.k.push(new O(n[o],r[s]));else a.k.push(new O(n[o]))}e(t)})},f(this.c,this.D(n),function(t){t&&e(Y)},2e3)):e(Y)},V.prototype.load=function(t){t(this.k)},G.prototype.load=function(t){var e,n,i=this.e.urls||[],o=this.e.families||[],a=this.e.testStrings||{};for(e=0,n=i.length;n>e;e++)u(this.c,i[e]);for(i=[],e=0,n=o.length;n>e;e++){var r=o[e].split(":");if(r[1])for(var s=r[1].split(","),h=0;h<s.length;h+=1)i.push(new O(r[0],s[h]));else i.push(new O(r[0]))}t(i,a)},G.prototype.H=function(t,e){return e(t.j.M)};var oe="//fonts.googleapis.com/css";$.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var t=this.p.length,e=[],n=0;t>n;n++)e.push(this.p[n].replace(/ /g,"+"));return t=this.N+"?family="+e.join("%7C"),0<this.S.length&&(t+="&subset="+this.S.join(",")),0<this.ca.length&&(t+="&text="+encodeURIComponent(this.ca)),t};var ae={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},re={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},se={i:"i",italic:"i",n:"n",normal:"n"},he=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");H.prototype.parse=function(){for(var t=this.p.length,e=0;t>e;e++){var n=this.p[e].split(":"),i=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var a,r=n[1];if(a=[],r)for(var r=r.split(","),s=r.length,h=0;s>h;h++){var p;if(p=r[h],p.match(/^[\w-]+$/)){p=he.exec(p.toLowerCase());var l=void 0;if(p==X)l="";else{if(l=void 0,l=p[1],l==X||""==l)l="4";else var c=re[l],l=c?c:isNaN(l)?"4":l.substr(0,1);l=[p[2]==X||""==p[2]?"n":se[p[2]],l].join("")}p=l}else p="";p&&a.push(p)}0<a.length&&(o=a),3==n.length&&(n=n[2],a=[],n=n?n.split(","):a,0<n.length&&(n=ae[n[0]])&&(this.J[i]=n))}for(this.J[i]||(n=ae[i])&&(this.J[i]=n),n=0;n<o.length;n+=1)this.$.push(new O(i,o[n]))}};var pe={Arimo:Q,Cousine:Q,Tinos:Q};J.prototype.H=function(t,e){e(t.j.M)},J.prototype.load=function(t){var e=this.c;if("MSIE"==this.a.getName()&&this.e.blocking!=Q){var n=r(this.X,this,t),i=function(){e.z.body?n():setTimeout(i,0)};i()}else this.X(t)},J.prototype.X=function(t){for(var e=this.c,n=new $(this.e.api,c(e),this.e.text),i=this.e.families,o=i.length,a=0;o>a;a++){var r=i[a].split(":");3==r.length&&n.S.push(r.pop());var s="";2==r.length&&""!=r[1]&&(s=":"),n.p.push(r.join(s))}i=new H(i),i.parse(),u(e,n.f()),t(i.$,i.J,pe)},K.prototype.H=function(t,e){var n=this,i=n.e.projectId,o=n.e.version;if(i){var a=n.c.v;f(this.c,n.D(i,o),function(o){if(o)e(Y);else{if(a["__mti_fntLst"+i]&&(o=a["__mti_fntLst"+i]()))for(var r=0;r<o.length;r++)n.k.push(new O(o[r].fontfamily));e(t.j.M)}}).id="__MonotypeAPIScript__"+i}else e(Y)},K.prototype.D=function(t,e){var n=c(this.c),i=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return n+"//"+i+"/"+t+".js"+(e?"?v="+e:"")},K.prototype.load=function(t){t(this.k)};var le=new q(Z);le.u.w.custom=function(t,e){return new G(e,t)},le.u.w.fontdeck=function(t,e){return new D(e,t)},le.u.w.monotype=function(t,e){return new K(e,t)},le.u.w.typekit=function(t,e){return new V(e,t)},le.u.w.google=function(t,e){return new J(e,t)},Z.WebFont||(Z.WebFont={},Z.WebFont.load=r(le.load,le),Z.WebFontConfig&&le.load(Z.WebFontConfig))}(this,document),function(){function t(t){return 0===t.indexOf("http")?t:c.baseUrl+t}function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,n){return e(n).test(t.className)}function i(t,e){n(t,e)||(t.className=t.className+" "+e)}function o(t,n){t.className=t.className.replace(e(n)," ")}function a(t,e){var a=n(t,e)?o:i;a(t,e)}function r(t,e,n){var i=document.createElement("link");i.setAttribute("href",t),i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css");var o,a;"sheet"in i?(o="sheet",a="cssRules"):(o="styleSheet",a="rules");var r=setInterval(function(){try{i[o]&&i[o][a].length&&(clearInterval(r),clearTimeout(s),e.call(n||window,!0,i))}catch(t){}},10),s=setTimeout(function(){clearInterval(r),clearTimeout(s),u.removeChild(i),e.call(n||window,!1,i)},15e3);return u.appendChild(i),i}function s(){var t="__warp";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}}function h(t){return"warpc."+t.name.toLowerCase().replace(/\s+/g,"_")}function p(t){var e=t.target;if(e&&e.rel){a(e,"warpmenu-category-open");var r=document.getElementById(e.rel);r&&(n(r,"warpmenu-collapsed")?(d&&localStorage.removeItem(e.rel+".collapsed"),o(r,"warpmenu-collapsed")):(d&&localStorage.setItem(e.rel+".collapsed",!0),i(r,"warpmenu-collapsed")))}}function l(){function e(){a(_,"warpbtn-open"),a(o,"warpmenu-open"),a(f,"warpmenu-push-toleft")}i(f,"warpmenu-push");var o=document.createElement("nav");o.className="warpmenu warpmenu-vertical warpmenu-right",o.id="warpmenu-s1",f.appendChild(o);var r=document.createElement("div");i(r,"warpmenu-home");var s=document.createElement("a");s.target="_top",s.href=t(c.home.href);var l=document.createElement("img");l.src=t(c.home.logo.src),l.alt=c.home.logo.alt,i(l,"warpmenu-logo"),s.appendChild(l),r.appendChild(s),o.appendChild(r);for(var u=0;u<c.categories.length;u++){var m=c.categories[u],g=h(m),w=document.createElement("ul");w.id=g;var v=!1;d&&(v=localStorage.getItem(g+".collapsed")),v&&i(w,"warpmenu-collapsed");for(var y=0;y<m.links.length;y++){var k=m.links[y],b=document.createElement("li"),x=document.createElement("a");x.target=k.target?k.target:"_top",x.href=t(k.href),x.innerHTML=k.text,i(b,"warpmenu-link"),0===y&&i(b,"warpmenu-link-top"),b.appendChild(x),w.appendChild(b)}var S=document.createElement("h3");S.rel=g,i(S,"warpbtn-link"),v&&i(S,"warpmenu-category-open"),S.onclick=p,S.innerHTML=m.name,o.appendChild(S),o.appendChild(w)}var _=document.createElement("div");i(_,"warpbtn");var O=document.createElement("a");i(O,"warpbtn-link"),_.onclick=e,_.appendChild(O),document.onclick=function(t){if(t&&t.target){var i=t.target;!n(o,"warpmenu-open")||n(i,"warpbtn-link")||n(i,"warpmenu")||n(i,"warpmenu-home")||e()}},f.appendChild(_)}var c={baseUrl:"",home:{href:"/",logo:{src:"/_static/images/universe-logo-300x65.png",alt:"SCM-Manager Universe"}},categories:[{name:"Development Apps",links:[{href:"/scm",text:"SCM-Manager"},{href:"/jenkins",text:"Jenkins"},{href:"/nexus",text:"Sonatype Nexus"},{href:"/sonar",text:"SonarQube"},{href:"/bugzilla",text:"Bugzilla"}]},{name:"Administration Apps",links:[{href:"/universeadm",text:"User Management"},{href:"/phpmyadmin",text:"phpMyAdmin"},{href:"/manager",text:"Tomcat Manager"}]},{name:"About",links:[{href:"https://www.scm-manager.com/contact/",text:"Contact",target:"_blank"}]}]},u=document.getElementsByTagName("head")[0],f=document.getElementsByTagName("body")[0],d=s();n(f,"warpmenu-push")||self!==top&&!window.pmaversion||(WebFont.load({custom:{families:["Exo::latin"],urls:[t("/_static/fonts/exo/exo.css")]}}),r("/warp/warp.css",function(t){t&&l()}))}();