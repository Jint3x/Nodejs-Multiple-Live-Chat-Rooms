module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\chat\\[id].js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/chatroom.module.css */ "./styles/chatroom.module.css");
/* harmony import */ var _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/create_a_name.module.css */ "./styles/create_a_name.module.css");
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const EnterUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/login.js */ "./components/login.js")));

function Post() {
  const {
    0: valid,
    1: setValid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Check if they have a username, if not ask them for one

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (document.cookie.split(";").some(element => element.includes("username"))) {
      setValid(true);
    }
  });

  function changeValidation() {
    setValid(true);
  } // If the client has an username cookie use it to connect to the chat, otherwise
  // give them a special forum to create their username and THEN connect them to the chat


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], null, __jsx(EnterUser, null))); // Either make it load dynamic components or revert it back to it's working state
}

function Header() {
  const {
    0: path,
    1: setPath
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    setPath(id.replace(/%20/gi, " "));
  }, []);
  return __jsx("h1", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading
  }, "Chat Room: ", path);
}

function Main(props) {
  const {
    0: val,
    1: setVal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: ws,
    1: setWs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: connected,
    1: setConnected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function change(e) {
    setVal(e.target.value);
  } // Send a message (to the server) to be broadcasted to all connected clients 


  function sendData() {
    if (val === "") return;
    ws.send(`${user}: ${val}`);
    setVal("");
  } // Connect to webhook upon rendering the page and add in into a state so you can access it later


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let items = []; // This saves ALL messages

    let id = location.pathname.split("/")[location.pathname.split("/").length - 1].replace(/%20/gi, "");
    let ws = new WebSocket("ws://localhost:8080/" + id);
    let validUser = document.cookie.split(";").find(element => element.includes("username")).split("=")[1];
    ws.addEventListener("message", addItems);
    ws.addEventListener("open", () => {
      ws.send(`${validUser} has joined the chat`);
    });
    window.addEventListener("unload", () => {
      ws.send(`${validUser} has left the chat`);
    });

    function addItems(info) {
      let data = JSON.parse(info.data);
      let newItems = items.slice(0); // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update
      // Catch a message from the server containing the updated number of members
      // and update it

      if (data.connected !== undefined) {
        setConnected(data.connected);
        return;
      }

      newItems.unshift(data.data);
      items.unshift(data.data);
      setMessages(newItems);
      setUser(validUser);
    }

    setWs(ws); // set the WebSocket to be global
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MessageLogger, {
    messages: messages
  }), __jsx(MessageSender, {
    value: val,
    change: change,
    log: sendData
  }), __jsx(MemberList, {
    clients: connected
  }));
} // Loads all incoming messages in the chat


function MessageLogger(props) {
  let messages = props.messages;
  let listMessages = messages.map(element => {
    return __jsx(Message, {
      data: element,
      key: `${element.toString()}${Math.floor(Math.random() * 100000)}`
    });
  });
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.msgLogger
  }, __jsx("ul", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messages
  }, listMessages));
} // Render the input and the submit button


function MessageSender(props) {
  // Runs when user presses enter on the input (instead of clicking send message btn)
  function sendMessage(e) {
    if (e.which === 13 || e.keyStroke === 13) return props.log();
  }

  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sendMessages
  }, __jsx("input", {
    value: props.value,
    onChange: props.change,
    onKeyPress: sendMessage
  }), __jsx("button", {
    onClick: props.log
  }, "Send"));
} // The number of connected members


function MemberList(props) {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.connected
  }, __jsx("h1", null, "Connected Members: ", props.clients));
}

