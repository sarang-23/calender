(this.webpackJsonpcalender=this.webpackJsonpcalender||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(23),s=a.n(i),o=(a(41),a.p,a(42),a(8)),c=a(24),d=a(25),l=a(33),h=a(32),u=a(63),b=a(64),g=a(65),p=a(66),j=a(67),m=a(62),f=a(68),y=a(31),x=a(5),O=a(13),v=a.n(O),w=a(60),C=a.p+"static/media/calenderIcon.2bf105c2.svg",M=a.p+"static/media/dropdownIcon.1e134aa9.svg",k=["January","February","March","April","May","June","July","August","September","October","November","December"],D=function(e,t){var a=new Date,n=new Array(43),r=new Date(t,e).getDay();r=0===r?7:r;for(var i=function(e,t){return new Date(t,e+1,0).getDate()}(e,t),s=new Date(t,e,0).getDate(),o=r-1;o>0;o--)n[o]={displayDate:s--,isWeekend:S(o)};for(var c=1,d=r;d<r+i;d++)n[d]={displayDate:c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),isCurrMonth:!0,isCurrDate:e===a.getMonth()&&c===a.getDate(),isWeekend:S(d)},c++;c=1;for(var l=r+i;l<43;l++)n[l]={displayDate:c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),isWeekend:S(l)},c++;return n},S=function(e){return(e+1)%7==0||e%7==0},N=a(2),W=Object(w.a)({controller:{color:"#e6e6e6",backgroundColor:"rgba(255, 255, 255, 0.06)",margin:"10px 20px",borderRadius:100,height:38,display:"flex",alignItems:"center"},today:{float:"left",backgroundColor:"#0f6ebe",height:"100%",borderRadius:"100px 0 0 100px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Poppins",fontSize:14,padding:"0 20px"},calenderIcon:{marginRight:5},monthSelector:{display:"flex",alignItems:"center",height:"100%",padding:"0 15px",borderRight:"1px solid black",position:"relative"},left:{transform:"rotate(180deg)",marginRight:5,cursor:"pointer"},right:{marginLeft:5,cursor:"pointer"},selectedMonth:{fontSize:12,fontWeight:500,color:"#999999",fontFamily:"Poppins",minWidth:100}});function F(e){var t,a=W();return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:a.controller,children:[Object(N.jsxs)("div",{className:a.today,children:[Object(N.jsx)("img",{src:C,className:a.calenderIcon}),Object(N.jsx)("p",{children:"Today"})]}),Object(N.jsxs)("div",{className:a.monthSelector,children:[Object(N.jsx)("img",{src:M,className:a.left,onClick:function(){return e.updateMonth("left")}}),Object(N.jsxs)(m.a,{className:a.selectedMonth,children:[" ",(t=e.selectedMonth,k[t])," ",e.selectedYear," "]}),Object(N.jsx)("img",{src:M,className:a.right,onClick:function(){return e.updateMonth("right")}})]})]})})}var R=Object(w.a)({cellContainer:{display:"flex",height:100,paddingTop:5,paddingBottom:5,alignItems:"center"},infoContainer:{display:"flex",flexDirection:"column",alignItems:"start",height:"100%",width:"100%",position:"relative"},date:{margin:"0 2px 0 0",fontFamily:"Poppins",fontSize:24,fontWeight:"bold",lineHeight:1.17,color:"#e6e6e6",paddingTop:10},today:{height:"80%",width:3,backgroundColor:"#0f6ebe",borderRadius:100,marginRight:10},notCurrMonth:{color:"#999999"},weekend:{fontFamily:"Poppins",fontSize:10,fontWeight:300,color:"#666666",position:"absolute",bottom:20}});function T(e){var t=R();return e.date?Object(N.jsxs)("div",{className:v()(t.cellContainer,e.date.isCurrDate?"today":""),children:[e.date.isCurrDate&&Object(N.jsx)("div",{className:t.today}),Object(N.jsxs)("div",{className:t.infoContainer,children:[Object(N.jsx)(m.a,{className:v()(t.date,e.date.isCurrMonth?"":t.notCurrMonth,e.date.isCurrDate?"today":""),children:e.date.displayDate}),e.date.isWeekend&&Object(N.jsx)("div",{className:t.weekend,children:"Weekly Off"})]})]}):Object(N.jsx)(N.Fragment,{})}Object(y.a)({breakpoints:{values:{xs:0,sm:650,md:800,lg:1280,xl:1920}}});var I=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={daysArr:[],isTablet:window.outerWidth<=700&&window.outerWidth>450,isMoblie:window.outerWidth<=450},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getMonth(),a=e.getFullYear(),n=window.outerWidth<=700&&window.outerWidth>450,r=window.outerWidth<=450;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{selectedDay:e,selectedMonth:t,selectedYear:a,daysArr:D(t,a),isMobile:r,isTablet:n})),window.addEventListener("resize",this.resize.bind(this))}},{key:"resize",value:function(){var e=window.outerWidth<=700&&window.outerWidth>450,t=window.outerWidth<=450;e!==this.state.isTablet&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isTablet:e})),t!==this.state.isMobile&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isMobile:t}))}},{key:"updateMonth",value:function(e){var t=0===this.state.selectedMonth,a=11===this.state.selectedMonth;if("left"===e){var n=t?11:this.state.selectedMonth-1,r=t?this.state.selectedYear-1:this.state.selectedYear,i=D(n,r);this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{selectedMonth:n,selectedYear:r,daysArr:i})}))}else{var s=a?0:this.state.selectedMonth+1,c=a?this.state.selectedYear+1:this.state.selectedYear,d=D(s,c);this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{selectedMonth:s,selectedYear:c,daysArr:d})}))}}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.selectedMonth,r=a.selectedYear,i=a.daysArr,s=a.isMobile,o=a.isTablet,c=[1,2,3,4,5,6,7];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(u.a,{className:t.calenderContainer,children:[Object(N.jsx)(F,{selectedMonth:n,selectedYear:r,updateMonth:function(t){return e.updateMonth(t)}}),Object(N.jsxs)(b.a,{className:t.calenderTable,children:[Object(N.jsx)(g.a,{className:t.calenderHead,children:Object(N.jsx)(p.a,{className:t.calenderRow,children:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((function(e,a){return Object(N.jsx)(j.a,{align:"center",className:t.headCell,children:Object(N.jsx)(m.a,{className:t.days,children:s?e.toUpperCase().substr(0,1):o?e.toUpperCase().substring(0,3):e.toUpperCase()})},a)}))})}),Object(N.jsx)(f.a,{className:t.calenderBody,children:[0,1,2,3,4,5].map((function(e){return Object(N.jsx)(p.a,{className:t.calenderRow,children:c.map((function(a){return Object(N.jsx)(j.a,{className:v()(t.bodyCell,e%2==0?"evenRow":"oddRow"),children:Object(N.jsx)(T,{date:i[7*e+a]})},a+e)}))},e)}))})]})]})})}}]),a}(r.a.Component),Y=Object(x.a)((function(e){return{calenderContainer:{margin:"20px auto",backgroundColor:"#121212",padding:10},calenderTable:{padding:"22px 8px",color:"white"},calenderHead:{backgroundColor:"#121212",color:"#999999"},headCell:{borderBottom:"none"},bodyCell:{borderBottom:"none",borderRight:"1px",width:176,height:100,color:"#e6e6e6",padding:0,paddingLeft:10,"&.evenRow":{"&:nth-child(even)":{backgroundColor:"rgba(255, 255, 255, 0.06)"}},"&.oddRow":{"&:nth-child(odd)":{backgroundColor:"rgba(255, 255, 255, 0.06)"}}},days:{fontFamily:"Poppins",fontSize:14,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.29,letterSpacing:.6,color:"#999999"}}}))(I);var A=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(Y,{})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(A,{})}),document.getElementById("root")),z()}},[[48,1,2]]]);
//# sourceMappingURL=main.fa3a2a65.chunk.js.map