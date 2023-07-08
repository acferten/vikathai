!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(3)),a=(n.n(o),n(4)),i=wp.editor.RichText,__=wp.i18n.__;(0,wp.blocks.registerBlockType)("filebird/block-filebird-gallery",{title:__("FileBird Gallery","filebird"),description:__("Display folder images in a rich gallery.","filebird"),icon:"images-alt2",category:"common",keywords:[__("filebird-gallery")],supports:{align:!0},attributes:{isLoading:{type:"boolean",default:!1},captions:{type:"object",default:{}},imagesRemoved:{type:"array",default:[]},images:{type:"array",default:[]},selectedFolder:{type:"array",default:[]},columns:{type:"integer",default:3},isCropped:{type:"boolean",default:!0},hasCaption:{type:"boolean",default:!1},hasLightbox:{type:"boolean",default:!1},linkTo:{type:"string",default:"none"},sortBy:{type:"string",default:wp.media.model.Query.defaultProps.orderby},sortType:{type:"string",default:wp.media.model.Query.defaultProps.order},layout:{type:"string",default:"flex"},spaceAroundImage:{type:"integer",default:0},imgMinWidth:{type:"integer",default:0}},edit:a.a,save:function(e){var t=e.attributes;return e.className,wp.element.createElement("ul",{className:"wp-block-gallery columns-"+t.columns+" "+(t.isCropped?"is-cropped":"")},t.images.map(function(e){var n=void 0;switch(t.linkTo){case"media":n=e.fullUrl||e.url;break;case"attachment":n=e.link}var r=wp.element.createElement("img",{src:e.url,alt:e.alt,className:e.id?"wp-image-"+e.id:null});return wp.element.createElement("li",{key:e.id||e.url,className:"blocks-gallery-item"},wp.element.createElement("figure",null,n?wp.element.createElement("a",{href:n},r):r,!i.isEmpty(e.caption)&&wp.element.createElement(i.Content,{tagName:"figcaption",className:"blocks-gallery-item__caption",value:e.caption})))}))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}var a=n(5),i=n.n(a),l=n(8),c=(n.n(l),n(9)),u=(n.n(c),n(10)),s=(n.n(u),this),f=function(){function e(e,t){var n=[],_n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(_n=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);_n=!0);}catch(e){r=!0,o=e}finally{try{!_n&&i.return&&i.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),__=wp.i18n.__,p=wp,d=p.apiFetch,m=wp.element,h=m.useState,y=m.useEffect,g=m.useRef,v=[{value:"attachment",label:__("Attachment Page","filebird")},{value:"media",label:__("Media File","filebird")},{value:"none",label:__("None","filebird")}],b=[{value:"name",label:fbv_data.i18n.by_name},{value:"date",label:fbv_data.i18n.by_date},{value:"modified",label:fbv_data.i18n.by_modified},{value:"author",label:fbv_data.i18n.by_author},{value:"title",label:fbv_data.i18n.by_title},{value:"file_name",label:fbv_data.i18n.by_file_name}],w=[{value:"ASC",label:__("Ascending","filebird")},{value:"DESC",label:__("Descending","filebird")}],E=[{value:"flex",label:__("Flex","filebird")},{value:"masonry",label:__("Masonry","filebird")},{value:"grid",label:__("Grid","filebird")}],_=function(e){var t=e.attributes,n=e.setAttributes,a=e.className,p=(e.isSelected,g(!1)),m=h(""),_=f(m,2),x=_[0],C=_[1],L=function(){var e=o(i.a.mark(function e(){var r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(fbv_data.json_url+"/gutenberg-get-folders",{method:"GET",headers:{"X-WP-Nonce":fbv_data.rest_nonce}}).then(function(e){if(e.ok)return e;throw new Error("Network response was not ok.")});case 2:return r=e.sent,e.next=5,r.json();case 5:o=e.sent,n({folders:o.data,selectedFolder:t.selectedFolder});case 7:case"end":return e.stop()}},e,s)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=o(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({isLoading:!0}),e.next=3,d({url:fbv_data.json_url+"/gutenberg-get-images",method:"POST",data:Object.assign({},t),headers:{"X-WP-Nonce":fbv_data.rest_nonce}});case 3:r=e.sent,n({isLoading:!1}),C(r.html);case 6:case"end":return e.stop()}},e,s)}));return function(){return e.apply(this,arguments)}}(),N=function(e){0!=e&&n({selectedFolder:[].concat(r(e))})},S=function(e){n({columns:e})},T=function(){n({isCropped:!t.isCropped})},j=function(){n({hasCaption:!t.hasCaption})},F=function(e){n({linkTo:e})};return y(function(){L(),t.selectedFolder.length&&k()},[]),y(function(){p.current?k():p.current=!0},[t.sortBy,t.sortType,t.hasCaption,t.selectedFolder,t.columns,t.isCropped,t.layout,t.spaceAroundImage,t.imgMinWidth]),wp.element.createElement("div",{className:a},t.isLoading?wp.element.createElement("div",{className:"components-placeholder"},wp.element.createElement("div",{className:"components-placeholder__fieldset"},wp.element.createElement("span",{className:"components-spinner"}))):x?wp.element.createElement("div",{dangerouslySetInnerHTML:{__html:x}}):0==t.selectedFolder?wp.element.createElement("div",{className:"components-notice is-error"},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,__("Please choose folder in the block settings.","filebird")))):wp.element.createElement("div",{className:"components-notice is-error"},wp.element.createElement("div",{className:"components-notice__content"},wp.element.createElement("p",null,__("This folder has no images, please choose another one.","filebird")))),wp.element.createElement(l.InspectorControls,null,wp.element.createElement(c.PanelBody,{title:__("Gallery Settings","filebird")},wp.element.createElement(c.SelectControl,{className:"filebird-select-wrapper",label:__("Folder"),value:t.selectedFolder,options:t.folders,onChange:N,multiple:!0,style:{height:100}}),x&&wp.element.createElement("div",null,wp.element.createElement(c.RangeControl,{label:__("Columns","filebird"),value:t.columns,onChange:S,min:1,max:5}),wp.element.createElement(c.ToggleControl,{label:__("Crop Images","filebird"),help:__("Thumbnails are cropped to align.","filebird"),checked:t.isCropped,onChange:T}),wp.element.createElement(c.ToggleControl,{label:__("Caption","filebird"),help:__("Display image caption","filebird"),checked:t.hasCaption,onChange:j}),wp.element.createElement(c.ToggleControl,{label:__("Add Lightbox","filebird"),checked:t.hasLightbox,onChange:function(e){return n({hasLightbox:e})}}),wp.element.createElement(c.SelectControl,{label:__("Layout","filebird"),value:t.layout,onChange:function(e){return n({layout:e})},options:E}),"masonry"===t.layout&&wp.element.createElement(u.Fragment,null,wp.element.createElement(c.__experimentalNumberControl,{className:"components-base-control",label:__("Space Around Image","filebird"),isDragEnabled:!0,isShiftStepEnabled:!0,step:1,value:t.spaceAroundImage,onChange:function(e){return n({spaceAroundImage:parseInt(e)})}}),wp.element.createElement(c.__experimentalNumberControl,{className:"components-base-control",label:__("Image Min Width","filebird"),isDragEnabled:!0,isShiftStepEnabled:!0,step:1,value:t.imgMinWidth,onChange:function(e){return n({imgMinWidth:parseInt(e)})}})),wp.element.createElement(c.SelectControl,{label:__("Link To","filebird"),value:t.linkTo,onChange:F,options:v}),wp.element.createElement(c.SelectControl,{label:__("Sort By","filebird"),value:t.sortBy,onChange:function(e){return n({sortBy:e})},options:b}),wp.element.createElement(c.SelectControl,{label:__("Sort Type","filebird"),value:t.sortType,onChange:function(e){return n({sortType:e})},options:w})))))};t.a=_},function(e,t,n){e.exports=n(6)},function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";function n(e,t,n,r){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),l=new d(r||[]);return i._invoke=u(e,n,l),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(n,o,a,i){var l=r(e[n],e,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"===typeof u&&v.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){c.value=e,a(c)},i)}i(l.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function u(e,t,n){var o=L;return function(a,i){if(o===N)throw new Error("Generator is already running");if(o===S){if("throw"===a)throw i;return h()}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=s(l,n);if(c){if(c===T)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===L)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=N;var u=r(e,t,n);if("normal"===u.type){if(o=n.done?S:k,u.arg===T)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=S,n.method="throw",n.arg=u.arg)}}}function s(e,t){var n=e.iterator[t.method];if(n===y){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=y,s(e,t),"throw"===t.method))return T;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,T;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=y),t.delegate=null,T):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,T)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function m(e){if(e){var t=e[w];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(v.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=y,t.done=!0,t};return r.next=r}}return{next:h}}function h(){return{value:y,done:!0}}var y,g=Object.prototype,v=g.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",E=b.asyncIterator||"@@asyncIterator",_=b.toStringTag||"@@toStringTag",x="object"===typeof e,C=t.regeneratorRuntime;if(C)return void(x&&(e.exports=C));C=t.regeneratorRuntime=x?e.exports:{},C.wrap=n;var L="suspendedStart",k="suspendedYield",N="executing",S="completed",T={},j={};j[w]=function(){return this};var F=Object.getPrototypeOf,O=F&&F(F(m([])));O&&O!==g&&v.call(O,w)&&(j=O);var P=i.prototype=o.prototype=Object.create(j);a.prototype=P.constructor=i,i.constructor=a,i[_]=a.displayName="GeneratorFunction",C.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},C.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,_ in e||(e[_]="GeneratorFunction")),e.prototype=Object.create(P),e},C.awrap=function(e){return{__await:e}},l(c.prototype),c.prototype[E]=function(){return this},C.AsyncIterator=c,C.async=function(e,t,r,o){var a=new c(n(e,t,r,o));return C.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},l(P),P[_]="Generator",P[w]=function(){return this},P.toString=function(){return"[object Generator]"},C.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},C.values=m,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=y)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=v.call(o,"catchLoc"),l=v.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&v.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),T},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),p(n),T}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:m(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=y),T}}}(function(){return this}()||Function("return this")())},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.element}]);