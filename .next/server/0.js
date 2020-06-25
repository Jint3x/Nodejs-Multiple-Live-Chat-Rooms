exports.ids = [0];
exports.modules = {

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/create_a_name.module.css */ "./styles/create_a_name.module.css");
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function EnterUser(props) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function update(e) {
    setUser(e.target.value);
  }

  function LogIn() {
    if (user === "") return; // Do not log empty names

    document.cookie = `username=${user}`;
    props.done();
  }

  return __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main
  }, __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.center
  }, __jsx("h1", null, "Please login to continue"), __jsx("input", {
    type: "text",
    value: user,
    placeholder: "Ex: xx_Minecrafter_xx",
    onChange: update
  }), __jsx("br", null), __jsx("button", {
    onClick: LogIn
  }, "Login")));
}

/* harmony default export */ __webpack_exports__["default"] = (EnterUser);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkVudGVyVXNlciIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkxvZ0luIiwiZG9jdW1lbnQiLCJjb29raWUiLCJkb25lIiwidXNlcm5hbWUiLCJtYWluIiwiY2VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFdBQVNDLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2ZILFdBQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNIOztBQUVELFdBQVNDLEtBQVQsR0FBaUI7QUFDYixRQUFJUCxJQUFJLEtBQUssRUFBYixFQUFpQixPQURKLENBQ1c7O0FBR3hCUSxZQUFRLENBQUNDLE1BQVQsR0FBbUIsWUFBV1QsSUFBSyxFQUFuQztBQUNBRCxTQUFLLENBQUNXLElBQU47QUFDSDs7QUFJRCxTQUNJO0FBQUssTUFBRSxFQUFFQyx1RUFBUSxDQUFDQztBQUFsQixLQUNJO0FBQUssTUFBRSxFQUFFRCx1RUFBUSxDQUFDRTtBQUFsQixLQUNJLDZDQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUViLElBQTFCO0FBQWdDLGVBQVcsRUFBQyx1QkFBNUM7QUFBb0UsWUFBUSxFQUFFRztBQUE5RSxJQUZKLEVBR0ksaUJBSEosRUFJSTtBQUFRLFdBQU8sRUFBRUk7QUFBakIsYUFKSixDQURKLENBREo7QUFhSDs7QUFFY1Qsd0VBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZXJuYW1lIGZyb20gXCIuLi9zdHlsZXMvY3JlYXRlX2FfbmFtZS5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBFbnRlclVzZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKGUpIHtcclxuICAgICAgICBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvZ0luKCkge1xyXG4gICAgICAgIGlmICh1c2VyID09PSBcIlwiKSByZXR1cm4gLy8gRG8gbm90IGxvZyBlbXB0eSBuYW1lc1xyXG5cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHVzZXJuYW1lPSR7dXNlcn1gXHJcbiAgICAgICAgcHJvcHMuZG9uZSgpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt1c2VybmFtZS5jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcn0gcGxhY2Vob2xkZXI9XCJFeDogeHhfTWluZWNyYWZ0ZXJfeHhcIiBvbkNoYW5nZT17dXBkYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0xvZ0lufSA+TG9naW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRlclVzZXIiXSwic291cmNlUm9vdCI6IiJ9