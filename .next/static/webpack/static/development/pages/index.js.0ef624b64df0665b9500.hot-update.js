webpackHotUpdate("static\\development\\pages\\index.js",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzIl0sIm5hbWVzIjpbInJlZCIsInJlZGlyZWN0IiwiZGF0YSIsImxvY2F0aW9uIiwiYXNzaWduIiwiY3JlYXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBRyxHQUFHLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZDLE1BQUlBLElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFREMsVUFBUSxDQUFDQyxNQUFULGlCQUF5QkYsSUFBekI7QUFDRCxDQU5JLEMsQ0FVUDtBQUNBOztBQUNTLElBQU1HLE1BQU0sR0FBRyxTQUFTQSxNQUFULENBQWdCSCxJQUFoQixFQUFzQjtBQUN0Q0ksT0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2xEQyxVQUFNLEVBQUUsTUFEMEM7QUFFbERDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRnlDO0FBS2xEQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxVQUFJLEVBQUVWO0FBRGEsS0FBZjtBQUw0QyxHQUEvQyxDQUFMO0FBVUFDLFVBQVEsQ0FBQ0MsTUFBVCxpQkFBeUJGLElBQXpCO0FBQ0QsQ0FaRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMGVmNjI0YjY0ZGYwNjY1Yjk1MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBVcG9uIHRyeWluZyB0byBqb2luIGEgY2hhdHJvb20gaWYgaXQncyBlbXB0eSBvciBoYXMgc3BhY2VzIGRvIG5vdGhpbmcsIGVsc2VcclxuLy8gcmVkaXJlY3QgdG8gdGhlIGNoYXRyb29tIFVSTCwgaWYgdGhlIGNoYXQgcm9vbSBkb2Vzbid0IGV4aXN0IGl0IHdpbGwgYmUgaGFuZGxlZFxyXG4vLyBieSB0aGUgc2VydmVyIGFuZCByZWRpcmVjdGVkIHRvd2FyZHMgYW4gZXJyb3IgcGFnZVxyXG5leHBvcnQgY29uc3QgcmVkID0gZnVuY3Rpb24gcmVkaXJlY3QoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2F0aW9uLmFzc2lnbihgL2NoYXQvJHtkYXRhfWApXHJcbiAgfVxyXG5cclxuXHJcblxyXG4vLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB3aXRoIGRhdGEsIHRoZSBzZXJ2ZXIgdGhlbiBjcmVhdGVzIGEgY2hhdHJvb20gYmFzZWQgb25cclxuLy8gd2hhdCBuYW1lIGhhcyBiZWVuIHNlbnQgd2l0aCB0aGUgZGF0YVxyXG4gIGV4cG9ydCBjb25zdCBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoZGF0YSkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoYXRfY3JlYXRpb24vY3JlYXRlXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2RhdGF9YClcclxuICAgICAgfVxyXG4gIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9