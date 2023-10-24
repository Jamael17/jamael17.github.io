import{s as J,j as U,p as re,i as V,l as F,e as W,q as xe,u as K,g as X,f as Y,v as je,h as Ce,r as ze,m as D,b as Pe,w as G,o as Ie,n as Ee}from"../chunks/scheduler.45d43863.js";import{S as Z,i as $,e as O,a as N,d as I,p as ee,t as q,b as te,f as j,g as z,h as P,j as E,F as ae,D as H,y as le,r as de,u as ge,v as ce,w as ue,s as S,c as T,k as w,z as L,x,E as fe,m as me,n as he}from"../chunks/index.c744c110.js";import{e as A}from"../chunks/each.e59479a4.js";import{t as R,g as ve,a as qe}from"../chunks/tw-merge.7befc04d.js";function Q(r){let e,t,l,i,a,o;const n=r[14].default,s=W(n,r,r[13],null);let d=[r[8],{class:r[7]},{role:r[6]}],m={};for(let g=0;g<d.length;g+=1)m=V(m,d[g]);return{c(){e=z(r[1]),s&&s.c(),this.h()},l(g){e=P(g,(r[1]||"null").toUpperCase(),{class:!0,role:!0});var b=E(e);s&&s.l(b),b.forEach(j),this.h()},h(){ae(r[1])(e,m)},m(g,b){N(g,e,b),s&&s.m(e,null),r[20](e),i=!0,a||(o=[xe(t=r[4].call(null,e,r[5])),H(e,"click",r[15]),H(e,"mouseenter",r[16]),H(e,"mouseleave",r[17]),H(e,"focusin",r[18]),H(e,"focusout",r[19])],a=!0)},p(g,b){r=g,s&&s.p&&(!i||b&8192)&&K(s,n,r,r[13],i?Y(n,r[13],b,null):X(r[13]),null),ae(r[1])(e,m=ve(d,[b&256&&r[8],(!i||b&128)&&{class:r[7]},(!i||b&64)&&{role:r[6]}])),t&&je(t.update)&&b&32&&t.update.call(null,r[5])},i(g){i||(I(s,g),g&&Ce(()=>{i&&(l||(l=le(e,r[2],r[3],!0)),l.run(1))}),i=!0)},o(g){q(s,g),g&&(l||(l=le(e,r[2],r[3],!1)),l.run(0)),i=!1},d(g){g&&j(e),s&&s.d(g),r[20](null),g&&l&&l.end(),a=!1,ze(o)}}}function Me(r){let e=r[1],t,l=!1,i,a=r[1]&&Q(r);return{c(){a&&a.c(),t=O()},l(o){a&&a.l(o),t=O()},m(o,n){a&&a.m(o,n),N(o,t,n),i=!0},p(o,[n]){o[1]?e?J(e,o[1])?(a.d(1),a=Q(o),e=o[1],a.c(),l&&(l=!1,I(a)),a.m(t.parentNode,t)):(l&&(l=!1,I(a)),a.p(o,n)):(a=Q(o),e=o[1],a.c(),I(a),a.m(t.parentNode,t)):e&&(l=!0,ee(),q(a,1,1,()=>{a=null,e=o[1],l=!1}),te())},i(o){i||(I(a,o),i=!0)},o(o){q(a,o),i=!1},d(o){o&&j(t),a&&a.d(o)}}}function De(r,e,t){const l=["tag","color","rounded","border","shadow","transition","params","node","use","options","role"];let i=U(e,l),{$$slots:a={},$$scope:o}=e;const n=()=>({duration:0}),s=()=>{};re("background",!0);let{tag:d=i.href?"a":"div"}=e,{color:m="default"}=e,{rounded:g=!1}=e,{border:b=!1}=e,{shadow:p=!1}=e,{transition:h=n}=e,{params:C={}}=e,{node:f=void 0}=e,{use:c=s}=e,{options:B={}}=e,{role:v=void 0}=e;const _={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""},k={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},M={gray:"border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",red:"border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",yellow:"border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",green:"border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",indigo:"border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",purple:"border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",pink:"border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",blue:"border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",light:"border-gray-500 divide-gray-500",dark:"border-gray-500 divide-gray-500",default:"border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",dropdown:"border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",navbar:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",navbarUl:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",form:"border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",primary:"border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",orange:"border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",none:""};let y;function _e(u){D.call(this,r,u)}function be(u){D.call(this,r,u)}function pe(u){D.call(this,r,u)}function ye(u){D.call(this,r,u)}function ke(u){D.call(this,r,u)}function we(u){Pe[u?"unshift":"push"](()=>{f=u,t(0,f)})}return r.$$set=u=>{t(26,e=V(V({},e),F(u))),t(8,i=U(e,l)),"tag"in u&&t(1,d=u.tag),"color"in u&&t(9,m=u.color),"rounded"in u&&t(10,g=u.rounded),"border"in u&&t(11,b=u.border),"shadow"in u&&t(12,p=u.shadow),"transition"in u&&t(2,h=u.transition),"params"in u&&t(3,C=u.params),"node"in u&&t(0,f=u.node),"use"in u&&t(4,c=u.use),"options"in u&&t(5,B=u.options),"role"in u&&t(6,v=u.role),"$$scope"in u&&t(13,o=u.$$scope)},r.$$.update=()=>{r.$$.dirty&512&&t(9,m=m??"default"),r.$$.dirty&512&&re("color",m),t(7,y=R(_[m],k[m],g&&"rounded-lg",b&&"border",M[m],p&&"shadow-md",e.class))},e=F(e),[f,d,h,C,c,B,v,y,i,m,g,b,p,o,a,_e,be,pe,ye,ke,we]}class Se extends Z{constructor(e){super(),$(this,e,De,Me,J,{tag:1,color:9,rounded:10,border:11,shadow:12,transition:2,params:3,node:0,use:4,options:5,role:6})}}function Te(r){let e;const t=r[10].default,l=W(t,r,r[16],null);return{c(){l&&l.c()},l(i){l&&l.l(i)},m(i,a){l&&l.m(i,a),e=!0},p(i,a){l&&l.p&&(!e||a&65536)&&K(l,t,i,i[16],e?Y(t,i[16],a,null):X(i[16]),null)},i(i){e||(I(l,i),e=!0)},o(i){q(l,i),e=!1},d(i){l&&l.d(i)}}}function Ne(r){let e,t,l,i,a;const o=r[10].default,n=W(o,r,r[16],null);return{c(){e=z("img"),l=S(),i=z("div"),n&&n.c(),this.h()},l(s){e=P(s,"IMG",{class:!0,src:!0,alt:!0}),l=T(s),i=P(s,"DIV",{class:!0});var d=E(i);n&&n.l(d),d.forEach(j),this.h()},h(){w(e,"class",r[4]),G(e.src,t=r[1])||w(e,"src",t),w(e,"alt",""),w(i,"class",r[2])},m(s,d){N(s,e,d),N(s,l,d),N(s,i,d),n&&n.m(i,null),a=!0},p(s,d){(!a||d&16)&&w(e,"class",s[4]),(!a||d&2&&!G(e.src,t=s[1]))&&w(e,"src",t),n&&n.p&&(!a||d&65536)&&K(n,o,s,s[16],a?Y(o,s[16],d,null):X(s[16]),null),(!a||d&4)&&w(i,"class",s[2])},i(s){a||(I(n,s),a=!0)},o(s){q(n,s),a=!1},d(s){s&&(j(e),j(l),j(i)),n&&n.d(s)}}}function Be(r){let e,t,l,i;const a=[Ne,Te],o=[];function n(s,d){return s[1]?0:1}return e=n(r),t=o[e]=a[e](r),{c(){t.c(),l=O()},l(s){t.l(s),l=O()},m(s,d){o[e].m(s,d),N(s,l,d),i=!0},p(s,d){let m=e;e=n(s),e===m?o[e].p(s,d):(ee(),q(o[m],1,1,()=>{o[m]=null}),te(),t=o[e],t?t.p(s,d):(t=o[e]=a[e](s),t.c()),I(t,1),t.m(l.parentNode,l))},i(s){i||(I(t),i=!0)},o(s){q(t),i=!1},d(s){s&&j(l),o[e].d(s)}}}function Ve(r){let e,t;const l=[{tag:r[0]?"a":"div"},{rounded:!0},{shadow:!0},{border:!0},{href:r[0]},r[5],{class:r[3]}];let i={$$slots:{default:[Be]},$$scope:{ctx:r}};for(let a=0;a<l.length;a+=1)i=V(i,l[a]);return e=new Se({props:i}),e.$on("click",r[11]),e.$on("focusin",r[12]),e.$on("focusout",r[13]),e.$on("mouseenter",r[14]),e.$on("mouseleave",r[15]),{c(){de(e.$$.fragment)},l(a){ge(e.$$.fragment,a)},m(a,o){ce(e,a,o),t=!0},p(a,[o]){const n=o&41?ve(l,[o&1&&{tag:a[0]?"a":"div"},l[1],l[2],l[3],o&1&&{href:a[0]},o&32&&qe(a[5]),o&8&&{class:a[3]}]):{};o&65558&&(n.$$scope={dirty:o,ctx:a}),e.$set(n)},i(a){t||(I(e.$$.fragment,a),t=!0)},o(a){q(e.$$.fragment,a),t=!1},d(a){ue(e,a)}}}function He(r,e,t){let l;const i=["href","horizontal","reverse","img","padding","size"];let a=U(e,i),{$$slots:o={},$$scope:n}=e,{href:s=void 0}=e,{horizontal:d=!1}=e,{reverse:m=!1}=e,{img:g=void 0}=e,{padding:b="lg"}=e,{size:p="sm"}=e;const h={none:"p-0",sm:"p-4 sm:p-6 md:p-8",md:"p-4 sm:p-5",lg:"p-4 sm:p-6",xl:"p-4 sm:p-8"},C={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-screen-xl"};let f,c;function B(y){D.call(this,r,y)}function v(y){D.call(this,r,y)}function _(y){D.call(this,r,y)}function k(y){D.call(this,r,y)}function M(y){D.call(this,r,y)}return r.$$set=y=>{t(20,e=V(V({},e),F(y))),t(5,a=U(e,i)),"href"in y&&t(0,s=y.href),"horizontal"in y&&t(6,d=y.horizontal),"reverse"in y&&t(7,m=y.reverse),"img"in y&&t(1,g=y.img),"padding"in y&&t(8,b=y.padding),"size"in y&&t(9,p=y.size),"$$scope"in y&&t(16,n=y.$$scope)},r.$$.update=()=>{r.$$.dirty&256&&t(2,l=h[b]),t(3,f=R("flex",C[p],m?"flex-col-reverse":"flex-col",d&&(m?"md:flex-row-reverse md:max-w-xl":"md:flex-row md:max-w-xl"),s&&"hover:bg-gray-100 dark:hover:bg-gray-700",!g&&l,e.class)),r.$$.dirty&192&&t(4,c=R(m?"rounded-b-lg":"rounded-t-lg",d&&"object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none",d&&(m?"md:rounded-r-lg":"md:rounded-l-lg")))},e=F(e),[s,g,l,f,c,a,d,m,b,p,o,B,v,_,k,M,n]}class Le extends Z{constructor(e){super(),$(this,e,He,Ve,J,{href:0,horizontal:6,reverse:7,img:1,padding:8,size:9})}}function oe(r,e,t){const l=r.slice();return l[1]=e[t].title,l[2]=e[t].imgPath,l[3]=e[t].tools,l}function se(r,e,t){const l=r.slice();return l[6]=e[t].name,l[7]=e[t].logo,l}function ie(r){let e,t,l,i,a=r[6]+"",o,n;return{c(){e=z("li"),t=z("img"),i=S(),o=me(a),n=S(),this.h()},l(s){e=P(s,"LI",{class:!0});var d=E(e);t=P(d,"IMG",{class:!0,width:!0,height:!0,src:!0,alt:!0}),i=T(d),o=he(d,a),n=T(d),d.forEach(j),this.h()},h(){w(t,"class","tool-logo mr-2 mb-2 svelte-1ar1m42"),w(t,"width","24px"),w(t,"height","24px"),G(t.src,l=r[7])||w(t,"src",l),w(t,"alt","logo"),w(e,"class","flex p-1 remFilter svelte-1ar1m42")},m(s,d){N(s,e,d),x(e,t),x(e,i),x(e,o),x(e,n)},p:Ee,d(s){s&&j(e)}}}function Ue(r){let e,t,l,i,a,o,n,s=r[1]+"",d,m,g,b=A(r[3]),p=[];for(let h=0;h<b.length;h+=1)p[h]=ie(se(r,b,h));return{c(){e=z("div"),t=z("div"),l=z("img"),a=S(),o=z("div"),n=z("h2"),d=me(s),m=S(),g=z("ul");for(let h=0;h<p.length;h+=1)p[h].c();this.h()},l(h){e=P(h,"DIV",{class:!0});var C=E(e);t=P(C,"DIV",{class:!0});var f=E(t);l=P(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(j),a=T(C),o=P(C,"DIV",{class:!0});var c=E(o);n=P(c,"H2",{class:!0});var B=E(n);d=he(B,s),B.forEach(j),m=T(c),g=P(c,"UL",{class:!0});var v=E(g);for(let _=0;_<p.length;_+=1)p[_].l(v);v.forEach(j),c.forEach(j),C.forEach(j),this.h()},h(){G(l.src,i=r[2])||w(l,"src",i),w(l,"alt","img"),w(l,"class","p-4"),w(t,"class","flex justify-center align-center"),w(n,"class","text-2xl text-white"),w(g,"class","p-2 md:block grid grid-cols-2"),w(o,"class","w-full p-1"),w(e,"class","grid xs:grid-cols-1 sm:grid-cols-2 gap-0 p-2")},m(h,C){N(h,e,C),x(e,t),x(t,l),x(e,a),x(e,o),x(o,n),x(n,d),x(o,m),x(o,g);for(let f=0;f<p.length;f+=1)p[f]&&p[f].m(g,null)},p(h,C){if(C&1){b=A(h[3]);let f;for(f=0;f<b.length;f+=1){const c=se(h,b,f);p[f]?p[f].p(c,C):(p[f]=ie(c),p[f].c(),p[f].m(g,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=b.length}},d(h){h&&j(e),fe(p,h)}}}function ne(r){let e,t,l,i;return t=new Le({props:{size:"xl",reverse:!1,horizontal:!0,padding:"none",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),{c(){e=z("div"),de(t.$$.fragment),l=S(),this.h()},l(a){e=P(a,"DIV",{class:!0});var o=E(e);ge(t.$$.fragment,o),l=T(o),o.forEach(j),this.h()},h(){w(e,"class","skillsContainer flex justify-center")},m(a,o){N(a,e,o),ce(t,e,null),x(e,l),i=!0},p(a,o){const n={};o&1024&&(n.$$scope={dirty:o,ctx:a}),t.$set(n)},i(a){i||(I(t.$$.fragment,a),i=!0)},o(a){q(t.$$.fragment,a),i=!1},d(a){a&&j(e),ue(t)}}}function Fe(r){let e,t,l="About me",i,a,o=`<article class="aboutme grid grid-template-cols-1 grid-template-rows-2"><div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2"><p class="text-4xl md:p-8 sm:pt-4 font-railway order-last sm:order-first xs:order-last">I&#39;m an enthusiast for technology. I always try to learn new things, not only about 
          tech, but also about the world. I have a deep curiosity for how things work, and why 
          those things are the way they are.</p> <div class="flex justify-center"><img src="/illustrations/svg/undraw_trendy_interface_re_xsou.svg" alt="aboutMeIllustration"/></div></div></article>`,n,s,d="Technologies and Tools",m,g,b="Most of the tools I'm familiar with.",p,h,C,f=A(r[0]),c=[];for(let v=0;v<f.length;v+=1)c[v]=ne(oe(r,f,v));const B=v=>q(c[v],1,1,()=>{c[v]=null});return{c(){e=z("div"),t=z("h1"),t.textContent=l,i=S(),a=z("section"),a.innerHTML=o,n=S(),s=z("h1"),s.textContent=d,m=S(),g=z("h4"),g.textContent=b,p=S(),h=z("section");for(let v=0;v<c.length;v+=1)c[v].c();this.h()},l(v){e=P(v,"DIV",{class:!0});var _=E(e);t=P(_,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1luphfu"&&(t.textContent=l),i=T(_),a=P(_,"SECTION",{"data-svelte-h":!0}),L(a)!=="svelte-2d9zgu"&&(a.innerHTML=o),n=T(_),s=P(_,"H1",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-12b9t41"&&(s.textContent=d),m=T(_),g=P(_,"H4",{class:!0,"data-svelte-h":!0}),L(g)!=="svelte-od51oh"&&(g.textContent=b),p=T(_),h=P(_,"SECTION",{class:!0});var k=E(h);for(let M=0;M<c.length;M+=1)c[M].l(k);k.forEach(j),_.forEach(j),this.h()},h(){w(t,"class","text-6xl mb-3 mt-3 text-center w-full"),w(s,"class","text-6xl mb-3 mt-3"),w(g,"class","font-railway text-2xl mb-3"),w(h,"class","grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2"),w(e,"class","aboutPage dark:text-white")},m(v,_){N(v,e,_),x(e,t),x(e,i),x(e,a),x(e,n),x(e,s),x(e,m),x(e,g),x(e,p),x(e,h);for(let k=0;k<c.length;k+=1)c[k]&&c[k].m(h,null);C=!0},p(v,[_]){if(_&1){f=A(v[0]);let k;for(k=0;k<f.length;k+=1){const M=oe(v,f,k);c[k]?(c[k].p(M,_),I(c[k],1)):(c[k]=ne(M),c[k].c(),I(c[k],1),c[k].m(h,null))}for(ee(),k=f.length;k<c.length;k+=1)B(k);te()}},i(v){if(!C){for(let _=0;_<f.length;_+=1)I(c[_]);C=!0}},o(v){c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)q(c[_]);C=!1},d(v){v&&j(e),fe(c,v)}}}function Ge(r){const e=[{title:"Fronted",imgPath:"/illustrations/svg/undraw_laravel_and_vue_-59-tp.svg",tools:[{name:"Vue.js",logo:"https://vuejs.org/logo.svg"},{name:"Svelte",logo:"https://kit.svelte.dev/favicon.png"},{name:"React",logo:"https://es.react.dev/favicon.ico"},{name:"Next.js",logo:"https://nextjs.org/favicon.ico"},{name:"Bootstrap",logo:"https://getbootstrap.com/docs/5.3/assets/img/favicons/favicon-32x32.png"},{name:"Tailwind",logo:"https://tailwindcss.com/favicons/favicon-32x32.png?v=3"},{name:"Laravel",logo:"https://laravel.com/img/favicon/favicon-32x32.png"}]},{title:"Backed",imgPath:"/illustrations/svg/undraw_server_cluster_jwwq.svg",tools:[{name:"Express",logo:"https://expressjs.com/images/favicon.png"},{name:"Socket.io",logo:"https://socket.io/images/favicon.png"},{name:"MySQL",logo:"https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"},{name:"MongoDB",logo:"https://mongodb.com/assets/images/global/favicon.ico"}]},{title:"Infrastructure & DevOps",imgPath:"/illustrations/svg/undraw_container_ship_re_alm4.svg",tools:[{name:"Docker",logo:"https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg"},{name:"Git",logo:"https://git-scm.com/favicon.ico"},{name:"Nginx",logo:"https://www.nginx.com/wp-content/uploads/2019/10/favicon-48x48.ico"},{name:"AWS",logo:"https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png"}]},{title:"Testing",imgPath:"/illustrations/svg/undraw_science_re_mnnr.svg",tools:[{name:"Jest",logo:"https://jestjs.io/img/favicon/favicon.ico"},{name:"Playwright",logo:"https://playwright.dev/img/playwright-logo.svg"},{name:"unittest (Python)",logo:"https://www.python.org/static/favicon.ico"}]},{title:"Python",imgPath:"/illustrations/svg/undraw_data_re_80ws.svg",tools:[{name:"Matplotlib",logo:"https://matplotlib.org/_static/favicon.ico"},{name:"Pandas",logo:"https://pandas.pydata.org/static/img/favicon.ico"},{name:"Numpy",logo:"https://numpy.org/images/favicon.ico"},{name:"PySide2",logo:"https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon.ico.gzip"},{name:"PyQt5",logo:"https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon.ico.gzip"},{name:"BeautifulSoup",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bowl-of-steaming-soup.svg/2533px-Bowl-of-steaming-soup.svg.png"}]},{title:"Javascript Specific",imgPath:"/illustrations/svg/undraw_online_ad_re_ol62.svg",tools:[{name:"Node.js",logo:"https://nodejs.org/static/images/favicons/favicon.png"},{name:"Typescript",logo:"https://www.typescriptlang.org//favicon-32x32.png"},{name:"P5.js",logo:"https://p5js.org/../assets/img/favicon.ico"},{name:"D3.js",logo:"https://d3js.org/logo.png"},{name:"Three.js",logo:"https://threejs.org/files/favicon_white.ico"}]}];return Ie(()=>{}),[e]}class Re extends Z{constructor(e){super(),$(this,e,Ge,Fe,J,{})}}export{Re as component};
