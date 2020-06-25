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
    _s3 = $RefreshSig$();


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
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __jsx(EnterUser, null));
}

_s(Post, "s2BkWX/tapHuHfh22OeWDCUmNC4=");

_c = Post;

function EnterUser() {
  return __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main
  }, __jsx("div", {
    id: _styles_create_a_name_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.center
  }, __jsx("h1", null, "Please login to continue"), __jsx("input", {
    type: "text",
    placeholder: "Ex: xx_Minecrafter_xx"
  }), __jsx("br", null), __jsx("button", {
    onClick: "test"
  }, "Login")));
}

_c2 = EnterUser;

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

_c3 = Header;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJFbnRlclVzZXIiLCJ1c2VybmFtZSIsIm1haW4iLCJjZW50ZXIiLCJIZWFkZXIiLCJwYXRoIiwic2V0UGF0aCIsImlkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxlbmd0aCIsInJlcGxhY2UiLCJzdHlsZXMiLCJoZWFkaW5nIiwiTWFpbiIsInByb3BzIiwidmFsIiwic2V0VmFsIiwid3MiLCJzZXRXcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJ1c2VyIiwic2V0VXNlciIsImNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwidmFsaWRVc2VyIiwiZmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsIndpbmRvdyIsImluZm8iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbXMiLCJzbGljZSIsInVuZGVmaW5lZCIsInVuc2hpZnQiLCJNZXNzYWdlTG9nZ2VyIiwibGlzdE1lc3NhZ2VzIiwibWFwIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtc2dMb2dnZXIiLCJNZXNzYWdlU2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ3aGljaCIsImtleVN0cm9rZSIsImxvZyIsInNlbmRNZXNzYWdlcyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBS0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEtB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QUFmLEtBQ0M0QixZQURELENBREosQ0FESjtBQU9ILEMsQ0FFRDs7O01BaEJTRCxhOztBQWlCVCxTQUFTUSxhQUFULENBQXVCeEMsS0FBdkIsRUFBOEI7QUFFMUI7QUFDQSxXQUFTeUMsV0FBVCxDQUFxQjdCLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUlBLENBQUMsQ0FBQzhCLEtBQUYsS0FBWSxFQUFaLElBQWtCOUIsQ0FBQyxDQUFDK0IsU0FBRixLQUFnQixFQUF0QyxFQUEwQyxPQUFPM0MsS0FBSyxDQUFDNEMsR0FBTixFQUFQO0FBQzdDOztBQUVELFNBQ0k7QUFBSyxNQUFFLEVBQUUvQyxrRUFBTSxDQUFDZ0Q7QUFBaEIsS0FFSTtBQUNBLFNBQUssRUFBRTdDLEtBQUssQ0FBQ2MsS0FEYjtBQUVBLFlBQVEsRUFBRWQsS0FBSyxDQUFDVyxNQUZoQjtBQUdBLGNBQVUsRUFBRThCO0FBSFosSUFGSixFQVFJO0FBQVEsV0FBTyxFQUFFekMsS0FBSyxDQUFDNEM7QUFBdkIsWUFSSixDQURKO0FBYUgsQyxDQUdEOzs7TUF2QlNKLGE7O0FBd0JULFNBQVNNLFVBQVQsQ0FBb0I5QyxLQUFwQixFQUEyQjtBQUN2QixTQUNJO0FBQUssTUFBRSxFQUFFSCxrRUFBTSxDQUFDVTtBQUFoQixLQUNGLHlDQUF3QlAsS0FBSyxDQUFDK0MsT0FBOUIsQ0FERSxDQURKO0FBS0g7O01BTlFELFU7O0FBU1QsU0FBU0UsT0FBVCxDQUFpQmhELEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU8sa0JBQUtBLEtBQUssQ0FBQ3lCLElBQVgsQ0FBUDtBQUNIOztNQUZRdUIsTztBQU9NMUUsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMuNGRjMmE4NTI4YzhiZGI5ZWIwYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgdXNlcm5hbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVfYV9uYW1lLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIGNvbnN0IFt2YWxpZCwgc2V0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGEgdXNlcm5hbWUsIGlmIG5vdCBhc2sgdGhlbSBmb3Igb25lXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLnNvbWUoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpKSB7XHJcbiAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdmFsaWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyAhdmFsaWQgJiYgKDxFbnRlclVzZXIvPil9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gRW50ZXJVc2VyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXt1c2VybmFtZS5tYWlufT5cclxuICAgICAgICAgICAgPGRpdiBpZD17dXNlcm5hbWUuY2VudGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMT5QbGVhc2UgbG9naW4gdG8gY29udGludWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeDogeHhfTWluZWNyYWZ0ZXJfeHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9XCJ0ZXN0XCI+TG9naW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgc2V0UGF0aChpZC5yZXBsYWNlKC8lMjAvZ2ksIFwiIFwiKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8aDEgaWQ9e3N0eWxlcy5oZWFkaW5nfT5DaGF0IFJvb206IHtwYXRofTwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcclxuICAgIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3dzLCBzZXRXc10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICBcclxuICAgIC8vIFNlbmQgYSBtZXNzYWdlICh0byB0aGUgc2VydmVyKSB0byBiZSBicm9hZGNhc3RlZCB0byBhbGwgY29ubmVjdGVkIGNsaWVudHMgXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpIHtcclxuICAgICAgICBpZiAodmFsID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgd3Muc2VuZChgJHt1c2VyfTogJHt2YWx9YClcclxuICAgICAgICBzZXRWYWwoXCJcIilcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBDb25uZWN0IHRvIHdlYmhvb2sgdXBvbiByZW5kZXJpbmcgdGhlIHBhZ2UgYW5kIGFkZCBpbiBpbnRvIGEgc3RhdGUgc28geW91IGNhbiBhY2Nlc3MgaXQgbGF0ZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0ucmVwbGFjZSgvJTIwL2dpLCBcIlwiKTtcclxuICAgICAgbGV0IHdzID0gIG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL1wiK2lkKTtcclxuICAgICAgbGV0IHZhbGlkVXNlciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkuc3BsaXQoXCI9XCIpWzFdO1xyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgYWRkSXRlbXMpIFxyXG5cclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgam9pbmVkIHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGxlZnQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICAgZnVuY3Rpb24gYWRkSXRlbXMoaW5mbykge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpbmZvLmRhdGEpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpICAvLyBXZSBjcmVhdGUgYW5vdGhlciBhcnIsIHNvIHdoZW4gd2Ugc2V0IGl0IHdpdGggc2V0TWVzc2FnZXMgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIGFuZCB0aGUgbGlzdCAoSW5mbykgd2lsbCB1cGRhdGVcclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBjb250YWluaW5nIHRoZSB1cGRhdGVkIG51bWJlciBvZiBtZW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBpdFxyXG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldENvbm5lY3RlZChkYXRhLmNvbm5lY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3SXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgaXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0TWVzc2FnZXMobmV3SXRlbXMpXHJcbiAgICAgICAgc2V0VXNlcih2YWxpZFVzZXIpXHJcbiAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRXcyh3cykgLy8gc2V0IHRoZSBXZWJTb2NrZXQgdG8gYmUgZ2xvYmFsXHJcbiAgICAgXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TWVzc2FnZUxvZ2dlciBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgICA8TWVzc2FnZVNlbmRlciB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgICAgICA8TWVtYmVyTGlzdCBjbGllbnRzPXtjb25uZWN0ZWR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIExvYWRzIGFsbCBpbmNvbWluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdFxyXG5mdW5jdGlvbiBNZXNzYWdlTG9nZ2VyKHByb3BzKSB7XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBwcm9wcy5tZXNzYWdlc1xyXG4gICAgbGV0IGxpc3RNZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gPE1lc3NhZ2UgZGF0YT17ZWxlbWVudH0ga2V5PXtgJHtlbGVtZW50LnRvU3RyaW5nKCl9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWB9IC8+XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5tc2dMb2dnZXJ9PlxyXG4gICAgICAgICAgICA8dWwgaWQ9e3N0eWxlcy5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgIHtsaXN0TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFJlbmRlciB0aGUgaW5wdXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbmZ1bmN0aW9uIE1lc3NhZ2VTZW5kZXIocHJvcHMpIHtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdXNlciBwcmVzc2VzIGVudGVyIG9uIHRoZSBpbnB1dCAoaW5zdGVhZCBvZiBjbGlja2luZyBzZW5kIG1lc3NhZ2UgYnRuKVxyXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fCBlLmtleVN0cm9rZSA9PT0gMTMpIHJldHVybiBwcm9wcy5sb2coKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNlbmRNZXNzYWdlc30+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9IFxyXG4gICAgICAgICAgICBvbktleVByZXNzPXtzZW5kTWVzc2FnZX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+U2VuZDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIFRoZSBudW1iZXIgb2YgY29ubmVjdGVkIG1lbWJlcnNcclxuZnVuY3Rpb24gTWVtYmVyTGlzdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29ubmVjdGVkfT5cclxuICAgICAgPGgxPkNvbm5lY3RlZCBNZW1iZXJzOiB7cHJvcHMuY2xpZW50c308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGxpPntwcm9wcy5kYXRhfTwvbGk+XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9