(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{1752:function(e,t,a){var n={"./ReadMe.md":1753,"./af_ZA":155,"./af_ZA.js":155,"./ar":156,"./ar.js":156,"./az":157,"./az.js":157,"./cz":158,"./cz.js":158,"./de":159,"./de.js":159,"./de_AT":160,"./de_AT.js":160,"./de_CH":161,"./de_CH.js":161,"./el":162,"./el.js":162,"./en":163,"./en.js":163,"./en_AU":164,"./en_AU.js":164,"./en_AU_ocker":165,"./en_AU_ocker.js":165,"./en_BORK":166,"./en_BORK.js":166,"./en_CA":167,"./en_CA.js":167,"./en_GB":168,"./en_GB.js":168,"./en_GH":169,"./en_GH.js":169,"./en_IE":170,"./en_IE.js":170,"./en_IND":171,"./en_IND.js":171,"./en_NG":172,"./en_NG.js":172,"./en_US":173,"./en_US.js":173,"./en_ZA":174,"./en_ZA.js":174,"./es":175,"./es.js":175,"./es_MX":176,"./es_MX.js":176,"./fa":177,"./fa.js":177,"./fi":178,"./fi.js":178,"./fr":179,"./fr.js":179,"./fr_CA":180,"./fr_CA.js":180,"./fr_CH":181,"./fr_CH.js":181,"./ge":182,"./ge.js":182,"./hr":183,"./hr.js":183,"./hy":184,"./hy.js":184,"./id_ID":185,"./id_ID.js":185,"./it":186,"./it.js":186,"./ja":187,"./ja.js":187,"./ko":188,"./ko.js":188,"./nb_NO":189,"./nb_NO.js":189,"./ne":190,"./ne.js":190,"./nl":191,"./nl.js":191,"./nl_BE":192,"./nl_BE.js":192,"./pl":193,"./pl.js":193,"./pt_BR":194,"./pt_BR.js":194,"./pt_PT":195,"./pt_PT.js":195,"./ro":196,"./ro.js":196,"./ru":197,"./ru.js":197,"./sk":198,"./sk.js":198,"./sv":199,"./sv.js":199,"./tr":200,"./tr.js":200,"./uk":201,"./uk.js":201,"./vi":202,"./vi.js":202,"./zh_CN":203,"./zh_CN.js":203,"./zh_TW":204,"./zh_TW.js":204,"./zu_ZA":205,"./zu_ZA.js":205};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=1752},1908:function(e,t){},1910:function(e,t){},1921:function(e,t){},1923:function(e,t){},1950:function(e,t){},1952:function(e,t){},1953:function(e,t){},1959:function(e,t){},1961:function(e,t){},1979:function(e,t){},1982:function(e,t){},1998:function(e,t){},2001:function(e,t){},2004:function(e,t,a){},2005:function(e,t,a){},2006:function(e,t,a){},2007:function(e,t,a){},2008:function(e,t,a){},2009:function(e,t,a){},2010:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(29),r=a.n(s),o=(a(294),a(22)),l=a(23),c=a(30),u=a(25),m=a(24),d={API_URL:"/api/",GET_WHOLE_TWEET_URL:"/api/wholePost/",GET_POST_FROM_ID:"/api/getPostFromID/",GET_VIEWERS_URL:"/api/viewers/",GET_IDs_FROM_VIEWER_URL:"/api/ViewerToId/",GET_ARTICLE_FROM_ID_URL:"/api/article/"};a(295),a(296);var p=function(e){var t=e.active,a=e.text,n=e.Icon,s=e.onClick;return i.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),onClick:s},i.a.createElement(n,null),i.a.createElement("h2",{className:"text"},a))},h=a(267),f=a.n(h),v=a(68),_=a.n(v),E=a(272),g=a.n(E),b=a(273),j=a.n(b),k=a(274),w=a.n(k),y=a(275),C=a.n(y),N=a(69),x=a.n(N),O=a(70),I=a.n(O),S=a(2041),L=a(264),T=a.n(L),A=a(93);function R(e){for(var t=e.split(""),a=[],n=t.length,i=0;i<n;i++){var s=Math.floor(Math.random()*t.length);a.push(t[s]),t.splice(s,1)}return a.join("")}function D(){var e=Object(A.a)().schema("item",{date:{faker:"date.past"}},1).buildSync().item[0].date;return console.log("Generated fake date: "+String(e)),e}function M(){return Object(A.a)().schema("user",{firstName:{faker:"name.firstName"},lastName:{faker:"name.lastName"},username:{function:function(){return this.object.firstName+this.object.lastName}},displayName:{function:function(){return this.object.firstName+" "+this.object.lastName}}},1).buildSync().user[0]}var z=a(266),W=a.n(z),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"playAudio",value:function(){document.getElementsByClassName("bark-sound")[0].play()}},{key:"render",value:function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("img",{className:"sidebar__twitterIcon",src:T.a,alt:"Barker Icon"}),i.a.createElement(p,{active:!0,Icon:f.a,text:R("Home")}),i.a.createElement(p,{Icon:_.a,text:"Explore"}),i.a.createElement(p,{Icon:g.a,text:R("Notifications")}),i.a.createElement(p,{Icon:j.a,text:R("Messages")}),i.a.createElement(p,{Icon:w.a,text:R("Bookmarks")}),i.a.createElement(p,{Icon:C.a,text:R("Lists")}),i.a.createElement(p,{Icon:x.a,text:"Profile",onClick:this.props.nextViewer}),i.a.createElement(p,{Icon:I.a,text:"More",onClick:function(){return window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")}}),i.a.createElement(S.a,{variant:"outlined",className:"sidebar__tweet",onClick:this.playAudio},"Bark"),i.a.createElement("audio",{className:"bark-sound"},i.a.createElement("source",{src:W.a})))}}]),a}(i.a.Component),U=a(35),B=a.n(U),G=a(92),H=a.n(G),F=a(276),V=a.n(F),Z=a(277),q=a.n(Z),X=(a(1906),a(2004),a(2043)),J=a(2040),K=a(2044),$=a(278),Q=a.n($),Y=a(279),ee=a.n(Y),te=a(280),ae=a.n(te),ne=a(282),ie=a.n(ne),se=a(281),re=a.n(se),oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isFlipped:!1,isPaused:!1,blurb:"",liked:!1},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e,t,a,n=this,s=String(this.props.media);if(a=""===this.props.explanation||void 0===this.props.explanation?"This Bark current does not have an explanation":this.props.explanation.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'" target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),t=this.props.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),s.startsWith("news:")){var r=[window.location.origin,"news",s.substring(5)].join("/");e=i.a.createElement("a",{className:"news__a",href:r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(X.a,{className:"news__card",style:{paddingRight:"20px"}},i.a.createElement(J.a,{image:this.props.img}),i.a.createElement("div",{className:"cardTextDiv"},this.props.text.split(" ").slice(0,20).join(" ")+"..."))),t=(t=this.props.text).substring(0,t.length-3)}else if(H.a.canPlay(s))e=i.a.createElement(q.a,{onChange:this.visibilityChange},(function(e){var t,a,r=e.isVisible;return window.innerWidth<420?(a="auto",t="70vw"):window.innerWidth<1024?(a="20vw",t="35vw"):(a="40vh",t="90%"),i.a.createElement("div",{className:"player-wrapper"},i.a.createElement(H.a,{height:a,width:t,url:s,loop:!0,muted:!0,playing:r&&!n.state.isPaused,onClick:function(){return n.setState({isPaused:!0})},config:{youtube:{playerVars:{controls:1,disablekb:1,modestbranding:1,rel:0,color:"white"}}}},i.a.createElement("div",null)))})),console.log("play!");else if(""===s||null==s){var o=this.props.img;e=o?i.a.createElement("img",{src:o}):i.a.createElement("div",null)}else e=i.a.createElement("img",{src:s,alt:""});var l=i.a.createElement(V.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical"},i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:a}}));return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__avatar"},i.a.createElement(K.a,{src:this.props.avatar})),i.a.createElement("div",{className:"post__body"},i.a.createElement("div",{className:"post__header"},i.a.createElement("div",{className:"post__headerText"},i.a.createElement("h3",{onClick:this.handleClick},this.props.displayName," ",i.a.createElement("span",{className:"post__headerSpecial"},this.props.verified&&i.a.createElement(Q.a,{className:"post__badge"})," @",this.props.username))),i.a.createElement("div",{className:"post__headerDescription"},l)),e,i.a.createElement("div",{className:"post__footer"},i.a.createElement(ee.a,{fontSize:"small"}),i.a.createElement(ae.a,{fontSize:"small"}),i.a.createElement("a",{style:{display:"block",cursor:"pointer"},onClick:function(){return n.setState({liked:!n.state.liked})}},this.state.liked?i.a.createElement(re.a,{fontSize:"small",style:{color:"rgb(224, 36, 94)"}}):i.a.createElement(ie.a,{fontSize:"small"})))))}}]),a}(i.a.Component),le=(a(2005),a(283)),ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addPost=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=function(e){n.setState({loading:!0});var t=n.state.idList.splice(Math.floor(Math.random()*n.state.idList.length),1),a=d.GET_WHOLE_TWEET_URL+t+"/";B.a.get(a).then((function(e){n.setState({loading:!0});var a=e.data;if(a.username.startsWith("random:")){var i=M();a.username=i.username,a.displayName=i.displayName}a.media.startsWith("api:")&&(B.a.get(a.media.substring(4)).then((function(e){return a.media=e.data})).catch((function(e){return console.log(e+"\u2014retrieving from "+a.media.substring(4))})),a.media="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"),a.text.startsWith("[repeat]")&&(a.text=a.text.substring(8),n.state.idList.push(t)),n.setState({posts:n.state.posts.concat(a),loading:!1})})).catch((function(e){return"Error retrieving post: "+e})),n.setState({loading:!1})},a=0;a<e&&n.state.idList.length>0;a++)t(a)},n.handleScroll=function(e){e.preventDefault();var t=Math.round(e.target.scrollHeight-e.target.scrollTop);n.state.idList.length>0?t<=Math.ceil(e.target.clientHeight)+500&&(!0===n.state.loading?!1===n.state.queue&&(n.state.queue=!0):n.addPost(2)):console.log("Out of posts!")},n.state={loading:!1,queue:!1,posts:[],idList:[],viewedList:[]},n.homeClick=n.moreClick.bind(Object(c.a)(n)),n.exploreClick=n.exploreClick.bind(Object(c.a)(n)),n.profileClick=n.profileClick.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t,a){return!0}},{key:"componentDidMount",value:function(){this.addPost(3)}},{key:"componentDidUpdate",value:function(e){!0===this.state.queue&&(this.addPost(),this.state.queue=!1),e.viewer!==this.props.viewer&&this.updateIdList()}},{key:"updateIdList",value:function(){var e=this;this.setState({posts:[],loading:!0});var t=d.GET_IDs_FROM_VIEWER_URL+this.props.viewer+"/";console.log("Getting IDs from: "+t),B.a.get(t).then((function(t){var a=t.data;console.log(a),e.setState({idList:a}),e.setState({loading:!1}),e.addPost(6)})).catch((function(e){console.log(e)}))}},{key:"moreClick",value:function(){console.log("Clicked moreClick"),window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")}},{key:"exploreClick",value:function(){console.log("Clicked exploreClick")}},{key:"profileClick",value:function(){console.log("Clicked profileClick")}},{key:"render",value:function(){var e=this,t=null;return t=window.innerWidth>420?i.a.createElement("h2",null,"Home"):i.a.createElement("h2",null,i.a.createElement("div",{className:"topIconDiv"},i.a.createElement(x.a,{classname:"topIcon",onClick:this.profileClick}),i.a.createElement(_.a,{classname:"topIcon",onClick:this.exploreClick}),i.a.createElement(I.a,{classname:"topIcon",onClick:this.moreClick}))),i.a.createElement("div",{className:"feed",onScroll:this.handleScroll},i.a.createElement("div",{className:"feed__header"},t),i.a.createElement(le.a,null,this.state.posts.map((function(e,t){return i.a.createElement(oe,{key:t,username:e.username,displayName:e.displayName,verified:e.verified,text:e.text,explanation:e.explanation,avatar:e.avatar,media:e.media,img:e.img})}))),i.a.createElement("button",{onClick:function(){return e.addPost()}},"click"))}}]),a}(i.a.Component),ue=(a(2006),a(2007),a(2042)),me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(ue.a,{body:!0,outline:!0,color:"primary",style:{padding:"20px",border:"0",borderTop:"1px solid rgb(235, 238, 240)",borderBottom:"1px solid rgb(235, 238, 240)"}},this.props.text)}}]),a}(i.a.Component);var de=function(){return i.a.createElement("div",{className:"widgets"},i.a.createElement("div",{className:"topTextContainer"},i.a.createElement("div",{className:"topTextContainer__div"},i.a.createElement("h2",{className:"topText"},"Latest News"),i.a.createElement("div",{className:"NewsCards",style:{paddingTop:"10px"}},i.a.createElement(me,{text:"Lorem Ipsum Dolor Sit Amet"})))))},pe=(a(2008),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:"",title:"",image_url:""},n}return Object(l.a)(a,[{key:"getArticle",value:function(){var e=this;console.log("Getting article "+this.props.id),B.a.get(d.GET_ARTICLE_FROM_ID_URL+this.props.id+"/").then((function(t){var a,n=t.data,i=n.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank style="cursor: pointer"">'+(arguments[7]||arguments[2])+"</a>"}));if(null===n.title||""===n.title){var s=[];String(n.text).split(" ").slice(0,6).forEach((function(e){s.push(R(e))})),a=s.join(" ").replace(".","")}else a=n.title;e.setState({title:a,text:i}),e.forceUpdate()})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getArticle()}},{key:"render",value:function(){return console.log("Article with id: "+this.props.id),i.a.createElement("html",{class:"wf-montserrat-n4-active wf-sourcesanspro-n2-active wf-active"},i.a.createElement("head",null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("script",{src:"http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js",type:"text/javascript"})),i.a.createElement("body",{class:"mybody"},i.a.createElement("header",null,i.a.createElement("div",{class:"profileLogo",style:{height:"5vh"}},i.a.createElement("p",{class:"logoPlaceholder"},i.a.createElement("img",{src:"logoImage.png",alt:"logo"})))),i.a.createElement("section",{class:"mainContent"},i.a.createElement("section",{class:"section2"},i.a.createElement("article",{class:"section2Content"},i.a.createElement("h2",{class:"sectionContentTitle"},this.state.title),i.a.createElement("h3",{class:"sectionContentSubTitle"},D().toLocaleString()),i.a.createElement("hr",{class:"myhr"}),i.a.createElement("p",{class:"sectionContent",dangerouslySetInnerHTML:{__html:this.state.text}}))))))}}]),a}(i.a.Component)),he=(a(2009),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={viewerNum:0,viewersList:[]},n.nextViewer=n.nextViewer.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;"/"===window.location.pathname&&B.a.get(d.GET_VIEWERS_URL).then((function(t){e.setState({viewersList:t.data}),console.log("Recieved users: "+e.state.viewersList)})).catch((function(e){return console.log("Error retrieving viewers list: "+e)}))}},{key:"nextViewer",value:function(){window.scrollTo(0,0),this.state.viewerNum<=this.state.viewersList.length-2?this.setState({viewerNum:this.state.viewerNum+1}):this.setState({viewerNum:0}),console.log("Changed viewer to "+this.state.viewersList[this.state.viewerNum])}},{key:"render",value:function(){var e=window.location.pathname,t=null;if("/"===e&&(t=i.a.createElement("div",{className:"app"},i.a.createElement(P,{nextViewer:this.nextViewer}),i.a.createElement(ce,{viewer:this.state.viewersList[this.state.viewerNum]}),i.a.createElement(de,null))),e.startsWith("/news/")){var a=e.substr(6);a.endsWith("/")&&(a=a.substr(0,a.length-1)),t=i.a.createElement(pe,{id:a})}return null==t&&(t=i.a.createElement("div",null,"Error 404: Not Found")),i.a.createElement("html",{lang:"en"},t)}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},264:function(e,t,a){e.exports=a.p+"static/media/BarkerLogo.fae0bab6.png"},266:function(e,t,a){e.exports=a.p+"static/media/dog.d3963826.mp3"},289:function(e,t,a){e.exports=a(2010)},294:function(e,t,a){},295:function(e,t,a){},296:function(e,t,a){}},[[289,14,15]]]);
//# sourceMappingURL=main.2be1e882.chunk.js.map