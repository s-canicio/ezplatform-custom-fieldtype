(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezplatform-personalization-model-edit-js"],{

/***/ "./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (doc, Routing, eZ, Translator, React, ReactDOM) {
  var draggedItem = null;
  var dragItemSourceContainer = null;
  var submodelSelectedKey = '';
  var submodelSelectedType = '';
  var submodelAttributeSource = null;
  var submodelSource = null;
  var submodelSelectedContainer = '';
  var getJsonFromResponse = eZ.helpers.request.getJsonFromResponse;
  var submodelTypeSelectNode = doc.querySelector('.ez-submodel-select');
  var emptyTagTemplateNode = doc.querySelector('.ez-submodel-empty-tag-template');
  var udwContainer = doc.getElementById('react-udw');
  var openUdwButton = doc.querySelector('.ez-btn--add-items-udw');
  var NOMINAL_TYPE = 'NOMINAL';
  var CLASS_EMPTY_TAG = 'ez-submodel__item--empty';
  var SELECTOR_SAVE_BUTTON = '.ez-btn--save';
  var SELECTOR_SAVE_AND_CLOSE_BUTTON = '.ez-btn--save-close';
  var SELECTOR_SUBMODEL = '.ez-submodel';
  var SELECTOR_ITEM = '.ez-submodel__item';
  var SELECTOR_ITEMS_CONTAINER = '.ez-submodel__items';
  var SELECTOR_EDITORIAL_ITEMS_CONTAINER = '.ez-editorial-models__items';
  var SELECTOR_EDITORIAL_ITEM = '.ez-editorial-models__item';
  var SELECTOR_EXISTING_GROUPS = '.ez-submodel__existing-groups';
  var SELECTOR_AVAILABLE_ITEMS = '.ez-submodel__available-items';
  var SELECTOR_ADD_GROUP_BUTTON = '.ez-submodel__add-group-button';
  var SELECTOR_REMOVE_GROUP_BUTTON = '.ez-submodel__remove-group-button';
  var SELECTOR_ADD_RANGE_BUTTON = '.ez-submodel__add-range-button';
  var SELECTOR_REMOVE_RANGE_BUTTON = '.ez-submodel__remove-range-button';
  var SELECTOR_REMOVE_GROUP_ITEM_BUTTON = '.ez-tag__remove-btn';
  var SELECTOR_ITEM_EMPTY_TEMPLATE = '.ez-submodel__item-template';
  var SELECTOR_GROUP_EMPTY_TEMPLATE = '.ez-submodel__group-template';
  var submodelTypeChange = function submodelTypeChange(event) {
    var parentNode = event.currentTarget.parentNode;
    setSubmodelData();
    parentNode.querySelectorAll(SELECTOR_SUBMODEL).forEach(function (node) {
      var method = node.classList.contains("ez-submodel--".concat(submodelSelectedKey)) ? 'remove' : 'add';
      node.classList[method]('d-none');
      if (method === 'remove' && submodelSelectedType === NOMINAL_TYPE) {
        fetchSubmodelAvailableItems();
      }
    });
  };
  var fetchSubmodelAvailableItems = function fetchSubmodelAvailableItems() {
    var submodelAvailableItemsNode = submodelSelectedContainer.querySelector(SELECTOR_AVAILABLE_ITEMS);
    var submodelAvailableItemsInnerContainer = submodelAvailableItemsNode.querySelector(SELECTOR_ITEMS_CONTAINER);
    var url = Routing.generate('ibexa.personalization.model.attribute', {
      attributeKey: submodelSelectedKey,
      attributeType: submodelSelectedType,
      attributeSource: submodelAttributeSource,
      source: submodelSource
    });
    var request = new Request(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      }
    });
    if (submodelAvailableItemsInnerContainer.children.length === 0) {
      fetch(request).then(getJsonFromResponse).then(function (response) {
        var template = emptyTagTemplateNode.dataset.template;
        var fragment = doc.createDocumentFragment();
        response.forEach(function (item) {
          var container = doc.createElement('div');
          container.insertAdjacentHTML('beforeend', template.replaceAll('{{ name }}', item));
          fragment.append(container.querySelector(SELECTOR_ITEM));
        });
        submodelAvailableItemsInnerContainer.append(fragment);
      })["catch"](eZ.helpers.notification.showErrorNotification);
    }
  };
  var updateGroupContainer = function updateGroupContainer(event) {
    var deleteEmptyGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var groupNumber = 1;
    var groupsContainer = submodelSelectedContainer.querySelector(SELECTOR_EXISTING_GROUPS);
    var _submodelSelectedCont = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset,
      inputIdPattern = _submodelSelectedCont.inputIdPattern,
      inputNamePattern = _submodelSelectedCont.inputNamePattern;
    groupsContainer.querySelectorAll(SELECTOR_ITEMS_CONTAINER).forEach(function (container) {
      var items = container.querySelectorAll(SELECTOR_ITEM);
      if (deleteEmptyGroup && items.length === 0) {
        container.remove();
      } else {
        container.dataset.key = submodelSelectedKey;
        container.dataset.groupNumber = groupNumber;
        container.dataset.numberOfItems = items.length;
        items.forEach(function (item, itemIndex) {
          var input = item.querySelector('input');
          input.id = inputIdPattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
          input.name = inputNamePattern.replace('__name__', groupNumber).replace('__name__', itemIndex);
        });
        groupNumber++;
      }
    });
  };
  var updateEditorialContainer = function updateEditorialContainer() {
    var method = doc.querySelectorAll(SELECTOR_EDITORIAL_ITEM).length ? 'add' : 'remove';
    var noItemsMessageNode = doc.querySelector('.ez-editorial-models__no-items');
    noItemsMessageNode.classList[method]('d-none');
  };
  var dragStart = function dragStart(event) {
    draggedItem = event.target;
    dragItemSourceContainer = event.currentTarget;
  };
  var dropItem = function dropItem(event) {
    event.stopPropagation();
    if (event.currentTarget.isSameNode(dragItemSourceContainer)) {
      return;
    }
    draggedItem.parentNode.removeChild(draggedItem);
    if (draggedItem.classList.contains(CLASS_EMPTY_TAG)) {
      var value = draggedItem.dataset.value;
      var template = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset.template;
      event.currentTarget.insertAdjacentHTML('beforeend', template.replace('__name__', value));
      event.currentTarget.querySelector("".concat(SELECTOR_ITEM, ":last-child input")).setAttribute('value', value);
      event.currentTarget.querySelector("".concat(SELECTOR_ITEM, ":last-child ").concat(SELECTOR_REMOVE_GROUP_ITEM_BUTTON)).addEventListener('click', removeGroupItem);
    } else {
      event.currentTarget.appendChild(draggedItem);
    }
    updateGroupContainer(event, true);
  };
  var attachGroupEvents = function attachGroupEvents(container) {
    var removeButton = container.querySelector(SELECTOR_REMOVE_GROUP_BUTTON);
    container.addEventListener('dragstart', dragStart);
    container.addEventListener('drop', dropItem);
    container.addEventListener('dragover', function (event) {
      return event.preventDefault();
    });
    if (removeButton) {
      removeButton.addEventListener('click', removeGroup);
    }
  };
  var addGroup = function addGroup(event) {
    event.preventDefault();
    var existingGroupsContainer = event.currentTarget.closest(SELECTOR_EXISTING_GROUPS);
    var template = submodelSelectedContainer.querySelector(SELECTOR_GROUP_EMPTY_TEMPLATE).dataset.template;
    existingGroupsContainer.insertAdjacentHTML('beforeend', template);
    attachGroupEvents(existingGroupsContainer.querySelector("".concat(SELECTOR_ITEMS_CONTAINER, ":last-child")));
    updateGroupContainer(event);
  };
  var removeGroup = function removeGroup(event) {
    event.preventDefault();
    var container = event.currentTarget.closest(SELECTOR_ITEMS_CONTAINER);
    container.querySelectorAll(SELECTOR_ITEM).forEach(function (item) {
      item.remove();
    });
    updateGroupContainer(event, true);
  };
  var removeGroupItem = function removeGroupItem(event) {
    event.preventDefault();
    var itemsType = event.currentTarget.dataset.itemsType;
    var itemSelector = itemsType === 'editorial' ? SELECTOR_EDITORIAL_ITEM : SELECTOR_ITEM;
    var item = event.currentTarget.closest(itemSelector);
    if (item) {
      item.remove();
    }
    if (itemsType === 'editorial') {
      updateEditorialContainer();
    } else {
      updateGroupContainer(event, true);
    }
  };
  var addRange = function addRange(event) {
    event.preventDefault();
    var numberOfItems = submodelSelectedContainer.querySelectorAll(SELECTOR_ITEM).length;
    var template = submodelSelectedContainer.querySelector(SELECTOR_ITEM_EMPTY_TEMPLATE).dataset.template;
    submodelSelectedContainer.querySelector(SELECTOR_ITEMS_CONTAINER).insertAdjacentHTML('beforeend', template.replaceAll('__name__', numberOfItems));
    var lastRangeRemoveButton = submodelSelectedContainer.querySelector("".concat(SELECTOR_ITEM, ":last-child ").concat(SELECTOR_REMOVE_RANGE_BUTTON));
    if (lastRangeRemoveButton) {
      lastRangeRemoveButton.addEventListener('click', removeRange);
    }
  };
  var removeRange = function removeRange(event) {
    event.preventDefault();
    var nodeToRemove = event.currentTarget.closest(SELECTOR_ITEM);
    if (nodeToRemove) {
      nodeToRemove.remove();
    }
  };
  var setSubmodelData = function setSubmodelData() {
    var option = doc.querySelector("option[value=\"".concat(submodelTypeSelectNode.value, "\"]"));
    var _option$dataset = option.dataset,
      type = _option$dataset.type,
      attributeSource = _option$dataset.attributeSource,
      source = _option$dataset.source;
    submodelSelectedContainer = doc.querySelector(".ez-submodel--".concat(option.value));
    submodelSelectedKey = option.value;
    submodelSelectedType = type;
    submodelAttributeSource = attributeSource;
    submodelSource = source;
  };
  var onConfirm = function onConfirm(event, items) {
    closeUDW();
    var editorialModelsContainer = doc.querySelector(SELECTOR_EDITORIAL_ITEMS_CONTAINER);
    var template = editorialModelsContainer.dataset.template;
    items.forEach(function (item) {
      var tagIndex = 0;
      var contentName = eZ.helpers.text.escapeHTML(item.ContentInfo.Content.Name);
      var contentId = item.ContentInfo.Content._id;
      var contentRemoteId = item.ContentInfo.Content._remoteId;
      var contentTypeId = item.ContentInfo.Content.ContentTypeInfo.id;
      var alreadySelectedItem = doc.querySelector(".ez-editorial-models__input--id[value=\"".concat(contentId, "\"]"));
      var lastItemNode = editorialModelsContainer.querySelector("".concat(SELECTOR_EDITORIAL_ITEM, ":last-child"));
      if (!alreadySelectedItem) {
        if (lastItemNode) {
          var input = lastItemNode.querySelector('.ez-editorial-models__input--id');
          tagIndex = parseInt(input.name.replace(/[^0-9]/g, ''), 10) + 1;
        }
        editorialModelsContainer.insertAdjacentHTML('beforeend', template.replace('__label_name__', contentName).replaceAll('__name__', tagIndex));
        var lastItemNodeAfterInsert = editorialModelsContainer.querySelector("".concat(SELECTOR_EDITORIAL_ITEM, ":last-child"));
        lastItemNodeAfterInsert.querySelector('.ez-editorial-models__input--id').value = contentId;
        lastItemNodeAfterInsert.querySelector('.ez-editorial-models__input--remote-id').value = contentRemoteId;
        lastItemNodeAfterInsert.querySelector('.ez-editorial-models__input--type').value = contentTypeId;
        lastItemNodeAfterInsert.querySelector(SELECTOR_REMOVE_GROUP_ITEM_BUTTON).addEventListener('click', removeGroupItem, false);
      }
    });
    updateEditorialContainer();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var closeUDW = function closeUDW() {
    return ReactDOM.unmountComponentAtNode(udwContainer);
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans( /*@Desc("Select items")*/'models.udw_title', {}, 'ibexa_personalization');
    ReactDOM.render(React.createElement(eZ.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: title
    }, config)), udwContainer);
  };
  if (submodelTypeSelectNode) {
    setSubmodelData();
    if (submodelSelectedType === NOMINAL_TYPE) {
      fetchSubmodelAvailableItems();
    }
    submodelTypeSelectNode.addEventListener('change', submodelTypeChange, true);
  }
  if (openUdwButton) {
    openUdwButton.addEventListener('click', openUDW, false);
  }
  doc.querySelectorAll(SELECTOR_ADD_GROUP_BUTTON).forEach(function (button) {
    button.addEventListener('click', addGroup);
  });
  doc.querySelectorAll(SELECTOR_ADD_RANGE_BUTTON).forEach(function (button) {
    button.addEventListener('click', addRange);
  });
  doc.querySelectorAll(SELECTOR_REMOVE_RANGE_BUTTON).forEach(function (button) {
    button.addEventListener('click', removeRange);
  });
  doc.querySelectorAll(SELECTOR_REMOVE_GROUP_ITEM_BUTTON).forEach(function (button) {
    button.addEventListener('click', removeGroupItem);
  });
  doc.querySelectorAll(SELECTOR_ITEMS_CONTAINER).forEach(function (container) {
    attachGroupEvents(container);
  });
  doc.querySelector(SELECTOR_SAVE_BUTTON).addEventListener('click', function () {
    doc.querySelector('#model_save').click();
  });
  doc.querySelector(SELECTOR_SAVE_AND_CLOSE_BUTTON).addEventListener('click', function () {
    doc.querySelector('#model_save_and_close').click();
  });
})(window.document, window.Routing, window.eZ, window.Translator, window.React, window.ReactDOM);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezplatform-personalization/src/bundle/Resources/public/js/model.edit.js"));
/******/ }
]);