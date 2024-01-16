(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-admin-ui-url-management-update-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js ***!
  \*******************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var checkboxes = doc.querySelectorAll('.ez-field-edit--ezboolean input');
  var toggleCheckbox = function toggleCheckbox(event) {
    var checkbox = event.target;
    checkbox.closest('.ez-data-source__label').classList.toggle('is-checked', checkbox.checked);
  };
  checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', toggleCheckbox, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.url.wildcards.update.js"));
/******/ }
]);