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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0Ae4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qA88");


/***/ }),

/***/ "6pId":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"missing": "missing_room_missing__1PBRh",
	"create": "missing_room_create__NL1lC"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qA88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6pId");
/* harmony import */ var _styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_missing_room_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Create_Join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0Ae4");

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
    Object(_components_Create_Join__WEBPACK_IMPORTED_MODULE_2__[/* create */ "a"])(reg);
  }

  function roomJoin() {
    Object(_components_Create_Join__WEBPACK_IMPORTED_MODULE_2__[/* red */ "b"])(join);
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

/***/ })

/******/ });