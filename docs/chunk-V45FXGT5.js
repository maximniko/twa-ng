import{a as _}from"./chunk-BZFPQ7GI.js";import{b as R}from"./chunk-FBRA2AFL.js";import"./chunk-76AENGO6.js";import{h as A,j as T,l as j,q as B,s as G}from"./chunk-KHKBDGFC.js";import{a as M}from"./chunk-K5VLQPHX.js";import{$ as i,Ba as h,Cb as F,Gb as w,K as u,Ka as y,R as l,Ra as C,S as f,_ as n,ga as g,hb as I,la as v,ma as s,tb as b,ua as o,va as a,vb as S,wa as d}from"./chunk-FDKZZJ5T.js";var J=(()=>{class r extends _{constructor(m,t,e,c,p){super(t,e,c,p),this.activatedRoute=m,this.twa=t,this.router=e,this.formBuilder=c,this.service=p,this.activatedRoute.data.subscribe(D=>{this.categoryItem=D.categoryItem})}goBack(){this.router.navigate([w.chartCategory(this.categoryItem)])}static{this.\u0275fac=function(t){return new(t||r)(i(b),i(M),i(S),i(B),i(F))}}static{this.\u0275cmp=u({type:r,selectors:[["ng-component"]],standalone:!0,features:[g,C],decls:9,vars:4,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"hstack","p-3","pb-0","color-accent"],[1,"m-auto","text-center","h5"],[1,"p-2","px-4"],[1,"bi",2,"width","2rem","height","2rem"],[1,"p-3",3,"ngSubmit","formGroup"],[3,"parentForm","categoryItem"]],template:function(t,e){t&1&&(o(0,"section",0)(1,"div",1)(2,"span",2),y(3,"Add"),a(),o(4,"div",3),l(),o(5,"svg",4),d(6,"use"),a()()(),f(),o(7,"form",5),h("ngSubmit",function(){return e.add()}),d(8,"transaction-inputs",6),a()()),t&2&&(n(6),v("href","#"+e.symbols.nodePlusFill,null,"xlink"),n(),s("formGroup",e.transactionForm),n(),s("parentForm",e.transactionForm)("categoryItem",e.categoryItem))},dependencies:[I,R,G,T,A,j],encapsulation:2})}}return r})();export{J as AddByCategoryComponent};