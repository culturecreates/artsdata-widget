(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),i=(a(80),a(19)),c=a(22),o=a(24),u=a(23),d=a(25),h=(a(81),a(82),a(72)),m=a.n(h),p=a(27),E=a.n(p),f=a(47),b=a.n(f),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"nameCell",value:function(){return[r.a.createElement("span",{key:"name"},this.props.datasetLabel)]}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:this.props.dataset},this.nameCell())),r.a.createElement("td",null,this.props.typeLabel),r.a.createElement("td",null,this.props.count))}}]),t}(r.a.Component),v=function e(t,a,n,r){Object(i.a)(this,e),this.dataset=t,this.datasetLabel=a,this.count=n,this.typeLabel=r},w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).refreshServicesFromWD=function(t){e.setState({refreshing:!0});var a=new URL("https://query.wikidata.org/sparql"),n={query:e.sparql_query,format:"json"},r=null;if("GET"===t)Object.keys(n).forEach(function(e){return a.searchParams.append(e,n[e])}),r=fetch(a);else{var l=new URLSearchParams;Object.keys(n).forEach(function(e){return l.append(e,n[e])}),r=fetch(a,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:l})}r.then(function(e){return e.json()}).then(function(t){return e.setState({services:t.results.bindings.map(function(e){return new v(e.dataset.value,e.datasetLabel.value,e.count.value,e.typeLabel.value)}),refreshing:!1})}).catch(function(t){console.log(t),e.setState({refreshing:!1})})},e.openAddServiceDialog=function(){e.setState({showAddServiceDialog:!0})},e.closeAddServiceDialog=function(){e.setState({showAddServiceDialog:!1})},e.state={services:[],showAddServiceDialog:!1,refreshing:!1},e.sparql_query='SELECT  distinct ?dataset ?datasetLabel (count(distinct ?item) as ?count)  ?typeLabel WHERE {\n  wd:Q114171774 wdt:P527 ?dataset .\n  optional {  ?item  ?someProperty [ prov:wasDerivedFrom [ pr:P248 ?dataset ] ] ;   wdt:P31/wdt:P279* ?type .\n  filter( ?type = wd:Q43229 || ?type = wd:Q5 || ?type = wd:Q17350442 || ?type = wd:Q17538722 ) }\n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\ngroup by  ?dataset ?datasetLabel ?typeLabel ORDER BY ?datasetLabel\n',e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refreshServicesFromWD("GET")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Dataset"),r.a.createElement("td",null,"General Type"),r.a.createElement("td",null,"Entities Enriched"))),r.a.createElement("tbody",null,this.state.services.map(function(e){return r.a.createElement(y,{dataset:e.dataset,datasetLabel:e.datasetLabel,typeLabel:e.typeLabel,count:e.count})}))),r.a.createElement(b.a,{onClick:function(){return e.refreshServicesFromWD("POST")},disabled:this.state.refreshing},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"})," ",this.state.refreshing?"Refreshing\u2026 may take up to 1 minute":"Refresh table"),"\xa0\xa0\xa0",r.a.createElement(b.a,{onClick:this.openAddServiceDialog},r.a.createElement("span",{className:"glyphicon glyphicon-plus"})," Add a dataset"),r.a.createElement(E.a,{show:this.state.showAddServiceDialog,onHide:this.closeAddServiceDialog},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,"How to add a dataset to this list")),r.a.createElement(E.a.Body,null,r.a.createElement("p",null,"This list is generated by a"," ",r.a.createElement("a",{href:this.sparqlQueryUrl},"SPARQL query on Wikidata"),". To add your dataset follow these steps:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Ensure that your contributions have a reference statement 'stated in (P248)' that points to your dataset."),r.a.createElement("li",null,"Ensure that your dataset is a subclass of 'data set (Q1172284)' "),r.a.createElement("li",null,"Add a statement 'has part' to the"," ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Q114171774"},"LDFI Data Catalog")," ","that points to your dataset."),r.a.createElement("li",null,"Refresh this table - it might take a few minutes before your dataset appears in the table.")))))}},{key:"sparqlQueryUrl",get:function(){return"https://query.wikidata.org/#"+encodeURIComponent(this.sparql_query)}}]),t}(r.a.Component),g=a(1),k=a(33);function L(e){var t=e.to,a=e.title,n=e.exact,l=Object(g.e)({path:t,exact:n})?"active":"";return r.a.createElement("li",{role:"presentation",className:l},r.a.createElement(k.b,{to:t},a))}function S(e){var t=e.style;return r.a.createElement("div",{className:"tabContent",style:t},r.a.createElement("h3",null,"LDFI Contributions to Wikidata"),r.a.createElement("p",null,"This table lists datasets participating in the"," ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Q114171774"},"LDFI Data Catalog")," ","along with the number of Wikidata entities they enriched. Statements added to an entity must have the reference 'stated in (P248)' in order to be included in this table."),r.a.createElement(w,null))}function O(e){var t=e.style;return r.a.createElement("div",{className:"tabContent",style:t},r.a.createElement("h3",null,"Calendar"))}var j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={selectedEndpoint:"",servicesMap:{},openTab:"servicesList",refreshing:!1,servicesList:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",{className:"App",style:{margin:"20px"}},r.a.createElement("p",{style:{float:"right"}},r.a.createElement("a",{href:"https://github.com/culturecreates/artsdata-widget"},"Source repository")),r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement(L,{to:"/",title:"LDFI Wikidata",exact:"true"}),r.a.createElement(L,{to:"/calendar/",title:"Calendar",exact:"true"})),r.a.createElement(g.a,{exact:!0,path:"/",children:function(e){var t=e.match;return r.a.createElement(S,{style:{display:t?"block":"none"}})}}),r.a.createElement(g.a,{exact:!0,path:"/calendar/",children:function(e){var t=e.match;return r.a.createElement(O,{style:{display:t?"block":"none"}})}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(164)},80:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.5f02d13d.chunk.js.map