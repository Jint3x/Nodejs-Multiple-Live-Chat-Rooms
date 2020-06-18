webpackHotUpdate("static\\development\\pages\\chat\\[id].js",{

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Post = function Post() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      val = _useState[0],
      setVal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      ws = _useState2[0],
      setWs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState3[0],
      setMessages = _useState3[1];

  function change(e) {
    setVal(e.target.value);
  }

  function send() {
    ws.send(val);
  }

  console.log(messages); // Connect to webhook upon rendering the page

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    var ws = new WebSocket("ws://localhost:8080/" + id);
    ws.addEventListener("message", function (data) {
      console.log(data);
      setMessages(messages.push(data.body));
    });
    setWs(ws);
  }, []);
  return __jsx(Input, {
    value: val,
    change: change,
    log: send
  });
}; // Render the input and the submit button


_s(Post, "S03GG14uHiBiC0K3EeYK2wU2q/0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;

function Input(props) {
  return __jsx("div", null, __jsx("input", {
    value: props.value,
    onChange: props.change
  }), __jsx("button", {
    onClick: props.log
  }, "Click me to change"));
}

_c2 = Input;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Input");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwidmFsIiwic2V0VmFsIiwid3MiLCJzZXRXcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImxlbmd0aCIsIldlYlNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwicHVzaCIsImJvZHkiLCJJbnB1dCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUIsTUFFVEMsRUFGUyxHQUVGRixNQUFNLENBQUNHLEtBRkwsQ0FFVEQsRUFGUzs7QUFBQSxrQkFHS0Usc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdWQyxHQUhVO0FBQUEsTUFHTEMsTUFISzs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxFQUFELENBSlg7QUFBQSxNQUlWRyxFQUpVO0FBQUEsTUFJTkMsS0FKTTs7QUFBQSxtQkFLZUosc0RBQVEsQ0FBQyxFQUFELENBTHZCO0FBQUEsTUFLVkssUUFMVTtBQUFBLE1BS0FDLFdBTEE7O0FBT2pCLFdBQVNDLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2ZOLFVBQU0sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNIOztBQUVELFdBQVNDLElBQVQsR0FBZ0I7QUFDWlIsTUFBRSxDQUFDUSxJQUFILENBQVFWLEdBQVI7QUFDSDs7QUFFRFcsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVosRUFmaUIsQ0FtQm5COztBQUNFUyx5REFBUyxDQUFDLFlBQU07QUFFZCxRQUFJaEIsRUFBRSxHQUFHaUIsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QkYsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxLQUFsQixDQUF3QixHQUF4QixFQUE2QkMsTUFBN0IsR0FBc0MsQ0FBbkUsQ0FBVDtBQUNBLFFBQUlmLEVBQUUsR0FBSSxJQUFJZ0IsU0FBSixDQUFjLHlCQUF1QnJCLEVBQXJDLENBQVY7QUFDQUssTUFBRSxDQUFDaUIsZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JDVCxhQUFPLENBQUNDLEdBQVIsQ0FBWVEsSUFBWjtBQUNBZixpQkFBVyxDQUFDRCxRQUFRLENBQUNpQixJQUFULENBQWNELElBQUksQ0FBQ0UsSUFBbkIsQ0FBRCxDQUFYO0FBQ0gsS0FIRDtBQUlBbkIsU0FBSyxDQUFDRCxFQUFELENBQUw7QUFDRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBY0EsU0FBTyxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUVGLEdBQWQ7QUFBbUIsVUFBTSxFQUFFTSxNQUEzQjtBQUFtQyxPQUFHLEVBQUVJO0FBQXhDLElBQVA7QUFDRCxDQW5DRCxDLENBcUNBOzs7R0FyQ01oQixJO1VBQ1dFLHFEOzs7S0FEWEYsSTs7QUFzQ04sU0FBUzZCLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNsQixTQUNJLG1CQUNJO0FBQU8sU0FBSyxFQUFFQSxLQUFLLENBQUNmLEtBQXBCO0FBQTJCLFlBQVEsRUFBRWUsS0FBSyxDQUFDbEI7QUFBM0MsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFa0IsS0FBSyxDQUFDWjtBQUF2QiwwQkFGSixDQURKO0FBTUg7O01BUFFXLEs7QUFTTTdCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLjVhNzhmYjI4ZmFmODhjMWEyYjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2UoZSkge1xyXG4gICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZW5kKCkge1xyXG4gICAgICB3cy5zZW5kKHZhbClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzKVxyXG5cclxuICBcclxuXHJcbi8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgd3MgPSAgbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvXCIraWQpO1xyXG4gICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzLnB1c2goZGF0YS5ib2R5KSlcclxuICAgIH0pXHJcbiAgICBzZXRXcyh3cylcclxuICB9LCBbXSlcclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIDxJbnB1dCB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kfSAvPlxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+Q2xpY2sgbWUgdG8gY2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9