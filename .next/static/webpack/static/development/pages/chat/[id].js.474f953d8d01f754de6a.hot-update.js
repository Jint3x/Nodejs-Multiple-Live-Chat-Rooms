webpackHotUpdate("static\\development\\pages\\chat\\[id].js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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

  console.log(messages); // Connect to webhook upon rendering the page and add in into a state so you can access it later

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var items = [];
    var id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    var ws = new WebSocket("ws://localhost:8080/" + id);
    ws.addEventListener("message", function (data) {
      items.push(data.data);
      console.log(items);
      setMessages(items);
    });
    setWs(ws);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Info, {
    messages: messages
  }), __jsx(Input, {
    value: val,
    change: change,
    log: send
  }));
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
} // Render all messages


_c2 = Input;

function Info(props) {
  return __jsx("h1", null, props.messages);
}

_c3 = Info;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "Info");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwidmFsIiwic2V0VmFsIiwid3MiLCJzZXRXcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIml0ZW1zIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwibGVuZ3RoIiwiV2ViU29ja2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJwdXNoIiwiSW5wdXQiLCJwcm9wcyIsIkluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURpQixNQUVUQyxFQUZTLEdBRUZGLE1BQU0sQ0FBQ0csS0FGTCxDQUVURCxFQUZTOztBQUFBLGtCQUdLRSxzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBLE1BR1ZDLEdBSFU7QUFBQSxNQUdMQyxNQUhLOztBQUFBLG1CQUlHRixzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSVZHLEVBSlU7QUFBQSxNQUlOQyxLQUpNOztBQUFBLG1CQUtlSixzREFBUSxDQUFDLEVBQUQsQ0FMdkI7QUFBQSxNQUtWSyxRQUxVO0FBQUEsTUFLQUMsV0FMQTs7QUFPakIsV0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDZk4sVUFBTSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFOO0FBQ0g7O0FBRUQsV0FBU0MsSUFBVCxHQUFnQjtBQUNaUixNQUFFLENBQUNRLElBQUgsQ0FBUVYsR0FBUjtBQUNIOztBQUVEVyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWixFQWZpQixDQW1CbkI7O0FBQ0VTLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSWpCLEVBQUUsR0FBR2tCLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJGLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLE1BQTdCLEdBQXNDLENBQW5FLENBQVQ7QUFDQSxRQUFJaEIsRUFBRSxHQUFJLElBQUlpQixTQUFKLENBQWMseUJBQXVCdEIsRUFBckMsQ0FBVjtBQUNBSyxNQUFFLENBQUNrQixnQkFBSCxDQUFvQixTQUFwQixFQUErQixVQUFDQyxJQUFELEVBQVU7QUFDckNQLFdBQUssQ0FBQ1EsSUFBTixDQUFXRCxJQUFJLENBQUNBLElBQWhCO0FBQ0FWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0FULGlCQUFXLENBQUNTLEtBQUQsQ0FBWDtBQUNILEtBSkQ7QUFLQVgsU0FBSyxDQUFDRCxFQUFELENBQUw7QUFDRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBZUEsU0FDQyxtRUFDRyxNQUFDLElBQUQ7QUFBTSxZQUFRLEVBQUVFO0FBQWhCLElBREgsRUFFRyxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUVKLEdBQWQ7QUFBbUIsVUFBTSxFQUFFTSxNQUEzQjtBQUFtQyxPQUFHLEVBQUVJO0FBQXhDLElBRkgsQ0FERDtBQU1ELENBekNELEMsQ0EyQ0E7OztHQTNDTWhCLEk7VUFDV0UscUQ7OztLQURYRixJOztBQTRDTixTQUFTNkIsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ2xCLFNBQ0ksbUJBQ0k7QUFBTyxTQUFLLEVBQUVBLEtBQUssQ0FBQ2YsS0FBcEI7QUFBMkIsWUFBUSxFQUFFZSxLQUFLLENBQUNsQjtBQUEzQyxJQURKLEVBRUk7QUFBUSxXQUFPLEVBQUVrQixLQUFLLENBQUNaO0FBQXZCLDBCQUZKLENBREo7QUFNSCxDLENBR0Q7OztNQVZTVyxLOztBQVdULFNBQVNFLElBQVQsQ0FBY0QsS0FBZCxFQUFxQjtBQUNyQixTQUFPLGtCQUFLQSxLQUFLLENBQUNwQixRQUFYLENBQVA7QUFDQzs7TUFGUXFCLEk7QUFJTS9CLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLjQ3NGY5NTNkOGQwMWY3NTRkZTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2UoZSkge1xyXG4gICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZW5kKCkge1xyXG4gICAgICB3cy5zZW5kKHZhbClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzKVxyXG5cclxuICBcclxuXHJcbi8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZSBhbmQgYWRkIGluIGludG8gYSBzdGF0ZSBzbyB5b3UgY2FuIGFjY2VzcyBpdCBsYXRlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXRlbXMgPSBbXVxyXG4gICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goZGF0YS5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKGl0ZW1zKVxyXG4gICAgfSlcclxuICAgIHNldFdzKHdzKVxyXG4gIH0sIFtdKVxyXG5cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICA8PlxyXG4gICAgICA8SW5mbyBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgPElucHV0IHZhbHVlPXt2YWx9IGNoYW5nZT17Y2hhbmdlfSBsb2c9e3NlbmR9IC8+XHJcbiAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gUmVuZGVyIHRoZSBpbnB1dCBhbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuZnVuY3Rpb24gSW5wdXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PkNsaWNrIG1lIHRvIGNoYW5nZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gUmVuZGVyIGFsbCBtZXNzYWdlc1xyXG5mdW5jdGlvbiBJbmZvKHByb3BzKSB7XHJcbnJldHVybiA8aDE+e3Byb3BzLm1lc3NhZ2VzfTwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9