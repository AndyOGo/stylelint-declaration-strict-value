function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=e(require("stylelint")),n=e(require("path")),i={ignoreVariables:!0,ignoreFunctions:!0,ignoreKeywords:null,ignoreValues:null,severity:"error",message:null,disableFix:!1,autoFixFunc:null};function t(e){var r=typeof e;return"string"===r||"number"===r}function o(e){return t(e)||Array.isArray(e)&&e.every(function(e){return t(e)})}function a(e){if("object"!=typeof e)return!1;var r=Object.keys(i);return!(!Object.keys(e).every(function(e){return r.indexOf(e)>-1})||"ignoreVariables"in e&&"boolean"!=typeof e.ignoreVariables&&null!==e.ignoreVariables||"ignoreFunctions"in e&&"boolean"!=typeof e.ignoreFunctions&&null!==e.ignoreFunctions||"severity"in e&&"string"!=typeof e.severity&&null!==e.severity||"ignoreKeywords"in e&&!o(e.ignoreKeywords)&&!u(e.ignoreKeywords)||"ignoreValues"in e&&!o(e.ignoreValues)&&!u(e.ignoreValues)||"message"in e&&"string"!=typeof e.message&&null!==e.message||"disableFix"in e&&"boolean"!=typeof e.disableFix&&null!==e.disableFix||"autoFixFunc"in e&&"function"!=typeof e.autoFixFunc&&"string"!=typeof e.autoFixFunc&&null!==e.autoFixFunc)}function u(e){return"object"==typeof e&&Object.keys(e).every(function(r){return o(e[r])})}function l(e,r){if(!e)return null;var n=e;return{}.hasOwnProperty.call(n,r)?n=n[r]:{}.hasOwnProperty.call(n,"")&&(n=n[""]),Array.isArray(n)?n:[n]}function s(e,r){if(!e)return null;var n=e;return{}.hasOwnProperty.call(n,r)?n=n[r]:{}.hasOwnProperty.call(n,"")&&(n=n[""]),Array.isArray(n)?n:[n]}var c="scale-unlimited/declaration-strict-value",f=r.utils,p=f.ruleMessages(c,{expected:function(e,r,n,i){if(Array.isArray(e)){var t=e.pop();e=e.length?e.join(", ")+" or "+t:t}return"string"==typeof i&&i.length?i.replace("${types}",e).replace("${value}",r).replace("${property}",n):"Expected "+e+' for "'+r+'" of "'+n+'"'}}),y=/^(?:@|\$|--).+$/,g=/^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x00-\x7F])+(?:[a-zA-Z0-9_-]|[^\x00-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/,v=/^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/,d=/^\/(.*)\/([a-zA-Z]*)$/,b=function(e){return d.test(e)},F=function(e){return new(Function.prototype.bind.apply(RegExp,[null].concat(function(e){return e.match(d).slice(1)}(e))))},x=function(e){return b(e)?F(e):new RegExp("^"+e+"$")},w=function(e,r,t){return void 0===t&&(t={}),function(u,d){if(f.validateOptions(d,c,{actual:e,possible:o},{actual:r,possible:a,optional:!0})){Array.isArray(e)||(e=[e]);var w=Object.assign({},i,r),h=w.ignoreVariables,m=w.ignoreFunctions,A=w.ignoreKeywords,V=w.ignoreValues,$=w.message,O=w.disableFix,j=function(e){var r=typeof e;if("function"===r)return e;if("string"===r){var i;try{i=require.resolve(e)}catch(r){i=require.resolve(n.join(process.cwd(),e))}return require(i)}return null}(w.autoFixFunc),K=A?{}:null,k=V?{}:null;e.forEach(function(e){var r=e;b(r)&&(r=F(r)),u.walkDecls(r,function(r){var n=r.value,i=r.prop;if(!y.test(i)){var o=!1,a=!1,b=!1,F=!1;if(h&&(o=g.test(n)),m&&!o&&(a=v.test(n)),A&&(!o||!a)){var q=K[e];if(!q){var E=l(A,e);E&&(q=new RegExp("^"+E.join("$|^")+"$"),K[e]=q)}q&&(b=q.test(n))}if(V&&(!o||!a||!b)){var P=k[e];if(!P){var z=s(V,e);z&&(P=z.map(x),k[e]=P)}P&&(F=P.filter(function(e){return e.test(n)}).length>0)}if(!(o||a||b||F)){var R=function(e,r){var n=e.ignoreFunctions,i=e.ignoreKeywords,t=e.ignoreValues,o=[];return e.ignoreVariables&&o.push("variable"),n&&o.push("function"),i&&l(i,r)&&o.push("keyword"),t&&s(t,r)&&o.push("keyword"),o}(w,e),S=r.raws,Z=r.source.start;if(t.fix&&!O){var N=j(r,{validVar:o,validFunc:a,validKeyword:b,validValue:F},u,w);N&&(r.value=N)}else f.report({ruleName:c,result:d,node:r,line:Z.line,column:Z.column+i.length+S.between.length,message:p.expected(R,n,i,$)})}}})})}}};w.primaryOptionArray=!0;var h=r.createPlugin(c,w);exports.default=h,exports.ruleName=c,exports.messages=p;
//# sourceMappingURL=index.js.map