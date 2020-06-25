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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "O4vr":
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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/homepage.module.css
var homepage_module = __webpack_require__("O4vr");
var homepage_module_default = /*#__PURE__*/__webpack_require__.n(homepage_module);

// EXTERNAL MODULE: ./components/Create_Join.js
var Create_Join = __webpack_require__("0Ae4");

// CONCATENATED MODULE: ./components/create.js

var __jsx = external_react_default.a.createElement;




function Create() {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])("");

  function update(e) {
    setValue(e.target.value);
  }

  function createRoom() {
    Object(Create_Join["a" /* create */])(value);
  }

  return __jsx("div", {
    className: homepage_module_default.a.create,
    id: "create"
  }, __jsx("h1", null, "Create a chatroom"), __jsx("div", {
    id: homepage_module_default.a.roomc
  }, __jsx("input", {
    value: value,
    onChange: update,
    placeholder: "Enter a chat room to create"
  }), __jsx("button", {
    onClick: createRoom
  }, "Create")));
} // Fixed typo on create => enter a chat to join
// 


/* harmony default export */ var create = (Create);
// CONCATENATED MODULE: ./components/join.js

var join_jsx = external_react_default.a.createElement;


 // Create the Chat Room

function Join() {
  const {
    0: link,
    1: setLink
  } = Object(external_react_["useState"])("");

  function redirect() {
    Object(Create_Join["b" /* red */])(link);
  }

  return join_jsx("div", {
    className: homepage_module_default.a.join,
    id: "join"
  }, join_jsx("h1", null, "Join a chatroom"), join_jsx("div", {
    id: homepage_module_default.a.roomj
  }, join_jsx("input", {
    value: link,
    onChange: e => setLink(e.target.value),
    placeholder: "Enter a chat room to join"
  }), join_jsx("button", {
    onClick: redirect
  }, "Join")));
}

/* harmony default export */ var join = (Join);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;



function Home() {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Welcome, null), pages_jsx(join, null), pages_jsx(create, null));
}

function Welcome() {
  return pages_jsx("div", {
    id: homepage_module_default.a.welcome
  }, pages_jsx("h1", {
    id: homepage_module_default.a.wc
  }, "Welcome"), pages_jsx("h1", {
    id: homepage_module_default.a.to
  }, "to"), pages_jsx("h1", {
    id: homepage_module_default.a.chat
  }, "Chatify"), pages_jsx("div", {
    id: homepage_module_default.a.redirect
  }, pages_jsx("h1", {
    className: homepage_module_default.a.redirs
  }, pages_jsx("a", {
    href: "#create"
  }, "Create a chatroom")), pages_jsx("h1", {
    className: homepage_module_default.a.redirs
  }, pages_jsx("a", {
    href: "#join"
  }, "Join a chatroom"))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });