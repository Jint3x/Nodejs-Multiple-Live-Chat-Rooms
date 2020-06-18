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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Post = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
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
    ws.addEventListener("message", data => {
      let newItems = items.slice(0); // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update

      newItems.push(data.data);
      items.push(data.data);
      setMessages(newItems);
    });
    setWs(ws);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Info, {
    messages: messages
  }), __jsx(Input, {
    value: val,
    change: change,
    log: sendData
  }));
}; // Render the input and the submit button


function Input(props) {
  return __jsx("div", null, __jsx("input", {
    value: props.value,
    onChange: props.change
  }), __jsx("button", {
    onClick: props.log
  }, "Click me to change"));
} // Render all messages


function Info(props) {
  let messages = props.messages;
  let lists = messages.map(element => {
    return __jsx(List, {
      message: element,
      key: element.toString()
    });
  });
  console.log(messages, lists);
  return __jsx("ul", null, lists);
}

function List(props) {
  return __jsx("li", null, props.message);
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/chat/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Shi\Desktop\Live Chat\pages\chat\[id].js */"./pages/chat/[id].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhdC8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidmFsIiwic2V0VmFsIiwidXNlU3RhdGUiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwic2VuZCIsInVzZUVmZmVjdCIsIml0ZW1zIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwibGVuZ3RoIiwiV2ViU29ja2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJuZXdJdGVtcyIsInNsaWNlIiwicHVzaCIsIklucHV0IiwicHJvcHMiLCJsb2ciLCJJbmZvIiwibGlzdHMiLCJtYXAiLCJlbGVtZW50IiwidG9TdHJpbmciLCJjb25zb2xlIiwiTGlzdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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QUFHLEVBQUVBLE9BQU8sQ0FBQ0MsUUFBUjtBQUE3QixNQUFQO0FBQ0YsR0FGVyxDQUFaO0FBR0FDLFNBQU8sQ0FBQ04sR0FBUixDQUFZdEIsUUFBWixFQUFzQndCLEtBQXRCO0FBQ0EsU0FDQSxrQkFDQ0EsS0FERCxDQURBO0FBS0M7O0FBRUwsU0FBU0ssSUFBVCxDQUFjUixLQUFkLEVBQXFCO0FBQ2pCLFNBQU8sa0JBQUtBLEtBQUssQ0FBQ1MsT0FBWCxDQUFQO0FBQ0g7O0FBSWN4QyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3dzLCBzZXRXc10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZShlKSB7XHJcbiAgICAgIHNldFZhbChlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlbmREYXRhKCkge1xyXG4gICAgICB3cy5zZW5kKHZhbClcclxuICAgICAgc2V0VmFsKFwiXCIpXHJcbiAgfVxyXG5cclxuXHJcbi8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZSBhbmQgYWRkIGluIGludG8gYSBzdGF0ZSBzbyB5b3UgY2FuIGFjY2VzcyBpdCBsYXRlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaXRlbXMgPSBbXSAvLyBUaGlzIHNhdmVzIEFMTCBtZXNzYWdlc1xyXG4gICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLnNsaWNlKDAsKSAvLyBXZSBjcmVhdGUgYW5vdGhlciBhcnIsIHNvIHdoZW4gd2Ugc2V0IGl0IHdpdGggc2V0TWVzc2FnZXMgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIGFuZCB0aGUgbGlzdCAoSW5mbykgd2lsbCB1cGRhdGVcclxuICAgICAgICBuZXdJdGVtcy5wdXNoKGRhdGEuZGF0YSlcclxuICAgICAgICBpdGVtcy5wdXNoKGRhdGEuZGF0YSlcclxuICAgICAgICBzZXRNZXNzYWdlcyhuZXdJdGVtcylcclxuICAgIH0pXHJcbiAgICBzZXRXcyh3cylcclxuICB9LCBbXSlcclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgPD5cclxuICAgICAgPEluZm8gbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgIDxJbnB1dCB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+Q2xpY2sgbWUgdG8gY2hhbmdlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBSZW5kZXIgYWxsIG1lc3NhZ2VzXHJcbmZ1bmN0aW9uIEluZm8ocHJvcHMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IHByb3BzLm1lc3NhZ2VzXHJcbiAgICBcclxuICAgIGxldCBsaXN0cyA9IG1lc3NhZ2VzLm1hcCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgcmV0dXJuIDxMaXN0IG1lc3NhZ2U9e2VsZW1lbnR9IGtleT17ZWxlbWVudC50b1N0cmluZygpfS8+XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMsIGxpc3RzKVxyXG4gICAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgIHtsaXN0c31cclxuICAgIDwvdWw+XHJcbiAgICApXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGxpPntwcm9wcy5tZXNzYWdlfTwvbGk+XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=