import{a as D,b as T}from"./chunk-G7HT642R.js";import{e as C,f as w,h as k,m as A,n as M}from"./chunk-5A7EJPGA.js";import{a as I}from"./chunk-6HWPIXC6.js";import{a as _}from"./chunk-XWKQ7OBR.js";import{Da as b,Db as B,Gb as u,M as p,Oa as g,Sa as F,T as l,U as h,aa as a,ba as r,ia as f,ib as S,na as v,oa as m,wa as o,wb as y,xa as s,ya as c}from"./chunk-7KNS5HIK.js";var q=(()=>{class n extends D{constructor(e,t,i,d){super(),this.twa=e,this.router=t,this.formBuilder=i,this.service=d,this.transactionForm=this.formBuilder.group({}),this.symbols=I}ngOnInit(){this.transactionFormSubscription=this.transactionForm.statusChanges.subscribe(e=>this.twa.mainButtonIsActive(e=="VALID")),this.twa.backButtonOnClick(()=>this.goBack()),this.twa.setMainButton({text:"Add",is_active:!0,is_visible:!0},()=>this.add())}ngOnDestroy(){this.transactionFormSubscription?.unsubscribe(),this.serviceSubscription?.unsubscribe(),this.twa.mainButtonIsActive(!0),this.twa.offBackButton(()=>this.goBack()),this.twa.offMainButton(()=>this.add())}add(){if(this.transactionForm.invalid)return;let e=this.transactionForm.value;this.serviceSubscription=this.service.create(e).subscribe(t=>this.router.navigate([u.chartCategory(t.category)]))}goBack(){this.router.navigate([u.main()])}static{this.\u0275fac=function(t){return new(t||n)(r(_),r(y),r(A),r(B))}}static{this.\u0275cmp=p({type:n,selectors:[["ng-component"]],standalone:!0,features:[f,F],decls:9,vars:4,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"hstack","p-3","pb-0","color-accent"],[1,"m-auto","text-center","h5"],[1,"p-3"],["width","2rem","height","2rem",1,"bi"],[1,"p-3",3,"ngSubmit","formGroup"],[3,"parentForm","categoryItem"]],template:function(t,i){t&1&&(o(0,"section",0)(1,"div",1)(2,"span",2),g(3,"Add"),s(),o(4,"div",3),l(),o(5,"svg",4),c(6,"use"),s()()(),h(),o(7,"form",5),b("ngSubmit",function(){return i.add()}),c(8,"transaction-inputs",6),s()()),t&2&&(a(6),v("href","#"+i.symbols.nodePlusFill,null,"xlink"),a(),m("formGroup",i.transactionForm),a(),m("parentForm",i.transactionForm)("categoryItem",i.categoryItem))},dependencies:[S,T,M,w,C,k],encapsulation:2})}}return n})();export{q as a};
