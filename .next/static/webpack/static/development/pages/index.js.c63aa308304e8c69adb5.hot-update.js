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
    id: "join"
  }, __jsx("h1", null, "Join a chatroom"), __jsx("div", {
    id: "roomj"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiXSwibmFtZXMiOlsiSm9pbiIsInVzZVN0YXRlIiwibGluayIsInNldExpbmsiLCJ0ZXN0Iiwic2V0VGVzdCIsInJlZGlyZWN0IiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsImFzc2lnbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FJQTs7QUFDQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ0xDLElBREs7QUFBQSxNQUNDQyxPQUREOztBQUFBLG1CQUVZRixzREFBUSxDQUFDLEtBQUQsQ0FGcEI7QUFBQSxNQUVMRyxJQUZLO0FBQUEsTUFFQ0MsT0FGRDs7QUFJWixXQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFFBQUlKLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRCxRQUFJQSxJQUFJLENBQUNLLFFBQUwsQ0FBYyxHQUFkLENBQUosRUFBd0I7QUFDdEI7QUFDRDs7QUFDREMsWUFBUSxDQUFDQyxNQUFULGlCQUF5QlAsSUFBekI7QUFDRDs7QUFJRCxTQUNFO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRSxvQ0FERixFQUdBO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRTtBQUFPLFNBQUssRUFBRUEsSUFBZDtBQUFvQixZQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxhQUFPUCxPQUFPLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUE5QjtBQUE4RCxlQUFXLEVBQUM7QUFBMUUsSUFERixFQUVFO0FBQVEsV0FBTyxFQUFFTjtBQUFqQixZQUZGLENBSEEsQ0FERjtBQVdIOztHQTVCUU4sSTs7S0FBQUEsSTtBQWdDTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM2M2FhMzA4MzA0ZThjNjlhZGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBDaGF0Um9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICBpZiAobGluayA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2xpbmt9YClcclxuICAgIH1cclxuIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiam9pblwiPlxyXG4gICAgICAgIDxoMT5Kb2luIGEgY2hhdHJvb208L2gxPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBpZD1cInJvb21qXCI+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGpvaW5cIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVkaXJlY3R9PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luIl0sInNvdXJjZVJvb3QiOiIifQ==