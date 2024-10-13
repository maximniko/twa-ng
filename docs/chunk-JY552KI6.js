import{L as k,M as w,Vb as _,d as j,e as F}from"./chunk-7ZW7U2TK.js";var E=j(m=>{"use strict";(function(){"use strict";var r={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function d(s){return c(S(s),arguments)}function i(s,l){return d.apply(null,[s].concat(l||[]))}function c(s,l){var n=1,h=s.length,e,u="",p,a,t,y,b,v,x,g;for(p=0;p<h;p++)if(typeof s[p]=="string")u+=s[p];else if(typeof s[p]=="object"){if(t=s[p],t.keys)for(e=l[n],a=0;a<t.keys.length;a++){if(e==null)throw new Error(d('[sprintf] Cannot access property "%s" of undefined value "%s"',t.keys[a],t.keys[a-1]));e=e[t.keys[a]]}else t.param_no?e=l[t.param_no]:e=l[n++];if(r.not_type.test(t.type)&&r.not_primitive.test(t.type)&&e instanceof Function&&(e=e()),r.numeric_arg.test(t.type)&&typeof e!="number"&&isNaN(e))throw new TypeError(d("[sprintf] expecting number but found %T",e));switch(r.number.test(t.type)&&(x=e>=0),t.type){case"b":e=parseInt(e,10).toString(2);break;case"c":e=String.fromCharCode(parseInt(e,10));break;case"d":case"i":e=parseInt(e,10);break;case"j":e=JSON.stringify(e,null,t.width?parseInt(t.width):0);break;case"e":e=t.precision?parseFloat(e).toExponential(t.precision):parseFloat(e).toExponential();break;case"f":e=t.precision?parseFloat(e).toFixed(t.precision):parseFloat(e);break;case"g":e=t.precision?String(Number(e.toPrecision(t.precision))):parseFloat(e);break;case"o":e=(parseInt(e,10)>>>0).toString(8);break;case"s":e=String(e),e=t.precision?e.substring(0,t.precision):e;break;case"t":e=String(!!e),e=t.precision?e.substring(0,t.precision):e;break;case"T":e=Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),e=t.precision?e.substring(0,t.precision):e;break;case"u":e=parseInt(e,10)>>>0;break;case"v":e=e.valueOf(),e=t.precision?e.substring(0,t.precision):e;break;case"x":e=(parseInt(e,10)>>>0).toString(16);break;case"X":e=(parseInt(e,10)>>>0).toString(16).toUpperCase();break}r.json.test(t.type)?u+=e:(r.number.test(t.type)&&(!x||t.sign)?(g=x?"+":"-",e=e.toString().replace(r.sign,"")):g="",b=t.pad_char?t.pad_char==="0"?"0":t.pad_char.charAt(1):" ",v=t.width-(g+e).length,y=t.width&&v>0?b.repeat(v):"",u+=t.align?g+e+y:b==="0"?g+y+e:y+g+e)}return u}var o=Object.create(null);function S(s){if(o[s])return o[s];for(var l=s,n,h=[],e=0;l;){if((n=r.text.exec(l))!==null)h.push(n[0]);else if((n=r.modulo.exec(l))!==null)h.push("%");else if((n=r.placeholder.exec(l))!==null){if(n[2]){e|=1;var u=[],p=n[2],a=[];if((a=r.key.exec(p))!==null)for(u.push(a[1]);(p=p.substring(a[0].length))!=="";)if((a=r.key_access.exec(p))!==null)u.push(a[1]);else if((a=r.index_access.exec(p))!==null)u.push(a[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");n[2]=u}else e|=2;if(e===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");h.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(n[0].length)}return o[s]=h}typeof m<"u"&&(m.sprintf=d,m.vsprintf=i),typeof window<"u"&&(window.sprintf=d,window.vsprintf=i,typeof define=="function"&&define.amd&&define(function(){return{sprintf:d,vsprintf:i}}))})()});var f=F(E());var L=(()=>{class r{constructor(){this.localisation=k(_)}isInvalid(i){return i?.invalid&&(i?.dirty||i?.touched)}errors(i){return i?.errors}validationErrors(i,c){if(!i)return null;let o=[];return i?.required&&o.push((0,f.sprintf)(this.localisation.t.requiredErr??"%s is required.",c)),i?.minlength&&o.push((0,f.sprintf)(this.localisation.t.minlengthErr??"Minimum length of %s is %s.",c,i?.minlength.requiredLength)),i?.maxlength&&o.push((0,f.sprintf)(this.localisation.t.maxlengthErr??"Maximum length of %s is %s.",c,i?.maxlength.requiredLength)),i?.email&&o.push((0,f.sprintf)(this.localisation.t.emailErr??"%s must be an email address.",c)),i?.pattern&&o.push((0,f.sprintf)(this.localisation.t.patternErr??"%s is not valid.",c)),i?.invalidPhone&&o.push((0,f.sprintf)(this.localisation.t.invalidPhoneErr??"%s is invalid phone.",c)),i?.invalidType&&o.push((0,f.sprintf)(this.localisation.t.invalidTypeErr??"%s is invalid type.",c)),o.join(`
`)}static{this.\u0275fac=function(c){return new(c||r)}}static{this.\u0275cmp=w({type:r,selectors:[["ng-component"]],decls:0,vars:0,template:function(c,o){},encapsulation:2})}}return r})();export{L as a};
