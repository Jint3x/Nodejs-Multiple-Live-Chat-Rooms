webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/create.js":
/*!******************************!*\
  !*** ./components/create.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Create() {
  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    placeholder: "Enter a chat room to join"
  }), __jsx("button", null, "Create")));
}

_c = Create;
/* harmony default export */ __webpack_exports__["default"] = (Create);

var _c;

$RefreshReg$(_c, "Create");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/join.js":
/*!****************************!*\
  !*** ./components/join.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // Create the ChatRoom

function Join() {
  _s();

  var _useState = useState(""),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      link = _useState2[0],
      setLink = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      test = _useState4[0],
      setTest = _useState4[1];

  function redirect() {
    if (link === "") {
      return;
    }

    if (link.includes(" ")) {
      return;
    }

    location.assign("/chat/".concat(link));
  }

  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.join
  }, __jsx("h1", null, "Join a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.roomj
  }, __jsx("input", {
    value: link,
    onChange: function onChange(e) {
      return setLink(e.target.value);
    },
    placeholder: "Enter a chat room to join"
  }), __jsx("button", {
    onClick: redirect
  }, "Join")));
}

_s(Join, "6gsisGBIfdXEF0u9kB9IKNMMQxY=");

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

var _c;

$RefreshReg$(_c, "Join");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/homepage.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/homepage.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#homepage_welcome__3uU06 {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#homepage_chat__yf5Wx, #homepage_wc__2kZkv, #homepage_to__1ptRZ {\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv {\r\n    animation-name: homepage_left__3xBF2;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_chat__yf5Wx {\r\n    animation-name: homepage_right__K04BT;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_to__1ptRZ {\r\n    animation-name: homepage_top__UFxG1;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#homepage_redirect__1dOEr {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 60%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n#homepage_redirect__1dOEr>h1 {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n\r\n}\r\n\r\n#homepage_redirect__1dOEr>h1:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n\r\n    transition: color 0.5s, background-color 0.5s, text-shadow 0.5s;\r\n\r\n    \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n#homepage_join__Py6xZ {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n\r\n}\r\n\r\n#homepage_join__Py6xZ>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#homepage_roomj__WJaIv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomj__WJaIv>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomj__WJaIv>button {\r\n    height: 40px;\r\n    width: 100px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n#homepage_create__3loQB {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n#homepage_create__3loQB>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#homepage_roomc__2Yips {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomc__2Yips>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomc__2Yips>button {\r\n    height: 40px;\r\n    width: 140px;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes homepage_fade__3ILGj {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes homepage_left__3xBF2 {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes homepage_right__K04BT {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes homepage_top__UFxG1 {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/homepage.module.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,6JAA6J;IAC7J,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,sBAAsB;IACtB,qBAAqB;;AAEzB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;;IAExB;iBACa;AACjB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,qCAAqB;IACrB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,mCAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI;mBACe;IACf,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,UAAU;IACV;;AAEJ;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,cAAc;IACd,UAAU;;IAEV,oCAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;;AAEjC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB;iBACa;;IAEb,+DAA+D;;;AAGnE;;AAEA;;CAEC;;AAED;IACI,WAAW;IACX,eAAe;;AAEnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;;CAEC;;;AAGD;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;AAGA;;CAEC;;AAED;IACI,MAAM,UAAU;IAChB,IAAI,UAAU,CAAC;AACnB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,OAAO;AACf;;AAEA;IACI,MAAM,YAAY;IAClB,IAAI,QAAQ,CAAC;AACjB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,MAAM;AACd","file":"homepage.module.css","sourcesContent":["\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#welcome {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#wc, #to, #chat {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#chat, #wc, #to {\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#wc {\r\n    animation-name: left;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#chat {\r\n    animation-name: right;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#to {\r\n    animation-name: top;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#redirect {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 60%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n#redirect>h1 {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: fade;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n\r\n}\r\n\r\n#redirect>h1:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n\r\n    transition: color 0.5s, background-color 0.5s, text-shadow 0.5s;\r\n\r\n    \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n#join {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n\r\n}\r\n\r\n#join>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#roomj {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomj>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomj>button {\r\n    height: 40px;\r\n    width: 100px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n#create {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n#create>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#roomc {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomc>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomc>button {\r\n    height: 40px;\r\n    width: 140px;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes fade {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes left {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes right {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes top {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}"]}]);
// Exports
exports.locals = {
	"welcome": "homepage_welcome__3uU06",
	"wc": "homepage_wc__2kZkv",
	"to": "homepage_to__1ptRZ",
	"chat": "homepage_chat__yf5Wx",
	"fade": "homepage_fade__3ILGj",
	"left": "homepage_left__3xBF2",
	"right": "homepage_right__K04BT",
	"top": "homepage_top__UFxG1",
	"redirect": "homepage_redirect__1dOEr",
	"join": "homepage_join__Py6xZ",
	"roomj": "homepage_roomj__WJaIv",
	"create": "homepage_create__3loQB",
	"roomc": "homepage_roomc__2Yips"
};
module.exports = exports;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create */ "./components/create.js");
/* harmony import */ var _components_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/join */ "./components/join.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Welcome, null), __jsx(_components_join__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_create__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
_c = Home;

