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



function Post(req, res) {
  _s();

  // Check if they have a username, if not ask them for one
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!document.cookie.split(";").some(function (element) {
      return element.includes("username");
    })) {
      var username = prompt("Enter your username");
      document.cookie = "username=".concat(username);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null));
}

_s(Post, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Post;

function Header() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      path = _useState[0],
      setPath = _useState[1];

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      val = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      ws = _useState3[0],
      setWs = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      connected = _useState5[0],
      setConnected = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      user = _useState6[0],
      setUser = _useState6[1];

  function change(e) {
    setVal(e.target.value);
  }

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
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SendMessages
  }, __jsx("input", {
    value: props.value,
    onChange: props.change
  }), __jsx("button", {
    onClick: props.log
  }, "Send Message"));
} // The number of connected members


_c5 = MessageSender;

function MemberList(props) {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.connected
  }, __jsx("h1", null, "Currently Connected Members: ", props.clients));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicmVxIiwicmVzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJ1c2VybmFtZSIsInByb21wdCIsIkhlYWRlciIsInVzZVN0YXRlIiwicGF0aCIsInNldFBhdGgiLCJpZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJyZXBsYWNlIiwic3R5bGVzIiwiaGVhZGluZyIsIk1haW4iLCJwcm9wcyIsInZhbCIsInNldFZhbCIsIndzIiwic2V0V3MiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwidXNlciIsInNldFVzZXIiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kRGF0YSIsInNlbmQiLCJpdGVtcyIsIldlYlNvY2tldCIsInZhbGlkVXNlciIsImZpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbXMiLCJ3aW5kb3ciLCJpbmZvIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld0l0ZW1zIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJ1bnNoaWZ0IiwiTWVzc2FnZUxvZ2dlciIsImxpc3RNZXNzYWdlcyIsIm1hcCIsInRvU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibXNnTG9nZ2VyIiwiTWVzc2FnZVNlbmRlciIsIlNlbmRNZXNzYWdlcyIsImxvZyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFLQSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBRXBCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksQ0FBQ0MsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxL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QUtIOztNQU5RRCxVOztBQVNULFNBQVNFLE9BQVQsQ0FBaUI3QyxLQUFqQixFQUF3QjtBQUNwQixTQUFPLGtCQUFLQSxLQUFLLENBQUN5QixJQUFYLENBQVA7QUFDSDs7TUFGUW9CLE87QUFPTXJFLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLmExZGRjNDRmMjZhMTUxNDlhM2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3QocmVxLCByZXMpIHtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLnNvbWUoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpKSB7XHJcbiAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IHByb21wdChcIkVudGVyIHlvdXIgdXNlcm5hbWVcIilcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFBhdGgoaWQucmVwbGFjZSgvJTIwL2dpLCBcIiBcIikpXHJcblxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGgxIGlkPXtzdHlsZXMuaGVhZGluZ30+Q2hhdCBSb29tOiB7cGF0aH08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpIHtcclxuICAgICAgICBpZiAodmFsID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgd3Muc2VuZChgJHt1c2VyfTogJHt2YWx9YClcclxuICAgICAgICBzZXRWYWwoXCJcIilcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBDb25uZWN0IHRvIHdlYmhvb2sgdXBvbiByZW5kZXJpbmcgdGhlIHBhZ2UgYW5kIGFkZCBpbiBpbnRvIGEgc3RhdGUgc28geW91IGNhbiBhY2Nlc3MgaXQgbGF0ZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0ucmVwbGFjZSgvJTIwL2dpLCBcIlwiKTtcclxuICAgICAgbGV0IHdzID0gIG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL1wiK2lkKTtcclxuICAgICAgbGV0IHZhbGlkVXNlciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkuc3BsaXQoXCI9XCIpWzFdO1xyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgYWRkSXRlbXMpIFxyXG5cclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgam9pbmVkIHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGxlZnQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICAgZnVuY3Rpb24gYWRkSXRlbXMoaW5mbykge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpbmZvLmRhdGEpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpICAvLyBXZSBjcmVhdGUgYW5vdGhlciBhcnIsIHNvIHdoZW4gd2Ugc2V0IGl0IHdpdGggc2V0TWVzc2FnZXMgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIGFuZCB0aGUgbGlzdCAoSW5mbykgd2lsbCB1cGRhdGVcclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBjb250YWluaW5nIHRoZSB1cGRhdGVkIG51bWJlciBvZiBtZW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBpdFxyXG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldENvbm5lY3RlZChkYXRhLmNvbm5lY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3SXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgaXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0TWVzc2FnZXMobmV3SXRlbXMpXHJcbiAgICAgICAgc2V0VXNlcih2YWxpZFVzZXIpXHJcbiAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRXcyh3cykgLy8gc2V0IHRoZSBXZWJTb2NrZXQgdG8gYmUgZ2xvYmFsXHJcbiAgICAgXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TWVzc2FnZUxvZ2dlciBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgICA8TWVzc2FnZVNlbmRlciB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgICAgICA8TWVtYmVyTGlzdCBjbGllbnRzPXtjb25uZWN0ZWR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIExvYWRzIGFsbCBpbmNvbWluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdFxyXG5mdW5jdGlvbiBNZXNzYWdlTG9nZ2VyKHByb3BzKSB7XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBwcm9wcy5tZXNzYWdlc1xyXG4gICAgbGV0IGxpc3RNZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gPE1lc3NhZ2UgZGF0YT17ZWxlbWVudH0ga2V5PXtgJHtlbGVtZW50LnRvU3RyaW5nKCl9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWB9IC8+XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5tc2dMb2dnZXJ9PlxyXG4gICAgICAgICAgICA8dWwgaWQ9e3N0eWxlcy5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgIHtsaXN0TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFJlbmRlciB0aGUgaW5wdXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbmZ1bmN0aW9uIE1lc3NhZ2VTZW5kZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLlNlbmRNZXNzYWdlc30+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMubG9nfT5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIFRoZSBudW1iZXIgb2YgY29ubmVjdGVkIG1lbWJlcnNcclxuZnVuY3Rpb24gTWVtYmVyTGlzdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29ubmVjdGVkfT5cclxuICAgICAgPGgxPkN1cnJlbnRseSBDb25uZWN0ZWQgTWVtYmVyczoge3Byb3BzLmNsaWVudHN9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxsaT57cHJvcHMuZGF0YX08L2xpPlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==