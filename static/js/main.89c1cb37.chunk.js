(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),c=(a(80),a(19)),i=a(22),o=a(24),u=a(23),h=a(25),d=(a(81),a(82),a(72)),m=a.n(d),p=a(27),f=a.n(p),E=a(47),v=a.n(E),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"nameCell",value:function(){return[r.a.createElement("span",{key:"name"},this.props.name)]}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.nameCell()))}}]),t}(r.a.Component),g=function e(t){Object(c.a)(this,e),this.name=t},y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).refreshServicesFromWD=function(t){e.setState({refreshing:!0});var a=new URL("https://query.wikidata.org/sparql"),n={query:e.sparql_query,format:"json"},r=null;if("GET"===t)Object.keys(n).forEach(function(e){return a.searchParams.append(e,n[e])}),r=fetch(a);else{var l=new URLSearchParams;Object.keys(n).forEach(function(e){return l.append(e,n[e])}),r=fetch(a,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:l})}r.then(function(e){return e.json()}).then(function(t){return e.setState({services:t.results.bindings.map(function(e){return new g(e.datasetLabel.value)}),refreshing:!1})}).catch(function(t){console.log(t),e.setState({refreshing:!1})})},e.openAddServiceDialog=function(){e.setState({showAddServiceDialog:!0})},e.closeAddServiceDialog=function(){e.setState({showAddServiceDialog:!1})},e.state={services:[],showAddServiceDialog:!1,refreshing:!1},e.sparql_query='SELECT ?datasetLabel WHERE {\n     wd:Q114171774 wdt:P527 ?dataset .\n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\nORDER BY DESC(?datasetLabel)\n',e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshServicesFromWD("GET")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"))),r.a.createElement("tbody",null,this.state.services.map(function(e){return r.a.createElement(b,{name:e.name})}))),r.a.createElement(v.a,{onClick:this.openAddServiceDialog},r.a.createElement("span",{className:"glyphicon glyphicon-plus"})," Add a dataset"),"\xa0\xa0\xa0",r.a.createElement(v.a,{onClick:function(){return e.refreshServicesFromWD("POST")},disabled:this.state.refreshing},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"})," ",this.state.refreshing?"Refreshing\u2026":"Refresh table"),r.a.createElement(f.a,{show:this.state.showAddServiceDialog,onHide:this.closeAddServiceDialog},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"How to add a dataset to this list")),r.a.createElement(f.a.Body,null,r.a.createElement("p",null,"This list is generated by ",r.a.createElement("a",{href:this.sparqlQueryUrl},"a SPARQL query on Wikidata"),". To add your service to it, follow these steps:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Add a statement 'has part' to the LDFI Data Catalog that points to your dataset."),r.a.createElement("li",null,"Refresh this table - it might take a few minutes before your service appears in the table.")))))}},{key:"sparqlQueryUrl",get:function(){return"https://query.wikidata.org/#"+encodeURIComponent(this.sparql_query)}}]),t}(r.a.Component),w=a(1),S=a(33);function k(e){var t=e.to,a=e.title,n=e.exact,l=Object(w.e)({path:t,exact:n})?"active":"";return r.a.createElement("li",{role:"presentation",className:l},r.a.createElement(S.b,{to:t},a))}function O(e){var t=e.style;return r.a.createElement("div",{className:"tabContent",style:t},r.a.createElement("p",null,"This table lists stats from Wikidata"),r.a.createElement(y,null))}var j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={selectedEndpoint:"",servicesMap:{},openTab:"servicesList",refreshing:!1,servicesList:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement("div",{className:"App",style:{margin:"20px"}},r.a.createElement("h1",null,"Artsdata Widget"),r.a.createElement("p",{style:{float:"right"}},r.a.createElement("a",{href:"https://github.com/culturecreates/artsdata-widget"},"Source repository")),r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement(k,{to:"/",title:"Statistics",exact:"true"}),r.a.createElement(k,{to:"/client/",title:"More"})),r.a.createElement(w.a,{exact:!0,path:"/",children:function(e){var t=e.match;return r.a.createElement(O,{style:{display:t?"block":"none"}})}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(164)},80:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.89c1cb37.chunk.js.map