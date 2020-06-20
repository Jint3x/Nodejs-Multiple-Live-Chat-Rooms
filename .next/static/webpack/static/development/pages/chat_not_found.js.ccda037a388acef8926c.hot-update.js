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
// Upon trying to join a chatroom if it's empty or has spaces do nothing, else
// redirect to the chatroom URL, if the chat room doesn't exist it will be handled
// by the server and redirected towards an error page
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzIl0sIm5hbWVzIjpbInJlZCIsInJlZGlyZWN0IiwiZGF0YSIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJhc3NpZ24iLCJjcmVhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUFHLEdBQUcsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkMsTUFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZjtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQ0MsUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QjtBQUNEOztBQUNEQyxVQUFRLENBQUNDLE1BQVQsaUJBQXlCSCxJQUF6QjtBQUNELENBVEksQyxDQWFQO0FBQ0E7O0FBQ1MsSUFBTUksTUFBTSxHQUFHLFNBQVNBLE1BQVQsQ0FBZ0JKLElBQWhCLEVBQXNCO0FBQ3RDSyxPQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDbERDLFVBQU0sRUFBRSxNQUQwQztBQUVsREMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGeUM7QUFLbERDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFVBQUksRUFBRVg7QUFEYSxLQUFmO0FBTDRDLEdBQS9DLENBQUw7QUFTRCxDQVZFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0X25vdF9mb3VuZC5qcy5jY2RhMDM3YTM4OGFjZWY4OTI2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIFVwb24gdHJ5aW5nIHRvIGpvaW4gYSBjaGF0cm9vbSBpZiBpdCdzIGVtcHR5IG9yIGhhcyBzcGFjZXMgZG8gbm90aGluZywgZWxzZVxyXG4vLyByZWRpcmVjdCB0byB0aGUgY2hhdHJvb20gVVJMLCBpZiB0aGUgY2hhdCByb29tIGRvZXNuJ3QgZXhpc3QgaXQgd2lsbCBiZSBoYW5kbGVkXHJcbi8vIGJ5IHRoZSBzZXJ2ZXIgYW5kIHJlZGlyZWN0ZWQgdG93YXJkcyBhbiBlcnJvciBwYWdlXHJcbmV4cG9ydCBjb25zdCByZWQgPSBmdW5jdGlvbiByZWRpcmVjdChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2RhdGF9YClcclxuICB9XHJcblxyXG5cclxuXHJcbi8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyIHdpdGggZGF0YSwgdGhlIHNlcnZlciB0aGVuIGNyZWF0ZXMgYSBjaGF0cm9vbSBiYXNlZCBvblxyXG4vLyB3aGF0IG5hbWUgaGFzIGJlZW4gc2VudCB3aXRoIHRoZSBkYXRhXHJcbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hhdF9jcmVhdGlvbi9jcmVhdGVcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=