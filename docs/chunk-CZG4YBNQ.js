import{a as L}from"./chunk-MW7TPTCG.js";import{a as S}from"./chunk-DXGKE67D.js";import{C as n,D as s,K as f,L as v,N as g,O as h,P as C,Q as c,R as r,U as u,W as d,X as _,_ as x,fa as y,pa as b,qa as w,t as p,ua as k,va as I,wa as m}from"./chunk-FMSUCZYU.js";var M=(e,t)=>t.id;function T(e,t){if(e&1&&(c(0,"li")(1,"a",1),d(2),r()()),e&2){let a=t.$implicit,i=u(2);n(),v("routerLink",i.routeCreator.categoryViewId(a)),n(),_(a.title)}}function E(e,t){if(e&1&&(c(0,"ul"),h(1,T,3,2,"li",null,M),r()),e&2){let a=u();n(),C(a.categories)}}var z=(()=>{let t=class t{constructor(i,o,l){this.service=i,this.twa=o,this.router=l,this.categories=[],this.symbols=L,this.routeCreator=m}ngOnInit(){this.service.list(new I({})).subscribe(i=>{this.categories=i}),this.twa.backButton(()=>this.router.navigate([m.main()])),this.twa.setMainButton({text:"Add Category",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.router.navigate([m.categoriesAdd()]))}ngOnDestroy(){this.twa.visibleMainButton(!1)}};t.\u0275fac=function(o){return new(o||t)(s(k),s(S),s(b))},t.\u0275cmp=p({type:t,selectors:[["ng-component"]],standalone:!0,features:[x],decls:4,vars:1,consts:[[1,"bg-section"],[1,"color-link",3,"routerLink"]],template:function(o,l){o&1&&(c(0,"section",0)(1,"h1"),d(2,"Categories list"),r(),f(3,E,3,0,"ul"),r()),o&2&&(n(3),g(3,l.categories.length?3:-1))},dependencies:[y,w],encapsulation:2});let e=t;return e})();export{z as ListComponent};