function Message(props) {
  return __jsx("li", null, props.data);
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./styles/chatroom.module.css":
/*!************************************!*\
  !*** ./styles/chatroom.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heading": "chatroom_heading__3YxxD",
	"msgLogger": "chatroom_msgLogger__XZUFJ",
	"messages": "chatroom_messages__3kFUG",
	"sendMessages": "chatroom_sendMessages__3tNxv",
	"connected": "chatroom_connected__19Saz"
};


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


/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/chat/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shi\Desktop\Live Chat\pages\chat\[id].js */"./pages/chat/[id].js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NyZWF0ZV9hX25hbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkVudGVyVXNlciIsImxhenkiLCJQb3N0IiwidmFsaWQiLCJzZXRWYWxpZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJjaGFuZ2VWYWxpZGF0aW9uIiwiSGVhZGVyIiwicGF0aCIsInNldFBhdGgiLCJpZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJyZXBsYWNlIiwic3R5bGVzIiwiaGVhZGluZyIsIk1haW4iLCJwcm9wcyIsInZhbCIsInNldFZhbCIsIndzIiwic2V0V3MiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwidXNlciIsInNldFVzZXIiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kRGF0YSIsInNlbmQiLCJpdGVtcyIsIldlYlNvY2tldCIsInZhbGlkVXNlciIsImZpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbXMiLCJ3aW5kb3ciLCJpbmZvIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld0l0ZW1zIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJ1bnNoaWZ0IiwiTWVzc2FnZUxvZ2dlciIsImxpc3RNZXNzYWdlcyIsIm1hcCIsInRvU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibXNnTG9nZ2VyIiwiTWVzc2FnZVNlbmRlciIsInNlbmRNZXNzYWdlIiwid2hpY2giLCJrZXlTdHJva2UiLCJsb2ciLCJz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QUFDN0M7O0FBRUQsU0FDSTtBQUFLLE1BQUUsRUFBRS9DLGtFQUFNLENBQUNnRDtBQUFoQixLQUVJO0FBQ0EsU0FBSyxFQUFFN0MsS0FBSyxDQUFDYyxLQURiO0FBRUEsWUFBUSxFQUFFZCxLQUFLLENBQUNXLE1BRmhCO0FBR0EsY0FBVSxFQUFFOEI7QUFIWixJQUZKLEVBUUk7QUFBUSxXQUFPLEVBQUV6QyxLQUFLLENBQUM0QztBQUF2QixZQVJKLENBREo7QUFhSCxDLENBR0Q7OztBQUNBLFNBQVNFLFVBQVQsQ0FBb0I5QyxLQUFwQixFQUEyQjtBQUN2QixTQUNJO0FBQUssTUFBRSxFQUFFSCxrRUFBTSxDQUFDVTtBQUFoQixLQUNGLHlDQUF3QlAsS0FBSyxDQUFDK0MsT0FBOUIsQ0FERSxDQURKO0FBS0g7O0FBR0QsU0FBU0MsT0FBVCxDQUFpQmhELEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU8sa0JBQUtBLEtBQUssQ0FBQ3lCLElBQVgsQ0FBUDtBQUNIOztBQUtjaEQsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWNcXFxcZGV2ZWxvcG1lbnRcXFxccGFnZXNcXFxcY2hhdFxcXFxbaWRdLmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhdHJvb20ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB1c2VybmFtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZV9hX25hbWUubW9kdWxlLmNzc1wiXHJcblxyXG5jb25zdCBFbnRlclVzZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9sb2dpbi5qcycpKTtcclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuc29tZShlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkpIHtcclxuICAgICAgICAgICBzZXRWYWxpZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBzZXRWYWxpZCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC8vIElmIHRoZSBjbGllbnQgaGFzIGFuIHVzZXJuYW1lIGNvb2tpZSB1c2UgaXQgdG8gY29ubmVjdCB0byB0aGUgY2hhdCwgb3RoZXJ3aXNlXHJcbiAgICAvLyBnaXZlIHRoZW0gYSBzcGVjaWFsIGZvcnVtIHRvIGNyZWF0ZSB0aGVpciB1c2VybmFtZSBhbmQgVEhFTiBjb25uZWN0IHRoZW0gdG8gdGhlIGNoYXRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHZhbGlkICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgIXZhbGlkICYmIChcclxuICAgICAgICAgICAgPFN1c3BlbnNlPlxyXG4gICAgICAgICAgPEVudGVyVXNlciAvPiAgICAgIFxyXG4gICAgICAgICAgPC9TdXNwZW5zZT4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgIFxyXG4gICAgKS8vIEVpdGhlciBtYWtlIGl0IGxvYWQgZHluYW1pYyBjb21wb25lbnRzIG9yIHJldmVydCBpdCBiYWNrIHRvIGl0J3Mgd29ya2luZyBzdGF0ZVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgICAgICBzZXRQYXRoKGlkLnJlcGxhY2UoLyUyMC9naSwgXCIgXCIpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxoMSBpZD17c3R5bGVzLmhlYWRpbmd9PkNoYXQgUm9vbToge3BhdGh9PC9oMT5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbihwcm9wcykge1xyXG4gICAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbd3MsIHNldFdzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU2VuZCBhIG1lc3NhZ2UgKHRvIHRoZSBzZXJ2ZXIpIHRvIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBjb25uZWN0ZWQgY2xpZW50cyBcclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKCkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IFwiXCIpIHJldHVybjtcclxuICAgICAgICB3cy5zZW5kKGAke3VzZXJ9OiAke3ZhbH1gKVxyXG4gICAgICAgIHNldFZhbChcIlwiKVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZSBhbmQgYWRkIGluIGludG8gYSBzdGF0ZSBzbyB5b3UgY2FuIGFjY2VzcyBpdCBsYXRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW10gLy8gVGhpcyBzYXZlcyBBTEwgbWVzc2FnZXNcclxuICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXS5yZXBsYWNlKC8lMjAvZ2ksIFwiXCIpO1xyXG4gICAgICBsZXQgd3MgPSAgbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvXCIraWQpO1xyXG4gICAgICBsZXQgdmFsaWRVc2VyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKS5zcGxpdChcIj1cIilbMV07XHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBhZGRJdGVtcykgXHJcblxyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBqb2luZWQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgbGVmdCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgICBmdW5jdGlvbiBhZGRJdGVtcyhpbmZvKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGluZm8uZGF0YSlcclxuICAgICAgICBsZXQgbmV3SXRlbXMgPSBpdGVtcy5zbGljZSgwLCkgIC8vIFdlIGNyZWF0ZSBhbm90aGVyIGFyciwgc28gd2hlbiB3ZSBzZXQgaXQgd2l0aCBzZXRNZXNzYWdlcyB0aGUgcGFnZSB3aWxsIHJlZnJlc2ggYW5kIHRoZSBsaXN0IChJbmZvKSB3aWxsIHVwZGF0ZVxyXG5cclxuICAgICAgICAvLyBDYXRjaCBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGNvbnRhaW5pbmcgdGhlIHVwZGF0ZWQgbnVtYmVyIG9mIG1lbWJlcnNcclxuICAgICAgICAvLyBhbmQgdXBkYXRlIGl0XHJcbiAgICAgICAgaWYgKGRhdGEuY29ubmVjdGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0Q29ubmVjdGVkKGRhdGEuY29ubmVjdGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdJdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBpdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBzZXRNZXNzYWdlcyhuZXdJdGVtcylcclxuICAgICAgICBzZXRVc2VyKHZhbGlkVXNlcilcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFdzKHdzKSAvLyBzZXQgdGhlIFdlYlNvY2tldCB0byBiZSBnbG9iYWxcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZXNzYWdlTG9nZ2VyIG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxNZXNzYWdlU2VuZGVyIHZhbHVlPXt2YWx9IGNoYW5nZT17Y2hhbmdlfSBsb2c9e3NlbmREYXRhfSAvPlxyXG4gICAgICAgIDxNZW1iZXJMaXN0IGNsaWVudHM9e2Nvbm5lY3RlZH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gTG9hZHMgYWxsIGluY29taW5nIG1lc3NhZ2VzIGluIHRoZSBjaGF0XHJcbmZ1bmN0aW9uIE1lc3NhZ2VMb2dnZXIocHJvcHMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IHByb3BzLm1lc3NhZ2VzXHJcbiAgICBsZXQgbGlzdE1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiA8TWVzc2FnZSBkYXRhPXtlbGVtZW50fSBrZXk9e2Ake2VsZW1lbnQudG9TdHJpbmcoKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YH0gLz5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1zZ0xvZ2dlcn0+XHJcbiAgICAgICAgICAgIDx1bCBpZD17c3R5bGVzLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAge2xpc3RNZXNzYWdlc31cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gUmVuZGVyIHRoZSBpbnB1dCBhbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuZnVuY3Rpb24gTWVzc2FnZVNlbmRlcihwcm9wcykge1xyXG5cclxuICAgIC8vIFJ1bnMgd2hlbiB1c2VyIHByZXNzZXMgZW50ZXIgb24gdGhlIGlucHV0IChpbnN0ZWFkIG9mIGNsaWNraW5nIHNlbmQgbWVzc2FnZSBidG4pXHJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzIHx8IGUua2V5U3Ryb2tlID09PSAxMykgcmV0dXJuIHByb3BzLmxvZygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuc2VuZE1lc3NhZ2VzfT5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e3NlbmRNZXNzYWdlfSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMubG9nfT5TZW5kPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gVGhlIG51bWJlciBvZiBjb25uZWN0ZWQgbWVtYmVyc1xyXG5mdW5jdGlvbiBNZW1iZXJMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb25uZWN0ZWR9PlxyXG4gICAgICA8aDE+Q29ubmVjdGVkIE1lbWJlcnM6IHtwcm9wcy5jbGllbnRzfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8bGk+e3Byb3BzLmRhdGF9PC9saT5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmdcIjogXCJjaGF0cm9vbV9oZWFkaW5nX18zWXh4RFwiLFxuXHRcIm1zZ0xvZ2dlclwiOiBcImNoYXRyb29tX21zZ0xvZ2dlcl9fWFpVRkpcIixcblx0XCJtZXNzYWdlc1wiOiBcImNoYXRyb29tX21lc3NhZ2VzX18za0ZVR1wiLFxuXHRcInNlbmRNZXNzYWdlc1wiOiBcImNoYXRyb29tX3NlbmRNZXNzYWdlc19fM3ROeHZcIixcblx0XCJjb25uZWN0ZWRcIjogXCJjaGF0cm9vbV9jb25uZWN0ZWRfXzE5U2F6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiY3JlYXRlX2FfbmFtZV9tYWluX18yaXBSYVwiLFxuXHRcImNlbnRlclwiOiBcImNyZWF0ZV9hX25hbWVfY2VudGVyX18xNmtselwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==