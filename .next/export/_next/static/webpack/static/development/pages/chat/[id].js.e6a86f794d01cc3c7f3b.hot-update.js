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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJFbnRlclVzZXIiLCJ1c2VyIiwic2V0VXNlciIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJuYW1lIiwibWFpbiIsImNlbnRlciIsIkhlYWRlciIsInBhdGgiLCJzZXRQYXRoIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0eWxlcyIsImhlYWRpbmciLCJNYWluIiwicHJvcHMiLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImNoYW5nZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwidmFsaWRVc2VyIiwiZmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsIndpbmRvdyIsImluZm8iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbXMiLCJzbGljZSIsInVuZGVmaW5lZCIsInVuc2hpZnQiLCJNZXNzYWdlTG9nZ2VyIiwibGlzdE1lc3NhZ2VzIiwibWFwIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtc2dMb2dnZXIiLCJNZXNzYWdlU2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ3aGljaCIsImtleVN0cm9rZSIsImxvZyIsInNlbmRNZXNzYWdlcyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUtBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDY0Msc0RB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LFNBQU8sa0JBQUtBLEtBQUssQ0FBQ29CLElBQVgsQ0FBUDtBQUNIOztNQUZRdUIsTztBQU9NM0UsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMuZTZhODZmNzk0ZDAxY2MzYzdmM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgdXNlcm5hbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jcmVhdGVfYV9uYW1lLm1vZHVsZS5jc3NcIlxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuICAgIGNvbnN0IFt2YWxpZCwgc2V0VmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhleSBoYXZlIGEgdXNlcm5hbWUsIGlmIG5vdCBhc2sgdGhlbSBmb3Igb25lXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLnNvbWUoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpKSB7XHJcbiAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgXHJcbiAgICAvLyBJZiB0aGUgY2xpZW50IGhhcyBhbiB1c2VybmFtZSBjb29raWUgdXNlIGl0IHRvIGNvbm5lY3QgdG8gdGhlIGNoYXQsIG90aGVyd2lzZVxyXG4gICAgLy8gZ2l2ZSB0aGVtIGEgc3BlY2lhbCBmb3J1bSB0byBjcmVhdGUgdGhlaXIgdXNlcm5hbWUgYW5kIFRIRU4gY29ubmVjdCB0aGVtIHRvIHRoZSBjaGF0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyB2YWxpZCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ICF2YWxpZCAmJiAoPEVudGVyVXNlci8+KX1cclxuICAgICAgICA8Lz5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBFbnRlclVzZXIoKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbiAgICAgICAgc2V0VXNlcihlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt1c2VybmFtZS5jZW50ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlBsZWFzZSBsb2dpbiB0byBjb250aW51ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcn0gcGxhY2Vob2xkZXI9XCJFeDogeHhfTWluZWNyYWZ0ZXJfeHhcIiBvbkNoYW5nZT17dXBkYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9XCJ0ZXN0XCI+TG9naW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgc2V0UGF0aChpZC5yZXBsYWNlKC8lMjAvZ2ksIFwiIFwiKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8aDEgaWQ9e3N0eWxlcy5oZWFkaW5nfT5DaGF0IFJvb206IHtwYXRofTwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcclxuICAgIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3dzLCBzZXRXc10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICBcclxuICAgIC8vIFNlbmQgYSBtZXNzYWdlICh0byB0aGUgc2VydmVyKSB0byBiZSBicm9hZGNhc3RlZCB0byBhbGwgY29ubmVjdGVkIGNsaWVudHMgXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpIHtcclxuICAgICAgICBpZiAodmFsID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgd3Muc2VuZChgJHt1c2VyfTogJHt2YWx9YClcclxuICAgICAgICBzZXRWYWwoXCJcIilcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBDb25uZWN0IHRvIHdlYmhvb2sgdXBvbiByZW5kZXJpbmcgdGhlIHBhZ2UgYW5kIGFkZCBpbiBpbnRvIGEgc3RhdGUgc28geW91IGNhbiBhY2Nlc3MgaXQgbGF0ZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0ucmVwbGFjZSgvJTIwL2dpLCBcIlwiKTtcclxuICAgICAgbGV0IHdzID0gIG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL1wiK2lkKTtcclxuICAgICAgbGV0IHZhbGlkVXNlciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkuc3BsaXQoXCI9XCIpWzFdO1xyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgYWRkSXRlbXMpIFxyXG5cclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgam9pbmVkIHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGxlZnQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICAgZnVuY3Rpb24gYWRkSXRlbXMoaW5mbykge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpbmZvLmRhdGEpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpICAvLyBXZSBjcmVhdGUgYW5vdGhlciBhcnIsIHNvIHdoZW4gd2Ugc2V0IGl0IHdpdGggc2V0TWVzc2FnZXMgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIGFuZCB0aGUgbGlzdCAoSW5mbykgd2lsbCB1cGRhdGVcclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBjb250YWluaW5nIHRoZSB1cGRhdGVkIG51bWJlciBvZiBtZW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBpdFxyXG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldENvbm5lY3RlZChkYXRhLmNvbm5lY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3SXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgaXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0TWVzc2FnZXMobmV3SXRlbXMpXHJcbiAgICAgICAgc2V0VXNlcih2YWxpZFVzZXIpXHJcbiAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRXcyh3cykgLy8gc2V0IHRoZSBXZWJTb2NrZXQgdG8gYmUgZ2xvYmFsXHJcbiAgICAgXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TWVzc2FnZUxvZ2dlciBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgICA8TWVzc2FnZVNlbmRlciB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgICAgICA8TWVtYmVyTGlzdCBjbGllbnRzPXtjb25uZWN0ZWR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIExvYWRzIGFsbCBpbmNvbWluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdFxyXG5mdW5jdGlvbiBNZXNzYWdlTG9nZ2VyKHByb3BzKSB7XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBwcm9wcy5tZXNzYWdlc1xyXG4gICAgbGV0IGxpc3RNZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gPE1lc3NhZ2UgZGF0YT17ZWxlbWVudH0ga2V5PXtgJHtlbGVtZW50LnRvU3RyaW5nKCl9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWB9IC8+XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5tc2dMb2dnZXJ9PlxyXG4gICAgICAgICAgICA8dWwgaWQ9e3N0eWxlcy5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgIHtsaXN0TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFJlbmRlciB0aGUgaW5wdXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbmZ1bmN0aW9uIE1lc3NhZ2VTZW5kZXIocHJvcHMpIHtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdXNlciBwcmVzc2VzIGVudGVyIG9uIHRoZSBpbnB1dCAoaW5zdGVhZCBvZiBjbGlja2luZyBzZW5kIG1lc3NhZ2UgYnRuKVxyXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fCBlLmtleVN0cm9rZSA9PT0gMTMpIHJldHVybiBwcm9wcy5sb2coKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNlbmRNZXNzYWdlc30+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9IFxyXG4gICAgICAgICAgICBvbktleVByZXNzPXtzZW5kTWVzc2FnZX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+U2VuZDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIFRoZSBudW1iZXIgb2YgY29ubmVjdGVkIG1lbWJlcnNcclxuZnVuY3Rpb24gTWVtYmVyTGlzdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29ubmVjdGVkfT5cclxuICAgICAgPGgxPkNvbm5lY3RlZCBNZW1iZXJzOiB7cHJvcHMuY2xpZW50c308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGxpPntwcm9wcy5kYXRhfTwvbGk+XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9