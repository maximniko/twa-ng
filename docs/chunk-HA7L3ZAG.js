import{a as I}from"./chunk-MW7TPTCG.js";import{a as L}from"./chunk-DKPWFTN6.js";import{C as o,D as s,K as f,L as h,N as v,O as C,P as g,Q as c,R as r,U as u,W as d,X as _,_ as x,fa as k,pa as y,qa as w,t as p,ua as M,va as b,wa as l}from"./chunk-SW3WV5WT.js";var S=(e,t)=>t.id;function T(e,t){if(e&1&&(c(0,"li")(1,"a",1),d(2),r()()),e&2){let a=t.$implicit,i=u(2);o(),h("routerLink",i.routeCreator.categoryViewId(a)),o(),_(a.title)}}function B(e,t){if(e&1&&(c(0,"ul"),C(1,T,3,2,"li",null,S),r()),e&2){let a=u();o(),g(a.categories)}}var z=(()=>{let t=class t{constructor(i,n,m){this.service=i,this.twa=n,this.router=m,this.categories=[],this.symbols=I,this.routeCreator=l}ngOnInit(){this.service.list(new b({})).subscribe(i=>{this.categories=i}),this.twa.backButton(()=>this.router.navigate([l.main()])),this.twa.setMainButton({text:"Add Category",is_active:!0,is_visible:!0,has_shine_effect:!0},this.onMainClick)}onMainClick(){this.router.navigate([l.categoriesAdd()])}ngOnDestroy(){this.twa.visibleMainButton(!1),this.twa.setMainButtonOffClick(this.onMainClick)}};t.\u0275fac=function(n){return new(n||t)(s(M),s(L),s(y))},t.\u0275cmp=p({type:t,selectors:[["ng-component"]],standalone:!0,features:[x],decls:4,vars:1,consts:[[1,"bg-section"],[3,"routerLink"]],template:function(n,m){n&1&&(c(0,"section",0)(1,"h1"),d(2,"Categories list"),r(),f(3,B,3,0,"ul"),r()),n&2&&(o(3),v(3,m.categories.length?3:-1))},dependencies:[k,w],encapsulation:2});let e=t;return e})();export{z as ListComponent};