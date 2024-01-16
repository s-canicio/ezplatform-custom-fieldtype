(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezcommerce-shop-design-basket-widget-js"],{

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/basket.widget.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/basket.widget.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var basket = new ibexa.eshop.widgets.BasketWidget({
    container: doc.querySelector('.ezcommerce-basket-widget')
  });
  basket.init();
  ibexa.eshop.helpers.basket.get();
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/basket.widget.js"));
/******/ }
]);