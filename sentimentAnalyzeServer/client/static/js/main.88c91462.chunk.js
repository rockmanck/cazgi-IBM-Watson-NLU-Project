(this.webpackJsonpsentimentanalyzer=this.webpackJsonpsentimentanalyzer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(2),a=n.n(s),r=n(18),c=n.n(r),o=(n(24),n(3)),u=n(4),l=n(6),d=n(5),m=(n(9),n(25),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("table",{className:"table table-bordered",children:Object(i.jsx)("tbody",{children:Object.entries(this.props.emotions).map((function(t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t[0]}),Object(i.jsx)("td",{children:t[1]})]})}))})})})}}]),n}(a.a.Component)),j=n(8),b=n.n(j),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={innercomp:Object(i.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(i.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(i.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){t.setState({sentimentOutput:e.data});var n=e.data;n="positive"===e.data?Object(i.jsxs)("div",{style:{color:"green",fontSize:20},children:[e,Object(i.jsx)("br",{}),e.data]}):"negative"===e.data?Object(i.jsx)("div",{style:{color:"red",fontSize:20},children:e.data}):Object(i.jsx)("div",{style:{color:"orange",fontSize:20},children:e.data}),t.setState({sentimentOutput:n})}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,b.a.get(e).then((function(e){t.setState({sentimentOutput:Object(i.jsx)(m,{emotions:e.data})})}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(i.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),this.state.innercomp,Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(i.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(i.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(a.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),a(t),r(t)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.88c91462.chunk.js.map