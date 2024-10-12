import{a as z}from"./chunk-JSA2KPT2.js";import{a as R}from"./chunk-GTZIABMN.js";import{a as A}from"./chunk-EUTY2UME.js";import{a as $}from"./chunk-QHLIBUXF.js";import{c as H}from"./chunk-VM3LYK5D.js";import{a as B,b as P}from"./chunk-P6WWTQP6.js";import"./chunk-CTBJ2Y2T.js";import{a as F}from"./chunk-KQRQU7YE.js";import"./chunk-YAH7JT7V.js";import{c as v}from"./chunk-RVBB37U4.js";import{$ as u,Ca as g,Db as T,Eb as j,K as p,La as E,Ma as l,Mb as _,Na as h,Pb as O,R as M,Ta as f,_ as s,ha as b,la as k,ma as m,pa as x,pb as C,qb as L,sa as D,t as S,ta as w,ua as n,va as r,wa as c}from"./chunk-DIXJAQJD.js";var V=(()=>{class e{constructor(){this.chartCategories=[],this.doughnutChartLabels=[],this.doughnutChartDatasets=[],this.doughnutChartOptions={animation:{animateRotate:!0,animateScale:!0},plugins:{legend:{position:"bottom",labels:{font:{size:16}}}},responsive:!0}}ngOnInit(){this.initChartData()}initChartData(){let t=this.chartCategories.reduce((o,d,I)=>(I<5?(o.labels.push(d.category.title),o.backgroundColors.push(d.color),o.data.push(d.total)):(o.labels[5]="Others",o.backgroundColors.push("#999"),o.data[5]=(o.data[5]??0)+d.total),o),{labels:[],backgroundColors:[],data:[]});this.doughnutChartLabels.push(...t.labels),this.doughnutChartDatasets.push({data:t.data,label:"sum",borderWidth:1,backgroundColor:t.backgroundColors})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["chart-categories-doughnut"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[f],decls:1,vars:5,consts:[["baseChart","",3,"labels","datasets","options","legend","type"]],template:function(t,o){t&1&&c(0,"canvas",0),t&2&&m("labels",o.doughnutChartLabels)("datasets",o.doughnutChartDatasets)("options",o.doughnutChartOptions)("legend",!0)("type","doughnut")},dependencies:[C,H],encapsulation:2})}}return e})();var q=(e,a)=>a.category.id;function J(e,a){if(e&1&&(n(0,"a",1)(1,"div",2)(2,"div",3),l(3),r()(),n(4,"div",4)(5,"div",5)(6,"div",6),l(7),r()(),n(8,"div",7)(9,"div"),l(10,"Sum:"),r(),n(11,"div"),l(12),r()()(),n(13,"div",8),M(),n(14,"svg",9),c(15,"use"),r()()()),e&2){let i=a.$implicit,t=g(2);m("routerLink",t.routeCreator.chartCategory(i.category)),s(),E("width:4rem;height:4rem;background-color:",i.color,";"),s(2),h(i.category.label),s(4),h(i.category.title),s(5),h(i.total),s(3),k("href","#"+t.symbols.chevronRight,null,"xlink")}}function K(e,a){if(e&1&&(n(0,"div",0),D(1,J,16,8,"a",1,q),r()),e&2){let i=g();s(),w(i.chartCategories)}}var W=(()=>{class e{constructor(){this.chartCategories=[],this.routeCreator=v,this.symbols=F}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=p({type:e,selectors:[["chart-categories-list"]],inputs:{chartCategories:"chartCategories"},standalone:!0,features:[f],decls:1,vars:1,consts:[[1,"list-group"],[1,"list-group-item","hstack","pe-0",3,"routerLink"],[1,"rounded-circle","d-flex"],[1,"m-auto"],[1,"vstack","ps-3","jcc"],[1,"jcs"],[1,"text-truncate"],[1,"jcb"],[1,"jcc","px-3"],[1,"bi"]],template:function(t,o){t&1&&b(0,K,3,0,"div",0),t&2&&x(o.chartCategories.length?0:-1)},dependencies:[C,j],encapsulation:2})}}return e})();var y=class{constructor(a){this.params=a}toHttpParams(){let a={};return this.params.categoryId&&(a.categoryId=this.params.categoryId),this.params.from&&(a.from=_(this.params.from)),this.params.to&&(a.to=_(this.params.to)),new L({fromObject:a})}filter(a){return this.params.categoryId?a.category.id==this.params.categoryId:this.params.categoryId==null}};function N(e,a){if(e&1&&(n(0,"section",0)(1,"div",2)(2,"span",3),l(3),r(),c(4,"period-selector"),r(),n(5,"div",4),c(6,"chart-categories-doughnut",5),r(),n(7,"div",4),c(8,"chart-categories-list",5),r(),c(9,"period-pagination"),r()),e&2){let i,t=g();s(3),h((i=t.localisation.t.mainCalculations)!==null&&i!==void 0?i:"Calculations"),s(3),m("chartCategories",t.chartCategories),s(2),m("chartCategories",t.chartCategories)}}function Q(e,a){e&1&&(n(0,"div",1),c(1,"main-intro"),r())}var yt=(()=>{class e{constructor(i,t,o,d,I){this.twa=i,this.filter=t,this.localisation=o,this.service=d,this.router=I,this.chartCategories=[],this.routeCreator=v}ngOnInit(){this.loadChartCategories(this.filter.fromTo),this.filterSubscription=this.filter.nextFromTo.pipe(S(1e3)).subscribe(i=>this.loadChartCategories(i)),this.twa.visibleBackButton(!1),this.twa.setMainButton({text:"Add transaction",is_active:!0,is_visible:!0,has_shine_effect:!0},()=>this.onMainClick())}ngOnDestroy(){this.twa.offMainButton(()=>this.onMainClick()),this.filterSubscription?.unsubscribe()}onMainClick(){this.router.navigate([v.transactionAdd()])}loadChartCategories(i){this.service.list(new y(i)).subscribe(t=>this.chartCategories=t)}static{this.\u0275fac=function(t){return new(t||e)(u(O),u(B),u(A),u(z),u(T))}}static{this.\u0275cmp=p({type:e,selectors:[["ng-component"]],hostAttrs:[1,"d-flex","flex-column","h-100"],standalone:!0,features:[f],decls:2,vars:1,consts:[[1,"accent-border","accent-border-top","accent-bg-shadow","card","rounded-5"],[1,"m-auto"],[1,"hstack","p-3","pb-0"],[1,"m-auto","text-center","h5"],[1,"card-body","p-2"],[3,"chartCategories"]],template:function(t,o){t&1&&b(0,N,10,3,"section",0)(1,Q,2,0,"div",1),t&2&&x((o.chartCategories.length,1))},dependencies:[C,V,W,P,$,R],encapsulation:2})}}return e})();export{yt as MainComponent};
