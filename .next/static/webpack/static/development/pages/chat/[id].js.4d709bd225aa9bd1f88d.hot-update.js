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

  function sendData() {
    ws.send(val);
    setVal("");
  } // Connect to webhook upon rendering the page and add in into a state so you can access it later


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var items = []; // This saves ALL messages

    var id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    var ws = new WebSocket("ws://localhost:8080/" + id);
    ws.addEventListener("message", function (data) {
      var newItems = items.slice(0); // We create another arr, so when we set with setMessages the page will refresh

      newItems.push(data.data);
      items.push(data.data);
      setMessages(newItems);
    });
    setWs(ws);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Info, {
    messages: messages
  }), __jsx(Input, {
    value: val,
    change: change,
    log: sendData
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
  var messages = props.messages;
  var lists = messages.map(function (element) {
    return __jsx(List, {
      message: element,
      key: element.toString()
    });
  });
  console.log(messages, lists);
  return __jsx("ul", null, lists);
}

_c3 = Info;

function List(props) {
  return __jsx("li", null, props.message);
}

_c4 = List;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "Info");
$RefreshReg$(_c4, "List");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVN0YXRlIiwidmFsIiwic2V0VmFsIiwid3MiLCJzZXRXcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kRGF0YSIsInNlbmQiLCJ1c2VFZmZlY3QiLCJpdGVtcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImxlbmd0aCIsIldlYlNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwibmV3SXRlbXMiLCJzbGljZSIsInB1c2giLCJJbnB1dCIsInByb3BzIiwibG9nIiwiSW5mbyIsImxpc3RzIiwibWFwIiwiZWxlbWVudCIsInRvU3RyaW5nIiwiY29uc29sZSIsIkxpc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEaUIsTUFFVEMsRUFGUyxHQUVGRixNQUFNLENBQUNHLEtBRkwsQ0FFVEQsRUFGUzs7QUFBQSxrQkFHS0Usc0RBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdWQyxHQUhVO0FBQUEsTUFHTEMsTUFISzs7QUFBQSxtQkFJR0Ysc0RBQVEsQ0FBQyxFQUFELENBSlg7QUFBQSxNQUlWRyxFQUpVO0FBQUEsTUFJTkMsS0FKTTs7QUFBQSxtQkFLZUosc0RBQVEsQ0FBQyxFQUFELENBTHZCO0FBQUEsTUFLVkssUUFMVTtBQUFBLE1BS0FDLFdBTEE7O0FBT2pCLFdBQVNDLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2ZOLFVBQU0sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNIOztBQUVELFdBQVNDLFFBQVQsR0FBb0I7QUFDaEJSLE1BQUUsQ0FBQ1MsSUFBSCxDQUFRWCxHQUFSO0FBQ0FDLFVBQU0sQ0FBQyxFQUFELENBQU47QUFDSCxHQWRnQixDQWlCbkI7OztBQUNFVyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxLQUFLLEdBQUcsRUFBWixDQURjLENBQ0M7O0FBQ2YsUUFBSWhCLEVBQUUsR0FBR2lCLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJGLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJDLE1BQTdCLEdBQXNDLENBQW5FLENBQVQ7QUFDQSxRQUFJZixFQUFFLEdBQUksSUFBSWdCLFNBQUosQ0FBYyx5QkFBdUJyQixFQUFyQyxDQUFWO0FBQ0FLLE1BQUUsQ0FBQ2lCLGdCQUFILENBQW9CLFNBQXBCLEVBQStCLFVBQUNDLElBQUQsRUFBVTtBQUNyQyxVQUFJQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ1MsS0FBTixDQUFZLENBQVosQ0FBZixDQURxQyxDQUNOOztBQUMvQkQsY0FBUSxDQUFDRSxJQUFULENBQWNILElBQUksQ0FBQ0EsSUFBbkI7QUFDQVAsV0FBSyxDQUFDVSxJQUFOLENBQVdILElBQUksQ0FBQ0EsSUFBaEI7QUFDQWYsaUJBQVcsQ0FBQ2dCLFFBQUQsQ0FBWDtBQUNILEtBTEQ7QUFNQWxCLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQ0QsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWdCQSxTQUNDLG1FQUNHLE1BQUMsSUFBRDtBQUFNLFlBQVEsRUFBRUU7QUFBaEIsSUFESCxFQUVHLE1BQUMsS0FBRDtBQUFPLFNBQUssRUFBRUosR0FBZDtBQUFtQixVQUFNLEVBQUVNLE1BQTNCO0FBQW1DLE9BQUcsRUFBRUk7QUFBeEMsSUFGSCxDQUREO0FBTUQsQ0F4Q0QsQyxDQTBDQTs7O0dBMUNNaEIsSTtVQUNXRSxxRDs7O0tBRFhGLEk7O0FBMkNOLFNBQVM4QixLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDbEIsU0FDSSxtQkFDSTtBQUFPLFNBQUssRUFBRUEsS0FBSyxDQUFDaEIsS0FBcEI7QUFBMkIsWUFBUSxFQUFFZ0IsS0FBSyxDQUFDbkI7QUFBM0MsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFbUIsS0FBSyxDQUFDQztBQUF2QiwwQkFGSixDQURKO0FBTUgsQyxDQUdEOzs7TUFWU0YsSzs7QUFXVCxTQUFTRyxJQUFULENBQWNGLEtBQWQsRUFBcUI7QUFDakIsTUFBSXJCLFFBQVEsR0FBR3FCLEtBQUssQ0FBQ3JCLFFBQXJCO0FBRUEsTUFBSXdCLEtBQUssR0FBR3hCLFFBQVEsQ0FBQ3lCLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDbkMsV0FBTyxNQUFDLElBQUQ7QUFBTSxhQUFPLEVBQUVBLE9BQWY7QUFBd0IsU0FBRyxFQUFFQSxPQUFPLENBQUNDLFFBQVI7QUFBN0IsTUFBUDtBQUNGLEdBRlcsQ0FBWjtBQUdBQyxTQUFPLENBQUNOLEdBQVIsQ0FBWXRCLFFBQVosRUFBc0J3QixLQUF0QjtBQUNBLFNBQ0Esa0JBQ0NBLEtBREQsQ0FEQTtBQUtDOztNQVpJRCxJOztBQWNULFNBQVNNLElBQVQsQ0FBY1IsS0FBZCxFQUFxQjtBQUNqQixTQUFPLGtCQUFLQSxLQUFLLENBQUNTLE9BQVgsQ0FBUDtBQUNIOztNQUZRRCxJO0FBTU12QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcy40ZDcwOWJkMjI1YWE5YmQxZjg4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbd3MsIHNldFdzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgc2V0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VuZERhdGEoKSB7XHJcbiAgICAgIHdzLnNlbmQodmFsKVxyXG4gICAgICBzZXRWYWwoXCJcIilcclxuICB9XHJcblxyXG5cclxuLy8gQ29ubmVjdCB0byB3ZWJob29rIHVwb24gcmVuZGVyaW5nIHRoZSBwYWdlIGFuZCBhZGQgaW4gaW50byBhIHN0YXRlIHNvIHlvdSBjYW4gYWNjZXNzIGl0IGxhdGVyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IHdzID0gIG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL1wiK2lkKTtcclxuICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpIC8vIFdlIGNyZWF0ZSBhbm90aGVyIGFyciwgc28gd2hlbiB3ZSBzZXQgd2l0aCBzZXRNZXNzYWdlcyB0aGUgcGFnZSB3aWxsIHJlZnJlc2hcclxuICAgICAgICBuZXdJdGVtcy5wdXNoKGRhdGEuZGF0YSlcclxuICAgICAgICBpdGVtcy5wdXNoKGRhdGEuZGF0YSlcclxuICAgICAgICBzZXRNZXNzYWdlcyhuZXdJdGVtcylcclxuICAgIH0pXHJcbiAgICBzZXRXcyh3cylcclxuICB9LCBbXSlcclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgPD5cclxuICAgICAgPEluZm8gbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgIDxJbnB1dCB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+Q2xpY2sgbWUgdG8gY2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBSZW5kZXIgYWxsIG1lc3NhZ2VzXHJcbmZ1bmN0aW9uIEluZm8ocHJvcHMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IHByb3BzLm1lc3NhZ2VzXHJcbiAgICBcclxuICAgIGxldCBsaXN0cyA9IG1lc3NhZ2VzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgcmV0dXJuIDxMaXN0IG1lc3NhZ2U9e2VsZW1lbnR9IGtleT17ZWxlbWVudC50b1N0cmluZygpfS8+XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsIGxpc3RzKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgIHtsaXN0c31cclxuICAgIDwvdWw+XHJcbiAgICApXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGxpPntwcm9wcy5tZXNzYWdlfTwvbGk+XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=