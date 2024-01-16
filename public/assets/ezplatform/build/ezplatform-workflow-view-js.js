(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-workflow-view-js"],{

/***/ "./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js":
/*!***************************************************************************!*\
  !*** ./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js ***!
  \***************************************************************************/
/***/ (() => {

(function (global, doc, $) {
  $(".ez-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]")).tab('show');

  // Change hash for page-reload
  $('.ez-tabs a').on('shown.bs.tab', function (event) {
    global.location.hash = "".concat(event.target.hash, "#tab");
  });
})(window, window.document, window.jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ezplatformadminui/js/scripts/admin.location.tab.js"));
/******/ }
]);