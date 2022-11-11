(()=>{var e={450:()=>{const e=document.getElementById("js-add"),t=document.getElementById("js-remove"),o=document.getElementById("js-fill"),n=document.getElementById("js-clear"),i=Array.from(document.getElementsByClassName("js-log")),r=document.getElementById("log"),a=document.getElementById("log-content-section"),s=document.querySelector(".log-clone"),l=document.getElementById("js-card-section"),c=document.querySelector(".clone-item");let d=[],u=[];function m(){for(;l.firstChild;)l.removeChild(l.firstChild);for(;a.firstChild;)a.removeChild(a.firstChild)}function f(){const e=c.cloneNode(!0);e.classList.remove("clone-item");const t=function(e){const t=y(15),o=y(80),n=e.querySelector(".card__title"),i=e.querySelector(".card__body");return e.name=t,e.body=o,n.innerText=t,i.innerText=o,e}(e);return l.appendChild(t),t}function h(e){const t=c.cloneNode(!0);t.classList.remove("clone-item");const o=t.querySelector(".card__title"),n=t.querySelector(".card__body");o.innerText=e.name,n.innerText=e.body,l.appendChild(t)}function g(e){const t=s.cloneNode(!0);t.classList.remove("log-clone"),t.querySelector(".removed-title").innerText=e.name,a.appendChild(t)}function v(){for(let e in localStorage)"items"===e&&(d=JSON.parse(localStorage.getItem("items")),d.forEach((e=>{h(e)}))),"removedItems"===e&&(u=JSON.parse(localStorage.getItem("removedItems")),u.forEach((e=>{g(e)})));b()}function y(e){const t="abcdefghijklmnopqrstuvwxyz ";let o="";for(;o.length<e;)o+=t[Math.floor(Math.random()*t.length)];return o}function b(){d.length<=1?n.classList.add("el-btn--disabled"):d.length>=9?o.classList.add("el-btn--disabled"):(n.classList.remove("el-btn--disabled"),o.classList.remove("el-btn--disabled"))}document.addEventListener("DOMContentLoaded",(()=>{v(),e.addEventListener("click",(()=>{const e=f();d.push(e),localStorage.setItem("items",JSON.stringify(d)),b()})),t.addEventListener("click",(()=>{const e=d.pop();null!=e&&(u.push(e),u.length>10&&u.splice(0,1)),localStorage.setItem("removedItems",JSON.stringify(u)),localStorage.setItem("items",JSON.stringify(d)),m(),v(),b()})),n.addEventListener("click",(()=>{m();const e=d.shift();d=[],d.push(e),localStorage.setItem("items",JSON.stringify(d)),v(),b()})),o.addEventListener("click",(()=>{for(let e=d.length;e<9;e++){const e=f();d.push(e),localStorage.setItem("items",JSON.stringify(d))}b()})),i.forEach((e=>{e.addEventListener("click",(()=>{r.classList.toggle("isActive")}))})),document.addEventListener("click",(e=>{const{target:{classList:t,parentElement:o}}=e;if(Array.from(t).includes("card__modal")&&MicroModal.show("modal-1"),Array.from(t).includes("log-restore")){const e=o.querySelector(".removed-title").innerText,t=u.find((t=>t.name===e)),n=u.findIndex((t=>t.name===e));d.push(t),localStorage.setItem("items",JSON.stringify(d)),u.splice(n,1),localStorage.setItem("removedItems",JSON.stringify(u))}if(Array.from(t).includes("card__remove")){const e=o.querySelector(".card__title").innerText,t=d.find((t=>t.name===e)),n=d.findIndex((t=>t.name===e));u.push(t),d.splice(n,1),localStorage.setItem("items",JSON.stringify(d)),localStorage.setItem("removedItems",JSON.stringify(u))}m(),v(),b()}))}))}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o(450);var n,i,r,a,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function t(o){var n=o.targetModal,i=o.triggers,r=void 0===i?[]:i,a=o.onShow,s=void 0===a?function(){}:a,l=o.onClose,c=void 0===l?function(){}:l,d=o.openTrigger,u=void 0===d?"data-micromodal-trigger":d,m=o.closeTrigger,f=void 0===m?"data-micromodal-close":m,h=o.openClass,g=void 0===h?"is-open":h,v=o.disableScroll,y=void 0!==v&&v,b=o.disableFocus,p=void 0!==b&&b,E=o.awaitCloseAnimation,w=void 0!==E&&E,S=o.awaitOpenAnimation,k=void 0!==S&&S,L=o.debugMode,I=void 0!==L&&L;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(n),this.config={debugMode:I,disableScroll:y,openTrigger:u,closeTrigger:f,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:w,awaitOpenAnimation:k,disableFocus:p},r.length>0&&this.registerTriggers.apply(this,e(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var o;return(o=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(n);return Array.apply(void 0,e(t))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,o),t}(),r=null,a=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)a(o);return!0},{init:function(t){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=e(document.querySelectorAll("[".concat(o.openTrigger,"]"))),a=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,a))for(var l in a){var c=a[l];o.targetModal=l,o.triggers=e(c),r=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===a(e)||(r&&r.removeEventListeners(),(r=new i(o)).showModal())},close:function(e){e?r.closeModalById(e):r.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l),l.init()})()})();