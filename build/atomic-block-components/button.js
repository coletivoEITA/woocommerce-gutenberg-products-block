(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[8],{528:function(t,c,e){"use strict";e.r(c);var o=e(10),n=e.n(o),a=e(8),r=e.n(a),u=e(0),d=(e(2),e(7)),b=e.n(d),l=e(1),i=e(834),s=e(33),p=e(529),_=e(44),k=e(72),j=(e(549),function(t){var c=t.product,e=Object(u.useRef)(!0),o=c.id,a=c.permalink,r=c.add_to_cart,d=c.has_options,_=c.is_purchasable,k=c.is_in_stock,j=Object(i.a)(o),w=j.cartQuantity,O=j.addingToCart,m=j.addToCart;Object(u.useEffect)((function(){e.current?e.current=!1:Object(p.c)()}),[w]);var f=Number.isFinite(w)&&w>0,E=!d&&_&&k,v=Object(s.decodeEntities)((null==r?void 0:r.description)||""),C=f?Object(l.sprintf)(Object(l._n)("%d in cart","%d in cart",w,"woo-gutenberg-products-block"),w):Object(s.decodeEntities)((null==r?void 0:r.text)||Object(l.__)("Add to cart","woo-gutenberg-products-block")),g=E?"button":"a",h={};return E?h.onClick=function(){m()}:(h.href=a,h.rel="nofollow"),Object(u.createElement)(g,n()({"aria-label":v,className:b()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button",{loading:O,added:f}),disabled:O},h),C)}),w=function(){return Object(u.createElement)("button",{className:b()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder"),disabled:!0})};c.default=Object(k.withProductDataContext)((function(t){var c=t.className,e=Object(_.useInnerBlockLayoutContext)().parentClassName,o=Object(_.useProductDataContext)().product;return Object(u.createElement)("div",{className:b()(c,"wp-block-button","wc-block-components-product-button",r()({},"".concat(e,"__product-add-to-cart"),e))},o.id?Object(u.createElement)(j,{product:o}):Object(u.createElement)(w,null))}))},549:function(t,c){}}]);