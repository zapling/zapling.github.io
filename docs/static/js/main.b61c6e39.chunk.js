(this["webpackJsonpandreaspalm.se"]=this["webpackJsonpandreaspalm.se"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(3),a=s(4),c=s(6),i=s(5),l=s(2),o=s.n(l),j=s(8),h=s.n(j),u=s(1),b=s.n(u),d=(s(14),function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={section:0},n}return Object(a.a)(s,[{key:"getBootTasks",value:function(){return[{text:"Love for tacos",status:0},{text:"Red bull junkie",status:0},{text:"Love for coffe",status:1},{text:"Love for dogs and cats",status:0},{text:"Speghetti code",status:1}]}},{key:"getDots",value:function(){for(var e=Math.floor(8*Math.random())+3,t="",s=0;s<e;s++)t+=".";return t}},{key:"render",value:function(){var e=this,t=this.getBootTasks(),s=this.getDots();return Object(n.jsxs)("div",{className:"boot",children:[Object(n.jsxs)(b.a,{cursor:this.props.cursor,delayGenerator:function(){return 1},onTypingDone:function(){return e.setState({section:1})},children:["Boot sequence",Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsxs)("li",{children:["[ ",Object(n.jsx)("span",{data:e.status,children:0===e.status?"OK":"ERROR"})," ] ",e.text]},e.text)}))})]}),1===this.state.section?Object(n.jsxs)(b.a,{cursor:this.props.cursor,delayGenerator:function(){return 100},onTypingDone:this.props.onDone,children:[s,Object(n.jsx)(b.a.Delay,{ms:500})]}):null]})}}]),s}(o.a.Component)),p=(s(15),function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={sections:[]},n}return Object(a.a)(s,[{key:"typeSection",value:function(e){var t=this.state.sections;t.push(e),this.setState({sections:t})}},{key:"getTerminalPrefix",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!0===e?"andreaspalm.se":"local";return Object(n.jsxs)("span",{className:"prefix",children:[Object(n.jsxs)("span",{className:"host",children:["me@",t]}),":",Object(n.jsx)("span",{className:"tilda",children:"~"}),Object(n.jsx)("span",{className:"dollar",children:"$"}),"\xa0"]})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"terminal",children:[this.getTerminalPrefix(),Object(n.jsx)(b.a,{style:{display:"inline"},cursor:this.props.cursor,delayGenerator:function(){return 30},onTypingDone:function(){return e.typeSection("ascii_art")},children:"ssh andreaspalm.se"}),this.state.sections.includes("ascii_art")?Object(n.jsx)(b.a,{cursor:this.props.cursor,delayGenerator:function(){return 1},onTypingDone:function(){return e.typeSection("palm.txt")},children:this.getAsciiArt()}):null,this.state.sections.includes("palm.txt")?Object(n.jsxs)("div",{children:[this.getTerminalPrefix(!0),Object(n.jsxs)(b.a,{cursor:this.props.cursor,delayGenerator:function(){return 30},onTypingDone:function(){return e.typeSection("content")},children:[Object(n.jsx)(b.a.Delay,{ms:700}),"cat palm.text"]})]}):null,this.state.sections.includes("content")?Object(n.jsx)("div",{className:"palmTxt",children:Object(n.jsxs)(b.a,{cursor:this.props.cursor,delayGenerator:function(){return 10},onTypingDone:function(){return e.typeSection("end")},children:[Object(n.jsx)("p",{children:"Hi there! I am Andreas Palm."}),Object(n.jsxs)("p",{children:["I'm currently a ",Object(n.jsx)("span",{className:"highlight",children:"[Software Developer]"})," at ",Object(n.jsx)("a",{href:"https://zimpler.com",target:"_blank",rel:"noopener noreferrer",children:"[Zimpler]"}),"."]}),Object(n.jsxs)("p",{children:["I love working with code and learning new things, and I spend most of my days in the terminal. I'm a ",Object(n.jsx)("span",{className:"highlight",children:"back-end"})," developer currently exploring ",Object(n.jsx)("span",{className:"highlight",children:"Go"}),", with previous experience in ",Object(n.jsx)("span",{className:"highlight",children:"PHP"})," and ",Object(n.jsx)("span",{className:"highlight",children:"Python"}),"."]}),Object(n.jsx)("p",{children:"Navigating the seas of the web is nothing new to me and I travel reguarly between servers both via SSH and HTTP(S)."}),Object(n.jsxs)("p",{children:["I'm always interested in opportunities and challenges to make me an even better coder. Don't hesitate to contact me at ",Object(n.jsx)("span",{className:"highlight",children:"me[a]andreaspalm.se"}),", feel free to encrypt your message if you feel sneaky ",Object(n.jsx)("a",{className:"gpg",href:"public_key.txt",target:"_blank",rel:"noopener noreferrer",children:"[GPG Key]"}),"."]}),Object(n.jsx)("p",{children:"Here is some hyperlinks \u2926\ufe0f"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://linkedin.com/in/palm-andreas",target:"_blank",rel:"noopener noreferrer",children:"[LinkedIn]"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/zapling",target:"_blank",rel:"noopener noreferrer",children:"[Github]"})})]}),Object(n.jsx)("p",{children:"Cheers!"})]})}):null,this.state.sections.includes("end")?Object(n.jsx)("div",{children:this.getTerminalPrefix(!0)}):null]})}},{key:"getAsciiArt",value:function(){return Object(n.jsx)("pre",{children:Object(n.jsxs)("span",{className:"leaves",children:["            ","___","   ","____",Object(n.jsx)("br",{}),"          ","/' --;^/ ,-_\\       ",Object(n.jsx)("span",{className:"sun",children:"\\ | /"}),Object(n.jsx)("br",{}),"         ","/ /--o\\ o-\\   \\     ",Object(n.jsx)("span",{className:"sun",children:"--(_)--"}),Object(n.jsx)("br",{}),"        ","/-/-/|o",Object(n.jsx)("span",{className:"bark",children:"|-|"}),"\\-\\|  \\","     ",Object(n.jsx)("span",{className:"sun",children:"/ | \\"}),Object(n.jsx)("br",{}),"         ","'`  ` ",Object(n.jsx)("span",{className:"bark",children:"|-|"})," `` '",Object(n.jsx)("br",{}),"               ",Object(n.jsx)("span",{className:"bark",children:"|-|"}),Object(n.jsx)("br",{}),"               ",Object(n.jsx)("span",{className:"bark",children:"|-|"}),Object(n.jsx)("span",{className:"human",children:"O"}),Object(n.jsx)("br",{}),"               ",Object(n.jsx)("span",{className:"bark",children:"|-"}),Object(n.jsx)("span",{className:"human",children:"(\\\\,__"}),Object(n.jsx)("br",{}),"            ",Object(n.jsx)("span",{className:"sand",children:"..."}),Object(n.jsx)("span",{className:"bark",children:"|-|"}),Object(n.jsx)("span",{className:"human",children:"\\\\--,\\\\_"}),Object(n.jsxs)("span",{className:"sand",children:["....",Object(n.jsx)("br",{}),"        ",",;;;;;;;;;;;;;;;;;;;;;;;;,."]}),Object(n.jsx)("br",{}),"  ",Object(n.jsx)("span",{className:"water",children:"~~"}),Object(n.jsx)("span",{className:"sand",children:",;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,"}),Object(n.jsxs)("span",{className:"water",children:["~~~",Object(n.jsx)("br",{}),"  ","~"]}),Object(n.jsx)("span",{className:"sand",children:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,"}),Object(n.jsx)("span",{className:"water",children:"~~~~~"})]})})}}]),s}(o.a.Component)),x=(s(16),function(e){Object(c.a)(s,e);var t=Object(i.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={sequence:0,cursor:{show:!1}},n}return Object(a.a)(s,[{key:"render",value:function(){var e=this;switch(this.state.sequence){case 0:return Object(n.jsx)(d,{cursor:this.state.cursor,onDone:function(){return e.setState({sequence:1})}});case 1:default:return Object(n.jsx)(p,{cursor:this.state.cursor})}}}]),s}(o.a.Component));h.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b61c6e39.chunk.js.map