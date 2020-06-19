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

  function createRoom() {
    fetch("http://localhost:3000/chat_creation/create", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value
      })
    });
  }

  return __jsx("div", {
    id: _styles_homepage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.create
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9qb2luLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQ3JlYXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXBkYXRlIiwiZSIsInRhcmdldCIsImNyZWF0ZVJvb20iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJzdHlsZXMiLCJjcmVhdGUiLCJyb29tYyIsIkpvaW4iLCJsaW5rIiwic2V0TGluayIsInRlc3QiLCJzZXRUZXN0IiwicmVkaXJlY3QiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwiYXNzaWduIiwiam9pbiIsInJvb21qIiwiSG9tZSIsIldlbGNvbWUiLCJ3ZWxjb21lIiwid2MiLCJ0byIsImNoYXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5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bEIsa0VBQU0sQ0FBQ21CO0FBQWYsZUFIQSxFQUtBO0FBQUssTUFBRSxFQUFFbkIsa0VBQU0sQ0FBQ1E7QUFBaEIsS0FDQSxzQ0FEQSxFQUVBLG9DQUZBLENBTEEsQ0FGRjtBQWNELEM7Ozs7Ozs7Ozs7O0FDaENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5mdW5jdGlvbiBDcmVhdGUoKSB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUm9vbSgpIHtcclxuICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hhdF9jcmVhdGlvbi9jcmVhdGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZTogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuY3JlYXRlfT5cclxuICAgICAgPGgxPkNyZWF0ZSBhIGNoYXRyb29tPC9oMT5cclxuICBcclxuICBcclxuICAgICAgPGRpdiBpZD17c3R5bGVzLnJvb21jfT5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXt1cGRhdGV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaGF0IHJvb20gdG8gam9pblwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZVJvb219PkNyZWF0ZTwvYnV0dG9uPlxyXG4gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENyZWF0ZSIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuLy8gQ3JlYXRlIHRoZSBDaGF0Um9vbVxyXG5mdW5jdGlvbiBKb2luKCkge1xyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KCkge1xyXG4gICAgICBpZiAobGluayA9PT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmsuaW5jbHVkZXMoXCIgXCIpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2xpbmt9YClcclxuICAgIH1cclxuIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuam9pbn0+XHJcbiAgICAgICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMucm9vbWp9PlxyXG4gICAgICAgIDxpbnB1dCB2YWx1ZT17bGlua30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMaW5rKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNoYXQgcm9vbSB0byBqb2luXCIgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlZGlyZWN0fT5Kb2luPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IENyZWF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGVcIlxyXG5pbXBvcnQgSm9pbiBmcm9tIFwiLi4vY29tcG9uZW50cy9qb2luXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gIChcclxuICA8PlxyXG4gIDxXZWxjb21lIC8+XHJcbiAgPEpvaW4gLz5cclxuICA8Q3JlYXRlIC8+XHJcbiAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gIFdlbGNvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuIFxyXG4gICAgPGRpdiBpZD17c3R5bGVzLndlbGNvbWV9PlxyXG4gICAgPGgxIGlkPXtzdHlsZXMud2N9PldlbGNvbWU8L2gxPlxyXG4gICAgPGgxIGlkPXtzdHlsZXMudG99PnRvPC9oMT5cclxuICAgIDxoMSBpZD17c3R5bGVzLmNoYXR9PkNoYXRpZnk8L2gxPlxyXG5cclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5yZWRpcmVjdH0+XHJcbiAgICA8aDE+Q3JlYXRlIGEgY2hhdHJvb208L2gxPlxyXG4gICAgPGgxPkpvaW4gYSBjaGF0cm9vbTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndlbGNvbWVcIjogXCJob21lcGFnZV93ZWxjb21lX18zdVUwNlwiLFxuXHRcIndjXCI6IFwiaG9tZXBhZ2Vfd2NfXzJrWmt2XCIsXG5cdFwidG9cIjogXCJob21lcGFnZV90b19fMXB0UlpcIixcblx0XCJjaGF0XCI6IFwiaG9tZXBhZ2VfY2hhdF9feWY1V3hcIixcblx0XCJmYWRlXCI6IFwiaG9tZXBhZ2VfZmFkZV9fM0lMR2pcIixcblx0XCJsZWZ0XCI6IFwiaG9tZXBhZ2VfbGVmdF9fM3hCRjJcIixcblx0XCJyaWdodFwiOiBcImhvbWVwYWdlX3JpZ2h0X19LMDRCVFwiLFxuXHRcInRvcFwiOiBcImhvbWVwYWdlX3RvcF9fVUZ4RzFcIixcblx0XCJyZWRpcmVjdFwiOiBcImhvbWVwYWdlX3JlZGlyZWN0X18xZE9FclwiLFxuXHRcImpvaW5cIjogXCJob21lcGFnZV9qb2luX19QeTZ4WlwiLFxuXHRcInJvb21qXCI6IFwiaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2XCIsXG5cdFwiY3JlYXRlXCI6IFwiaG9tZXBhZ2VfY3JlYXRlX18zbG9RQlwiLFxuXHRcInJvb21jXCI6IFwiaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9