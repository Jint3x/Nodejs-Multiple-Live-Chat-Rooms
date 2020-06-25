webpackHotUpdate(1,{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function EnterUser(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState[0],
      setUser = _useState[1];

  function update(e) {
    setUser(e.target.value);
  }

  function LogIn() {
    if (user === "") return; // Do not log empty names

    document.cookie = "username=".concat(user);
    props.done();
  }

  return __jsx("div", {
    id: username.main
  }, __jsx("div", {
    id: username.center
  }, __jsx("h1", null, "Please login to continue"), __jsx("input", {
    type: "text",
    value: user,
    placeholder: "Ex: xx_Minecrafter_xx",
    onChange: update
  }), __jsx("br", null), __jsx("button", {
    onClick: LogIn
  }, "Login")));
}

_s(EnterUser, "O8A1O7ueRI69RLawqs90Wgk1R68=");

_c = EnterUser;
/* harmony default export */ __webpack_exports__["default"] = (EnterUser);

var _c;

$RefreshReg$(_c, "EnterUser");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkVudGVyVXNlciIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkxvZ0luIiwiZG9jdW1lbnQiLCJjb29raWUiLCJkb25lIiwidXNlcm5hbWUiLCJtYWluIiwiY2VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBR3RCLFdBQVNDLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2ZGLFdBQU8sQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNIOztBQUVELFdBQVNDLEtBQVQsR0FBaUI7QUFDYixRQUFJTixJQUFJLEtBQUssRUFBYixFQUFpQixPQURKLENBQ1c7O0FBR3hCTyxZQUFRLENBQUNDLE1BQVQsc0JBQThCUixJQUE5QjtBQUNBRixTQUFLLENBQUNXLElBQU47QUFDSDs7QUFJRCxTQUNJO0FBQUssTUFBRSxFQUFFQyxRQUFRLENBQUNDO0FBQWxCLEtBQ0k7QUFBSyxNQUFFLEVBQUVELFFBQVEsQ0FBQ0U7QUFBbEIsS0FDSSw2Q0FESixFQUVJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFWixJQUExQjtBQUFnQyxlQUFXLEVBQUMsdUJBQTVDO0FBQW9FLFlBQVEsRUFBRUU7QUFBOUUsSUFGSixFQUdJLGlCQUhKLEVBSUk7QUFBUSxXQUFPLEVBQUVJO0FBQWpCLGFBSkosQ0FESixDQURKO0FBYUg7O0dBOUJRVCxTOztLQUFBQSxTO0FBZ0NNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjdlMWNhYjA0NzgwMzVkZjViMmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVudGVyVXNlcihwcm9wcykge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xyXG4gICAgICAgIHNldFVzZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9nSW4oKSB7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IFwiXCIpIHJldHVybiAvLyBEbyBub3QgbG9nIGVtcHR5IG5hbWVzXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcm5hbWU9JHt1c2VyfWBcclxuICAgICAgICBwcm9wcy5kb25lKClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17dXNlcm5hbWUubWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyfSBwbGFjZWhvbGRlcj1cIkV4OiB4eF9NaW5lY3JhZnRlcl94eFwiIG9uQ2hhbmdlPXt1cGRhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17TG9nSW59ID5Mb2dpbjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGVyVXNlciJdLCJzb3VyY2VSb290IjoiIn0=