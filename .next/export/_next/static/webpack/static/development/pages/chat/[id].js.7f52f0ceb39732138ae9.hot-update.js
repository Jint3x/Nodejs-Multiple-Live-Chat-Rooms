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



var EnterUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/login.js */ "./components/login.js"));
});
_c2 = EnterUser;

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
    }
  });

  function changeValidation() {
    setValid(true);
  } // If the client has an username cookie use it to connect to the chat, otherwise
  // give them a special forum to create their username and THEN connect them to the chat


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, valid && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null), __jsx(Main, null)), !valid && __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/login.js */ "./components/login.js")).then(function (EnterUser) {
    console.log(__jsx(EnterUser, null));
  })); //{ !valid && (<EnterUser done={changeValidation}/>)}
}

_s(Post, "s2BkWX/tapHuHfh22OeWDCUmNC4=");

_c3 = Post;

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

_c4 = Header;

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

_c5 = Main;

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


_c6 = MessageLogger;

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


_c7 = MessageSender;

function MemberList(props) {
  return __jsx("div", {
    id: _styles_chatroom_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.connected
  }, __jsx("h1", null, "Connected Members: ", props.clients));
}

_c8 = MemberList;

function Message(props) {
  return __jsx("li", null, props.data);
}

_c9 = Message;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "EnterUser$lazy");
$RefreshReg$(_c2, "EnterUser");
$RefreshReg$(_c3, "Post");
$RefreshReg$(_c4, "Header");
$RefreshReg$(_c5, "Main");
$RefreshReg$(_c6, "MessageLogger");
$RefreshReg$(_c7, "MessageSender");
$RefreshReg$(_c8, "MemberList");
$RefreshReg$(_c9, "Message");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGF0Ly5qcyJdLCJuYW1lcyI6WyJFbnRlclVzZXIiLCJsYXp5IiwiUG9zdCIsInVzZVN0YXRlIiwidmFsaWQiLCJzZXRWYWxpZCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJzb21lIiwiZWxlbWVudCIsImluY2x1ZGVzIiwiY2hhbmdlVmFsaWRhdGlvbiIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiSGVhZGVyIiwicGF0aCIsInNldFBhdGgiLCJpZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJyZXBsYWNlIiwic3R5bGVzIiwiaGVhZGluZyIsIk1haW4iLCJwcm9wcyIsInZhbCIsInNldFZhbCIsIndzIiwic2V0V3MiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwidXNlciIsInNldFVzZXIiLCJjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kRGF0YSIsInNlbmQiLCJpdGVtcyIsIldlYlNvY2tldCIsInZhbGlkVXNlciIsImZpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkSXRlbXMiLCJ3aW5kb3ciLCJpbmZvIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld0l0ZW1zIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJ1bnNoaWZ0IiwiTWVzc2FnZUxvZ2dlciIsImxpc3RNZXNzYWdlcyIsIm1hcCIsInRvU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibXNnTG9nZ2VyIiwiTWVzc2FnZVNlbmRlciIsInNlbmRNZXNzYWdlIiwid2hpY2giLCJrZXlTdHJva2UiLCJzZW5kTWVzc2FnZXMiLCJNZW1iZXJMaXN0IiwiY2xpZW50cyIsIk1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxrREFBSSxNQUFDO0FBQUEsU0FBTSx1SUFBTjtBQUFBLENBQUQsQ0FBdEI7TUFBTUQsUzs7QUFJTixTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ0xDLEtBREs7QUFBQSxNQUNFQyxRQURGLGlCQUdaOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQUMsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixVQUFqQixDQUFKO0FBQUEsS0FBdkMsQ0FBSixFQUE4RTtBQUMzRVAsY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNGO0FBQ0osR0FKUSxDQUFUOztBQU1BLFdBQVNRLGdCQUFULEdBQTRCO0FBQ3hCUixZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsR0FaVyxDQWVaO0FBQ0E7OztBQUNBLFNBQ0ksbUVBQ0VELEtBQUssSUFDSCxtRUFDQSxNQUFDLE1BQUQsT0FEQSxFQUVBLE1BQUMsSUFBRCxPQUZBLENBRkosRUFRRSxDQUFDQSxLQUFELElBRUYsd0lBQW9DVSxJQUFwQyxDQUF5QyxVQUFBZCxTQUFTLEVBQUk7QUFDdERlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUMsU0FBRCxPQUFaO0FBQ0MsR0FGRCxDQVZBLENBREosQ0FqQlksQ0FvQ1g7QUFDSjs7R0FyQ1FkLEk7O01BQUFBLEk7O0FBMENULFNBQVNlLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxtQkFDVWQsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsTUFDUGUsSUFETztBQUFBLE1BQ0RDLE9BREM7O0FBR2RiLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUljLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxRQUFULENBQWtCYixLQUFsQixDQUF3QixHQUF4QixFQUE2QlksUUFBUSxDQUFDQyxRQUFULENBQWtCYixLQUFsQixDQUF3QixHQUF4QixFQUE2QmMsTUFBN0IsR0FBc0MsQ0FBbkUsQ0FBVDtBQUNBSixXQUFPLENBQUNDLEVBQUUsQ0FBQ0ksT0FBSCxDQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBRCxDQUFQO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQ0E7QUFBSSxNQUFFLEVBQUVDLGtFQUFNLENBQUNDO0FBQWYsb0JBQW9DUixJQUFwQyxDQURBO0FBR0g7O0lBWFFELE07O01BQUFBLE07O0FBZ0JULFNBQVNVLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLG1CQUNLekIsc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNWMEIsR0FEVTtBQUFBLE1BQ0xDLE1BREs7O0FBQUEsbUJBRUczQixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRVY0QixFQUZVO0FBQUEsTUFFTkMsS0FGTTs7QUFBQSxtQkFHZTdCLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR1Y4QixRQUhVO0FBQUEsTUFHQUMsV0FIQTs7QUFBQSxtQkFJaUIvQixzREFBUSxDQUFDLENBQUQsQ0FKekI7QUFBQSxNQUlWZ0MsU0FKVTtBQUFBLE1BSUNDLFlBSkQ7O0FBQUEsbUJBS09qQyxzREFBUSxDQUFDLEVBQUQsQ0FMZjtBQUFBLE1BS1ZrQyxJQUxVO0FBQUEsTUFLSkMsT0FMSTs7QUFPakIsV0FBU0MsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUI7QUFDZlYsVUFBTSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFOO0FBQ0gsR0FUZ0IsQ0FXakI7OztBQUNBLFdBQVNDLFFBQVQsR0FBb0I7QUFDaEIsUUFBSWQsR0FBRyxLQUFLLEVBQVosRUFBZ0I7QUFDaEJFLE1BQUUsQ0FBQ2EsSUFBSCxXQUFXUCxJQUFYLGVBQW9CUixHQUFwQjtBQUNBQyxVQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0gsR0FoQmdCLENBbUJuQjs7O0FBQ0V4Qix5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJdUMsS0FBSyxHQUFHLEVBQVosQ0FEYyxDQUNDOztBQUNmLFFBQUl6QixFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQmIsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJZLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQmIsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJjLE1BQTdCLEdBQXNDLENBQW5FLEVBQXNFQyxPQUF0RSxDQUE4RSxPQUE5RSxFQUF1RixFQUF2RixDQUFUO0FBQ0EsUUFBSU8sRUFBRSxHQUFJLElBQUllLFNBQUosQ0FBYyx5QkFBdUIxQixFQUFyQyxDQUFWO0FBQ0EsUUFBSTJCLFNBQVMsR0FBR3hDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkJ1QyxJQUEzQixDQUFnQyxVQUFBckMsT0FBTztBQUFBLGFBQUlBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixVQUFqQixDQUFKO0FBQUEsS0FBdkMsRUFBeUVILEtBQXpFLENBQStFLEdBQS9FLEVBQW9GLENBQXBGLENBQWhCO0FBRUFzQixNQUFFLENBQUNrQixnQkFBSCxDQUFvQixTQUFwQixFQUErQkMsUUFBL0I7QUFHQW5CLE1BQUUsQ0FBQ2tCLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCLFlBQU07QUFDOUJsQixRQUFFLENBQUNhLElBQUgsV0FBV0csU0FBWDtBQUNILEtBRkQ7QUFLQUksVUFBTSxDQUFDRixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3BDbEIsUUFBRSxDQUFDYSxJQUFILFdBQVdHLFNBQVg7QUFDSCxLQUZEOztBQUtELGFBQVNHLFFBQVQsQ0FBa0JFLElBQWxCLEVBQXdCO0FBQ3JCLFVBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksQ0FBQ0MsSUFBaEIsQ0FBWDtBQUNBLFVBQUlHLFFBQVEsR0FBR1gsS0FBSyxDQUFDWSxLQUFOLENBQVksQ0FBWixDQUFmLENBRnFCLENBRVc7QUFFaEM7QUFDQTs7QUFDQSxVQUFJSixJQUFJLENBQUNsQixTQUFMLEtBQW1CdUIsU0FBdkIsRUFBa0M7QUFDOUJ0QixvQkFBWSxDQUFDaUIsSUFBSSxDQUFDbEIsU0FBTixDQUFaO0FBQ0E7QUFDSDs7QUFFRHFCLGNBQVEsQ0FBQ0csT0FBVCxDQUFpQk4sSUFBSSxDQUFDQSxJQUF0QjtBQUNBUixXQUFLLENBQUNjLE9BQU4sQ0FBY04sSUFBSSxDQUFDQSxJQUFuQjtBQUNBbkIsaUJBQVcsQ0FBQ3NCLFFBQUQsQ0FBWDtBQUNBbEIsYUFBTyxDQUFDUyxTQUFELENBQVA7QUFDRjs7QUFFQWYsU0FBSyxDQUFDRCxFQUFELENBQUwsQ0FwQ2MsQ0FvQ0o7QUFFWCxHQXRDUSxFQXNDTixFQXRDTSxDQUFUO0FBd0NBLFNBQ0ksbUVBQ0EsTUFBQyxhQUFEO0FBQWUsWUFBUSxFQUFFRTtBQUF6QixJQURBLEVBRUEsTUFBQyxhQUFEO0FBQWUsU0FBSyxFQUFFSixHQUF0QjtBQUEyQixVQUFNLEVBQUVVLE1BQW5DO0FBQTJDLE9BQUcsRUFBRUk7QUFBaEQsSUFGQSxFQUdBLE1BQUMsVUFBRDtBQUFZLFdBQU8sRUFBRVI7QUFBckIsSUFIQSxDQURKO0FBT0gsQyxDQUdEOzs7SUF0RVNSLEk7O01BQUFBLEk7O0FBdUVULFNBQVNpQyxhQUFULENBQXVCaEMsS0FBdkIsRUFBOEI7QUFDMUIsTUFBSUssUUFBUSxHQUFHTCxLQUFLLENBQUNLLFFBQXJCO0FBQ0EsTUFBSTRCLFlBQVksR0FBRzVCLFFBQVEsQ0FBQzZCLEdBQVQsQ0FBYSxVQUFBbkQsT0FBTyxFQUFJO0FBQ3ZDLFdBQU8sTUFBQyxPQUFEO0FBQVMsVUFBSSxFQUFFQSxPQUFmO0FBQXdCLFNBQUcsWUFBS0EsT0FBTyxDQUFDb0QsUUFBUixFQUFMLFNBQTBCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLE1BQTNCLENBQTFCO0FBQTNCLE1BQVA7QUFDSCxHQUZrQixDQUFuQjtBQUtBLFNBQ0k7QUFBSyxNQUFFLEVBQUV6QyxrRUFBTSxDQUFDMEM7QUFBaEIsS0FDSTtBQUFJLE1BQUUsRUFBRTFDLGtFQUFNLENBQUNRO0FBQWYsS0FDQzRCLFlBREQsQ0FESixDQURKO0FBT0gsQyxDQUVEOzs7TUFoQlNELGE7O0FBaUJULFNBQVNRLGFBQVQsQ0FBdUJ4QyxLQUF2QixFQUE4QjtBQUUxQjtBQUNBLFdBQVN5QyxXQUFULENBQXFCN0IsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSUEsQ0FBQyxDQUFDOEIsS0FBRixLQUFZLEVBQVosSUFBa0I5QixDQUFDLENBQUMrQixTQUFGLEtBQWdCLEVBQXRDLEVBQTBDLE9BQU8zQyxLQUFLLENBQUNaLEdBQU4sRUFBUDtBQUM3Qzs7QUFFRCxTQUNJO0FBQUssTUFBRSxFQUFFUyxrRUFBTSxDQUFDK0M7QUFBaEIsS0FFSTtBQUNBLFNBQUssRUFBRTVDLEtBQUssQ0FBQ2MsS0FEYjtBQUVBLFlBQVEsRUFBRWQsS0FBSyxDQUFDVyxNQUZoQjtBQUdBLGNBQVUsRUFBRThCO0FBSFosSUFGSixFQVFJO0FBQVEsV0FBTyxFQUFFekMsS0FBSyxDQUFDWjtBQUF2QixZQVJKLENBREo7QUFhSCxDLENBR0Q7OztNQXZCU29ELGE7O0FBd0JULFNBQVNLLFVBQVQsQ0FBb0I3QyxLQUFwQixFQUEyQjtBQUN2QixTQUNJO0FBQUssTUFBRSxFQUFFSCxrRUFBTSxDQUFDVTtBQUFoQixLQUNGLHlDQUF3QlAsS0FBSyxDQUFDOEMsT0FBOUIsQ0FERSxDQURKO0FBS0g7O01BTlFELFU7O0FBU1QsU0FBU0UsT0FBVCxDQUFpQi9DLEtBQWpCLEVBQXdCO0FBQ3BCLFNBQU8sa0JBQUtBLEtBQUssQ0FBQ3lCLElBQVgsQ0FBUDtBQUNIOztNQUZRc0IsTztBQU9NekUsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMuN2Y1MmYwY2ViMzk3MzIxMzhhZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHVzZXJuYW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvY3JlYXRlX2FfbmFtZS5tb2R1bGUuY3NzXCJcclxuXHJcbmNvbnN0IEVudGVyVXNlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2xvZ2luLmpzJykpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gICAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGV5IGhhdmUgYSB1c2VybmFtZSwgaWYgbm90IGFzayB0aGVtIGZvciBvbmVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIikuc29tZShlbGVtZW50ID0+IGVsZW1lbnQuaW5jbHVkZXMoXCJ1c2VybmFtZVwiKSkpIHtcclxuICAgICAgICAgICBzZXRWYWxpZCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBzZXRWYWxpZCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICBcclxuICAgIC8vIElmIHRoZSBjbGllbnQgaGFzIGFuIHVzZXJuYW1lIGNvb2tpZSB1c2UgaXQgdG8gY29ubmVjdCB0byB0aGUgY2hhdCwgb3RoZXJ3aXNlXHJcbiAgICAvLyBnaXZlIHRoZW0gYSBzcGVjaWFsIGZvcnVtIHRvIGNyZWF0ZSB0aGVpciB1c2VybmFtZSBhbmQgVEhFTiBjb25uZWN0IHRoZW0gdG8gdGhlIGNoYXRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHZhbGlkICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWFpbi8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgIXZhbGlkICYmIChcclxuICAgICAgICAgIFxyXG4gICAgICAgIGltcG9ydChcIi4uLy4uL2NvbXBvbmVudHMvbG9naW4uanNcIikudGhlbihFbnRlclVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDxFbnRlclVzZXIgLz4pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgIFxyXG4gICAgKS8veyAhdmFsaWQgJiYgKDxFbnRlclVzZXIgZG9uZT17Y2hhbmdlVmFsaWRhdGlvbn0vPil9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFBhdGgoaWQucmVwbGFjZSgvJTIwL2dpLCBcIiBcIikpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGgxIGlkPXtzdHlsZXMuaGVhZGluZ30+Q2hhdCBSb29tOiB7cGF0aH08L2gxPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt3cywgc2V0V3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlKGUpIHtcclxuICAgICAgICBzZXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBTZW5kIGEgbWVzc2FnZSAodG8gdGhlIHNlcnZlcikgdG8gYmUgYnJvYWRjYXN0ZWQgdG8gYWxsIGNvbm5lY3RlZCBjbGllbnRzIFxyXG4gICAgZnVuY3Rpb24gc2VuZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIHdzLnNlbmQoYCR7dXNlcn06ICR7dmFsfWApXHJcbiAgICAgICAgc2V0VmFsKFwiXCIpXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gQ29ubmVjdCB0byB3ZWJob29rIHVwb24gcmVuZGVyaW5nIHRoZSBwYWdlIGFuZCBhZGQgaW4gaW50byBhIHN0YXRlIHNvIHlvdSBjYW4gYWNjZXNzIGl0IGxhdGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsZXQgaXRlbXMgPSBbXSAvLyBUaGlzIHNhdmVzIEFMTCBtZXNzYWdlc1xyXG4gICAgICBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdLnJlcGxhY2UoLyUyMC9naSwgXCJcIik7XHJcbiAgICAgIGxldCB3cyA9ICBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4MC9cIitpZCk7XHJcbiAgICAgIGxldCB2YWxpZFVzZXIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmluY2x1ZGVzKFwidXNlcm5hbWVcIikpLnNwbGl0KFwiPVwiKVsxXTtcclxuXHJcbiAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGFkZEl0ZW1zKSBcclxuXHJcblxyXG4gICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICB3cy5zZW5kKGAke3ZhbGlkVXNlcn0gaGFzIGpvaW5lZCB0aGUgY2hhdGApXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgd3Muc2VuZChgJHt2YWxpZFVzZXJ9IGhhcyBsZWZ0IHRoZSBjaGF0YClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIFxyXG4gICAgIGZ1bmN0aW9uIGFkZEl0ZW1zKGluZm8pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoaW5mby5kYXRhKVxyXG4gICAgICAgIGxldCBuZXdJdGVtcyA9IGl0ZW1zLnNsaWNlKDAsKSAgLy8gV2UgY3JlYXRlIGFub3RoZXIgYXJyLCBzbyB3aGVuIHdlIHNldCBpdCB3aXRoIHNldE1lc3NhZ2VzIHRoZSBwYWdlIHdpbGwgcmVmcmVzaCBhbmQgdGhlIGxpc3QgKEluZm8pIHdpbGwgdXBkYXRlXHJcblxyXG4gICAgICAgIC8vIENhdGNoIGEgbWVzc2FnZSBmcm9tIHRoZSBzZXJ2ZXIgY29udGFpbmluZyB0aGUgdXBkYXRlZCBudW1iZXIgb2YgbWVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgaXRcclxuICAgICAgICBpZiAoZGF0YS5jb25uZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRDb25uZWN0ZWQoZGF0YS5jb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0l0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIGl0ZW1zLnVuc2hpZnQoZGF0YS5kYXRhKVxyXG4gICAgICAgIHNldE1lc3NhZ2VzKG5ld0l0ZW1zKVxyXG4gICAgICAgIHNldFVzZXIodmFsaWRVc2VyKVxyXG4gICAgIH1cclxuICBcclxuICAgICAgc2V0V3Mod3MpIC8vIHNldCB0aGUgV2ViU29ja2V0IHRvIGJlIGdsb2JhbFxyXG4gICAgIFxyXG4gICAgfSwgW10pXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lc3NhZ2VMb2dnZXIgbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPE1lc3NhZ2VTZW5kZXIgdmFsdWU9e3ZhbH0gY2hhbmdlPXtjaGFuZ2V9IGxvZz17c2VuZERhdGF9IC8+XHJcbiAgICAgICAgPE1lbWJlckxpc3QgY2xpZW50cz17Y29ubmVjdGVkfS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBMb2FkcyBhbGwgaW5jb21pbmcgbWVzc2FnZXMgaW4gdGhlIGNoYXRcclxuZnVuY3Rpb24gTWVzc2FnZUxvZ2dlcihwcm9wcykge1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gcHJvcHMubWVzc2FnZXNcclxuICAgIGxldCBsaXN0TWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxNZXNzYWdlIGRhdGE9e2VsZW1lbnR9IGtleT17YCR7ZWxlbWVudC50b1N0cmluZygpfSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gfSAvPlxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMubXNnTG9nZ2VyfT5cclxuICAgICAgICAgICAgPHVsIGlkPXtzdHlsZXMubWVzc2FnZXN9PlxyXG4gICAgICAgICAgICB7bGlzdE1lc3NhZ2VzfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBSZW5kZXIgdGhlIGlucHV0IGFuZCB0aGUgc3VibWl0IGJ1dHRvblxyXG5mdW5jdGlvbiBNZXNzYWdlU2VuZGVyKHByb3BzKSB7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHVzZXIgcHJlc3NlcyBlbnRlciBvbiB0aGUgaW5wdXQgKGluc3RlYWQgb2YgY2xpY2tpbmcgc2VuZCBtZXNzYWdlIGJ0bilcclxuICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlTdHJva2UgPT09IDEzKSByZXR1cm4gcHJvcHMubG9nKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5zZW5kTWVzc2FnZXN9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfSBcclxuICAgICAgICAgICAgb25LZXlQcmVzcz17c2VuZE1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5sb2d9PlNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vLyBUaGUgbnVtYmVyIG9mIGNvbm5lY3RlZCBtZW1iZXJzXHJcbmZ1bmN0aW9uIE1lbWJlckxpc3QocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbm5lY3RlZH0+XHJcbiAgICAgIDxoMT5Db25uZWN0ZWQgTWVtYmVyczoge3Byb3BzLmNsaWVudHN9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIDxsaT57cHJvcHMuZGF0YX08L2xpPlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==