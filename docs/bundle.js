!function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],f=0,d=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={0:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/coviz19";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([49,1]),n()}({15:function(t,e,n){"use strict";(function(t){var r=n(33),a=n.n(r),c=n(22),o=n(23),i=n(35),u=function(t){var e=document.createElement("canvas"),n=e.getContext("2d");e.style.width=320,e.style.height=44,e.style.imageRendering="-moz-crisp-edges",e.style.imageRendering="pixelated";for(var r=0;r<320;++r)n.fillStyle=t(r/319),n.fillRect(r,0,1,44);return e};e.a=function(e){var n=e.attributes,r=n.domain,s=n.width,l=n.color,f=Object(c.a)(t("svg",{className:a.a.legend,width:320,height:44}));f.append((function(){return t("image",{x:0,y:0,width:s,height:44,preserveAspectRatio:"none",href:u(l).toDataURL()})}));var d=Object(o.a)().domain(r).range([0,s]);return f.append((function(){return t("g",{transform:"translate(0, 20)"})})).call(Object(i.a)(d).ticks()),f.node()}}).call(this,n(4).h)},19:function(t,e,n){t.exports={app:"app__2q9tN",footer:"footer__k4FgR"}},20:function(t,e,n){t.exports={dateLabel:"dateLabel__2RrZE"}},21:function(t,e,n){t.exports={dateLabel:"dateLabel__2lKsz"}},28:function(t,e,n){"use strict";(function(t,r){var a=n(5),c=n.n(a),o=n(2),i=n.n(o),u=n(11),s=n.n(u),l=n(20),f=n.n(l),d=n(41),p=n(39),h=n(8),b=n(22),v=n(36),m=n(40),j=n(23),g=(n(27),n(42)),y=n(37),O=n(15),_=Object(m.a)("%m/%d/%y"),x=Object(b.a)(t("svg",{viewBox:[0,0,975,610],width:975,height:610}));(function(){var e=s()(c.a.mark((function e(){var n,r,a,o,u,s,l,b,m,O,w,S,D,I,C,k,L,U;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json");case 2:return n=e.sent,e.next=5,fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv");case 5:return r=e.sent,e.next=8,r.text();case 8:return a=e.sent,e.next=11,n.json();case 11:o=e.sent,u=Object(d.a)(a).filter((function(t){return t.UID.slice(3).length>0})),s=Object(h.a)(o,o.objects.counties).features,l=Object(h.a)(o,o.objects.states).features,b=Object(g.a)(s,(function(t){return t.id})),m=u[0],O=Object.keys(m).filter(_).sort((function(t,e){return _(t)>_(e)})),w=i()(O.map((function(t){return[t,u.map((function(e){return{id:e.UID.slice(3),deaths:e[t],feature:(b.get(e.UID.slice(3))||[])[0]}}))]}))),S=function(t){var e=i()(w)[t],n=_(e[0]);return Object(v.a)(".".concat(f.a.dateLabel)).text(n.toLocaleDateString()),e[1].filter((function(t){return t.deaths>0}))},D=Object(j.a)([0,100],y.a),I=Object(p.a)(),C=x.append((function(){return t("g",null)})),x.append((function(){return t("g",null)})).selectAll("path").data(l).join((function(e){return e.append((function(e){return t("path",{stroke:"#ccc","stroke-linejoin":"round",fill:"none",d:I(e)})}))})),k=function(e){C.selectAll("path").data(e,(function(t){return t.id})).join((function(e){return e.append((function(e){return t("path",{stroke:"#ccc","stroke-linejoin":"round",fill:D(e.deaths),d:I(e.feature)})})).call((function(t){return t.style("opacity",0).transition(250).style("opacity",1)}))}),(function(t){return t.call((function(t){return t.transition(250).style("fill",(function(t){return D(t.deaths)}))}))}),(function(t){return t.call((function(t){return t.transition(250).style("opacity",0).remove()}))}))},L=0,U=setInterval((function(){if(L>=i()(w).length)clearInterval(U);else{var t=S(L);k(t),L++}}),250);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();e.a=function(){return t(r,null,t("h1",null,"US COVID-19 Deaths per day"),t("h1",{className:f.a.dateLabel}),x.node(),t(O.a,{domain:[0,100],width:320,color:y.a}),t("a",{href:"https://github.com/ScottORLY/coviz19/blob/master/src/deaths/index.js"},"source code"))}}).call(this,n(4).h,n(4).f)},33:function(t,e,n){t.exports={legend:"legend__1KYfF"}},34:function(t,e,n){"use strict";(function(t,r){var a=n(5),c=n.n(a),o=n(2),i=n.n(o),u=n(11),s=n.n(u),l=n(21),f=n.n(l),d=n(15),p=n(41),h=n(39),b=n(8),v=n(22),m=n(36),j=n(40),g=n(23),y=(n(27),n(42)),O=n(38),_=Object(j.a)("%m/%d/%y"),x=Object(v.a)(t("svg",{viewBox:[0,0,975,610],width:975,height:610}));(function(){var e=s()(c.a.mark((function e(){var n,r,a,o,u,s,l,d,v,j,w,S,D,I,C,k,L,U;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json");case 2:return n=e.sent,e.next=5,fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv");case 5:return r=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.next=11,r.text();case 11:o=e.sent,u=Object(p.a)(o).filter((function(t){return t.UID.slice(3).length>0})),s=Object(b.a)(a,a.objects.counties).features,l=Object(b.a)(a,a.objects.states).features,d=Object(y.a)(s,(function(t){return t.id})),v=u[0],j=Object.keys(v).filter(_).sort((function(t,e){return _(t)>_(e)})),w=i()(j.map((function(t){return[t,u.map((function(e){return{id:e.UID.slice(3),cases:e[t],feature:(d.get(e.UID.slice(3))||[])[0]}}))]}))),S=function(t){var e=i()(w)[t],n=_(e[0]);return Object(m.a)(".".concat(f.a.dateLabel)).text(n.toLocaleDateString()),e[1].filter((function(t){return t.cases>0}))},D=Object(g.a)([0,500],O.a),I=Object(h.a)(),x.append((function(){return t("g",null)})).selectAll("path").data(l).join((function(e){return e.append((function(e){return t("path",{stroke:"#ccc","stroke-linejoin":"round",fill:"none",d:I(e)})}))})),C=x.append((function(){return t("g",null)})),k=function(e){C.selectAll("path").data(e,(function(t){return t.id})).join((function(e){return e.append((function(e){return t("path",{stroke:"#ccc","stroke-linejoin":"round",fill:"none",d:I(e.feature)})})).call((function(t){return t.style("opacity",0).transition(250).style("opacity",1)}))}),(function(t){return t.call((function(t){return t.transition(250).style("fill",(function(t){return D(t.cases)}))}))}),(function(t){return t.call((function(t){return t.transition(250).style("opacity",0).remove()}))}))},L=0,U=setInterval((function(){if(L>=i()(w).length)clearInterval(U);else{var t=S(L);k(t),L++}}),250);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();e.a=function(){return t(r,null,t("h1",null,"US Confirmed COVID-19 Cases per day"),t("h1",{className:f.a.dateLabel}),x.node(),t(d.a,{domain:[0,500],width:320,color:O.a}),t("a",{href:"https://github.com/ScottORLY/coviz19/blob/master/src/cases/index.js"},"source code"))}}).call(this,n(4).h,n(4).f)},49:function(t,e,n){t.exports=n(50)},50:function(t,e,n){"use strict";n.r(e),function(t){var e=n(19),r=n.n(e),a=n(28),c=n(34);document.head.appendChild(t("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"})),document.body.appendChild(t("div",{id:r.a.app},t(c.a,null),t(a.a,null),t("div",{className:r.a.footer},t("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Novel Coronavirus (COVID-19) Cases data provided by JHU CSSE"))))}.call(this,n(4).h)}});