function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(T,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function T(){var e=v();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function h(e){return u=void 0,g&&r?b(e):(r=i=void 0,a)}function w(){var e=v(),n=S(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(T,t),b(f)}return void 0===u&&(u=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T={};function h(e){e.preventDefault();const t=e.target.name,n=e.target.value;T[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(T))}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.emailElement.value=e.email,b.messageElement.value=e.message)}(),j.addEventListener("input",e(t)(h,500)),S.addEventListener("input",e(t)(h,500));b.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.email.value,n=e.target.elements.message.value;""===t||""===n?alert("Пожалуйста, заполните все поля!"):(localStorage.removeItem("feedback-form-state"),console.log({email:t,message:n})),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.7b2b245b.js.map