function Welcome() {
  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.welcome
  }, __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wc
  }, "Welcome"), __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.to
  }, "to"), __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.chat
  }, "Chatify"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirect
  }, __jsx("h1", null, __jsx("a", {
    href: "#create"
  }, "Create a chatroom")), __jsx("h1", null, "Join a chatroom")));
}

_c2 = Welcome;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Welcome");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/homepage.module.css":
/*!************************************!*\
  !*** ./styles/homepage.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./homepage.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/homepage.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./homepage.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/homepage.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./homepage.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/homepage.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcz8wZDQ4Il0sIm5hbWVzIjpbIkNyZWF0ZSIsInN0eWxlcyIsImNyZWF0ZSIsInJvb21jIiwiSm9pbiIsInVzZVN0YXRlIiwibGluayIsInNldExpbmsiLCJ0ZXN0Iiwic2V0VGVzdCIsInJlZGlyZWN0IiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsImFzc2lnbiIsImpvaW4iLCJyb29taiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkhvbWUiLCJXZWxjb21lIiwid2VsY29tZSIsIndjIiwidG8iLCJjaGF0Il0sIm1hcHBpbmdz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SSxFQUFDO0FBQVIseUJBQUosQ0FEQSxFQUVBLG9DQUZBLENBTEEsQ0FGRjtBQWNEOztNQWZTVSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJWLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsMlJBQStKOztBQUVqTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWUsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0RBQW9ELHdFQUF3RSxJQUFJLEVBQUUsb0NBQW9DO0FBQ3ZLOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJSQUErSjtBQUNySztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJSQUErSjs7QUFFekw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDY2NGE2OWJjOTQ1ZmQ3NGI2MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jcmVhdGV9PlxyXG4gICAgICA8aDE+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gIFxyXG4gIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWN9PlxyXG4gICAgICAgICAgPGlucHV0ICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGpvaW5cIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbj5DcmVhdGU8L2J1dHRvbj5cclxuICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDcmVhdGUiLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBDaGF0Um9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICBpZiAobGluayA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2xpbmt9YClcclxuICAgIH1cclxuIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4vKlxcclxcbkZpcnN0IFdlbGNvbWUgc2VjdGlvblxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX3dlbGNvbWVfXzN1VTA2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS92aWRlb3MvNGstZnV0dXJpc3RpYy1uZXR3b3JrLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLWdsb2JhbC1jb21tdW5pY2F0aW9uLXZpZGVvLWlkMTA1NDcyMTcyMD9zPTY0MHg2NDBcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX3djX18ya1prdiwgI2hvbWVwYWdlX3RvX18xcHRSWiwgI2hvbWVwYWdlX2NoYXRfX3lmNVd4IHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDAgMCAwLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX2NoYXRfX3lmNVd4LCAjaG9tZXBhZ2Vfd2NfXzJrWmt2LCAjaG9tZXBhZ2VfdG9fXzFwdFJaIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX2ZhZGVfXzNJTEdqO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuXFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHJlZCxcXHJcXG4gICAgLTJweCAtMnB4IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX3djX18ya1prdiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9sZWZ0X18zeEJGMjtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9jaGF0X195ZjVXeCB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9yaWdodF9fSzA0QlQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfdG9fXzFwdFJaIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX3RvcF9fVUZ4RzE7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9FciB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrLFxcclxcbiAgICAtMnB4IC0ycHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG1hcmdpbjogNmVtIGF1dG8gMCBhdXRvXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyPmgxIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX2ZhZGVfXzNJTEdqO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9Fcj5oMTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggd2hpdGUsXFxyXFxuICAgIDJweCAycHggd2hpdGU7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cywgdGV4dC1zaGFkb3cgMC41cztcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSm9pbmluZyBhIGNoYXRyb29tXFxyXFxuKi9cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfam9pbl9fUHk2eFoge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfam9pbl9fUHk2eFo+aDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXY+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkNyZWF0aW5nIGEgcm9vbVxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuI2hvbWVwYWdlX2NyZWF0ZV9fM2xvUUIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfY3JlYXRlX18zbG9RQj5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDE0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuQW5pbWF0aW9uc1xcclxcbiovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBob21lcGFnZV9mYWRlX18zSUxHaiB7XFxyXFxuICAgIGZyb20ge29wYWNpdHk6IDB9XFxyXFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBob21lcGFnZV9sZWZ0X18zeEJGMiB7XFxyXFxuICAgIGZyb20ge2xlZnQ6IC0xMDAlfVxcclxcbiAgICB0byB7bGVmdDogMH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBob21lcGFnZV9yaWdodF9fSzA0QlQge1xcclxcbiAgICBmcm9tIHtyaWdodDogLTEwMCV9XFxyXFxuICAgIHRvIHtyaWdodDogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfdG9wX19VRnhHMSB7XFxyXFxuICAgIGZyb20ge3RvcDogLTMwMHB4fVxcclxcbiAgICB0byB7dG9wOiAwfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9TaGkvRGVza3RvcC9MaXZlIENoYXQvc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBOztDQUVDOzs7QUFHRDtJQUNJLDZKQUE2SjtJQUM3Siw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjs7SUFFM0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7O0FBRXpCOzs7QUFHQTtJQUNJLG9DQUFvQjtJQUNwQix3QkFBd0I7O0lBRXhCO2lCQUNhO0FBQ2pCOzs7QUFHQTtJQUNJLG9DQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSTttQkFDZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVjs7QUFFSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7O0lBRVYsb0NBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCO2lCQUNhOztJQUViLCtEQUErRDs7O0FBR25FOztBQUVBOztDQUVDOztBQUVEO0lBQ0ksV0FBVztJQUNYLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7O0NBRUM7OztBQUdEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7QUFHQTs7Q0FFQzs7QUFFRDtJQUNJLE1BQU0sVUFBVTtJQUNoQixJQUFJLFVBQVUsQ0FBQztBQUNuQjs7QUFFQTtJQUNJLE1BQU0sV0FBVztJQUNqQixJQUFJLE9BQU87QUFDZjs7QUFFQTtJQUNJLE1BQU0sWUFBWTtJQUNsQixJQUFJLFFBQVEsQ0FBQztBQUNqQjs7QUFFQTtJQUNJLE1BQU0sV0FBVztJQUNqQixJQUFJLE1BQU07QUFDZFwiLFwiZmlsZVwiOlwiaG9tZXBhZ2UubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKlxcclxcbkZpcnN0IFdlbGNvbWUgc2VjdGlvblxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuI3dlbGNvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3ZpZGVvcy80ay1mdXR1cmlzdGljLW5ldHdvcmstYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtZ2xvYmFsLWNvbW11bmljYXRpb24tdmlkZW8taWQxMDU0NzIxNzIwP3M9NjQweDY0MFxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jd2MsICN0bywgI2NoYXQge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDAuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY2hhdCwgI3djLCAjdG8ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZWQsXFxyXFxuICAgIC0ycHggLTJweCByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN3YyB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWZ0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogcmlnaHQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG8ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogdG9wO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWRpcmVjdCB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrLFxcclxcbiAgICAtMnB4IC0ycHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG1hcmdpbjogNmVtIGF1dG8gMCBhdXRvXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jcmVkaXJlY3Q+aDEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNyZWRpcmVjdD5oMTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggd2hpdGUsXFxyXFxuICAgIDJweCAycHggd2hpdGU7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cywgdGV4dC1zaGFkb3cgMC41cztcXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSm9pbmluZyBhIGNoYXRyb29tXFxyXFxuKi9cXHJcXG5cXHJcXG4jam9pbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNqb2luPmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNyb29taiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNyb29taj5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWo+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlPmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNyb29tYyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNyb29tYz5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWM+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG5BbmltYXRpb25zXFxyXFxuKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgICBmcm9tIHtvcGFjaXR5OiAwfVxcclxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGVmdCB7XFxyXFxuICAgIGZyb20ge2xlZnQ6IC0xMDAlfVxcclxcbiAgICB0byB7bGVmdDogMH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyByaWdodCB7XFxyXFxuICAgIGZyb20ge3JpZ2h0OiAtMTAwJX1cXHJcXG4gICAgdG8ge3JpZ2h0OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB0b3Age1xcclxcbiAgICBmcm9tIHt0b3A6IC0zMDBweH1cXHJcXG4gICAgdG8ge3RvcDogMH1cXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2VsY29tZVwiOiBcImhvbWVwYWdlX3dlbGNvbWVfXzN1VTA2XCIsXG5cdFwid2NcIjogXCJob21lcGFnZV93Y19fMmtaa3ZcIixcblx0XCJ0b1wiOiBcImhvbWVwYWdlX3RvX18xcHRSWlwiLFxuXHRcImNoYXRcIjogXCJob21lcGFnZV9jaGF0X195ZjVXeFwiLFxuXHRcImZhZGVcIjogXCJob21lcGFnZV9mYWRlX18zSUxHalwiLFxuXHRcImxlZnRcIjogXCJob21lcGFnZV9sZWZ0X18zeEJGMlwiLFxuXHRcInJpZ2h0XCI6IFwiaG9tZXBhZ2VfcmlnaHRfX0swNEJUXCIsXG5cdFwidG9wXCI6IFwiaG9tZXBhZ2VfdG9wX19VRnhHMVwiLFxuXHRcInJlZGlyZWN0XCI6IFwiaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyXCIsXG5cdFwiam9pblwiOiBcImhvbWVwYWdlX2pvaW5fX1B5NnhaXCIsXG5cdFwicm9vbWpcIjogXCJob21lcGFnZV9yb29tal9fV0phSXZcIixcblx0XCJjcmVhdGVcIjogXCJob21lcGFnZV9jcmVhdGVfXzNsb1FCXCIsXG5cdFwicm9vbWNcIjogXCJob21lcGFnZV9yb29tY19fMllpcHNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IENyZWF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGVcIlxyXG5pbXBvcnQgSm9pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qb2luXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gIChcclxuICA8PlxyXG4gIDxXZWxjb21lIC8+XHJcbiAgPEpvaW4gLz5cclxuICA8Q3JlYXRlIC8+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFdlbGNvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuIFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLndlbGNvbWV9PlxyXG4gICAgPGgxIGlkPXtzdHlsZXMud2N9PldlbGNvbWU8L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMudG99PnRvPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLmNoYXR9PkNoYXRpZnk8L2gxPlxyXG5cclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5yZWRpcmVjdH0+XHJcbiAgICA8aDE+PGEgaHJlZj1cIiNjcmVhdGVcIj5DcmVhdGUgYSBjaGF0cm9vbTwvYT48L2gxPlxyXG4gICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9ob21lcGFnZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=