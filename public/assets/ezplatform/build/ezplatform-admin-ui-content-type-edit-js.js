(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-admin-ui-content-type-edit-js"],{

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ***!
  \****************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ez-card__body-display-toggler');
  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ez-card--toggle-group').classList.toggle('ez-card--collapsed');
  };
  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };
  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ez-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js ***!
  \************************************************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (global, doc, eZ, React, ReactDOM) {
  var SELECTOR_RESET_STARTING_LOCATION_BTN = '.ez-btn--reset-starting-location';
  var resetStartingLocationBtns = doc.querySelectorAll(SELECTOR_RESET_STARTING_LOCATION_BTN);
  var udwBtns = doc.querySelectorAll('.btn--udw-relation-default-location');
  var udwContainer = doc.getElementById('react-udw');
  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };
  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var locationId = items[0].id;
    var locationName = items[0].ContentInfo.Content.TranslatedName;
    var objectRelationListSettingsWrapper = btn.closest('.ezobjectrelationlist-settings');
    var objectRelationSettingsWrapper = btn.closest('.ezobjectrelation-settings');
    toggleResetStartingLocationBtn(btn.parentNode.querySelector(SELECTOR_RESET_STARTING_LOCATION_BTN), true);
    if (objectRelationListSettingsWrapper) {
      objectRelationListSettingsWrapper.querySelector(btn.dataset.relationRootInputSelector).value = locationId;
      objectRelationListSettingsWrapper.querySelector(btn.dataset.relationSelectedRootNameSelector).innerHTML = locationName;
    } else {
      objectRelationSettingsWrapper.querySelector(btn.dataset.relationRootInputSelector).value = locationId;
      objectRelationSettingsWrapper.querySelector(btn.dataset.relationSelectedRootNameSelector).innerHTML = locationName;
    }
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universaldiscoveryTitle,
      multiple: false
    }, config)), udwContainer);
  };
  var toggleResetStartingLocationBtn = function toggleResetStartingLocationBtn(button, isEnabled) {
    if (isEnabled) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', true);
    }
  };
  var resetStartingLocation = function resetStartingLocation(event) {
    var button = event.currentTarget;
    var _button$dataset = button.dataset,
      relationRootInputSelector = _button$dataset.relationRootInputSelector,
      relationSelectedRootNameSelector = _button$dataset.relationSelectedRootNameSelector;
    doc.querySelector(relationRootInputSelector).value = '';
    doc.querySelector(relationSelectedRootNameSelector).innerHTML = '';
    toggleResetStartingLocationBtn(button, false);
  };
  udwBtns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
  resetStartingLocationBtns.forEach(function (btn) {
    return btn.addEventListener('click', resetStartingLocation, false);
  });
})(window, window.document, window.eZ, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ***!
  \********************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_TEMPLATE = '.ezselection-settings-option-value-prototype';
  var SELECTOR_OPTION = '.ezselection-settings-option-value';
  var SELECTOR_OPTIONS_LIST = '.ezselection-settings-option-list';
  var SELECTOR_BTN_REMOVE = '.ezselection-settings-option-remove';
  var SELECTOR_BTN_ADD = '.ezselection-settings-option-add';
  var NUMBER_PLACEHOLDER = /__number__/g;
  doc.querySelectorAll('.ezselection-settings.options').forEach(function (container) {
    var findCheckedOptions = function findCheckedOptions() {
      return container.querySelectorAll('.ezselection-settings-option-checkbox:checked');
    };
    var toggleDisableState = function toggleDisableState() {
      var disabledState = !!findCheckedOptions().length;
      var methodName = disabledState ? 'removeAttribute' : 'setAttribute';
      container.querySelector(SELECTOR_BTN_REMOVE)[methodName]('disabled', disabledState);
    };
    var addOption = function addOption() {
      var template = container.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var optionsList = container.querySelector(SELECTOR_OPTIONS_LIST);
      var nextId = parseInt(optionsList.dataset.nextOptionId, 10);
      optionsList.dataset.nextOptionId = nextId + 1;
      optionsList.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, nextId));
    };
    var removeOptions = function removeOptions() {
      findCheckedOptions().forEach(function (element) {
        return element.closest(SELECTOR_OPTION).remove();
      });
      toggleDisableState();
    };
    container.querySelector(SELECTOR_OPTIONS_LIST).addEventListener('click', toggleDisableState, false);
    container.querySelector(SELECTOR_BTN_ADD).addEventListener('click', addOption, false);
    container.querySelector(SELECTOR_BTN_REMOVE).addEventListener('click', removeOptions, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js ***!
  \*************************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_SETTINGS_COLUMNS = '.ez-matrix-settings__columns';
  var SELECTOR_COLUMN = '.ez-matrix-settings__column';
  var SELECTOR_COLUMNS_CONTAINER = '.ez-table__body';
  var SELECTOR_COLUMN_CHECKBOX = '.ez-matrix-settings__column-checkbox';
  var SELECTOR_ADD_COLUMN = '.ez-btn--add-column';
  var SELECTOR_REMOVE_COLUMN = '.ez-btn--remove-column';
  var SELECTOR_TEMPLATE = '.ez-matrix-settings__column-template';
  var NUMBER_PLACEHOLDER = /__number__/g;
  if (!doc.querySelector(SELECTOR_SETTINGS_COLUMNS)) {
    return;
  }
  doc.querySelectorAll(SELECTOR_SETTINGS_COLUMNS).forEach(function (container) {
    var getNextIndex = function getNextIndex(parentNode) {
      return parentNode.dataset.nextIndex++;
    };
    var findCheckedColumns = function findCheckedColumns(parentNode) {
      return parentNode.querySelectorAll("".concat(SELECTOR_COLUMN_CHECKBOX, ":checked"));
    };
    var updateDisabledState = function updateDisabledState(parentNode) {
      var isEnabled = findCheckedColumns(parentNode).length > 0;
      var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
      parentNode.querySelectorAll(SELECTOR_REMOVE_COLUMN).forEach(function (btn) {
        return btn[methodName]('disabled', !isEnabled);
      });
    };
    var addItem = function addItem(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      var template = settingsNode.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var node = settingsNode.querySelector(SELECTOR_COLUMNS_CONTAINER);
      node.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, getNextIndex(node)));
      initColumns(settingsNode);
    };
    var removeItems = function removeItems(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      findCheckedColumns(settingsNode).forEach(function (btn) {
        return btn.closest(SELECTOR_COLUMN).remove();
      });
      initColumns(settingsNode);
    };
    var checkColumn = function checkColumn(event) {
      var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
      updateDisabledState(settingsNode);
    };
    var initColumns = function initColumns(parentNode) {
      updateDisabledState(parentNode);
      parentNode.querySelectorAll(SELECTOR_COLUMN_CHECKBOX).forEach(function (btn) {
        btn.removeEventListener('click', checkColumn, false);
        btn.addEventListener('click', checkColumn, false);
      });
    };
    container.querySelector(SELECTOR_ADD_COLUMN).addEventListener('click', addItem, false);
    container.querySelector(SELECTOR_REMOVE_COLUMN).addEventListener('click', removeItems, false);
    initColumns(container);
  });
})(window, document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js"), __webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js"), __webpack_exec__("./vendor/ezsystems/ezplatform-admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js"), __webpack_exec__("./vendor/ezsystems/ezplatform-matrix-fieldtype/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js"));
/******/ }
]);