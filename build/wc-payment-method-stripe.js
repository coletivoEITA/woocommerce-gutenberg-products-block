!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(15),o=n(16),c=n(17),a=n(19);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||a()}},function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(){}function a(){}t=t&&t.hasOwnProperty("default")?t.default:t,a.resetWarningCache=c;var i=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,o,c){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==c){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:c};return n.PropTypes=n,n}()})),s=function(e){return null!==e&&"object"===n(e)},u=function e(t,n){if(!s(t)||!s(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o="[object Object]"===Object.prototype.toString.call(t);if(o!==("[object Object]"===Object.prototype.toString.call(n)))return!1;if(!o&&!r)return!1;var c=Object.keys(t),a=Object.keys(n);if(c.length!==a.length)return!1;for(var i={},u=0;u<c.length;u+=1)i[c[u]]=!0;for(var l=0;l<a.length;l+=1)i[a[l]]=!0;var p=Object.keys(i);if(p.length!==c.length)return!1;var f=t,d=n;return p.every((function(t){return e(f[t],d[t])}))},l=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},p=function(e){if(null===e||s(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},f=function(e){if(function(e){return s(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(p)};var t=p(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},d=t.createContext(null);d.displayName="ElementsContext";var m=function(e){var n=e.stripe,r=e.options,c=e.children,a=t.useRef(!1),i=t.useRef(!0),s=t.useMemo((function(){return f(n)}),[n]),p=o(t.useState((function(){return{stripe:null,elements:null}})),2),m=p[0],y=p[1],b=l(n),v=l(r);return null!==b&&(b!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),u(r,v)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===s.tag&&(a.current=!0,y({stripe:s.stripe,elements:s.stripe.elements(r)})),"async"===s.tag&&(a.current=!0,s.stripePromise.then((function(e){e&&i.current&&y({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){i.current=!1}}),[]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.1.2"})}),[m.stripe]),t.createElement(d.Provider,{value:m},c)};m.propTypes={stripe:i.any,options:i.object};var y=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(d),e)},b=function(e){return(0,e.children)(y("mounts <ElementsConsumer>"))};b.propTypes={children:i.func.isRequired};var v=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},g=function(e){return s(e)?(e.paymentRequest,r(e,["paymentRequest"])):{}},h=function(){},E=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),c=n?function(e){y("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,c=n.className,a=n.options,i=void 0===a?{}:a,s=n.onBlur,l=void 0===s?h:s,p=n.onFocus,f=void 0===p?h:p,d=n.onReady,m=void 0===d?h:d,b=n.onChange,E=void 0===b?h:b,O=n.onEscape,w=void 0===O?h:O,R=n.onClick,C=void 0===R?h:R,_=y("mounts <".concat(o,">")).elements,j=t.useRef(null),S=t.useRef(null),P=v(m),x=v(l),T=v(f),A=v(C),k=v(E),I=v(w);t.useLayoutEffect((function(){if(null==j.current&&_&&null!=S.current){var t=_.create(e,i);j.current=t,t.mount(S.current),t.on("ready",(function(){return P(t)})),t.on("change",k),t.on("blur",x),t.on("focus",T),t.on("escape",I),t.on("click",A)}}));var q=t.useRef(i);return t.useEffect((function(){q.current&&q.current.paymentRequest!==i.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=g(i);0===Object.keys(e).length||u(e,g(q.current))||j.current&&(j.current.update(e),q.current=i)}),[i]),t.useEffect((function(){return function(){j.current&&j.current.destroy()}}),[]),t.createElement("div",{id:r,className:c,ref:S})};return c.propTypes={id:i.string,className:i.string,onChange:i.func,onBlur:i.func,onFocus:i.func,onReady:i.func,onClick:i.func,options:i.object},c.displayName=o,c.__elementType=e,c},O="undefined"==typeof window,w=E("auBankAccount",O),R=E("card",O),C=E("cardNumber",O),_=E("cardExpiry",O),j=E("cardCvc",O),S=E("fpxBank",O),P=E("iban",O),x=E("idealBank",O),T=E("paymentRequestButton",O);e.AuBankAccountElement=w,e.CardCvcElement=j,e.CardElement=R,e.CardExpiryElement=_,e.CardNumberElement=C,e.Elements=m,e.ElementsConsumer=b,e.FpxBankElement=S,e.IbanElement=P,e.IdealBankElement=x,e.PaymentRequestButtonElement=T,e.useElements=function(){return y("calls useElements()").elements},e.useStripe=function(){return y("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(20))},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()},,,function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){function n(e,t,n,r,o,c,a){try{var i=e[c](a),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var a=e.apply(t,r);function i(e){n(a,o,c,i,s,"next",e)}function s(e){n(a,o,c,i,s,"throw",e)}i(void 0)}))}}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t,n){var r=n(21);e.exports=function(e,t){if(null==e)return{};var n,o,c=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}},function(e,t,n){var r=n(18);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n(12),c=n.n(o),a=n(3),i=n.n(a),s=n(1),u=n(0);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="https://js.stripe.com/v3",f=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,d="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",m=null,y=function(e){return null!==m?m:m=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(d),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(p,'"]')),t=0;t<e.length;t++){var n=e[t];if(f.test(n.src))return n}return null}();r&&e?console.warn(d):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(p).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(e){return void n(e)}else t(null)}))},b=function(e,t){if(null===e)return null;var n=e.apply(void 0,l(t));return function(e){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.6.0"})}(n),n},v=Promise.resolve().then((function(){return y(null)})),g=!1;v.catch((function(e){g||console.warn(e)}));var h=n(2),E=n.n(h),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.map((function(e){return{amount:e.value,label:e.label,pending:t}}))},w=function(e){return e[0].shipping_rates.map((function(e){return{id:e.rate_id,label:e.name,detail:e.description,amount:parseInt(e.price,10)}}))},R=function(e){return{first_name:e.recipient.split(" ").slice(0,1).join(" "),last_name:e.recipient.split(" ").slice(1).join(" "),company:"",address_1:void 0===e.addressLine[0]?"":e.addressLine[0],address_2:void 0===e.addressLine[1]?"":e.addressLine[1],city:e.city,state:e.region,country:e.country,postcode:e.postalCode.replace(" ","")}},C=function(e){var t=e.source,n=t&&t.owner.name,r=t&&t.owner.address,o=e.payerEmail||"",c=e.payerPhone||"";return{first_name:n?n.split(" ").slice(0,1).join(" "):"",last_name:n?n.split(" ").slice(1).join(" "):"",email:t&&t.owner.email||o,phone:t&&t.owner.phone||c.replace("/[() -]/g",""),country:r&&r.country||"",address_1:r&&r.line1||"",address_2:r&&r.line2||"",city:r&&r.city||"",state:r&&r.state||"",postcode:r&&r.postal_code||"",company:""}},_=function(e,t){return{payment_method:"stripe",stripe_source:e.source?e.source.id:null,payment_request_type:t}},j={INVALID_EMAIL:"email_invalid",INVALID_REQUEST:"invalid_request_error",API_CONNECTION:"api_connection_error",API_ERROR:"api_error",AUTHENTICATION_ERROR:"authentication_error",RATE_LIMIT_ERROR:"rate_limit_error",CARD_ERROR:"card_error",VALIDATION_ERROR:"validation_error"},S="invalid_number",P="invalid_expiry_month",x="invalid_expiry_year",T="invalid_cvc",A="incorrect_number",k="incomplete_number",I="incomplete_cvc",q="incomplete_expiry",M="expired_card",N="incorrect_cvc",D="incorrect_zip",L="invalid_expiry_year_past",H="card_declined",U="missing",F="processing_error",B=n(5),V=function(){var e=Object(B.getSetting)("stripe_data",null);if(!e)throw new Error("Stripe initialization data is not available");return e},W=function(e){return{label:V().stripeTotalLabel||Object(s.__)("Total","woo-gutenberg-products-block"),amount:e.value}},Y=function(e){return[j.INVALID_REQUEST,j.API_CONNECTION,j.API_ERROR,j.AUTHENTICATION_ERROR,j.RATE_LIMIT_ERROR].includes(e)},Z=function(e){var t;return(t={},E()(t,S,Object(s.__)("The card number is not a valid credit card number.","woocommerce-gateway-stripe")),E()(t,P,Object(s.__)("The card expiration month is invalid.","woocommerce-gateway-stripe")),E()(t,x,Object(s.__)("The card expiration year is invalid.","woocommerce-gateway-stripe")),E()(t,T,Object(s.__)("The card security code is invalid.","woocommerce-gateway-stripe")),E()(t,A,Object(s.__)("The card number is incorrect.","woocommerce-gateway-stripe")),E()(t,k,Object(s.__)("The card number is incomplete.","woocommerce-gateway-stripe")),E()(t,I,Object(s.__)("The card security code is incomplete.","woocommerce-gateway-stripe")),E()(t,q,Object(s.__)("The card expiration date is incomplete.","woocommerce-gateway-stripe")),E()(t,M,Object(s.__)("The card has expired.","woocommerce-gateway-stripe")),E()(t,N,Object(s.__)("The card security code is incorrect.","woocommerce-gateway-stripe")),E()(t,D,Object(s.__)("The card zip code failed validation.","woocommerce-gateway-stripe")),E()(t,L,Object(s.__)("The card expiration year is in the past","woocommerce-gateway-stripe")),E()(t,H,Object(s.__)("The card was declined.","woocommerce-gateway-stripe")),E()(t,U,Object(s.__)("There is no card on a customer that is being charged.","woocommerce-gateway-stripe")),E()(t,F,Object(s.__)("An error occurred while processing the card.","woocommerce-gateway-stripe")),t)[e]||null},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case j.INVALID_EMAIL:return Object(s.__)("Invalid email address, please correct and try again.","woo-gutenberg-product-blocks");case Y(e):return Object(s.__)("Unable to process this payment, please try again or use alternative method.","woo-gutenberg-product-blocks");case j.CARD_ERROR:return Z(t);case j.VALIDATION_ERROR:return""}return null},Q=function(e){return{country:e.country,state:e.state,city:e.city,postcode:e.postcode.replace(" ","").toUpperCase()}},$=function(){return new Promise((function(e){try{e(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g=!0,v.then((function(e){return b(e,t)}))}(function(){var e=V().publicKey;if(!e)throw new Error("There is no api key available for stripe. Make sure it is available on the wc.stripe_data.stripe.key property.");return e}()))}catch(t){e({error:t})}}))},K=function(e,t,n){Object(u.useEffect)((function(){var r=t((function(t){var r=t.processingResponse.paymentDetails||{};return function(e,t,n){var r={type:n.responseTypes.SUCCESS};if(!t.setup_intent&&!t.payment_intent_secret)return r;var o=!!t.setupIntent,c=t.verification_endpoint,a=o?t.setup_intent:t.payment_intent_secret;return e[o?"confirmCardSetup":"confirmCardPayment"](a).then((function(e){if(e.error)throw e.error;var t=e[o?"setupIntent":"paymentIntent"];return"requires_capture"!==t.status&&"succeeded"!==t.status||(r.redirectUrl=c),r})).catch((function(e){return r.type=n.responseTypes.ERROR,r.message=e.message,r.retry=!0,r.messageContext=n.noticeContexts.PAYMENTS,window.fetch(c+"&is_ajax"),r}))}(e,r,n)}));return function(){return r()}}),[t,e])},X=n(10),G=n.n(X),J=n(11),ee=n.n(J),te=n(4),ne=function(e,t,n,r,o,c){var a=Object(u.useState)(""),s=i()(a,2),l=s[0],p=s[1],f=Object(u.useCallback)((function(e){var t,n=e.error.type,r=e.error.code||"",o=null!==(t=z(n,r))&&void 0!==t?t:e.error.message;return p(o),o}),[]),d=e.onCheckoutAfterProcessingWithSuccess,m=e.onPaymentProcessing,y=e.onCheckoutAfterProcessingWithError;return K(c,d,o),function(e,t,n,r,o,c,a,i){var s=Object(te.useElements)();Object(u.useEffect)((function(){var u=function(){var e=ee()(G.a.mark((function e(t){var r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=V().inline_cc_form?te.CardElement:te.CardNumberElement,e.next=3,n.createSource(null==s?void 0:s.getElement(r),{type:"card",owner:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=i(function(){var n=ee()(G.a.mark((function n(){var i,s,l;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,i=r.billingData,!t){n.next=4;break}return n.abrupt("return",{type:o.responseTypes.ERROR,message:t});case 4:if(""===c||"0"===c){n.next=6;break}return n.abrupt("return",{type:o.responseTypes.SUCCESS,meta:{paymentMethodData:{paymentMethod:"stripe",paymentRequestType:"cc",stripe_source:c},billingData:i}});case 6:return s={address:{line1:i.address_1,line2:i.address_2,city:i.city,state:i.state,postal_code:i.postcode,country:i.country}},i.phone&&(s.phone=i.phone),i.email&&(s.email=i.email),(i.first_name||i.last_name)&&(s.name="".concat(i.first_name," ").concat(i.last_name)),n.next=12,u(s);case 12:if(!(l=n.sent).error){n.next=15;break}return n.abrupt("return",{type:o.responseTypes.ERROR,message:e(l)});case 15:if(l.source&&l.source.id){n.next=17;break}throw new Error(z(j.API_ERROR));case 17:return a(l.source.id),n.abrupt("return",{type:o.responseTypes.SUCCESS,meta:{paymentMethodData:{stripe_source:l.source.id,paymentMethod:"stripe",paymentRequestType:"cc"},billingData:i}});case 21:return n.prev=21,n.t0=n.catch(0),n.abrupt("return",{type:o.responseTypes.ERROR,message:n.t0});case 24:case"end":return n.stop()}}),n,null,[[0,21]])})));return function(){return n.apply(this,arguments)}}());return function(){l()}}),[i,r.billingData,n,c,a,e,t,o.noticeContexts.PAYMENTS,o.responseTypes.ERROR,o.responseTypes.SUCCESS,s])}(f,l,c,t,o,n,r,m),Object(u.useEffect)((function(){var e=y((function(e){var t,n=e.processingResponse;return!(null==n||null===(t=n.paymentDetails)||void 0===t?void 0:t.errorMessage)||{type:o.responseTypes.ERROR,message:n.paymentDetails.errorMessage,messageContext:o.noticeContexts.PAYMENTS}}));return function(){e()}}),[y,o.noticeContexts.PAYMENTS,o.responseTypes.ERROR]),f},re=n(9),oe=n.n(re);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie,se,ue,le={style:{base:{iconColor:"#666EE8",color:"#31325F",fontSize:(ie="fontSize",se="16px",ue={},"object"===("undefined"==typeof window?"undefined":oe()(window))&&"function"==typeof window.getComputedStyle&&(ue=window.getComputedStyle(document.documentElement)),ue[ie]||se),lineHeight:1.375,"::placeholder":{color:"#fff"}}},classes:{focus:"focused",empty:"empty",invalid:"has-error"}},pe=function(e){var t=Object(u.useState)(!1),n=i()(t,2),r=n[0],o=n[1],c=Object(u.useState)(ae(ae({},le),e)),a=i()(c,2),s=a[0],l=a[1],p=Object(u.useState)(""),f=i()(p,2),d=f[0],m=f[1];Object(u.useEffect)((function(){var e=r?"#CFD7E0":"#fff";l((function(t){var n=void 0!==t.showIcon?{showIcon:r}:{};return ae(ae({},s),{},{style:ae(ae({},s.style),{},{base:ae(ae({},s.style.base),{},{"::placeholder":{color:e}})})},n)}))}),[r]);var y=Object(u.useCallback)((function(e){o(!e||function(e){return!e})}),[o]);return{options:s,onActive:y,error:d,setError:m}};function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=e.inputErrorComponent,n=e.onChange,r=Object(u.useState)(!0),o=i()(r,2),c=o[0],a=o[1],l=pe({hidePostalCode:!0}),p=l.options,f=l.onActive,d=l.error,m=l.setError;return React.createElement(React.Fragment,null,React.createElement("div",{className:"wc-block-gateway-container wc-inline-card-element"},React.createElement(te.CardElement,{id:"wc-stripe-inline-card-element",className:"wc-block-gateway-input",options:p,onBlur:function(){return f(c)},onFocus:function(){return f(c)},onChange:function(e){e.error?m(e.error.message):m(""),a(e.empty),n(e)}}),React.createElement("label",{htmlFor:"wc-stripe-inline-card-element"},Object(s.__)("Credit Card Information","woo-gutenberg-products-block"))),React.createElement(t,{errorMessage:d}))},ye=function(e){var t=e.onChange,n=e.inputErrorComponent,r=Object(u.useState)({cardNumber:!0,cardExpiry:!0,cardCvc:!0}),o=i()(r,2),c=o[0],a=o[1],l=pe({showIcon:!1}),p=l.options,f=l.onActive,d=l.error,m=l.setError,y=pe(),b=y.options,v=y.onActive,g=y.error,h=y.setError,O=pe(),w=O.options,R=O.onActive,C=O.error,_=O.setError,j=function(e,n){return function(r){r.error?e(r.error.message):e(""),a(de(de({},c),{},E()({},n,r.empty))),t(r)}};return React.createElement("div",{className:"wc-block-card-elements"},React.createElement("div",{className:"wc-block-gateway-container wc-card-number-element"},React.createElement(te.CardNumberElement,{onChange:j(m,"cardNumber"),options:p,className:"wc-block-gateway-input",id:"wc-stripe-card-number-element",onFocus:function(){return f(c.cardNumber)},onBlur:function(){return f(c.cardNumber)}}),React.createElement("label",{htmlFor:"wc-stripe-card-number-element"},Object(s.__)("Card Number","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:d})),React.createElement("div",{className:"wc-block-gateway-container wc-card-expiry-element"},React.createElement(te.CardExpiryElement,{onChange:j(h,"cardExpiry"),options:b,className:"wc-block-gateway-input",onFocus:function(){return v(c.cardExpiry)},onBlur:function(){return v(c.cardExpiry)},id:"wc-stripe-card-expiry-element"}),React.createElement("label",{htmlFor:"wc-stripe-card-expiry-element"},Object(s.__)("Expiry Date","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:g})),React.createElement("div",{className:"wc-block-gateway-container wc-card-cvc-element"},React.createElement(te.CardCvcElement,{onChange:j(_,"cardCvc"),options:w,className:"wc-block-gateway-input",onFocus:function(){return R(c.cardCvc)},onBlur:function(){return R(c.cardCvc)},id:"wc-stripe-card-code-element"}),React.createElement("label",{htmlFor:"wc-stripe-card-code-element"},Object(s.__)("CVV/CVC","woo-gutenberg-product-blocks")),React.createElement(n,{errorMessage:C})))},be=function(){return Object.entries(V().icons).map((function(e){var t=i()(e,2),n=t[0],r=t[1];return{id:n,src:r.src,alt:r.alt}}))},ve=function(e){var t=e.billing,n=e.eventRegistration,r=e.emitResponse,o=e.components,c=o.ValidationInputError,a=o.PaymentMethodIcons,s=Object(u.useState)(""),l=i()(s,2),p=l[0],f=l[1],d=Object(te.useStripe)(),m=ne(n,t,p,f,r,d),y=function(e){e.error&&m(e),f("0")},b=be(),v=V().inline_cc_form?React.createElement(me,{onChange:y,inputErrorComponent:c}):React.createElement(ye,{onChange:y,inputErrorComponent:c});return React.createElement(React.Fragment,null,v,a&&b.length&&React.createElement(a,{icons:b,align:"left"}))},ge=function(e){var t=V().button.locale,n=e.activePaymentMethod,r=e.stripe;return"stripe"===n?React.createElement(te.Elements,{stripe:r,locale:t},React.createElement(ve,e)):null},he=$(),Ee=function(e){var t=Object(u.useState)(""),n=i()(t,2),r=n[0],o=n[1];return Object(u.useEffect)((function(){Promise.resolve(he).then((function(e){var t=e.error;t&&o(t.message)}))}),[o]),Object(u.useEffect)((function(){if(r)throw new Error(r)}),[r]),React.createElement(ge,c()({stripe:he},e))},Oe=function(e){var t=e.components.PaymentMethodLabel;return React.createElement(t,{icon:"card",text:Object(s.__)("Credit / Debit Card","woo-gutenberg-products-block")})},we=be(),Re={name:"stripe",label:React.createElement(Oe,null),content:React.createElement(Ee,null),edit:React.createElement(Ee,null),icons:we,canMakePayment:function(){return he},ariaLabel:Object(s.__)("Stripe Credit Card payment method","woo-gutenberg-products-block"),supports:{savePaymentInfo:V().allowSavedCards}},Ce={shippingAddressChange:null,shippingOptionChange:null,source:null},_e=n(13),je=n.n(_e),Se=n(14),Pe=n.n(Se);function xe(e){var t=function(e,t){if("object"!==oe()(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==oe()(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===oe()(t)?t:String(t)}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(e){var t=e.billing,n=e.shippingData,r=e.setExpressPaymentError,o=e.onClick,c=e.onClose,a=e.onSubmit,l=Object(te.useStripe)(),p=Object(u.useState)(null),f=i()(p,2),d=f[0],m=f[1],y=Object(u.useState)(!1),b=i()(y,2),v=b[0],g=b[1],h=Object(u.useState)(!1),j=i()(h,2),S=j[0],P=j[1],x=Object(u.useState)(!1),T=i()(x,2),A=T[0],k=T[1],I=Object(u.useRef)(d),q=Object(u.useRef)(""),M=Object(u.useRef)(n),N=function(){var e=Object(u.useState)(Ce),t=i()(e,2),n=t[0],r=t[1];return{paymentRequestEventHandlers:n,setPaymentRequestEventHandler:Object(u.useCallback)((function(e,t){r((function(n){return Ae(Ae({},n),{},E()({},e,t))}))}),[r]),clearPaymentRequestEventHandler:Object(u.useCallback)((function(e){r((function(t){t[e];return Pe()(t,[e].map(xe))}))}),[r])}}(),D=N.paymentRequestEventHandlers,L=N.clearPaymentRequestEventHandler,H=N.setPaymentRequestEventHandler;Object(u.useEffect)((function(){I.current=d,M.current=n}),[d,n]),Object(u.useEffect)((function(){if(l&&t.cartTotal.value){var e;if(!I.current&&!v)m(function(e){var t=e.stripe,n=e.total,r=e.currencyCode,o=e.countryCode,c=e.shippingRequired,a=e.cartTotalItems,i={total:W(n),currency:r,country:o||"US",requestPayerName:!0,requestPayerEmail:!0,requestPayerPhone:!0,requestShipping:c,displayItems:O(a)};return t.paymentRequest(i)}({total:t.cartTotal,currencyCode:t.currency.code.toLowerCase(),countryCode:null===(e=Object(B.getSetting)("baseLocation",{}))||void 0===e?void 0:e.country,shippingRequired:n.needsShipping,cartTotalItems:t.cartTotalItems,stripe:l}));S||!I.current||v||function(e){var t=e.paymentRequest,n=e.total,r=e.currencyCode,o=e.cartTotalItems;t.update({total:W(n),currency:r,displayItems:O(o)})}({paymentRequest:I.current,total:t.cartTotal,currencyCode:t.currency.code.toLowerCase(),cartTotalItems:t.cartTotalItems})}}),[t.cartTotal,t.currency.code,n.needsShipping,t.cartTotalItems,l,S,v]),Object(u.useEffect)((function(){d&&function(e){return new Promise((function(t){e.canMakePayment().then((function(e){if(e){var n=e.applePay?"apple_pay":"payment_request_api";t({canPay:!0,requestType:n})}else t({canPay:!1})}))}))}(d).then((function(e){e.requestType&&(q.current=e.requestType),k(e.canPay)}))}),[d]);var U=Object(u.useCallback)((function(e,t){var n={fail:{message:t,billingData:C(e),paymentMethodData:_(e,q.current)}};return e.complete("fail"),P(!1),g(!0),n}),[]),F=Object(u.useCallback)((function(e){e.complete("success"),g(!0),P(!1)}),[]);return Object(u.useEffect)((function(){var e={removeAllListeners:function(){}},t=e,n=e,o=e,i=e;return d&&A&&S&&(t=d.on("shippingaddresschange",(function(e){var t=R(e.shippingAddress);je()(Q(t),Q(M.current.shippingAddress))?e.updateWith({status:"success",shippingOptions:w(M.current.shippingRates)}):(M.current.setShippingAddress(R(e.shippingAddress)),H("shippingAddressChange",e))})),n=d.on("shippingoptionchange",(function(e){M.current.setSelectedRates(e.shippingOption.id),H("shippingOptionChange",e)})),o=d.on("source",(function(e){V().allowPrepaidCard||!e.source.card.funding?(H("sourceEvent",e),a()):r(Object(s.__)("Sorry, we're not accepting prepaid cards at this time.","woocommerce-gateway-stripe"))})),i=d.on("cancel",(function(){g(!0),P(!1),c()}))),function(){d&&(t.removeAllListeners(),n.removeAllListeners(),o.removeAllListeners(),i.removeAllListeners())}}),[d,A,S,c,H,r,a]),{paymentRequest:d,paymentRequestEventHandlers:D,clearPaymentRequestEventHandler:L,isProcessing:S,canMakePayment:A,onButtonClick:function(){P(!0),g(!1),r(""),o()},abortPayment:U,completePayment:F,paymentRequestType:q.current}},Ie=function(e){var t=e.shippingData,n=e.billing,r=e.eventRegistration,o=e.onSubmit,c=e.setExpressPaymentError,a=e.emitResponse,i=e.onClick,s=e.onClose,l=ke({billing:n,shippingData:t,setExpressPaymentError:c,onClick:i,onClose:s,onSubmit:o}),p=l.paymentRequest,f=l.paymentRequestEventHandlers,d=l.clearPaymentRequestEventHandler,m=l.isProcessing,y=l.canMakePayment,b=l.onButtonClick,v=l.abortPayment,g=l.completePayment;!function(e){var t=e.canMakePayment,n=e.isProcessing,r=e.eventRegistration,o=e.paymentRequestEventHandlers,c=e.clearPaymentRequestEventHandler,a=e.billing,i=e.shippingData,s=e.emitResponse,l=e.paymentRequestType,p=e.completePayment,f=e.abortPayment,d=r.onShippingRateSuccess,m=r.onShippingRateFail,y=r.onShippingRateSelectSuccess,b=r.onShippingRateSelectFail,v=r.onPaymentProcessing,g=r.onCheckoutAfterProcessingWithSuccess,h=r.onCheckoutAfterProcessingWithError,E=s.noticeContexts,j=s.responseTypes,S=Object(u.useRef)(o),P=Object(u.useRef)(a),x=Object(u.useRef)(i),T=Object(u.useRef)(l);Object(u.useEffect)((function(){S.current=o,P.current=a,x.current=i,T.current=l}),[o,a,i,l]),Object(u.useEffect)((function(){var e=function(e){var t=S.current;t.shippingAddressChange&&n&&t.shippingAddressChange.updateWith({status:e.hasInvalidAddress?"invalid_shipping_address":"fail",shippingOptions:[]}),c("shippingAddressChange")},r=function(e){var t=S.current,r={type:j.SUCCESS};if(t.sourceEvent&&n){var o=e.paymentStatus,a=e.paymentDetails;if(o===j.SUCCESS&&p(t.sourceEvent),o===j.ERROR||o===j.FAIL){var i=f(t.sourceEvent,null==a?void 0:a.errorMessage);r={type:j.ERROR,message:i.message,messageContext:E.EXPRESS_PAYMENTS,retry:!0}}c("sourceEvent")}return r};if(t&&n){var o=d((function(e){var t=S.current,r=P.current;t.shippingAddressChange&&n&&(t.shippingAddressChange.updateWith({status:"success",shippingOptions:w(e),total:W(r.cartTotal),displayItems:O(r.cartTotalItems)}),c("shippingAddressChange"))})),a=m(e),i=y(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var t=S.current,r=x.current,o=P.current;if(t.shippingOptionChange&&!r.isSelectingRate&&n){var a=e?{status:"success",total:W(o.cartTotal),displayItems:O(o.cartTotalItems)}:{status:"fail"};t.shippingOptionChange.updateWith(a),c("shippingOptionChange")}}}()),s=b(e),u=v((function(){var e,t=S.current;return t.sourceEvent&&n?{type:j.SUCCESS,meta:{billingData:C(t.sourceEvent),paymentMethodData:_(t.sourceEvent,T.current),shippingData:(e=t.sourceEvent,e.shippingAddress?{address:R(e.shippingAddress)}:null)}}:{type:j.SUCCESS}})),l=g(r),A=h(r);return function(){A(),l(),u(),a(),o(),i(),s()}}}),[t,n,d,m,y,b,v,g,h,j,E,p,f,c])}({canMakePayment:y,isProcessing:m,eventRegistration:r,paymentRequestEventHandlers:f,clearPaymentRequestEventHandler:d,billing:n,shippingData:t,emitResponse:a,paymentRequestType:l.paymentRequestType,completePayment:g,abortPayment:v});var h={paymentRequestButton:{type:"default",theme:V().button.theme,height:"48px"}};return y&&p?React.createElement(te.PaymentRequestButtonElement,{onClick:b,options:{style:h,paymentRequest:p}}):null},qe=function(e){var t=V().button.locale,n=e.stripe;return React.createElement(te.Elements,{stripe:n,locale:t},React.createElement(Ie,e))},Me=function(){return React.createElement("img",{src:"data:image/svg+xml,%3Csvg width='264' height='48' viewBox='0 0 264 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='264' height='48' rx='3' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M125.114 16.6407C125.682 15.93 126.067 14.9756 125.966 14C125.135 14.0415 124.121 14.549 123.533 15.2602C123.006 15.8693 122.539 16.8641 122.661 17.7983C123.594 17.8797 124.526 17.3317 125.114 16.6407Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M125.955 17.982C124.601 17.9011 123.448 18.7518 122.801 18.7518C122.154 18.7518 121.163 18.0224 120.092 18.0421C118.696 18.0629 117.402 18.8524 116.694 20.1079C115.238 22.6196 116.31 26.3453 117.726 28.3909C118.414 29.4028 119.242 30.5174 120.334 30.4769C121.366 30.4365 121.77 29.8087 123.024 29.8087C124.277 29.8087 124.641 30.4769 125.733 30.4567C126.865 30.4365 127.573 29.4443 128.261 28.4313C129.049 27.2779 129.373 26.1639 129.393 26.1027C129.373 26.0825 127.209 25.2515 127.189 22.7606C127.169 20.6751 128.888 19.6834 128.969 19.6217C127.998 18.1847 126.481 18.0224 125.955 17.982Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M136.131 23.1804H138.834C140.886 23.1804 142.053 22.0752 142.053 20.1592C142.053 18.2432 140.886 17.1478 138.845 17.1478H136.131V23.1804ZM139.466 15.1582C142.411 15.1582 144.461 17.1903 144.461 20.1483C144.461 23.1172 142.369 25.1596 139.392 25.1596H136.131V30.3498H133.775V15.1582H139.466Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152.198 26.224V25.3712L149.579 25.5397C148.106 25.6341 147.339 26.182 147.339 27.14C147.339 28.0664 148.138 28.6667 149.39 28.6667C150.988 28.6667 152.198 27.6449 152.198 26.224ZM145.046 27.2032C145.046 25.2551 146.529 24.1395 149.263 23.971L152.198 23.7922V22.9498C152.198 21.7181 151.388 21.0442 149.947 21.0442C148.758 21.0442 147.896 21.6548 147.717 22.5916H145.592C145.656 20.6232 147.507 19.1914 150.01 19.1914C152.703 19.1914 154.459 20.602 154.459 22.7917V30.351H152.282V28.5298H152.229C151.609 29.719 150.241 30.4666 148.758 30.4666C146.571 30.4666 145.046 29.1612 145.046 27.2032Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M156.461 34.4145V32.5934C156.608 32.6141 156.965 32.6354 157.155 32.6354C158.196 32.6354 158.785 32.1932 159.142 31.0564L159.353 30.3824L155.366 19.3281H157.827L160.604 28.298H160.657L163.434 19.3281H165.832L161.698 30.9402C160.752 33.6038 159.668 34.4778 157.376 34.4778C157.197 34.4778 156.618 34.4565 156.461 34.4145Z' fill='white'/%3E%3C/svg%3E%0A",alt:""})},Ne=$(),De=$(),Le={name:"payment_request",content:React.createElement(qe,{stripe:De}),edit:React.createElement(Me,null),canMakePayment:function(e){return Ne.then((function(t){var n,r,o;return null!==t&&t.paymentRequest({total:{label:"Test total",amount:1e3},country:null===(n=Object(B.getSetting)("baseLocation",{}))||void 0===n?void 0:n.country,currency:null==e||null===(r=e.cartTotals)||void 0===r||null===(o=r.currency_code)||void 0===o?void 0:o.toLowerCase()}).canMakePayment().then((function(e){return!!e}))}))},paymentMethodId:"stripe"};Object(r.registerPaymentMethod)((function(e){return new e(Re)})),Object(r.registerExpressPaymentMethod)((function(e){return new e(Le)}))}]);