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
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJFbnRlclVzZXIiLCJ1c2VybmFtZSIsIm1haW4iLCJjZW50ZXIiLCJIZWFkZXIiLCJwYXRoIiwic2V0UGF0aCIsImlkIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImxlbmd0aCIsInJlcGxhY2UiLCJzdHlsZXMiLCJoZWFkaW5nIiwiTWFpbiIsInByb3BzIiwidmFsIiwic2V0VmFsIiwid3MiLCJzZXRXcyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJ1c2VyIiwic2V0VXNlciIsImNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwidmFsaWRVc2VyIiwiZmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsIndpbmRvdyIsImluZm8iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbXMiLCJzbGljZSIsInVuZGVmaW5lZCIsInVuc2hpZnQiLCJNZXNzYWdlTG9nZ2VyIiwibGlzdE1lc3NhZ2VzIiwibWFwIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtc2dMb2dnZXIiLCJNZXNzYWdlU2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ3aGljaCIsImtleVN0cm9rZSIsImxvZyIsInNlbmRNZXNzYWdlcyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBS0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEtB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QUFULENBQXFCN0IsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSUEsQ0FBQyxDQUFDOEIsS0FBRixLQUFZLEVBQVosSUFBa0I5QixDQUFDLENBQUMrQixTQUFGLEtBQWdCLEVBQXRDLEVBQTBDLE9BQU8zQyxLQUFLLENBQUM0QyxHQUFOLEVBQVA7QUFDN0M7O0FBRUQsU0FDSTtBQUFLLE1BQUUsRUFBRS9DLGtFQUFNLENBQUNnRDtBQUFoQixLQUVJO0FBQ0EsU0FBSyxFQUFFN0MsS0FBSyxDQUFDYyxLQURiO0FBRUEsWUFBUSxFQUFFZCxLQUFLLENBQUNXLE1BRmhCO0FBR0EsY0FBVSxFQUFFOEI7QUFIWixJQUZKLEVBUUk7QUFBUSxXQUFPLEVBQUV6QyxLQUFLLENBQUM0QztBQUF2QixZQVJKLENBREo7QUFhSCxDLENBR0Q7OztNQXZCU0osYTs7QUF3QlQsU0FBU00sVUFBVCxDQUFvQjlDLEtBQXBCLEVBQTJCO0FBQ3ZCLFNBQ0k7QUFBSyxNQUFFLEVBQUVILGtFQUFNLENBQUNVO0FBQWhCLEtBQ0YseUNBQXdCUCxLQUFLLENBQUMrQyxPQUE5QixDQURFLENBREo7QUFLSDs7TUFOUUQsVTs7QUFTVCxTQUFTRSxPQUFULENBQWlCaEQsS0FBakIsRUFBd0I7QUFDcEIsU0FBTyxrQkFBS0EsS0FBSyxDQUFDeUIsSUFBWCxDQUFQO0FBQ0g7O01BRlF1QixPO0FBT00xRSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hhdFxcW2lkXS5qcy45OWY1MjhkNWY2MWRmZWFkOWYzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvY2hhdHJvb20ubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB1c2VybmFtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2NyZWF0ZV9hX25hbWUubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuc29tZShlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkpIHtcclxuICAgICAgICAgICBzZXRWYWxpZChmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRWYWxpZChmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgeyB2YWxpZCAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1haW4vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ICF2YWxpZCAmJiAoPEVudGVyVXNlci8+KX1cclxuICAgICAgICA8Lz5cclxuICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBFbnRlclVzZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXt1c2VybmFtZS5jZW50ZXJ9PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXTtcclxuICAgICAgICBzZXRQYXRoKGlkLnJlcGxhY2UoLyUyMC9naSwgXCIgXCIpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxoMSBpZD17c3R5bGVzLmhlYWRpbmd9PkNoYXQgUm9vbToge3BhdGh9PC9oMT5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbihwcm9wcykge1xyXG4gICAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbd3MsIHNldFdzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gU2VuZCBhIG1lc3NhZ2UgKHRvIHRoZSBzZXJ2ZXIpIHRvIGJlIGJyb2FkY2FzdGVkIHRvIGFsbCBjb25uZWN0ZWQgY2xpZW50cyBcclxuICAgIGZ1bmN0aW9uIHNlbmREYXRhKCkge1xyXG4gICAgICAgIGlmICh2YWwgPT09IFwiXCIpIHJldHVybjtcclxuICAgICAgICB3cy5zZW5kKGAke3VzZXJ9OiAke3ZhbH1gKVxyXG4gICAgICAgIHNldFZhbChcIlwiKVxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIC8vIENvbm5lY3QgdG8gd2ViaG9vayB1cG9uIHJlbmRlcmluZyB0aGUgcGFnZSBhbmQgYWRkIGluIGludG8gYSBzdGF0ZSBzbyB5b3UgY2FuIGFjY2VzcyBpdCBsYXRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGl0ZW1zID0gW10gLy8gVGhpcyBzYXZlcyBBTEwgbWVzc2FnZXNcclxuICAgICAgbGV0IGlkID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXS5yZXBsYWNlKC8lMjAvZ2ksIFwiXCIpO1xyXG4gICAgICBsZXQgd3MgPSAgbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODAvXCIraWQpO1xyXG4gICAgICBsZXQgdmFsaWRVc2VyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKS5zcGxpdChcIj1cIilbMV07XHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBhZGRJdGVtcykgXHJcblxyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBqb2luZWQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgbGVmdCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBcclxuICAgICBmdW5jdGlvbiBhZGRJdGVtcyhpbmZvKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGluZm8uZGF0YSlcclxuICAgICAgICBsZXQgbmV3SXRlbXMgPSBpdGVtcy5zbGljZSgwLCkgIC8vIFdlIGNyZWF0ZSBhbm90aGVyIGFyciwgc28gd2hlbiB3ZSBzZXQgaXQgd2l0aCBzZXRNZXNzYWdlcyB0aGUgcGFnZSB3aWxsIHJlZnJlc2ggYW5kIHRoZSBsaXN0IChJbmZvKSB3aWxsIHVwZGF0ZVxyXG5cclxuICAgICAgICAvLyBDYXRjaCBhIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyIGNvbnRhaW5pbmcgdGhlIHVwZGF0ZWQgbnVtYmVyIG9mIG1lbWJlcnNcclxuICAgICAgICAvLyBhbmQgdXBkYXRlIGl0XHJcbiAgICAgICAgaWYgKGRhdGEuY29ubmVjdGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0Q29ubmVjdGVkKGRhdGEuY29ubmVjdGVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdJdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBpdGVtcy51bnNoaWZ0KGRhdGEuZGF0YSlcclxuICAgICAgICBzZXRNZXNzYWdlcyhuZXdJdGVtcylcclxuICAgICAgICBzZXRVc2VyKHZhbGlkVXNlcilcclxuICAgICB9XHJcbiAgXHJcbiAgICAgIHNldFdzKHdzKSAvLyBzZXQgdGhlIFdlYlNvY2tldCB0byBiZSBnbG9iYWxcclxuICAgICBcclxuICAgIH0sIFtdKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZXNzYWdlTG9nZ2VyIG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxNZXNzYWdlU2VuZGVyIHZhbHVlPXt2YWx9IGNoYW5nZT17Y2hhbmdlfSBsb2c9e3NlbmREYXRhfSAvPlxyXG4gICAgICAgIDxNZW1iZXJMaXN0IGNsaWVudHM9e2Nvbm5lY3RlZH0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gTG9hZHMgYWxsIGluY29taW5nIG1lc3NhZ2VzIGluIHRoZSBjaGF0XHJcbmZ1bmN0aW9uIE1lc3NhZ2VMb2dnZXIocHJvcHMpIHtcclxuICAgIGxldCBtZXNzYWdlcyA9IHByb3BzLm1lc3NhZ2VzXHJcbiAgICBsZXQgbGlzdE1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiA8TWVzc2FnZSBkYXRhPXtlbGVtZW50fSBrZXk9e2Ake2VsZW1lbnQudG9TdHJpbmcoKX0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YH0gLz5cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLm1zZ0xvZ2dlcn0+XHJcbiAgICAgICAgICAgIDx1bCBpZD17c3R5bGVzLm1lc3NhZ2VzfT5cclxuICAgICAgICAgICAge2xpc3RNZXNzYWdlc31cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gUmVuZGVyIHRoZSBpbnB1dCBhbmQgdGhlIHN1Ym1pdCBidXR0b25cclxuZnVuY3Rpb24gTWVzc2FnZVNlbmRlcihwcm9wcykge1xyXG5cclxuICAgIC8vIFJ1bnMgd2hlbiB1c2VyIHByZXNzZXMgZW50ZXIgb24gdGhlIGlucHV0IChpbnN0ZWFkIG9mIGNsaWNraW5nIHNlbmQgbWVzc2FnZSBidG4pXHJcbiAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzIHx8IGUua2V5U3Ryb2tlID09PSAxMykgcmV0dXJuIHByb3BzLmxvZygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuc2VuZE1lc3NhZ2VzfT5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e3NlbmRNZXNzYWdlfSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMubG9nfT5TZW5kPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gVGhlIG51bWJlciBvZiBjb25uZWN0ZWQgbWVtYmVyc1xyXG5mdW5jdGlvbiBNZW1iZXJMaXN0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb25uZWN0ZWR9PlxyXG4gICAgICA8aDE+Q29ubmVjdGVkIE1lbWJlcnM6IHtwcm9wcy5jbGllbnRzfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcclxuICAgIHJldHVybiA8bGk+e3Byb3BzLmRhdGF9PC9saT5cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=