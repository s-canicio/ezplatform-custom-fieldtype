(self["webpackChunk"] = self["webpackChunk"] || []).push([["ezcommerce-shop-core-basket-widget-js"],{

/***/ "./public/bundles/ezplatformadminuiassets/vendors/js-md5/build/md5.min.js":
/*!********************************************************************************!*\
  !*** ./public/bundles/ezplatformadminuiassets/vendors/js-md5/build/md5.min.js ***!
  \********************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function () {
  "use strict";

  function t(t) {
    if (t) d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = l;else if (a) {
      var r = new ArrayBuffer(68);
      this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r);
    } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
  }
  var r = "input is invalid type",
    e = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)),
    i = e ? window : {};
  i.JS_MD5_NO_WINDOW && (e = !1);
  var s = !e && "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)),
    h = !i.JS_MD5_NO_NODE_JS && "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
  h ? i = __webpack_require__.g : s && (i = self);
  var f = !i.JS_MD5_NO_COMMON_JS && "object" == ( false ? 0 : _typeof(module)) && module.exports,
    o =  true && __webpack_require__.amdO,
    a = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
    n = "0123456789abcdef".split(""),
    u = [128, 32768, 8388608, -2147483648],
    y = [0, 8, 16, 24],
    c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
    p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    d = [],
    l;
  if (a) {
    var A = new ArrayBuffer(68);
    l = new Uint8Array(A), d = new Uint32Array(A);
  }
  !i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }), !a || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
    return "object" == _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer;
  });
  var b = function b(r) {
      return function (e) {
        return new t(!0).update(e)[r]();
      };
    },
    v = function v() {
      var r = b("hex");
      h && (r = w(r)), r.create = function () {
        return new t();
      }, r.update = function (t) {
        return r.create().update(t);
      };
      for (var e = 0; e < c.length; ++e) {
        var i = c[e];
        r[i] = b(i);
      }
      return r;
    },
    w = function w(t) {
      var e = eval("require('crypto')"),
        i = eval("require('buffer').Buffer"),
        s = function s(_s) {
          if ("string" == typeof _s) return e.createHash("md5").update(_s, "utf8").digest("hex");
          if (null === _s || void 0 === _s) throw r;
          return _s.constructor === ArrayBuffer && (_s = new Uint8Array(_s)), Array.isArray(_s) || ArrayBuffer.isView(_s) || _s.constructor === i ? e.createHash("md5").update(new i(_s)).digest("hex") : t(_s);
        };
      return s;
    };
  t.prototype.update = function (t) {
    if (!this.finalized) {
      var e,
        i = _typeof(t);
      if ("string" !== i) {
        if ("object" !== i) throw r;
        if (null === t) throw r;
        if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || a && ArrayBuffer.isView(t))) throw r;
        e = !0;
      }
      for (var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8; f < o;) {
        if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), e) {
          if (a) for (h = this.start; f < o && h < 64; ++f) u[h++] = t[f];else for (h = this.start; f < o && h < 64; ++f) n[h >> 2] |= t[f] << y[3 & h++];
        } else if (a) for (h = this.start; f < o && h < 64; ++f) (s = t.charCodeAt(f)) < 128 ? u[h++] = s : s < 2048 ? (u[h++] = 192 | s >> 6, u[h++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (u[h++] = 224 | s >> 12, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), u[h++] = 240 | s >> 18, u[h++] = 128 | s >> 12 & 63, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s);else for (h = this.start; f < o && h < 64; ++f) (s = t.charCodeAt(f)) < 128 ? n[h >> 2] |= s << y[3 & h++] : s < 2048 ? (n[h >> 2] |= (192 | s >> 6) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : s < 55296 || s >= 57344 ? (n[h >> 2] |= (224 | s >> 12) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), n[h >> 2] |= (240 | s >> 18) << y[3 & h++], n[h >> 2] |= (128 | s >> 12 & 63) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]);
        this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }
  }, t.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = !0;
      var t = this.blocks,
        r = this.lastByteIndex;
      t[r >> 2] |= u[3 & r], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
    }
  }, t.prototype.hash = function () {
    var t,
      r,
      e,
      i,
      s,
      h,
      f = this.blocks;
    this.first ? r = ((r = ((t = ((t = f[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + f[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + f[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0, r = this.h1, e = this.h2, r = ((r += ((t = ((t += ((i = this.h3) ^ r & (e ^ i)) + f[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1044525330) << 22 | r >>> 10) + e << 0), r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[7] - 45705983) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[11] - 1990404162) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[15] + 1236535329) << 22 | r >>> 10) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + f[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + f[0] - 373897302) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + f[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + f[4] - 405537848) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + f[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + f[8] + 1163531501) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + f[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + f[12] - 1926607734) << 20 | r >>> 12) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[5] - 378558) << 4 | t >>> 28) + r << 0)) + f[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + f[14] - 35309556) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + f[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[7] - 155497632) << 16 | e >>> 16) + i << 0)) + f[10] - 1094730640) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[13] + 681279174) << 4 | t >>> 28) + r << 0)) + f[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[3] - 722521979) << 16 | e >>> 16) + i << 0)) + f[6] + 76029189) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[9] - 640364487) << 4 | t >>> 28) + r << 0)) + f[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[15] + 530742520) << 16 | e >>> 16) + i << 0)) + f[2] - 995338651) << 23 | r >>> 9) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + f[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + f[5] - 57434055) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + f[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + f[1] - 2054922799) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + f[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + f[13] + 1309151649) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + f[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + f[9] - 343485551) << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + i << 0);
  }, t.prototype.hex = function () {
    this.finalize();
    var t = this.h0,
      r = this.h1,
      e = this.h2,
      i = this.h3;
    return n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15] + n[r >> 4 & 15] + n[15 & r] + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 20 & 15] + n[r >> 16 & 15] + n[r >> 28 & 15] + n[r >> 24 & 15] + n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15] + n[i >> 4 & 15] + n[15 & i] + n[i >> 12 & 15] + n[i >> 8 & 15] + n[i >> 20 & 15] + n[i >> 16 & 15] + n[i >> 28 & 15] + n[i >> 24 & 15];
  }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {
    this.finalize();
    var t = this.h0,
      r = this.h1,
      e = this.h2,
      i = this.h3;
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];
  }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {
    this.finalize();
    var t = new ArrayBuffer(16),
      r = new Uint32Array(t);
    return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t;
  }, t.prototype.buffer = t.prototype.arrayBuffer, t.prototype.base64 = function () {
    for (var t, r, e, i = "", s = this.array(), h = 0; h < 15;) t = s[h++], r = s[h++], e = s[h++], i += p[t >>> 2] + p[63 & (t << 4 | r >>> 4)] + p[63 & (r << 2 | e >>> 6)] + p[63 & e];
    return t = s[h], i += p[t >>> 2] + p[t << 4 & 63] + "==";
  };
  var _ = v();
  f ? module.exports = _ : (i.md5 = _, o && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return _;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
}();

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.helpers.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.helpers.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js");
/* harmony import */ var _helpers_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/cookies */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/cookies.js");


(function (global, doc, ibexa) {
  var basketNode = doc.querySelector('.ezcommerce-basket-widget');
  var siteaccess = basketNode.dataset.siteaccess;
  var getRequest = function getRequest(url) {
    return new Request(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Siteaccess': siteaccess
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
  };
  var transformRequest = function transformRequest(response) {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  };
  var getBasket = function getBasket() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var request = getRequest("/api/session/basket");
    return fetch(request).then(transformRequest).then(function (response) {
      doc.body.dispatchEvent(new CustomEvent('ibexa-basket:update-basket', {
        detail: response
      }));
      return response;
    });
  };
  (0,_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.helpers.basket.get', getBasket);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.widget.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.widget.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(function (global, doc) {
  var BasketWidget = /*#__PURE__*/function () {
    function BasketWidget() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BasketWidget);
      this.afterUpdate = config.afterUpdate ? config.afterUpdate.bind(this) : function () {};
      this.container = config.container;
      if (!this.container) {
        console.error('No container delivered for BasketWidget!');
        return;
      }
      this.setElements();
    }
    _createClass(BasketWidget, [{
      key: "setElements",
      value: function setElements() {
        this.basketElement = this.container.classList.contains('ezcommerce-js--basket-widget') ? this.container : this.container.querySelector('.ezcommerce-js--basket-widget');
        this.basketValueElement = this.basketElement.querySelector('.ezcommerce-js--basket-value');
        this.basketCounterElement = this.basketElement.querySelector('.ezcommerce-js--basket-counter');
        this.basketTotalElement = this.basketElement.querySelector('.ezcommerce-js--basket-total');
        this.basketProductsElement = this.basketElement.querySelector('.ezcommerce-js--basket-products');
        this.basketShippingElement = this.basketElement.querySelector('.ezcommerce-js--basket-shipping');
        this.basketAdditionalElement = this.basketElement.querySelector('.ezcommerce-js--basket-additional');
        this.basketDiscountsElement = this.basketElement.querySelector('.ezcommerce-js--basket-discounts');
      }
    }, {
      key: "updateTotal",
      value: function updateTotal(value) {
        if (parseInt(this.basketElement.dataset.productsInBasket, 10) === 0) {
          this.basketValueElement.innerHTML = '';
          this.basketTotalElement.innerHTML = '';
          return;
        }
        this.basketValueElement.innerHTML = value;
        this.basketTotalElement.innerHTML = value;
      }
    }, {
      key: "updateCounter",
      value: function updateCounter(value) {
        this.basketElement.dataset.productsInBasket = value;
        this.basketCounterElement.innerHTML = value;
      }
    }, {
      key: "fillRowData",
      value: function fillRowData(container, row) {
        var basketNameNode = container.querySelector('.ezcommerce-js--basket-name');
        container.querySelector('.ezcommerce-js--basket-row').dataset.id = row.sku;
        if (basketNameNode.tagName.toLowerCase() === 'a' && row.seoUrl) {
          basketNameNode.href = row.seoUrl;
        }
        var rowQuantity = row.quantity > 1 ? "".concat(row.quantity, "x ") : '';
        var rowVariantCode = row.variantCode ? " (".concat(row.variantCode, ")") : '';
        basketNameNode.innerHTML = "".concat(rowQuantity).concat(row.name).concat(rowVariantCode);
        container.querySelector('.ezcommerce-js--basket-price').innerHTML = row.price;
      }
    }, {
      key: "updateCategory",
      value: function updateCategory(rows, container) {
        var _this = this;
        var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        if (!container) {
          return;
        }
        if (clear) {
          container.innerHTML = '';
        }
        var tagName = container.tagName;
        var fragment = doc.createDocumentFragment();
        rows.forEach(function (row) {
          var containerRow = doc.createElement(tagName);
          var renderedItem = container.dataset.template;
          containerRow.insertAdjacentHTML('beforeend', renderedItem);
          _this.fillRowData(containerRow, row);
          var rowNode = containerRow.firstChild;
          fragment.append(rowNode);
        });
        container.append(fragment);
      }
    }, {
      key: "updateBasket",
      value: function updateBasket(event) {
        var basketData = event.detail.basketData;
        var totalPriceFormatted = basketData.totalPriceFormatted,
          products = basketData.products,
          shippingCosts = basketData.shippingCosts,
          additionalCosts = basketData.additionalCosts,
          discounts = basketData.discounts;
        this.updateCounter(products.length);
        this.updateTotal(totalPriceFormatted);
        this.updateCategory(products, this.basketProductsElement);
        this.updateCategory(shippingCosts, this.basketShippingElement);
        this.updateCategory(additionalCosts, this.basketAdditionalElement);
        this.updateCategory(discounts, this.basketDiscountsElement);
        this.afterUpdate(event.detail);
      }
    }, {
      key: "bindBasketEvents",
      value: function bindBasketEvents() {
        doc.body.addEventListener('ibexa-basket:update-basket', this.updateBasket.bind(this), false);
      }
    }, {
      key: "init",
      value: function init() {
        this.bindBasketEvents();
      }
    }, {
      key: "reinit",
      value: function reinit() {
        this.setElements();
      }
    }]);
    return BasketWidget;
  }();
  (0,_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.widgets.BasketWidget', BasketWidget);
})(window, window.document);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/md5.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/md5.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/addConfig */ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js");
/* harmony import */ var _public_bundles_ezplatformadminuiassets_vendors_js_md5_build_md5_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../public/bundles/ezplatformadminuiassets/vendors/js-md5/build/md5.min.js */ "./public/bundles/ezplatformadminuiassets/vendors/js-md5/build/md5.min.js");
/* harmony import */ var _public_bundles_ezplatformadminuiassets_vendors_js_md5_build_md5_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_bundles_ezplatformadminuiassets_vendors_js_md5_build_md5_min_js__WEBPACK_IMPORTED_MODULE_1__);


(function (global) {
  (0,_helpers_addConfig__WEBPACK_IMPORTED_MODULE_0__["default"])('eshop.helpers.md5', (_public_bundles_ezplatformadminuiassets_vendors_js_md5_build_md5_min_js__WEBPACK_IMPORTED_MODULE_1___default()));
})(window);

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/addConfig.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (path, value) {
  var keys = path.split('.');
  var lastIndex = keys.length - 1;
  window.ibexa = window.ibexa || {};
  keys.reduce(function (currentObject, key, index) {
    if (index === lastIndex) {
      currentObject[key] = value;
      return;
    }
    if (currentObject[key] === undefined) {
      currentObject[key] = {};
    }
    return currentObject[key];
  }, window.ibexa);
});

/***/ }),

/***/ "./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/cookies.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/helpers/cookies.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie)
/* harmony export */ });
var getCookie = function getCookie(name, ignoreHashName) {
  var decodedCookie = decodeURIComponent(document.cookie) + ';';
  var cookieRegex = new RegExp("".concat(name).concat(ignoreHashName ? '.*?' : '', "=(.*?);"));
  var result = cookieRegex.exec(decodedCookie);
  return result ? result[1] : '';
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/md5.js"), __webpack_exec__("./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.helpers.js"), __webpack_exec__("./vendor/ezsystems/ezcommerce-checkout/src/bundle/Resources/public/js/core/basket.widget.js"));
/******/ }
]);