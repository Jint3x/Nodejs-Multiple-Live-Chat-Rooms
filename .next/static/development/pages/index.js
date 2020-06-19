(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

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
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Create() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  function update(e) {
    setValue(e.target.value);
  }

  function createRoom() {
    fetch("http://localhost:3000/chat_creation/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value
      })
    });
  }

  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to join"
  }), __jsx("button", {
    onClick: createRoom
  }, "Create")));
}

_s(Create, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");

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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Create the ChatRoom

function Join() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      link = _useState[0],
      setLink = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      test = _useState2[0],
      setTest = _useState2[1];

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
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join
  }, __jsx("h1", null, "Join a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomj
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CShi%5CDesktop%5CLive%20Chat%5Cpages%5Cindex.js!./":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CShi%5CDesktop%5CLive%20Chat%5Cpages%5Cindex.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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
  }, __jsx("h1", null, "Create a chatroom"), __jsx("h1", null, "Join a chatroom")));
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

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CShi%5CDesktop%5CLive%20Chat%5Cpages%5Cindex.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CShi%5CDesktop%5CLive%20Chat%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CShi%5CDesktop%5CLive%20Chat%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3M/MGQ0OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJDcmVhdGUiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJlIiwidGFyZ2V0IiwiY3JlYXRlUm9vbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsInN0eWxlcyIsImNyZWF0ZSIsInJvb21jIiwiSm9pbiIsImxpbmsiLCJzZXRMaW5rIiwidGVzdCIsInNldFRlc3QiLCJyZWRpcmVjdCIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJhc3NpZ24iLCJqb2luIiwi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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZSgpIHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKGUpIHtcclxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSb29tKCkge1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGF0X2NyZWF0aW9uL2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBuYW1lOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jcmVhdGV9PlxyXG4gICAgICA8aDE+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gIFxyXG4gIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWN9PlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3VwZGF0ZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlUm9vbX0+Q3JlYXRlPC9idXR0b24+XHJcbiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ3JlYXRlIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vLyBDcmVhdGUgdGhlIENoYXRSb29tXHJcbmZ1bmN0aW9uIEpvaW4oKSB7XHJcbiAgICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XHJcbiAgICAgIGlmIChsaW5rID09PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGluay5pbmNsdWRlcyhcIiBcIikpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7bGlua31gKVxyXG4gICAgfVxyXG4gXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5qb2lufT5cclxuICAgICAgICA8aDE+Sm9pbiBhIGNoYXRyb29tPC9oMT5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5yb29tan0+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGpvaW5cIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVkaXJlY3R9PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLypcXHJcXG5GaXJzdCBXZWxjb21lIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiNob21lcGFnZV93ZWxjb21lX18zdVUwNiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmlkZW9zLzRrLWZ1dHVyaXN0aWMtbmV0d29yay1hcnRpZmljaWFsLWludGVsbGlnZW5jZS1nbG9iYWwtY29tbXVuaWNhdGlvbi12aWRlby1pZDEwNTQ3MjE3MjA/cz02NDB4NjQwXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3YsICNob21lcGFnZV90b19fMXB0UlosICNob21lcGFnZV9jaGF0X195ZjVXeCB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9jaGF0X195ZjVXeCwgI2hvbWVwYWdlX3djX18ya1prdiwgI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9mYWRlX18zSUxHajtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZWQsXFxyXFxuICAgIC0ycHggLTJweCByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3Yge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfbGVmdF9fM3hCRjI7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfY2hhdF9feWY1V3gge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfcmlnaHRfX0swNEJUO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV90b3BfX1VGeEcxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXIge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjayxcXHJcXG4gICAgLTJweCAtMnB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW46IDZlbSBhdXRvIDAgYXV0b1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9Fcj5oMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMC4yZW07XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9mYWRlX18zSUxHajtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXI+aDE6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHdoaXRlLFxcclxcbiAgICAycHggMnB4IHdoaXRlO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIHRleHQtc2hhZG93IDAuNXM7XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkpvaW5pbmcgYSBjaGF0cm9vbVxcclxcbiovXFxyXFxuXFxyXFxuI2hvbWVwYWdlX2pvaW5fX1B5NnhaIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX2pvaW5fX1B5NnhaPmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXY+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiNob21lcGFnZV9jcmVhdGVfXzNsb1FCIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX2NyZWF0ZV9fM2xvUUI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tY19fMllpcHM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbkFuaW1hdGlvbnNcXHJcXG4qL1xcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfZmFkZV9fM0lMR2oge1xcclxcbiAgICBmcm9tIHtvcGFjaXR5OiAwfVxcclxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfbGVmdF9fM3hCRjIge1xcclxcbiAgICBmcm9tIHtsZWZ0OiAtMTAwJX1cXHJcXG4gICAgdG8ge2xlZnQ6IDB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfcmlnaHRfX0swNEJUIHtcXHJcXG4gICAgZnJvbSB7cmlnaHQ6IC0xMDAlfVxcclxcbiAgICB0byB7cmlnaHQ6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX3RvcF9fVUZ4RzEge1xcclxcbiAgICBmcm9tIHt0b3A6IC0zMDBweH1cXHJcXG4gICAgdG8ge3RvcDogMH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU2hpL0Rlc2t0b3AvTGl2ZSBDaGF0L3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Q0FFQzs7O0FBR0Q7SUFDSSw2SkFBNko7SUFDN0osNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7O0lBRTNCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCOztBQUV6Qjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCOztJQUV4QjtpQkFDYTtBQUNqQjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0k7bUJBQ2U7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Y7O0FBRUo7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVOztJQUVWLG9DQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QjtpQkFDYTs7SUFFYiwrREFBK0Q7OztBQUduRTs7QUFFQTs7Q0FFQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztDQUVDOzs7QUFHRDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0E7O0NBRUM7O0FBRUQ7SUFDSSxNQUFNLFVBQVU7SUFDaEIsSUFBSSxVQUFVLENBQUM7QUFDbkI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxPQUFPO0FBQ2Y7O0FBRUE7SUFDSSxNQUFNLFlBQVk7SUFDbEIsSUFBSSxRQUFRLENBQUM7QUFDakI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxNQUFNO0FBQ2RcIixcImZpbGVcIjpcImhvbWVwYWdlLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLypcXHJcXG5GaXJzdCBXZWxjb21lIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiN3ZWxjb21lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS92aWRlb3MvNGstZnV0dXJpc3RpYy1uZXR3b3JrLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLWdsb2JhbC1jb21tdW5pY2F0aW9uLXZpZGVvLWlkMTA1NDcyMTcyMD9zPTY0MHg2NDBcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3djLCAjdG8sICNjaGF0IHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDAgMCAwLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NoYXQsICN3YywgI3RvIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG5cXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmVkLFxcclxcbiAgICAtMnB4IC0ycHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jd2Mge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbGVmdDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNjaGF0IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpZ2h0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcmVkaXJlY3Qge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjayxcXHJcXG4gICAgLTJweCAtMnB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW46IDZlbSBhdXRvIDAgYXV0b1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3JlZGlyZWN0PmgxIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jcmVkaXJlY3Q+aDE6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHdoaXRlLFxcclxcbiAgICAycHggMnB4IHdoaXRlO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMsIHRleHQtc2hhZG93IDAuNXM7XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkpvaW5pbmcgYSBjaGF0cm9vbVxcclxcbiovXFxyXFxuXFxyXFxuI2pvaW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jam9pbj5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWoge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWo+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21qPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ3JlYXRpbmcgYSByb29tXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4jY3JlYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZT5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21jPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDE0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuQW5pbWF0aW9uc1xcclxcbiovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxlZnQge1xcclxcbiAgICBmcm9tIHtsZWZ0OiAtMTAwJX1cXHJcXG4gICAgdG8ge2xlZnQ6IDB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmlnaHQge1xcclxcbiAgICBmcm9tIHtyaWdodDogLTEwMCV9XFxyXFxuICAgIHRvIHtyaWdodDogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHh9XFxyXFxuICAgIHRvIHt0b3A6IDB9XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndlbGNvbWVcIjogXCJob21lcGFnZV93ZWxjb21lX18zdVUwNlwiLFxuXHRcIndjXCI6IFwiaG9tZXBhZ2Vfd2NfXzJrWmt2XCIsXG5cdFwidG9cIjogXCJob21lcGFnZV90b19fMXB0UlpcIixcblx0XCJjaGF0XCI6IFwiaG9tZXBhZ2VfY2hhdF9feWY1V3hcIixcblx0XCJmYWRlXCI6IFwiaG9tZXBhZ2VfZmFkZV9fM0lMR2pcIixcblx0XCJsZWZ0XCI6IFwiaG9tZXBhZ2VfbGVmdF9fM3hCRjJcIixcblx0XCJyaWdodFwiOiBcImhvbWVwYWdlX3JpZ2h0X19LMDRCVFwiLFxuXHRcInRvcFwiOiBcImhvbWVwYWdlX3RvcF9fVUZ4RzFcIixcblx0XCJyZWRpcmVjdFwiOiBcImhvbWVwYWdlX3JlZGlyZWN0X18xZE9FclwiLFxuXHRcImpvaW5cIjogXCJob21lcGFnZV9qb2luX19QeTZ4WlwiLFxuXHRcInJvb21qXCI6IFwiaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2XCIsXG5cdFwiY3JlYXRlXCI6IFwiaG9tZXBhZ2VfY3JlYXRlX18zbG9RQlwiLFxuXHRcInJvb21jXCI6IFwiaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFNoaVxcXFxEZXNrdG9wXFxcXExpdmUgQ2hhdFxcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ3JlYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZVwiXHJcbmltcG9ydCBKb2luIGZyb20gXCIuLi9jb21wb25lbnRzL2pvaW5cIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAgKFxyXG4gIDw+XHJcbiAgPFdlbGNvbWUgLz5cclxuICA8Sm9pbiAvPlxyXG4gIDxDcmVhdGUgLz5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiAgV2VsY29tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gXHJcbiAgICA8ZGl2IGlkPXtzdHlsZXMud2VsY29tZX0+XHJcbiAgICA8aDEgaWQ9e3N0eWxlcy53Y30+V2VsY29tZTwvaDE+XHJcbiAgICA8aDEgaWQ9e3N0eWxlcy50b30+dG88L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMuY2hhdH0+Q2hhdGlmeTwvaDE+XHJcblxyXG4gICAgPGRpdiBpZD17c3R5bGVzLnJlZGlyZWN0fT5cclxuICAgIDxoMT5DcmVhdGUgYSBjaGF0cm9vbTwvaDE+XHJcbiAgICA8aDE+Sm9pbiBhIGNoYXRyb29tPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vaG9tZXBhZ2UubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vaG9tZXBhZ2UubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODU7Il0sInNvdXJjZVJvb3QiOiIifQ==