import{a as I}from"./chunk-MW7TPTCG.js";import{a as L}from"./chunk-4CX7E7ZT.js";import{Aa as b,Ba as M,Ca as m,E as n,F as s,M as f,N as v,P as h,Q as g,R as C,S as c,T as r,X as u,aa as d,ba as _,ea as x,la as y,t as p,va as k,wa as w}from"./chunk-XRLNJI4C.js";var S=(e,t)=>t.id;function T(e,t){if(e&1&&(c(0,"li")(1,"a",1),d(2),r()()),e&2){let a=t.$implicit,i=u(2);n(),v("routerLink",i.routeCreator.categoryViewId(a)),n(),_(a.title)}}function E(e,t){if(e&1&&(c(0,"ul"),g(1,T,3,2,"li",null,S),r()),e&2){let a=u();n(),C(a.categories)}}var z=(()=>{let t=class t{constructor(i,o,l){this.service=i,this.twa=o,this.router=l,this.categories=[],this.symbols=I,this.routeCreator=m}ngOnInit(){this.service.list(new M({})).subscribe(i=>{this.categories=i}),this.twa.backButton(()=>this.router.navigate([m.main()])),this.twa.setMainButton({text:"Add Category",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.onMainClick())}onMainClick(){this.router.navigate([m.categoriesAdd()])}ngOnDestroy(){this.twa.visibleMainButton(!1)}};t.\u0275fac=function(o){return new(o||t)(s(b),s(L),s(k))},t.\u0275cmp=p({type:t,selectors:[["ng-component"]],standalone:!0,features:[x],decls:4,vars:1,consts:[[1,"section"],[3,"routerLink"]],template:function(o,l){o&1&&(c(0,"section",0)(1,"h1"),d(2,"Categories list"),r(),f(3,E,3,0,"ul"),r()),o&2&&(n(3),h(3,l.categories.length?3:-1))},dependencies:[y,w],encapsulation:2});let e=t;return e})();export{z as ListComponent};
