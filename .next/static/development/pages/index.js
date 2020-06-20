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
  }, __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join
  }, "Create a chatroom"), __jsx("div", {
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
/* harmony import */ var _components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join.js */ "./components/Create_Join.js");
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Create the ChatRoom

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
    id: "#join"
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
exports.push([module.i, "\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#homepage_welcome__3uU06 {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#homepage_chat__yf5Wx, #homepage_wc__2kZkv, #homepage_to__1ptRZ {\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv {\r\n    animation-name: homepage_left__3xBF2;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_chat__yf5Wx {\r\n    animation-name: homepage_right__K04BT;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_to__1ptRZ {\r\n    animation-name: homepage_top__UFxG1;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#homepage_redirect__1dOEr {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 60%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.homepage_redirs__Az5uI>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.homepage_redirs__Az5uI>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.homepage_join__Py6xZ {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.homepage_join__Py6xZ>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#homepage_roomj__WJaIv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomj__WJaIv>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomj__WJaIv>button {\r\n    height: 40px;\r\n    width: 100px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.homepage_create__3loQB {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.homepage_create__3loQB>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#homepage_roomc__2Yips {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomc__2Yips>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomc__2Yips>button {\r\n    height: 40px;\r\n    width: 140px;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes homepage_fade__3ILGj {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes homepage_left__3xBF2 {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes homepage_right__K04BT {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes homepage_top__UFxG1 {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/homepage.module.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,6JAA6J;IAC7J,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,sBAAsB;IACtB,qBAAqB;;AAEzB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;;IAExB;iBACa;AACjB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,qCAAqB;IACrB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,mCAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI;mBACe;IACf,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,UAAU;IACV;;AAEJ;;;;AAIA;IACI,sBAAsB;IACtB,YAAY;IACZ,cAAc;IACd,UAAU;;IAEV,oCAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;;;AAIA;IACI,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,iCAAiC;AACrC;;;AAGA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ;iBACa;IACb,wCAAwC;AAC5C;;AAEA;;CAEC;;AAED;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;;CAEC;;;AAGD;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;;AAGA;;CAEC;;AAED;IACI,MAAM,UAAU;IAChB,IAAI,UAAU,CAAC;AACnB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,OAAO;AACf;;AAEA;IACI,MAAM,YAAY;IAClB,IAAI,QAAQ,CAAC;AACjB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,MAAM;AACd","file":"homepage.module.css","sourcesContent":["\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#welcome {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#wc, #to, #chat {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#chat, #wc, #to {\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#wc {\r\n    animation-name: left;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#chat {\r\n    animation-name: right;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#to {\r\n    animation-name: top;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#redirect {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 60%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.redirs {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: fade;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.redirs:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.redirs>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.redirs>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.join {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.join>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#roomj {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomj>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomj>button {\r\n    height: 40px;\r\n    width: 100px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.create {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.create>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#roomc {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomc>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomc>button {\r\n    height: 40px;\r\n    width: 140px;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes fade {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes left {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes right {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes top {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}"]}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcz8wZDQ4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbInJlZCIsInJlZGlyZWN0IiwiZGF0YSIsImxvY2F0aW9uIiwiYXNzaWduIiwiY3JlYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiQ3JlYXRlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXBkYXRlIiwiZSIsInRhcmdldCIsImNyZWF0ZVJvb20iLCJzdHlsZXMiLCJqb2luIiwicm9vbWMiLCJKb2luIiwibGluayIsInNldExpbmsiLCJyb29taiIsIkhvbWUiLCJXZWxjb21lIiwid2VsY29tZSIsIndjIiwidG8iLCJjaGF0IiwicmVkaXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBRyxHQUFHLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZDLE1BQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFREMsVUFBUSxDQUFDQyxNQUFULGlCQUF5QkYsSUFBekI7QUFDRCxDQU5JLEMsQ0FVUDtBQUNBOztBQUNTLElBQU1HLE1BQU0sR0FBRyxTQUFTQSxNQUFULENBQWdCSCxJQUFoQixFQUFzQjtBQUN0Q0ksT0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2xEQyxVQUFNLEVBQUUsTUFEMEM7QUFFbERDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRnlDO0FBS2xEQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxVQUFJLEVBQUVWO0FBRGEsS0FBZjtBQUw0QyxHQUEvQyxDQUFMO0FBVUFDLFVBQVEsQ0FBQ0MsTUFBVCxpQkFBeUJGLElBQXpCO0FBQ0QsQ0FaRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCVDtBQUNBO0FBQ0E7O0FBR0EsU0FBU1csTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNQQyxLQURPO0FBQUEsTUFDQUMsUUFEQTs7QUFHZCxXQUFTQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmRixZQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDSDs7QUFFRCxXQUFTSyxVQUFULEdBQXNCO0FBQ3BCZiw2RUFBTSxDQUFDVSxLQUFELENBQU47QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlYsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQywyUkFBK0o7O0FBRWpNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Qsd0VBQXdFLElBQUksRUFBRSxvQ0FBb0M7QUFDdks7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMlJBQStKO0FBQ3JLO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsMlJBQStKOztBQUV6TDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQSwwQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gVXBvbiB0cnlpbmcgdG8gam9pbiBhIGNoYXRyb29tIGlmIGl0J3MgZW1wdHkgZG8gbm90aGluZywgZWxzZVxyXG4vLyByZWRpcmVjdCB0byB0aGUgY2hhdHJvb20gVVJMLCBpZiB0aGUgY2hhdCByb29tIGRvZXNuJ3QgZXhpc3QgaXQgd2lsbCBiZSBoYW5kbGVkXHJcbi8vIGJ5IHRoZSBzZXJ2ZXIgYW5kIHJlZGlyZWN0ZWQgdG93YXJkcyBhbiBlcnJvciBwYWdlXHJcbmV4cG9ydCBjb25zdCByZWQgPSBmdW5jdGlvbiByZWRpcmVjdChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2RhdGF9YClcclxuICB9XHJcblxyXG5cclxuXHJcbi8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyIHdpdGggZGF0YSwgdGhlIHNlcnZlciB0aGVuIGNyZWF0ZXMgYSBjaGF0cm9vbSBiYXNlZCBvblxyXG4vLyB3aGF0IG5hbWUgaGFzIGJlZW4gc2VudCB3aXRoIHRoZSBkYXRhXHJcbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hhdF9jcmVhdGlvbi9jcmVhdGVcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7ZGF0YX1gKVxyXG4gICAgICB9XHJcbiAgXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlX0pvaW4uanNcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvb20oKSB7XHJcbiAgICAgIGNyZWF0ZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9IGlkPVwiY3JlYXRlXCI+XHJcbiAgICAgIDxoMSBpZD17c3R5bGVzLmpvaW59PkNyZWF0ZSBhIGNoYXRyb29tPC9oMT5cclxuICBcclxuICBcclxuICAgICAgPGRpdiBpZD17c3R5bGVzLnJvb21jfT5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt1cGRhdGV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IHJvb20gdG8gam9pblwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVJvb219PkNyZWF0ZTwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENyZWF0ZSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qc1wiXHJcblxyXG4vLyBDcmVhdGUgdGhlIENoYXRSb29tXHJcbmZ1bmN0aW9uIEpvaW4oKSB7XHJcbiAgICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICByZWQobGluaylcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qb2lufSBpZD1cIiNqb2luXCI+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qXFxyXFxuRmlyc3QgV2VsY29tZSBzZWN0aW9uXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3ZpZGVvcy80ay1mdXR1cmlzdGljLW5ldHdvcmstYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtZ2xvYmFsLWNvbW11bmljYXRpb24tdmlkZW8taWQxMDU0NzIxNzIwP3M9NjQweDY0MFxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfd2NfXzJrWmt2LCAjaG9tZXBhZ2VfdG9fXzFwdFJaLCAjaG9tZXBhZ2VfY2hhdF9feWY1V3gge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDAuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfY2hhdF9feWY1V3gsICNob21lcGFnZV93Y19fMmtaa3YsICNob21lcGFnZV90b19fMXB0Uloge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfZmFkZV9fM0lMR2o7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG5cXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmVkLFxcclxcbiAgICAtMnB4IC0ycHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfd2NfXzJrWmt2IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX2xlZnRfXzN4QkYyO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX2NoYXRfX3lmNVd4IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX3JpZ2h0X19LMDRCVDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV90b19fMXB0Uloge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfdG9wX19VRnhHMTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2ssXFxyXFxuICAgIC0ycHggLTJweCBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgbWFyZ2luOiA2ZW0gYXV0byAwIGF1dG9cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9yZWRpcnNfX0F6NXVJIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhvbWVwYWdlX2ZhZGVfXzNJTEdqO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhvbWVwYWdlX3JlZGlyc19fQXo1dUk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41czsgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZXBhZ2VfcmVkaXJzX19BejV1ST5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ob21lcGFnZV9yZWRpcnNfX0F6NXVJPmE6aG92ZXIgIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB3aGl0ZSxcXHJcXG4gICAgMnB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cywgdGV4dC1zaGFkb3cgMC41czsgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkpvaW5pbmcgYSBjaGF0cm9vbVxcclxcbiovXFxyXFxuXFxyXFxuLmhvbWVwYWdlX2pvaW5fX1B5NnhaIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX2pvaW5fX1B5NnhaPmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXY+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9jcmVhdGVfXzNsb1FCIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX2NyZWF0ZV9fM2xvUUI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tY19fMllpcHM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbkFuaW1hdGlvbnNcXHJcXG4qL1xcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfZmFkZV9fM0lMR2oge1xcclxcbiAgICBmcm9tIHtvcGFjaXR5OiAwfVxcclxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfbGVmdF9fM3hCRjIge1xcclxcbiAgICBmcm9tIHtsZWZ0OiAtMTAwJX1cXHJcXG4gICAgdG8ge2xlZnQ6IDB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaG9tZXBhZ2VfcmlnaHRfX0swNEJUIHtcXHJcXG4gICAgZnJvbSB7cmlnaHQ6IC0xMDAlfVxcclxcbiAgICB0byB7cmlnaHQ6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX3RvcF9fVUZ4RzEge1xcclxcbiAgICBmcm9tIHt0b3A6IC0zMDBweH1cXHJcXG4gICAgdG8ge3RvcDogMH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU2hpL0Rlc2t0b3AvTGl2ZSBDaGF0L3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTs7Q0FFQzs7O0FBR0Q7SUFDSSw2SkFBNko7SUFDN0osNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7O0lBRTNCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCOztBQUV6Qjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCOztJQUV4QjtpQkFDYTtBQUNqQjs7O0FBR0E7SUFDSSxvQ0FBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0k7bUJBQ2U7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Y7O0FBRUo7Ozs7QUFJQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7O0lBRVYsb0NBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7aUJBQ2E7SUFDYix3Q0FBd0M7QUFDNUM7O0FBRUE7O0NBRUM7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztDQUVDOzs7QUFHRDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBR0E7O0NBRUM7O0FBRUQ7SUFDSSxNQUFNLFVBQVU7SUFDaEIsSUFBSSxVQUFVLENBQUM7QUFDbkI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxPQUFPO0FBQ2Y7O0FBRUE7SUFDSSxNQUFNLFlBQVk7SUFDbEIsSUFBSSxRQUFRLENBQUM7QUFDakI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxNQUFNO0FBQ2RcIixcImZpbGVcIjpcImhvbWVwYWdlLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLypcXHJcXG5GaXJzdCBXZWxjb21lIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiN3ZWxjb21lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS92aWRlb3MvNGstZnV0dXJpc3RpYy1uZXR3b3JrLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLWdsb2JhbC1jb21tdW5pY2F0aW9uLXZpZGVvLWlkMTA1NDcyMTcyMD9zPTY0MHg2NDBcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3djLCAjdG8sICNjaGF0IHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDAgMCAwLjJlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NoYXQsICN3YywgI3RvIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXHJcXG5cXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmVkLFxcclxcbiAgICAtMnB4IC0ycHggcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jd2Mge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogbGVmdDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbiNjaGF0IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpZ2h0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvcDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcmVkaXJlY3Qge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjayxcXHJcXG4gICAgLTJweCAtMnB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBtYXJnaW46IDZlbSBhdXRvIDAgYXV0b1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnJlZGlycyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMC4yZW07XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnJlZGlyczpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5yZWRpcnM+YSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkaXJzPmE6aG92ZXIgIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB3aGl0ZSxcXHJcXG4gICAgMnB4IDJweCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cywgdGV4dC1zaGFkb3cgMC41czsgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkpvaW5pbmcgYSBjaGF0cm9vbVxcclxcbiovXFxyXFxuXFxyXFxuLmpvaW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uam9pbj5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWoge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWo+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21qPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ3JlYXRpbmcgYSByb29tXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4uY3JlYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZT5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21jPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDE0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuQW5pbWF0aW9uc1xcclxcbiovXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxlZnQge1xcclxcbiAgICBmcm9tIHtsZWZ0OiAtMTAwJX1cXHJcXG4gICAgdG8ge2xlZnQ6IDB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmlnaHQge1xcclxcbiAgICBmcm9tIHtyaWdodDogLTEwMCV9XFxyXFxuICAgIHRvIHtyaWdodDogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdG9wIHtcXHJcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHh9XFxyXFxuICAgIHRvIHt0b3A6IDB9XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIndlbGNvbWVcIjogXCJob21lcGFnZV93ZWxjb21lX18zdVUwNlwiLFxuXHRcIndjXCI6IFwiaG9tZXBhZ2Vfd2NfXzJrWmt2XCIsXG5cdFwidG9cIjogXCJob21lcGFnZV90b19fMXB0UlpcIixcblx0XCJjaGF0XCI6IFwiaG9tZXBhZ2VfY2hhdF9feWY1V3hcIixcblx0XCJmYWRlXCI6IFwiaG9tZXBhZ2VfZmFkZV9fM0lMR2pcIixcblx0XCJsZWZ0XCI6IFwiaG9tZXBhZ2VfbGVmdF9fM3hCRjJcIixcblx0XCJyaWdodFwiOiBcImhvbWVwYWdlX3JpZ2h0X19LMDRCVFwiLFxuXHRcInRvcFwiOiBcImhvbWVwYWdlX3RvcF9fVUZ4RzFcIixcblx0XCJyZWRpcmVjdFwiOiBcImhvbWVwYWdlX3JlZGlyZWN0X18xZE9FclwiLFxuXHRcInJlZGlyc1wiOiBcImhvbWVwYWdlX3JlZGlyc19fQXo1dUlcIixcblx0XCJqb2luXCI6IFwiaG9tZXBhZ2Vfam9pbl9fUHk2eFpcIixcblx0XCJyb29talwiOiBcImhvbWVwYWdlX3Jvb21qX19XSmFJdlwiLFxuXHRcImNyZWF0ZVwiOiBcImhvbWVwYWdlX2NyZWF0ZV9fM2xvUUJcIixcblx0XCJyb29tY1wiOiBcImhvbWVwYWdlX3Jvb21jX18yWWlwc1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTaGlcXFxcRGVza3RvcFxcXFxMaXZlIENoYXRcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IENyZWF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGVcIlxyXG5pbXBvcnQgSm9pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qb2luXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gIChcclxuICA8PlxyXG4gIDxXZWxjb21lIC8+XHJcbiAgPEpvaW4gLz5cclxuICA8Q3JlYXRlIC8+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFdlbGNvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuIFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLndlbGNvbWV9PlxyXG4gICAgPGgxIGlkPXtzdHlsZXMud2N9PldlbGNvbWU8L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMudG99PnRvPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLmNoYXR9PkNoYXRpZnk8L2gxPlxyXG5cclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5yZWRpcmVjdH0+XHJcbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVkaXJzfT48YSBocmVmPVwiI2NyZWF0ZVwiPkNyZWF0ZSBhIGNoYXRyb29tPC9hPjwvaDE+XHJcbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVkaXJzfT48YSBocmVmPVwiI2pvaW5cIj5Kb2luIGEgY2hhdHJvb208L2E+PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vaG9tZXBhZ2UubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vaG9tZXBhZ2UubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2hvbWVwYWdlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODU7Il0sInNvdXJjZVJvb3QiOiIifQ==