!function(){var t={12317:function(t,e,r){var n={"./decidim/budgets/decidim_budgets.svg":85776};function o(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id=12317},1047:function(){$((function(){var t=function(){var t=document.querySelector("[data-progressbox-fixed]"),e=document.querySelector("[data-progress-reference]"),r="is-progressbox-visible";e&&(e.getBoundingClientRect().bottom>0?t.classList.remove(r):t.classList.add(r))};window.addEventListener("scroll",t),window.DecidimBudgets=window.DecidimBudgets||{},window.DecidimBudgets.checkProgressPosition=t}))},66494:function(){$((function(){var t=$("#projects, #project"),e=$(".budget-summary__total"),r=$("#budget-excess"),n=$(".budget-summary__progressbox"),o=parseInt(e.attr("data-total-allocation"),10),i=function(t){t.stopPropagation(),t.preventDefault()},a=function(t){return t.parents("#loginModal").length>0||t.parents("#authorizationModal").length>0};if(t.on("click",".budget-list__action",(function(t){var e=parseInt(n.attr("data-current-allocation"),10),a=$(t.currentTarget),u=parseInt(a.attr("data-allocation"),10);a.attr("disabled")?i(t):"true"===a.attr("data-add")&&e+u>o&&(r.foundation("toggle"),i(t))})),$("#order-progress [data-toggle=budget-confirm]").length>0){var u=$(".budget-summary").attr("data-safe-url").split("?")[0];$(document).on("click","a",(function(t){a($(t.currentTarget))?window.exitUrl=null:window.exitUrl=t.currentTarget.href})),$(document).on("submit","form",(function(t){a($(t.currentTarget))?window.exitUrl=null:window.exitUrl=t.currentTarget.action})),window.addEventListener("beforeunload",(function(t){var e=parseInt(n.attr("data-current-allocation"),10),r=window.exitUrl;window.exitUrl=null,0===e||r&&r.startsWith(u)||(t.returnValue=!0)}))}}))},85776:function(t,e,r){"use strict";t.exports=r.p+"media/images/decidim_budgets-63f448a8ecee4f8376a0.svg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/decidim-packs/",function(){"use strict";r(66494),r(1047);r(12317)}()}();
//# sourceMappingURL=decidim_budgets-db5fa642dbf32c1df2e9.js.map