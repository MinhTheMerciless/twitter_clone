(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{1676:function(e,t,a){var n={"./ReadMe.md":1677,"./af_ZA":124,"./af_ZA.js":124,"./ar":125,"./ar.js":125,"./az":126,"./az.js":126,"./cz":127,"./cz.js":127,"./de":128,"./de.js":128,"./de_AT":129,"./de_AT.js":129,"./de_CH":130,"./de_CH.js":130,"./el":131,"./el.js":131,"./en":132,"./en.js":132,"./en_AU":133,"./en_AU.js":133,"./en_AU_ocker":134,"./en_AU_ocker.js":134,"./en_BORK":135,"./en_BORK.js":135,"./en_CA":136,"./en_CA.js":136,"./en_GB":137,"./en_GB.js":137,"./en_GH":138,"./en_GH.js":138,"./en_IE":139,"./en_IE.js":139,"./en_IND":140,"./en_IND.js":140,"./en_NG":141,"./en_NG.js":141,"./en_US":142,"./en_US.js":142,"./en_ZA":143,"./en_ZA.js":143,"./es":144,"./es.js":144,"./es_MX":145,"./es_MX.js":145,"./fa":146,"./fa.js":146,"./fi":147,"./fi.js":147,"./fr":148,"./fr.js":148,"./fr_CA":149,"./fr_CA.js":149,"./fr_CH":150,"./fr_CH.js":150,"./ge":151,"./ge.js":151,"./hr":152,"./hr.js":152,"./hy":153,"./hy.js":153,"./id_ID":154,"./id_ID.js":154,"./it":155,"./it.js":155,"./ja":156,"./ja.js":156,"./ko":157,"./ko.js":157,"./nb_NO":158,"./nb_NO.js":158,"./ne":159,"./ne.js":159,"./nl":160,"./nl.js":160,"./nl_BE":161,"./nl_BE.js":161,"./pl":162,"./pl.js":162,"./pt_BR":163,"./pt_BR.js":163,"./pt_PT":164,"./pt_PT.js":164,"./ro":165,"./ro.js":165,"./ru":166,"./ru.js":166,"./sk":167,"./sk.js":167,"./sv":168,"./sv.js":168,"./tr":169,"./tr.js":169,"./uk":170,"./uk.js":170,"./vi":171,"./vi.js":171,"./zh_CN":172,"./zh_CN.js":172,"./zh_TW":173,"./zh_TW.js":173,"./zu_ZA":174,"./zu_ZA.js":174};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=1676},1830:function(e,t,a){},1831:function(e,t,a){},1832:function(e,t,a){},1833:function(e,t,a){},1834:function(e,t,a){},1835:function(e,t,a){},1836:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(215),a(15)),l=a(16),c=a(18),u=a(17),m={API_URL:"/api/",GET_WHOLE_TWEET_URL:"/api/wholePost/",GET_POST_FROM_ID:"/api/getPostFromID/",GET_VIEWERS_URL:"/api/viewers/",GET_IDs_FROM_VIEWER_URL:"/api/ViewerToId/",GET_ARTICLE_FROM_ID_URL:"/api/article/"};a(216),a(217);var d=function(e){var t=e.active,a=e.text,n=e.Icon,r=e.onClick;return i.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),onClick:r},i.a.createElement(n,null),i.a.createElement("h2",{className:"text"},a))},p=a(189),h=a.n(p),f=a(49),v=a.n(f),E=a(50),_=a.n(E),g=a(51),k=a.n(g),b=a(1875),j=a(1878),w=a(1880),C=a(1881),y=a(186),N=a.n(y),x=a(61);function O(e){for(var t=e.split(""),a=[],n=t.length,i=0;i<n;i++){var r=Math.floor(Math.random()*t.length);a.push(t[r]),t.splice(r,1)}return a.join("")}function S(){var e=Object(x.a)().schema("item",{date:{faker:"date.past"}},1).buildSync().item[0].date;return console.log("Generated fake date: "+String(e)),e}function I(){return Object(x.a)().schema("user",{firstName:{faker:"name.firstName"},lastName:{faker:"name.lastName"},username:{function:function(){return this.object.firstName+this.object.lastName}},displayName:{function:function(){return this.object.firstName+" "+this.object.lastName}}},1).buildSync().user[0]}var T=a(188),L=a.n(T),A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e){e.preventDefault(),n.setState({anchorEl:!Boolean(n.state.anchorEl)&&e.currentTarget})},n.state={anchorEl:!1},n}return Object(l.a)(a,[{key:"bark",value:function(){document.getElementsByClassName("bark-sound")[0].play()}},{key:"render",value:function(){var e=this,t=this.props.viewers;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("img",{className:"sidebar__twitterIcon",src:N.a,alt:"Barker Icon"}),i.a.createElement(d,{active:!0,Icon:h.a,text:O("Home")}),i.a.createElement(d,{Icon:v.a,text:"Explore"}),i.a.createElement(d,{Icon:_.a,text:"Profile",onClick:this.handleClick}),i.a.createElement(d,{Icon:k.a,text:"More",onClick:function(){return window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")}}),i.a.createElement(b.a,{variant:"outlined",className:"sidebar__tweet",onClick:this.bark},"Bark"),i.a.createElement("audio",{className:"bark-sound"},i.a.createElement("source",{src:L.a})),i.a.createElement(j.a,{id:"viewers-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),disableEnforceFocus:!0,onClose:function(){return e.setState({anchorEl:!1})}},t.list.map((function(e,a){return i.a.createElement(w.a,{key:a,onClick:function(){return t.setNum(a)}},i.a.createElement("div",{class:"viewerOptionAvatarDiv",style:{padding:"5px"}},i.a.createElement(C.a,{src:"/api/img/Website/"+String(Math.round(1e3*Math.random()))})),i.a.createElement("div",{class:"viewerOptionText"},e))}))))}}]),a}(i.a.Component),R=a(28),D=a(29),M=a.n(D),z=a(60),W=a.n(z),P=a(194),U=a.n(P),B=a(195),G=a.n(B),H=(a(1830),a(1876)),F=a(1877),Z=a(196),V=a.n(Z),q=a(197),X=a.n(q),J=a(198),K=a.n(J),$=a(200),Q=a.n($),Y=a(199),ee=a.n(Y),te=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isFlipped:!1,isPaused:!1,blurb:"",liked:!1},n.handleClick=n.handleClick.bind(Object(R.a)(n)),n}return Object(l.a)(a,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){var e,t,a,n=this,r=String(this.props.media);if(a=""===this.props.explanation||void 0===this.props.explanation?"This Bark current does not have an explanation":this.props.explanation.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'" target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),t=this.props.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank">'+(arguments[7]||arguments[2])+"</a>"})),r.startsWith("news:")){var s=[window.location.origin,"news",r.substring(5)].join("/");e=i.a.createElement("a",{className:"news__a",href:s,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(H.a,{className:"news__card",style:{paddingRight:"20px"}},i.a.createElement(F.a,{image:this.props.img}),i.a.createElement("div",{className:"cardTextDiv"},this.props.text.split(" ").slice(0,20).join(" ")+"..."))),t=(t=this.props.text).substring(0,t.length-3)}else if(W.a.canPlay(r))e=i.a.createElement(G.a,{onChange:this.visibilityChange},(function(e){var t,a,s=e.isVisible;return window.innerWidth<420?(a="auto",t="70vw"):window.innerWidth<1024?(a="20vw",t="35vw"):(a="40vh",t="90%"),i.a.createElement("div",{className:"player-wrapper"},i.a.createElement(W.a,{height:a,width:t,url:r,loop:!0,muted:!0,playing:s&&!n.state.isPaused,onClick:function(){return n.setState({isPaused:!0})},config:{youtube:{playerVars:{controls:1,disablekb:1,modestbranding:1,rel:0,color:"white"}}}},i.a.createElement("div",null)))})),console.log("play!");else if(""===r||null==r){var o=this.props.img;e=o?i.a.createElement("img",{src:o}):i.a.createElement("div",null)}else e=i.a.createElement("img",{src:r,alt:""});var l=i.a.createElement(U.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical"},i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("p",{className:"text",dangerouslySetInnerHTML:{__html:a}}));return i.a.createElement("div",{className:"post"},i.a.createElement("div",{className:"post__avatar"},i.a.createElement(C.a,{src:this.props.avatar})),i.a.createElement("div",{className:"post__body"},i.a.createElement("div",{className:"post__header"},i.a.createElement("div",{className:"post__headerText"},i.a.createElement("h3",{onClick:this.handleClick},this.props.displayName," ",i.a.createElement("span",{className:"post__headerSpecial"},this.props.verified&&i.a.createElement(V.a,{className:"post__badge"})," @",this.props.username))),i.a.createElement("div",{className:"post__headerDescription"},l)),e,i.a.createElement("div",{className:"post__footer"},i.a.createElement(X.a,{fontSize:"small"}),i.a.createElement(K.a,{fontSize:"small"}),i.a.createElement("a",{style:{display:"block",cursor:"pointer"},onClick:function(){return n.setState({liked:!n.state.liked})}},this.state.liked?i.a.createElement(ee.a,{fontSize:"small",style:{color:"rgb(224, 36, 94)"}}):i.a.createElement(Q.a,{fontSize:"small"})))))}}]),a}(i.a.Component),ae=(a(1831),a(201)),ne=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addPost=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=function(e){n.setState({loading:!0});var t=n.state.idList.splice(Math.floor(Math.random()*n.state.idList.length),1),a=m.GET_WHOLE_TWEET_URL+t+"/";M.a.get(a).then((function(e){n.setState({loading:!0});var a=e.data;if(a.username.startsWith("random:")){var i=I();a.username=i.username,a.displayName=i.displayName}a.media.startsWith("api:")&&(M.a.get(a.media.substring(4)).then((function(e){return a.media=e.data})).catch((function(e){return console.log(e+"\u2014retrieving from "+a.media.substring(4))})),a.media="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"),a.text.startsWith("[repeat]")&&(a.text=a.text.substring(8),n.state.idList.push(t)),n.setState({posts:n.state.posts.concat(a),loading:!1})})).catch((function(e){return"Error retrieving post: "+e})),n.setState({loading:!1})},a=0;a<e&&n.state.idList.length>0;a++)t(a)},n.handleScroll=function(e){e.preventDefault();var t=Math.round(e.target.scrollHeight-e.target.scrollTop);n.state.idList.length>0?t<=Math.ceil(e.target.clientHeight)+500&&(!0===n.state.loading?!1===n.state.queue&&(n.state.queue=!0):n.addPost(2)):console.log("Out of posts!")},n.state={loading:!1,queue:!1,posts:[],idList:[],viewedList:[]},n.homeClick=n.moreClick.bind(Object(R.a)(n)),n.exploreClick=n.exploreClick.bind(Object(R.a)(n)),n.profileClick=n.profileClick.bind(Object(R.a)(n)),n}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t,a){return!0}},{key:"componentDidMount",value:function(){this.addPost(3)}},{key:"componentDidUpdate",value:function(e,t){!0===this.state.queue&&(this.addPost(),this.state.queue=!1),e.viewers.list[e.viewers.num]!==this.props.viewers.list[this.props.viewers.num]&&this.updateIdList()}},{key:"updateIdList",value:function(){var e=this;this.setState({posts:[],loading:!0});var t=this.props.viewers.list[this.props.viewers.num],a=m.GET_IDs_FROM_VIEWER_URL+t+"/";console.log("Getting IDs from: "+a),M.a.get(a).then((function(t){var a=t.data;console.log(a),e.setState({idList:a}),e.setState({loading:!1}),e.addPost(6)})).catch((function(e){console.log(e)}))}},{key:"moreClick",value:function(){console.log("Clicked moreClick"),window.open("https://github.com/LeoLinRui/SSTP/wiki","_blank")}},{key:"exploreClick",value:function(){console.log("Clicked exploreClick")}},{key:"profileClick",value:function(){console.log("Clicked profileClick")}},{key:"render",value:function(){var e=this,t=null;return t=window.innerWidth>420?i.a.createElement("h2",null,"Home"):i.a.createElement("h2",null,i.a.createElement("div",{className:"topIconDiv"},i.a.createElement(_.a,{classname:"topIcon",onClick:this.profileClick}),i.a.createElement(v.a,{classname:"topIcon",onClick:this.exploreClick}),i.a.createElement(k.a,{classname:"topIcon",onClick:this.moreClick}))),i.a.createElement("div",{className:"feed",onScroll:this.handleScroll},i.a.createElement("div",{className:"feed__header"},t),i.a.createElement(ae.a,null,this.state.posts.map((function(e,t){return i.a.createElement(te,{key:t,username:e.username,displayName:e.displayName,verified:e.verified,text:e.text,explanation:e.explanation,avatar:e.avatar,media:e.media,img:e.img})}))),i.a.createElement("button",{onClick:function(){return e.addPost()}},"click"))}}]),a}(i.a.Component),ie=(a(1832),a(1833),a(1879)),re=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(ie.a,{body:!0,outline:!0,color:"primary",style:{padding:"20px",border:"0",borderTop:"1px solid rgb(235, 238, 240)",borderBottom:"1px solid rgb(235, 238, 240)"}},this.props.text)}}]),a}(i.a.Component);var se=function(){return i.a.createElement("div",{className:"widgets"},i.a.createElement("div",{className:"topTextContainer"},i.a.createElement("div",{className:"topTextContainer__div"},i.a.createElement("h2",{className:"topText"},"Latest News"),i.a.createElement("div",{className:"NewsCards",style:{paddingTop:"10px"}},i.a.createElement(re,{text:"Lorem Ipsum Dolor Sit Amet"})))))},oe=(a(1834),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={text:"",title:"",image_url:""},n}return Object(l.a)(a,[{key:"getArticle",value:function(){var e=this;console.log("Getting article "+this.props.id),M.a.get(m.GET_ARTICLE_FROM_ID_URL+this.props.id+"/").then((function(t){var a,n=t.data,i=n.text.replace(/(<a href=")?((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))(">(.*)<\/a>)?/gi,(function(){return'<a href="'+arguments[2]+'"target="_blank style="cursor: pointer"">'+(arguments[7]||arguments[2])+"</a>"}));if(null===n.title||""===n.title){var r=[];String(n.text).split(" ").slice(0,6).forEach((function(e){r.push(O(e))})),a=r.join(" ").replace(".","")}else a=n.title;e.setState({title:a,text:i}),e.forceUpdate()})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getArticle()}},{key:"render",value:function(){return console.log("Article with id: "+this.props.id),i.a.createElement("html",{class:"wf-montserrat-n4-active wf-sourcesanspro-n2-active wf-active"},i.a.createElement("head",null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("script",{src:"http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js",type:"text/javascript"})),i.a.createElement("body",{class:"mybody"},i.a.createElement("header",null,i.a.createElement("div",{class:"profileLogo",style:{height:"5vh"}},i.a.createElement("p",{class:"logoPlaceholder"},i.a.createElement("img",{src:"logoImage.png",alt:"logo"})))),i.a.createElement("section",{class:"mainContent"},i.a.createElement("section",{class:"section2"},i.a.createElement("article",{class:"section2Content"},i.a.createElement("h2",{class:"sectionContentTitle"},this.state.title),i.a.createElement("h3",{class:"sectionContentSubTitle"},S().toLocaleString()),i.a.createElement("hr",{class:"myhr"}),i.a.createElement("p",{class:"sectionContent",dangerouslySetInnerHTML:{__html:this.state.text}}))))))}}]),a}(i.a.Component)),le=(a(1835),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setViewer=function(e){window.scrollTo(0,0),n.setState({viewerNum:e})},n.state={viewerNum:0,viewersList:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;"/"===window.location.pathname&&M.a.get(m.GET_VIEWERS_URL).then((function(t){e.setState({viewersList:t.data}),console.log("Recieved users: "+e.state.viewersList)})).catch((function(e){return console.log("Error retrieving viewers list: "+e)}))}},{key:"render",value:function(){var e=window.location.pathname,t=null;if("/"===e){var a={list:this.state.viewersList,num:this.state.viewerNum,setNum:this.setViewer};t=i.a.createElement("div",{className:"app"},i.a.createElement(A,{viewers:a}),i.a.createElement(ne,{viewers:a}),i.a.createElement(se,null))}if(e.startsWith("/news/")){var n=e.substr(6);n.endsWith("/")&&(n=n.substr(0,n.length-1)),t=i.a.createElement(oe,{id:n})}return null==t&&(t=i.a.createElement("div",{style:{fontSize:"xx-large"}},"Error 404: Not Found")),i.a.createElement("html",{lang:"en"},t)}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},186:function(e,t,a){e.exports=a.p+"static/media/BarkerLogo.fae0bab6.png"},188:function(e,t,a){e.exports=a.p+"static/media/dog.d3963826.mp3"},210:function(e,t,a){e.exports=a(1836)},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){}},[[210,14,15]]]);
//# sourceMappingURL=main.636d6f3f.chunk.js.map