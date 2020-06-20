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

/***/ "./components/Create_Join.js":
/*!***********************************!*\
  !*** ./components/Create_Join.js ***!
  \***********************************/
/*! exports provided: red, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
// Upon trying to join a chatroom if it's empty do nothing, else
// redirect to the chatroom URL, if the chat room doesn't exist it will be handled
// by the server and redirected towards an error page
const red = function redirect(data) {
  if (data === "") {
    return;
  }

  location.assign(`/chat/${data}`);
}; // Send request to the server with data, the server then creates a chatroom based on
// what name has been sent with the data

const create = function create(data) {
  fetch("http://localhost:3000/chat_creation/create", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data
    })
  });
  location.assign(`/chat/${data}`);
};

/***/ }),

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
/* harmony import */ var _components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join.js */ "./components/Create_Join.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Create() {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function update(e) {
    setValue(e.target.value);
  }

  function createRoom() {
    Object(_components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__["create"])(value);
  }

  return __jsx("div", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create,
    id: "create"
  }, __jsx("h1", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join
  }, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to join"
  }), __jsx("button", {
    onClick: createRoom
  }, "Create")));
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
/* harmony import */ var _components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join.js */ "./components/Create_Join.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Create the ChatRoom

function Join() {
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function redirect() {
    Object(_components_Create_Join_js__WEBPACK_IMPORTED_MODULE_2__["red"])(link);
  }

  return __jsx("div", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.join,
    id: "#join"
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
  }, __jsx("h1", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirs
  }, __jsx("a", {
    href: "#create"
  }, "Create a chatroom")), __jsx("h1", {
    className: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.redirs
  }, __jsx("a", {
    href: "#join"
  }, "Join a chatroom"))));
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
	"redirs": "homepage_redirs__Az5uI",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJyZWQiLCJyZWRpcmVjdCIsImRhdGEiLCJsb2NhdGlvbiIsImFzc2lnbiIsImNyZWF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIkNyZWF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJjcmVhdGVSb29tIiwic3R5bGVzIiwiam9pbiIsInJvb21jIiwiSm9pbiIsImxpbmsiLCJzZXRMaW5rIiwicm9vbWoiLCJIb21lIiwiV2VsY29tZSIsIndlbGNvbWUiLCJ3YyIsInRvIiwiY2hhdCIsInJlZGlycyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFULEdBQWdCO0FBQzdCLFNBQ0EsbUVBQ0EsTUFBQyxPQUFELE9BREEsRUFFQSxNQUFDLHdEQUFELE9BRkEsRUFHQSxNQUFDLDBEQUFELE9BSEEsQ0FEQTtBQU9EOztBQUdELFNBQVVDLE9BQVYsR0FBb0I7QUFDbEIsU0FFRTtBQUFLLE1BQUUsRUFBRVIsa0VBQU0sQ0FBQ1M7QUFBaEIsS0FDQTtBQUFJLE1BQUUsRUFBRVQsa0VBQU0sQ0FBQ1U7QUFBZixlQURBLEVBRUE7QUFBSSxNQUFFLEVBQUVWLGtFQUFNLENBQUNXO0FBQWYsVUFGQSxFQUdBO0FBQUksTUFBRSxFQUFFWCxrRUFBTSxDQUFDWTtBQUFmLGVBSEEsRUFLQTtBQUFLLE1BQUUsRUFBRVosa0VBQU0sQ0FBQ3BCO0FBQWhCLEtBQ0E7QUFBSSxhQUFTLEVBQUVvQixrRUFBTSxDQUFDYTtBQUF0QixLQUE4QjtBQUFHLFFBQUksRUFBQztBQUFSLHlCQUE5QixDQURBLEVBRUE7QUFBSSxhQUFTLEVBQUViLGtFQUFNLENBQUNhO0FBQXRCLEtBQThCO0FBQUcsUUFBSSxFQUFDO0FBQVIsdUJBQTlCLENBRkEsQ0FMQSxDQUZGO0FBY0QsQzs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIlxyXG4vLyBVcG9uIHRyeWluZyB0byBqb2luIGEgY2hhdHJvb20gaWYgaXQncyBlbXB0eSBkbyBub3RoaW5nLCBlbHNlXHJcbi8vIHJlZGlyZWN0IHRvIHRoZSBjaGF0cm9vbSBVUkwsIGlmIHRoZSBjaGF0IHJvb20gZG9lc24ndCBleGlzdCBpdCB3aWxsIGJlIGhhbmRsZWRcclxuLy8gYnkgdGhlIHNlcnZlciBhbmQgcmVkaXJlY3RlZCB0b3dhcmRzIGFuIGVycm9yIHBhZ2VcclxuZXhwb3J0IGNvbnN0IHJlZCA9IGZ1bmN0aW9uIHJlZGlyZWN0KGRhdGEpIHtcclxuICAgIGlmIChkYXRhID09PSBcIlwiKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7ZGF0YX1gKVxyXG4gIH1cclxuXHJcblxyXG5cclxuLy8gU2VuZCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgd2l0aCBkYXRhLCB0aGUgc2VydmVyIHRoZW4gY3JlYXRlcyBhIGNoYXRyb29tIGJhc2VkIG9uXHJcbi8vIHdoYXQgbmFtZSBoYXMgYmVlbiBzZW50IHdpdGggdGhlIGRhdGFcclxuICBleHBvcnQgY29uc3QgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGRhdGEpIHtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGF0X2NyZWF0aW9uL2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxvY2F0aW9uLmFzc2lnbihgL2NoYXQvJHtkYXRhfWApXHJcbiAgICAgIH1cclxuICBcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5mdW5jdGlvbiBDcmVhdGUoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUm9vbSgpIHtcclxuICAgICAgY3JlYXRlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyZWF0ZX0gaWQ9XCJjcmVhdGVcIj5cclxuICAgICAgPGgxIGlkPXtzdHlsZXMuam9pbn0+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gIFxyXG4gIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWN9PlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3VwZGF0ZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlUm9vbX0+Q3JlYXRlPC9idXR0b24+XHJcbiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ3JlYXRlIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luLmpzXCJcclxuXHJcbi8vIENyZWF0ZSB0aGUgQ2hhdFJvb21cclxuZnVuY3Rpb24gSm9pbigpIHtcclxuICAgIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XHJcbiAgICAgIHJlZChsaW5rKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmpvaW59IGlkPVwiI2pvaW5cIj5cclxuICAgICAgICA8aDE+Sm9pbiBhIGNoYXRyb29tPC9oMT5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5yb29tan0+XHJcbiAgICAgICAgPGlucHV0IHZhbHVlPXtsaW5rfSBvbkNoYW5nZT17KGUpID0+IHNldExpbmsoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGpvaW5cIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVkaXJlY3R9PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ3JlYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZVwiXHJcbmltcG9ydCBKb2luIGZyb20gXCIuLi9jb21wb25lbnRzL2pvaW5cIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAgKFxyXG4gIDw+XHJcbiAgPFdlbGNvbWUgLz5cclxuICA8Sm9pbiAvPlxyXG4gIDxDcmVhdGUgLz5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiAgV2VsY29tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gXHJcbiAgICA8ZGl2IGlkPXtzdHlsZXMud2VsY29tZX0+XHJcbiAgICA8aDEgaWQ9e3N0eWxlcy53Y30+V2VsY29tZTwvaDE+XHJcbiAgICA8aDEgaWQ9e3N0eWxlcy50b30+dG88L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMuY2hhdH0+Q2hhdGlmeTwvaDE+XHJcblxyXG4gICAgPGRpdiBpZD17c3R5bGVzLnJlZGlyZWN0fT5cclxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWRpcnN9PjxhIGhyZWY9XCIjY3JlYXRlXCI+Q3JlYXRlIGEgY2hhdHJvb208L2E+PC9oMT5cclxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWRpcnN9PjxhIGhyZWY9XCIjam9pblwiPkpvaW4gYSBjaGF0cm9vbTwvYT48L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3ZWxjb21lXCI6IFwiaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDZcIixcblx0XCJ3Y1wiOiBcImhvbWVwYWdlX3djX18ya1prdlwiLFxuXHRcInRvXCI6IFwiaG9tZXBhZ2VfdG9fXzFwdFJaXCIsXG5cdFwiY2hhdFwiOiBcImhvbWVwYWdlX2NoYXRfX3lmNVd4XCIsXG5cdFwiZmFkZVwiOiBcImhvbWVwYWdlX2ZhZGVfXzNJTEdqXCIsXG5cdFwibGVmdFwiOiBcImhvbWVwYWdlX2xlZnRfXzN4QkYyXCIsXG5cdFwicmlnaHRcIjogXCJob21lcGFnZV9yaWdodF9fSzA0QlRcIixcblx0XCJ0b3BcIjogXCJob21lcGFnZV90b3BfX1VGeEcxXCIsXG5cdFwicmVkaXJlY3RcIjogXCJob21lcGFnZV9yZWRpcmVjdF9fMWRPRXJcIixcblx0XCJyZWRpcnNcIjogXCJob21lcGFnZV9yZWRpcnNfX0F6NXVJXCIsXG5cdFwiam9pblwiOiBcImhvbWVwYWdlX2pvaW5fX1B5NnhaXCIsXG5cdFwicm9vbWpcIjogXCJob21lcGFnZV9yb29tal9fV0phSXZcIixcblx0XCJjcmVhdGVcIjogXCJob21lcGFnZV9jcmVhdGVfXzNsb1FCXCIsXG5cdFwicm9vbWNcIjogXCJob21lcGFnZV9yb29tY19fMllpcHNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=