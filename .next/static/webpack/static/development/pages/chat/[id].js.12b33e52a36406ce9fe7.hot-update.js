webpackHotUpdate("static\\development\\pages\\chat\\[id].js",{

/***/ "./pages/chat/[id].js":
/*!****************************!*\
  !*** ./pages/chat/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/chatroom.module.css */ "./styles/chatroom.module.css");
/* harmony import */ var _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/create_a_name.module.css */ "./styles/create_a_name.module.css");
/* harmony import */ var _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Post() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      valid = _useState[0],
      setValid = _useState[1]; // Check if they have a username, if not ask them for one


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (document.cookie.split(";").some(function (element) {
      return element.includes("username");
    })) {
      setValid(false);
    } else {
      setValid(false);
    }
  }); // If the client has an username cookie use it to connect to the chat, otherwise
  // give them a special forum to create their username and THEN connect them to the chat

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __jsx(EnterUser, null));
}

_s(Post, "s2BkWX/tapHuHfh22OeWDCUmNC4=");

_c = Post;

function EnterUser() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState2[0],
      setUser = _useState2[1];

  function update(e) {
    setUser(e.target.value);
  }

  function LogIn() {
    if (user === "") return; // Do not log empty names

    document.cookkie = "username=".concat(user);
  }

  return __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main
  }, __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center
  }, __jsx("h1", null, "Please login to continue"), __jsx("input", {
    type: "text",
    value: user,
    placeholder: "Ex: xx_Minecrafter_xx",
    onChange: update
  }), __jsx("br", null), __jsx("button", {
    onClick: "test"
  }, "Login")));
}

_s2(EnterUser, "O8A1O7ueRI69RLawqs90Wgk1R68=");

_c2 = EnterUser;

function Header() {
  _s3();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      path = _useState3[0],
      setPath = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    setPath(id.replace(/%20/gi, " "));
  }, []);
  return __jsx("h1", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading
  }, "Chat Room: ", path);
}

_s3(Header, "tzQ3iVYXtOYCxKLDj33ymqqe1Q0=");

_c3 = Header;

function Main(props) {
  _s4();

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      val = _useState4[0],
      setVal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      ws = _useState5[0],
      setWs = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      connected = _useState7[0],
      setConnected = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState8[0],
      setUser = _useState8[1];

  function change(e) {
    setVal(e.target.value);
  } // Send a message (to the server) to be broadcasted to all connected clients 


  function sendData() {
    if (val === "") return;
    ws.send("".concat(user, ": ").concat(val));
    setVal("");
  } // Connect to webhook upon rendering the page and add in into a state so you can access it later


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var items = []; // This saves ALL messages

    var id = location.pathname.split("/")[location.pathname.split("/").length - 1].replace(/%20/gi, "");
    var ws = new WebSocket("ws://localhost:8080/" + id);
    var validUser = document.cookie.split(";").find(function (element) {
      return element.includes("username");
    }).split("=")[1];
    ws.addEventListener("message", addItems);
    ws.addEventListener("open", function () {
      ws.send("".concat(validUser, " has joined the chat"));
    });
    window.addEventListener("unload", function () {
      ws.send("".concat(validUser, " has left the chat"));
    });

    function addItems(info) {
      var data = JSON.parse(info.data);
      var newItems = items.slice(0); // We create another arr, so when we set it with setMessages the page will refresh and the list (Info) will update
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


_s4(Main, "C5y29eWMoyRds+XFMlYrWwR0Bs4=");

_c4 = Main;

function MessageLogger(props) {
  var messages = props.messages;
  var listMessages = messages.map(function (element) {
    return __jsx(Message, {
      data: element,
      key: "".concat(element.toString()).concat(Math.floor(Math.random() * 100000))
    });
  });
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.msgLogger
  }, __jsx("ul", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.messages
  }, listMessages));
} // Render the input and the submit button


_c5 = MessageLogger;

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


_c6 = MessageSender;

function MemberList(props) {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.connected
  }, __jsx("h1", null, "Connected Members: ", props.clients));
}

_c7 = MemberList;

