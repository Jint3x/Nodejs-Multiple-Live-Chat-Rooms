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
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to create"
  }), __jsx("button", {
    onClick: createRoom
  }, "Create")));
} // Fixed typo on create => enter a chat to join
// 


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


 // Create the Chat Room

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
    id: "join"
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
	"roomc": "homepage_roomc__2Yips",
	"ws": "homepage_ws__19tcJ"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2pvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJyZWQiLCJyZWRpcmVjdCIsImRhdGEiLCJsb2NhdGlvbiIsImFzc2lnbiIsImNyZWF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIkNyZWF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJjcmVhdGVSb29tIiwic3R5bGVzIiwicm9vbWMiLCJKb2luIiwibGluayIsInNldExpbmsiLCJqb2luIiwicm9vbWoiLCJIb21lIiwiV2VsY29tZSIsIndlbGNvbWUiLCJ3YyIsInRvIiwiY2hhdCIsInJlZGlycyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QSxtRUFDQSxNQUFDLE9BQUQsT0FEQSxFQUVBLE1BQUMsd0RBQUQsT0FGQSxFQUdBLE1BQUMsMERBQUQsT0FIQSxDQURBO0FBT0Q7O0FBR0QsU0FBVUMsT0FBVixHQUFvQjtBQUNsQixTQUVFO0FBQUssTUFBRSxFQUFFUixrRUFBTSxDQUFDUztBQUFoQixLQUNBO0FBQUksTUFBRSxFQUFFVCxrRUFBTSxDQUFDVTtBQUFmLGVBREEsRUFFQTtBQUFJLE1BQUUsRUFBRVYsa0VBQU0sQ0FBQ1c7QUFBZixVQUZBLEVBR0E7QUFBSSxNQUFFLEVBQUVYLGtFQUFNLENBQUNZO0FBQWYsZUFIQSxFQUtBO0FBQUssTUFBRSxFQUFFWixrRUFBTSxDQUFDcEI7QUFBaEIsS0FDQTtBQUFJLGFBQVMsRUFBRW9CLGtFQUFNLENBQUNhO0FBQXRCLEtBQThCO0FBQUcsUUFBSSxFQUFDO0FBQVIseUJBQTlCLENBREEsRUFFQTtBQUFJLGFBQVMsRUFBRWIsa0VBQU0sQ0FBQ2E7QUFBdEIsS0FBOEI7QUFBRyxRQUFJLEVBQUM7QUFBUix1QkFBOUIsQ0FGQSxDQUxBLENBRkY7QUFjRCxDOzs7Ozs7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJcclxuLy8gVXBvbiB0cnlpbmcgdG8gam9pbiBhIGNoYXRyb29tIGlmIGl0J3MgZW1wdHkgZG8gbm90aGluZywgZWxzZVxyXG4vLyByZWRpcmVjdCB0byB0aGUgY2hhdHJvb20gVVJMLCBpZiB0aGUgY2hhdCByb29tIGRvZXNuJ3QgZXhpc3QgaXQgd2lsbCBiZSBoYW5kbGVkXHJcbi8vIGJ5IHRoZSBzZXJ2ZXIgYW5kIHJlZGlyZWN0ZWQgdG93YXJkcyBhbiBlcnJvciBwYWdlXHJcbmV4cG9ydCBjb25zdCByZWQgPSBmdW5jdGlvbiByZWRpcmVjdChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YSA9PT0gXCJcIikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2RhdGF9YClcclxuICB9XHJcblxyXG5cclxuXHJcbi8vIFNlbmQgcmVxdWVzdCB0byB0aGUgc2VydmVyIHdpdGggZGF0YSwgdGhlIHNlcnZlciB0aGVuIGNyZWF0ZXMgYSBjaGF0cm9vbSBiYXNlZCBvblxyXG4vLyB3aGF0IG5hbWUgaGFzIGJlZW4gc2VudCB3aXRoIHRoZSBkYXRhXHJcbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShkYXRhKSB7XHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hhdF9jcmVhdGlvbi9jcmVhdGVcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhdGlvbi5hc3NpZ24oYC9jaGF0LyR7ZGF0YX1gKVxyXG4gICAgICB9XHJcbiAgXHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlX0pvaW4uanNcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJvb20oKSB7XHJcbiAgICAgIGNyZWF0ZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcmVhdGV9IGlkPVwiY3JlYXRlXCI+XHJcbiAgICAgIDxoMT5DcmVhdGUgYSBjaGF0cm9vbTwvaDE+XHJcbiAgXHJcbiAgXHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5yb29tY30+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17dXBkYXRlfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2hhdCByb29tIHRvIGNyZWF0ZVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVJvb219PkNyZWF0ZTwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbi8vIEZpeGVkIHR5cG8gb24gY3JlYXRlID0+IGVudGVyIGEgY2hhdCB0byBqb2luXHJcbi8vIFxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENyZWF0ZSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qc1wiXHJcblxyXG4vLyBDcmVhdGUgdGhlIENoYXQgUm9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiByZWRpcmVjdCgpIHtcclxuICAgICAgcmVkKGxpbmspXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuam9pbn0gaWQ9XCJqb2luXCI+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IENyZWF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGVcIlxyXG5pbXBvcnQgSm9pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qb2luXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gIChcclxuICA8PlxyXG4gIDxXZWxjb21lIC8+XHJcbiAgPEpvaW4gLz5cclxuICA8Q3JlYXRlIC8+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFdlbGNvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuIFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLndlbGNvbWV9PlxyXG4gICAgPGgxIGlkPXtzdHlsZXMud2N9PldlbGNvbWU8L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMudG99PnRvPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLmNoYXR9PkNoYXRpZnk8L2gxPlxyXG5cclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5yZWRpcmVjdH0+XHJcbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVkaXJzfT48YSBocmVmPVwiI2NyZWF0ZVwiPkNyZWF0ZSBhIGNoYXRyb29tPC9hPjwvaDE+XHJcbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVkaXJzfT48YSBocmVmPVwiI2pvaW5cIj5Kb2luIGEgY2hhdHJvb208L2E+PC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid2VsY29tZVwiOiBcImhvbWVwYWdlX3dlbGNvbWVfXzN1VTA2XCIsXG5cdFwid2NcIjogXCJob21lcGFnZV93Y19fMmtaa3ZcIixcblx0XCJ0b1wiOiBcImhvbWVwYWdlX3RvX18xcHRSWlwiLFxuXHRcImNoYXRcIjogXCJob21lcGFnZV9jaGF0X195ZjVXeFwiLFxuXHRcImZhZGVcIjogXCJob21lcGFnZV9mYWRlX18zSUxHalwiLFxuXHRcImxlZnRcIjogXCJob21lcGFnZV9sZWZ0X18zeEJGMlwiLFxuXHRcInJpZ2h0XCI6IFwiaG9tZXBhZ2VfcmlnaHRfX0swNEJUXCIsXG5cdFwidG9wXCI6IFwiaG9tZXBhZ2VfdG9wX19VRnhHMVwiLFxuXHRcInJlZGlyZWN0XCI6IFwiaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyXCIsXG5cdFwicmVkaXJzXCI6IFwiaG9tZXBhZ2VfcmVkaXJzX19BejV1SVwiLFxuXHRcImpvaW5cIjogXCJob21lcGFnZV9qb2luX19QeTZ4WlwiLFxuXHRcInJvb21qXCI6IFwiaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2XCIsXG5cdFwiY3JlYXRlXCI6IFwiaG9tZXBhZ2VfY3JlYXRlX18zbG9RQlwiLFxuXHRcInJvb21jXCI6IFwiaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzXCIsXG5cdFwid3NcIjogXCJob21lcGFnZV93c19fMTl0Y0pcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=