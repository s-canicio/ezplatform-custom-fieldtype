(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-personalization-scenarios-list-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js ***!
  \******************************************************************************************************/
/***/ (() => {

(function (doc, eZ) {
  var scenarioForm = doc.querySelector('.ez-scenario-form');
  var periodSelect = doc.querySelector('.ez-scenario-form__period');
  if (periodSelect) {
    periodSelect.addEventListener('change', function () {
      var dateIntervalInput = scenarioForm.querySelector('input[name="scenario-form[period][date_interval]"]');
      dateIntervalInput.value = event.currentTarget.value;
      scenarioForm.submit();
    }, false);
  }
})(window.document, window.eZ);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/scenarios.list.js"));
/******/ }
]);