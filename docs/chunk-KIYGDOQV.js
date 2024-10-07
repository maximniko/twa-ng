import{H as Qe,d as Te,e as wt}from"./chunk-P4ZMFX2T.js";var Je=Te(()=>{"use strict";(function(){var C={},u="";try{u=location.hash.toString()}catch{}var d=F(u),T=X("initParams");if(T)for(var a in T)typeof d[a]>"u"&&(d[a]=T[a]);ce("initParams",d);var L=!1,j;try{if(L=window.parent!=null&&window!=window.parent,L){window.addEventListener("message",function(s){if(s.source===window.parent){try{var p=JSON.parse(s.data)}catch{return}if(!(!p||!p.eventType))if(p.eventType=="set_custom_style")s.origin==="https://web.telegram.org"&&(j.innerHTML=p.eventData);else if(p.eventType=="reload_iframe"){try{window.parent.postMessage(JSON.stringify({eventType:"iframe_will_reload"}),"*")}catch{}location.reload()}else M(p.eventType,p.eventData)}}),j=document.createElement("style"),document.head.appendChild(j);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready",eventData:{reload_supported:!0}}),"*")}catch{}}}catch{}function W(s){try{return s=s.replace(/\+/g,"%20"),decodeURIComponent(s)}catch{return s}}function F(s){s=s.replace(/^#/,"");var p={};if(!s.length)return p;if(s.indexOf("=")<0&&s.indexOf("?")<0)return p._path=W(s),p;var c=s.indexOf("?");if(c>=0){var y=s.substr(0,c);p._path=W(y),s=s.substr(c+1)}var x=w(s);for(var S in x)p[S]=x[S];return p}function w(s){var p={};if(!s.length)return p;var c=s.split("&"),y,x,S,z;for(y=0;y<c.length;y++)x=c[y].split("="),S=W(x[0]),z=x[1]==null?null:W(x[1]),p[S]=z;return p}function le(s,p){var c=s.indexOf("#");if(c<0)return s+"#"+p;var y=s.substr(c+1);return y.indexOf("=")>=0||y.indexOf("?")>=0?s+"&"+p:y.length>0?s+"?"+p:s+p}function ue(s,p,c){if(p||(p=function(){}),c===void 0&&(c=""),console.log("[Telegram.WebView] > postEvent",s,c),window.TelegramWebviewProxy!==void 0)TelegramWebviewProxy.postEvent(s,JSON.stringify(c)),p();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:s,eventData:c})),p();else if(L)try{var y="https://web.telegram.org";y="*",window.parent.postMessage(JSON.stringify({eventType:s,eventData:c}),y),p()}catch(x){p(x)}else p({notAvailable:!0})}function M(s,p){console.log("[Telegram.WebView] < receiveEvent",s,p),pe(s,function(c){c(s,p)})}function pe(s,p){var c=C[s];if(!(c===void 0||!c.length))for(var y=0;y<c.length;y++)try{p(c[y])}catch{}}function Q(s,p){C[s]===void 0&&(C[s]=[]);var c=C[s].indexOf(p);c===-1&&C[s].push(p)}function be(s,p){if(C[s]!==void 0){var c=C[s].indexOf(p);c!==-1&&C[s].splice(c,1)}}function ge(s){if(!s.match(/^(web\+)?tgb?:\/\/./))return!1;var p=!!navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad/i);if(p){var c=document.getElementById("tgme_frame_cont")||document.body,y=document.createElement("iframe");c.appendChild(y);var x=!1,S=function(){x=!0};window.addEventListener("pagehide",S,!1),window.addEventListener("blur",S,!1),y!==null&&(y.src=s),setTimeout(function(){x||(window.location=s),window.removeEventListener("pagehide",S,!1),window.removeEventListener("blur",S,!1)},2e3)}else window.location=s;return!0}function ce(s,p){try{return window.sessionStorage.setItem("__telegram__"+s,JSON.stringify(p)),!0}catch{}return!1}function X(s){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+s))}catch{}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:d,isIframe:L,onEvent:Q,offEvent:be,postEvent:ue,receiveEvent:M,callEventCallbacks:pe},window.Telegram.Utils={urlSafeDecode:W,urlParseQueryString:w,urlParseHashParams:F,urlAppendHashParams:le,sessionStorageSet:ce,sessionStorageGet:X},window.TelegramGameProxy_receiveEvent=M,window.TelegramGameProxy={receiveEvent:M}})();(function(){var C=window.Telegram.Utils,u=window.Telegram.WebView,d=u.initParams,T=u.isIframe,a={},L="",j={},W={},F="light",w="6.0",le="unknown";if(d.tgWebAppData&&d.tgWebAppData.length){L=d.tgWebAppData,j=C.urlParseQueryString(L);for(var ue in j){var M=j[ue];try{(M.substr(0,1)=="{"&&M.substr(-1)=="}"||M.substr(0,1)=="["&&M.substr(-1)=="]")&&(j[ue]=JSON.parse(M))}catch{}}}if(d.tgWebAppThemeParams&&d.tgWebAppThemeParams.length){var pe=d.tgWebAppThemeParams;try{var Q=JSON.parse(pe);Q&&z(Q)}catch{}}var Q=C.sessionStorageGet("themeParams");Q&&z(Q),d.tgWebAppVersion&&(w=d.tgWebAppVersion),d.tgWebAppPlatform&&(le=d.tgWebAppPlatform);function be(e,t){t.theme_params&&(z(t.theme_params),window.Telegram.WebApp.MainButton.setParams({}),window.Telegram.WebApp.SecondaryButton.setParams({}),we(),ye(),Ae(),c("themeChanged"))}var ge=window.innerHeight;function ce(e,t){t.height&&(window.removeEventListener("resize",X),ve(t))}function X(e){ge!=window.innerHeight&&(ge=window.innerHeight,c("viewportChanged",{isStateStable:!0}))}function s(e){if(!(e.metaKey||e.ctrlKey)){for(var t=e.target;t.tagName!="A"&&t.parentNode;)t=t.parentNode;t.tagName=="A"&&t.target!="_blank"&&(t.protocol=="http:"||t.protocol=="https:")&&t.hostname=="t.me"&&(a.openTgLink(t.href),e.preventDefault())}}function p(e){return e.toString().replace(/^\s+|\s+$/g,"")}function c(e){var t=Array.prototype.slice.call(arguments);e=t.shift(),u.callEventCallbacks("webview:"+e,function(r){r.apply(a,t)})}function y(e,t){u.onEvent("webview:"+e,t)}function x(e,t){u.offEvent("webview:"+e,t)}function S(e,t){var r=document.documentElement;r&&r.style&&r.style.setProperty&&r.style.setProperty("--tg-"+e,t)}function z(e){e.bg_color=="#1c1c1d"&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");var t;for(var r in e)(t=K(e[r]))&&(W[r]=t,r=="bg_color"&&(F=De(t)?"dark":"light",S("color-scheme",F)),r="theme-"+r.split("_").join("-"),S(r,t));C.sessionStorageSet("themeParams",W)}var q={};function ke(e){for(var t=100;--t;){for(var r="",o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=o.length,g=0;g<e;g++)r+=o[Math.floor(Math.random()*n)];if(!q[r])return q[r]={},r}throw Error("WebAppCallbackIdGenerateFailed")}var Z=!1,Y=!1,Ce=!0;function ve(e){typeof e<"u"&&(Ce=!!e.is_expanded,Z=e.height,e.is_state_stable&&(Y=e.height),c("viewportChanged",{isStateStable:!!e.is_state_stable}));var t,r;Z!==!1?t=Z-I+"px":t=I?"calc(100vh - "+I+"px)":"100vh",Y!==!1?r=Y-I+"px":r=I?"calc(100vh - "+I+"px)":"100vh",S("viewport-height",t),S("viewport-stable-height",r)}var me=!1;function Ge(e){if(!m("6.2")){console.warn("[Telegram.WebApp] Closing confirmation is not supported in version "+w);return}me=!!e,u.postEvent("web_app_setup_closing_behavior",!1,{need_confirmation:me})}var he=!0;function Ke(e){if(!m("7.7")){console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version "+w);return}he=!!e,u.postEvent("web_app_setup_swipe_behavior",!1,{allow_vertical_swipe:he})}var G="bg_color",D=null;function $e(){return G=="secondary_bg_color"?W.secondary_bg_color:G=="bg_color"?W.bg_color:D}function Xe(e){if(!m("6.1")){console.warn("[Telegram.WebApp] Header color is not supported in version "+w);return}m("6.9")||(W.bg_color&&W.bg_color==e?e="bg_color":W.secondary_bg_color&&W.secondary_bg_color==e&&(e="secondary_bg_color"));var t=null,r=null;if(e=="bg_color"||e=="secondary_bg_color")r=e;else if(m("6.9")&&(t=K(e),!t))throw console.error("[Telegram.WebApp] Header color format is invalid",e),Error("WebAppHeaderColorInvalid");if(!m("6.9")&&r!="bg_color"&&r!="secondary_bg_color")throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");G=r,D=t,we()}var xe=null,_e=null;function we(){(xe!=G||_e!=D)&&(xe=G,_e=D,_e?u.postEvent("web_app_set_header_color",!1,{color:D}):u.postEvent("web_app_set_header_color",!1,{color_key:G}))}var fe="bg_color";function Se(){return fe=="secondary_bg_color"?W.secondary_bg_color:fe=="bg_color"?W.bg_color:fe}function Ze(e){if(!m("6.1")){console.warn("[Telegram.WebApp] Background color is not supported in version "+w);return}var t;if(e=="bg_color"||e=="secondary_bg_color")t=e;else if(t=K(e),!t)throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");fe=t,ye()}var Ie=null;function ye(){var e=Se();Ie!=e&&(Ie=e,u.postEvent("web_app_set_background_color",!1,{color:e}))}var ee="bottom_bar_bg_color";function te(){return ee=="bottom_bar_bg_color"?W.bottom_bar_bg_color||W.secondary_bg_color||"#ffffff":ee=="secondary_bg_color"?W.secondary_bg_color:ee=="bg_color"?W.bg_color:ee}function Ye(e){if(!m("7.10")){console.warn("[Telegram.WebApp] Bottom bar color is not supported in version "+w);return}var t;if(e=="bg_color"||e=="secondary_bg_color"||e=="bottom_bar_bg_color")t=e;else if(t=K(e),!t)throw console.error("[Telegram.WebApp] Bottom bar color format is invalid",e),Error("WebAppBottomBarColorInvalid");ee=t,Ae(),window.Telegram.WebApp.SecondaryButton.setParams({})}var Oe=null;function Ae(){var e=te();Oe!=e&&(Oe=e,u.postEvent("web_app_set_bottom_bar_color",!1,{color:e})),d.tgWebAppDebug&&Ue()}function K(e){e+="";var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var r=parseInt(t[1]),o=parseInt(t[2]),n=parseInt(t[3]);return r=(r<16?"0":"")+r.toString(16),o=(o<16?"0":"")+o.toString(16),n=(n<16?"0":"")+n.toString(16),"#"+r+o+n}return!1}function De(e){e=e.replace(/[\s#]/g,""),e.length==3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16),n=Math.sqrt(.299*(t*t)+.587*(r*r)+.114*(o*o));return n<120}function et(e,t){typeof e!="string"&&(e=""),typeof t!="string"&&(t=""),e=e.replace(/^\s+|\s+$/g,"").split("."),t=t.replace(/^\s+|\s+$/g,"").split(".");var r=Math.max(e.length,t.length),o,n,g;for(o=0;o<r;o++)if(n=parseInt(e[o])||0,g=parseInt(t[o])||0,n!=g)return n>g?1:-1;return 0}function m(e){return et(w,e)>=0}function tt(e){if(window.Blob)try{return new Blob([e]).size}catch{}for(var t=e.length,r=e.length-1;r>=0;r--){var o=e.charCodeAt(r);o>127&&o<=2047?t++:o>2047&&o<=65535&&(t+=2),o>=56320&&o<=57343&&r--}return t}var rt=function(){var e=!1,t={};Object.defineProperty(t,"isVisible",{set:function(f){_({is_visible:f})},get:function(){return e},enumerable:!0});var r=null;u.onEvent("back_button_pressed",o);function o(){c("backButtonClicked")}function n(){return{is_visible:e}}function g(f){return typeof f>"u"&&(f=n()),JSON.stringify(f)}function h(){return m("6.1")?!0:(console.warn("[Telegram.WebApp] BackButton is not supported in version "+w),!1)}function b(){var f=n(),B=g(f);r!==B&&(r=B,u.postEvent("web_app_setup_back_button",!1,f))}function _(f){return h()&&(typeof f.is_visible<"u"&&(e=!!f.is_visible),b()),t}return t.onClick=function(f){return h()&&y("backButtonClicked",f),t},t.offClick=function(f){return h()&&x("backButtonClicked",f),t},t.show=function(){return _({is_visible:!0})},t.hide=function(){return _({is_visible:!1})},t}(),O=null,We={},I=0;if(d.tgWebAppDebug){O=document.createElement("tg-bottom-bar");var Me={display:"flex",gap:"7px",font:"600 14px/18px sans-serif",width:"100%",background:te(),position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"7px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"};for(var qe in Me)O.style[qe]=Me[qe];document.addEventListener("DOMContentLoaded",function e(t){document.removeEventListener("DOMContentLoaded",e),document.body.appendChild(O)});var je=document.createElement("style");je.innerHTML='tg-bottom-button.shine { position: relative; overflow: hidden; } tg-bottom-button.shine:before { content:""; position: absolute; top: 0; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .2), transparent); animation: tg-bottom-button-shine 5s ease-in-out infinite; } @-webkit-keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}} @keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}}',O.appendChild(je)}function Ue(){var e=We.main._bottomButton,t=We.secondary._bottomButton;e.isVisible||t.isVisible?(O.style.display="flex",I=58,e.isVisible&&t.isVisible&&(t.position=="top"?(O.style.flexDirection="column-reverse",I+=51):t.position=="bottom"?(O.style.flexDirection="column",I+=51):t.position=="left"?O.style.flexDirection="row-reverse":t.position=="right"&&(O.style.flexDirection="row"))):(O.style.display="none",I=0),O.style.background=te(),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=I+"px"),ve()}var Re=function(e){var t=e=="main";if(t)var r="web_app_setup_main_button",o="main_button_pressed",n="mainButtonClicked",g="Continue",h=function(){return W.button_color||"#2481cc"},b=function(){return W.button_text_color||"#ffffff"};else var r="web_app_setup_secondary_button",o="secondary_button_pressed",n="secondaryButtonClicked",g="Cancel",h=function(){return te()},b=function(){return W.button_color||"#2481cc"};var _=!1,f=!0,B=!1,E=!1,U=e,ae=g,se=!1,R=!1,N="left",l={};Object.defineProperty(l,"type",{get:function(){return U},enumerable:!0}),Object.defineProperty(l,"text",{set:function(i){l.setParams({text:i})},get:function(){return ae},enumerable:!0}),Object.defineProperty(l,"color",{set:function(i){l.setParams({color:i})},get:function(){return se||h()},enumerable:!0}),Object.defineProperty(l,"textColor",{set:function(i){l.setParams({text_color:i})},get:function(){return R||b()},enumerable:!0}),Object.defineProperty(l,"isVisible",{set:function(i){l.setParams({is_visible:i})},get:function(){return _},enumerable:!0}),Object.defineProperty(l,"isProgressVisible",{get:function(){return E},enumerable:!0}),Object.defineProperty(l,"isActive",{set:function(i){l.setParams({is_active:i})},get:function(){return f},enumerable:!0}),Object.defineProperty(l,"hasShineEffect",{set:function(i){l.setParams({has_shine_effect:i})},get:function(){return B},enumerable:!0}),t||Object.defineProperty(l,"position",{set:function(i){l.setParams({position:i})},get:function(){return N},enumerable:!0});var P=null;u.onEvent(o,Le);var v=null;if(d.tgWebAppDebug){v=document.createElement("tg-bottom-button");var k={display:"none",width:"100%",height:"44px",borderRadius:"0",background:"no-repeat right center",padding:"13px 15px",textAlign:"center",boxSizing:"border-box"};for(var H in k)v.style[H]=k[H];O.appendChild(v),v.addEventListener("click",Le,!1),v._bottomButton=l,We[e]=v}function Le(){f&&c(n)}function Ne(){var i=l.color,V=l.textColor;if(_){var $={is_visible:!0,is_active:f,is_progress_visible:E,text:ae,color:i,text_color:V,has_shine_effect:B&&f&&!E};t||($.position=N)}else var $={is_visible:!1};return $}function mt(i){return typeof i>"u"&&(i=Ne()),JSON.stringify(i)}function Pe(){var i=Ne(),V=mt(i);P!==V&&(P=V,u.postEvent(r,!1,i),d.tgWebAppDebug&&ht(i))}function ht(i){i.is_visible?(v.style.display="block",v.style.opacity=i.is_active?"1":"0.8",v.style.cursor=i.is_active?"pointer":"auto",v.disabled=!i.is_active,v.innerText=i.text,v.className=i.has_shine_effect?"shine":"",v.style.backgroundImage=i.is_progress_visible?"url('data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewport="0 0 48 48" width="48px" height="48px"><circle cx="50%" cy="50%" stroke="'+i.text_color+'" stroke-width="2.25" stroke-linecap="round" fill="none" stroke-dashoffset="106" r="9" stroke-dasharray="56.52" rotate="-90"><animate attributeName="stroke-dashoffset" attributeType="XML" dur="360s" from="0" to="12500" repeatCount="indefinite"></animate><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="-90 24 24" to="630 24 24" repeatCount="indefinite"></animateTransform></circle></svg>')+"')":"none",v.style.backgroundColor=i.color,v.style.color=i.text_color):v.style.display="none",Ue()}function _t(i){if(typeof i.text<"u"){var V=p(i.text);if(!V.length)throw console.error("[Telegram.WebApp] Bottom button text is required",i.text),Error("WebAppBottomButtonParamInvalid");if(V.length>64)throw console.error("[Telegram.WebApp] Bottom button text is too long",V),Error("WebAppBottomButtonParamInvalid");ae=V}if(typeof i.color<"u")if(i.color===!1||i.color===null)se=!1;else{var $=K(i.color);if(!$)throw console.error("[Telegram.WebApp] Bottom button color format is invalid",i.color),Error("WebAppBottomButtonParamInvalid");se=$}if(typeof i.text_color<"u")if(i.text_color===!1||i.text_color===null)R=!1;else{var He=K(i.text_color);if(!He)throw console.error("[Telegram.WebApp] Bottom button text color format is invalid",i.text_color),Error("WebAppBottomButtonParamInvalid");R=He}if(typeof i.is_visible<"u"){if(i.is_visible&&!l.text.length)throw console.error("[Telegram.WebApp] Bottom button text is required"),Error("WebAppBottomButtonParamInvalid");_=!!i.is_visible}if(typeof i.has_shine_effect<"u"&&(B=!!i.has_shine_effect),!t&&typeof i.position<"u"){if(i.position!="left"&&i.position!="right"&&i.position!="top"&&i.position!="bottom")throw console.error("[Telegram.WebApp] Bottom button posiition is invalid",i.position),Error("WebAppBottomButtonParamInvalid");N=i.position}return typeof i.is_active<"u"&&(f=!!i.is_active),Pe(),l}return l.setText=function(i){return l.setParams({text:i})},l.onClick=function(i){return y(n,i),l},l.offClick=function(i){return x(n,i),l},l.show=function(){return l.setParams({is_visible:!0})},l.hide=function(){return l.setParams({is_visible:!1})},l.enable=function(){return l.setParams({is_active:!0})},l.disable=function(){return l.setParams({is_active:!1})},l.showProgress=function(i){return f=!!i,E=!0,Pe(),l},l.hideProgress=function(){return l.isActive||(f=!0),E=!1,Pe(),l},l.setParams=_t,l},ot=Re("main"),nt=Re("secondary"),Ve=function(){var e=!1,t={};Object.defineProperty(t,"isVisible",{set:function(f){_({is_visible:f})},get:function(){return e},enumerable:!0});var r=null;u.onEvent("settings_button_pressed",o);function o(){c("settingsButtonClicked")}function n(){return{is_visible:e}}function g(f){return typeof f>"u"&&(f=n()),JSON.stringify(f)}function h(){return m("6.10")?!0:(console.warn("[Telegram.WebApp] SettingsButton is not supported in version "+w),!1)}function b(){var f=n(),B=g(f);r!==B&&(r=B,u.postEvent("web_app_setup_settings_button",!1,f))}function _(f){return h()&&(typeof f.is_visible<"u"&&(e=!!f.is_visible),b()),t}return t.onClick=function(f){return h()&&y("settingsButtonClicked",f),t},t.offClick=function(f){return h()&&x("settingsButtonClicked",f),t},t.show=function(){return _({is_visible:!0})},t.hide=function(){return _({is_visible:!1})},t}(),it=function(){var e={};function t(r){if(!m("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+w),e;if(r.type=="impact"){if(r.impact_style!="light"&&r.impact_style!="medium"&&r.impact_style!="heavy"&&r.impact_style!="rigid"&&r.impact_style!="soft")throw console.error("[Telegram.WebApp] Haptic impact style is invalid",r.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if(r.type=="notification"){if(r.notification_type!="error"&&r.notification_type!="success"&&r.notification_type!="warning")throw console.error("[Telegram.WebApp] Haptic notification type is invalid",r.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if(r.type!="selection_change")throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",r.type),Error("WebAppHapticFeedbackTypeInvalid");return u.postEvent("web_app_trigger_haptic_feedback",!1,r),e}return e.impactOccurred=function(r){return t({type:"impact",impact_style:r})},e.notificationOccurred=function(r){return t({type:"notification",notification_type:r})},e.selectionChanged=function(){return t({type:"selection_change"})},e}(),at=function(){var e={};function t(r,o,n){if(!m("6.9"))throw console.error("[Telegram.WebApp] CloudStorage is not supported in version "+w),Error("WebAppMethodUnsupported");return Ee(r,o,n),e}return e.setItem=function(r,o,n){return t("saveStorageValue",{key:r,value:o},n)},e.getItem=function(r,o){return e.getItems([r],o?function(n,g){n?o(n):o(null,g[r])}:null)},e.getItems=function(r,o){return t("getStorageValues",{keys:r},o)},e.removeItem=function(r,o){return e.removeItems([r],o)},e.removeItems=function(r,o){return t("deleteStorageValues",{keys:r},o)},e.getKeys=function(r){return t("getStorageKeys",{},r)},e}(),st=function(){var e=!1,t=!1,r="unknown",o=!1,n=!1,g=!1,h="",b={};Object.defineProperty(b,"isInited",{get:function(){return e},enumerable:!0}),Object.defineProperty(b,"isBiometricAvailable",{get:function(){return e&&t},enumerable:!0}),Object.defineProperty(b,"biometricType",{get:function(){return r||"unknown"},enumerable:!0}),Object.defineProperty(b,"isAccessRequested",{get:function(){return o},enumerable:!0}),Object.defineProperty(b,"isAccessGranted",{get:function(){return o&&n},enumerable:!0}),Object.defineProperty(b,"isBiometricTokenSaved",{get:function(){return g},enumerable:!0}),Object.defineProperty(b,"deviceId",{get:function(){return h||""},enumerable:!0});var _={callbacks:[]},f=!1,B=!1,E=!1;u.onEvent("biometry_info_received",U),u.onEvent("biometry_auth_requested",ae),u.onEvent("biometry_token_updated",se);function U(l,P){if(e=!0,P.available?(t=!0,r=P.type||"unknown",P.access_requested?(o=!0,n=!!P.access_granted,g=!!P.token_saved):(o=!1,n=!1,g=!1)):(t=!1,r="unknown",o=!1,n=!1,g=!1),h=P.device_id||"",_.callbacks.length>0)for(var v=0;v<_.callbacks.length;v++){var k=_.callbacks[v];k()}if(f){var H=f;f=!1,H.callback&&H.callback(n)}c("biometricManagerUpdated")}function ae(l,P){var v=P.status=="authorized",k=P.token||"";if(B){var H=B;B=!1,H.callback&&H.callback(v,v?k:null)}c("biometricAuthRequested",v?{isAuthenticated:!0,biometricToken:k}:{isAuthenticated:!1})}function se(l,P){var v=!1;if(t&&o&&(P.status=="updated"?(g=!0,v=!0):P.status=="removed"&&(g=!1,v=!0)),E){var k=E;E=!1,k.callback&&k.callback(v)}c("biometricTokenUpdated",{isUpdated:v})}function R(){return m("7.2")?!0:(console.warn("[Telegram.WebApp] BiometricManager is not supported in version "+w),!1)}function N(){if(!e)throw console.error("[Telegram.WebApp] BiometricManager should be inited before using."),Error("WebAppBiometricManagerNotInited");return!0}return b.init=function(l){return!R()||e||(l&&_.callbacks.push(l),u.postEvent("web_app_biometry_get_info",!1)),b},b.requestAccess=function(l,P){if(!R())return b;if(N(),!t)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(f)throw console.error("[Telegram.WebApp] Access is already requested"),Error("WebAppBiometricManagerAccessRequested");var v={};if(typeof l.reason<"u"){var k=p(l.reason);if(k.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",k),Error("WebAppBiometricRequestAccessParamInvalid");k.length>0&&(v.reason=k)}return f={callback:P},u.postEvent("web_app_biometry_request_access",!1,v),b},b.authenticate=function(l,P){if(!R())return b;if(N(),!t)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!n)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(B)throw console.error("[Telegram.WebApp] Authentication request is already in progress."),Error("WebAppBiometricManagerAuthenticationRequested");var v={};if(typeof l.reason<"u"){var k=p(l.reason);if(k.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",k),Error("WebAppBiometricRequestAccessParamInvalid");k.length>0&&(v.reason=k)}return B={callback:P},u.postEvent("web_app_biometry_request_auth",!1,v),b},b.updateBiometricToken=function(l,P){if(!R())return b;if(l=l||"",l.length>1024)throw console.error("[Telegram.WebApp] Token is too long",l),Error("WebAppBiometricManagerTokenInvalid");if(N(),!t)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!n)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(E)throw console.error("[Telegram.WebApp] Token request is already in progress."),Error("WebAppBiometricManagerTokenUpdateRequested");return E={callback:P},u.postEvent("web_app_biometry_update_token",!1,{token:l}),b},b.openSettings=function(){if(!R())return b;if(N(),!t)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!o)throw console.error("[Telegram.WebApp] Biometric access was not requested yet."),Error("WebAppBiometricManagerBiometricsAccessNotRequested");return n?(console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings."),b):(u.postEvent("web_app_biometry_open_settings",!1),b)},b}(),re={};function lt(e,t){if(t.slug&&re[t.slug]){var r=re[t.slug];delete re[t.slug],r.callback&&r.callback(t.status),c("invoiceClosed",{url:r.url,status:t.status})}}var oe=!1;function ut(e,t){if(oe){var r=oe;oe=!1;var o=null;typeof t.button_id<"u"&&(o=t.button_id),r.callback&&r.callback(o),c("popupClosed",{button_id:o})}}var J=!1;function pt(e,t){if(J){var r=J,o=null;typeof t.data<"u"&&(o=t.data),r.callback&&r.callback(o)&&(J=!1,u.postEvent("web_app_close_scan_qr_popup",!1)),c("qrTextReceived",{data:o})}}function ct(e,t){J=!1,c("scanQrPopupClosed")}function ft(e,t){if(t.req_id&&q[t.req_id]){var r=q[t.req_id];delete q[t.req_id];var o=null;typeof t.data<"u"&&(o=t.data),r.callback&&r.callback(o),c("clipboardTextReceived",{data:o})}}var ne=!1;function dt(e,t){if(ne){var r=ne;ne=!1,r.callback&&r.callback(t.status=="allowed"),c("writeAccessRequested",{status:t.status})}}function bt(e,t){var r,o,n=0,g=function(){Ee("getRequestedContact",{},function(b,_){_&&_.length?(clearTimeout(o),e(_)):(n+=50,r=setTimeout(g,n))})},h=function(){clearTimeout(r),e("")};o=setTimeout(h,t),g()}var ie=!1;function gt(e,t){if(ie){var r=ie;ie=!1;var o=t.status=="sent",n={status:t.status};o?bt(function(g){if(g&&g.length){n.response=g,n.responseUnsafe=C.urlParseQueryString(g);for(var h in n.responseUnsafe){var b=n.responseUnsafe[h];try{(b.substr(0,1)=="{"&&b.substr(-1)=="}"||b.substr(0,1)=="["&&b.substr(-1)=="]")&&(n.responseUnsafe[h]=JSON.parse(b))}catch{}}}r.callback&&r.callback(o,n),c("contactRequested",n)},3e3):(r.callback&&r.callback(o,n),c("contactRequested",n))}}function vt(e,t){if(t.req_id&&q[t.req_id]){var r=q[t.req_id];delete q[t.req_id];var o=null,n=null;typeof t.result<"u"&&(o=t.result),typeof t.error<"u"&&(n=t.error),r.callback&&r.callback(n,o)}}function Ee(e,t,r){if(!m("6.9"))throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version "+w),Error("WebAppMethodUnsupported");var o=ke(16),n={req_id:o,method:e,params:t||{}};q[o]={callback:r},u.postEvent("web_app_invoke_custom_method",!1,n)}window.Telegram||(window.Telegram={}),Object.defineProperty(a,"initData",{get:function(){return L},enumerable:!0}),Object.defineProperty(a,"initDataUnsafe",{get:function(){return j},enumerable:!0}),Object.defineProperty(a,"version",{get:function(){return w},enumerable:!0}),Object.defineProperty(a,"platform",{get:function(){return le},enumerable:!0}),Object.defineProperty(a,"colorScheme",{get:function(){return F},enumerable:!0}),Object.defineProperty(a,"themeParams",{get:function(){return W},enumerable:!0}),Object.defineProperty(a,"isExpanded",{get:function(){return Ce},enumerable:!0}),Object.defineProperty(a,"viewportHeight",{get:function(){return(Z===!1?window.innerHeight:Z)-I},enumerable:!0}),Object.defineProperty(a,"viewportStableHeight",{get:function(){return(Y===!1?window.innerHeight:Y)-I},enumerable:!0}),Object.defineProperty(a,"isClosingConfirmationEnabled",{set:function(e){Ge(e)},get:function(){return me},enumerable:!0}),Object.defineProperty(a,"isVerticalSwipesEnabled",{set:function(e){Ke(e)},get:function(){return he},enumerable:!0}),Object.defineProperty(a,"headerColor",{set:function(e){Xe(e)},get:function(){return $e()},enumerable:!0}),Object.defineProperty(a,"backgroundColor",{set:function(e){Ze(e)},get:function(){return Se()},enumerable:!0}),Object.defineProperty(a,"bottomBarColor",{set:function(e){Ye(e)},get:function(){return te()},enumerable:!0}),Object.defineProperty(a,"BackButton",{value:rt,enumerable:!0}),Object.defineProperty(a,"MainButton",{value:ot,enumerable:!0}),Object.defineProperty(a,"SecondaryButton",{value:nt,enumerable:!0}),Object.defineProperty(a,"SettingsButton",{value:Ve,enumerable:!0}),Object.defineProperty(a,"HapticFeedback",{value:it,enumerable:!0}),Object.defineProperty(a,"CloudStorage",{value:at,enumerable:!0}),Object.defineProperty(a,"BiometricManager",{value:st,enumerable:!0}),a.setHeaderColor=function(e){a.headerColor=e},a.setBackgroundColor=function(e){a.backgroundColor=e},a.setBottomBarColor=function(e){a.bottomBarColor=e},a.enableClosingConfirmation=function(){a.isClosingConfirmationEnabled=!0},a.disableClosingConfirmation=function(){a.isClosingConfirmationEnabled=!1},a.enableVerticalSwipes=function(){a.isVerticalSwipesEnabled=!0},a.disableVerticalSwipes=function(){a.isVerticalSwipesEnabled=!1},a.isVersionAtLeast=function(e){return m(e)},a.onEvent=function(e,t){y(e,t)},a.offEvent=function(e,t){x(e,t)},a.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if(tt(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");u.postEvent("web_app_data_send",!1,{data:e})},a.switchInlineQuery=function(e,t){if(!m("6.6"))throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version "+w),Error("WebAppMethodUnsupported");if(!d.tgWebAppBotInline)throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),Error("WebAppInlineModeDisabled");if(e=e||"",e.length>256)throw console.error("[Telegram.WebApp] Inline query is too long",e),Error("WebAppInlineQueryInvalid");var r=[];if(t){if(!Array.isArray(t))throw console.error("[Telegram.WebApp] Choose chat types should be an array",t),Error("WebAppInlineChooseChatTypesInvalid");for(var o={users:1,bots:1,groups:1,channels:1},n=0;n<t.length;n++){var g=t[n];if(!o[g])throw console.error("[Telegram.WebApp] Choose chat type is invalid",g),Error("WebAppInlineChooseChatTypeInvalid");o[g]!=2&&(o[g]=2,r.push(g))}}u.postEvent("web_app_switch_inline_query",!1,{query:e,chat_types:r})},a.openLink=function(o,t){var r=document.createElement("A");if(r.href=o,r.protocol!="http:"&&r.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",o),Error("WebAppTgUrlInvalid");var o=r.href;if(t=t||{},m("6.1")){var n={url:o};m("6.4")&&t.try_instant_view&&(n.try_instant_view=!0),m("7.6")&&t.try_browser&&(n.try_browser=t.try_browser),u.postEvent("web_app_open_link",!1,n)}else window.open(o,"_blank")},a.openTelegramLink=function(e){var t=document.createElement("A");if(t.href=e,t.protocol!="http:"&&t.protocol!="https:")throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if(t.hostname!="t.me")throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var r=t.pathname+t.search;T||m("6.1")?u.postEvent("web_app_open_tg_link",!1,{path_full:r}):location.href="https://t.me"+r},a.openInvoice=function(e,t){var r=document.createElement("A"),o,n;if(r.href=e,r.protocol!="http:"&&r.protocol!="https:"||r.hostname!="t.me"||!(o=r.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(n=o[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!m("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+w),Error("WebAppMethodUnsupported");if(re[n])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");re[n]={url:e,callback:t},u.postEvent("web_app_open_invoice",!1,{slug:n})},a.showPopup=function(e,t){if(!m("6.2"))throw console.error("[Telegram.WebApp] Method showPopup is not supported in version "+w),Error("WebAppMethodUnsupported");if(oe)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppPopupOpened");var r="",o="",n=[],g={},h={};if(typeof e.title<"u"){if(r=p(e.title),r.length>64)throw console.error("[Telegram.WebApp] Popup title is too long",r),Error("WebAppPopupParamInvalid");r.length>0&&(h.title=r)}if(typeof e.message<"u"&&(o=p(e.message)),!o.length)throw console.error("[Telegram.WebApp] Popup message is required",e.message),Error("WebAppPopupParamInvalid");if(o.length>256)throw console.error("[Telegram.WebApp] Popup message is too long",o),Error("WebAppPopupParamInvalid");if(h.message=o,typeof e.buttons<"u"){if(!Array.isArray(e.buttons))throw console.error("[Telegram.WebApp] Popup buttons should be an array",e.buttons),Error("WebAppPopupParamInvalid");for(var b=0;b<e.buttons.length;b++){var _=e.buttons[b],f={},B="";if(typeof _.id<"u"&&(B=_.id.toString(),B.length>64))throw console.error("[Telegram.WebApp] Popup button id is too long",B),Error("WebAppPopupParamInvalid");f.id=B;var E=_.type;if(typeof E>"u"&&(E="default"),f.type=E,!(E=="ok"||E=="close"||E=="cancel"))if(E=="default"||E=="destructive"){var U="";if(typeof _.text<"u"&&(U=p(_.text)),!U.length)throw console.error("[Telegram.WebApp] Popup button text is required for type "+E,_.text),Error("WebAppPopupParamInvalid");if(U.length>64)throw console.error("[Telegram.WebApp] Popup button text is too long",U),Error("WebAppPopupParamInvalid");f.text=U}else throw console.error("[Telegram.WebApp] Popup button type is invalid",E),Error("WebAppPopupParamInvalid");n.push(f)}}else n.push({id:"",type:"close"});if(n.length<1)throw console.error("[Telegram.WebApp] Popup should have at least one button"),Error("WebAppPopupParamInvalid");if(n.length>3)throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),Error("WebAppPopupParamInvalid");h.buttons=n,oe={callback:t},u.postEvent("web_app_open_popup",!1,h)},a.showAlert=function(e,t){a.showPopup({message:e},t?function(){t()}:null)},a.showConfirm=function(e,t){a.showPopup({message:e,buttons:[{type:"ok",id:"ok"},{type:"cancel"}]},t?function(r){t(r=="ok")}:null)},a.showScanQrPopup=function(e,t){if(!m("6.4"))throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version "+w),Error("WebAppMethodUnsupported");if(J)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppScanQrPopupOpened");var r="",o={};if(typeof e.text<"u"){if(r=p(e.text),r.length>64)throw console.error("[Telegram.WebApp] Scan QR popup text is too long",r),Error("WebAppScanQrPopupParamInvalid");r.length>0&&(o.text=r)}J={callback:t},u.postEvent("web_app_open_scan_qr_popup",!1,o)},a.closeScanQrPopup=function(){if(!m("6.4"))throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version "+w),Error("WebAppMethodUnsupported");J=!1,u.postEvent("web_app_close_scan_qr_popup",!1)},a.readTextFromClipboard=function(e){if(!m("6.4"))throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version "+w),Error("WebAppMethodUnsupported");var t=ke(16),r={req_id:t};q[t]={callback:e},u.postEvent("web_app_read_text_from_clipboard",!1,r)},a.requestWriteAccess=function(e){if(!m("6.9"))throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version "+w),Error("WebAppMethodUnsupported");if(ne)throw console.error("[Telegram.WebApp] Write access is already requested"),Error("WebAppWriteAccessRequested");ne={callback:e},u.postEvent("web_app_request_write_access")},a.requestContact=function(e){if(!m("6.9"))throw console.error("[Telegram.WebApp] Method requestContact is not supported in version "+w),Error("WebAppMethodUnsupported");if(ie)throw console.error("[Telegram.WebApp] Contact is already requested"),Error("WebAppContactRequested");ie={callback:e},u.postEvent("web_app_request_phone")},a.shareToStory=function(e,t){if(t=t||{},!m("7.8"))throw console.error("[Telegram.WebApp] Method shareToStory is not supported in version "+w),Error("WebAppMethodUnsupported");var r=document.createElement("A");if(r.href=e,r.protocol!="http:"&&r.protocol!="https:")throw console.error("[Telegram.WebApp] Media url protocol is not supported",url),Error("WebAppMediaUrlInvalid");var o={};if(o.media_url=r.href,typeof t.text<"u"){var n=p(t.text);if(n.length>2048)throw console.error("[Telegram.WebApp] Text is too long",n),Error("WebAppShareToStoryParamInvalid");n.length>0&&(o.text=n)}if(typeof t.widget_link<"u"){if(t.widget_link=t.widget_link||{},r.href=t.widget_link.url,r.protocol!="http:"&&r.protocol!="https:")throw console.error("[Telegram.WebApp] Link protocol is not supported",url),Error("WebAppShareToStoryParamInvalid");var g={url:r.href};if(typeof t.widget_link.name<"u"){var h=p(t.widget_link.name);if(h.length>48)throw console.error("[Telegram.WebApp] Link name is too long",h),Error("WebAppShareToStoryParamInvalid");h.length>0&&(g.name=h)}o.widget_link=g}u.postEvent("web_app_share_to_story",!1,o)},a.invokeCustomMethod=function(e,t,r){Ee(e,t,r)},a.ready=function(){u.postEvent("web_app_ready")},a.expand=function(){u.postEvent("web_app_expand")},a.close=function(e){e=e||{};var t={};m("7.6")&&e.return_back&&(t.return_back=!0),u.postEvent("web_app_close",!1,t)},window.Telegram.WebApp=a,we(),ye(),Ae(),ve(),d.tgWebAppShowSettings&&Ve.show(),window.addEventListener("resize",X),T&&document.addEventListener("click",s),u.onEvent("theme_changed",be),u.onEvent("viewport_changed",ce),u.onEvent("invoice_closed",lt),u.onEvent("popup_closed",ut),u.onEvent("qr_text_received",pt),u.onEvent("scan_qr_popup_closed",ct),u.onEvent("clipboard_text_received",ft),u.onEvent("write_access_requested",dt),u.onEvent("phone_requested",gt),u.onEvent("custom_method_invoked",vt),u.postEvent("web_app_request_theme"),u.postEvent("web_app_request_viewport")})()});var Fe=Te(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.WebApp=void 0;Je();var yt=window;de.WebApp=yt.Telegram.WebApp});var ze=Te(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});var At=Fe();Be.default=At.WebApp});var A=wt(ze());var kt=(()=>{class C{constructor(){A.default.ready(),A.default.expand(),A.default.colorScheme&&document.documentElement.setAttribute("data-bs-theme",A.default.colorScheme),A.default.onEvent("themeChanged",()=>{document.documentElement.setAttribute("data-bs-theme",A.default.colorScheme)})}getInitData(){return A.default.initData}getUserLanguageCode(){return A.default.initDataUnsafe.user?.language_code}setMainButton(d,T){A.default.MainButton.setParams(d),A.default.MainButton.onClick(T)}setSecondaryButton(d,T){A.default.SecondaryButton.setParams(d),A.default.SecondaryButton.onClick(T)}visibleSettingsButton(d){this._buttonVisible(A.default.SettingsButton,d)}visibleSecondaryButton(d){this._buttonVisible(A.default.SecondaryButton,d)}visibleBackButton(d){this._buttonVisible(A.default.BackButton,d)}backButtonShow(){A.default.BackButton.show()}backButton(d){this.backButtonShow(),A.default.BackButton.onClick(d)}showAlert(d,T){A.default.showAlert(d,T)}showPopup(d,T){A.default.showPopup(d,T)}visibleMainButton(d){this._buttonVisible(A.default.MainButton,d)}mainButtonIsActive(d){d?A.default.MainButton.enable():A.default.MainButton.disable()}_buttonVisible(d,T){T?d.show():d.hide()}openLink(d,T){A.default.openLink(d,T)}openTelegramLink(d){A.default.openTelegramLink(d)}expand(){A.default.expand()}static{this.\u0275fac=function(T){return new(T||C)}}static{this.\u0275prov=Qe({token:C,factory:C.\u0275fac,providedIn:"root"})}}return C})();export{kt as a};