module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/create.js":
/*!******************************!*\
  !*** ./components/create.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Create() {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function update(e) {
    setValue(e.target.value);
  }

  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to join"
  }), __jsx("button", null, "Create")));
}

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ "./components/join.js":
/*!****************************!*\
  !*** ./components/join.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Create the ChatRoom

function Join() {
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: test,
    1: setTest
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function redirect() {
    if (link === "") {
      return;
    }

    if (link.includes(" ")) {
      return;
    }

    location.assign(`/chat/${link}`);
  }

  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join
  }, __jsx("h1", null, "Join a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomj
  }, __jsx("input", {
    value: link,
    onChange: e => setLink(e.target.value),
    placeholder: "Enter a chat room to join"
  }), __jsx("button", {
    onClick: redirect
  }, "Join")));
}

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/homepage.module.css */ "./styles/homepage.module.css");
/* harmony import */ var _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create */ "./components/create.js");
/* harmony import */ var _components_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/join */ "./components/join.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Welcome, null), __jsx(_components_join__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_create__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

function Welcome() {
  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.welcome
  }, __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.wc
  }, "Welcome"), __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.to
  }, "to"), __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.chat
  }, "Chatify"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirect
  }, __jsx("h1", null, "Create a chatroom"), __jsx("h1", null, "Join a chatroom")));
}

/***/ }),

