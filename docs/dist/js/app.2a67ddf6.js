(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],f=0,h=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0648":function(t,e,r){},"1c2a":function(t,e,r){"use strict";r("0648")},"1d49":function(t,e,r){"use strict";r("471f")},"471f":function(t,e,r){},"50c8":function(t,e,r){"use strict";r("6a52")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("router-link",{staticClass:"header-title",attrs:{to:"/"}},[r("h1",[t._v("— Motley Money Review —")])])],1),r("router-view")],1)},n=[],i=(r("034f"),r("2877")),c={},o=Object(i["a"])(c,a,n,!1,null,null,null),l=o.exports,u=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"actions"},[r("button",{staticClass:"sort",attrs:{name:"sortByDate"},on:{click:function(e){t.sortByDate=!t.sortByDate}}},[t._v(t._s(t.sortByDate?"↓ Sort By Oldest":"↑ Sort By Newest"))]),r("div",{staticClass:"search-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"article-search",attrs:{type:"text",placeholder:"Search Articles"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),r("div",{staticClass:"articles-grid"},t._l(t.filteredOrSortedArticles,(function(t){return r("div",{key:t.uuid,staticClass:"result-list"},[r("ArticleSummary",{attrs:{result:t}})],1)})),0)])},h=[],p=(r("d3b7"),r("ac1f"),r("841c"),r("4de4"),r("caad"),r("4e82"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("div",{staticClass:"image-container"},[r("img",{staticClass:"article-image",attrs:{src:t.result.images[0].image,alt:t.result.images[0].name}})]),r("div",{staticClass:"article-details"},[r("router-link",{staticClass:"headline",attrs:{to:{name:"ArticlePage",params:{result:t.result,path:t.result.path}}}},[r("h2",[t._v(t._s(t.result.headline))])]),r("p",{staticClass:"article-pitch",domProps:{innerHTML:t._s(t.result.pitch.text)}})],1)])}),d=[],m={name:"ArticleSummary",props:{result:Object,stocks:Array}},v=m,b=(r("50c8"),Object(i["a"])(v,p,d,!1,null,"4b0dfe28",null)),_=b.exports,y={name:"Home",components:{ArticleSummary:_},data:function(){return{count:"",results:[],search:"",sortByDate:!0,stocks:[]}},created:function(){var t=this;fetch("http://127.0.0.1:8000/content").then((function(t){return t.json()})).then((function(e){return t.results=e.results})).then((function(e){return t.gatherStocks(e)})).catch((function(t){return console.log({error:t})}))},computed:{filteredOrSortedArticles:function(){var t=this,e=this.results;return""!=this.search&&this.search&&(e=e.filter((function(e){for(var r=[],s=0;s<e.tags.length;s++)r.push(e.tags[s].slug.toLowerCase());return r.includes(t.search.toLowerCase())}))),e=e.sort((function(e,r){return!0===t.sortByDate?Date.parse(r.publish_at)-Date.parse(e.publish_at):Date.parse(e.publish_at)-Date.parse(r.publish_at)})),e}},methods:{gatherStocks:function(t){for(var e=0;e<t.length;e++)for(var r=0;r<t[e].instruments.length;r++)this.$store.state.stocks.push(t[e].instruments[r])}}},g=y,C=(r("1d49"),Object(i["a"])(g,f,h,!1,null,"3da7ae60",null)),k=C.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("router-link",{staticClass:"back-link",attrs:{to:"/"}},[t._v("←Back")]),r("div",{staticClass:"article"},[r("h1",{staticClass:"article-headline"},[t._v(t._s(t.article.headline))]),r("div",{staticClass:"about-article"},[r("h3",[t._v(t._s(t.article.authors&&t.article.authors[0].byline))]),r("h3",{staticClass:"article-date"},[t._v(t._s(this.date))])]),r("p",{staticClass:"full-article",domProps:{innerHTML:t._s(t.article.body)}}),r("textarea",{staticClass:"comments",attrs:{name:"comments",rows:"10",placeholder:"What did you think of that article? Tell us."}}),r("button",{staticClass:"button"},[t._v("Send")])]),r("SideBar",{staticClass:"sidebar"})],1)},w=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side-bar"},[t._l(t.stocks.slice(0,3),(function(e){return r("div",{key:e.instrument_id,staticClass:"stock"},[r("p",{staticClass:"stock-company"},[t._v(t._s(e.company_name))]),r("p",[t._v("TICK: "+t._s(e.symbol))]),r("a",{staticClass:"more-info",attrs:{href:e.links.content}},[t._v("More Info")])])})),r("button",{staticClass:"button",on:{click:function(e){return t.shuffleStocks(t.stocks)}}},[t._v("Shuffle Stocks!")])],2)},j=[],x={name:"SideBar",data:function(){return{stocks:[]}},created:function(){this.stocks=this.$store.state.stocks},methods:{shuffleStocks:function(t){t.sort((function(){return Math.random()-.5}))}}},B=x,P=(r("afa1"),Object(i["a"])(B,O,j,!1,null,"99d869fa",null)),D=P.exports,A={name:"ArticlePage",components:{SideBar:D},props:["result"],data:function(){return{article:Object,date:String}},mounted:function(){this.result&&(this.article=this.result,this.date=new Date(this.result.publish_at).toDateString())}},M=A,$=(r("1c2a"),Object(i["a"])(M,S,w,!1,null,"e6145870",null)),T=$.exports;s["a"].use(u["a"]);var E=[{path:"/",name:"Home",component:k},{path:"/:path",name:"ArticlePage",props:!0,component:T}],H=new u["a"]({mode:"history",base:"/",routes:E,scrollBehavior:function(){return{x:0,y:0}}}),L=H,I=r("2f62");s["a"].use(I["a"]);var J=new I["a"].Store({state:{stocks:[]}});s["a"].config.productionTip=!1,new s["a"]({router:L,store:J,render:function(t){return t(l)}}).$mount("#app")},6948:function(t,e,r){},"6a52":function(t,e,r){},"85ec":function(t,e,r){},afa1:function(t,e,r){"use strict";r("6948")}});
//# sourceMappingURL=app.2a67ddf6.js.map