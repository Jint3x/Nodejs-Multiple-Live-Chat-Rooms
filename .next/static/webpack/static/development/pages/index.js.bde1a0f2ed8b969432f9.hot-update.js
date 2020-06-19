webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsInVzZVN0YXRlIiwibGluayIsInNldExpbmsiLCJ0ZXN0Iiwic2V0VGVzdCIsInJlZGlyZWN0IiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsImFzc2lnbiIsInN0eWxlcyIsImpvaW4iLCJyb29taiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNMQyxJQURLO0FBQUEsTUFDQ0MsT0FERDs7QUFBQSxtQkFFWUYsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFTEcsSUFGSztBQUFBLE1BRUNDLE9BRkQ7O0FBSVosV0FBU0MsUUFBVCxHQUFvQjtBQUNsQixRQUFJSixJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsUUFBSUEsSUFBSSxDQUFDSyxRQUFMLENBQWMsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBQ0RDLFlBQVEsQ0FBQ0MsTUFBVCxpQkFBeUJQLElBQXpCO0FBQ0Q7O0FBSUQsU0FDRTtBQUFLLE1BQUUsRUFBRVEsa0VBQU0sQ0FBQ0M7QUFBaEIsS0FDRSxvQ0FERixFQUdBO0FBQUssTUFBRSxFQUFFRCxrRUFBTSxDQUFDRTtBQUFoQixLQUNFO0FBQU8sU0FBSyxFQUFFVixJQUFkO0FBQW9CLFlBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGFBQU9WLE9BQU8sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBQTlCO0FBQThELGVBQVcsRUFBQztBQUExRSxJQURGLEVBRUU7QUFBUSxXQUFPLEVBQUVUO0FBQWpCLFlBRkYsQ0FIQSxDQURGO0FBV0g7O0dBNUJRTixJOztLQUFBQSxJO0FBZ0NNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmRlMWEwZjJlZDhiOTY5NDMyZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuLy8gQ3JlYXRlIHRoZSBDaGF0Um9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICBpZiAobGluayA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2xpbmt9YClcclxuICAgIH1cclxuIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiJdLCJzb3VyY2VSb290IjoiIn0=