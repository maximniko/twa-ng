import{a as S,b as I,c as B,d as M,e as D,f as _,g as j}from"./chunk-52GMH4SD.js";import{a as C}from"./chunk-MW7TPTCG.js";import{a as w}from"./chunk-DKPWFTN6.js";import{C as s,D as o,J as f,L as a,Q as m,R as c,S as l,T as g,W as v,_ as h,fa as y,pa as b,t as d,ua as F,wa as u}from"./chunk-SW3WV5WT.js";var z=(()=>{let e=class e extends S{constructor(i,t,r,p){super(),this.twa=i,this.router=t,this.formBuilder=r,this.service=p,this.categoryForm=this.formBuilder.group({}),this.symbols=C}ngOnInit(){this.twa.backButton(()=>this.router.navigate([u.categories()])),this.twa.setMainButton({text:"Add",is_active:!0,is_visible:!0},this.submit)}ngOnDestroy(){this.twa.visibleMainButton(!1),this.twa.setMainButtonOffClick(this.submit)}submit(){if(this.categoryForm.invalid)return;let i=this.categoryForm.value;this.service.create(i).subscribe(t=>this.router.navigate([u.categoryViewId(t)]))}};e.\u0275fac=function(t){return new(t||e)(o(w),o(b),o(D),o(F))},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],standalone:!0,features:[f,h],decls:5,vars:2,consts:[[1,"bg-section"],[3,"ngSubmit","formGroup"],[3,"parentForm"]],template:function(t,r){t&1&&(m(0,"section",0)(1,"h1"),v(2,"add category"),c(),m(3,"form",1),g("ngSubmit",function(){return r.submit()}),l(4,"category-inputs",2),c()()),t&2&&(s(3),a("formGroup",r.categoryForm),s(),a("parentForm",r.categoryForm))},dependencies:[y,j,_,B,I,M],encapsulation:2});let n=e;return n})();export{z as AddComponent};
