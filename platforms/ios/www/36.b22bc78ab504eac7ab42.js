(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{cx1z:function(o,e,t){"use strict";t.r(e),t.d(e,"AddonCourseCompletionLazyModule",(function(){return x}));var c=t("L3Fv"),n=t("tyNb"),i=t("rGK3"),r=t("yQkb"),l=t("mrSG"),d=t("xd1G"),a=t("4pns"),s=t("pHTc"),p=t("9+EE"),m=t("3LXp"),u=t("fXoL"),_=t("TEn/"),C=t("nt/U"),f=t("PgjG"),g=t("ofXK"),h=t("FeAf"),E=t("hMzs"),D=t("ACYt"),P=t("3CSS"),A=t("sYmb"),R=t("uYHD");function AddonCourseCompletionReportPage_ion_item_14_Template(o,e){if(1&o&&(u.Ec(0,"ion-item",8),u.zc(1,"core-user-avatar",9),u.Ec(2,"ion-label"),u.Ec(3,"p",10),u.pd(4),u.Dc(),u.Dc(),u.Dc()),2&o){const o=u.Oc();u.lc(1),u.Vc("user",o.user)("courseId",o.courseId)("linkProfile",!1),u.lc(3),u.qd(o.user.fullname)}}function AddonCourseCompletionReportPage_ion_card_15_p_14_Template(o,e){1&o&&(u.Ec(0,"p"),u.pd(1),u.Pc(2,"translate"),u.Dc()),2&o&&(u.lc(1),u.qd(u.Qc(2,1,"addon.coursecompletion.criteriarequiredall")))}function AddonCourseCompletionReportPage_ion_card_15_p_15_Template(o,e){1&o&&(u.Ec(0,"p"),u.pd(1),u.Pc(2,"translate"),u.Dc()),2&o&&(u.lc(1),u.qd(u.Qc(2,1,"addon.coursecompletion.criteriarequiredany")))}function AddonCourseCompletionReportPage_ion_card_15_Template(o,e){if(1&o&&(u.Ec(0,"ion-card"),u.Ec(1,"ion-item",8),u.Ec(2,"ion-label"),u.Ec(3,"p",10),u.pd(4),u.Pc(5,"translate"),u.Dc(),u.Ec(6,"p"),u.pd(7),u.Pc(8,"translate"),u.Dc(),u.Dc(),u.Dc(),u.Ec(9,"ion-item",8),u.Ec(10,"ion-label"),u.Ec(11,"p",10),u.pd(12),u.Pc(13,"translate"),u.Dc(),u.nd(14,AddonCourseCompletionReportPage_ion_card_15_p_14_Template,3,3,"p",6),u.nd(15,AddonCourseCompletionReportPage_ion_card_15_p_15_Template,3,3,"p",6),u.Dc(),u.Dc(),u.Dc()),2&o){const o=u.Oc();u.lc(4),u.qd(u.Qc(5,5,"addon.coursecompletion.status")),u.lc(3),u.qd(u.Qc(8,7,o.statusText)),u.lc(5),u.qd(u.Qc(13,9,"addon.coursecompletion.required")),u.lc(2),u.Vc("ngIf",1===o.completion.aggregation),u.lc(1),u.Vc("ngIf",2===o.completion.aggregation)}}function AddonCourseCompletionReportPage_ion_card_16_ion_item_6_Template(o,e){if(1&o&&(u.Ec(0,"ion-item",14),u.Ec(1,"ion-label"),u.Ec(2,"p",10),u.zc(3,"core-format-text",15),u.Dc(),u.Ec(4,"p"),u.zc(5,"core-format-text",15),u.Dc(),u.Dc(),u.Ec(6,"strong",16),u.pd(7),u.Dc(),u.Dc()),2&o){const o=e.$implicit;u.lc(3),u.Vc("text",o.details.criteria)("filter",!1),u.lc(2),u.Vc("text",o.details.requirement)("filter",!1),u.lc(2),u.qd(o.status)}}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_11_Template(o,e){if(1&o&&(u.Ec(0,"ion-col"),u.pd(1),u.Pc(2,"coreFormatDate"),u.Dc()),2&o){const o=u.Oc().$implicit;u.lc(1),u.rd(" ",u.Rc(2,1,1e3*o.timecompleted,"strftimedatetimeshort")," ")}}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_12_Template(o,e){1&o&&u.zc(0,"ion-col")}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_Template(o,e){if(1&o&&(u.Ec(0,"ion-row"),u.Ec(1,"ion-col"),u.zc(2,"core-format-text",15),u.Dc(),u.Ec(3,"ion-col"),u.zc(4,"core-format-text",15),u.Dc(),u.Ec(5,"ion-col"),u.zc(6,"core-format-text",15),u.Dc(),u.Ec(7,"ion-col"),u.zc(8,"core-format-text",17),u.Dc(),u.Ec(9,"ion-col"),u.pd(10),u.Dc(),u.nd(11,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_11_Template,3,4,"ion-col",6),u.nd(12,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_12_Template,1,0,"ion-col",6),u.Dc()),2&o){const o=e.$implicit;u.lc(2),u.Vc("text",o.title)("filter",!1),u.lc(2),u.Vc("text",o.details.criteria)("filter",!1),u.lc(2),u.Vc("text",o.details.requirement)("filter",!1),u.lc(2),u.Vc("text",o.details.status)("filter",!1),u.lc(2),u.qd(o.status),u.lc(1),u.Vc("ngIf",o.timecompleted),u.lc(1),u.Vc("ngIf",!o.timecompleted)}}function AddonCourseCompletionReportPage_ion_card_16_Template(o,e){if(1&o&&(u.Ec(0,"ion-card"),u.Ec(1,"ion-item-divider"),u.Ec(2,"ion-label"),u.Ec(3,"h2"),u.pd(4),u.Pc(5,"translate"),u.Dc(),u.Dc(),u.Dc(),u.nd(6,AddonCourseCompletionReportPage_ion_card_16_ion_item_6_Template,8,5,"ion-item",11),u.Ec(7,"ion-item",12),u.Ec(8,"ion-label"),u.Ec(9,"ion-row"),u.Ec(10,"ion-col"),u.Ec(11,"strong"),u.pd(12),u.Pc(13,"translate"),u.Dc(),u.Dc(),u.Ec(14,"ion-col"),u.Ec(15,"strong"),u.pd(16),u.Pc(17,"translate"),u.Dc(),u.Dc(),u.Ec(18,"ion-col"),u.Ec(19,"strong"),u.pd(20),u.Pc(21,"translate"),u.Dc(),u.Dc(),u.Ec(22,"ion-col"),u.Ec(23,"strong"),u.pd(24),u.Pc(25,"translate"),u.Dc(),u.Dc(),u.Ec(26,"ion-col"),u.Ec(27,"strong"),u.pd(28),u.Pc(29,"translate"),u.Dc(),u.Dc(),u.Ec(30,"ion-col"),u.Ec(31,"strong"),u.pd(32),u.Pc(33,"translate"),u.Dc(),u.Dc(),u.Dc(),u.nd(34,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_Template,13,11,"ion-row",13),u.Dc(),u.Dc(),u.Dc()),2&o){const o=u.Oc();u.lc(4),u.qd(u.Qc(5,9,"addon.coursecompletion.requiredcriteria")),u.lc(2),u.Vc("ngForOf",o.completion.completions),u.lc(6),u.qd(u.Qc(13,11,"addon.coursecompletion.criteriagroup")),u.lc(4),u.qd(u.Qc(17,13,"addon.coursecompletion.criteria")),u.lc(4),u.qd(u.Qc(21,15,"addon.coursecompletion.requirement")),u.lc(4),u.qd(u.Qc(25,17,"addon.coursecompletion.status")),u.lc(4),u.qd(u.Qc(29,19,"addon.coursecompletion.complete")),u.lc(4),u.qd(u.Qc(33,21,"addon.coursecompletion.completiondate")),u.lc(2),u.Vc("ngForOf",o.completion.completions)}}function AddonCourseCompletionReportPage_ion_card_17_Template(o,e){if(1&o){const o=u.Fc();u.Ec(0,"ion-card"),u.Ec(1,"ion-item-divider"),u.Ec(2,"ion-label"),u.Ec(3,"h2"),u.pd(4),u.Pc(5,"translate"),u.Dc(),u.Dc(),u.Dc(),u.Ec(6,"ion-item"),u.Ec(7,"ion-label"),u.Ec(8,"ion-button",18),u.Mc("click",(function AddonCourseCompletionReportPage_ion_card_17_Template_ion_button_click_8_listener(){u.fd(o);return u.Oc().completeCourse()})),u.pd(9),u.Pc(10,"translate"),u.Dc(),u.Dc(),u.Dc(),u.Dc()}2&o&&(u.lc(4),u.qd(u.Qc(5,2,"addon.coursecompletion.manualselfcompletion")),u.lc(5),u.rd(" ",u.Qc(10,4,"addon.coursecompletion.completecourse")," "))}function AddonCourseCompletionReportPage_ion_card_18_Template(o,e){1&o&&(u.Ec(0,"ion-card",19),u.Ec(1,"ion-item"),u.zc(2,"ion-icon",20),u.Ec(3,"ion-label"),u.pd(4),u.Pc(5,"translate"),u.Dc(),u.Dc(),u.Dc()),2&o&&(u.lc(4),u.qd(u.Qc(5,1,"addon.coursecompletion.nottracked")))}let b=(()=>{class AddonCourseCompletionReportPage{constructor(){this.completionLoaded=!1,this.showSelfComplete=!1,this.tracked=!0}ngOnInit(){try{this.courseId=s.a.getRequiredRouteNumberParam("courseId"),this.userId=s.a.getRouteNumberParam("userId")||p.b.getCurrentSiteUserId()}catch(o){return m.a.showErrorModal(o),s.a.back(),void 0}this.fetchCompletion().finally((()=>{this.completionLoaded=!0}))}fetchCompletion(){return Object(l.a)(this,void 0,void 0,(function*(){try{this.user=yield a.a.getProfile(this.userId,this.courseId,!0),this.completion=yield d.a.getCompletion(this.courseId,this.userId),this.statusText=d.a.getCompletedStatusText(this.completion),this.showSelfComplete=d.a.canMarkSelfCompleted(this.userId,this.completion),this.tracked=!0}catch(o){o&&"notenroled"==o.errorcode?this.tracked=!1:m.a.showErrorModalDefault(o,"addon.coursecompletion.couldnotloadreport",!0)}}))}refreshCompletion(o){return Object(l.a)(this,void 0,void 0,(function*(){yield d.a.invalidateCourseCompletion(this.courseId,this.userId).finally((()=>{this.fetchCompletion().finally((()=>{null==o?void 0:o.complete()}))}))}))}completeCourse(){return Object(l.a)(this,void 0,void 0,(function*(){const o=yield m.a.showModalLoading("core.sending",!0);try{yield d.a.markCourseAsSelfCompleted(this.courseId),yield this.refreshCompletion()}catch(o){m.a.showErrorModal(o)}finally{o.dismiss()}}))}}return AddonCourseCompletionReportPage.ɵfac=function AddonCourseCompletionReportPage_Factory(o){return new(o||AddonCourseCompletionReportPage)},AddonCourseCompletionReportPage.ɵcmp=u.sc({type:AddonCourseCompletionReportPage,selectors:[["page-addon-course-completion-report"]],decls:19,vars:16,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-wrap",4,"ngIf"],[4,"ngIf"],["class","core-warning-card",4,"ngIf"],[1,"ion-text-wrap"],["slot","start",3,"user","courseId","linkProfile"],[1,"item-heading"],["class","ion-hide-md-up ion-text-wrap",4,"ngFor","ngForOf"],[1,"ion-hide-md-down","ion-text-wrap"],[4,"ngFor","ngForOf"],[1,"ion-hide-md-up","ion-text-wrap"],["clean","true",3,"text","filter"],["slot","end"],[3,"text","filter"],["expand","block",3,"click"],[1,"core-warning-card"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"]],template:function AddonCourseCompletionReportPage_Template(o,e){1&o&&(u.Ec(0,"ion-header"),u.Ec(1,"ion-toolbar"),u.Ec(2,"ion-buttons",0),u.zc(3,"ion-back-button",1),u.Pc(4,"translate"),u.Dc(),u.Ec(5,"ion-title"),u.Ec(6,"h1"),u.pd(7),u.Pc(8,"translate"),u.Dc(),u.Dc(),u.Dc(),u.Dc(),u.Ec(9,"ion-content"),u.Ec(10,"ion-refresher",2),u.Mc("ionRefresh",(function AddonCourseCompletionReportPage_Template_ion_refresher_ionRefresh_10_listener(o){return e.refreshCompletion(o.target)})),u.zc(11,"ion-refresher-content",3),u.Pc(12,"translate"),u.Dc(),u.Ec(13,"core-loading",4),u.nd(14,AddonCourseCompletionReportPage_ion_item_14_Template,5,4,"ion-item",5),u.nd(15,AddonCourseCompletionReportPage_ion_card_15_Template,16,11,"ion-card",6),u.nd(16,AddonCourseCompletionReportPage_ion_card_16_Template,35,23,"ion-card",6),u.nd(17,AddonCourseCompletionReportPage_ion_card_17_Template,11,6,"ion-card",6),u.nd(18,AddonCourseCompletionReportPage_ion_card_18_Template,6,3,"ion-card",7),u.Dc(),u.Dc()),2&o&&(u.lc(3),u.Vc("text",u.Qc(4,10,"core.back")),u.lc(4),u.qd(u.Qc(8,12,"addon.coursecompletion.coursecompletion")),u.lc(3),u.Vc("disabled",!e.completionLoaded),u.lc(1),u.Wc("pullingText",u.Qc(12,14,"core.pulltorefresh")),u.lc(2),u.Vc("hideUntil",e.completionLoaded),u.lc(1),u.Vc("ngIf",e.user),u.lc(1),u.Vc("ngIf",e.completion&&e.tracked),u.lc(1),u.Vc("ngIf",e.completion&&e.tracked),u.lc(1),u.Vc("ngIf",e.showSelfComplete&&e.tracked),u.lc(1),u.Vc("ngIf",!e.tracked))},directives:[_.C,_.Ab,_.m,_.h,_.i,_.yb,C.a,_.v,_.bb,_.cb,f.a,g.t,_.I,h.a,_.O,_.n,_.J,g.s,_.hb,_.u,E.a,D.a,_.l,_.D,P.a],pipes:[A.d,R.a],encapsulation:2}),AddonCourseCompletionReportPage})();const w=[{path:"",component:b}];let x=(()=>{class AddonCourseCompletionLazyModule{}return AddonCourseCompletionLazyModule.ɵmod=u.wc({type:AddonCourseCompletionLazyModule}),AddonCourseCompletionLazyModule.ɵinj=u.vc({factory:function AddonCourseCompletionLazyModule_Factory(o){return new(o||AddonCourseCompletionLazyModule)},imports:[[n.m.forChild(w),c.a,i.a,r.a],n.m]}),AddonCourseCompletionLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&u.kd(x,{declarations:[b],imports:[n.m,c.a,i.a,r.a],exports:[n.m]}))}}]);