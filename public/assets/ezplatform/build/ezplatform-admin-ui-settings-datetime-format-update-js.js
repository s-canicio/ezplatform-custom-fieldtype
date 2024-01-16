(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-admin-ui-settings-datetime-format-update-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js ***!
  \*****************************************************************************************************************************/
/***/ (() => {

(function (global, doc, moment) {
  var SELECTOR_DATE_FORMAT = '#user_setting_update_value_date_format';
  var SELECTOR_TIME_FORMAT = '#user_setting_update_value_time_format';
  var SELECTOR_VALUE_PREVIEW = '.ez-datetime-format-preview-value';
  var valuePreview = doc.querySelector(SELECTOR_VALUE_PREVIEW);
  var dateFormatSelect = doc.querySelector(SELECTOR_DATE_FORMAT);
  var timeFormatSelect = doc.querySelector(SELECTOR_TIME_FORMAT);
  var updateDateTimeFormatPreview = function updateDateTimeFormatPreview() {
    valuePreview.innerHTML = moment().formatICU("".concat(dateFormatSelect.value, " ").concat(timeFormatSelect.value));
  };
  dateFormatSelect.addEventListener('change', updateDateTimeFormatPreview);
  timeFormatSelect.addEventListener('change', updateDateTimeFormatPreview);
  updateDateTimeFormatPreview();
})(window, window.document, window.moment);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.settings.datetimeformat.update.js"));
/******/ }
]);