(this.webpackJsonp05=this.webpackJsonp05||[]).push([[4],{295:function(e,s,a){e.exports={mess_container:"Message_mess_container__1Cq1w",mess_users:"Message_mess_users__1z_cc",mess_user:"Message_mess_user__2uFnW",mess_user_logo:"Message_mess_user_logo__2tNS2",mess_messages_cont:"Message_mess_messages_cont__u67YH",messages_container:"Message_messages_container__Qk_ap",message_cont:"Message_message_cont__JtOqC",message_user_logo:"Message_message_user_logo__3RgBG",mess_input:"Message_mess_input__kyY76",mess_input_cont:"Message_mess_input_cont__3HzCm"}},300:function(e,s,a){"use strict";a.r(s);var n=a(108),c=a(1),t=a.n(c),_=a(295),r=a.n(_),m=a(99),i=a(0),o=function(e){return Object(i.jsxs)("li",{className:r.a.message_cont,children:[Object(i.jsx)("div",{className:r.a.message_user_logo,children:Object(i.jsx)("img",{src:m.a,alt:""})}),Object(i.jsx)("div",{className:"message_text",children:Object(i.jsx)("p",{children:e.message})})]})},u=a(14),g=function(e){var s="/messages/".concat(e.id);return Object(i.jsx)(u.b,{to:s,children:Object(i.jsxs)("div",{className:r.a.mess_user,children:[Object(i.jsx)("div",{className:r.a.mess_user_logo,children:Object(i.jsx)("img",{src:m.a,alt:""})}),Object(i.jsx)("div",{className:r.a.mess_user_name,children:Object(i.jsx)("h1",{children:e.name})})]})})},l=a(130),j=a(131),d=a(68),b=a(50),O=Object(b.a)(50),x=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(i.jsx)("form",{onSubmit:e.handleSubmit,children:Object(i.jsxs)("div",{className:r.a.mess_input_cont,children:[Object(i.jsx)(l.a,{component:d.a,validate:[b.b,O],name:"newMessValue",placeholder:"enter your message",className:r.a.mess_input}),Object(i.jsx)("button",{children:"Send"})]})})})),h=function(e,s){var a=e.MessagePage.DialogsD.map((function(e,s){return Object(i.jsx)(g,{id:e.id,name:e.name},s)})),n=e.MessagePage.MessageD.map((function(e,s){return Object(i.jsx)(o,{message:e.message},s)})),c=t.a.createRef(),_=function(){var e=c.current.scrollHeight-c.current.clientHeight;c.current.scrollTo(0,e)};return Object(i.jsxs)("div",{className:r.a.mess_container,children:[Object(i.jsx)("div",{className:r.a.mess_users,children:a}),Object(i.jsxs)("div",{className:r.a.mess_messages_cont,children:[Object(i.jsx)("ul",{ref:c,className:r.a.messages_container,children:n}),Object(i.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessValue),_()}})]})]})},M=a(11),p=(a(139),a(10));s.default=Object(p.compose)(Object(M.b)((function(e){return{MessagePage:e.MessagePage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s)),e({type:"UPDATE-NEW-MESSAGE-TEXT",updMessText:""})}}})))(h)}}]);
//# sourceMappingURL=4.ba83653d.chunk.js.map