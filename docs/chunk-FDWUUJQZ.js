import{b as C}from"./chunk-O5AWAWTF.js";import{a as S}from"./chunk-VPMWDKGC.js";import{a as I}from"./chunk-MW7TPTCG.js";import{C as u,D as o,L as d,Q as a,R as p,T as f,W as g,_ as l,fa as v,na as y,pa as b,t as s,ua as h,wa as m}from"./chunk-U2ZGQN5B.js";var B=(()=>{let i=class i{constructor(e,t,r,c){this.activatedRoute=e,this.twa=t,this.router=r,this.service=c,this.symbols=I}ngOnInit(){this.twa.backButton(()=>this.router.navigate([m.categories()])),this.activatedRoute.data.subscribe(e=>this.categoryItem=e.categoryItem)}onSubmit(e){this.service.edit(e).subscribe(t=>this.router.navigateByUrl(m.categoryViewId(t)))}};i.\u0275fac=function(t){return new(t||i)(o(y),o(S),o(b),o(h))},i.\u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!0,features:[l],decls:3,vars:1,consts:[[1,"bg-section"],[3,"onSubmit","categoryItem"]],template:function(t,r){t&1&&(a(0,"section",0),g(1," edit category "),a(2,"category-form",1),f("onSubmit",function(R){return r.onSubmit(R)}),p()()),t&2&&(u(2),d("categoryItem",r.categoryItem))},dependencies:[v,C],encapsulation:2});let n=i;return n})();export{B as EditComponent};
