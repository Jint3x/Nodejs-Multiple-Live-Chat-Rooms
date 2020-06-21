module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post(req, res) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null));
}

function Header() {
  const {
    0: path,
    1: setPath
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    setPath(id);
  }, []);
  return __jsx("h1", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading
  }, "Chat Room: ", path);
}

function Main() {
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

  function change(e) {
    setVal(e.target.value);
  }

  function sendData() {
    ws.send(val);
    setVal("");
  } // Connect to webhook upon rendering the page and add in into a state so you can access it later


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let items = []; // This saves ALL messages

    let id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    let ws = new WebSocket("ws://localhost:8080/" + id);
    ws.addEventListener("message", addItems);

    function addItems(data) {
      let newItems = items.slice(0); // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update

      newItems.push(data.data);
      items.push(data.data);
      setMessages(newItems);
    }

    setWs(ws); // set the WebSocket to be global
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MessageLogger, null), __jsx(MessageSender, {
    value: val,
    change: change,
    log: sendData
  }), __jsx(MemberList, null));
}

function MessageLogger() {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.msgLogger
  });
} // Render the input and the submit button


function MessageSender(props) {
  return __jsx("div", null, __jsx("input", {
    value: props.value,
    onChange: props.change
  }), __jsx("button", {
    onClick: props.log
  }, "Click me to change"));
}

function MemberList() {
  return __jsx("h1", null, "Test Section");
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
	"msgLogger": "chatroom_msgLogger__XZUFJ"
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQb3N0IiwicmVxIiwicmVzIiwiSGVhZGVyIiwicGF0aCIsInNldFBhdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImlkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwibGVuZ3RoIiwic3R5bGVzIiwiaGVhZGluZyIsIk1haW4iLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW1zIiwiZGF0YSIsIm5ld0l0ZW1zIiwic2xpY2UiLCJwdXNoIiwiTWVzc2FnZUxvZ2dlciIsIm1zZ0xvZ2dlciIsIk1lc3NhZ2VTZW5kZXIiLCJwcm9wcyIsImxvZyIsIk1lbWJlckxpc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QTJCLFVBQU0sRUFBRU0sTUFBbkM7QUFBMkMsT0FBRyxFQUFFSTtBQUFoRCxJQUZBLEVBR0EsTUFBQyxVQUFELE9BSEEsQ0FESjtBQU9IOztBQUlELFNBQVNVLGFBQVQsR0FBeUI7QUFDckIsU0FDSTtBQUFLLE1BQUUsRUFBRXZCLGtFQUFNLENBQUN3QjtBQUFoQixJQURKO0FBS0gsQyxDQUVEOzs7QUFDQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUMxQixTQUNJLG1CQUNJO0FBQU8sU0FBSyxFQUFFQSxLQUFLLENBQUNkLEtBQXBCO0FBQTJCLFlBQVEsRUFBRWMsS0FBSyxDQUFDakI7QUFBM0MsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFaUIsS0FBSyxDQUFDQztBQUF2QiwwQkFGSixDQURKO0FBTUg7O0FBR0QsU0FBU0MsVUFBVCxHQUFzQjtBQUNsQixTQUFPLGlDQUFQO0FBQ0g7O0FBTWN6QyxtRUFBZixFOzs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgICAgICBzZXRQYXRoKGlkKVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8aDEgaWQ9e3N0eWxlcy5oZWFkaW5nfT5DaGF0IFJvb206IHtwYXRofTwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpIHtcclxuICAgICAgICB3cy5zZW5kKHZhbClcclxuICAgICAgICBzZXRWYWwoXCJcIilcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBDb25uZWN0IHRvIHdlYmhvb2sgdXBvbiByZW5kZXJpbmcgdGhlIHBhZ2UgYW5kIGFkZCBpbiBpbnRvIGEgc3RhdGUgc28geW91IGNhbiBhY2Nlc3MgaXQgbGF0ZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBhZGRJdGVtcykgXHJcblxyXG5cclxuICAgICBmdW5jdGlvbiBhZGRJdGVtcyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpIC8vIFdlIGNyZWF0ZSBhbm90aGVyIGFyciwgc28gd2hlbiB3ZSBzZXQgaXQgd2l0aCBzZXRNZXNzYWdlcyB0aGUgcGFnZSB3aWxsIHJlZnJlc2ggYW5kIHRoZSBsaXN0IChJbmZvKSB3aWxsIHVwZGF0ZVxyXG4gICAgICAgICAgbmV3SXRlbXMucHVzaChkYXRhLmRhdGEpXHJcbiAgICAgICAgICBpdGVtcy5wdXNoKGRhdGEuZGF0YSlcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKG5ld0l0ZW1zKVxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0V3Mod3MpIC8vIHNldCB0aGUgV2ViU29ja2V0IHRvIGJlIGdsb2JhbFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZXNzYWdlTG9nZ2VyIC8+XHJcbiAgICAgICAgPE1lc3NhZ2VTZW5kZXIgdmFsdWU9e3ZhbH0gY2hhbmdlPXtjaGFuZ2V9IGxvZz17c2VuZERhdGF9IC8+XHJcbiAgICAgICAgPE1lbWJlckxpc3QgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlTG9nZ2VyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubXNnTG9nZ2VyfT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFJlbmRlciB0aGUgaW5wdXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbmZ1bmN0aW9uIE1lc3NhZ2VTZW5kZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PkNsaWNrIG1lIHRvIGNoYW5nZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVtYmVyTGlzdCgpIHtcclxuICAgIHJldHVybiA8aDE+VGVzdCBTZWN0aW9uPC9oMT5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nXCI6IFwiY2hhdHJvb21faGVhZGluZ19fM1l4eERcIixcblx0XCJtc2dMb2dnZXJcIjogXCJjaGF0cm9vbV9tc2dMb2dnZXJfX1haVUZKXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9