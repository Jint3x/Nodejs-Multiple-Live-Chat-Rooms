(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Create_Join.js":
/*!***********************************!*\
  !*** ./components/Create_Join.js ***!
  \***********************************/
/*! exports provided: red, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
// Upon trying to join a chatroom if it's empty do nothing, else
// redirect to the chatroom URL, if the chat room doesn't exist it will be handled
// by the server and redirected towards an error page
var red = function redirect(data) {
  if (data === "") {
    return;
  }

  location.assign("/chat/".concat(data));
}; // Send request to the server with data, the server then creates a chatroom based on
// what name has been sent with the data

var create = function create(data) {
  fetch("http://localhost:3000/chat_creation/create", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data
    })
  });
  location.assign("/chat/".concat(data));
};

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
/* harmony import */ var _components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join.js */ "./components/Create_Join.js");
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
    Object(_components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__["create"])(value);
  }

  return __jsx("div", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create,
    id: "create"
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to create"
  }), __jsx("button", {
    onClick: createRoom
  }, "Create")));
} // Fixed typo on create => enter a chat to join
// 


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
/* harmony import */ var _components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join.js */ "./components/Create_Join.js");
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Create the Chat Room

function Join() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      link = _useState[0],
      setLink = _useState[1];

  function redirect() {
    Object(_components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__["red"])(link);
  }

  return __jsx("div", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join,
    id: "join"
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

_s(Join, "xcLChQc+zqs5WtJGRq2wyYv8/DQ=");

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
exports.push([module.i, "\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#homepage_welcome__3uU06 {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#homepage_chat__yf5Wx, #homepage_wc__2kZkv, #homepage_to__1ptRZ {\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv {\r\n    animation-name: homepage_left__3xBF2;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_chat__yf5Wx {\r\n    animation-name: homepage_right__K04BT;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_to__1ptRZ {\r\n    animation-name: homepage_top__UFxG1;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#homepage_redirect__1dOEr {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 80%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.homepage_redirs__Az5uI>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.homepage_redirs__Az5uI>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.homepage_join__Py6xZ {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.homepage_join__Py6xZ>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#homepage_roomj__WJaIv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomj__WJaIv>input {\r\n    height: 40px;\r\n    width: 40%;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomj__WJaIv>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.homepage_create__3loQB {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.homepage_create__3loQB>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#homepage_roomc__2Yips {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomc__2Yips>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n    width: 40%;\r\n}\r\n\r\n#homepage_roomc__2Yips>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes homepage_fade__3ILGj {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes homepage_left__3xBF2 {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes homepage_right__K04BT {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes homepage_top__UFxG1 {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}\r\n\r\n\r\n\r\n/*\r\nResponsive\r\n*/\r\n\r\n\r\n    /* High Responsiveness */\r\n\r\n    @media (min-width: 2000px) {\r\n        #homepage_welcome__3uU06 {\r\n            font-size: 70px;\r\n        }\r\n\r\n        .homepage_redirs__Az5uI {\r\n            font-size: 70px;\r\n        }\r\n\r\n        .homepage_create__3loQB>h1, .homepage_join__Py6xZ>h1 {\r\n            font-size: 60px;\r\n        }\r\n\r\n        #homepage_roomj__WJaIv>input, #homepage_roomc__2Yips>input {\r\n            height: 80px;\r\n            font-size: 30px;\r\n        }\r\n\r\n        #homepage_roomj__WJaIv>button, #homepage_roomc__2Yips>button {\r\n            height: 80px;\r\n            font-size: 60px;\r\n        }\r\n    }\r\n\r\n\r\n    @media (min-width: 3000px) {\r\n        #homepage_welcome__3uU06 {\r\n            font-size: 100px;\r\n            height: 900px;\r\n        }\r\n\r\n        .homepage_redirs__Az5uI {\r\n            font-size: 85px;\r\n        }\r\n\r\n        .homepage_create__3loQB>h1, .homepage_join__Py6xZ>h1 {\r\n            padding-top: 2em;\r\n            font-size: 80px;\r\n        }\r\n\r\n        #homepage_roomj__WJaIv>input, #homepage_roomc__2Yips>input {\r\n            height: 120px;\r\n            font-size: 70px;\r\n        }\r\n\r\n        #homepage_roomj__WJaIv>button, #homepage_roomc__2Yips>button {\r\n            height: 120px;\r\n            font-size: 70px;\r\n        }\r\n\r\n    }\r\n    \r\n\r\n/* Lower Responsiveness */\r\n\r\n@media (max-width: 1200px) {\r\n\r\n    #homepage_welcome__3uU06 {\r\n        height: 500px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 19px;\r\n    }\r\n\r\n    #homepage_ws__19tcJ, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n        padding-top: 1em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 850px) {\r\n    #homepage_welcome__3uU06 {\r\n        font-size: 28px;\r\n        height: 350px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 17px;\r\n        width: 95%;\r\n    }\r\n\r\n    #homepage_roomj__WJaIv>button, #homepage_roomc__2Yips>button {\r\n        width: 20%;\r\n    }\r\n\r\n    #homepage_roomj__WJaIv>input, #homepage_roomc__2Yips>input {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #homepage_welcome__3uU06 {\r\n        font-size: 18px;\r\n        height: 300px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 15px;\r\n        width: 80%;\r\n        flex-direction: column;\r\n        margin-top: 3em;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr>h1 {\r\n        margin: 0.5em 0;\r\n    }\r\n\r\n    #homepage_ws__19tcJ, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n        padding-top: 0.5em;\r\n    }\r\n\r\n    .homepage_create__3loQB {\r\n        margin-top: 6em\r\n    }\r\n\r\n\r\n    .homepage_join__Py6xZ, .homepage_create__3loQB {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 90%;\r\n    }\r\n\r\n    .homepage_create__3loQB>h1, .homepage_join__Py6xZ>h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #homepage_roomc__2Yips>input, #homepage_roomj__WJaIv>input {\r\n        font-size: 20px;\r\n        width: 70%;\r\n    }\r\n\r\n    #homepage_roomj__WJaIv>button, #homepage_roomc__2Yips>button {\r\n        width: 30%;\r\n        font-size: 23px;\r\n    }\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/homepage.module.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,6JAA6J;IAC7J,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,sBAAsB;IACtB,qBAAqB;;AAEzB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;;IAExB;iBACa;AACjB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,qCAAqB;IACrB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,mCAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI;mBACe;IACf,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,UAAU;IACV;;AAEJ;;;;AAIA;IACI,sBAAsB;IACtB,YAAY;IACZ,cAAc;IACd,UAAU;;IAEV,oCAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;;;AAIA;IACI,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,iCAAiC;AACrC;;;AAGA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ;iBACa;IACb,wCAAwC;AAC5C;;AAEA;;CAEC;;AAED;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;;CAEC;;;AAGD;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;;AAGA;;CAEC;;AAED;IACI,MAAM,UAAU;IAChB,IAAI,UAAU,CAAC;AACnB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,OAAO;AACf;;AAEA;IACI,MAAM,YAAY;IAClB,IAAI,QAAQ,CAAC;AACjB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,MAAM;AACd;;;;AAIA;;CAEC;;;IAGG,wBAAwB;;IAExB;QACI;YACI,eAAe;QACnB;;QAEA;YACI,eAAe;QACnB;;QAEA;YACI,eAAe;QACnB;;QAEA;YACI,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,YAAY;YACZ,eAAe;QACnB;IACJ;;;IAGA;QACI;YACI,gBAAgB;YAChB,aAAa;QACjB;;QAEA;YACI,eAAe;QACnB;;QAEA;YACI,gBAAgB;YAChB,eAAe;QACnB;;QAEA;YACI,aAAa;YACb,eAAe;QACnB;;QAEA;YACI,aAAa;YACb,eAAe;QACnB;;IAEJ;;;AAGJ,yBAAyB;;AAEzB;;IAEI;QACI,aAAa;QACb,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;;AAGA;IACI;QACI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,UAAU;QACV,sBAAsB;QACtB,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI;IACJ;;;IAGA;QACI,iBAAiB;QACjB,kBAAkB;QAClB,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,UAAU;IACd;;IAEA;QACI,UAAU;QACV,eAAe;IACnB;AACJ","file":"homepage.module.css","sourcesContent":["\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#welcome {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#wc, #to, #chat {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#chat, #wc, #to {\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#wc {\r\n    animation-name: left;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#chat {\r\n    animation-name: right;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#to {\r\n    animation-name: top;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#redirect {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 80%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.redirs {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: fade;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.redirs:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.redirs>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.redirs>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.join {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.join>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#roomj {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomj>input {\r\n    height: 40px;\r\n    width: 40%;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomj>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.create {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.create>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#roomc {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomc>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n    width: 40%;\r\n}\r\n\r\n#roomc>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes fade {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes left {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes right {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes top {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}\r\n\r\n\r\n\r\n/*\r\nResponsive\r\n*/\r\n\r\n\r\n    /* High Responsiveness */\r\n\r\n    @media (min-width: 2000px) {\r\n        #welcome {\r\n            font-size: 70px;\r\n        }\r\n\r\n        .redirs {\r\n            font-size: 70px;\r\n        }\r\n\r\n        .create>h1, .join>h1 {\r\n            font-size: 60px;\r\n        }\r\n\r\n        #roomj>input, #roomc>input {\r\n            height: 80px;\r\n            font-size: 30px;\r\n        }\r\n\r\n        #roomj>button, #roomc>button {\r\n            height: 80px;\r\n            font-size: 60px;\r\n        }\r\n    }\r\n\r\n\r\n    @media (min-width: 3000px) {\r\n        #welcome {\r\n            font-size: 100px;\r\n            height: 900px;\r\n        }\r\n\r\n        .redirs {\r\n            font-size: 85px;\r\n        }\r\n\r\n        .create>h1, .join>h1 {\r\n            padding-top: 2em;\r\n            font-size: 80px;\r\n        }\r\n\r\n        #roomj>input, #roomc>input {\r\n            height: 120px;\r\n            font-size: 70px;\r\n        }\r\n\r\n        #roomj>button, #roomc>button {\r\n            height: 120px;\r\n            font-size: 70px;\r\n        }\r\n\r\n    }\r\n    \r\n\r\n/* Lower Responsiveness */\r\n\r\n@media (max-width: 1200px) {\r\n\r\n    #welcome {\r\n        height: 500px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 19px;\r\n    }\r\n\r\n    #ws, #to, #chat {\r\n        padding-top: 1em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 850px) {\r\n    #welcome {\r\n        font-size: 28px;\r\n        height: 350px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 17px;\r\n        width: 95%;\r\n    }\r\n\r\n    #roomj>button, #roomc>button {\r\n        width: 20%;\r\n    }\r\n\r\n    #roomj>input, #roomc>input {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #welcome {\r\n        font-size: 18px;\r\n        height: 300px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 15px;\r\n        width: 80%;\r\n        flex-direction: column;\r\n        margin-top: 3em;\r\n    }\r\n\r\n    #redirect>h1 {\r\n        margin: 0.5em 0;\r\n    }\r\n\r\n    #ws, #to, #chat {\r\n        padding-top: 0.5em;\r\n    }\r\n\r\n    .create {\r\n        margin-top: 6em\r\n    }\r\n\r\n\r\n    .join, .create {\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 90%;\r\n    }\r\n\r\n    .create>h1, .join>h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #roomc>input, #roomj>input {\r\n        font-size: 20px;\r\n        width: 70%;\r\n    }\r\n\r\n    #roomj>button, #roomc>button {\r\n        width: 30%;\r\n        font-size: 23px;\r\n    }\r\n}"]}]);
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
	"redirs": "homepage_redirs__Az5uI",
	"join": "homepage_join__Py6xZ",
	"roomj": "homepage_roomj__WJaIv",
	"create": "homepage_create__3loQB",
	"roomc": "homepage_roomc__2Yips",
	"ws": "homepage_ws__19tcJ"
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
  }, __jsx("h1", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirs
  }, __jsx("a", {
    href: "#create"
  }, "Create a chatroom")), __jsx("h1", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirs
  }, __jsx("a", {
    href: "#join"
  }, "Join a chatroom"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcz8wZDQ4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbInJlZCIsInJlZGlyZWN0IiwiZGF0YSIsImxvY2F0aW9uIiwiYXNzaWduIiwiY3JlYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiQ3JlYXRlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXBkYXRlIiwiZSIsInRhcmdldCIsImNyZWF0ZVJvb20iLCJzdHlsZXMiLCJyb29tYyIsIkpvaW4iLCJsaW5rIiwic2V0TGluayIsImpvaW4iLCJyb29taiIsIkhvbWUiLCJXZWxjb21lIiwid2VsY29tZSIsIndjIiwidG8iLCJjaGF0IiwicmVkaXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBRyxHQUFHLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZDLE1BQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFREMsVUFBUSxDQUFDQyxNQUFULGlCQUF5QkYsSUFBekI7QUFDRCxDQU5JLEMsQ0FVUDtBQUNBOztBQUNTLElBQU1HLE1BQU0sR0FBRyxTQUFTQSxNQUFULENBQWdCSCxJQUFoQixFQUFzQjtBQUN0Q0ksT0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2xEQyxVQUFNLEVBQUUsTUFEMEM7QUFFbERDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRnlDO0FBS2xEQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxVQUFJLEVBQUVWO0FBRGEsS0FBZjtBQUw0QyxHQUEvQyxDQUFMO0FBVUFDLFVBQVEsQ0FBQ0MsTUFBVCxpQkFBeUJGLElBQXpCO0FBQ0QsQ0FaRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCVDtBQUNBO0FBQ0E7O0FBR0EsU0FBU1csTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQTs7QUFHZCxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmRixZQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDSDs7QUFFRCxXQUFTSyxVQUFULEdBQXNCO0FBQ3BCZiw2RUFBTSxDQUFDVSxLQUFELENBQU47QUFD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S0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLE1BQU0sS0FBSyxlQUFlLHFCQUFxQixPQUFPLEtBQUssZUFBZSxnQkFBZ0IsTUFBTSxLQUFLLGVBQWUscUJBQXFCLE9BQU8sS0FBSyxlQUFlLGdCQUFnQixRQUFRLE1BQU0sT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxLQUFLLEtB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S0FBOEI7QUFBRyxRQUFJLEVBQUM7QUFBUix1QkFBOUIsQ0FGQSxDQUxBLENBRkY7QUFjRDs7TUFmU0wsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCVixVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDJSQUErSjs7QUFFak07O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFvRCx3RUFBd0UsSUFBSSxFQUFFLG9DQUFvQztBQUN2Szs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwyUkFBK0o7QUFDcks7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywyUkFBK0o7O0FBRXpMOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBVcG9uIHRyeWluZyB0byBqb2luIGEgY2hhdHJvb20gaWYgaXQncyBlbXB0eSBkbyBub3RoaW5nLCBlbHNlXHJcbi8vIHJlZGlyZWN0IHRvIHRoZSBjaGF0cm9vbSBVUkwsIGlmIHRoZSBjaGF0IHJvb20gZG9lc24ndCBleGlzdCBpdCB3aWxsIGJlIGhhbmRsZWRcclxuLy8gYnkgdGhlIHNlcnZlciBhbmQgcmVkaXJlY3RlZCB0b3dhcmRzIGFuIGVycm9yIHBhZ2VcclxuZXhwb3J0IGNvbnN0IHJlZCA9IGZ1bmN0aW9uIHJlZGlyZWN0KGRhdGEpIHtcclxuICAgIGlmIChkYXRhID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7ZGF0YX1gKVxyXG4gIH1cclxuXHJcblxyXG5cclxuLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCBkYXRhLCB0aGUgc2VydmVyIHRoZW4gY3JlYXRlcyBhIGNoYXRyb29tIGJhc2VkIG9uXHJcbi8vIHdoYXQgbmFtZSBoYXMgYmVlbiBzZW50IHdpdGggdGhlIGRhdGFcclxuICBleHBvcnQgY29uc3QgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGRhdGEpIHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGF0X2NyZWF0aW9uL2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmFzc2lnbihgL2NoYXQvJHtkYXRhfWApXHJcbiAgICAgIH1cclxuICBcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5mdW5jdGlvbiBDcmVhdGUoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUm9vbSgpIHtcclxuICAgICAgY3JlYXRlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0gaWQ9XCJjcmVhdGVcIj5cclxuICAgICAgPGgxPkNyZWF0ZSBhIGNoYXRyb29tPC9oMT5cclxuICBcclxuICBcclxuICAgICAgPGRpdiBpZD17c3R5bGVzLnJvb21jfT5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt1cGRhdGV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IHJvb20gdG8gY3JlYXRlXCIgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlUm9vbX0+Q3JlYXRlPC9idXR0b24+XHJcbiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuLy8gRml4ZWQgdHlwbyBvbiBjcmVhdGUgPT4gZW50ZXIgYSBjaGF0IHRvIGpvaW5cclxuLy8gXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ3JlYXRlIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzXCJcclxuXHJcbi8vIENyZWF0ZSB0aGUgQ2hhdCBSb29tXHJcbmZ1bmN0aW9uIEpvaW4oKSB7XHJcbiAgICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICByZWQobGluaylcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2lufSBpZD1cImpvaW5cIj5cclxuICAgICAgICA8aDE+Sm9pbiBhIGNoYXRyb29tPC9oMT5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5yb29tan0+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGpvaW5cIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVkaXJlY3R9PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLypcXHJcXG5GaXJzdCBXZWxjb21lIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiNob21lcGFnZV93ZWxjb21lX18zdVUwNiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmlkZW9zLzRrLWZ1dHVyaXN0aWMtbmV0d29yay1hcnRpZmljaWFsLWludGVsbGlnZW5jZS1nbG9iYWwtY29tbXVuaWNhdGlvbi12aWRlby1pZDEwNTQ3MjE3MjA/cz02NDB4NjQwXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3YsICNob21lcGFnZV90b19fMXB0UlosICNob21lcGFnZV9jaGF0X195ZjVXeCB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9jaGF0X195ZjVXeCwgI2hvbWVwYWdlX3djX18ya1prdiwgI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9mYWRlX18zSUxHajtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZWQsXFxyXFxuICAgIC0ycHggLTJweCByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3Yge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfbGVmdF9fM3hCRjI7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfY2hhdF9feWY1V3gge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfcmlnaHRfX0swNEJUO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV90b3BfX1VGeEcxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXIge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjayxcXHJcXG4gICAgLTJweCAtMnB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDZlbSBhdXRvIDAgYXV0b1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhvbWVwYWdlX3JlZGlyc19fQXo1dUkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfZmFkZV9fM0lMR2o7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZXBhZ2VfcmVkaXJzX19BejV1STpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9yZWRpcnNfX0F6NXVJPmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX3JlZGlyc19fQXo1dUk+YTpob3ZlciAge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHdoaXRlLFxcclxcbiAgICAycHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCB0ZXh0LXNoYWRvdyAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSm9pbmluZyBhIGNoYXRyb29tXFxyXFxuKi9cXHJcXG5cXHJcXG4uaG9tZXBhZ2Vfam9pbl9fUHk2eFoge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Vfam9pbl9fUHk2eFo+aDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXY+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9jcmVhdGVfXzNsb1FCIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX2NyZWF0ZV9fM2xvUUI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tY19fMllpcHM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG5BbmltYXRpb25zXFxyXFxuKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX2ZhZGVfXzNJTEdqIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX2xlZnRfXzN4QkYyIHtcXHJcXG4gICAgZnJvbSB7bGVmdDogLTEwMCV9XFxyXFxuICAgIHRvIHtsZWZ0OiAwfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX3JpZ2h0X19LMDRCVCB7XFxyXFxuICAgIGZyb20ge3JpZ2h0OiAtMTAwJX1cXHJcXG4gICAgdG8ge3JpZ2h0OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBob21lcGFnZV90b3BfX1VGeEcxIHtcXHJcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHh9XFxyXFxuICAgIHRvIHt0b3A6IDB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuUmVzcG9uc2l2ZVxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIEhpZ2ggUmVzcG9uc2l2ZW5lc3MgKi9cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xcclxcbiAgICAgICAgI2hvbWVwYWdlX3dlbGNvbWVfXzN1VTA2IHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaG9tZXBhZ2VfcmVkaXJzX19BejV1SSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmhvbWVwYWdlX2NyZWF0ZV9fM2xvUUI+aDEsIC5ob21lcGFnZV9qb2luX19QeTZ4Wj5oMSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5pbnB1dCwgI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5pbnB1dCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNob21lcGFnZV9yb29tal9fV0phSXY+YnV0dG9uLCAjaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XFxyXFxuICAgICAgICAjaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDYge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA5MDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5ob21lcGFnZV9yZWRpcnNfX0F6NXVJIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDg1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaG9tZXBhZ2VfY3JlYXRlX18zbG9RQj5oMSwgLmhvbWVwYWdlX2pvaW5fX1B5NnhaPmgxIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNob21lcGFnZV9yb29tal9fV0phSXY+aW5wdXQsICNob21lcGFnZV9yb29tY19fMllpcHM+aW5wdXQge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5idXR0b24sICNob21lcGFnZV9yb29tY19fMllpcHM+YnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4vKiBMb3dlciBSZXNwb25zaXZlbmVzcyAqL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3dlbGNvbWVfXzN1VTA2IHtcXHJcXG4gICAgICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9FciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3dzX18xOXRjSiwgI2hvbWVwYWdlX3RvX18xcHRSWiwgI2hvbWVwYWdlX2NoYXRfX3lmNVd4IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAgICNob21lcGFnZV93ZWxjb21lX18zdVUwNiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmJ1dHRvbiwgI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmlucHV0LCAjaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmlucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICNob21lcGFnZV93ZWxjb21lX18zdVUwNiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9Fcj5oMSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3dzX18xOXRjSiwgI2hvbWVwYWdlX3RvX18xcHRSWiwgI2hvbWVwYWdlX2NoYXRfX3lmNVd4IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZXBhZ2VfY3JlYXRlX18zbG9RQiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA2ZW1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaG9tZXBhZ2Vfam9pbl9fUHk2eFosIC5ob21lcGFnZV9jcmVhdGVfXzNsb1FCIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZXBhZ2VfY3JlYXRlX18zbG9RQj5oMSwgLmhvbWVwYWdlX2pvaW5fX1B5NnhaPmgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmlucHV0LCAjaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5idXR0b24sICNob21lcGFnZV9yb29tY19fMllpcHM+YnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIzcHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU2hpL0Rlc2t0b3AvTGl2ZSBDaGF0L3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Q0FFQzs7O0FBR0Q7SUFDSSw2SkFBNko7SUFDN0osNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7O0lBRTNCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCOztBQUV6Qjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCOztJQUV4QjtpQkFDYTtBQUNqQjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIs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Q0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKXCIsXCJmaWxlXCI6XCJob21lcGFnZS5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi8qXFxyXFxuRmlyc3QgV2VsY29tZSBzZWN0aW9uXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4jd2VsY29tZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmlkZW9zLzRrLWZ1dHVyaXN0aWMtbmV0d29yay1hcnRpZmljaWFsLWludGVsbGlnZW5jZS1nbG9iYWwtY29tbXVuaWNhdGlvbi12aWRlby1pZDEwNTQ3MjE3MjA/cz02NDB4NjQwXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiN3YywgI3RvLCAjY2hhdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbiNjaGF0LCAjd2MsICN0byB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XFxyXFxuXFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHJlZCxcXHJcXG4gICAgLTJweCAtMnB4IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3djIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxlZnQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdCB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiByaWdodDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiN0byB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0b3A7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3JlZGlyZWN0IHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2ssXFxyXFxuICAgIC0ycHggLTJweCBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiA2ZW0gYXV0byAwIGF1dG9cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5yZWRpcnMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5yZWRpcnM6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41czsgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVkaXJzPmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZGlycz5hOmhvdmVyICB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggd2hpdGUsXFxyXFxuICAgIDJweCAycHggd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMsIHRleHQtc2hhZG93IDAuNXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Kb2luaW5nIGEgY2hhdHJvb21cXHJcXG4qL1xcclxcblxcclxcbi5qb2luIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmpvaW4+aDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21qIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21qPmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNyb29taj5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbi5jcmVhdGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlPmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNyb29tYyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNyb29tYz5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWM+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuQW5pbWF0aW9uc1xcclxcbiovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxlZnQge1xcclxcbiAgICBmcm9tIHtsZWZ0OiAtMTAwJX1cXHJcXG4gICAgdG8ge2xlZnQ6IDB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmlnaHQge1xcclxcbiAgICBmcm9tIHtyaWdodDogLTEwMCV9XFxyXFxuICAgIHRvIHtyaWdodDogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHh9XFxyXFxuICAgIHRvIHt0b3A6IDB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuUmVzcG9uc2l2ZVxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qIEhpZ2ggUmVzcG9uc2l2ZW5lc3MgKi9cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xcclxcbiAgICAgICAgI3dlbGNvbWUge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWRpcnMge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jcmVhdGU+aDEsIC5qb2luPmgxIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjcm9vbWo+aW5wdXQsICNyb29tYz5pbnB1dCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNyb29taj5idXR0b24sICNyb29tYz5idXR0b24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMwMDBweCkge1xcclxcbiAgICAgICAgI3dlbGNvbWUge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA5MDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yZWRpcnMge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jcmVhdGU+aDEsIC5qb2luPmgxIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNyb29taj5pbnB1dCwgI3Jvb21jPmlucHV0IHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNyb29taj5idXR0b24sICNyb29tYz5idXR0b24ge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbi8qIExvd2VyIFJlc3BvbnNpdmVuZXNzICovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcblxcclxcbiAgICAjd2VsY29tZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyZWRpcmVjdCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3dzLCAjdG8sICNjaGF0IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAgICN3ZWxjb21lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JlZGlyZWN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Jvb21qPmJ1dHRvbiwgI3Jvb21jPmJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyb29taj5pbnB1dCwgI3Jvb21jPmlucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICN3ZWxjb21lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JlZGlyZWN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyZWRpcmVjdD5oMSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3dzLCAjdG8sICNjaGF0IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY3JlYXRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDZlbVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5qb2luLCAuY3JlYXRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY3JlYXRlPmgxLCAuam9pbj5oMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Jvb21jPmlucHV0LCAjcm9vbWo+aW5wdXQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcm9vbWo+YnV0dG9uLCAjcm9vbWM+YnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIzcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2VsY29tZVwiOiBcImhvbWVwYWdlX3dlbGNvbWVfXzN1VTA2XCIsXG5cdFwid2NcIjogXCJob21lcGFnZV93Y19fMmtaa3ZcIixcblx0XCJ0b1wiOiBcImhvbWVwYWdlX3RvX18xcHRSWlwiLFxuXHRcImNoYXRcIjogXCJob21lcGFnZV9jaGF0X195ZjVXeFwiLFxuXHRcImZhZGVcIjogXCJob21lcGFnZV9mYWRlX18zSUxHalwiLFxuXHRcImxlZnRcIjogXCJob21lcGFnZV9sZWZ0X18zeEJGMlwiLFxuXHRcInJpZ2h0XCI6IFwiaG9tZXBhZ2VfcmlnaHRfX0swNEJUXCIsXG5cdFwidG9wXCI6IFwiaG9tZXBhZ2VfdG9wX19VRnhHMVwiLFxuXHRcInJlZGlyZWN0XCI6IFwiaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyXCIsXG5cdFwicmVkaXJzXCI6IFwiaG9tZXBhZ2VfcmVkaXJzX19BejV1SVwiLFxuXHRcImpvaW5cIjogXCJob21lcGFnZV9qb2luX19QeTZ4WlwiLFxuXHRcInJvb21qXCI6IFwiaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2XCIsXG5cdFwiY3JlYXRlXCI6IFwiaG9tZXBhZ2VfY3JlYXRlX18zbG9RQlwiLFxuXHRcInJvb21jXCI6IFwiaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzXCIsXG5cdFwid3NcIjogXCJob21lcGFnZV93c19fMTl0Y0pcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcU2hpXFxcXERlc2t0b3BcXFxcTGl2ZSBDaGF0XFxcXHBhZ2VzXFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBDcmVhdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlXCJcclxuaW1wb3J0IEpvaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvam9pblwiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuICAoXHJcbiAgPD5cclxuICA8V2VsY29tZSAvPlxyXG4gIDxKb2luIC8+XHJcbiAgPENyZWF0ZSAvPlxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uICBXZWxjb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiBcclxuICAgIDxkaXYgaWQ9e3N0eWxlcy53ZWxjb21lfT5cclxuICAgIDxoMSBpZD17c3R5bGVzLndjfT5XZWxjb21lPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLnRvfT50bzwvaDE+XHJcbiAgICA8aDEgaWQ9e3N0eWxlcy5jaGF0fT5DaGF0aWZ5PC9oMT5cclxuXHJcbiAgICA8ZGl2IGlkPXtzdHlsZXMucmVkaXJlY3R9PlxyXG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlZGlyc30+PGEgaHJlZj1cIiNjcmVhdGVcIj5DcmVhdGUgYSBjaGF0cm9vbTwvYT48L2gxPlxyXG4gICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlZGlyc30+PGEgaHJlZj1cIiNqb2luXCI+Sm9pbiBhIGNoYXRyb29tPC9hPjwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9ob21lcGFnZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=