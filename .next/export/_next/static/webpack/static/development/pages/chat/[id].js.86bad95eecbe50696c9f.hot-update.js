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
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      valid = _useState[0],
      setValid = _useState[1]; // Check if they have a username, if not ask them for one


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!document.cookie.split(";").some(function (element) {
      return element.includes("username");
    })) {
      var username = prompt("Enter your username");
      document.cookie = "username=".concat(username);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), valid && __jsx(EnterUser, null));
}

_s(Post, "s2BkWX/tapHuHfh22OeWDCUmNC4=");

_c = Post;

function Header() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      path = _useState2[0],
      setPath = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var id = location.pathname.split("/")[location.pathname.split("/").length - 1];
    setPath(id.replace(/%20/gi, " "));
  }, []);
  return __jsx("h1", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heading
  }, "Chat Room: ", path);
}

_s2(Header, "tzQ3iVYXtOYCxKLDj33ymqqe1Q0=");

_c2 = Header;

function Main(props) {
  _s3();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      val = _useState3[0],
      setVal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      ws = _useState4[0],
      setWs = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState5[0],
      setMessages = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      connected = _useState6[0],
      setConnected = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState7[0],
      setUser = _useState7[1];

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


_s3(Main, "C5y29eWMoyRds+XFMlYrWwR0Bs4=");

_c3 = Main;

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


_c4 = MessageLogger;

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


_c5 = MessageSender;

function MemberList(props) {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.connected
  }, __jsx("h1", null, "Connected Members: ", props.clients));
}

_c6 = MemberList;

function Message(props) {
  return __jsx("li", null, props.data);
}

