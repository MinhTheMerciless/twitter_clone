(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{1713:function(e,t,a){var n={"./ReadMe.md":1714,"./af_ZA":133,"./af_ZA.js":133,"./ar":134,"./ar.js":134,"./az":135,"./az.js":135,"./cz":136,"./cz.js":136,"./de":137,"./de.js":137,"./de_AT":138,"./de_AT.js":138,"./de_CH":139,"./de_CH.js":139,"./el":140,"./el.js":140,"./en":141,"./en.js":141,"./en_AU":142,"./en_AU.js":142,"./en_AU_ocker":143,"./en_AU_ocker.js":143,"./en_BORK":144,"./en_BORK.js":144,"./en_CA":145,"./en_CA.js":145,"./en_GB":146,"./en_GB.js":146,"./en_GH":147,"./en_GH.js":147,"./en_IE":148,"./en_IE.js":148,"./en_IND":149,"./en_IND.js":149,"./en_NG":150,"./en_NG.js":150,"./en_US":151,"./en_US.js":151,"./en_ZA":152,"./en_ZA.js":152,"./es":153,"./es.js":153,"./es_MX":154,"./es_MX.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fr":157,"./fr.js":157,"./fr_CA":158,"./fr_CA.js":158,"./fr_CH":159,"./fr_CH.js":159,"./ge":160,"./ge.js":160,"./hr":161,"./hr.js":161,"./hy":162,"./hy.js":162,"./id_ID":163,"./id_ID.js":163,"./it":164,"./it.js":164,"./ja":165,"./ja.js":165,"./ko":166,"./ko.js":166,"./nb_NO":167,"./nb_NO.js":167,"./ne":168,"./ne.js":168,"./nl":169,"./nl.js":169,"./nl_BE":170,"./nl_BE.js":170,"./pl":171,"./pl.js":171,"./pt_BR":172,"./pt_BR.js":172,"./pt_PT":173,"./pt_PT.js":173,"./ro":174,"./ro.js":174,"./ru":175,"./ru.js":175,"./sk":176,"./sk.js":176,"./sv":177,"./sv.js":177,"./tr":178,"./tr.js":178,"./uk":179,"./uk.js":179,"./vi":180,"./vi.js":180,"./zh_CN":181,"./zh_CN.js":181,"./zh_TW":182,"./zh_TW.js":182,"./zu_ZA":183,"./zu_ZA.js":183};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=1713},1840:function(e,t,a){},1841:function(e,t,a){},1842:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),i=a.n(r),o=(a(212),a(34)),c=a(35),l=a(50),u=a(40),m=a(38),d={API_URL:"/api/",GET_RANDOM_TWEET_URL:"/api/getRandomTweet/",GET_POST_FROM_ID:"/api/getPostFromID/",GET_POSTER_INFO_URL:"/api/getUserInfo/",GET_VIEWERS_URL:"/api/viewers/",GET_IDs_FROM_VIEWER_URL:"/api/ViewerToId/"},f=(a(213),a(184)),p=a.n(f);a(214);var _=function(e){var t=e.active,a=e.text,n=e.Icon,r=e.onClick;return s.a.createElement("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),onClick:r},s.a.createElement(n,null),s.a.createElement("h2",{className:"text"},a))},h=a(189),v=a.n(h),g=a(52),E=a.n(g),j=a(190),N=a.n(j),w=a(191),b=a.n(w),I=a(192),k=a.n(I),O=a(193),y=a.n(O),x=a(194),R=a.n(x),S=a(195),L=a.n(S),T=a(1872),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"sidebar"},s.a.createElement(p.a,{className:"sidebar__twitterIcon"}),s.a.createElement(_,{Icon:v.a,text:"Home"}),s.a.createElement(_,{Icon:E.a,text:"Explore"}),s.a.createElement(_,{Icon:N.a,text:"Notifications"}),s.a.createElement(_,{Icon:b.a,text:"Messages"}),s.a.createElement(_,{Icon:k.a,text:"Bookmarks"}),s.a.createElement(_,{Icon:y.a,text:"Lists"}),s.a.createElement(_,{active:!0,Icon:R.a,text:"Profile",onClick:this.props.nextViewer}),s.a.createElement(_,{Icon:L.a,text:"More"}),s.a.createElement(T.a,{variant:"outlined",className:"sidebar__tweet"},"Tweet"))}}]),a}(s.a.Component),U=a(33),A=a.n(U),D=a(60),B=(a(237),a(1873)),G=a(196),M=a.n(G).a.initializeApp({apiKey:"AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",authDomain:"twitter-clone-1faac.firebaseapp.com",databaseURL:"https://twitter-clone-1faac.firebaseio.com",projectId:"twitter-clone-1faac",storageBucket:"twitter-clone-1faac.appspot.com",messagingSenderId:"316208638057",appId:"1:316208638057:web:75a37bf24fab32ff145af8",measurementId:"G-HGFP2LDXP9"}).firestore();var P=function(){var e=Object(n.useState)(""),t=Object(D.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(D.a)(i,2),c=o[0],l=o[1];return s.a.createElement("div",{className:"tweetBox"},s.a.createElement("form",null,s.a.createElement("div",{className:"tweetBox__input"},s.a.createElement(B.a,{src:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),s.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})),s.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},className:"tweetBox__imageInput",placeholder:"Optional: Enter image URL",type:"text"}),s.a.createElement(T.a,{onClick:function(e){e.preventDefault(),M.collection("posts").add({displayName:"Rafeh Qazi",username:"cleverqazi",verified:!0,text:a,image:c,avatar:"https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),r(""),l("")},type:"submit",className:"tweetBox__tweetButton"},"Tweet")))},z=a(59),W=a.n(z),F=(a(253),a(197)),H=a.n(F),V=a(198),q=a.n(V),J=a(199),K=a.n(J),X=a(200),Z=a.n(X),Q=Object(n.forwardRef)((function(e,t){var a,n=e.displayName,r=e.username,i=e.verified,o=e.text,c=e.image,l=e.avatar;e.explanation;return W.a.canPlay(c)?(a=s.a.createElement("div",{className:"player-wrapper"},s.a.createElement(W.a,{url:c,muted:!0,loop:!0,playing:!1,height:"45vh",width:null},s.a.createElement("div",null))),console.log("play!")):""!==c&&null!=c&&(a=s.a.createElement("img",{src:c,alt:""})),s.a.createElement("div",{className:"post",ref:t},s.a.createElement("div",{className:"post__avatar"},s.a.createElement(B.a,{src:l})),s.a.createElement("div",{className:"post__body"},s.a.createElement("div",{className:"post__header"},s.a.createElement("div",{className:"post__headerText"},s.a.createElement("h3",null,n," ",s.a.createElement("span",{className:"post__headerSpecial"},i&&s.a.createElement(H.a,{className:"post__badge"})," @",r))),s.a.createElement("div",{className:"post__headerDescription"},s.a.createElement("p",null,o))),a,s.a.createElement("div",{className:"post__footer"},s.a.createElement(q.a,{fontSize:"small"}),s.a.createElement(K.a,{fontSize:"small"}),s.a.createElement(Z.a,{fontSize:"small"}))))})),$=(a(254),a(202)),Y=a(203);function ee(){return Object(Y.a)().schema("user",{firstName:{faker:"name.firstName"},lastName:{faker:"name.lastName"},username:{function:function(){return this.object.firstName+this.object.lastName}},displayName:{function:function(){return this.object.firstName+" "+this.object.lastName}}},1).buildSync().user[0]}var te=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addPost=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=function(e){console.log("Adding post"),n.setState({loading:!0});var t=n.state.idList.splice(Math.floor(Math.random()*n.state.idList.length),1),a=d.GET_POST_FROM_ID+t+"/";console.log("Getting post from: "+a),A.a.get(a).then((function(e){var a=e.data[0],s=d.GET_POSTER_INFO_URL+a.poster+"/";a.image.startsWith("api:")&&(A.a.get(a.image.substring(4)).then((function(e){return a.image=e.data})).catch((function(e){return console.log(e+"\u2014retrieving from "+a.image.substring(4))})),a.image="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"),a.text.startsWith("[repeat]")&&(a.text=a.text.substring(8),n.state.idList.push(t)),A.a.get(s).then((function(e){var t=e.data[0];if(a.username=t.username,a.displayName=t.displayName,a.avatar=t.avatar,a.verified=t.verified,a.username.startsWith("random:")){var s=ee();a.username=s.username,a.displayName=s.displayName}n.setState({posts:n.state.posts.concat(a),loading:!1}),n.forceUpdate()})).catch((function(e){console.log("axios error with getting user info: "+e),n.setState({loading:!1})}))})).catch((function(e){console.log("axios error: "+e),n.setState({loading:!1})}))},a=0;a<e&&n.state.idList.length>0;a++)t(a)},n.handleScroll=function(e){e.preventDefault();var t=Math.round(e.target.scrollHeight-e.target.scrollTop);if(n.state.idList.length>0){if(t<=Math.ceil(e.target.clientHeight)+300)if(!0===n.state.loading)0==n.state.queue&&(n.state.queue=!0);else for(var a=0;a<3&&n.state.idList.length>0;a++)n.addPost()}else console.log("Out of posts!")},n.handleClick=function(){n.forceUpdate()},n.state={loading:!1,queue:!1,posts:[],idList:[],viewedList:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.addPost()}},{key:"componentDidUpdate",value:function(e){var t=this;if(1==this.state.queue&&(this.addPost(),this.state.queue=!1),e.viewer!==this.props.viewer){this.setState({posts:[],loading:!0});var a=d.GET_IDs_FROM_VIEWER_URL+this.props.viewer+"/";console.log("Getting IDs from: "+a),A.a.get(a).then((function(e){var a=e.data;console.log(a),t.setState({idList:a});for(var n=0;n<6;n++)t.addPost();t.setState({loading:!1})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){return s.a.createElement("div",{className:"feed",onScroll:this.handleScroll},s.a.createElement("div",{className:"feed__header"},s.a.createElement("h2",null,"Home")),s.a.createElement(P,null),s.a.createElement($.a,null,this.state.posts.map((function(e,t){return s.a.createElement(Q,{key:t,username:e.username,displayName:e.displayName,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))),s.a.createElement("button",{onClick:this.handleClick,color:"--twitter-color"}," ooh button! "))}}]),a}(s.a.Component);a(1840),a(1844);var ae=function(){return s.a.createElement("div",{className:"widgets"},s.a.createElement("div",{className:"widgets__input"},s.a.createElement(E.a,{className:"widgets__searchIcon"}),s.a.createElement("input",{placeholder:"Search Barker",type:"text"})),s.a.createElement("div",{className:"widgets__widgetContainer"},s.a.createElement("h2",null,"What's happening")))},ne=(a(1841),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={viewerNum:0,viewersList:[]},n.nextViewer=n.nextViewer.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.a.get(d.GET_VIEWERS_URL).then((function(t){e.setState({viewersList:t.data}),console.log("Recieved users: "+e.state.viewersList)})).catch((function(e){return console.log("Error retrieving viewers list: "+e)}))}},{key:"nextViewer",value:function(){this.state.viewerNum<=this.state.viewersList.length-2?this.setState({viewerNum:this.state.viewerNum+1}):this.setState({viewerNum:0})}},{key:"render",value:function(){return s.a.createElement("html",{lang:"en"},s.a.createElement("div",{className:"app"},s.a.createElement(C,{nextViewer:this.nextViewer}),s.a.createElement(te,{viewer:this.state.viewersList[this.state.viewerNum]}),s.a.createElement(ae,null)))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},207:function(e,t,a){e.exports=a(1842)},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},237:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){}},[[207,14,15]]]);
//# sourceMappingURL=main.1d90cc0b.chunk.js.map