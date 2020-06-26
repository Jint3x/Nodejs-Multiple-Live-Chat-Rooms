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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const EnterUser = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/login.js */ "./components/login.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/login.js */ "./components/login.js")],
    modules: ['../../components/login.js']
  }
});

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


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __jsx(EnterUser, {
    done: changeValidation
  }));
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

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/chat/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shi\Desktop\Live Chat\pages\chat\[id].js */"./pages/chat/[id].js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJFbnRlclVzZXIiLCJkeW5hbWljIiwiUG9zdCIsInZhbGlkIiwic2V0VmFsaWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJzb21lIiwiZWxlbWVudCIsImluY2x1ZGVzIiwiY2hhbmdlVmFsaWRhdGlvbiIsIkhlYWRlciIsInBhdGgiLCJzZXRQYXRoIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0eWxlcyIsImhlYWRpbmciLCJNYWluIiwicHJvcHMiLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZXIiLCJzZXRVc2VyIiwiY2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZERhdGEiLCJzZW5kIiwiaXRlbXMiLCJXZWJTb2NrZXQiLCJ2YWxpZFVzZXIiLCJmaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW1zIiwid2luZG93IiwiaW5mbyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXdJdGVtcyIsInNsaWNlIiwidW5kZWZpbmVkIiwidW5zaGlmdCIsIk1lc3NhZ2VMb2dnZXIiLCJsaXN0TWVzc2FnZXMiLCJtYXAiLCJ0b1N0cmluZyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1zZ0xvZ2dlciIsIk1lc3NhZ2VTZW5kZXIiLCJzZW5kTWVzc2FnZSIsIndoaWNoIiwia2V5U3Ryb2tlIiwibG9nIiwic2VuZE1l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MEMsT0FBTzNDLEtBQUssQ0FBQzRDLEdBQU4sRUFBUDtBQUM3Qzs7QUFFRCxTQUNJO0FBQUssTUFBRSxFQUFFL0Msa0VBQU0sQ0FBQ2dEO0FBQWhCLEtBRUk7QUFDQSxTQUFLLEVBQUU3QyxLQUFLLENBQUNjLEtBRGI7QUFFQSxZQUFRLEVBQUVkLEtBQUssQ0FBQ1csTUFGaEI7QUFHQSxjQUFVLEVBQUU4QjtBQUhaLElBRkosRUFRSTtBQUFRLFdBQU8sRUFBRXpDLEtBQUssQ0FBQzRDO0FBQXZCLFlBUkosQ0FESjtBQWFILEMsQ0FHRDs7O0FBQ0EsU0FBU0UsVUFBVCxDQUFvQjlDLEtBQXBCLEVBQTJCO0FBQ3ZCLFNBQ0k7QUFBSyxNQUFFLEVBQUVILGtFQUFNLENBQUNVO0FBQWhCLEtBQ0YseUNBQXdCUCxLQUFLLENBQUMrQyxPQUE5QixDQURFLENBREo7QUFLSDs7QUFHRCxTQUFTQyxPQUFULENBQWlCaEQsS0FBakIsRUFBd0I7QUFDcEIsU0FBTyxrQkFBS0EsS0FBSyxDQUFDeUIsSUFBWCxDQUFQO0FBQ0g7O0FBS2NoRCxtRUFBZixFOzs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInN0YXRpY1xcXFxkZXZlbG9wbWVudFxcXFxwYWdlc1xcXFxjaGF0XFxcXFtpZF0uanNcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5cclxuY29uc3QgRW50ZXJVc2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvbG9naW4uanMnKSlcclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLnNvbWUoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpKSB7XHJcbiAgICAgICAgc2V0VmFsaWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHNldFZhbGlkKHRydWUpXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLy8gSWYgdGhlIGNsaWVudCBoYXMgYW4gdXNlcm5hbWUgY29va2llIHVzZSBpdCB0byBjb25uZWN0IHRvIHRoZSBjaGF0LCBvdGhlcndpc2VcclxuICAgIC8vIGdpdmUgdGhlbSBhIHNwZWNpYWwgZm9ydW0gdG8gY3JlYXRlIHRoZWlyIHVzZXJuYW1lIGFuZCBUSEVOIGNvbm5lY3QgdGhlbSB0byB0aGUgY2hhdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdmFsaWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyAhdmFsaWQgJiYgKDxFbnRlclVzZXIgZG9uZT17Y2hhbmdlVmFsaWRhdGlvbn0vPil9ICAgICBcclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFBhdGgoaWQucmVwbGFjZSgvJTIwL2dpLCBcIiBcIikpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGgxIGlkPXtzdHlsZXMuaGVhZGluZ30+Q2hhdCBSb29tOiB7cGF0aH08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTZW5kIGEgbWVzc2FnZSAodG8gdGhlIHNlcnZlcikgdG8gYmUgYnJvYWRjYXN0ZWQgdG8gYWxsIGNvbm5lY3RlZCBjbGllbnRzIFxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIHdzLnNlbmQoYCR7dXNlcn06ICR7dmFsfWApXHJcbiAgICAgICAgc2V0VmFsKFwiXCIpXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gQ29ubmVjdCB0byB3ZWJob29rIHVwb24gcmVuZGVyaW5nIHRoZSBwYWdlIGFuZCBhZGQgaW4gaW50byBhIHN0YXRlIHNvIHlvdSBjYW4gYWNjZXNzIGl0IGxhdGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXSAvLyBUaGlzIHNhdmVzIEFMTCBtZXNzYWdlc1xyXG4gICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdLnJlcGxhY2UoLyUyMC9naSwgXCJcIik7XHJcbiAgICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICAgIGxldCB2YWxpZFVzZXIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGFkZEl0ZW1zKSBcclxuXHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGpvaW5lZCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBsZWZ0IHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgIGZ1bmN0aW9uIGFkZEl0ZW1zKGluZm8pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoaW5mby5kYXRhKVxyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLnNsaWNlKDAsKSAgLy8gV2UgY3JlYXRlIGFub3RoZXIgYXJyLCBzbyB3aGVuIHdlIHNldCBpdCB3aXRoIHNldE1lc3NhZ2VzIHRoZSBwYWdlIHdpbGwgcmVmcmVzaCBhbmQgdGhlIGxpc3QgKEluZm8pIHdpbGwgdXBkYXRlXHJcblxyXG4gICAgICAgIC8vIENhdGNoIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgY29udGFpbmluZyB0aGUgdXBkYXRlZCBudW1iZXIgb2YgbWVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgaXRcclxuICAgICAgICBpZiAoZGF0YS5jb25uZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRDb25uZWN0ZWQoZGF0YS5jb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0l0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIGl0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG5ld0l0ZW1zKVxyXG4gICAgICAgIHNldFVzZXIodmFsaWRVc2VyKVxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0V3Mod3MpIC8vIHNldCB0aGUgV2ViU29ja2V0IHRvIGJlIGdsb2JhbFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lc3NhZ2VMb2dnZXIgbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPE1lc3NhZ2VTZW5kZXIgdmFsdWU9e3ZhbH0gY2hhbmdlPXtjaGFuZ2V9IGxvZz17c2VuZERhdGF9IC8+XHJcbiAgICAgICAgPE1lbWJlckxpc3QgY2xpZW50cz17Y29ubmVjdGVkfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBMb2FkcyBhbGwgaW5jb21pbmcgbWVzc2FnZXMgaW4gdGhlIGNoYXRcclxuZnVuY3Rpb24gTWVzc2FnZUxvZ2dlcihwcm9wcykge1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gcHJvcHMubWVzc2FnZXNcclxuICAgIGxldCBsaXN0TWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlIGRhdGE9e2VsZW1lbnR9IGtleT17YCR7ZWxlbWVudC50b1N0cmluZygpfSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gfSAvPlxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubXNnTG9nZ2VyfT5cclxuICAgICAgICAgICAgPHVsIGlkPXtzdHlsZXMubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICB7bGlzdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBNZXNzYWdlU2VuZGVyKHByb3BzKSB7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHVzZXIgcHJlc3NlcyBlbnRlciBvbiB0aGUgaW5wdXQgKGluc3RlYWQgb2YgY2xpY2tpbmcgc2VuZCBtZXNzYWdlIGJ0bilcclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlTdHJva2UgPT09IDEzKSByZXR1cm4gcHJvcHMubG9nKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zZW5kTWVzc2FnZXN9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSBcclxuICAgICAgICAgICAgb25LZXlQcmVzcz17c2VuZE1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PlNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBUaGUgbnVtYmVyIG9mIGNvbm5lY3RlZCBtZW1iZXJzXHJcbmZ1bmN0aW9uIE1lbWJlckxpc3QocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbm5lY3RlZH0+XHJcbiAgICAgIDxoMT5Db25uZWN0ZWQgTWVtYmVyczoge3Byb3BzLmNsaWVudHN9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxsaT57cHJvcHMuZGF0YX08L2xpPlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZ1wiOiBcImNoYXRyb29tX2hlYWRpbmdfXzNZeHhEXCIsXG5cdFwibXNnTG9nZ2VyXCI6IFwiY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSlwiLFxuXHRcIm1lc3NhZ2VzXCI6IFwiY2hhdHJvb21fbWVzc2FnZXNfXzNrRlVHXCIsXG5cdFwic2VuZE1lc3NhZ2VzXCI6IFwiY2hhdHJvb21fc2VuZE1lc3NhZ2VzX18zdE54dlwiLFxuXHRcImNvbm5lY3RlZFwiOiBcImNoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXpcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9