_c7 = Message;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Main");
$RefreshReg$(_c4, "MessageLogger");
$RefreshReg$(_c5, "MessageSender");
$RefreshReg$(_c6, "MemberList");
$RefreshReg$(_c7, "Message");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJ1c2VybmFtZSIsInByb21wdCIsIkhlYWRlciIsInBhdGgiLCJzZXRQYXRoIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0eWxlcyIsImhlYWRpbmciLCJNYWluIiwicHJvcHMiLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZXIiLCJzZXRVc2VyIiwiY2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZERhdGEiLCJzZW5kIiwiaXRlbXMiLCJXZWJTb2NrZXQiLCJ2YWxpZFVzZXIiLCJmaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW1zIiwid2luZG93IiwiaW5mbyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXdJdGVtcyIsInNsaWNlIiwidW5kZWZpbmVkIiwidW5zaGlmdCIsIk1lc3NhZ2VMb2dnZXIiLCJsaXN0TWVzc2FnZXMiLCJtYXAiLCJ0b1N0cmluZyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1zZ0xvZ2dlciIsIk1lc3NhZ2VTZW5kZXIiLCJzZW5kTWVzc2FnZSIsIndoaWNoIiwia2V5U3Ryb2tlIiwibG9nIiwic2VuZE1lc3NhZ2VzIiwiTWVtYmVyTGlzdCIsImNsaWVudHMiLCJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxLQUFELENBRHRCO0FBQUEsTUFDTEMsS0FESztB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QUVELFNBQ0k7QUFBSyxNQUFFLEVBQUUvQyxrRUFBTSxDQUFDZ0Q7QUFBaEIsS0FFSTtBQUNBLFNBQUssRUFBRTdDLEtBQUssQ0FBQ2MsS0FEYjtBQUVBLFlBQVEsRUFBRWQsS0FBSyxDQUFDVyxNQUZoQjtBQUdBLGNBQVUsRUFBRThCO0FBSFosSUFGSixFQVFJO0FBQVEsV0FBTyxFQUFFekMsS0FBSyxDQUFDNEM7QUFBdkIsWUFSSixDQURKO0FBYUgsQyxDQUdEOzs7TUF2QlNKLGE7O0FBd0JULFNBQVNNLFVBQVQsQ0FBb0I5QyxLQUFwQixFQUEyQjtBQUN2QixTQUNJO0FBQUssTUFBRSxFQUFFSCxrRUFBTSxDQUFDVTtBQUFoQixLQUNGLHlDQUF3QlAsS0FBSyxDQUFDK0MsT0FBOUIsQ0FERSxDQURKO0FBS0g7O01BTlFELFU7O0FBU1QsU0FBU0UsT0FBVCxDQUFpQmhELEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU8sa0JBQUtBLEtBQUssQ0FBQ3lCLElBQVgsQ0FBUDtBQUNIOztNQUZRdUIsTztBQU9NeEUsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMuODZiYWQ5NWVlY2JlNTA2OTZjOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIGNvbnN0IFt2YWxpZCwgc2V0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGEgdXNlcm5hbWUsIGlmIG5vdCBhc2sgdGhlbSBmb3Igb25lXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5zb21lKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKSkge1xyXG4gICAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBwcm9tcHQoXCJFbnRlciB5b3VyIHVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcm5hbWU9JHt1c2VybmFtZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdmFsaWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8RW50ZXJVc2VyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgICAgICBzZXRQYXRoKGlkLnJlcGxhY2UoLyUyMC9naSwgXCIgXCIpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxoMSBpZD17c3R5bGVzLmhlYWRpbmd9PkNoYXQgUm9vbToge3BhdGh9PC9oMT5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbihwcm9wcykge1xyXG4gICAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbd3MsIHNldFdzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU2VuZCBhIG1lc3NhZ2UgKHRvIHRoZSBzZXJ2ZXIpIHRvIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBjb25uZWN0ZWQgY2xpZW50cyBcclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKCkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IFwiXCIpIHJldHVybjtcclxuICAgICAgICB3cy5zZW5kKGAke3VzZXJ9OiAke3ZhbH1gKVxyXG4gICAgICAgIHNldFZhbChcIlwiKVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZSBhbmQgYWRkIGluIGludG8gYSBzdGF0ZSBzbyB5b3UgY2FuIGFjY2VzcyBpdCBsYXRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW10gLy8gVGhpcyBzYXZlcyBBTEwgbWVzc2FnZXNcclxuICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXS5yZXBsYWNlKC8lMjAvZ2ksIFwiXCIpO1xyXG4gICAgICBsZXQgd3MgPSAgbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvXCIraWQpO1xyXG4gICAgICBsZXQgdmFsaWRVc2VyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKS5zcGxpdChcIj1cIilbMV07XHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBhZGRJdGVtcykgXHJcblxyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBqb2luZWQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgbGVmdCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgICBmdW5jdGlvbiBhZGRJdGVtcyhpbmZvKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGluZm8uZGF0YSlcclxuICAgICAgICBsZXQgbmV3SXRlbXMgPSBpdGVtcy5zbGljZSgwLCkgIC8vIFdlIGNyZWF0ZSBhbm90aGVyIGFyciwgc28gd2hlbiB3ZSBzZXQgaXQgd2l0aCBzZXRNZXNzYWdlcyB0aGUgcGFnZSB3aWxsIHJlZnJlc2ggYW5kIHRoZSBsaXN0IChJbmZvKSB3aWxsIHVwZGF0ZVxyXG5cclxuICAgICAgICAvLyBDYXRjaCBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGNvbnRhaW5pbmcgdGhlIHVwZGF0ZWQgbnVtYmVyIG9mIG1lbWJlcnNcclxuICAgICAgICAvLyBhbmQgdXBkYXRlIGl0XHJcbiAgICAgICAgaWYgKGRhdGEuY29ubmVjdGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0Q29ubmVjdGVkKGRhdGEuY29ubmVjdGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdJdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBpdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBzZXRNZXNzYWdlcyhuZXdJdGVtcylcclxuICAgICAgICBzZXRVc2VyKHZhbGlkVXNlcilcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFdzKHdzKSAvLyBzZXQgdGhlIFdlYlNvY2tldCB0byBiZSBnbG9iYWxcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZXNzYWdlTG9nZ2VyIG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxNZXNzYWdlU2VuZGVyIHZhbHVlPXt2YWx9IGNoYW5nZT17Y2hhbmdlfSBsb2c9e3NlbmREYXRhfSAvPlxyXG4gICAgICAgIDxNZW1iZXJMaXN0IGNsaWVudHM9e2Nvbm5lY3RlZH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gTG9hZHMgYWxsIGluY29taW5nIG1lc3NhZ2VzIGluIHRoZSBjaGF0XHJcbmZ1bmN0aW9uIE1lc3NhZ2VMb2dnZXIocHJvcHMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IHByb3BzLm1lc3NhZ2VzXHJcbiAgICBsZXQgbGlzdE1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiA8TWVzc2FnZSBkYXRhPXtlbGVtZW50fSBrZXk9e2Ake2VsZW1lbnQudG9TdHJpbmcoKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YH0gLz5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1zZ0xvZ2dlcn0+XHJcbiAgICAgICAgICAgIDx1bCBpZD17c3R5bGVzLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAge2xpc3RNZXNzYWdlc31cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gUmVuZGVyIHRoZSBpbnB1dCBhbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuZnVuY3Rpb24gTWVzc2FnZVNlbmRlcihwcm9wcykge1xyXG5cclxuICAgIC8vIFJ1bnMgd2hlbiB1c2VyIHByZXNzZXMgZW50ZXIgb24gdGhlIGlucHV0IChpbnN0ZWFkIG9mIGNsaWNraW5nIHNlbmQgbWVzc2FnZSBidG4pXHJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzIHx8IGUua2V5U3Ryb2tlID09PSAxMykgcmV0dXJuIHByb3BzLmxvZygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuc2VuZE1lc3NhZ2VzfT5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e3NlbmRNZXNzYWdlfSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMubG9nfT5TZW5kPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gVGhlIG51bWJlciBvZiBjb25uZWN0ZWQgbWVtYmVyc1xyXG5mdW5jdGlvbiBNZW1iZXJMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb25uZWN0ZWR9PlxyXG4gICAgICA8aDE+Q29ubmVjdGVkIE1lbWJlcnM6IHtwcm9wcy5jbGllbnRzfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8bGk+e3Byb3BzLmRhdGF9PC9saT5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=