import"./chunk-ATRWO6WR.js";import{a as G}from"./chunk-JA6ZZJ6A.js";import{$ as K,Aa as ve,B as fe,D as h,Da as B,E as m,Fa as H,I as P,Ia as N,J as R,K as T,L as Q,N as M,O as A,P as x,Q as J,Ra as we,S as d,Ta as De,U as ge,Za as Te,_ as Y,a as j,aa as q,b as re,ba as S,da as me,ea as Z,f as le,g as f,h as ce,ia as r,j as z,ja as l,k as W,ka as c,la as F,m as w,ma as C,n as de,na as X,o as I,oa as be,p as he,pa as ye,q as ue,qa as u,ra as ee,s as pe,sa as O,t as _e,v as g,w as U,wa as b,ya as te,z as D}from"./chunk-Z6JLSZQG.js";var Ie=["*"];var Me={animation:!0,transitionTimerDelayMs:5},Ae=(()=>{class n{constructor(){this.animation=Me.animation}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function xe(n){let{transitionDelay:s,transitionDuration:t}=window.getComputedStyle(n),e=parseFloat(s),i=parseFloat(t);return(e+i)*1e3}function Fe(n){return typeof n=="string"}function ie(n){return n!=null}function Be(n){return n&&n.then}function Se(n){return(n||document.body).getBoundingClientRect()}function He(n){return s=>new le(t=>{let e=a=>n.run(()=>t.next(a)),i=a=>n.run(()=>t.error(a)),o=()=>n.run(()=>t.complete());return s.subscribe({next:e,error:i,complete:o})})}var Ge=()=>{},{transitionTimerDelayMs:Ve}=Me,V=new Map,$=(n,s,t,e)=>{let i=e.context||{},o=V.get(s);if(o)switch(e.runningTransition){case"continue":return ce;case"stop":n.run(()=>o.transition$.complete()),i=Object.assign(o.context,i),V.delete(s)}let a=t(s,e.animation,i)||Ge;if(!e.animation||window.getComputedStyle(s).transitionProperty==="none")return n.run(()=>a()),z(void 0).pipe(He(n));let p=new f,_=new f,y=p.pipe(pe(!0));V.set(s,{transition$:p,complete:()=>{_.next(),_.complete()},context:i});let v=xe(s);return n.runOutsideAngular(()=>{let k=w(s,"transitionend").pipe(g(y),I(({target:Pe})=>Pe===s)),ke=de(v+Ve).pipe(g(y));he(ke,k,_).pipe(g(y)).subscribe(()=>{V.delete(s),n.run(()=>{a(),p.next(),p.complete()})})}),p.asObservable()};var bi=(()=>{let n=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,s=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(n()||s()):!1})();var $e=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Ce(n){let s=Array.from(n.querySelectorAll($e)).filter(t=>t.tabIndex!==-1);return[s[0],s[s.length-1]]}var Le=(n,s,t,e=!1)=>{n.runOutsideAngular(()=>{let i=w(s,"focusin").pipe(g(t),W(o=>o.target));w(s,"keydown").pipe(g(t),I(o=>o.key==="Tab"),U(i)).subscribe(([o,a])=>{let[p,_]=Ce(s);(a===p||a===s)&&o.shiftKey&&(_.focus(),o.preventDefault()),a===_&&!o.shiftKey&&(p.focus(),o.preventDefault())}),e&&w(s,"click").pipe(g(t),U(i),W(o=>o[1])).subscribe(o=>o.focus())})};var yi=new Date(1882,10,12),vi=new Date(2174,10,25);var wi=1e3*60*60*24;var oe=1080,je=24*oe,ze=12*oe+793,Di=29*je+ze,Ti=11*oe+204;var E=class{constructor(s,t,e){this.nodes=s,this.viewRef=t,this.componentRef=e}};var We=(()=>{class n{constructor(){this._document=h(H)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),e=this._document.body,i=e.style,{overflow:o,paddingRight:a}=i;if(t>0){let p=parseFloat(window.getComputedStyle(e).paddingRight);i.paddingRight=`${p+t}px`}return i.overflow="hidden",()=>{t>0&&(i.paddingRight=a),i.overflow=o}}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Mi=new fe("live announcer delay",{providedIn:"root",factory:()=>100});var Ue=(()=>{class n{constructor(){this._ngbConfig=h(Ae),this.backdrop=!0,this.keyboard=!0,this.position="start",this.scroll=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),L=class{close(s){}dismiss(s){}},ne=class{get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(g(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(g(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._panelCmptRef.instance.shown.asObservable()}constructor(s,t,e,i){this._panelCmptRef=s,this._contentRef=t,this._backdropCmptRef=e,this._beforeDismiss=i,this._closed=new f,this._dismissed=new f,this._hidden=new f,s.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),e&&e.instance.dismissEvent.subscribe(o=>{this.dismiss(o)}),this.result=new Promise((o,a)=>{this._resolve=o,this._reject=a}),this.result.then(null,()=>{})}close(s){this._panelCmptRef&&(this._closed.next(s),this._resolve(s),this._removeOffcanvasElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeOffcanvasElements()}dismiss(s){if(this._panelCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let t=this._beforeDismiss();Be(t)?t.then(e=>{e!==!1&&this._dismiss(s)},()=>{}):t!==!1&&this._dismiss(s)}}_removeOffcanvasElements(){let s=this._panelCmptRef.instance.hide(),t=this._backdropCmptRef?this._backdropCmptRef.instance.hide():z(void 0);s.subscribe(()=>{let{nativeElement:e}=this._panelCmptRef.location;e.parentNode.removeChild(e),this._panelCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._panelCmptRef=null,this._contentRef=null}),t.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:e}=this._backdropCmptRef.location;e.parentNode.removeChild(e),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),ue(s,t).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},ae=function(n){return n[n.BACKDROP_CLICK=0]="BACKDROP_CLICK",n[n.ESC=1]="ESC",n}(ae||{}),Qe=(()=>{class n{constructor(){this._nativeElement=h(J).nativeElement,this._zone=h(x),this._injector=h(M),this.dismissEvent=new A}ngOnInit(){q(()=>$(this._zone,this._nativeElement,(t,e)=>{e&&Se(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"}),{injector:this._injector,phase:K.MixedReadWrite})}hide(){return $(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}dismiss(){this.static||this.dismissEvent.emit(ae.BACKDROP_CLICK)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["ngb-offcanvas-backdrop"]],hostVars:6,hostBindings:function(e,i){e&1&&C("mousedown",function(){return i.dismiss()}),e&2&&(Z("offcanvas-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),me("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass",static:"static"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[b],decls:0,vars:0,template:function(e,i){},encapsulation:2})}}return n})(),Je=(()=>{class n{constructor(){this._document=h(H),this._elRef=h(J),this._zone=h(x),this._injector=h(M),this._closed$=new f,this._elWithFocus=null,this.keyboard=!0,this.position="start",this.dismissEvent=new A,this.shown=new f,this.hidden=new f}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,q(()=>this._show(),{injector:this._injector,phase:K.MixedReadWrite})}ngOnDestroy(){this._disableEventHandling()}hide(){let t={animation:this.animation,runningTransition:"stop"},e=$(this._zone,this._elRef.nativeElement,i=>(i.classList.remove("showing"),i.classList.add("hiding"),()=>i.classList.remove("show","hiding")),t);return e.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),e}_show(){let t={animation:this.animation,runningTransition:"continue"};$(this._zone,this._elRef.nativeElement,(i,o)=>(o&&Se(i),i.classList.add("show","showing"),()=>i.classList.remove("showing")),t).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{w(t,"keydown").pipe(g(this._closed$),I(e=>e.key==="Escape")).subscribe(e=>{this.keyboard&&requestAnimationFrame(()=>{e.defaultPrevented||this._zone.run(()=>this.dismiss(ae.ESC))})})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let e=t.querySelector("[ngbAutofocus]"),i=Ce(t)[0];(e||i||t).focus()}}_restoreFocus(){let t=this._document.body,e=this._elWithFocus,i;e&&e.focus&&t.contains(e)?i=e:i=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>i.focus()),this._elWithFocus=null})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["ngb-offcanvas-panel"]],hostAttrs:["role","dialog","tabindex","-1"],hostVars:5,hostBindings:function(e,i){e&2&&(S("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),Z("offcanvas offcanvas-"+i.position+(i.panelClass?" "+i.panelClass:"")))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",keyboard:"keyboard",panelClass:"panelClass",position:"position"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[b],ngContentSelectors:Ie,decls:1,vars:0,template:function(e,i){e&1&&(be(),ye(0))},encapsulation:2})}}return n})(),Ye=(()=>{class n{constructor(){this._applicationRef=h(ve),this._injector=h(M),this._document=h(H),this._scrollBar=h(We),this._activePanelCmptHasChanged=new f,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._panelAttributes=["animation","ariaDescribedBy","ariaLabelledBy","keyboard","panelClass","position"],this._activeInstance=new A;let t=h(x);this._activePanelCmptHasChanged.subscribe(()=>{this._panelCmpt&&Le(t,this._panelCmpt.location.nativeElement,this._activePanelCmptHasChanged)})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,e,i){let o=i.container instanceof HTMLElement?i.container:ie(i.container)?this._document.querySelector(i.container):this._document.body;if(!o)throw new Error(`The specified offcanvas container "${i.container||"body"}" was not found in the DOM.`);i.scroll||this._hideScrollBar();let a=new L,p=this._getContentRef(i.injector||t,e,a),_=i.backdrop!==!1?this._attachBackdrop(o):void 0,y=this._attachWindowComponent(o,p.nodes),v=new ne(y,p,_,i.beforeDismiss);return this._registerOffcanvasRef(v),this._registerPanelCmpt(y),v.hidden.pipe(_e(()=>this._restoreScrollBar())).subscribe(),a.close=k=>{v.close(k)},a.dismiss=k=>{v.dismiss(k)},this._applyPanelOptions(y.instance,i),_&&_.instance&&(this._applyBackdropOptions(_.instance,i),_.changeDetectorRef.detectChanges()),y.changeDetectorRef.detectChanges(),v}get activeInstance(){return this._activeInstance}dismiss(t){this._offcanvasRef?.dismiss(t)}hasOpenOffcanvas(){return!!this._offcanvasRef}_attachBackdrop(t){let e=B(Qe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(e.hostView),t.appendChild(e.location.nativeElement),e}_attachWindowComponent(t,e){let i=B(Je,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:e});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_applyPanelOptions(t,e){this._panelAttributes.forEach(i=>{ie(e[i])&&(t[i]=e[i])})}_applyBackdropOptions(t,e){this._backdropAttributes.forEach(i=>{ie(e[i])&&(t[i]=e[i])}),t.static=e.backdrop==="static"}_getContentRef(t,e,i){return e?e instanceof ge?this._createFromTemplateRef(e,i):Fe(e)?this._createFromString(e):this._createFromComponent(t,e,i):new E([])}_createFromTemplateRef(t,e){let i={$implicit:e,close(a){e.close(a)},dismiss(a){e.dismiss(a)}},o=t.createEmbeddedView(i);return this._applicationRef.attachView(o),new E([o.rootNodes],o)}_createFromString(t){let e=this._document.createTextNode(`${t}`);return new E([[e]])}_createFromComponent(t,e,i){let o=M.create({providers:[{provide:L,useValue:i}],parent:t}),a=B(e,{environmentInjector:this._applicationRef.injector,elementInjector:o}),p=a.location.nativeElement;return this._applicationRef.attachView(a.hostView),new E([[p]],a.hostView,a)}_registerOffcanvasRef(t){let e=()=>{this._offcanvasRef=void 0,this._activeInstance.emit(this._offcanvasRef)};this._offcanvasRef=t,this._activeInstance.emit(this._offcanvasRef),t.result.then(e,e)}_registerPanelCmpt(t){this._panelCmpt=t,this._activePanelCmptHasChanged.next(),t.onDestroy(()=>{this._panelCmpt=void 0,this._activePanelCmptHasChanged.next()})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Oe=(()=>{class n{constructor(){this._injector=h(M),this._offcanvasStack=h(Ye),this._config=h(Ue)}open(t,e={}){let i=j(re(j({},this._config),{animation:this._config.animation}),e);return this._offcanvasStack.open(this._injector,t,i)}get activeInstance(){return this._offcanvasStack.activeInstance}dismiss(t){this._offcanvasStack.dismiss(t)}hasOpenOffcanvas(){return this._offcanvasStack.hasOpenOffcanvas()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ke(n,s){if(n&1){let t=F();r(0,"div",4)(1,"h4",5),O(2,"Menu"),l(),r(3,"button",6),C("click",function(){let i=P(t).$implicit;return R(i.dismiss("Cross click"))}),l()(),r(4,"div",7)(5,"a",8),T(),r(6,"svg",3),c(7,"use"),l(),O(8," Setting "),l(),Q(),r(9,"a",8),T(),r(10,"svg",3),c(11,"use"),l(),O(12," Categories "),l(),Q(),r(13,"div",9)(14,"button",10),C("click",function(){let i=P(t).$implicit;return R(i.close("Save click"))}),O(15,"Save"),l()()()}if(n&2){let t=X();d(5),u("routerLink",t.routeCreator.settings()),d(2),S("href","#"+t.symbols.sliders,null,"xlink"),d(2),u("routerLink",t.routeCreator.categories()),d(2),S("href","#"+t.symbols.sliders,null,"xlink")}}var Ne=(()=>{class n{constructor(){this.offcanvasService=h(Oe),this.routeCreator=Te,this.symbols=G}open(t){this.offcanvasService.open(t,{ariaLabelledBy:"offcanvas-basic-title"})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["my-money-header"]],standalone:!0,features:[b],decls:6,vars:1,consts:[["content",""],[1,"jcb","p-2","pb-0"],[1,"navbar-toggler","p-2",3,"click"],[1,"bi"],[1,"offcanvas-header"],["id","offcanvas-basic-title",1,"offcanvas-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"offcanvas-body"],[1,"btn",3,"routerLink"],[1,"text-end"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(e,i){if(e&1){let o=F();r(0,"header",1)(1,"button",2),C("click",function(){P(o);let p=ee(5);return R(i.open(p))}),T(),r(2,"svg",3),c(3,"use"),l()()(),Y(4,Ke,16,4,"ng-template",null,0,te)}e&2&&(d(3),S("href","#"+i.symbols.menu,null,"xlink"))},dependencies:[N,De],encapsulation:2})}}return n})();var Ee=(()=>{class n{constructor(){this.symbols=G}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["app-symbols"]],standalone:!0,features:[b],decls:38,vars:14,consts:[["xmlns","http://www.w3.org/2000/svg",2,"display","none"],["viewBox","0 0 16 16",3,"id"],["d","M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"],["fill-rule","evenodd","d","M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"],["d","M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"],["fill-rule","evenodd","d","M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"],["d","M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"],["d","M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"],["fill-rule","evenodd","d","M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"],["d","M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"],["d","M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"],["d","M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1z"],["d","M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"],["d","M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"],["d","M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"],["d","M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"],["fill-rule","evenodd","d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"],["d","M0 6.5a6.5 6.5 0 0 1 12.346-2.846 6.5 6.5 0 1 1-8.691 8.691A6.5 6.5 0 0 1 0 6.5m5.144 6.358a5.5 5.5 0 1 0 7.714-7.714 6.5 6.5 0 0 1-7.714 7.714m-.733-1.269c.363.15.746.261 1.144.33l-1.474-1.474c.069.398.18.78.33 1.144m2.614.386a5.47 5.47 0 0 0 1.173-.242L4.374 7.91a5.958 5.958 0 0 0-.296 1.118l2.947 2.947Zm2.157-.672c.297-.166.577-.36.838-.576L5.418 6.126a6.016 6.016 0 0 0-.587.826l4.35 4.351Zm1.545-1.284c.216-.26.41-.54.576-.837L6.953 4.83a5.97 5.97 0 0 0-.827.587l4.6 4.602Zm1.006-1.822c.121-.374.204-.766.242-1.172L9.028 4.078c-.386.063-.76.163-1.118.296l3.823 3.824Zm.186-2.642a5.463 5.463 0 0 0-.33-1.144 5.46 5.46 0 0 0-1.144-.33z"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"],["d","m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"],["d","M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"],["fill-rule","evenodd","d","M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"],["fill-rule","evenodd","d","M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"]],template:function(e,i){e&1&&(T(),r(0,"svg",0)(1,"symbol",1),c(2,"path",2)(3,"path",3),l(),r(4,"symbol",1),c(5,"path",4),l(),r(6,"symbol",1),c(7,"path",5)(8,"path",6)(9,"path",7),l(),r(10,"symbol",1),c(11,"path",8)(12,"path",6)(13,"path",7),l(),r(14,"symbol",1),c(15,"path",9),l(),r(16,"symbol",1),c(17,"path",10)(18,"path",11),l(),r(19,"symbol",1),c(20,"path",12),l(),r(21,"symbol",1),c(22,"path",13)(23,"path",14)(24,"path",15),l(),r(25,"symbol",1),c(26,"path",16),l(),r(27,"symbol",1),c(28,"path",17),l(),r(29,"symbol",1),c(30,"path",18)(31,"path",19),l(),r(32,"symbol",1),c(33,"path",20),l(),r(34,"symbol",1),c(35,"path",21),l(),r(36,"symbol",1),c(37,"path",22),l()()),e&2&&(d(),u("id",i.symbols.peopleCircle),d(3),u("id",i.symbols.collection),d(2),u("id",i.symbols.journalCheck),d(4),u("id",i.symbols.journalPlus),d(4),u("id",i.symbols.lightningCharge),d(2),u("id",i.symbols.personCheck),d(3),u("id",i.symbols.search),d(2),u("id",i.symbols.toggles2),d(4),u("id",i.symbols.chevronRight),d(2),u("id",i.symbols.transparency),d(2),u("id",i.symbols.infoCircle),d(3),u("id",i.symbols.pencilFill),d(2),u("id",i.symbols.sliders),d(2),u("id",i.symbols.menu))},dependencies:[N],encapsulation:2})}}return n})();var Yi=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=m({type:n,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[b],decls:4,vars:0,consts:[[1,"main","d-flex","flex-column","h-100"]],template:function(e,i){e&1&&(r(0,"main",0),c(1,"my-money-header")(2,"router-outlet"),l(),c(3,"app-symbols"))},dependencies:[N,we,Ne,Ee],encapsulation:2})}}return n})();export{Yi as MyMoneyComponent};
