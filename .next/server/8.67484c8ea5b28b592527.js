exports.ids = [8];
exports.modules = {

/***/ "T5u8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("p0XF");
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

/***/ "p0XF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "create_a_name_main__2ipRa",
	"center": "create_a_name_center__16klz"
};


/***/ })

};;