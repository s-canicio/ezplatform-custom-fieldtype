(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-admin-ui-login-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \**********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var passwordInputNode = doc.querySelector('.ez-login__input--password');
  var viewIconNode = doc.querySelector('.ez-login__password-visibility-toggler .ez-icon--view');
  var viewHideIconNode = doc.querySelector('.ez-login__password-visibility-toggler .ez-icon--view-hide');
  doc.querySelector('.ez-login__password-visibility-toggler').addEventListener('click', function (event) {
    if (passwordInputNode) {
      var inputTypeToSet = passwordInputNode.type === 'password' ? 'text' : 'password';
      passwordInputNode.type = inputTypeToSet;
      viewIconNode.classList.toggle('d-none');
      viewHideIconNode.classList.toggle('d-none');
    }
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/login.js"));
/******/ }
]);