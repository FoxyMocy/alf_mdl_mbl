(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{u5Wa:function(i,t,e){"use strict";e.r(t),e.d(t,"AddonModWikiLazyModule",(function(){return it}));var o=e("tyNb"),a=e("L3Fv"),d=e("QowF"),n=e("9Hu0"),s=e("ekpb"),r=e("MLi9"),c=e("mrSG"),l=e("93ts"),h=e("ULAo"),u=e("pHTc"),g=e("9+EE"),I=e("uT8i"),m=e("3LXp"),p=e("vuGA"),k=e("bFG1"),b=e("j3ag"),w=e("fjkH"),f=e("4reR"),E=e("IfL8"),P=e("JZ+O"),v=e("NH8Q"),y=e("fXoL"),_=e("3Pt+"),M=e("TEn/"),A=e("hMzs"),D=e("ACYt"),L=e("nt/U"),T=e("PgjG"),C=e("ofXK"),x=e("N5Lt"),F=e("sYmb");const O=["editPageForm"];function AddonModWikiEditPage_form_14_ion_item_2_Template(i,t){1&i&&(y.Ec(0,"ion-item",13),y.Ec(1,"ion-label",10),y.pd(2),y.Pc(3,"translate"),y.Dc(),y.zc(4,"ion-input",14),y.Pc(5,"translate"),y.Dc()),2&i&&(y.lc(2),y.qd(y.Qc(3,2,"addon.mod_wiki.newpagetitle")),y.lc(2),y.Vc("placeholder",y.Qc(5,4,"addon.mod_wiki.newpagetitle")))}function AddonModWikiEditPage_form_14_ion_item_9_Template(i,t){1&i&&(y.Ec(0,"ion-item",15),y.Ec(1,"ion-label"),y.Ec(2,"ion-badge",16),y.pd(3),y.Pc(4,"translate"),y.Dc(),y.Dc(),y.Dc()),2&i&&(y.lc(3),y.qd(y.Qc(4,1,"addon.mod_wiki.wrongversionlock")))}function AddonModWikiEditPage_form_14_Template(i,t){if(1&i&&(y.Ec(0,"form",7,8),y.nd(2,AddonModWikiEditPage_form_14_ion_item_2_Template,6,6,"ion-item",9),y.Ec(3,"ion-item"),y.Ec(4,"ion-label",10),y.pd(5),y.Pc(6,"translate"),y.Dc(),y.zc(7,"core-rich-text-editor",11),y.Pc(8,"translate"),y.Dc(),y.nd(9,AddonModWikiEditPage_form_14_ion_item_9_Template,5,3,"ion-item",12),y.Dc()),2&i){const i=y.Oc();y.Vc("formGroup",i.pageForm),y.lc(2),y.Vc("ngIf",i.canEditTitle),y.lc(3),y.qd(y.Qc(6,11,"core.content")),y.lc(2),y.Vc("control",i.contentControl)("placeholder",y.Qc(8,13,"core.content"))("component",i.component)("componentId",i.cmId)("autoSave",!0)("contextInstanceId",i.cmId)("draftExtraParams",i.editorExtraParams),y.lc(2),y.Vc("ngIf",i.wrongVersionLock)}}let W=(()=>{class AddonModWikiEditPage{constructor(i){this.formBuilder=i,this.canEditTitle=!1,this.loaded=!1,this.component=E.b.COMPONENT,this.wrongVersionLock=!1,this.editorExtraParams={},this.editing=!1,this.editOffline=!1,this.subwikiFiles=[],this.forceLeave=!1,this.isDestroyed=!1,this.contentControl=this.formBuilder.control(""),this.pageForm=this.formBuilder.group({})}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){this.cmId=u.a.getRouteNumberParam("cmId")||void 0,this.courseId=u.a.getRouteNumberParam("courseId")||void 0,this.subwikiId=u.a.getRouteNumberParam("subwikiId"),this.wikiId=u.a.getRouteNumberParam("wikiId"),this.pageId=u.a.getRouteNumberParam("pageId"),this.section=u.a.getRouteParam("section"),this.groupId=u.a.getRouteNumberParam("groupId"),this.userId=u.a.getRouteNumberParam("userId");let i=u.a.getRouteParam("pageTitle");i=i?p.a.cleanTags(i.replace(/\+/g," "),{singleLine:!0}):"",this.canEditTitle=!i,this.title=i?b.I.instant("addon.mod_wiki.editingpage",{$a:i}):b.I.instant("addon.mod_wiki.newpagehdr"),this.blockId=v.a.getSubwikiBlockId(this.subwikiId,this.wikiId,this.userId,this.groupId),this.pageForm.addControl("title",this.formBuilder.control(i)),this.pageForm.addControl("text",this.contentControl),I.a.blockOperation(this.component,this.blockId),this.pageId?(this.editorExtraParams.pageid=this.pageId,this.section&&(this.editorExtraParams.section=this.section)):i&&(this.editorExtraParams.pagetitle=i);try{if((yield this.fetchWikiPageData())&&!this.isDestroyed){const i=v.a.getSubwikiBlockId(this.subwikiId,this.wikiId,this.userId,this.groupId);i!==this.blockId&&(I.a.unblockOperation(this.component,this.blockId),this.blockId=i,I.a.blockOperation(this.component,this.blockId))}}finally{this.loaded=!0}}))}fetchWikiPageData(){return Object(c.a)(this,void 0,void 0,(function*(){let i=!1,t=!1;try{const t=this.blockId?yield v.a.waitForSync(this.blockId):void 0;if(this.pageId){this.canEditTitle=!1,this.editing=!0,this.editOffline=!1;const t=yield E.a.getPageContents(this.pageId,{cmId:this.cmId});this.pageForm.controls.title.setValue(t.title),this.wikiId=t.wikiid,this.subwikiId=t.subwikiid,this.title=b.I.instant("addon.mod_wiki.editingpage",{$a:t.title}),this.groupId=t.groupid,this.userId=t.userid,i=t.caneditpage,yield this.fetchModuleAndCourseId(),this.subwikiFiles=yield E.a.getSubwikiFiles(this.wikiId,{groupId:this.groupId,userId:this.userId,cmId:this.cmId});const e=yield E.a.getPageForEditing(this.pageId,this.section),o=p.a.replacePluginfileUrls(e.content||"",this.subwikiFiles);this.contentControl.setValue(o),this.originalContent=o,this.version=e.version,i&&(this.renewLockInterval=window.setInterval((()=>{this.renewLock()}),E.b.RENEW_LOCK_TIME))}else{const e=this.pageForm.controls.title.value;if(this.editing=!1,i=!!this.blockId,yield this.fetchModuleAndCourseId(),!this.wikiId&&this.cmId&&this.courseId){const i=yield h.a.getModule(this.cmId,this.courseId,void 0,!0);this.wikiId=i.instance}if(e){if(t){const i=t.created.find((i=>i.title==e));if(i&&i.pageId>0)return this.pageId=i.pageId,this.fetchWikiPageData()}const i=yield k.a.ignoreErrors(P.a.getNewPage(e,this.subwikiId,this.wikiId,this.userId,this.groupId));i?(this.contentControl.setValue(i.cachedcontent),this.originalContent=i.cachedcontent,this.editOffline=!0):this.editOffline=!1}else this.editOffline=!1}return!0}catch(i){return m.a.showErrorModalDefault(i,"Error getting wiki data."),t=!0,this.forceLeavePage(),!1}finally{i||t||(m.a.showAlert(b.I.instant("core.notice"),b.I.instant("addon.mod_wiki.cannoteditpage")),this.forceLeavePage())}}))}fetchModuleAndCourseId(){return Object(c.a)(this,void 0,void 0,(function*(){if(!this.wikiId||this.cmId&&this.courseId)return;const i=yield h.a.getModuleBasicInfoByInstance(this.wikiId,"wiki",{readingStrategy:1});this.cmId=i.id,this.courseId=i.course}))}forceLeavePage(){this.forceLeave=!0,u.a.back()}goToPage(i){this.wikiId&&(E.a.setEditedPageData({cmId:this.cmId,courseId:this.courseId,pageId:this.pageId,pageTitle:i,wikiId:this.wikiId,subwikiId:this.subwikiId,userId:this.userId,groupId:this.groupId}),this.forceLeavePage())}hasDataChanged(){const i=this.pageForm.value;return!(this.originalContent==i.text||!this.editing&&!i.text&&!i.title)}canLeave(){return Object(c.a)(this,void 0,void 0,(function*(){return this.forceLeave||(this.hasDataChanged()&&(yield m.a.showConfirm(b.I.instant("core.confirmcanceledit"))),f.a.triggerFormCancelledEvent(this.formElement,g.b.getCurrentSiteId())),!0}))}ionViewDidLeave(){setTimeout((()=>{E.a.consumeEditedPageData()}),200)}save(){return Object(c.a)(this,void 0,void 0,(function*(){const i=this.pageForm.value,t=i.title;let e=i.text;const o=yield m.a.showModalLoading("core.sending",!0);e=p.a.restorePluginfileUrls(e,this.subwikiFiles),e=p.a.formatHtmlLines(e);try{if(this.editing&&this.pageId)return yield E.a.editPage(this.pageId,e,this.section),f.a.triggerFormSubmittedEvent(this.formElement,!0,g.b.getCurrentSiteId()),yield E.a.invalidatePage(this.pageId),this.goToPage(t);if(!t)return o.dismiss(),m.a.showAlert(b.I.instant("core.notice"),b.I.instant("addon.mod_wiki.titleshouldnotbeempty")),void 0;if(!this.editOffline){if(yield k.a.ignoreErrors(P.a.getNewPage(t,this.subwikiId,this.wikiId,this.userId,this.groupId)))throw new l.a(b.I.instant("addon.mod_wiki.pageexists"))}const i=yield E.a.newPage(t,e,{subwikiId:this.subwikiId,wikiId:this.wikiId,userId:this.userId,groupId:this.groupId,cmId:this.cmId});if(f.a.triggerFormSubmittedEvent(this.formElement,i>0,g.b.getCurrentSiteId()),i<=0)return this.goToPage(t);w.b.trigger(w.b.ACTIVITY_DATA_SENT,{module:"wiki"}),this.pageId=i;const a=yield E.a.getPageContents(this.pageId,{cmId:this.cmId}),d=[];this.wikiId=a.wikiid,d.push(E.a.invalidateSubwikiPages(this.wikiId)),this.subwikiId||d.push(E.a.invalidateSubwikis(this.wikiId)),this.subwikiId=a.subwikiid,this.userId=a.userid,this.groupId=a.groupid,yield k.a.ignoreErrors(Promise.all(d)),w.b.trigger(E.b.PAGE_CREATED_EVENT,{pageId:this.pageId,subwikiId:this.subwikiId,pageTitle:t},g.b.getCurrentSiteId()),this.goToPage(t)}catch(i){m.a.showErrorModalDefault(i,"Error saving wiki data.")}finally{o.dismiss()}}))}renewLock(){return Object(c.a)(this,void 0,void 0,(function*(){if(!this.pageId)return;const i=yield E.a.getPageForEditing(this.pageId,this.section,!0);i.version&&this.version!=i.version&&(this.wrongVersionLock=!0)}))}ngOnDestroy(){this.isDestroyed=!0,clearInterval(this.renewLockInterval),this.blockId&&I.a.unblockOperation(this.component,this.blockId)}}return AddonModWikiEditPage.ɵfac=function AddonModWikiEditPage_Factory(i){return new(i||AddonModWikiEditPage)(y.yc(_.f))},AddonModWikiEditPage.ɵcmp=y.sc({type:AddonModWikiEditPage,selectors:[["page-addon-mod-wiki-edit"]],viewQuery:function AddonModWikiEditPage_Query(i,t){var e;(1&i&&y.ud(O,!0),2&i)&&(y.dd(e=y.Nc())&&(t.formElement=e.first))},decls:15,vars:11,consts:[["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","end"],["fill","clear",3,"click"],[3,"hideUntil"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["editPageForm",""],["class","ion-text-wrap",4,"ngIf"],[1,"sr-only"],["name","wiki_page_content","contextLevel","module","elementId","newcontent_editor",3,"control","placeholder","component","componentId","autoSave","contextInstanceId","draftExtraParams"],["class","ion-text-center addon-mod_wiki-wrongversionlock",4,"ngIf"],[1,"ion-text-wrap"],["name","title","type","text","formControlName","title",3,"placeholder"],[1,"ion-text-center","addon-mod_wiki-wrongversionlock"],["color","danger",1,"ion-padding"]],template:function AddonModWikiEditPage_Template(i,t){1&i&&(y.Ec(0,"ion-header"),y.Ec(1,"ion-toolbar"),y.Ec(2,"ion-buttons",0),y.zc(3,"ion-back-button",1),y.Pc(4,"translate"),y.Dc(),y.Ec(5,"ion-title"),y.Ec(6,"h1"),y.zc(7,"core-format-text",2),y.Dc(),y.Dc(),y.Ec(8,"ion-buttons",3),y.Ec(9,"ion-button",4),y.Mc("click",(function AddonModWikiEditPage_Template_ion_button_click_9_listener(){return t.save()})),y.pd(10),y.Pc(11,"translate"),y.Dc(),y.Dc(),y.Dc(),y.Dc(),y.Ec(12,"ion-content"),y.Ec(13,"core-loading",5),y.nd(14,AddonModWikiEditPage_form_14_Template,10,15,"form",6),y.Dc(),y.Dc()),2&i&&(y.lc(3),y.Vc("text",y.Qc(4,7,"core.back")),y.lc(4),y.Vc("text",t.title)("contextInstanceId",t.cmId)("courseId",t.courseId),y.lc(3),y.rd(" ",y.Qc(11,9,"core.save")," "),y.lc(3),y.Vc("hideUntil",t.loaded),y.lc(1),y.Vc("ngIf",t.loaded))},directives:[M.C,M.Ab,M.m,M.h,M.i,M.yb,A.a,D.a,M.l,L.a,M.v,T.a,C.t,_.H,_.s,_.k,M.I,M.O,x.a,M.H,M.Pb,_.r,_.i,M.k],pipes:[F.d],encapsulation:2}),AddonModWikiEditPage})();var N=e("M9y5"),S=e("aEIl"),z=e("3zv0"),V=e("Lmwl"),j=e("4qNr"),R=e("fQ68"),J=e("8/N+"),Q=e("0QZc"),H=e("uHIS"),G=e("w+Pn"),B=e("r8G5"),q=e("5450"),U=e("W5pS"),K=e("WPIK"),Y=e("qNqN"),X=e("xpMl"),Z=e("FTxb"),$=e("/K1O"),ii=e("FasJ"),ti=e("9pYf"),ei=e("eAud"),oi=e("ACV2"),ai=e("/BoF"),di=e("TKc2"),ni=e("whRm"),si=e("O4u7"),ri=e("lqoc"),ci=e("3lz8"),li=e("46ml"),hi=e("QQhE"),ui=e("MpCO"),gi=e("JYLr"),Ii=e("vWwc"),mi=e("NhJP"),pi=e("rztj"),ki=e("FeAf"),bi=e("rf3J"),wi=e("nEkO"),fi=e("TF0o"),Ei=e("p5uK"),Pi=e("ijlo"),vi=e("vFDU"),yi=e("6uVz"),_i=e("d0nH"),Mi=e("NcPy"),Ai=e("yNDK"),Di=e("3CSS"),Li=e("iSJP"),Ti=e("iJls"),Ci=e("ArDJ"),xi=e("nu3w"),Fi=e("saTE"),Oi=e("8PoL"),Wi=e("4a38"),Ni=e("4JiN"),Si=e("OZH1"),zi=e("edOc"),Vi=e("3jOR"),ji=e("6A9T"),Ri=e("nKjD"),Ji=e("MqDN"),Qi=e("IBMc"),Hi=e("1iFe"),Gi=e("dne1"),Bi=e("Cg42"),qi=e("llyR"),Ui=e("uYHD"),Ki=e("SspJ"),Yi=e("U2xU"),Xi=e("lAaw"),Zi=e("1ArG");const $i=[{path:":courseId/:cmId",redirectTo:":courseId/:cmId/page/root"},{path:":courseId/:cmId/page/:hash",component:n.a},{path:":courseId/:cmId/edit",component:W,canDeactivate:[r.a]}];let it=(()=>{class AddonModWikiLazyModule{}return AddonModWikiLazyModule.ɵmod=y.wc({type:AddonModWikiLazyModule}),AddonModWikiLazyModule.ɵinj=y.vc({factory:function AddonModWikiLazyModule_Factory(i){return new(i||AddonModWikiLazyModule)},imports:[[o.m.forChild($i),a.a,d.a,s.a]]}),AddonModWikiLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&y.kd(it,{declarations:[n.a,W],imports:[o.m,a.a,d.a,s.a]})),y.jd(n.a,[o.n,o.j,o.l,o.k,o.p,C.q,C.r,C.s,C.t,C.A,C.w,C.x,C.y,C.z,C.u,C.v,N.a,S.a,z.a,V.a,j.a,R.a,J.a,Q.a,H.a,G.a,B.a,q.a,U.a,K.a,Y.a,X.a,Z.a,T.a,$.a,ii.a,ti.a,ei.a,oi.a,ai.a,di.a,ni.a,si.a,ri.a,ci.a,li.a,hi.a,ui.a,gi.a,Ii.a,mi.a,pi.a,ki.a,bi.a,wi.a,fi.a,Ei.a,Pi.a,vi.a,yi.a,_i.a,Mi.a,Ai.a,Di.a,A.a,Li.a,Ti.a,Ci.a,xi.a,Fi.a,Oi.a,Wi.a,Ni.b,Si.a,zi.a,Vi.a,L.a,D.a,ji.a,_.H,_.w,_.G,_.c,_.x,_.A,_.a,_.D,_.E,_.z,_.r,_.s,_.C,_.o,_.n,_.y,_.b,_.d,_.u,_.v,_.t,M.f,M.g,M.h,M.j,M.k,M.l,M.m,M.n,M.o,M.p,M.q,M.r,M.s,M.t,M.u,M.v,M.w,M.x,M.y,M.z,M.A,M.B,M.C,M.D,M.E,M.F,M.G,M.H,M.I,M.J,M.K,M.L,M.M,M.N,M.O,M.P,M.Q,M.R,M.S,M.T,M.U,M.V,M.W,M.X,M.Y,M.Z,M.ab,M.bb,M.cb,M.db,M.eb,M.fb,M.hb,M.ib,M.jb,M.kb,M.lb,M.mb,M.nb,M.ob,M.pb,M.qb,M.rb,M.sb,M.tb,M.vb,M.wb,M.xb,M.zb,M.Ab,M.yb,M.ub,M.d,M.Jb,M.Mb,M.Ob,M.Pb,M.gb,M.i,M.Hb,M.Nb,M.Rb,M.Sb,M.Tb,M.Bb,_.h,_.k,_.i,_.l,_.e,F.a,Ri.a,Ji.a,Qi.a,x.a,n.a,W],[C.b,C.G,C.p,C.k,C.E,C.g,C.C,C.F,C.d,C.f,C.i,C.j,C.l,Hi.a,Gi.a,Bi.a,qi.a,Ui.a,Ki.a,Yi.a,Xi.a,Zi.a,F.d])}}]);