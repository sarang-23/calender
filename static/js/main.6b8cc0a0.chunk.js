(this.webpackJsonpcalender=this.webpackJsonpcalender||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(23),s=n.n(r),o=(n(40),n.p,n(41),n(8)),c=n(24),d=n(25),l=n(32),h=n(31),u=n(62),b=n(63),p=n(64),g=n(65),j=n(66),m=n(61),f=n(67),y=n(5),O=n(13),x=n.n(O),v=n(59),w=n.p+"static/media/calenderIcon.2bf105c2.svg",M=n.p+"static/media/dropdownIcon.1e134aa9.svg",C=["January","February","March","April","May","June","July","August","September","October","November","December"],k=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],N=[0,1,2,3,4,5],D=[1,2,3,4,5,6,7],S=function(e,t){var n=new Date,a=new Array(43),i=new Date(t,e).getDay();i=0===i?7:i;for(var r=function(e,t){return new Date(t,e+1,0).getDate()}(e,t),s=new Date(t,e,0).getDate(),o=i-1;o>0;o--)a[o]={displayDate:s--,isWeekend:W(o)};for(var c=1,d=i;d<i+r;d++)a[d]={displayDate:c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),isCurrMonth:!0,isCurrDate:e===n.getMonth()&&c===n.getDate(),isWeekend:W(d)},c++;c=1;for(var l=i+r;l<43;l++)a[l]={displayDate:c.toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),isWeekend:W(l)},c++;return a},W=function(e){return(e+1)%7==0||e%7==0},T=n(2),F=Object(v.a)({controller:{color:"#e6e6e6",backgroundColor:"rgba(255, 255, 255, 0.06)",margin:"10px 20px",borderRadius:100,height:38,display:"flex",alignItems:"center"},today:{float:"left",backgroundColor:"#0f6ebe",height:"100%",borderRadius:"100px 0 0 100px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Poppins",fontSize:14,padding:"0 20px"},calenderIcon:{marginRight:5},monthSelector:{display:"flex",alignItems:"center",height:"100%",padding:"0 15px",borderRight:"1px solid black",position:"relative"},left:{transform:"rotate(180deg)",marginRight:5,cursor:"pointer"},right:{marginLeft:5,cursor:"pointer"},selectedMonth:{fontSize:12,fontWeight:500,color:"#999999",fontFamily:"Poppins",minWidth:100}});function R(e){var t,n=F();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:n.controller,children:[Object(T.jsxs)("div",{className:n.today,children:[Object(T.jsx)("img",{src:w,className:n.calenderIcon}),Object(T.jsx)("p",{children:"Today"})]}),Object(T.jsxs)("div",{className:n.monthSelector,children:[Object(T.jsx)("img",{src:M,className:n.left,onClick:function(){return e.updateMonth("left")}}),Object(T.jsxs)(m.a,{className:n.selectedMonth,children:[" ",(t=e.selectedMonth,C[t])," ",e.selectedYear," "]}),Object(T.jsx)("img",{src:M,className:n.right,onClick:function(){return e.updateMonth("right")}})]})]})})}var I=Object(v.a)({cellContainer:{display:"flex",height:100,paddingTop:5,paddingBottom:5,alignItems:"center"},infoContainer:{display:"flex",flexDirection:"column",alignItems:"start",height:"100%",width:"100%",position:"relative"},date:{margin:"0 2px 0 0",fontFamily:"Poppins",fontSize:24,fontWeight:"bold",lineHeight:1.17,color:"#e6e6e6",paddingTop:10},today:{height:"80%",width:3,backgroundColor:"#0f6ebe",borderRadius:100,marginRight:10},notCurrMonth:{color:"#999999"},weekend:{fontFamily:"Poppins",fontSize:10,fontWeight:300,color:"#666666",position:"absolute",bottom:20}});function Y(e){var t=I();return e.date?Object(T.jsxs)("div",{className:x()(t.cellContainer,e.date.isCurrDate?"today":""),children:[e.date.isCurrDate&&Object(T.jsx)("div",{className:t.today}),Object(T.jsxs)("div",{className:t.infoContainer,children:[Object(T.jsx)(m.a,{className:x()(t.date,e.date.isCurrMonth?"":t.notCurrMonth,e.date.isCurrDate?"today":""),children:e.date.displayDate}),e.date.isWeekend&&!e.isMobile&&!e.isTablet&&Object(T.jsx)("div",{className:t.weekend,children:"Weekly Off"}),!e.date.appointments&&!e.date.isWeekend&&!e.isMobile&&!e.isTablet&&Object(T.jsx)("div",{className:t.weekend,children:"No appointments"})]})]}):Object(T.jsx)(T.Fragment,{})}var z=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={daysArr:[],isTablet:window.outerWidth<=700&&window.outerWidth>450,isMoblie:window.outerWidth<=450},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getMonth(),n=e.getFullYear(),a=window.outerWidth<=700&&window.outerWidth>450,i=window.outerWidth<=450;this.setState(Object(o.a)(Object(o.a)({},this.state),{},{selectedDay:e,selectedMonth:t,selectedYear:n,daysArr:S(t,n),isMobile:i,isTablet:a})),window.addEventListener("resize",this.resize.bind(this))}},{key:"resize",value:function(){var e=window.outerWidth<=700&&window.outerWidth>450,t=window.outerWidth<=450;e!==this.state.isTablet&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isTablet:e})),t!==this.state.isMobile&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{isMobile:t}))}},{key:"updateMonth",value:function(e){var t=0===this.state.selectedMonth,n=0===this.state.selectedMonth;if("left"===e){var a=t?0:this.state.selectedMonth-1,i=t?this.state.selectedYear-1:this.state.selectedYear,r=S(a,i);this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{selectedMonth:a,selectedYear:i,daysArr:r})}))}else{var s=n?0:this.state.selectedMonth+1,c=n?this.state.selectedYear+1:this.state.selectedYear,d=S(s,c);this.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},{selectedMonth:s,selectedYear:c,daysArr:d})}))}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.selectedMonth,i=n.selectedYear,r=n.daysArr,s=n.isMobile,o=n.isTablet;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(u.a,{className:t.calenderContainer,children:[Object(T.jsx)(R,{selectedMonth:a,selectedYear:i,updateMonth:function(t){return e.updateMonth(t)}}),Object(T.jsxs)(b.a,{className:t.calenderTable,children:[Object(T.jsx)(p.a,{className:t.calenderHead,children:Object(T.jsx)(g.a,{className:t.calenderRow,children:k.map((function(e,n){return Object(T.jsx)(j.a,{align:"center",className:t.headCell,children:Object(T.jsx)(m.a,{className:t.days,children:s?e.toUpperCase().substr(0,1):o?e.toUpperCase().substring(0,3):e.toUpperCase()})},n)}))})}),Object(T.jsx)(f.a,{className:t.calenderBody,children:N.map((function(e){return Object(T.jsx)(g.a,{className:t.calenderRow,children:D.map((function(n){return Object(T.jsx)(j.a,{className:x()(t.bodyCell,e%2==0?"evenRow":"oddRow"),children:Object(T.jsx)(Y,{date:r[7*e+n],isMobile:s,isTablet:o})},n+e)}))},e)}))})]})]})})}}]),n}(i.a.Component),A=Object(y.a)((function(e){return{calenderContainer:{margin:"20px auto",width:"90%",backgroundColor:"#121212",padding:10},calenderTable:{padding:"22px 8px"},calenderHead:{backgroundColor:"#121212",color:"#999999"},headCell:{borderBottom:"none"},bodyCell:{borderBottom:"none",borderRight:"1px",width:176,height:100,color:"#e6e6e6",padding:0,paddingLeft:10,"&.evenRow":{"&:nth-child(even)":{backgroundColor:"rgba(255, 255, 255, 0.06)"}},"&.oddRow":{"&:nth-child(odd)":{backgroundColor:"rgba(255, 255, 255, 0.06)"}}},days:{fontFamily:"Poppins",fontSize:14,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.29,letterSpacing:.6,color:"#999999"}}}))(z);var L=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(A,{})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(L,{})}),document.getElementById("root")),P()}},[[47,1,2]]]);
//# sourceMappingURL=main.6b8cc0a0.chunk.js.map