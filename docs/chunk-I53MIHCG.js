import"./chunk-KZPDA2VS.js";import{b as T}from"./chunk-D6Y537S2.js";import{e as C,f as F,h as k,m as w,n as E}from"./chunk-BKVJLWRT.js";import{a as y}from"./chunk-6HWPIXC6.js";import{a as M}from"./chunk-OZCAM6KQ.js";import{Da as f,Db as I,Gb as j,M as l,Oa as v,Sa as b,T as d,U as p,aa as a,ba as o,ib as g,lb as S,na as h,oa as c,ub as _,wa as r,wb as B,xa as s,ya as m}from"./chunk-GVVUN7W4.js";var K=(()=>{class n{constructor(t,i,e,u,D){this.activatedRoute=t,this.twa=i,this.router=e,this.formBuilder=u,this.service=D,this.transactionForm=this.formBuilder.group({}),this.symbols=y}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.transactionItem=t.transactionItem,this.twa.backButtonOnClick(()=>this.goBack)}),this.twa.setSecondaryButton({text:"Delete",is_visible:!0,is_active:!0,has_shine_effect:!1,position:"left"},()=>this.delete),this.twa.setMainButton({text:"Save",is_visible:!0,is_active:!0,has_shine_effect:!0},()=>this.save)}ngOnDestroy(){this.twa.offBackButton(()=>this.goBack,!1),this.twa.offMainButton(()=>this.save),this.twa.offSecondaryButton(()=>this.delete,!1)}save(){if(this.transactionForm.invalid)return;let t=this.transactionForm.value;t.id=this.transactionItem.id,this.service.edit(t).subscribe(()=>this.router.navigateByUrl(this._backUrl))}delete(){this.service.delete(this.transactionItem).subscribe(t=>{t.status==S.NoContent&&this.goBack()})}goBack(){this.router.navigate([this._backUrl])}get _backUrl(){return j.chartCategory(this.transactionItem.category)}static{this.\u0275fac=function(i){return new(i||n)(o(_),o(M),o(B),o(w),o(I))}}static{this.\u0275cmp=l({type:n,selectors:[["ng-component"]],standalone:!0,features:[b],decls:9,vars:4,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"hstack","p-3","pb-0","color-accent"],[1,"m-auto","text-center","h5"],[1,"p-3"],["width","2rem","height","2rem",1,"bi"],[1,"p-3",3,"ngSubmit","formGroup"],[3,"parentForm","transactionItem"]],template:function(i,e){i&1&&(r(0,"section",0)(1,"div",1)(2,"span",2),v(3,"Edit"),s(),r(4,"div",3),d(),r(5,"svg",4),m(6,"use"),s()()(),p(),r(7,"form",5),f("ngSubmit",function(){return e.save()}),m(8,"transaction-inputs",6),s()()),i&2&&(a(6),h("href","#"+e.symbols.gearFill,null,"xlink"),a(),c("formGroup",e.transactionForm),a(),c("parentForm",e.transactionForm)("transactionItem",e.transactionItem))},dependencies:[g,E,F,C,k,T],encapsulation:2})}}return n})();export{K as EditComponent};