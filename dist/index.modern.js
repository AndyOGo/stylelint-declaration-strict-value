import e from"stylelint";import t from"shortcss";import r from"shortcss/lib/list";import n from"css-values";import o from"path";function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const u="scale-unlimited/declaration-strict-value",c=(e,t)=>"object"==typeof e&&Object.hasOwnProperty.call(e,t),f={ignoreVariables:!0,ignoreFunctions:!0,ignoreKeywords:null,ignoreValues:null,expandShorthand:!1,recurseLonghand:!1,severity:"error",message:void 0,disableFix:!1,autoFixFunc:null};function p(e){const t=typeof e;return"string"===t||"number"===t}function y(e){return p(e)||Array.isArray(e)&&e.every(e=>p(e))}function g(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(t=>y(e[t]))}function d(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(t=>"boolean"==typeof e[t])}function b(e){if("object"!=typeof e)return!1;const t=Object.keys(f);return!(!Object.keys(e).every(e=>t.indexOf(e)>-1)||"ignoreVariables"in e&&"boolean"!=typeof e.ignoreVariables&&!d(e.ignoreVariables)&&null!==e.ignoreVariables||"ignoreFunctions"in e&&"boolean"!=typeof e.ignoreFunctions&&!d(e.ignoreFunctions)&&null!==e.ignoreFunctions||"severity"in e&&"string"!=typeof e.severity&&null!==e.severity||"ignoreKeywords"in e&&!y(e.ignoreKeywords)&&!g(e.ignoreKeywords)||"ignoreValues"in e&&!y(e.ignoreValues)&&!g(e.ignoreValues)||"expandShorthand"in e&&"boolean"!=typeof e.expandShorthand&&null!==e.expandShorthand||"recurseLonghand"in e&&"boolean"!=typeof e.recurseLonghand&&null!==e.recurseLonghand||"message"in e&&"string"!=typeof e.message&&null!==e.message||"disableFix"in e&&"boolean"!=typeof e.disableFix&&null!==e.disableFix||"autoFixFunc"in e&&"function"!=typeof e.autoFixFunc&&"string"!=typeof e.autoFixFunc&&null!==e.autoFixFunc)}function h(e,t){return"boolean"==typeof e?e:"object"==typeof e&&e&&{}.hasOwnProperty.call(e,t)?e[t]:!!e}function m(e,t){if(!e)return null;let r=e;return c(r,t)?r=r[t]:c(r,"")&&(r=r[""]),Array.isArray(r)?r:[r]}function v(e,t){if(!e)return null;let r=e;return c(r,t)?r=r[t]:c(r,"")&&(r=r[""]),Array.isArray(r)?r:[r]}const x=e.utils,w=x.ruleMessages(u,{expected:function(e,t,r,n=""){let o;if(Array.isArray(e)){const t=e.pop();o=e.length?`${e.join(", ")} or ${t}`:t}else o=e;return"string"==typeof n&&n.length?n.replace("${types}",o).replace("${value}",t).replace("${property}",r):`Expected ${o} for "${t}" of "${r}"`},failedToFix:function(e,t,r){return e&&("string"==typeof e||e instanceof Error)?"string"==typeof e?e:e.message:`Property "${r}" with value "${t}" can't be autofixed`}}),O=/^(?:@|\$|--).+$/,F=/^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x20-\x7F])+(?:[a-zA-Z0-9_-]|[^\x20-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/,j=/^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/,$=/^\/(.*)\/([a-zA-Z]*)$/,A=/color/,S=e=>$.test(e),V=e=>{const t=function(e){if(Array.isArray(e))return e}(r=(e=>e.match($).slice(1))(e))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),2!==i.length);s=!0);}catch(e){l=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(l)throw o}}return i}}(r)||function(e,t){if(e){if("string"==typeof e)return a(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,2):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var r;return new RegExp(t[0],t[1])},E=e=>S(""+e)?V(""+e):new RegExp(`^${e}$`),P=(e,i,l={})=>(a,c)=>{if(c&&c.stylelint&&c.stylelint.customMessages&&c.stylelint.customMessages[u]&&delete c.stylelint.customMessages[u],!x.validateOptions(c,u,{actual:e,possible:y},{actual:i,possible:b,optional:!0}))return;Array.isArray(e)||(e=[e]);const p=s(s({},f),i),g=p.ignoreVariables,d=p.ignoreFunctions,$=p.ignoreKeywords,P=p.ignoreValues,k=p.message,K=p.disableFix,R=p.expandShorthand,D=p.recurseLonghand,L=function(e,t,r){if("function"==typeof e)return e;if("string"==typeof e){let t;try{t=require.resolve(e)}catch(r){t=require.resolve(o.join(process.cwd(),e))}return require(t)}return!t&&r&&console.warn(`No \`autoFix\` function provided, consider using \`disableFix\` for "${u}"`),null}(p.autoFixFunc,K,l.fix),M=$?{}:null,q=P?{}:null;let z;if(g){const e=[];a.walkAtRules("value",t=>{const r=t.params.split(":")[0].trim();e.push(r)}),z=new RegExp(`^-?(:?${e.join("|")})$`)}e.forEach(e=>{let o=e;function i(t,r,o,i=!1){const s=t.prop,f=o||t.value;let y=!1,b=!1,O=!1,S=!1;if(g&&h(g,e)&&(y=F.test(f)||z.test(f)),d&&!y&&h(d,e)&&(b=j.test(f)),i&&(!g||g&&!y)&&(!d||d&&!b)&&!0!==((e,t)=>A.test(e)&&"transparent"===t||F.test(t)||j.test(t)||n(e,t))(r,o))return!1;if($&&(!y||!b)){let t=M[e];if(!t){const r=m($,e);r&&(t=new RegExp(`^${r.join("$|^")}$`),M[e]=t)}t&&(O=t.test(f))}if(P&&(!y||!b||!O)){let t=q[e];if(!t){const r=v(P,e);r&&(t=r.map(E),q[e]=t)}t&&(S=t.filter(e=>e.test(f)).length>0)}if(!(y||b||O||S)){const n=function(e,t){const r=e.ignoreFunctions,n=e.ignoreKeywords,o=e.ignoreValues,i=[];return e.ignoreVariables&&i.push("variable"),r&&i.push("function"),n&&m(n,t)&&i.push("keyword"),-1===i.indexOf("keyword")&&o&&v(o,t)&&i.push("keyword"),i}(p,e);if(l.fix&&!K&&L)try{const e=L(t,{validVar:y,validFunc:b,validKeyword:O,validValue:S,longhandProp:r,longhandValue:o},a,p);e&&(t.value=e)}catch(e){const r=t.source.start;x.report({ruleName:u,result:c,node:t,line:r.line,column:r.column+s.length+t.raws.between.length,message:w.failedToFix(e,f,s)})}else{const e=t.source.start;x.report({ruleName:u,result:c,node:t,line:e.line,column:e.column+s.length+t.raws.between.length,message:w.expected(n,f,s,k)})}return!0}return!1}S(o)&&(o=V(o)),a.walkDecls(function(e){const n=e.value,s=e.prop;if(O.test(s))return;const l=R&&t.isShorthand(s);if(s===o||!l&&o instanceof RegExp&&o.test(s)){const t=r.space(n);if(t.length>1){let r=!1;t.forEach(t=>{r||(r=i(e,s,t))})}else i(e)}else if(l){const r=t.expand(s,n,D);let l=!1;Object.keys(r).forEach(t=>{const n=r[t];!l&&(t===o||o instanceof RegExp&&o.test(t))&&(l=i(e,t,n,!0))})}})})};P.primaryOptionArray=!0;const k=e.createPlugin(u,P);export default k;export{w as messages,u as ruleName};
//# sourceMappingURL=index.modern.js.map
