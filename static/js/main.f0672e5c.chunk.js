(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),s=a.n(r),c=a(9),o=a.n(c),i=a(17),u=a(2),m=a(3),d=a(6),p=a(5),h=a(7),E=a(4),g=function(){function e(){Object(u.a)(this,e)}return Object(m.a)(e,null,[{key:"getStatement",value:function(e){return e>4.75?"\u0645\u0645\u062a\u0627\u0632 \u0645\u0631\u062a\u0641\u0639":e>4.5?"\u0645\u0645\u062a\u0627\u0632":e>4?"\u062c\u064a\u062f \u062c\u062f\u0627\u064b \u0645\u0631\u062a\u0641\u0639":e>3.5?"\u062c\u064a\u062f \u062c\u062f\u0623":e>3?"\u062c\u064a\u062f \u0645\u0631\u062a\u0641\u0639":e>2.5?"\u062c\u064a\u062f":e>2?"\u0645\u0642\u0628\u0648\u0644 \u0645\u0631\u062a\u0641\u0639 ":"\u0645\u0642\u0628\u0648\u0644"}},{key:"getGradePoint",value:function(e){switch(e){case"A+":return 5;case"A":return 4.75;case"B+":return 4.5;case"B":return 4;case"C+":return 3.5;case"C":return 3;case"D+":return 2.5;case"D":return 2;default:return null}}},{key:"getSumPointsAndHours",value:function(t){for(var a=0,n=0,l=0;l<t.length;l++)if(t[l].checked){var r=parseFloat(e.getGradePoint(t[l].grade)),s=parseFloat(t[l].hours);a+=s,n+=r*s}return{sumHours:a,sumPoints:n}}}]),e}(),b=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=5,a=g.getSumPointsAndHours(this.props.state.subjects),n=a.sumHours,r=a.sumPoints;return t=r/n,e=g.getStatement(t),l.a.createElement("fieldset",{style:{display:"inline"},dir:"rtl"},l.a.createElement("legend",null,"\u0627\u0644\u0641\u0635\u0644\u064a"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title"},"\u0627\u0644\u0646\u0642\u0627\u0637")),l.a.createElement("td",null,l.a.createElement("p",null,r.toFixed(2)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title"},"\u0627\u0644\u0645\u0639\u062f\u0644")),l.a.createElement("td",null,l.a.createElement("p",null,t.toFixed(2)))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title"},"\u0627\u0644\u062a\u0642\u062f\u064a\u0631")),l.a.createElement("td",null,l.a.createElement("p",null,e))))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="-",t=5,a=0,n=0,r=this.props.state,s=r.method,c=parseFloat(r.gpa),o=parseFloat(r.points),i=parseFloat(r.hours),u=g.getSumPointsAndHours(this.props.state.subjects),m=u.sumHours,d=u.sumPoints;return t=d/m,e=g.getStatement(t),"gpa"===s?isNaN(c)||isNaN(i)?(d=0,e="-",t=0):(n=(a=c*i+d)/(i+m),e=g.getStatement(n)):isNaN(o)||isNaN(i)?(d=0,e="-",t=0):(n=(a=o+d)/(i+m),e=g.getStatement(n)),l.a.createElement("fieldset",{style:{display:"inline"},dir:"rtl"},l.a.createElement("legend",null,"\u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title",style:0!==a||0!==n?{}:{marginLeft:10}},"\u0627\u0644\u0646\u0642\u0627\u0637")),l.a.createElement("td",null,l.a.createElement("p",null,0!==a||0!==n?a.toFixed(2):"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title",style:0!==a||0!==n?{}:{marginLeft:10}},"\u0627\u0644\u0645\u0639\u062f\u0644")),l.a.createElement("td",null,l.a.createElement("p",null,0!==a||0!==n?n.toFixed(2):"-"))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("p",{className:"title",style:0!==a||0!==n?{}:{marginLeft:10}},"\u0627\u0644\u062a\u0642\u062f\u064a\u0631")),l.a.createElement("td",null,l.a.createElement("p",null,e))))))}}]),t}(n.Component),v=a(18),y=a.n(v),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={subjects:[],hours:"",gpa:"",points:"",method:"gpa",studentID:"",studentPassword:"",isFetching:!1,isError:!1,errorMessage:"\u062d\u062f\u062b \u062e\u0637\u0623"},a.fetchUserInformation=Object(i.a)(o.a.mark(function e(){var t,n,l;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isFetching:!0}),t=a.state,n=t.studentID,l=t.studentPassword,e.next=4,y.a.post("https://ksu-edugate-scraping-wadahesam.c9users.io/getStudentInformation",{id:n,password:l}).then(function(e){if("Somthing Wrong Happened"===e.data)throw new Error("Somthing Wrong Happened");var t=e.data,n=t.gpa,l=t.hours,r=t.points,s=t.subjects;a.setState({gpa:n,hours:parseInt(l),points:r,method:"points",isFetching:!1,subjects:s})}).catch(function(e){console.log(e.message),"Somthing Wrong Happened"===e.message?a.setState({isFetching:!1,isError:!0,errorMessage:"\u062a\u0623\u0643\u062f \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0637\u0627\u0644\u0628 \u0627\u0644\u0645\u062f\u062e\u0644\u0629"}):a.setState({isFetching:!1,isError:!0,errorMessage:"\u0647\u0646\u0627\u0644\u0643 \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u062e\u0627\u062f\u0645"}),setTimeout(function(){a.setState({isError:!1})},5e3)});case 4:case"end":return e.stop()}},e,this)})),a.renderError=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"error-div"},l.a.createElement("h3",{className:"error-text"},a.state.errorMessage)))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("state"));if(null===e){for(var t=[],a=0;a<6;a++)t.push({id:a,name:"",hours:"2",grade:"A+",checked:!0});this.setState({subjects:t})}else this.setState({subjects:e.subjects,hours:e.hours,gpa:e.gpa,points:e.points,method:e.method})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("state",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=l.a.createElement("img",{className:"loading-icon",align:"middle",height:"20",src:"img/loading.svg",alt:"ksu-logo"}),a=l.a.createElement("div",{className:"App"},l.a.createElement("img",{fill:"#4089A9",align:"middle",id:"logo",src:"img/logo.svg",alt:"ksu-logo"}));return l.a.createElement("div",null,this.state.isError?this.renderError():a,l.a.createElement("div",{className:"main-container"},l.a.createElement("fieldset",{style:{display:"inline",maxWidth:"80px",padding:"6px 5px"},className:"student-info",dir:"rtl"},l.a.createElement("legend",null,"\u062a\u0639\u0628\u0626\u0629 \u062a\u0644\u0642\u0627\u0626\u064a\u0629"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{value:this.state.studentID,onChange:function(t){e.setState({studentID:t.target.value})},className:"student-cred-input",type:"number",placeholder:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062c\u0627\u0645\u0639\u064a"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{value:this.state.studentPassword,onChange:function(t){e.setState({studentPassword:t.target.value})},className:"student-cred-input",type:"password",placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("hr",{className:"fetch-button-horizontal-line"}),l.a.createElement("button",{className:"fetch-information-button",onClick:this.fetchUserInformation},this.state.isFetching?t:"\u0627\u062f\u062e\u0627\u0644")))))),l.a.createElement("div",{className:"or-div",style:{display:"inline"}},l.a.createElement("h3",{style:{display:"inline"}},"\u0627\u0648")),l.a.createElement("fieldset",{style:{display:"inline",padding:"6px 5px"},className:"student-info",dir:"rtl"},l.a.createElement("legend",null,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0637\u0627\u0644\u0628"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{className:"student-information-label-table-data"},l.a.createElement("p",{className:" old-hours-label",style:{position:"relative",bottom:"5px",left:"9px"}},"\u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0633\u0627\u0628\u0642\u0629")),l.a.createElement("td",null,l.a.createElement("input",{className:"student-information-input",value:this.state.hours,onChange:function(t){e.setState({hours:t.target.value})},id:"hours-text",style:{marginBottom:"10px"},size:"3",type:"number",min:"1",max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{checked:"gpa"===this.state.method,value:"gpa",className:"radio-button",type:"radio",name:"gpa-type",onChange:function(){e.setState({method:"gpa"})}})),l.a.createElement("td",{className:"student-information-label-table-data"},l.a.createElement("p",null,"\u0627\u0644\u0645\u0639\u062f\u0644")),l.a.createElement("td",null,l.a.createElement("input",{className:"student-information-input",value:this.state.gpa,onChange:function(t){e.setState({gpa:t.target.value})},disabled:"gpa"!==this.state.method,id:"gpa-text",type:"number",min:"1",max:"200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{checked:"points"===this.state.method,value:"points",className:"radio-button",type:"radio",name:"gpa-type",onChange:function(){e.setState({method:"points"})}})),l.a.createElement("td",{className:"student-information-label-table-data"},l.a.createElement("p",null,"\u0627\u0644\u0646\u0642\u0627\u0637")),l.a.createElement("td",null,l.a.createElement("input",{className:"student-information-input",value:this.state.points,onChange:function(t){e.setState({points:t.target.value})},disabled:"points"!==this.state.method,id:"points-text",type:"number",step:"any",min:"1",max:"5000"})))))),l.a.createElement("div",{className:"table-div"},l.a.createElement("table",{align:"center",dir:"rtl",className:"subjects-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0627\u062f\u0629"),l.a.createElement("th",null,"\u0627\u0644\u0633\u0627\u0639\u0627\u062a"),l.a.createElement("th",null,"\u0627\u0644\u062a\u0642\u062f\u064a\u0631"))),this.renderSubjects())),l.a.createElement("div",{className:"buttons-div"},l.a.createElement("button",{className:"remove-button",onClick:function(){var t=Object(E.cloneDeep)(e.state.subjects);t.length>1&&(t.pop(),e.setState({subjects:t}))}},l.a.createElement("img",{height:"20",className:"remove-button-logo",src:"img/minus.png",alt:"remove-logo"})),l.a.createElement("button",{className:"add-button",onClick:function(){var t=Object(E.cloneDeep)(e.state.subjects);t.push({id:t.length,name:"",hours:"2",grade:"A+",checked:!0}),e.setState({subjects:t})}},l.a.createElement("img",{height:"20",className:"add-button-logo",src:"img/plus.png",alt:"add-logo"}))),l.a.createElement("br",null),l.a.createElement(b,{state:this.state}),l.a.createElement(f,{state:this.state})))}},{key:"renderSubjects",value:function(){var e=this,t=this.state.subjects.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{className:"index"},a+1),l.a.createElement("td",null,l.a.createElement("input",{disabled:!t.checked,size:"3",className:"subject-name",value:t.name,onChange:function(t){var n=Object(E.cloneDeep)(e.state.subjects);n[a].name=t.target.value,e.setState({subjects:n})}})),l.a.createElement("td",null,l.a.createElement("select",{disabled:!t.checked,value:t.hours,onChange:function(t){var n=Object(E.cloneDeep)(e.state.subjects);n[a].hours=t.target.value,e.setState({subjects:n})}},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"))),l.a.createElement("td",null,l.a.createElement("select",{disabled:!t.checked,defaultValue:t.grade,onChange:function(t){var n=Object(E.cloneDeep)(e.state.subjects);n[a].grade=t.target.value,e.setState({subjects:n})}},l.a.createElement("option",null,"A+"),l.a.createElement("option",null,"A"),l.a.createElement("option",null,"B+"),l.a.createElement("option",null,"B"),l.a.createElement("option",null,"C+"),l.a.createElement("option",null,"C"),l.a.createElement("option",null,"D+"),l.a.createElement("option",null,"D"))),l.a.createElement("td",null,l.a.createElement("input",{className:"checkbox",id:"eighth-checkbox",type:"checkbox",defaultChecked:t.checked,onChange:function(t){var n=Object(E.cloneDeep)(e.state.subjects);n[a].checked=t.target.checked,e.setState({subjects:n})}})))});return l.a.createElement("tbody",null,t)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.f0672e5c.chunk.js.map