function Message(props) {
  return __jsx("li", null, props.data);
}

_c8 = Message;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "EnterUser");
$RefreshReg$(_c3, "Header");
$RefreshReg$(_c4, "Main");
$RefreshReg$(_c5, "MessageLogger");
$RefreshReg$(_c6, "MessageSender");
$RefreshReg$(_c7, "MemberList");
$RefreshReg$(_c8, "Message");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJFbnRlclVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkxvZ0luIiwiY29va2tpZSIsInVzZXJuYW1lIiwibWFpbiIsImNlbnRlciIsIkhlYWRlciIsInBhdGgiLCJzZXRQYXRoIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0eWxlcyIsImhlYWRpbmciLCJNYWluIiwicHJvcHMiLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImNoYW5nZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwidmFsaWRVc2VyIiwiZmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsIndpbmRvdyIsImluZm8iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbXMiLCJzbGljZSIsInVuZGVmaW5lZCIsInVuc2hpZnQiLCJNZXNzYWdlTG9nZ2VyIiwibGlzdE1lc3NhZ2VzIiwibWFwIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtc2dMb2dnZXIiLCJNZXNzYWdlU2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ3aGljaCIsImtleVN0cm9rZSIsImxvZyIsInNlbmRNZXNzYWdlcyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUtBLFNBQVNBLElBQVQsR0FBZ0I7QUFB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SyxNQUFFLEVBQUVILGtFQUFNLENBQUNVO0FBQWhCLEtBQ0YseUNBQXdCUCxLQUFLLENBQUMwQyxPQUE5QixDQURFLENBREo7QUFLSDs7TUFOUUQsVTs7QUFTVCxTQUFTRSxPQUFULENBQWlCM0MsS0FBakIsRUFBd0I7QUFDcEIsU0FBTyxrQkFBS0EsS0FBSyxDQUFDb0IsSUFBWCxDQUFQO0FBQ0g7O01BRlF1QixPO0FBT003RSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcy4xMmIzM2U1MmEzNjQwNmNlOWZlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhdHJvb20ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB1c2VybmFtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZV9hX25hbWUubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuc29tZShlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkpIHtcclxuICAgICAgICAgICBzZXRWYWxpZChmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRWYWxpZChmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICBcclxuICAgIC8vIElmIHRoZSBjbGllbnQgaGFzIGFuIHVzZXJuYW1lIGNvb2tpZSB1c2UgaXQgdG8gY29ubmVjdCB0byB0aGUgY2hhdCwgb3RoZXJ3aXNlXHJcbiAgICAvLyBnaXZlIHRoZW0gYSBzcGVjaWFsIGZvcnVtIHRvIGNyZWF0ZSB0aGVpciB1c2VybmFtZSBhbmQgVEhFTiBjb25uZWN0IHRoZW0gdG8gdGhlIGNoYXRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHZhbGlkICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgIXZhbGlkICYmICg8RW50ZXJVc2VyLz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVudGVyVXNlcigpIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKGUpIHtcclxuICAgICAgICBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIExvZ0luKCkge1xyXG4gICAgICAgIGlmICh1c2VyID09PSBcIlwiKSByZXR1cm4gLy8gRG8gbm90IGxvZyBlbXB0eSBuYW1lc1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29ra2llID0gYHVzZXJuYW1lPSR7dXNlcn1gXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt1c2VybmFtZS5jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcn0gcGxhY2Vob2xkZXI9XCJFeDogeHhfTWluZWNyYWZ0ZXJfeHhcIiBvbkNoYW5nZT17dXBkYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9XCJ0ZXN0XCIgPkxvZ2luPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFBhdGgoaWQucmVwbGFjZSgvJTIwL2dpLCBcIiBcIikpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGgxIGlkPXtzdHlsZXMuaGVhZGluZ30+Q2hhdCBSb29tOiB7cGF0aH08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTZW5kIGEgbWVzc2FnZSAodG8gdGhlIHNlcnZlcikgdG8gYmUgYnJvYWRjYXN0ZWQgdG8gYWxsIGNvbm5lY3RlZCBjbGllbnRzIFxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIHdzLnNlbmQoYCR7dXNlcn06ICR7dmFsfWApXHJcbiAgICAgICAgc2V0VmFsKFwiXCIpXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gQ29ubmVjdCB0byB3ZWJob29rIHVwb24gcmVuZGVyaW5nIHRoZSBwYWdlIGFuZCBhZGQgaW4gaW50byBhIHN0YXRlIHNvIHlvdSBjYW4gYWNjZXNzIGl0IGxhdGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXSAvLyBUaGlzIHNhdmVzIEFMTCBtZXNzYWdlc1xyXG4gICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdLnJlcGxhY2UoLyUyMC9naSwgXCJcIik7XHJcbiAgICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICAgIGxldCB2YWxpZFVzZXIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGFkZEl0ZW1zKSBcclxuXHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGpvaW5lZCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBsZWZ0IHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgIGZ1bmN0aW9uIGFkZEl0ZW1zKGluZm8pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoaW5mby5kYXRhKVxyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLnNsaWNlKDAsKSAgLy8gV2UgY3JlYXRlIGFub3RoZXIgYXJyLCBzbyB3aGVuIHdlIHNldCBpdCB3aXRoIHNldE1lc3NhZ2VzIHRoZSBwYWdlIHdpbGwgcmVmcmVzaCBhbmQgdGhlIGxpc3QgKEluZm8pIHdpbGwgdXBkYXRlXHJcblxyXG4gICAgICAgIC8vIENhdGNoIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgY29udGFpbmluZyB0aGUgdXBkYXRlZCBudW1iZXIgb2YgbWVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgaXRcclxuICAgICAgICBpZiAoZGF0YS5jb25uZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRDb25uZWN0ZWQoZGF0YS5jb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0l0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIGl0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG5ld0l0ZW1zKVxyXG4gICAgICAgIHNldFVzZXIodmFsaWRVc2VyKVxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0V3Mod3MpIC8vIHNldCB0aGUgV2ViU29ja2V0IHRvIGJlIGdsb2JhbFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lc3NhZ2VMb2dnZXIgbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPE1lc3NhZ2VTZW5kZXIgdmFsdWU9e3ZhbH0gY2hhbmdlPXtjaGFuZ2V9IGxvZz17c2VuZERhdGF9IC8+XHJcbiAgICAgICAgPE1lbWJlckxpc3QgY2xpZW50cz17Y29ubmVjdGVkfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBMb2FkcyBhbGwgaW5jb21pbmcgbWVzc2FnZXMgaW4gdGhlIGNoYXRcclxuZnVuY3Rpb24gTWVzc2FnZUxvZ2dlcihwcm9wcykge1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gcHJvcHMubWVzc2FnZXNcclxuICAgIGxldCBsaXN0TWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlIGRhdGE9e2VsZW1lbnR9IGtleT17YCR7ZWxlbWVudC50b1N0cmluZygpfSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gfSAvPlxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubXNnTG9nZ2VyfT5cclxuICAgICAgICAgICAgPHVsIGlkPXtzdHlsZXMubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICB7bGlzdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBNZXNzYWdlU2VuZGVyKHByb3BzKSB7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHVzZXIgcHJlc3NlcyBlbnRlciBvbiB0aGUgaW5wdXQgKGluc3RlYWQgb2YgY2xpY2tpbmcgc2VuZCBtZXNzYWdlIGJ0bilcclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlTdHJva2UgPT09IDEzKSByZXR1cm4gcHJvcHMubG9nKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zZW5kTWVzc2FnZXN9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSBcclxuICAgICAgICAgICAgb25LZXlQcmVzcz17c2VuZE1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PlNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBUaGUgbnVtYmVyIG9mIGNvbm5lY3RlZCBtZW1iZXJzXHJcbmZ1bmN0aW9uIE1lbWJlckxpc3QocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbm5lY3RlZH0+XHJcbiAgICAgIDxoMT5Db25uZWN0ZWQgTWVtYmVyczoge3Byb3BzLmNsaWVudHN9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxsaT57cHJvcHMuZGF0YX08L2xpPlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==