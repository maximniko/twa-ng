import{a as b}from"./chunk-MW7TPTCG.js";import{a as k}from"./chunk-4CX7E7ZT.js";import{Ca as l,E as d,F as n,M as u,N as f,P as y,S as r,T as a,X as v,aa as c,ca as g,ea as h,la as C,t as p,ta as x,va as I,wa as R}from"./chunk-XRLNJI4C.js";function E(t,e){if(t&1&&(r(0,"section",0)(1,"h1"),c(2),a(),r(3,"a",1),c(4,"Edit"),a()()),t&2){let m=v();d(2),g("Category name: ",m.categoryItem.title,""),d(),f("routerLink",m.routeCreator.categoriesEdit(m.categoryItem))}}function S(t,e){t&1&&(r(0,"section",0)(1,"p"),c(2,"empty category :("),a()())}var F=(()=>{let e=class e{constructor(o,i,s){this.activatedRoute=o,this.twa=i,this.router=s,this.symbols=b,this.routeCreator=l}ngOnInit(){this.activatedRoute.data.subscribe(o=>this.categoryItem=o.categoryItem),this.twa.backButton(()=>this.router.navigate([l.categories()]))}};e.\u0275fac=function(i){return new(i||e)(n(x),n(k),n(I))},e.\u0275cmp=p({type:e,selectors:[["my-money-category-detail"]],standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"section"],[3,"routerLink"]],template:function(i,s){i&1&&u(0,E,5,2,"section",0)(1,S,3,0),i&2&&y(0,s.categoryItem?0:1)},dependencies:[C,R],encapsulation:2});let t=e;return t})();export{F as DetailComponent};
