(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-personalization-model-details-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (doc, eZ) {
  var submodelSelect = doc.querySelector('.ez-submodel-select');
  var handleSubmodelChange = function handleSubmodelChange(event) {
    var _event$currentTarget = event.currentTarget,
      value = _event$currentTarget.value,
      parentNode = _event$currentTarget.parentNode;
    parentNode.querySelectorAll('.ez-submodel').forEach(function (node) {
      var method = node.classList.contains("ez-submodel--".concat(value)) ? 'remove' : 'add';
      node.classList[method]('d-none');
    });
  };
  if (submodelSelect) {
    submodelSelect.addEventListener('change', handleSubmodelChange, true);
  }
})(window.document, window.eZ);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.details.js"));
/******/ }
]);