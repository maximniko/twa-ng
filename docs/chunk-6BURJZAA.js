import{a as z}from"./chunk-3DKU2TI3.js";import{a as V}from"./chunk-VT3G22K6.js";import{a as H}from"./chunk-P4KRLKJL.js";import{a as q}from"./chunk-OQP2OZ6Y.js";import{a as E,b as U}from"./chunk-C4PFFLVK.js";import"./chunk-CTBJ2Y2T.js";import{a as G}from"./chunk-JPANGMT5.js";import{a as y}from"./chunk-YP3BSCX6.js";import{b as $,c as C}from"./chunk-B3ZUF2BE.js";import{Ea as h,Fb as O,Gb as R,M as d,Mb as N,Na as w,Nb as P,Oa as l,Pa as u,Q as F,Qa as T,T as k,Va as v,Ya as j,Za as b,_a as g,aa as o,ba as s,ja as x,na as S,nb as B,oa as p,qb as A,ra as _,rb as f,ua as D,v as M,va as L,wa as a,xa as r,ya as m}from"./chunk-BTVH4YSR.js";var Y=(i,c)=>c.id;function Z(i,c){if(i&1&&(a(0,"a",1),m(1,"div",2),a(2,"div",3)(3,"div",4)(4,"div",5),l(5),r(),a(6,"div"),l(7),r()(),a(8,"div",4)(9,"div"),l(10,"Sum:"),r(),a(11,"div"),l(12),r()()(),a(13,"div",6),k(),a(14,"svg",7),m(15,"use"),r()()()),i&2){let e=c.$implicit,t=h(2);p("routerLink",t.routeCreator.transactionEdit(e)),o(),w("width:4rem;height:4rem;background-color:",t.getColor(e.tag.id),";"),o(4),u(e.tag.title),o(2),u(t.toLocalDate(e.date)),o(5),u(e.total),o(3),S("href","#"+t.symbols.chevronRight,null,"xlink")}}function tt(i,c){if(i&1&&(a(0,"div",0),D(1,Z,16,8,"a",1,Y),r()),i&2){let e=h();o(),L(e.transactions)}}var K=(()=>{class i{constructor(e){this.twa=e,this.routeCreator=C,this.symbols=G,this.getColor=q,this.toLocalDate=t=>P(t,this.twa.getUserLanguageCode())}static{this.\u0275fac=function(t){return new(t||i)(s(y))}}static{this.\u0275cmp=d({type:i,selectors:[["transactions-list"]],inputs:{transactions:"transactions"},standalone:!0,features:[v],decls:1,vars:1,consts:[[1,"list-group"],[1,"list-group-item","list-group-item-action","hstack","pe-0",3,"routerLink"],[1,"rounded-circle","d-flex"],[1,"vstack","ps-3","jcc"],[1,"jcb"],[1,"text-truncate"],[1,"jcc","px-3"],[1,"bi"]],template:function(t,n){t&1&&x(0,tt,3,0,"div",0),t&2&&_(n.transactions.length?0:-1)},dependencies:[f,R],encapsulation:2})}}return i})();var it=(i,c,e)=>({"bg-success":i,"bg-warning":c,"bg-danger":e}),Q=(()=>{class i{constructor(e,t){this.settings=e,this.filter=t,this.available={percent:0,valuenow:0,valuemax:0}}ngOnInit(){this.calculateExisting(this.transactions)}calculateExisting(e){if(!e.length)return;let t=e.reduce((n,I)=>(n.valuenow+=I.total,n),{percent:0,valuenow:0,valuemax:0});t.valuemax=this.settings.item().maxPerMonth*this.filter.coefficient,t.percent=t.valuenow/t.valuemax*100,this.available=t}ngOnChanges(e){e.transactions&&this.calculateExisting(this.transactions)}static{this.\u0275fac=function(t){return new(t||i)(s(z),s(E))}}static{this.\u0275cmp=d({type:i,selectors:[["main-available"]],inputs:{transactions:"transactions"},standalone:!0,features:[F,v],decls:13,vars:25,consts:[[1,"p-3","rounded-3","tg-bg-secondary"],["role","progressbar","aria-label","Example with label","aria-valuemin","0",1,"progress"],[1,"progress-bar",3,"ngClass"],[1,"jcb","pt-3"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),b(3,"number"),l(4),b(5,"number"),r()(),a(6,"div",3)(7,"div"),l(8),b(9,"number"),r(),a(10,"div"),l(11),b(12,"number"),r()()()),t&2&&(o(),S("aria-valuenow",n.available.valuenow)("aria-valuemax",n.available.valuemax),o(),w("width: ",g(3,9,n.available.percent,"1.1-1"),"%"),p("ngClass",j(21,it,n.available.percent>0,n.available.percent>40,n.available.percent>64)),o(2),T("",g(5,12,n.available.percent,"1.1-1"),"% "),o(4),T("\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E: ",g(9,15,n.available.valuenow,"1.1-1"),""),o(3),T("\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E: ",g(12,18,n.available.valuemax-n.available.valuenow,"1.1-1"),""))},dependencies:[f,B,A],encapsulation:2})}}return i})();function nt(i,c){if(i&1&&(a(0,"section",0)(1,"div",2)(2,"span",3),l(3),r(),m(4,"period-selector"),r(),a(5,"div",4),m(6,"main-available",5),r(),a(7,"div",6),m(8,"transactions-list",5),r()()),i&2){let e,t=h();o(3),u((e=t.localisation.t.transactions)!==null&&e!==void 0?e:"Transactions"),o(3),p("transactions",t.transactions),o(2),p("transactions",t.transactions)}}function at(i,c){i&1&&(a(0,"div",1),m(1,"main-intro"),r())}var It=(()=>{class i{constructor(e,t,n,I,W){this.twa=e,this.filter=t,this.localisation=n,this.service=I,this.router=W,this.routeCreator=C}ngOnInit(){this.loadTransactions(this.filter.fromTo),this.filterSubscription=this.filter.nextFromTo.pipe(M(1e3)).subscribe(e=>this.loadTransactions(e)),this.twa.visibleBackButton(!1),this.twa.setMainButton({text:"Add transaction",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.onMainClick())}ngOnDestroy(){this.twa.offMainButton(()=>this.onMainClick()),this.filterSubscription?.unsubscribe()}onMainClick(){this.router.navigate([C.transactionAdd()])}loadTransactions(e){this.service.list(new $(e)).subscribe(t=>this.transactions=t)}static{this.\u0275fac=function(t){return new(t||i)(s(y),s(E),s(H),s(N),s(O))}}static{this.\u0275cmp=d({type:i,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[v],decls:2,vars:1,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"m-auto"],[1,"hstack","p-3","pb-0"],[1,"m-auto","text-center","h5"],[1,"card-body","p-2","my-3"],[3,"transactions"],[1,"card-body","p-2"]],template:function(t,n){t&1&&x(0,nt,9,3,"section",0)(1,at,2,0,"div",1),t&2&&_(n.transactions.length?0:1)},dependencies:[f,K,U,V,Q],encapsulation:2})}}return i})();export{It as MainComponent};
