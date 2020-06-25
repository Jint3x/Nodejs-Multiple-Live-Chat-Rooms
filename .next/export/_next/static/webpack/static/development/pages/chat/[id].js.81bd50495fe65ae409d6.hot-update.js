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
    if (document.cookie.split(";").some(function (element) {
      return element.includes("username");
    })) {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  function Change() {
    setValid(!valid);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __jsx(EnterUser, {
    start: Change
  }));
}

_s(Post, "s2BkWX/tapHuHfh22OeWDCUmNC4=");

_c = Post;

function EnterUser(props) {
  return __jsx("button", {
    onClick: props.start
  }, "Click me nya!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJDaGFuZ2UiLCJFbnRlclVzZXIiLCJwcm9wcyIsInN0YXJ0IiwiSGVhZGVyIiwicGF0aCIsInNldFBhdGgiLCJpZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJyZXBsYWNlIiwic3R5bGVzIiwiaGVhZGluZyIsIk1haW4iLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInVzZXIiLCJzZXRVc2VyIiwiY2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZERhdGEiLCJzZW5kIiwiaXRlbXMiLCJXZWJTb2NrZXQiLCJ2YWxpZFVzZXIiLCJmaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEl0ZW1zIiwid2luZG93IiwiaW5mbyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJuZXdJdGVtcyIsInNsaWNlIiwidW5kZWZpbmVkIiwidW5zaGlmdCIsIk1lc3NhZ2VMb2dnZXIiLCJsaXN0TWVzc2FnZXMiLCJtYXAiLCJ0b1N0cmluZyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1zZ0xvZ2dlciIsIk1lc3NhZ2VTZW5kZXIiLCJzZW5kTWVzc2FnZSIsIndoaWNoIiwia2V5U3Ryb2tlIiwibG9nIiwic2VuZE1lc3NhZ2VzIiwiTWVtYmVyTGlzdCIsImNsaWVudHMiLCJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxLQUFELENBRHRCO0FBQUEsTUFDTEMsS0FESztBQUFBLE1BQ0VDLFFBREYsaUJBR1o7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxJQUEzQixDQUFnQyxVQUFBQyxPQUFPO0FBQUEsYUFBSUEsT0FBTyxDQUFDQyxRQUFSLENBQWlCLFVBQWpCLENBQUo7QUFBQSxLQUF2QyxDQUFKLEVBQThFO0FBQzNFUCxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0YsS0FGRCxNQUVPO0FBQ0hBLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKLEdBTlEsQ0FBVDs7QUFRQSxXQUFTUSxNQUFULEdBQWtCO0FBQ2RSLFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSDs7QUFFRCxTQUNJLG1FQUNFQSxLQUFLLElBQ0gsbUVBQ0EsTUFBQyxNQUFELE9BREEsRUFFQSxNQUFDLElBQUQsT0FGQSxDQUZKLEVBUUUsQ0FBQ0EsS0FBRCxJQUFXLE1BQUMsU0FBRDtBQUFXLFNBQUssRUFBRVM7QUFBbEIsSUFSYixDQURKO0FBYUg7O0dBN0JRWCxJOztLQUFBQSxJOztBQStCVCxTQUFTWSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN0QixTQUFPO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQXZCLHFCQUFQO0FBQ0g7O01BRlFGLFM7O0FBS1QsU0FBU0csTUFBVCxHQUFrQjtBQUFBOztBQUFBLG1CQUNVZCxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxNQUNQZSxJQURPO0FBQUEsTUFDREMsT0FEQzs7QUFHZGIseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSWMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JiLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCWSxRQUFRLENBQUNDLFFBQVQsQ0FBa0JiLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCYyxNQUE3QixHQUFzQyxDQUFuRSxDQUFUO0FBQ0FKLFdBQU8sQ0FBQ0MsRUFBRSxDQUFDSSxPQUFILENBQVcsT0FBWCxFQUFvQixHQUFwQixDQUFELENBQVA7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0EsU0FDQTtBQUFJLE1BQUUsRUFBRUMsa0VBQU0sQ0FBQ0M7QUFBZixvQkFBb0NSLElBQXBDLENBREE7QUFHSDs7SUFYUUQsTTs7TUFBQUEsTTs7QUFnQlQsU0FBU1UsSUFBVCxDQUFjWixLQUFkLEVBQXFCO0FBQUE7O0FBQUEsbUJBQ0taLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDVnlCLEdBRFU7QUFBQSxNQUNMQyxNQURLOztBQUFBLG1CQUVHMUIsc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVWMkIsRUFGVTtBQUFBLE1BRU5DLEtBRk07O0FBQUEsbUJBR2U1QixzREFBUSxDQUFDLEVBQUQsQ0FIdkI7QUFBQSxNQUdWNkIsUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBQUEsbUJBSWlCOUIsc0RBQVEsQ0FBQyxDQUFELENBSnpCO0FBQUEsTUFJVitCLFNBSlU7QUFBQSxNQUlDQyxZQUpEOztBQUFBLG1CQUtPaEMsc0RBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUtWaUMsSUFMVTtBQUFBLE1BS0pDLE9BTEk7O0FBT2pCLFdBQVNDLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2ZWLFVBQU0sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNILEdBVGdCLENBV2pCOzs7QUFDQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2hCLFFBQUlkLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2hCRSxNQUFFLENBQUNhLElBQUgsV0FBV1AsSUFBWCxlQUFvQlIsR0FBcEI7QUFDQUMsVUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNILEdBaEJnQixDQW1CbkI7OztBQUNFdkIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSXNDLEtBQUssR0FBRyxFQUFaLENBRGMsQ0FDQzs7QUFDZixRQUFJeEIsRUFBRSxHQUFHQyxRQUFRLENBQUNDLFFBQVQsQ0FBa0JiLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCWSxRQUFRLENBQUNDLFFBQVQsQ0FBa0JiLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCYyxNQUE3QixHQUFzQyxDQUFuRSxFQUFzRUMsT0FBdEUsQ0FBOEUsT0FBOUUsRUFBdUYsRUFBdkYsQ0FBVDtBQUNBLFFBQUlNLEVBQUUsR0FBSSxJQUFJZSxTQUFKLENBQWMseUJBQXVCekIsRUFBckMsQ0FBVjtBQUNBLFFBQUkwQixTQUFTLEdBQUd2QyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCc0MsSUFBM0IsQ0FBZ0MsVUFBQXBDLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsVUFBakIsQ0FBSjtBQUFBLEtBQXZDLEVBQXlFSCxLQUF6RSxDQUErRSxHQUEvRSxFQUFvRixDQUFwRixDQUFoQjtBQUVBcUIsTUFBRSxDQUFDa0IsZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0JDLFFBQS9CO0FBR0FuQixNQUFFLENBQUNrQixnQkFBSCxDQUFvQixNQUFwQixFQUE0QixZQUFNO0FBQzlCbEIsUUFBRSxDQUFDYSxJQUFILFdBQVdHLFNBQVg7QUFDSCxLQUZEO0FBS0FJLFVBQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQ2xCLFFBQUUsQ0FBQ2EsSUFBSCxXQUFXRyxTQUFYO0FBQ0gsS0FGRDs7QUFLRCxhQUFTRyxRQUFULENBQWtCRSxJQUFsQixFQUF3QjtBQUNyQixVQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLENBQUNDLElBQWhCLENBQVg7QUFDQSxVQUFJRyxRQUFRLEdBQUdYLEtBQUssQ0FBQ1ksS0FBTixDQUFZLENBQVosQ0FBZixDQUZxQixDQUVXO0FBRWhDO0FBQ0E7O0FBQ0EsVUFBSUosSUFBSSxDQUFDbEIsU0FBTCxLQUFtQnVCLFNBQXZCLEVBQWtDO0FBQzlCdEIsb0JBQVksQ0FBQ2lCLElBQUksQ0FBQ2xCLFNBQU4sQ0FBWjtBQUNBO0FBQ0g7O0FBRURxQixjQUFRLENBQUNHLE9BQVQsQ0FBaUJOLElBQUksQ0FBQ0EsSUFBdEI7QUFDQVIsV0FBSyxDQUFDYyxPQUFOLENBQWNOLElBQUksQ0FBQ0EsSUFBbkI7QUFDQW5CLGlCQUFXLENBQUNzQixRQUFELENBQVg7QUFDQWxCLGFBQU8sQ0FBQ1MsU0FBRCxDQUFQO0FBQ0Y7O0FBRUFmLFNBQUssQ0FBQ0QsRUFBRCxDQUFMLENBcENjLENBb0NKO0FBRVgsR0F0Q1EsRUFzQ04sRUF0Q00sQ0FBVDtBQXdDQSxTQUNJLG1FQUNBLE1BQUMsYUFBRDtBQUFlLFlBQVEsRUFBRUU7QUFBekIsSUFEQSxFQUVBLE1BQUMsYUFBRDtBQUFlLFNBQUssRUFBRUosR0FBdEI7QUFBMkIsVUFBTSxFQUFFVSxNQUFuQztBQUEyQyxPQUFHLEVBQUVJO0FBQWhELElBRkEsRUFHQSxNQUFDLFVBQUQ7QUFBWSxXQUFPLEVBQUVSO0FBQXJCLElBSEEsQ0FESjtBQU9ILEMsQ0FHRDs7O0lBdEVTUCxJOztNQUFBQSxJOztBQXVFVCxTQUFTZ0MsYUFBVCxDQUF1QjVDLEtBQXZCLEVBQThCO0FBQzFCLE1BQUlpQixRQUFRLEdBQUdqQixLQUFLLENBQUNpQixRQUFyQjtBQUNBLE1BQUk0QixZQUFZLEdBQUc1QixRQUFRLENBQUM2QixHQUFULENBQWEsVUFBQWxELE9BQU8sRUFBSTtBQUN2QyxXQUFPLE1BQUMsT0FBRDtBQUFTLFVBQUksRUFBRUEsT0FBZjtBQUF3QixTQUFHLFlBQUtBLE9BQU8sQ0FBQ21ELFFBQVIsRUFBTCxTQUEwQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixNQUEzQixDQUExQjtBQUEzQixNQUFQO0FBQ0gsR0FGa0IsQ0FBbkI7QUFLQSxTQUNJO0FBQUssTUFBRSxFQUFFeEMsa0VBQU0sQ0FBQ3lDO0FBQWhCLEtBQ0k7QUFBSSxNQUFFLEVBQUV6QyxrRUFBTSxDQUFDTztBQUFmLEtBQ0M0QixZQURELENBREosQ0FESjtBQU9ILEMsQ0FFRDs7O01BaEJTRCxhOztBQWlCVCxTQUFTUSxhQUFULENBQXVCcEQsS0FBdkIsRUFBOEI7QUFFMUI7QUFDQSxXQUFTcUQsV0FBVCxDQUFxQjdCLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUlBLENBQUMsQ0FBQzhCLEtBQUYsS0FBWSxFQUFaLElBQWtCOUIsQ0FBQyxDQUFDK0IsU0FBRixLQUFnQixFQUF0QyxFQUEwQyxPQUFPdkQsS0FBSyxDQUFDd0QsR0FBTixFQUFQO0FBQzdDOztBQUVELFNBQ0k7QUFBSyxNQUFFLEVBQUU5QyxrRUFBTSxDQUFDK0M7QUFBaEIsS0FFSTtBQUNBLFNBQUssRUFBRXpELEtBQUssQ0FBQzBCLEtBRGI7QUFFQSxZQUFRLEVBQUUxQixLQUFLLENBQUN1QixNQUZoQjtBQUdBLGNBQVUsRUFBRThCO0FBSFosSUFGSixFQVFJO0FBQVEsV0FBTyxFQUFFckQsS0FBSyxDQUFDd0Q7QUFBdkIsWUFSSixDQURKO0FBYUgsQyxDQUdEOzs7TUF2QlNKLGE7O0FBd0JULFNBQVNNLFVBQVQsQ0FBb0IxRCxLQUFwQixFQUEyQjtBQUN2QixTQUNJO0FBQUssTUFBRSxFQUFFVSxrRUFBTSxDQUFDUztBQUFoQixLQUNGLHlDQUF3Qm5CLEtBQUssQ0FBQzJELE9BQTlCLENBREUsQ0FESjtBQUtIOztNQU5RRCxVOztBQVNULFNBQVNFLE9BQVQsQ0FBaUI1RCxLQUFqQixFQUF3QjtBQUNwQixTQUFPLGtCQUFLQSxLQUFLLENBQUNxQyxJQUFYLENBQVA7QUFDSDs7TUFGUXVCLE87QUFPTXpFLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLjgxYmQ1MDQ5NWZlNjVhZTQwOWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZXkgaGF2ZSBhIHVzZXJuYW1lLCBpZiBub3QgYXNrIHRoZW0gZm9yIG9uZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5zb21lKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKSkge1xyXG4gICAgICAgICAgIHNldFZhbGlkKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBDaGFuZ2UoKSB7XHJcbiAgICAgICAgc2V0VmFsaWQoIXZhbGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHZhbGlkICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgIXZhbGlkICYmICg8RW50ZXJVc2VyIHN0YXJ0PXtDaGFuZ2V9Lz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVudGVyVXNlcihwcm9wcykge1xyXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17cHJvcHMuc3RhcnR9PkNsaWNrIG1lIG55YSE8L2J1dHRvbj5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFBhdGgoaWQucmVwbGFjZSgvJTIwL2dpLCBcIiBcIikpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGgxIGlkPXtzdHlsZXMuaGVhZGluZ30+Q2hhdCBSb29tOiB7cGF0aH08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTZW5kIGEgbWVzc2FnZSAodG8gdGhlIHNlcnZlcikgdG8gYmUgYnJvYWRjYXN0ZWQgdG8gYWxsIGNvbm5lY3RlZCBjbGllbnRzIFxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIHdzLnNlbmQoYCR7dXNlcn06ICR7dmFsfWApXHJcbiAgICAgICAgc2V0VmFsKFwiXCIpXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gQ29ubmVjdCB0byB3ZWJob29rIHVwb24gcmVuZGVyaW5nIHRoZSBwYWdlIGFuZCBhZGQgaW4gaW50byBhIHN0YXRlIHNvIHlvdSBjYW4gYWNjZXNzIGl0IGxhdGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXSAvLyBUaGlzIHNhdmVzIEFMTCBtZXNzYWdlc1xyXG4gICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdLnJlcGxhY2UoLyUyMC9naSwgXCJcIik7XHJcbiAgICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICAgIGxldCB2YWxpZFVzZXIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGFkZEl0ZW1zKSBcclxuXHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGpvaW5lZCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBsZWZ0IHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgIGZ1bmN0aW9uIGFkZEl0ZW1zKGluZm8pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoaW5mby5kYXRhKVxyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLnNsaWNlKDAsKSAgLy8gV2UgY3JlYXRlIGFub3RoZXIgYXJyLCBzbyB3aGVuIHdlIHNldCBpdCB3aXRoIHNldE1lc3NhZ2VzIHRoZSBwYWdlIHdpbGwgcmVmcmVzaCBhbmQgdGhlIGxpc3QgKEluZm8pIHdpbGwgdXBkYXRlXHJcblxyXG4gICAgICAgIC8vIENhdGNoIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgY29udGFpbmluZyB0aGUgdXBkYXRlZCBudW1iZXIgb2YgbWVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgaXRcclxuICAgICAgICBpZiAoZGF0YS5jb25uZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRDb25uZWN0ZWQoZGF0YS5jb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0l0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIGl0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG5ld0l0ZW1zKVxyXG4gICAgICAgIHNldFVzZXIodmFsaWRVc2VyKVxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0V3Mod3MpIC8vIHNldCB0aGUgV2ViU29ja2V0IHRvIGJlIGdsb2JhbFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lc3NhZ2VMb2dnZXIgbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPE1lc3NhZ2VTZW5kZXIgdmFsdWU9e3ZhbH0gY2hhbmdlPXtjaGFuZ2V9IGxvZz17c2VuZERhdGF9IC8+XHJcbiAgICAgICAgPE1lbWJlckxpc3QgY2xpZW50cz17Y29ubmVjdGVkfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBMb2FkcyBhbGwgaW5jb21pbmcgbWVzc2FnZXMgaW4gdGhlIGNoYXRcclxuZnVuY3Rpb24gTWVzc2FnZUxvZ2dlcihwcm9wcykge1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gcHJvcHMubWVzc2FnZXNcclxuICAgIGxldCBsaXN0TWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlIGRhdGE9e2VsZW1lbnR9IGtleT17YCR7ZWxlbWVudC50b1N0cmluZygpfSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gfSAvPlxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubXNnTG9nZ2VyfT5cclxuICAgICAgICAgICAgPHVsIGlkPXtzdHlsZXMubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICB7bGlzdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBNZXNzYWdlU2VuZGVyKHByb3BzKSB7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHVzZXIgcHJlc3NlcyBlbnRlciBvbiB0aGUgaW5wdXQgKGluc3RlYWQgb2YgY2xpY2tpbmcgc2VuZCBtZXNzYWdlIGJ0bilcclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlTdHJva2UgPT09IDEzKSByZXR1cm4gcHJvcHMubG9nKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zZW5kTWVzc2FnZXN9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSBcclxuICAgICAgICAgICAgb25LZXlQcmVzcz17c2VuZE1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PlNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBUaGUgbnVtYmVyIG9mIGNvbm5lY3RlZCBtZW1iZXJzXHJcbmZ1bmN0aW9uIE1lbWJlckxpc3QocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbm5lY3RlZH0+XHJcbiAgICAgIDxoMT5Db25uZWN0ZWQgTWVtYmVyczoge3Byb3BzLmNsaWVudHN9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxsaT57cHJvcHMuZGF0YX08L2xpPlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==