(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezcommerce-checkout-design-checkout-page-js"],{

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/checkout.page.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/checkout.page.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var checkout = new ibexa.eshop.widgets.CheckoutPage({
    getBasket: ibexa.eshop.helpers.basket.get
  });
  checkout.init();
  checkout.validateState();
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/design/checkout.page.js"));
/******/ }
]);