(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FJi0:function(t,e,a){"use strict";a.r(e);var o=a("KQm4"),n=a("q1tI"),i=a.n(n),s=a("b6MC"),l=a("Kvkj"),r=a("ijoI");e.default=function(){var t=Object(n.useState)({}),e=t[0],a=t[1],c=Object(n.useState)([]),u=c[0],p=c[1],d=Object(n.useState)(!0),m=d[0],h=d[1],b=Object(n.useState)({_limit:4,_start:0,_sort:"published_at:desc"}),f=b[0],w=b[1],g=function(t){Object(s.c)(Object(s.e)(f,t)).then((function(t){a(t)}))};return Object(n.useEffect)((function(){g()}),[]),Object(n.useEffect)((function(){e&&e.length>0?(p([].concat(Object(o.a)(u),Object(o.a)(e))),w(Object.assign({},f,{_start:f._start+f._limit})),h(e.length===f._limit)):h(!1)}),[e]),i.a.createElement(l.z,{pageContext:r},i.a.createElement(l.k,null,u.map((function(t,e){if(0===e)return i.a.createElement(l.I,{id:t.id,key:t.id+"-"+e,imagePath:""+s.a+t.image.formats.small.url,title:t.title,text:(t.description?(a=t.description,o=45,a.replace(/(<([^>]+)>)/gi,"").split(" ").splice(0,o).join(" ")):"")+"...",date:t.published_at,cta:{src:"/post/"+t.id+"/"+Object(s.b)(t.title),label:"Continue Reading"}});var a,o})),i.a.createElement(l.d,null,u.slice(1).map((function(t,e){return i.a.createElement(l.c,{id:t.id,key:t.id+"-"+e,imagePath:""+s.a+t.image.formats.small.url,title:t.title,date:t.published_at,styleType:"news",cta:{src:"/post/"+t.id+"/"+Object(s.b)(t.title)}})}))),m&&i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(l.b,{type:"button",gutter:{left:"auto",right:"auto",top:"1.5rem"},onClick:function(){g()}},"Load more news posts"))))}},ijoI:function(t){t.exports=JSON.parse('{"url":"/news","title":"News & Updates","description":"Keep up to date with the latest news, updates and promotions from West Coast Bullion, as well as market trends and insights to look out for.","template":"other","content":{"hero":{"imagePath":"news/hero.jpg","title":"News & Updates","text":"Keep up to date with the latest news, updates and promotions from West Coast Bullion, as well as market trends and insights to look out for."},"endHero":{"imagePath":"news/hero-end.jpg","title":"Our customer service has been and always will be top priority here at West Coast bullion.","text":"If you have a question please feel to call or email. One of our friendly staff will be here to help you out with any question you may have. West Coast Bullion wants to be your go-to when shopping for precious metals online, by phone or in person! With us, customer satisfaction is guaranteed.","cta":{"label":"Contact Us Today","src":"/contact"}}}}')}}]);
//# sourceMappingURL=component---src-pages-news-js-8b901409f37d2bb8a5c6.js.map