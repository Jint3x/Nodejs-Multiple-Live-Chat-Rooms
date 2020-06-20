webpackHotUpdate("static\\development\\pages\\chat_not_found.js",{

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
var red = function redirect(data) {
  if (data === "") {
    return;
  }

  if (data.includes(" ")) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzIl0sIm5hbWVzIjpbInJlZCIsInJlZGlyZWN0IiwiZGF0YSIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJhc3NpZ24iLCJjcmVhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkMsTUFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZjtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQ0MsUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QjtBQUNEOztBQUNEQyxVQUFRLENBQUNDLE1BQVQsaUJBQXlCSCxJQUF6QjtBQUNELENBVEksQyxDQWFQO0FBQ0E7O0FBQ1MsSUFBTUksTUFBTSxHQUFHLFNBQVNBLE1BQVQsQ0FBZ0JKLElBQWhCLEVBQXNCO0FBQ3RDSyxPQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDbERDLFVBQU0sRUFBRSxNQUQwQztBQUVsREMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGeUM7QUFLbERDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFVBQUksRUFBRVg7QUFEYSxLQUFmO0FBTDRDLEdBQS9DLENBQUw7QUFTRCxDQVZFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0X25vdF9mb3VuZC5qcy42Mzc5NDc5Y2QwMmIzZDkzZDY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlZCA9IGZ1bmN0aW9uIHJlZGlyZWN0KGRhdGEpIHtcclxuICAgIGlmIChkYXRhID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS5pbmNsdWRlcyhcIiBcIikpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7ZGF0YX1gKVxyXG4gIH1cclxuXHJcblxyXG5cclxuLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCBkYXRhLCB0aGUgc2VydmVyIHRoZW4gY3JlYXRlcyBhIGNoYXRyb29tIGJhc2VkIG9uXHJcbi8vIHdoYXQgbmFtZSBoYXMgYmVlbiBzZW50IHdpdGggdGhlIGRhdGFcclxuICBleHBvcnQgY29uc3QgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGRhdGEpIHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGF0X2NyZWF0aW9uL2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==