/***/ "./styles/homepage.module.css":
/*!************************************!*\
  !*** ./styles/homepage.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"welcome": "homepage_welcome__3uU06",
	"wc": "homepage_wc__2kZkv",
	"to": "homepage_to__1ptRZ",
	"chat": "homepage_chat__yf5Wx",
	"fade": "homepage_fade__3ILGj",
	"left": "homepage_left__3xBF2",
	"right": "homepage_right__K04BT",
	"top": "homepage_top__UFxG1",
	"redirect": "homepage_redirect__1dOEr",
	"join": "homepage_join__Py6xZ",
	"roomj": "homepage_roomj__WJaIv",
	"create": "homepage_create__3loQB",
	"roomc": "homepage_roomc__2Yips"
};


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shi\Desktop\Live Chat\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9qb2luLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQ3JlYXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXBkYXRlIiwiZSIsInRhcmdldCIsInN0eWxlcyIsImNyZWF0ZSIsInJvb21jIiwiSm9pbiIsImxpbmsiLCJzZXRMaW5rIiwidGVzdCIsInNldFRlc3QiLCJyZWRpcmVjdCIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJhc3NpZ24iLCJqb2luIiwicm9vbWoiLCJIb21lIiwiV2VsY29tZSIsIndlbGNvbWUiLCJ3YyIsInRvIiwiY2hhdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2QsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsV0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDZkgsWUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBVixDQUFSO0FBQ0g7O0FBR0QsU0FDRTtBQUFLLE1BQUUsRUFBRU0sa0VBQU0sQ0FBQ0M7QUFBaEIsS0FDQSxzQ0FEQSxFQUlBO0FBQUssTUFBRSxFQUFFRCxrRUFBTSxDQUFDRTtBQUFoQixLQUNJO0FBQU8sU0FBSyxFQUFFUixLQUFkO0FBQXFCLFlBQVEsRUFBRUcsTUFBL0I7QUFBdUMsZUFBVyxFQUFDO0FBQW5ELElBREosRUFFSSwrQkFGSixDQUpBLENBREY7QUFZRDs7QUFHY0oscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRjtDQUdBOztBQUNBLFNBQVNVLElBQVQsR0FBZ0I7QUFDWixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JULHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDVSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQlgsc0RBQVEsQ0FBQyxLQUFELENBQWhDOztBQUVBLFdBQVNZLFFBQVQsR0FBb0I7QUFDbEIsUUFBSUosSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZjtBQUNEOztBQUVELFFBQUlBLElBQUksQ0FBQ0ssUUFBTCxDQUFjLEdBQWQsQ0FBSixFQUF3QjtBQUN0QjtBQUNEOztBQUNEQyxZQUFRLENBQUNDLE1BQVQsQ0FBaUIsU0FBUVAsSUFBSyxFQUE5QjtBQUNEOztBQUlELFNBQ0U7QUFBSyxNQUFFLEVBQUVKLGtFQUFNLENBQUNZO0FBQWhCLEtBQ0Usb0NBREYsRUFHQTtBQUFLLE1BQUUsRUFBRVosa0VBQU0sQ0FBQ2E7QUFBaEIsS0FDRTtBQUFPLFNBQUssRUFBRVQsSUFBZDtBQUFvQixZQUFRLEVBQUdOLENBQUQsSUFBT08sT0FBTyxDQUFDUCxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBVixDQUE1QztBQUE4RCxlQUFXLEVBQUM7QUFBMUUsSUFERixFQUVFO0FBQVEsV0FBTyxFQUFFYztBQUFqQixZQUZGLENBSEEsQ0FERjtBQVdIOztBQUljTCxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUllLFNBQVNXLElBQVQsR0FBZ0I7QUFDN0IsU0FDQSxtRUFDQSxNQUFDLE9BQUQsT0FEQSxFQUVBLE1BQUMsd0RBQUQsT0FGQSxFQUdBLE1BQUMsMERBQUQsT0FIQSxDQURBO0FBT0Q7O0FBR0QsU0FBVUMsT0FBVixHQUFvQjtBQUNsQixTQUVFO0FBQUssTUFBRSxFQUFFZixrRUFBTSxDQUFDZ0I7QUFBaEIsS0FDQTtBQUFJLE1BQUUsRUFBRWhCLGtFQUFNLENBQUNpQjtBQUFmLGVBREEsRUFFQTtBQUFJLE1BQUUsRUFBRWpCLGtFQUFNLENBQUNrQjtBQUFmLFVBRkEsRUFHQTtBQUFJLE1BQUUsRUFBRWxCLGtFQUFNLENBQUNtQjtBQUFmLGVBSEEsRUFLQTtBQUFLLE1BQUUsRUFBRW5CLGtFQUFNLENBQUNRO0FBQWhCLEtBQ0Esc0NBREEsRUFFQSxvQ0FGQSxDQUxBLENBRkY7QUFjRCxDOzs7Ozs7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jcmVhdGV9PlxyXG4gICAgICA8aDE+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gIFxyXG4gIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWN9PlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3VwZGF0ZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICAgIDxidXR0b24gPkNyZWF0ZTwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENyZWF0ZSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuLy8gQ3JlYXRlIHRoZSBDaGF0Um9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICBpZiAobGluayA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2xpbmt9YClcclxuICAgIH1cclxuIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IENyZWF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGVcIlxyXG5pbXBvcnQgSm9pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qb2luXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gIChcclxuICA8PlxyXG4gIDxXZWxjb21lIC8+XHJcbiAgPEpvaW4gLz5cclxuICA8Q3JlYXRlIC8+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFdlbGNvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuIFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLndlbGNvbWV9PlxyXG4gICAgPGgxIGlkPXtzdHlsZXMud2N9PldlbGNvbWU8L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMudG99PnRvPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLmNoYXR9PkNoYXRpZnk8L2gxPlxyXG5cclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5yZWRpcmVjdH0+XHJcbiAgICA8aDE+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndlbGNvbWVcIjogXCJob21lcGFnZV93ZWxjb21lX18zdVUwNlwiLFxuXHRcIndjXCI6IFwiaG9tZXBhZ2Vfd2NfXzJrWmt2XCIsXG5cdFwidG9cIjogXCJob21lcGFnZV90b19fMXB0UlpcIixcblx0XCJjaGF0XCI6IFwiaG9tZXBhZ2VfY2hhdF9feWY1V3hcIixcblx0XCJmYWRlXCI6IFwiaG9tZXBhZ2VfZmFkZV9fM0lMR2pcIixcblx0XCJsZWZ0XCI6IFwiaG9tZXBhZ2VfbGVmdF9fM3hCRjJcIixcblx0XCJyaWdodFwiOiBcImhvbWVwYWdlX3JpZ2h0X19LMDRCVFwiLFxuXHRcInRvcFwiOiBcImhvbWVwYWdlX3RvcF9fVUZ4RzFcIixcblx0XCJyZWRpcmVjdFwiOiBcImhvbWVwYWdlX3JlZGlyZWN0X18xZE9FclwiLFxuXHRcImpvaW5cIjogXCJob21lcGFnZV9qb2luX19QeTZ4WlwiLFxuXHRcInJvb21qXCI6IFwiaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2XCIsXG5cdFwiY3JlYXRlXCI6IFwiaG9tZXBhZ2VfY3JlYXRlX18zbG9RQlwiLFxuXHRcInJvb21jXCI6IFwiaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9