(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(8),o=a.n(r),i=(a(16),a(17),a(2)),l=(a(18),a(3));var d=function(e){var t=e.formDisplay,a=e.toggleForm,s=e.addAppointment,r=Object(n.useState)(""),o=Object(i.a)(r,2),d=o[0],m=o[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),p=b[0],u=b[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),N=O[0],x=O[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),g=v[0],w=v[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),D=C[0],S=C[1];return Object(c.jsxs)("div",{className:"card textcenter mt-3 "+(t?"":"add-appointment"),children:[Object(c.jsxs)("div",{className:"apt-addheading card-header bg-primary text-white",onClick:function(){return a()},children:[Object(c.jsx)(l.a,{})," Add Appointment"]}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{id:"aptForm",noValidate:!0,onSubmit:function(e){e.preventDefault(),s({petName:d,ownerName:p,aptDate:N+" "+g,aptNotes:D}),m(""),u(""),x(""),w(""),S(""),a()},children:[Object(c.jsxs)("div",{className:"form-group form-row",children:[Object(c.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"petName",readOnly:!0,children:"Pet Name"}),Object(c.jsx)("div",{className:"col-md-10",children:Object(c.jsx)("input",{type:"text",className:"form-control",name:"petName",placeholder:"Pet's Name",value:d,onChange:function(e){return m(e.target.value)}})})]}),Object(c.jsxs)("div",{className:"form-group form-row",children:[Object(c.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"ownerName",children:"Pet Owner"}),Object(c.jsx)("div",{className:"col-md-10",children:Object(c.jsx)("input",{type:"text",className:"form-control",name:"ownerName",placeholder:"Owner's Name",value:p,onChange:function(e){return u(e.target.value)}})})]}),Object(c.jsxs)("div",{className:"form-group form-row",children:[Object(c.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptDate",children:"Date"}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("input",{type:"date",className:"form-control",name:"aptDate",id:"aptDate",value:N,onChange:function(e){return x(e.target.value)}})}),Object(c.jsx)("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptTime",children:"Time"}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsx)("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:g,onChange:function(e){return w(e.target.value)}})})]}),Object(c.jsxs)("div",{className:"form-group form-row",children:[Object(c.jsx)("label",{className:"col-md-2 text-md-right",htmlFor:"aptNotes",children:"Apt. Notes"}),Object(c.jsx)("div",{className:"col-md-10",children:Object(c.jsx)("textarea",{className:"form-control",rows:"4",cols:"50",name:"aptNotes",id:"aptNotes",placeholder:"Appointment Notes",value:D,onChange:function(e){return S(e.target.value)}})})]}),Object(c.jsx)("div",{className:"form-group form-row mb-0",children:Object(c.jsx)("div",{className:"offset-md-2 col-md-10",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary d-block ml-auto",children:"Add Appointment"})})})]})})]})};var m=function(e){var t=e.orderBy,a=e.orderDir,n=e.changeOrder,s=e.searchApts;return Object(c.jsx)("div",{className:"search-appointments row justify-content-center my-4",children:Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("input",{id:"SearchApts",type:"text",className:"form-control","aria-label":"Search Appointments",onChange:function(e){return s(e.target.value)}}),Object(c.jsxs)("div",{className:"input-group-append",children:[Object(c.jsxs)("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:["Sort by: ",Object(c.jsx)("span",{className:"caret"})]}),Object(c.jsxs)("div",{className:"sort-menu dropdown-menu dropdown-menu-right",children:[Object(c.jsx)("button",{className:"sort-by dropdown-item "+("petName"===t?"active":""),onClick:function(e){return n("petName",a)},href:"#",children:"Pet Name"}),Object(c.jsx)("button",{className:"sort-by dropdown-item "+("aptDate"===t?"active":""),onClick:function(e){return n("aptDate",a)},href:"#",children:"Date"}),Object(c.jsx)("button",{className:"sort-by dropdown-item "+("ownerName"===t?"active":""),onClick:function(e){return n("ownerName",a)},href:"#",children:"Owner"}),Object(c.jsx)("div",{role:"separator",className:"dropdown-divider"}),Object(c.jsx)("button",{className:"sort-by dropdown-item "+("asc"===a?"active":""),onClick:function(e){return n(t,"asc")},href:"#",children:"Asc"}),Object(c.jsx)("button",{className:"sort-by dropdown-item "+("desc"===a?"active":""),onClick:function(e){return n(t,"desc")},href:"#",children:"Desc"})]})]})]})})})},j=a(9),b=a.n(j);var p=function(e){var t=e.appointments,a=e.deleteAppointment;return Object(c.jsx)("div",{className:"appointment-list item-list mb-3",children:t.map((function(e){return Object(c.jsxs)("div",{className:"pet-item col media py-3",children:[Object(c.jsx)("div",{className:"mr-3",children:Object(c.jsx)("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return a(e)},children:Object(c.jsx)(l.b,{})})}),Object(c.jsxs)("div",{className:"pet-info media-body",children:[Object(c.jsxs)("div",{className:"pet-head d-flex",children:[Object(c.jsx)("span",{className:"pet-name",children:e.petName}),Object(c.jsx)("span",{className:"apt-date ml-auto",children:Object(c.jsx)(b.a,{date:e.aptDate,parse:"YYYY-MM-dd hh:mm",format:"MMM. d - h:mma"})})]}),Object(c.jsxs)("div",{className:"owner-name",children:[Object(c.jsx)("span",{className:"label-item",children:"Owner: "}),Object(c.jsx)("span",{children:e.ownerName})]}),Object(c.jsx)("div",{className:"apt-notes",children:e.aptNotes})]})]})}))})},u=a(10);var h=function(){var e,t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],r=a[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),j=l[0],b=l[1],h=Object(n.useState)("petName"),O=Object(i.a)(h,2),N=O[0],x=O[1],f=Object(n.useState)("asc"),v=Object(i.a)(f,2),g=v[0],w=v[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),D=C[0],S=C[1];Object(n.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then(r)}),[]);var A=s;return e="asc"===g?1:-1,A=A.sort((function(t,a){return t[N].toLowerCase()<a[N].toLowerCase()?-1*e:1*e})).filter((function(e){return e.petName.toLowerCase().includes(D.toLowerCase())||e.ownerName.toLowerCase().includes(D.toLowerCase())||e.aptNotes.toLowerCase().includes(D.toLowerCase())})),Object(c.jsx)("main",{className:"page bg-white",id:"petratings",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-12 bg-white",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(d,{formDisplay:j,toggleForm:function(){b(!j)},addAppointment:function(e){var t=s;t.unshift(e),r(t)}}),Object(c.jsx)(m,{orderBy:N,orderDir:g,changeOrder:function(e,t){x(e),w(t)},searchApts:function(e){S(e)}}),Object(c.jsx)(p,{appointments:A,deleteAppointment:function(e){var t=s;t=Object(u.without)(t,e),r(t)}})]})})})})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(7),a(20);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),O()}},[[22,1,2]]]);
//# sourceMappingURL=main.e3477d66.chunk.js.map