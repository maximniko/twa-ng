import{a as A}from"./chunk-G2HHK4CW.js";import{a as R}from"./chunk-SME5QIS4.js";import{c as O}from"./chunk-ZY5PCW5O.js";import{a as B,b as P}from"./chunk-ORMLE5CC.js";import"./chunk-CTBJ2Y2T.js";import{a as j}from"./chunk-7KBYL3R4.js";import{a as F}from"./chunk-C4UGSRSE.js";import{$ as f,Ca as g,Eb as I,Gb as C,Ja as w,K as p,Ka as m,La as x,R as _,Ra as u,_ as s,ha as v,hb as h,ib as E,la as M,ma as d,pa as b,sa as k,ta as D,u as S,ua as n,va as a,vb as L,wa as c,wb as T}from"./chunk-RJQUMXUA.js";var $=(()=>{class t{constructor(){this.chartCategories=[],this.doughnutChartLabels=[],this.doughnutChartDatasets=[],this.doughnutChartOptions={animation:{animateRotate:!0,animateScale:!0},plugins:{legend:{position:"bottom",labels:{font:{size:16}}}},responsive:!0}}ngOnInit(){this.initChartData()}initChartData(){let e=this.chartCategories.reduce((o,l,G)=>(G<5?(o.labels.push(l.category.title),o.backgroundColors.push(l.color),o.data.push(l.total)):(o.labels[5]="Others",o.backgroundColors.push("#999"),o.data[5]=(o.data[5]??0)+l.total),o),{labels:[],backgroundColors:[],data:[]});this.doughnutChartLabels.push(...e.labels),this.doughnutChartDatasets.push({data:e.data,label:"sum",borderWidth:1,backgroundColor:e.backgroundColors})}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["chart-categories-doughnut"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[u],decls:1,vars:5,consts:[["baseChart","",3,"labels","datasets","options","legend","type"]],template:function(e,o){e&1&&c(0,"canvas",0),e&2&&d("labels",o.doughnutChartLabels)("datasets",o.doughnutChartDatasets)("options",o.doughnutChartOptions)("legend",!0)("type","doughnut")},dependencies:[h,O],encapsulation:2})}}return t})();var V=(t,r)=>r.category.id;function W(t,r){if(t&1&&(n(0,"a",1)(1,"div",2)(2,"div",3),m(3),a()(),n(4,"div",4)(5,"div",5)(6,"div",6),m(7),a()(),n(8,"div",7)(9,"div"),m(10,"Sum:"),a(),n(11,"div"),m(12),a()()(),n(13,"div",8),_(),n(14,"svg",9),c(15,"use"),a()()()),t&2){let i=r.$implicit,e=g(2);d("routerLink",e.routeCreator.chartCategory(i.category)),s(),w("width:4rem;height:4rem;background-color:",i.color,";"),s(2),x(i.category.label),s(4),x(i.category.title),s(5),x(i.total),s(3),M("href","#"+e.symbols.chevronRight,null,"xlink")}}function q(t,r){if(t&1&&(n(0,"div",0),k(1,W,16,8,"a",1,V),a()),t&2){let i=g();s(),D(i.chartCategories)}}var z=(()=>{class t{constructor(){this.chartCategories=[],this.routeCreator=C,this.symbols=j}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=p({type:t,selectors:[["chart-categories-list"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[u],decls:1,vars:1,consts:[[1,"list-group"],[1,"list-group-item","hstack","pe-0",3,"routerLink"],[1,"rounded-circle","d-flex"],[1,"m-auto"],[1,"vstack","ps-3","jcc"],[1,"jcs"],[1,"text-truncate"],[1,"jcb"],[1,"jcc","px-3"],[1,"bi"]],template:function(e,o){e&1&&v(0,q,3,0,"div",0),e&2&&b(o.chartCategories.length?0:-1)},dependencies:[h,T],encapsulation:2})}}return t})();var y=class{constructor(r){this.params=r}toHttpParams(){let r={};return this.params.categoryId&&(r.categoryId=this.params.categoryId),this.params.from&&(r.from=I(this.params.from)),this.params.to&&(r.to=I(this.params.to)),new E({fromObject:r})}filter(r){return this.params.categoryId?r.category.id==this.params.categoryId:this.params.categoryId==null}};function J(t,r){if(t&1&&(n(0,"section",0)(1,"div",2)(2,"span",3),m(3,"Calculations"),a(),c(4,"period-selector"),a(),n(5,"div",4),c(6,"chart-categories-doughnut",5),a(),n(7,"div",4),c(8,"chart-categories-list",5),a(),c(9,"period-pagination"),a()),t&2){let i=g();s(6),d("chartCategories",i.chartCategories),s(2),d("chartCategories",i.chartCategories)}}function K(t,r){t&1&&(n(0,"div",1)(1,"span",6),m(2,"Loading..."),a()())}var Ct=(()=>{class t{constructor(i,e,o,l){this.twa=i,this.filter=e,this.service=o,this.router=l,this.chartCategories=[],this.routeCreator=C}ngOnInit(){this.loadChartCategories(this.filter.fromTo),this.filterSubscription=this.filter.nextFromTo.pipe(S(1e3)).subscribe(i=>this.loadChartCategories(i)),this.twa.visibleBackButton(!1),this.twa.setMainButton({text:"Add transaction",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.onMainClick())}ngOnDestroy(){this.twa.offMainButton(()=>this.onMainClick()),this.filterSubscription?.unsubscribe()}onMainClick(){this.router.navigate([C.transactionAdd()])}loadChartCategories(i){this.service.list(new y(i)).subscribe(e=>this.chartCategories=e)}static{this.\u0275fac=function(e){return new(e||t)(f(F),f(B),f(A),f(L))}}static{this.\u0275cmp=p({type:t,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[u],decls:2,vars:1,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],["role","status",1,"m-auto","spinner-border"],[1,"hstack","p-3","pb-0"],[1,"m-auto","text-center","h5"],[1,"card-body","p-2"],[3,"chartCategories"],[1,"visually-hidden"]],template:function(e,o){e&1&&v(0,J,10,2,"section",0)(1,K,3,0,"div",1),e&2&&b(o.chartCategories.length?0:1)},dependencies:[h,$,z,P,R],encapsulation:2})}}return t})();export{Ct as MainComponent};
