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

/***/ }),

/***/ "./styles/create_a_name.module.css":
/*!*****************************************!*\
  !*** ./styles/create_a_name.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "create_a_name_main__2ipRa",
	"center": "create_a_name_center__16klz"
};


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jcmVhdGVfYV9uYW1lLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiRW50ZXJVc2VyIiwicHJvcHMiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwidXBkYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiTG9nSW4iLCJkb2N1bWVudCIsImNvb2tpZSIsImRvbmUiLCJ1c2VybmFtZSIsIm1haW4iLCJjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDdEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7O0FBRUEsV0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDZkgsV0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0g7O0FBRUQsV0FBU0MsS0FBVCxHQUFpQjtBQUNiLFFBQUlQLElBQUksS0FBSyxFQUFiLEVBQWlCLE9BREosQ0FDVzs7QUFHeEJRLFlBQVEsQ0FBQ0MsTUFBVCxHQUFtQixZQUFXVCxJQUFLLEVBQW5DO0FBQ0FELFNBQUssQ0FBQ1csSUFBTjtBQUNIOztBQUlELFNBQ0k7QUFBSyxNQUFFLEVBQUVDLHVFQUFRLENBQUNDO0FBQWxCLEtBQ0k7QUFBSyxNQUFFLEVBQUVELHVFQUFRLENBQUNFO0FBQWxCLEtBQ0ksNkNBREosRUFFSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRWIsSUFBMUI7QUFBZ0MsZUFBVyxFQUFDLHVCQUE1QztBQUFvRSxZQUFRLEVBQUVHO0FBQTlFLElBRkosRUFHSSxpQkFISixFQUlJO0FBQVEsV0FBTyxFQUFFSTtBQUFqQixhQUpKLENBREosQ0FESjtBQWFIOztBQUVjVCx3RUFBZixFOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlcm5hbWUgZnJvbSBcIi4uL3N0eWxlcy9jcmVhdGVfYV9uYW1lLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIEVudGVyVXNlcihwcm9wcykge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xyXG4gICAgICAgIHNldFVzZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9nSW4oKSB7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IFwiXCIpIHJldHVybiAvLyBEbyBub3QgbG9nIGVtcHR5IG5hbWVzXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcm5hbWU9JHt1c2VyfWBcclxuICAgICAgICBwcm9wcy5kb25lKClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17dXNlcm5hbWUubWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyfSBwbGFjZWhvbGRlcj1cIkV4OiB4eF9NaW5lY3JhZnRlcl94eFwiIG9uQ2hhbmdlPXt1cGRhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17TG9nSW59ID5Mb2dpbjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudGVyVXNlciIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJjcmVhdGVfYV9uYW1lX21haW5fXzJpcFJhXCIsXG5cdFwiY2VudGVyXCI6IFwiY3JlYXRlX2FfbmFtZV9jZW50ZXJfXzE2a2x6XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9