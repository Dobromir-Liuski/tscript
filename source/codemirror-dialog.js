!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function o(o,n,t){var i,r=o.getWrapperElement().parentElement.parentElement;return(i=r.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?i.innerHTML=n:i.appendChild(n),e.addClass(r,"dialog-opened"),i}function n(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}e.defineExtension("openDialog",function(t,i,r){r||(r={}),n(this,null);var u=o(this,t,r.bottom),l=!1,a=this;function c(o){if("string"==typeof o)s.value=o;else{if(l)return;l=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),a.focus(),r.onClose&&r.onClose(u)}}var d,s=u.getElementsByTagName("input")[0];return s?(s.focus(),r.value&&(s.value=r.value,!1!==r.selectValueOnOpen&&s.select()),r.onInput&&e.on(s,"input",function(e){r.onInput(e,s.value,c)}),r.onKeyUp&&e.on(s,"keyup",function(e){r.onKeyUp(e,s.value,c)}),e.on(s,"keydown",function(o){r&&r.onKeyDown&&r.onKeyDown(o,s.value,c)||((27==o.keyCode||!1!==r.closeOnEnter&&13==o.keyCode)&&(s.blur(),e.e_stop(o),c()),13==o.keyCode&&i(s.value,o))}),!1!==r.closeOnBlur&&e.on(s,"blur",c)):(d=u.getElementsByTagName("button")[0])&&(e.on(d,"click",function(){c(),a.focus()}),!1!==r.closeOnBlur&&e.on(d,"blur",c),d.focus()),c}),e.defineExtension("openConfirm",function(t,i,r){n(this,null);var u=o(this,t,r&&r.bottom),l=u.getElementsByTagName("button"),a=!1,c=this,d=1;function s(){a||(a=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),c.focus())}l[0].focus();for(var f=0;f<l.length;++f){var p=l[f];!function(o){e.on(p,"click",function(n){e.e_preventDefault(n),s(),o&&o(c)})}(i[f]),e.on(p,"blur",function(){--d,setTimeout(function(){d<=0&&s()},200)}),e.on(p,"focus",function(){++d})}}),e.defineExtension("openNotification",function(t,i){n(this,c);var r,u=o(this,t,i&&i.bottom),l=!1,a=i&&void 0!==i.duration?i.duration:5e3;function c(){l||(l=!0,clearTimeout(r),e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u))}return e.on(u,"click",function(o){e.e_preventDefault(o),c()}),a&&(r=setTimeout(c,a)),c})});
