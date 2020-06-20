webpackHotUpdate("static\\development\\pages\\chat_not_found.js",{

/***/ "./pages/chat_not_found.js":
/*!*********************************!*\
  !*** ./pages/chat_not_found.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/missing_room.module.css */ "./styles/missing_room.module.css");
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Create_Join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join */ "./components/Create_Join.js");
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Missing() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.missing
  }, __jsx("img", {
    src: "https://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png"
  }), __jsx("h1", null, "We are sorry but the room you tried to enter doesn't exist!")), __jsx(Create, null));
}

_c = Missing;

function Create() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      reg = _useState[0],
      setReg = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      join = _useState2[0],
      setJoin = _useState2[1];

  function roomCreate() {
    Object(_components_Create_Join__WEBPACK_IMPORTED_MODULE_2__["create"])(reg);
  }

  function roomJoin() {
    Object(_components_Create_Join__WEBPACK_IMPORTED_MODULE_2__["red"])(join);
  }

  return __jsx("div", {
    id: _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create
  }, __jsx("div", null, __jsx("input", {
    value: reg,
    onChange: function onChange(e) {
      return setReg(e.target.value);
    },
    placeholder: "Create a chat room"
  }), __jsx("button", {
    onClick: roomCreate
  }, "Create")), __jsx("div", null, __jsx("input", {
    value: join,
    onChange: function onChange(e) {
      return setJoin(e.target.value);
    },
    placeholder: "Join a chat room"
  }), __jsx("button", {
    onClick: roomJoin
  }, "Join")));
}

_s(Create, "4T+ifFt0KFHoMn41tQxQO3+BWNE=");

_c2 = Create;
/* harmony default export */ __webpack_exports__["default"] = (Missing);

var _c, _c2;

$RefreshReg$(_c, "Missing");
$RefreshReg$(_c2, "Create");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0X25vdF9mb3VuZC5qcyJdLCJuYW1lcyI6WyJNaXNzaW5nIiwic3R5bGVzIiwibWlzc2luZyIsIkNyZWF0ZSIsInVzZVN0YXRlIiwicmVnIiwic2V0UmVnIiwiam9pbiIsInNldEpvaW4iLCJyb29tQ3JlYXRlIiwiY3JlYXRlIiwicm9vbUpvaW4iLCJyZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsR0FBbUI7QUFDZixTQUNJLG1FQUNBO0FBQUssTUFBRSxFQUFFQyxzRUFBTSxDQUFDQztBQUFoQixLQUNJO0FBQUssT0FBRyxFQUFDO0FBQVQsSUFESixFQUVJLGdGQUZKLENBREEsRUFLQSxNQUFDLE1BQUQsT0FMQSxDQURKO0FBU0g7O0tBVlFGLE87O0FBWVQsU0FBU0csTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNQQyxHQURPO0FBQUEsTUFDRkMsTUFERTs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFUEcsSUFGTztBQUFBLE1BRURDLE9BRkM7O0FBSWQsV0FBU0MsVUFBVCxHQUFzQjtBQUNsQkMsMEVBQU0sQ0FBQ0wsR0FBRCxDQUFOO0FBQ0g7O0FBRUQsV0FBU00sUUFBVCxHQUFvQjtBQUNoQkMsdUVBQUcsQ0FBQ0wsSUFBRCxDQUFIO0FBQ0g7O0FBR0QsU0FDSTtBQUFLLE1BQUUsRUFBRU4sc0VBQU0sQ0FBQ1M7QUFBaEIsS0FDRSxtQkFDSTtBQUFPLFNBQUssRUFBRUwsR0FBZDtBQUFtQixZQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxhQUFPUCxNQUFNLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxLQUE3QjtBQUE0RCxlQUFXLEVBQUM7QUFBeEUsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFTjtBQUFqQixjQUZKLENBREYsRUFNRSxtQkFDQTtBQUFPLFNBQUssRUFBRUYsSUFBZDtBQUFvQixZQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSxhQUFPTCxPQUFPLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUE5QjtBQUE4RCxlQUFXLEVBQUM7QUFBMUUsSUFEQSxFQUVJO0FBQVEsV0FBTyxFQUFFSjtBQUFqQixZQUZKLENBTkYsQ0FESjtBQWNIOztHQTNCUVIsTTs7TUFBQUEsTTtBQStCTUgsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRfbm90X2ZvdW5kLmpzLjYzYzJlYzEwYzgwMGJiYzY0YmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbWlzc2luZ19yb29tLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBjcmVhdGUsIHJlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIE1pc3NpbmcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1pc3Npbmd9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNsa2VyLmNvbS9jbGlwYXJ0cy9iLzMvNy85LzEyMDY1NzM4NjI0NDg3MzQyNTBBcm5vdWQ5OTlfUmlnaHRfb3Jfd3JvbmdfMy5zdmcubWVkLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8aDE+V2UgYXJlIHNvcnJ5IGJ1dCB0aGUgcm9vbSB5b3UgdHJpZWQgdG8gZW50ZXIgZG9lc24ndCBleGlzdCE8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDcmVhdGUgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG4gICAgY29uc3QgW3JlZywgc2V0UmVnXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbam9pbiwgc2V0Sm9pbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvb21DcmVhdGUoKSB7XHJcbiAgICAgICAgY3JlYXRlKHJlZylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb29tSm9pbigpIHtcclxuICAgICAgICByZWQoam9pbilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY3JlYXRlfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtyZWd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVnKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJDcmVhdGUgYSBjaGF0IHJvb21cIi8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyb29tQ3JlYXRlfT5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e2pvaW59IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Sm9pbihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiSm9pbiBhIGNoYXQgcm9vbVwiLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jvb21Kb2lufT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZyJdLCJzb3VyY2VSb290IjoiIn0=