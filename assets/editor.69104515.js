import{_ as i,g as E,b as g,d as m,r as d,o as p,c as v,i as _,w as x,e as k,f as R,h as T,j as D,k as n,l as u,m as l,n as M,t as P}from"./app.5da5e409.js";import{u as f,i as V,a as C}from"./resume.581f1676.js";import{_ as I}from"./All.363b4bb7.js";import"./yamlWorker.07b904b3.js";import"./monaco.6907ec32.js";const b=async()=>{if(window.monaco)return{monaco:window.monaco};const{setDiagnosticsOptions:c}=await i(()=>import("./index.b754057c.js"),["assets/index.b754057c.js","assets/monaco.6907ec32.js","assets/monaco.6a58294d.css","assets/yamlWorker.07b904b3.js"]),e=await i(()=>import("./monaco.6907ec32.js").then(function(t){return t.b}),["assets/monaco.6907ec32.js","assets/monaco.6a58294d.css"]);return window.monaco=e,await Promise.all([(async()=>{const[{default:t},{default:s}]=await Promise.all([i(()=>import("./editor.worker.20199a65.js"),[]),i(()=>import("./workaround-yaml.worker.7d684e99.js"),[])]);window.MonacoEnvironment={getWorker(a,o){switch(o){case"editorWorkerService":return new t;case"yaml":return new s;default:throw new Error(`Unknown label ${o}`)}}}})()]),c({enableSchemaRequest:!0,hover:!0,completion:!0,validate:!0,format:!0,schemas:[{uri:"https://resume.elpsy.cn/schema/resume.schema.json",fileMatch:["*.yml","*.yaml"]}]}),E()&&await new Promise(t=>g(t)),{monaco:e}};const S=m({setup(c){let e;const t=f(),s=d();async function a(){if(V){const{monaco:o}=await b();s.value&&!e&&(e=o.editor.create(s.value,{language:"yaml",theme:_.value?"vs-dark":"vs",wordWrap:"on",model:o.editor.createModel(t.resumeText,"yaml",o.Uri.parse("resume.yml")),value:t.resumeText}),self.addEventListener("resize",()=>{e.layout()}),t.setEditor(e),e.onDidChangeModelContent(r=>{t.setResume(e.getValue())})),x(_,r=>{o.editor.setTheme(r?"vs-dark":"vs")})}}return a(),(o,r)=>(p(),v("div",{id:"editor-container",ref_key:"container",ref:s},null,512))}});const A={class:"editor-page text-center"},L={class:"preview-container",grid:"~ cols-2 gap-4 <sm:cols-1"},O={class:"resume-container resume shadow"},W={class:"editor-container"},$={class:"resume-btn mt-3",href:"/resume",target:"_blank"},z=m({setup(c){const e=f(),{t}=k(),s=R(),a=d(e.resumeText);return T(async()=>{var o;if(!e.resumeText){const r=`# ${t("editor.name")}
${await C(s.query.url)}`;e.setResume(r),(o=e.codeEditor)==null||o.setValue(r)}}),(o,r)=>{const w=I,h=S,y=D("client-only");return p(),v("div",A,[n("div",L,[n("div",O,[u(w,{resume:l(e).resumeJson},null,8,["resume"])]),n("div",W,[u(y,null,{default:M(()=>[u(h,{text:a.value},null,8,["text"])]),_:1})])]),n("div",null,[n("a",$,P(l(t)("button.see_resume")),1)])])}}});export{z as default};
