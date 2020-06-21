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

/***/ "./pages/chat_not_found.js":
/*!*********************************!*\
  !*** ./pages/chat_not_found.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/missing_room.module.css */ "./styles/missing_room.module.css");
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Create_Join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Create_Join */ "./components/Create_Join.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Missing() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.missing
  }, __jsx("img", {
    src: "https://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png"
  }), __jsx("h1", null, "We are sorry but room you tried to enter doesn't exist!")), __jsx(Create, null));
}

function Create() {
  const {
    0: reg,
    1: setReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: join,
    1: setJoin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

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
    onChange: e => setReg(e.target.value),
    placeholder: "Create a chat room"
  }), __jsx("button", {
    onClick: roomCreate
  }, "Create")), __jsx("div", null, __jsx("input", {
    value: join,
    onChange: e => setJoin(e.target.value),
    placeholder: "Join a chat room"
  }), __jsx("button", {
    onClick: roomJoin
  }, "Join")));
}

/* harmony default export */ __webpack_exports__["default"] = (Missing);

/***/ }),

/***/ "./styles/missing_room.module.css":
/*!****************************************!*\
  !*** ./styles/missing_room.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"missing": "missing_room_missing__1PBRh",
	"create": "missing_room_create__NL1lC"
};


/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/chat_not_found.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shi\Desktop\Live Chat\pages\chat_not_found.js */"./pages/chat_not_found.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVfSm9pbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0X25vdF9mb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbWlzc2luZ19yb29tLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJyZWQiLCJyZWRpcmVjdCIsImRhdGEiLCJsb2NhdGlvbiIsImFzc2lnbiIsImNyZWF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsIk1pc3NpbmciLCJzdHlsZXMiLCJtaXNzaW5nIiwiQ3JlYXRlIiwicmVnIiwic2V0UmVnIiwidXNlU3RhdGUiLCJqb2luIiwic2V0Sm9pbiIsInJvb21DcmVhdGUiLCJyb29tSm9pbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxHQUFHLEdBQUcsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkMsTUFBSUEsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDZjtBQUNEOztBQUVEQyxVQUFRLENBQUNDLE1BQVQsQ0FBaUIsU0FBUUYsSUFBSyxFQUE5QjtBQUNELENBTkksQyxDQVVQO0FBQ0E7O0FBQ1MsTUFBTUcsTUFBTSxHQUFHLFNBQVNBLE1BQVQsQ0FBZ0JILElBQWhCLEVBQXNCO0FBQ3RDSSxPQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDbERDLFVBQU0sRUFBRSxNQUQwQztBQUVsREMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGeUM7QUFLbERDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFVBQUksRUFBRVY7QUFEYSxLQUFmO0FBTDRDLEdBQS9DLENBQUw7QUFVQUMsVUFBUSxDQUFDQyxNQUFULENBQWlCLFNBQVFGLElBQUssRUFBOUI7QUFDRCxDQVpFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJUO0FBQ0E7QUFDQTs7QUFHQSxTQUFTVyxPQUFULEdBQW1CO0FBRWYsU0FDSSxtRUFDQTtBQUFLLE1BQUUsRUFBRUMsc0VBQU0sQ0FBQ0M7QUFBaEIsS0FDSTtBQUFLLE9BQUcsRUFBQztBQUFULElBREosRUFFSSw0RUFGSixDQURBLEVBS0EsTUFBQyxNQUFELE9BTEEsQ0FESjtBQVNIOztBQUVELFNBQVNDLE1BQVQsR0FBa0I7QUFDZCxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxFQUFELENBQWhDOztBQUVBLFdBQVNHLFVBQVQsR0FBc0I7QUFDbEJqQiwwRUFBTSxDQUFDWSxHQUFELENBQU47QUFDSDs7QUFFRCxXQUFTTSxRQUFULEdBQW9CO0FBQ2hCdkIsdUVBQUcsQ0FBQ29CLElBQUQsQ0FBSDtBQUNIOztBQUdELFNBQ0k7QUFBSyxNQUFFLEVBQUVOLHNFQUFNLENBQUNUO0FBQWhCLEtBQ0UsbUJBQ0k7QUFBTyxTQUFLLEVBQUVZLEdBQWQ7QUFBbUIsWUFBUSxFQUFHTyxDQUFELElBQU9OLE1BQU0sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBMUM7QUFBNEQsZUFBVyxFQUFDO0FBQXhFLElBREosRUFFSTtBQUFRLFdBQU8sRUFBRUo7QUFBakIsY0FGSixDQURGLEVBTUUsbUJBQ0E7QUFBTyxTQUFLLEVBQUVGLElBQWQ7QUFBb0IsWUFBUSxFQUFHSSxDQUFELElBQU9ILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBNUM7QUFBOEQsZUFBVyxFQUFDO0FBQTFFLElBREEsRUFFSTtBQUFRLFdBQU8sRUFBRUg7QUFBakIsWUFGSixDQU5GLENBREo7QUFjSDs7QUFJY1Ysc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRfbm90X2ZvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiXHJcbi8vIFVwb24gdHJ5aW5nIHRvIGpvaW4gYSBjaGF0cm9vbSBpZiBpdCdzIGVtcHR5IGRvIG5vdGhpbmcsIGVsc2VcclxuLy8gcmVkaXJlY3QgdG8gdGhlIGNoYXRyb29tIFVSTCwgaWYgdGhlIGNoYXQgcm9vbSBkb2Vzbid0IGV4aXN0IGl0IHdpbGwgYmUgaGFuZGxlZFxyXG4vLyBieSB0aGUgc2VydmVyIGFuZCByZWRpcmVjdGVkIHRvd2FyZHMgYW4gZXJyb3IgcGFnZVxyXG5leHBvcnQgY29uc3QgcmVkID0gZnVuY3Rpb24gcmVkaXJlY3QoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEgPT09IFwiXCIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2F0aW9uLmFzc2lnbihgL2NoYXQvJHtkYXRhfWApXHJcbiAgfVxyXG5cclxuXHJcblxyXG4vLyBTZW5kIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB3aXRoIGRhdGEsIHRoZSBzZXJ2ZXIgdGhlbiBjcmVhdGVzIGEgY2hhdHJvb20gYmFzZWQgb25cclxuLy8gd2hhdCBuYW1lIGhhcyBiZWVuIHNlbnQgd2l0aCB0aGUgZGF0YVxyXG4gIGV4cG9ydCBjb25zdCBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoZGF0YSkge1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NoYXRfY3JlYXRpb24vY3JlYXRlXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbG9jYXRpb24uYXNzaWduKGAvY2hhdC8ke2RhdGF9YClcclxuICAgICAgfVxyXG4gIFxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbWlzc2luZ19yb29tLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgeyBjcmVhdGUsIHJlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NyZWF0ZV9Kb2luXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZnVuY3Rpb24gTWlzc2luZygpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1pc3Npbmd9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNsa2VyLmNvbS9jbGlwYXJ0cy9iLzMvNy85LzEyMDY1NzM4NjI0NDg3MzQyNTBBcm5vdWQ5OTlfUmlnaHRfb3Jfd3JvbmdfMy5zdmcubWVkLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8aDE+V2UgYXJlIHNvcnJ5IGJ1dCByb29tIHlvdSB0cmllZCB0byBlbnRlciBkb2Vzbid0IGV4aXN0ITwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENyZWF0ZSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGUoKSB7XHJcbiAgICBjb25zdCBbcmVnLCBzZXRSZWddID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtqb2luLCBzZXRKb2luXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gcm9vbUNyZWF0ZSgpIHtcclxuICAgICAgICBjcmVhdGUocmVnKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvb21Kb2luKCkge1xyXG4gICAgICAgIHJlZChqb2luKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jcmVhdGV9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3JlZ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWcoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBhIGNoYXQgcm9vbVwiLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jvb21DcmVhdGV9PkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17am9pbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRKb2luKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJKb2luIGEgY2hhdCByb29tXCIvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cm9vbUpvaW59PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaXNzaW5nIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWlzc2luZ1wiOiBcIm1pc3Npbmdfcm9vbV9taXNzaW5nX18xUEJSaFwiLFxuXHRcImNyZWF0ZVwiOiBcIm1pc3Npbmdfcm9vbV9jcmVhdGVfX05MMWxDXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9