import"./monaco.6907ec32.js";var je=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ke(n){if(n.__esModule)return n;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(i){var t=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(r,i,t.get?t:{enumerable:!0,get:function(){return n[i]}})}),r}var z;(function(n){n.MIN_VALUE=-2147483648,n.MAX_VALUE=2147483647})(z||(z={}));var T;(function(n){n.MIN_VALUE=0,n.MAX_VALUE=2147483647})(T||(T={}));var p;(function(n){function r(t,e){return t===Number.MAX_VALUE&&(t=T.MAX_VALUE),e===Number.MAX_VALUE&&(e=T.MAX_VALUE),{line:t,character:e}}n.create=r;function i(t){var e=t;return s.objectLiteral(e)&&s.uinteger(e.line)&&s.uinteger(e.character)}n.is=i})(p||(p={}));var g;(function(n){function r(t,e,a,u){if(s.uinteger(t)&&s.uinteger(e)&&s.uinteger(a)&&s.uinteger(u))return{start:p.create(t,e),end:p.create(a,u)};if(p.is(t)&&p.is(e))return{start:t,end:e};throw new Error("Range#create called with invalid arguments["+t+", "+e+", "+a+", "+u+"]")}n.create=r;function i(t){var e=t;return s.objectLiteral(e)&&p.is(e.start)&&p.is(e.end)}n.is=i})(g||(g={}));var N;(function(n){function r(t,e){return{uri:t,range:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&g.is(e.range)&&(s.string(e.uri)||s.undefined(e.uri))}n.is=i})(N||(N={}));var W;(function(n){function r(t,e,a,u){return{targetUri:t,targetRange:e,targetSelectionRange:a,originSelectionRange:u}}n.create=r;function i(t){var e=t;return s.defined(e)&&g.is(e.targetRange)&&s.string(e.targetUri)&&(g.is(e.targetSelectionRange)||s.undefined(e.targetSelectionRange))&&(g.is(e.originSelectionRange)||s.undefined(e.originSelectionRange))}n.is=i})(W||(W={}));var D;(function(n){function r(t,e,a,u){return{red:t,green:e,blue:a,alpha:u}}n.create=r;function i(t){var e=t;return s.numberRange(e.red,0,1)&&s.numberRange(e.green,0,1)&&s.numberRange(e.blue,0,1)&&s.numberRange(e.alpha,0,1)}n.is=i})(D||(D={}));var X;(function(n){function r(t,e){return{range:t,color:e}}n.create=r;function i(t){var e=t;return g.is(e.range)&&D.is(e.color)}n.is=i})(X||(X={}));var H;(function(n){function r(t,e,a){return{label:t,textEdit:e,additionalTextEdits:a}}n.create=r;function i(t){var e=t;return s.string(e.label)&&(s.undefined(e.textEdit)||w.is(e))&&(s.undefined(e.additionalTextEdits)||s.typedArray(e.additionalTextEdits,w.is))}n.is=i})(H||(H={}));var $;(function(n){n.Comment="comment",n.Imports="imports",n.Region="region"})($||($={}));var q;(function(n){function r(t,e,a,u,c){var f={startLine:t,endLine:e};return s.defined(a)&&(f.startCharacter=a),s.defined(u)&&(f.endCharacter=u),s.defined(c)&&(f.kind=c),f}n.create=r;function i(t){var e=t;return s.uinteger(e.startLine)&&s.uinteger(e.startLine)&&(s.undefined(e.startCharacter)||s.uinteger(e.startCharacter))&&(s.undefined(e.endCharacter)||s.uinteger(e.endCharacter))&&(s.undefined(e.kind)||s.string(e.kind))}n.is=i})(q||(q={}));var F;(function(n){function r(t,e){return{location:t,message:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&N.is(e.location)&&s.string(e.message)}n.is=i})(F||(F={}));var B;(function(n){n.Error=1,n.Warning=2,n.Information=3,n.Hint=4})(B||(B={}));var G;(function(n){n.Unnecessary=1,n.Deprecated=2})(G||(G={}));var Q;(function(n){function r(i){var t=i;return t!=null&&s.string(t.href)}n.is=r})(Q||(Q={}));var L;(function(n){function r(t,e,a,u,c,f){var d={range:t,message:e};return s.defined(a)&&(d.severity=a),s.defined(u)&&(d.code=u),s.defined(c)&&(d.source=c),s.defined(f)&&(d.relatedInformation=f),d}n.create=r;function i(t){var e,a=t;return s.defined(a)&&g.is(a.range)&&s.string(a.message)&&(s.number(a.severity)||s.undefined(a.severity))&&(s.integer(a.code)||s.string(a.code)||s.undefined(a.code))&&(s.undefined(a.codeDescription)||s.string((e=a.codeDescription)===null||e===void 0?void 0:e.href))&&(s.string(a.source)||s.undefined(a.source))&&(s.undefined(a.relatedInformation)||s.typedArray(a.relatedInformation,F.is))}n.is=i})(L||(L={}));var y;(function(n){function r(t,e){for(var a=[],u=2;u<arguments.length;u++)a[u-2]=arguments[u];var c={title:t,command:e};return s.defined(a)&&a.length>0&&(c.arguments=a),c}n.create=r;function i(t){var e=t;return s.defined(e)&&s.string(e.title)&&s.string(e.command)}n.is=i})(y||(y={}));var w;(function(n){function r(a,u){return{range:a,newText:u}}n.replace=r;function i(a,u){return{range:{start:a,end:a},newText:u}}n.insert=i;function t(a){return{range:a,newText:""}}n.del=t;function e(a){var u=a;return s.objectLiteral(u)&&s.string(u.newText)&&g.is(u.range)}n.is=e})(w||(w={}));var m;(function(n){function r(t,e,a){var u={label:t};return e!==void 0&&(u.needsConfirmation=e),a!==void 0&&(u.description=a),u}n.create=r;function i(t){var e=t;return e!==void 0&&s.objectLiteral(e)&&s.string(e.label)&&(s.boolean(e.needsConfirmation)||e.needsConfirmation===void 0)&&(s.string(e.description)||e.description===void 0)}n.is=i})(m||(m={}));var l;(function(n){function r(i){var t=i;return typeof t=="string"}n.is=r})(l||(l={}));var b;(function(n){function r(a,u,c){return{range:a,newText:u,annotationId:c}}n.replace=r;function i(a,u,c){return{range:{start:a,end:a},newText:u,annotationId:c}}n.insert=i;function t(a,u){return{range:a,newText:"",annotationId:u}}n.del=t;function e(a){var u=a;return w.is(u)&&(m.is(u.annotationId)||l.is(u.annotationId))}n.is=e})(b||(b={}));var M;(function(n){function r(t,e){return{textDocument:t,edits:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&R.is(e.textDocument)&&Array.isArray(e.edits)}n.is=i})(M||(M={}));var x;(function(n){function r(t,e,a){var u={kind:"create",uri:t};return e!==void 0&&(e.overwrite!==void 0||e.ignoreIfExists!==void 0)&&(u.options=e),a!==void 0&&(u.annotationId=a),u}n.create=r;function i(t){var e=t;return e&&e.kind==="create"&&s.string(e.uri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||l.is(e.annotationId))}n.is=i})(x||(x={}));var A;(function(n){function r(t,e,a,u){var c={kind:"rename",oldUri:t,newUri:e};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),u!==void 0&&(c.annotationId=u),c}n.create=r;function i(t){var e=t;return e&&e.kind==="rename"&&s.string(e.oldUri)&&s.string(e.newUri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||l.is(e.annotationId))}n.is=i})(A||(A={}));var j;(function(n){function r(t,e,a){var u={kind:"delete",uri:t};return e!==void 0&&(e.recursive!==void 0||e.ignoreIfNotExists!==void 0)&&(u.options=e),a!==void 0&&(u.annotationId=a),u}n.create=r;function i(t){var e=t;return e&&e.kind==="delete"&&s.string(e.uri)&&(e.options===void 0||(e.options.recursive===void 0||s.boolean(e.options.recursive))&&(e.options.ignoreIfNotExists===void 0||s.boolean(e.options.ignoreIfNotExists)))&&(e.annotationId===void 0||l.is(e.annotationId))}n.is=i})(j||(j={}));var U;(function(n){function r(i){var t=i;return t&&(t.changes!==void 0||t.documentChanges!==void 0)&&(t.documentChanges===void 0||t.documentChanges.every(function(e){return s.string(e.kind)?x.is(e)||A.is(e)||j.is(e):M.is(e)}))}n.is=r})(U||(U={}));var I=function(){function n(r,i){this.edits=r,this.changeAnnotations=i}return n.prototype.insert=function(r,i,t){var e,a;if(t===void 0?e=w.insert(r,i):l.is(t)?(a=t,e=b.insert(r,i,t)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(t),e=b.insert(r,i,a)),this.edits.push(e),a!==void 0)return a},n.prototype.replace=function(r,i,t){var e,a;if(t===void 0?e=w.replace(r,i):l.is(t)?(a=t,e=b.replace(r,i,t)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(t),e=b.replace(r,i,a)),this.edits.push(e),a!==void 0)return a},n.prototype.delete=function(r,i){var t,e;if(i===void 0?t=w.del(r):l.is(i)?(e=i,t=b.del(r,i)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(i),t=b.del(r,e)),this.edits.push(t),e!==void 0)return e},n.prototype.add=function(r){this.edits.push(r)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n.prototype.assertChangeAnnotations=function(r){if(r===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},n}(),J=function(){function n(r){this._annotations=r===void 0?Object.create(null):r,this._counter=0,this._size=0}return n.prototype.all=function(){return this._annotations},Object.defineProperty(n.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),n.prototype.manage=function(r,i){var t;if(l.is(r)?t=r:(t=this.nextId(),i=r),this._annotations[t]!==void 0)throw new Error("Id "+t+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+t);return this._annotations[t]=i,this._size++,t},n.prototype.nextId=function(){return this._counter++,this._counter.toString()},n}();(function(){function n(r){var i=this;this._textEditChanges=Object.create(null),r!==void 0?(this._workspaceEdit=r,r.documentChanges?(this._changeAnnotations=new J(r.changeAnnotations),r.changeAnnotations=this._changeAnnotations.all(),r.documentChanges.forEach(function(t){if(M.is(t)){var e=new I(t.edits,i._changeAnnotations);i._textEditChanges[t.textDocument.uri]=e}})):r.changes&&Object.keys(r.changes).forEach(function(t){var e=new I(r.changes[t]);i._textEditChanges[t]=e})):this._workspaceEdit={}}return Object.defineProperty(n.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),n.prototype.getTextEditChange=function(r){if(R.is(r)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:r.uri,version:r.version},t=this._textEditChanges[i.uri];if(!t){var e=[],a={textDocument:i,edits:e};this._workspaceEdit.documentChanges.push(a),t=new I(e,this._changeAnnotations),this._textEditChanges[i.uri]=t}return t}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var t=this._textEditChanges[r];if(!t){var e=[];this._workspaceEdit.changes[r]=e,t=new I(e),this._textEditChanges[r]=t}return t}},n.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new J,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},n.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},n.prototype.createFile=function(r,i,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;m.is(i)||l.is(i)?e=i:t=i;var a,u;if(e===void 0?a=x.create(r,t):(u=l.is(e)?e:this._changeAnnotations.manage(e),a=x.create(r,t,u)),this._workspaceEdit.documentChanges.push(a),u!==void 0)return u},n.prototype.renameFile=function(r,i,t,e){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;m.is(t)||l.is(t)?a=t:e=t;var u,c;if(a===void 0?u=A.create(r,i,e):(c=l.is(a)?a:this._changeAnnotations.manage(a),u=A.create(r,i,e,c)),this._workspaceEdit.documentChanges.push(u),c!==void 0)return c},n.prototype.deleteFile=function(r,i,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;m.is(i)||l.is(i)?e=i:t=i;var a,u;if(e===void 0?a=j.create(r,t):(u=l.is(e)?e:this._changeAnnotations.manage(e),a=j.create(r,t,u)),this._workspaceEdit.documentChanges.push(a),u!==void 0)return u},n})();var Y;(function(n){function r(t){return{uri:t}}n.create=r;function i(t){var e=t;return s.defined(e)&&s.string(e.uri)}n.is=i})(Y||(Y={}));var Z;(function(n){function r(t,e){return{uri:t,version:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&s.string(e.uri)&&s.integer(e.version)}n.is=i})(Z||(Z={}));var R;(function(n){function r(t,e){return{uri:t,version:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&s.string(e.uri)&&(e.version===null||s.integer(e.version))}n.is=i})(R||(R={}));var S;(function(n){function r(t,e,a,u){return{uri:t,languageId:e,version:a,text:u}}n.create=r;function i(t){var e=t;return s.defined(e)&&s.string(e.uri)&&s.string(e.languageId)&&s.integer(e.version)&&s.string(e.text)}n.is=i})(S||(S={}));var k;(function(n){n.PlainText="plaintext",n.Markdown="markdown"})(k||(k={}));(function(n){function r(i){var t=i;return t===n.PlainText||t===n.Markdown}n.is=r})(k||(k={}));var O;(function(n){function r(i){var t=i;return s.objectLiteral(i)&&k.is(t.kind)&&s.string(t.value)}n.is=r})(O||(O={}));var K;(function(n){n.Text=1,n.Method=2,n.Function=3,n.Constructor=4,n.Field=5,n.Variable=6,n.Class=7,n.Interface=8,n.Module=9,n.Property=10,n.Unit=11,n.Value=12,n.Enum=13,n.Keyword=14,n.Snippet=15,n.Color=16,n.File=17,n.Reference=18,n.Folder=19,n.EnumMember=20,n.Constant=21,n.Struct=22,n.Event=23,n.Operator=24,n.TypeParameter=25})(K||(K={}));var ee;(function(n){n.PlainText=1,n.Snippet=2})(ee||(ee={}));var ne;(function(n){n.Deprecated=1})(ne||(ne={}));var te;(function(n){function r(t,e,a){return{newText:t,insert:e,replace:a}}n.create=r;function i(t){var e=t;return e&&s.string(e.newText)&&g.is(e.insert)&&g.is(e.replace)}n.is=i})(te||(te={}));var re;(function(n){n.asIs=1,n.adjustIndentation=2})(re||(re={}));var ie;(function(n){function r(i){return{label:i}}n.create=r})(ie||(ie={}));var ae;(function(n){function r(i,t){return{items:i||[],isIncomplete:!!t}}n.create=r})(ae||(ae={}));var P;(function(n){function r(t){return t.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}n.fromPlainText=r;function i(t){var e=t;return s.string(e)||s.objectLiteral(e)&&s.string(e.language)&&s.string(e.value)}n.is=i})(P||(P={}));var se;(function(n){function r(i){var t=i;return!!t&&s.objectLiteral(t)&&(O.is(t.contents)||P.is(t.contents)||s.typedArray(t.contents,P.is))&&(i.range===void 0||g.is(i.range))}n.is=r})(se||(se={}));var ue;(function(n){function r(i,t){return t?{label:i,documentation:t}:{label:i}}n.create=r})(ue||(ue={}));var ce;(function(n){function r(i,t){for(var e=[],a=2;a<arguments.length;a++)e[a-2]=arguments[a];var u={label:i};return s.defined(t)&&(u.documentation=t),s.defined(e)?u.parameters=e:u.parameters=[],u}n.create=r})(ce||(ce={}));var oe;(function(n){n.Text=1,n.Read=2,n.Write=3})(oe||(oe={}));var fe;(function(n){function r(i,t){var e={range:i};return s.number(t)&&(e.kind=t),e}n.create=r})(fe||(fe={}));var de;(function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26})(de||(de={}));var ge;(function(n){n.Deprecated=1})(ge||(ge={}));var le;(function(n){function r(i,t,e,a,u){var c={name:i,kind:t,location:{uri:a,range:e}};return u&&(c.containerName=u),c}n.create=r})(le||(le={}));var he;(function(n){function r(t,e,a,u,c,f){var d={name:t,detail:e,kind:a,range:u,selectionRange:c};return f!==void 0&&(d.children=f),d}n.create=r;function i(t){var e=t;return e&&s.string(e.name)&&s.number(e.kind)&&g.is(e.range)&&g.is(e.selectionRange)&&(e.detail===void 0||s.string(e.detail))&&(e.deprecated===void 0||s.boolean(e.deprecated))&&(e.children===void 0||Array.isArray(e.children))&&(e.tags===void 0||Array.isArray(e.tags))}n.is=i})(he||(he={}));var ve;(function(n){n.Empty="",n.QuickFix="quickfix",n.Refactor="refactor",n.RefactorExtract="refactor.extract",n.RefactorInline="refactor.inline",n.RefactorRewrite="refactor.rewrite",n.Source="source",n.SourceOrganizeImports="source.organizeImports",n.SourceFixAll="source.fixAll"})(ve||(ve={}));var pe;(function(n){function r(t,e){var a={diagnostics:t};return e!=null&&(a.only=e),a}n.create=r;function i(t){var e=t;return s.defined(e)&&s.typedArray(e.diagnostics,L.is)&&(e.only===void 0||s.typedArray(e.only,s.string))}n.is=i})(pe||(pe={}));var _e;(function(n){function r(t,e,a){var u={title:t},c=!0;return typeof e=="string"?(c=!1,u.kind=e):y.is(e)?u.command=e:u.edit=e,c&&a!==void 0&&(u.kind=a),u}n.create=r;function i(t){var e=t;return e&&s.string(e.title)&&(e.diagnostics===void 0||s.typedArray(e.diagnostics,L.is))&&(e.kind===void 0||s.string(e.kind))&&(e.edit!==void 0||e.command!==void 0)&&(e.command===void 0||y.is(e.command))&&(e.isPreferred===void 0||s.boolean(e.isPreferred))&&(e.edit===void 0||U.is(e.edit))}n.is=i})(_e||(_e={}));var be;(function(n){function r(t,e){var a={range:t};return s.defined(e)&&(a.data=e),a}n.create=r;function i(t){var e=t;return s.defined(e)&&g.is(e.range)&&(s.undefined(e.command)||y.is(e.command))}n.is=i})(be||(be={}));var we;(function(n){function r(t,e){return{tabSize:t,insertSpaces:e}}n.create=r;function i(t){var e=t;return s.defined(e)&&s.uinteger(e.tabSize)&&s.boolean(e.insertSpaces)}n.is=i})(we||(we={}));var Ee;(function(n){function r(t,e,a){return{range:t,target:e,data:a}}n.create=r;function i(t){var e=t;return s.defined(e)&&g.is(e.range)&&(s.undefined(e.target)||s.string(e.target))}n.is=i})(Ee||(Ee={}));var me;(function(n){function r(t,e){return{range:t,parent:e}}n.create=r;function i(t){var e=t;return e!==void 0&&g.is(e.range)&&(e.parent===void 0||n.is(e.parent))}n.is=i})(me||(me={}));var ye;(function(n){function r(a,u,c,f){return new xe(a,u,c,f)}n.create=r;function i(a){var u=a;return!!(s.defined(u)&&s.string(u.uri)&&(s.undefined(u.languageId)||s.string(u.languageId))&&s.uinteger(u.lineCount)&&s.func(u.getText)&&s.func(u.positionAt)&&s.func(u.offsetAt))}n.is=i;function t(a,u){for(var c=a.getText(),f=e(u,function(E,C){var V=E.range.start.line-C.range.start.line;return V===0?E.range.start.character-C.range.start.character:V}),d=c.length,h=f.length-1;h>=0;h--){var v=f[h],_=a.offsetAt(v.range.start),o=a.offsetAt(v.range.end);if(o<=d)c=c.substring(0,_)+v.newText+c.substring(o,c.length);else throw new Error("Overlapping edit");d=_}return c}n.applyEdits=t;function e(a,u){if(a.length<=1)return a;var c=a.length/2|0,f=a.slice(0,c),d=a.slice(c);e(f,u),e(d,u);for(var h=0,v=0,_=0;h<f.length&&v<d.length;){var o=u(f[h],d[v]);o<=0?a[_++]=f[h++]:a[_++]=d[v++]}for(;h<f.length;)a[_++]=f[h++];for(;v<d.length;)a[_++]=d[v++];return a}})(ye||(ye={}));var xe=function(){function n(r,i,t,e){this._uri=r,this._languageId=i,this._version=t,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),n.prototype.getText=function(r){if(r){var i=this.offsetAt(r.start),t=this.offsetAt(r.end);return this._content.substring(i,t)}return this._content},n.prototype.update=function(r,i){this._content=r.text,this._version=i,this._lineOffsets=void 0},n.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var r=[],i=this._content,t=!0,e=0;e<i.length;e++){t&&(r.push(e),t=!1);var a=i.charAt(e);t=a==="\r"||a===`
`,a==="\r"&&e+1<i.length&&i.charAt(e+1)===`
`&&e++}t&&i.length>0&&r.push(i.length),this._lineOffsets=r}return this._lineOffsets},n.prototype.positionAt=function(r){r=Math.max(Math.min(r,this._content.length),0);var i=this.getLineOffsets(),t=0,e=i.length;if(e===0)return p.create(0,r);for(;t<e;){var a=Math.floor((t+e)/2);i[a]>r?e=a:t=a+1}var u=t-1;return p.create(u,r-i[u])},n.prototype.offsetAt=function(r){var i=this.getLineOffsets();if(r.line>=i.length)return this._content.length;if(r.line<0)return 0;var t=i[r.line],e=r.line+1<i.length?i[r.line+1]:this._content.length;return Math.max(Math.min(t+r.character,e),t)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),n}(),s;(function(n){var r=Object.prototype.toString;function i(o){return typeof o!="undefined"}n.defined=i;function t(o){return typeof o=="undefined"}n.undefined=t;function e(o){return o===!0||o===!1}n.boolean=e;function a(o){return r.call(o)==="[object String]"}n.string=a;function u(o){return r.call(o)==="[object Number]"}n.number=u;function c(o,E,C){return r.call(o)==="[object Number]"&&E<=o&&o<=C}n.numberRange=c;function f(o){return r.call(o)==="[object Number]"&&-2147483648<=o&&o<=2147483647}n.integer=f;function d(o){return r.call(o)==="[object Number]"&&0<=o&&o<=2147483647}n.uinteger=d;function h(o){return r.call(o)==="[object Function]"}n.func=h;function v(o){return o!==null&&typeof o=="object"}n.objectLiteral=v;function _(o,E){return Array.isArray(o)&&o.every(E)}n.typedArray=_})(s||(s={}));export{K as C,B as D,ee as I,de as S,G as a,je as c,ke as g};
