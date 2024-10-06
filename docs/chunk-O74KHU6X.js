import{a as A}from"./chunk-MIOGJDEZ.js";import{a as F}from"./chunk-FJACRQSK.js";import{c as j}from"./chunk-NICU5GG4.js";import{a as T}from"./chunk-EHHJ2D6M.js";import{a as B}from"./chunk-GBUQ5BBT.js";import{a as O}from"./chunk-6HWPIXC6.js";import{Ea as h,Eb as L,Gb as g,M as l,Na as k,Oa as m,Pa as b,Sa as p,T as S,aa as s,ba as f,ib as u,ja as v,jb as D,na as I,oa as d,ra as x,ua as _,va as M,wa as r,wb as E,xa as n,xb as w,ya as c}from"./chunk-72DO76UB.js";var P=(()=>{class t{constructor(){this.chartCategories=[],this.doughnutChartLabels=[],this.doughnutChartDatasets=[],this.doughnutChartOptions={animation:{animateRotate:!0,animateScale:!0},responsive:!0}}ngOnInit(){this.initChartData()}initChartData(){let e=this.chartCategories.reduce((o,C,$)=>($<5?(o.labels.push(C.category.title),o.backgroundColors.push(C.color),o.data.push(C.total)):(o.labels[5]="Others",o.backgroundColors.push("#999"),o.data[5]=(o.data[5]??0)+C.total),o),{labels:[],backgroundColors:[],data:[]});this.doughnutChartLabels.push(...e.labels),this.doughnutChartDatasets.push({data:e.data,label:"sum",borderWidth:1,backgroundColor:e.backgroundColors})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["chart-categories-doughnut"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[p],decls:1,vars:5,consts:[["baseChart","",3,"labels","datasets","options","legend","type"]],template:function(e,o){e&1&&c(0,"canvas",0),e&2&&d("labels",o.doughnutChartLabels)("datasets",o.doughnutChartDatasets)("options",o.doughnutChartOptions)("legend",!0)("type","doughnut")},dependencies:[u,j],encapsulation:2})}}return t})();var G=(t,a)=>a.category.id;function V(t,a){if(t&1&&(r(0,"a",1)(1,"div",2)(2,"div",3),m(3),n()(),r(4,"div",4)(5,"div",5)(6,"div",6),m(7),n()(),r(8,"div",7)(9,"div"),m(10,"Sum:"),n(),r(11,"div"),m(12),n()()(),r(13,"div",8),S(),r(14,"svg",9),c(15,"use"),n()()()),t&2){let i=a.$implicit,e=h(2);d("routerLink",e.routeCreator.chartCategory(i.category)),s(),k("width:4rem;height:4rem;background-color:",i.color,";"),s(2),b(i.category.label),s(4),b(i.category.title),s(5),b(i.total),s(3),I("href","#"+e.symbols.chevronRight,null,"xlink")}}function W(t,a){if(t&1&&(r(0,"div",0),_(1,V,16,8,"a",1,G),n()),t&2){let i=h();s(),M(i.chartCategories)}}var H=(()=>{class t{constructor(){this.chartCategories=[],this.routeCreator=g,this.symbols=O}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=l({type:t,selectors:[["chart-categories-list"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[p],decls:1,vars:1,consts:[[1,"list-group"],[1,"list-group-item","hstack","pe-0",3,"routerLink"],[1,"rounded-circle","d-flex"],[1,"m-auto"],[1,"vstack","ps-3","jcc"],[1,"jcs"],[1,"text-truncate"],[1,"jcb"],[1,"jcc","px-3"],[1,"bi"]],template:function(e,o){e&1&&v(0,W,3,0,"div",0),e&2&&x(o.chartCategories.length?0:-1)},dependencies:[u,w],encapsulation:2})}}return t})();var y=class{constructor(a){this.params=a}toHttpParams(){let a={};return this.params.categoryId&&(a.categoryId=this.params.categoryId),this.params.from&&(a.from=this.params.from.toISOString()),this.params.to&&(a.to=this.params.to.toISOString()),new D({fromObject:a})}filter(a){return this.params.categoryId?a.category.id==this.params.categoryId:L(this.params)}};function q(t,a){if(t&1&&(r(0,"div",3),c(1,"chart-categories-doughnut",4),n(),r(2,"div",3),c(3,"chart-categories-list",4),n()),t&2){let i=h();s(),d("chartCategories",i.chartCategories),s(2),d("chartCategories",i.chartCategories)}}function z(t,a){t&1&&(r(0,"div",3)(1,"div"),m(2," Add first transaction "),n()())}var ut=(()=>{class t{constructor(i,e,o){this.twa=i,this.service=e,this.router=o,this.chartCategories=[],this.routeCreator=g}ngOnInit(){this.initChartCategories(),this.twa.visibleBackButton(!1),this.twa.setMainButton({text:"Add transaction",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.onMainClick())}ngOnDestroy(){this.twa.visibleMainButton(!1)}onMainClick(){this.router.navigate([g.transactionAdd()])}initChartCategories(){this.service.list(new y({})).subscribe(i=>this.chartCategories=i)}static{this.\u0275fac=function(e){return new(e||t)(f(B),f(A),f(E))}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[p],decls:8,vars:1,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"hstack","p-3","pb-0"],[1,"m-auto","text-center","h5"],[1,"card-body","p-2"],[3,"chartCategories"]],template:function(e,o){e&1&&(r(0,"section",0)(1,"div",1)(2,"span",2),m(3,"\u0421alculations"),n(),c(4,"period-selector"),n(),v(5,q,4,2)(6,z,3,0,"div",3),c(7,"period-pagination"),n()),e&2&&(s(5),x(o.chartCategories.length?5:6))},dependencies:[u,P,H,T,F],encapsulation:2})}}return t})();export{ut as MainComponent};
