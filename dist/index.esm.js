import e from"stylelint";import n from"shortcss";import t from"shortcss/lib/list";import r from"css-values";import o from"path";const s="scale-unlimited/declaration-strict-value",i=(e,n)=>"object"==typeof e&&Object.hasOwnProperty.call(e,n),a={ignoreVariables:!0,ignoreFunctions:!0,ignoreKeywords:null,ignoreValues:null,expandShorthand:!1,recurseLonghand:!1,severity:"error",message:void 0,disableFix:!1,autoFixFunc:null};function l(e){const n=typeof e;return"string"===n||"number"===n}function u(e){return l(e)||Array.isArray(e)&&e.every(e=>l(e))}function c(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(n=>u(e[n]))}function f(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(n=>"boolean"==typeof e[n])}function p(e){if("object"!=typeof e)return!1;const n=Object.keys(a);return!(!Object.keys(e).every(e=>n.indexOf(e)>-1)||"ignoreVariables"in e&&"boolean"!=typeof e.ignoreVariables&&!f(e.ignoreVariables)&&null!==e.ignoreVariables||"ignoreFunctions"in e&&"boolean"!=typeof e.ignoreFunctions&&!f(e.ignoreFunctions)&&null!==e.ignoreFunctions||"severity"in e&&"string"!=typeof e.severity&&null!==e.severity||"ignoreKeywords"in e&&!u(e.ignoreKeywords)&&!c(e.ignoreKeywords)||"ignoreValues"in e&&!u(e.ignoreValues)&&!c(e.ignoreValues)||"expandShorthand"in e&&"boolean"!=typeof e.expandShorthand&&null!==e.expandShorthand||"recurseLonghand"in e&&"boolean"!=typeof e.recurseLonghand&&null!==e.recurseLonghand||"message"in e&&"string"!=typeof e.message&&null!==e.message||"disableFix"in e&&"boolean"!=typeof e.disableFix&&null!==e.disableFix||"autoFixFunc"in e&&"function"!=typeof e.autoFixFunc&&"string"!=typeof e.autoFixFunc&&null!==e.autoFixFunc)}function g(e){let n;if(Array.isArray(e)){const t=e.pop();n=e.length?`${e.join(", ")} or ${t}`:t}else n=e;return n}function y(e,n){return"boolean"==typeof e?e:"object"==typeof e&&e&&{}.hasOwnProperty.call(e,n)?e[n]:!!e}function d(e,n){if(!e)return null;let t=e;return i(t,n)?t=t[n]:i(t,"")&&(t=t[""]),Array.isArray(t)?t:[t]}function h(e,n){if(!e)return null;let t=e;return i(t,n)?t=t[n]:i(t,"")&&(t=t[""]),Array.isArray(t)?t:[t]}const{utils:x}=e,b=x.ruleMessages(s,{expected:function(e,n,t){return`Expected ${e} for "${n}" of "${t}"`},customExpected:function(e,n,t,r){return r.replace("${types}",e).replace("${value}",n).replace("${property}",t)},failedToFix:function(e,n,t){return e&&("string"==typeof e||e instanceof Error)?"string"==typeof e?e:e.message:`Property "${t}" with value "${n}" can't be autofixed`}}),m=/^(?:@|\$|--).+$/,F=/^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x20-\x7F])+(?:[a-zA-Z0-9_-]|[^\x20-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/,v=/^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/,$=/^\/(.*)\/([a-zA-Z]*)$/,w=/color/,V=e=>$.test(e),j=e=>{const[n,t]=(e=>e.match($).slice(1))(e);return new RegExp(n,t)},A=e=>V(`${e}`)?j(`${e}`):new RegExp(`^${e}$`),E=(e,i,l={})=>(c,f)=>{if(f&&f.stylelint&&f.stylelint.customMessages&&f.stylelint.customMessages[s]&&delete f.stylelint.customMessages[s],!x.validateOptions(f,s,{actual:e,possible:u},{actual:i,possible:p,optional:!0}))return;Array.isArray(e)||(e=[e]);const $={...a,...i},{ignoreVariables:E,ignoreFunctions:O,ignoreKeywords:k,ignoreValues:S,message:K,disableFix:R,autoFixFunc:L,expandShorthand:P,recurseLonghand:M}=$,N=function(e,n,t){if("function"==typeof e)return e;if("string"==typeof e){let n;try{n=require.resolve(e)}catch(t){n=require.resolve(o.join(process.cwd(),e))}return require(n)}return!n&&t&&console.warn(`No \`autoFix\` function provided, consider using \`disableFix\` for "${s}"`),null}(L,R,l.fix),q=k?{}:null,z=S?{}:null;let Z;if(E){const e=[];c.walkAtRules("value",n=>{const{params:t}=n,r=t.split(":")[0].trim();e.push(r)}),Z=new RegExp(`^-?(:?${e.join("|")})$`)}e.forEach(e=>{let o=e;function i(n,t,o,i=!1){const{value:a,prop:u}=n,p=o||a;let m=!1,V=!1,j=!1,L=!1;if(E&&y(E,e)&&(m=F.test(p)||Z.test(p)),O&&!m&&y(O,e)&&(V=v.test(p)),i&&(!E||E&&!m)&&(!O||O&&!V)&&!0!==((e,n)=>w.test(e)&&"transparent"===n||F.test(n)||v.test(n)||r(e,n))(t,o))return!1;if(k&&(!m||!V)){let n=q[e];if(!n){const t=d(k,e);t&&(n=new RegExp(`^${t.join("$|^")}$`),q[e]=n)}n&&(j=n.test(p))}if(S&&(!m||!V||!j)){let n=z[e];if(!n){const t=h(S,e);t&&(n=t.map(A),z[e]=n)}n&&(L=n.filter(e=>e.test(p)).length>0)}if(!(m||V||j||L)){const r=function(e,n){const{ignoreVariables:t,ignoreFunctions:r,ignoreKeywords:o,ignoreValues:s}=e,i=[];return t&&i.push("variable"),r&&i.push("function"),o&&d(o,n)&&i.push("keyword"),-1===i.indexOf("keyword")&&s&&h(s,n)&&i.push("keyword"),i}($,e);if(l.fix&&!R&&N)try{const e=N(n,{validVar:m,validFunc:V,validKeyword:j,validValue:L,longhandProp:t,longhandValue:o},c,$);e&&(n.value=e)}catch(e){const{raws:t}=n,r=n.source.start;x.report({ruleName:s,result:f,node:n,line:r.line,column:r.column+u.length+t.between.length,message:b.failedToFix(e,p,u)})}else{const{raws:e}=n,t=n.source.start;x.report({ruleName:s,result:f,node:n,line:t.line,column:t.column+u.length+e.between.length,message:K?b.customExpected(g(r),p,u,K):b.expected(g(r),p,u)})}return!0}return!1}V(o)&&(o=j(o)),c.walkDecls(function(e){const{value:r,prop:s}=e;if(m.test(s))return;const a=P&&n.isShorthand(s);if(s===o||!a&&o instanceof RegExp&&o.test(s)){const n=t.space(r);if(n.length>1){let t=!1;n.forEach(n=>{t||(t=i(e,s,n))})}else i(e)}else if(a){const t=n.expand(s,r,M);let a=!1;Object.keys(t).forEach(n=>{const r=t[n];!a&&(n===o||o instanceof RegExp&&o.test(n))&&(a=i(e,n,r,!0))})}})})};E.primaryOptionArray=!0,E.ruleName=s,E.messages=b;const O=e.createPlugin(s,E);export{O as default,b as messages,s as ruleName};
//# sourceMappingURL=index.esm.js.map
