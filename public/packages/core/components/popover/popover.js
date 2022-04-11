(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);var t=e.$,r=e.utils,n=e.getDevice,a=(e.getSupport,e.Class,e.Modal),p=(e.ConstructorMethods,e.ModalMethods),i=r.extend;function s(e){this.wrapped=e}function l(e){var o,t;function r(o,t){try{var a=e[o](t),p=a.value,i=p instanceof s;Promise.resolve(i?p.wrapped:p).then((function(e){i?r("return"===o?"return":"next",e):n(a.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){n("throw",e)}}function n(e,n){switch(e){case"return":o.resolve({value:n,done:!0});break;case"throw":o.reject(n);break;default:o.resolve({value:n,done:!1})}(o=o.next)?r(o.key,o.arg):t=null}this._invoke=function(e,n){return new Promise((function(a,p){var i={key:e,arg:n,resolve:a,reject:p,next:null};t?t=t.next=i:(o=t=i,r(e,n))}))},"function"!=typeof e.return&&(this.return=void 0)}function c(e,o){return(c=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}l.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},l.prototype.next=function(e){return this._invoke("next",e)},l.prototype.throw=function(e){return this._invoke("throw",e)},l.prototype.return=function(e){return this._invoke("return",e)};var u=function(e){var o,r;function a(o,r){var a,p,s=i({on:{}},o.params.popover,r),l=d(a=e.call(this,o,s)||this),c=n();if(l.params=s,(p=l.params.el?t(l.params.el).eq(0):t(l.params.content).filter((function(e){return 1===e.nodeType})).eq(0))&&p.length>0&&p[0].f7Modal)return p[0].f7Modal||d(a);var u,h,f=t(l.params.targetEl).eq(0);if(0===p.length)return l.destroy()||d(a);l.params.backdrop&&l.params.backdropEl?u=t(l.params.backdropEl):l.params.backdrop&&0===(u=l.$containerEl.children(".popover-backdrop")).length&&(u=t('<div class="popover-backdrop"></div>'),l.$containerEl.append(u)),0===p.find(".popover-angle").length?(h=t('<div class="popover-angle"></div>'),p.prepend(h)):h=p.find(".popover-angle");var v=l.open;function m(){l.resize()}i(l,{app:o,$el:p,el:p[0],$targetEl:f,targetEl:f[0],$angleEl:h,angleEl:h[0],$backdropEl:u,backdropEl:u&&u[0],type:"popover",open:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];var n=o[0],a=o[1];return"boolean"==typeof o[0]&&(a=o[0],n=o[1]),n&&(l.$targetEl=t(n),l.targetEl=l.$targetEl[0]),v.call(l,a)}}),l.on("popoverOpen",(function(){l.resize(),o.on("resize",m),t(window).on("keyboardDidShow keyboardDidHide",m),l.on("popoverClose popoverBeforeDestroy",(function(){o.off("resize",m),t(window).off("keyboardDidShow keyboardDidHide",m)}))}));var g=null;function k(e){g=e.target}function y(e){var o=e.target,r=t(o);!c.desktop&&c.cordova&&(window.Keyboard&&window.Keyboard.isVisible||window.cordova.plugins&&window.cordova.plugins.Keyboard&&window.cordova.plugins.Keyboard.isVisible)||0===r.closest(l.el).length&&(l.params.closeByBackdropClick&&l.params.backdrop&&l.backdropEl&&l.backdropEl===o&&g===o||l.params.closeByOutsideClick&&g===o)&&l.close()}function b(e){27===e.keyCode&&l.params.closeOnEscape&&l.close()}return l.params.closeOnEscape&&(l.on("popoverOpen",(function(){t(document).on("keydown",b)})),l.on("popoverClose",(function(){t(document).off("keydown",b)}))),l.on("popoverOpened",(function(){(l.params.closeByOutsideClick||l.params.closeByBackdropClick)&&(o.on("touchstart",k),o.on("click",y))})),l.on("popoverClose",(function(){(l.params.closeByOutsideClick||l.params.closeByBackdropClick)&&(o.off("touchstart",k),o.off("click",y))})),p[0].f7Modal=l,l||d(a)}return r=e,(o=a).prototype=Object.create(r.prototype),o.prototype.constructor=o,c(o,r),a.prototype.resize=function(){var e=this,o=e.app,r=e.$el,n=e.$targetEl,a=e.$angleEl,p=e.params,i=p.targetX,s=p.targetY;r.css({left:"",top:""});var l,c,d,u,h,f,v=[r.width(),r.height()],m=v[0],g=v[1],k=0;"ios"===o.theme||"aurora"===o.theme?(a.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""}),k=a.width()/2):r.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom popover-on-middle").css({left:"",top:""});var y=parseInt(t("html").css("--f7-safe-area-top"),10),b=parseInt(t("html").css("--f7-safe-area-left"),10),w=parseInt(t("html").css("--f7-safe-area-right"),10);if(Number.isNaN(y)&&(y=0),Number.isNaN(b)&&(b=0),Number.isNaN(w)&&(w=0),n&&n.length>0){d=n.outerWidth(),u=n.outerHeight();var E=n.offset();h=E.left-o.left,f=E.top-o.top;var C=n.parents(".page");C.length>0&&(f-=C[0].scrollTop)}else void 0!==i&&"undefined"!==s&&(h=i,f=s,d=e.params.targetWidth||0,u=e.params.targetHeight||0);var M,x=0,O=0,B=0,$="md"===o.theme?"bottom":"top";"md"===o.theme?(g<o.height-f-u?($="bottom",O=f+u):g<f-y?(O=f-g,$="top"):($="middle",O=u/2+f-g/2),O=Math.max(8,Math.min(O,o.height-g-8)),h<o.width/2?(M="right",x="middle"===$?h+d:h):(M="left",x="middle"===$?h-m:h+d-m),x=Math.max(8,Math.min(x,o.width-m-8-w),b),r.addClass("popover-on-"+$+" popover-on-"+M)):(g+k<f-y?O=f-g-k:g+k<o.height-f-u?($="bottom",O=f+u+k):($="middle",B=O=u/2+f-g/2,B-=O=Math.max(5,Math.min(O,o.height-g-5))),"top"===$||"bottom"===$?(B=x=d/2+h-m/2,x=Math.max(5,Math.min(x,o.width-m-5)),b&&(x=Math.max(x,b)),w&&x+m>o.width-5-w&&(x=o.width-5-w-m),"top"===$&&a.addClass("on-bottom"),"bottom"===$&&a.addClass("on-top"),l=m/2-k+(B-=x),l=Math.max(Math.min(l,m-2*k-13),13),a.css({left:l+"px"})):"middle"===$&&(x=h-m-k,a.addClass("on-right"),(x<5||x+m+w>o.width||x<b)&&(x<5&&(x=h+d+k),x+m+w>o.width&&(x=o.width-m-5-w),x<b&&(x=b),a.removeClass("on-right").addClass("on-left")),c=g/2-k+B,c=Math.max(Math.min(c,g-2*k-13),13),a.css({top:c+"px"})));r.css({top:O+"px",left:x+"px"})},a}(a),h={name:"popover",params:{popover:{backdrop:!0,backdropEl:void 0,closeByBackdropClick:!0,closeByOutsideClick:!0,closeOnEscape:!1,containerEl:null}},static:{Popover:u},create:function(){var e=this;e.popover=i(p({app:e,constructor:u,defaultSelector:".popover.modal-in"}),{open:function(o,r,n){var a=t(o);if(a.length>1){var p=t(r).parents(".page");p.length&&a.each((function(e){var o=t(e);o.parents(p)[0]===p[0]&&(a=o)}))}a.length>1&&(a=a.eq(a.length-1));var i=a[0].f7Modal,s=a.dataset();return i||(i=new u(e,Object.assign({el:a,targetEl:r},s))),i.open(r,n)}})},clicks:{".popover-open":function(e,o){void 0===o&&(o={});this.popover.open(o.popover,e,o.animate)},".popover-close":function(e,o){void 0===o&&(o={});this.popover.close(o.popover,o.animate,e)}}};if(o){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
