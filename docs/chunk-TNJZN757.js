import"./chunk-ORMLE5CC.js";import"./chunk-CTBJ2Y2T.js";import{b as M}from"./chunk-RUHEYKRC.js";import"./chunk-FXAJXUKS.js";import{a as _,h as C,j as y,l as w,q as k,s as D}from"./chunk-7KBYL3R4.js";import{a as E}from"./chunk-C4UGSRSE.js";import{$ as r,Ba as f,Cb as F,Gb as T,K as d,Ka as v,R as p,Ra as b,S as h,_ as s,hb as g,kb as S,la as l,ma as c,tb as I,ua as o,va as a,vb as B,wa as m}from"./chunk-RJQUMXUA.js";var K=(()=>{class n{constructor(t,i,e,u,j){this.activatedRoute=t,this.twa=i,this.router=e,this.formBuilder=u,this.service=j,this.transactionForm=this.formBuilder.group({}),this.symbols=_}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.transactionItem=t.transactionItem}),this.transactionFormSubscription=this.transactionForm.statusChanges.subscribe(t=>this.twa.mainButtonIsActive(t=="VALID")),this.twa.backButtonOnClick(()=>this.goBack()),this.twa.setSecondaryButton({text:"Delete",is_visible:!0,is_active:!0,has_shine_effect:!1,position:"left"},()=>this.delete()),this.twa.setMainButton({text:"Edit",is_visible:!0,is_active:!0,has_shine_effect:!0},()=>this.edit())}ngOnDestroy(){this.transactionFormSubscription?.unsubscribe(),this.serviceSubscription?.unsubscribe(),this.serviceDeleteSubscription?.unsubscribe(),this.twa.mainButtonIsActive(!0),this.twa.offMainButton(()=>this.edit()),this.twa.offBackButton(()=>this.goBack()),this.twa.offSecondaryButton(()=>this.delete(),!1)}edit(){if(this.transactionForm.invalid)return;let t=this.transactionForm.value;t.id=this.transactionItem.id,this.serviceSubscription=this.service.edit(t).subscribe(()=>{this.transactionForm.reset(),this.router.navigateByUrl(this._backUrl)})}delete(){this.serviceDeleteSubscription=this.service.delete(this.transactionItem).subscribe(t=>{t.status==S.NoContent&&this.goBack()})}goBack(){this.router.navigate([this._backUrl])}get _backUrl(){return T.chartCategory(this.transactionItem.category)}static{this.\u0275fac=function(i){return new(i||n)(r(I),r(E),r(B),r(k),r(F))}}static{this.\u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!0,features:[b],decls:9,vars:4,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"hstack","p-3","pb-0","color-accent"],[1,"m-auto","text-center","h5"],[1,"p-2","px-4"],[1,"bi",2,"width","2rem","height","2rem"],[1,"p-3",3,"ngSubmit","formGroup"],[3,"parentForm","transactionItem"]],template:function(i,e){i&1&&(o(0,"section",0)(1,"div",1)(2,"span",2),v(3,"Edit"),a(),o(4,"div",3),p(),o(5,"svg",4),m(6,"use"),a()()(),h(),o(7,"form",5),f("ngSubmit",function(){return e.edit()}),m(8,"transaction-inputs",6),a()()),i&2&&(s(6),l("href","#"+e.symbols.gearFill,null,"xlink"),s(),c("formGroup",e.transactionForm),s(),c("parentForm",e.transactionForm)("transactionItem",e.transactionItem))},dependencies:[g,D,y,C,w,M],encapsulation:2})}}return n})();export{K as EditComponent};
