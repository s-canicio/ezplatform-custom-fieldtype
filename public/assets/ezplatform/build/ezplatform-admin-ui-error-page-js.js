(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-admin-ui-error-page-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js ***!
  \*********************************************************************************************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
(function (doc) {
  var notificationsContainer = doc.querySelector('.ez-notifications-container');
  var notifications = JSON.parse(notificationsContainer.dataset.notifications);
  var template = notificationsContainer.dataset.template;
  var escapeHTML = function escapeHTML(string) {
    var stringTempNode = doc.createElement('div');
    stringTempNode.appendChild(doc.createTextNode(string));
    return stringTempNode.innerHTML;
  };
  var addNotification = function addNotification(_ref) {
    var detail = _ref.detail;
    var label = detail.label,
      message = detail.message;
    var templateLabel = label === 'error' ? 'danger' : label;
    var container = doc.createElement('div');
    var finalMessage = escapeHTML(message);
    var notification = template.replace('{{ label }}', templateLabel).replace('{{ message }}', finalMessage).replace('{{ badge }}', label);
    container.insertAdjacentHTML('beforeend', notification);
    var notificationNode = container.querySelector('.alert');
    notificationsContainer.append(notificationNode);
  };
  Object.entries(notifications).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      messages = _ref3[1];
    messages.forEach(function (message) {
      return addNotification({
        detail: {
          label: label,
          message: message
        }
      });
    });
  });
})(window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js"));
/******/ }
]);