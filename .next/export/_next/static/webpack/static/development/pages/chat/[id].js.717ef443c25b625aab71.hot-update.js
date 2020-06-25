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
      setValid(true);
    } else {
      setValid(false);
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

    document.cookie = "username=".concat(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJ2YWxpZCIsInNldFZhbGlkIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsInNvbWUiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJjaGFuZ2VWYWxpZGF0aW9uIiwiRW50ZXJVc2VyIiwidXNlciIsInNldFVzZXIiLCJ1cGRhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJMb2dJbiIsInVzZXJuYW1lIiwibWFpbiIsImNlbnRlciIsIkhlYWRlciIsInBhdGgiLCJzZXRQYXRoIiwiaWQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwicmVwbGFjZSIsInN0eWxlcyIsImhlYWRpbmciLCJNYWluIiwicHJvcHMiLCJ2YWwiLCJzZXRWYWwiLCJ3cyIsInNldFdzIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImNoYW5nZSIsInNlbmREYXRhIiwic2VuZCIsIml0ZW1zIiwiV2ViU29ja2V0IiwidmFsaWRVc2VyIiwiZmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRJdGVtcyIsIndpbmRvdyIsImluZm8iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibmV3SXRlbXMiLCJzbGljZSIsInVuZGVmaW5lZCIsInVuc2hpZnQiLCJNZXNzYWdlTG9nZ2VyIiwibGlzdE1lc3NhZ2VzIiwibWFwIiwidG9TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtc2dMb2dnZXIiLCJNZXNzYWdlU2VuZGVyIiwic2VuZE1lc3NhZ2UiLCJ3aGljaCIsImtleVN0cm9rZSIsImxvZyIsInNlbmRNZXNzYWdlcyIsIk1lbWJlckxpc3QiLCJjbGllbnRzIiwiTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUtBLFNBQVNBLElBQVQs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QXZCLFlBUkosQ0FESjtBQWFILEMsQ0FHRDs7O01BdkJTSixhOztBQXdCVCxTQUFTTSxVQUFULENBQW9CekMsS0FBcEIsRUFBMkI7QUFDdkIsU0FDSTtBQUFLLE1BQUUsRUFBRUgsa0VBQU0sQ0FBQ1U7QUFBaEIsS0FDRix5Q0FBd0JQLEtBQUssQ0FBQzBDLE9BQTlCLENBREUsQ0FESjtBQUtIOztNQU5RRCxVOztBQVNULFNBQVNFLE9BQVQsQ0FBaUIzQyxLQUFqQixFQUF3QjtBQUNwQixTQUFPLGtCQUFLQSxLQUFLLENBQUNvQixJQUFYLENBQVA7QUFDSDs7TUFGUXVCLE87QUFPTTdFLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLjcxN2VmNDQzYzI1YjYyNWFhYjcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHVzZXJuYW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlX2FfbmFtZS5tb2R1bGUuY3NzXCJcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZXkgaGF2ZSBhIHVzZXJuYW1lLCBpZiBub3QgYXNrIHRoZW0gZm9yIG9uZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKS5zb21lKGVsZW1lbnQgPT4gZWxlbWVudC5pbmNsdWRlcyhcInVzZXJuYW1lXCIpKSkge1xyXG4gICAgICAgICAgIHNldFZhbGlkKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsaWQoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHNldFZhbGlkKHRydWUpXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLy8gSWYgdGhlIGNsaWVudCBoYXMgYW4gdXNlcm5hbWUgY29va2llIHVzZSBpdCB0byBjb25uZWN0IHRvIHRoZSBjaGF0LCBvdGhlcndpc2VcclxuICAgIC8vIGdpdmUgdGhlbSBhIHNwZWNpYWwgZm9ydW0gdG8gY3JlYXRlIHRoZWlyIHVzZXJuYW1lIGFuZCBUSEVOIGNvbm5lY3QgdGhlbSB0byB0aGUgY2hhdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgdmFsaWQgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNYWluLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyAhdmFsaWQgJiYgKDxFbnRlclVzZXIgZG9uZT17Y2hhbmdlVmFsaWRhdGlvbn0vPil9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gRW50ZXJVc2VyKCkge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGUoZSkge1xyXG4gICAgICAgIHNldFVzZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTG9nSW4oKSB7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IFwiXCIpIHJldHVybiAvLyBEbyBub3QgbG9nIGVtcHR5IG5hbWVzXHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcm5hbWU9JHt1c2VyfWBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17dXNlcm5hbWUubWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3VzZXJuYW1lLmNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDE+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyfSBwbGFjZWhvbGRlcj1cIkV4OiB4eF9NaW5lY3JhZnRlcl94eFwiIG9uQ2hhbmdlPXt1cGRhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz1cInRlc3RcIiA+TG9naW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW3BhdGgsIHNldFBhdGhdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgc2V0UGF0aChpZC5yZXBsYWNlKC8lMjAvZ2ksIFwiIFwiKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8aDEgaWQ9e3N0eWxlcy5oZWFkaW5nfT5DaGF0IFJvb206IHtwYXRofTwvaDE+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcclxuICAgIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3dzLCBzZXRXc10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFZhbChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICBcclxuICAgIC8vIFNlbmQgYSBtZXNzYWdlICh0byB0aGUgc2VydmVyKSB0byBiZSBicm9hZGNhc3RlZCB0byBhbGwgY29ubmVjdGVkIGNsaWVudHMgXHJcbiAgICBmdW5jdGlvbiBzZW5kRGF0YSgpIHtcclxuICAgICAgICBpZiAodmFsID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgd3Muc2VuZChgJHt1c2VyfTogJHt2YWx9YClcclxuICAgICAgICBzZXRWYWwoXCJcIilcclxuICAgIH1cclxuICBcclxuICBcclxuICAvLyBDb25uZWN0IHRvIHdlYmhvb2sgdXBvbiByZW5kZXJpbmcgdGhlIHBhZ2UgYW5kIGFkZCBpbiBpbnRvIGEgc3RhdGUgc28geW91IGNhbiBhY2Nlc3MgaXQgbGF0ZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxldCBpdGVtcyA9IFtdIC8vIFRoaXMgc2F2ZXMgQUxMIG1lc3NhZ2VzXHJcbiAgICAgIGxldCBpZCA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVtsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0ucmVwbGFjZSgvJTIwL2dpLCBcIlwiKTtcclxuICAgICAgbGV0IHdzID0gIG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwL1wiK2lkKTtcclxuICAgICAgbGV0IHZhbGlkVXNlciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkuc3BsaXQoXCI9XCIpWzFdO1xyXG5cclxuICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgYWRkSXRlbXMpIFxyXG5cclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHtcclxuICAgICAgICAgIHdzLnNlbmQoYCR7dmFsaWRVc2VyfSBoYXMgam9pbmVkIHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGxlZnQgdGhlIGNoYXRgKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgXHJcbiAgICAgZnVuY3Rpb24gYWRkSXRlbXMoaW5mbykge1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpbmZvLmRhdGEpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoMCwpICAvLyBXZSBjcmVhdGUgYW5vdGhlciBhcnIsIHNvIHdoZW4gd2Ugc2V0IGl0IHdpdGggc2V0TWVzc2FnZXMgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoIGFuZCB0aGUgbGlzdCAoSW5mbykgd2lsbCB1cGRhdGVcclxuXHJcbiAgICAgICAgLy8gQ2F0Y2ggYSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlciBjb250YWluaW5nIHRoZSB1cGRhdGVkIG51bWJlciBvZiBtZW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIHVwZGF0ZSBpdFxyXG4gICAgICAgIGlmIChkYXRhLmNvbm5lY3RlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldENvbm5lY3RlZChkYXRhLmNvbm5lY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3SXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgaXRlbXMudW5zaGlmdChkYXRhLmRhdGEpXHJcbiAgICAgICAgc2V0TWVzc2FnZXMobmV3SXRlbXMpXHJcbiAgICAgICAgc2V0VXNlcih2YWxpZFVzZXIpXHJcbiAgICAgfVxyXG4gIFxyXG4gICAgICBzZXRXcyh3cykgLy8gc2V0IHRoZSBXZWJTb2NrZXQgdG8gYmUgZ2xvYmFsXHJcbiAgICAgXHJcbiAgICB9LCBbXSlcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TWVzc2FnZUxvZ2dlciBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgICA8TWVzc2FnZVNlbmRlciB2YWx1ZT17dmFsfSBjaGFuZ2U9e2NoYW5nZX0gbG9nPXtzZW5kRGF0YX0gLz5cclxuICAgICAgICA8TWVtYmVyTGlzdCBjbGllbnRzPXtjb25uZWN0ZWR9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIExvYWRzIGFsbCBpbmNvbWluZyBtZXNzYWdlcyBpbiB0aGUgY2hhdFxyXG5mdW5jdGlvbiBNZXNzYWdlTG9nZ2VyKHByb3BzKSB7XHJcbiAgICBsZXQgbWVzc2FnZXMgPSBwcm9wcy5tZXNzYWdlc1xyXG4gICAgbGV0IGxpc3RNZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gPE1lc3NhZ2UgZGF0YT17ZWxlbWVudH0ga2V5PXtgJHtlbGVtZW50LnRvU3RyaW5nKCl9JHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApfWB9IC8+XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5tc2dMb2dnZXJ9PlxyXG4gICAgICAgICAgICA8dWwgaWQ9e3N0eWxlcy5tZXNzYWdlc30+XHJcbiAgICAgICAgICAgIHtsaXN0TWVzc2FnZXN9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIFJlbmRlciB0aGUgaW5wdXQgYW5kIHRoZSBzdWJtaXQgYnV0dG9uXHJcbmZ1bmN0aW9uIE1lc3NhZ2VTZW5kZXIocHJvcHMpIHtcclxuXHJcbiAgICAvLyBSdW5zIHdoZW4gdXNlciBwcmVzc2VzIGVudGVyIG9uIHRoZSBpbnB1dCAoaW5zdGVhZCBvZiBjbGlja2luZyBzZW5kIG1lc3NhZ2UgYnRuKVxyXG4gICAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgICAgIGlmIChlLndoaWNoID09PSAxMyB8fCBlLmtleVN0cm9rZSA9PT0gMTMpIHJldHVybiBwcm9wcy5sb2coKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnNlbmRNZXNzYWdlc30+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9IFxyXG4gICAgICAgICAgICBvbktleVByZXNzPXtzZW5kTWVzc2FnZX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmxvZ30+U2VuZDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8vIFRoZSBudW1iZXIgb2YgY29ubmVjdGVkIG1lbWJlcnNcclxuZnVuY3Rpb24gTWVtYmVyTGlzdChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29ubmVjdGVkfT5cclxuICAgICAgPGgxPkNvbm5lY3RlZCBNZW1iZXJzOiB7cHJvcHMuY2xpZW50c308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGxpPntwcm9wcy5kYXRhfTwvbGk+XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9