webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/homepage.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/homepage.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#homepage_welcome__3uU06 {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#homepage_chat__yf5Wx, #homepage_wc__2kZkv, #homepage_to__1ptRZ {\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#homepage_wc__2kZkv {\r\n    animation-name: homepage_left__3xBF2;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_chat__yf5Wx {\r\n    animation-name: homepage_right__K04BT;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#homepage_to__1ptRZ {\r\n    animation-name: homepage_top__UFxG1;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#homepage_redirect__1dOEr {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 80%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: homepage_fade__3ILGj;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.homepage_redirs__Az5uI:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.homepage_redirs__Az5uI>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.homepage_redirs__Az5uI>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.homepage_join__Py6xZ {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.homepage_join__Py6xZ>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#homepage_roomj__WJaIv {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomj__WJaIv>input {\r\n    height: 40px;\r\n    width: 40%;\r\n    font-size: 25px;\r\n}\r\n\r\n#homepage_roomj__WJaIv>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.homepage_create__3loQB {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.homepage_create__3loQB>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#homepage_roomc__2Yips {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#homepage_roomc__2Yips>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n    width: 40%;\r\n}\r\n\r\n#homepage_roomc__2Yips>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes homepage_fade__3ILGj {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes homepage_left__3xBF2 {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes homepage_right__K04BT {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes homepage_top__UFxG1 {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}\r\n\r\n\r\n\r\n/*\r\nResponsive\r\n*/\r\n\r\n@media (max-width: 1200px) {\r\n\r\n    #homepage_welcome__3uU06 {\r\n        height: 500px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 19px;\r\n    }\r\n\r\n    #homepage_ws__19tcJ, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n        padding-top: 1em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 850px) {\r\n    #homepage_welcome__3uU06 {\r\n        font-size: 28px;\r\n        height: 350px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 17px;\r\n        width: 95%;\r\n    }\r\n\r\n    #homepage_roomj__WJaIv>button, #homepage_roomc__2Yips>button {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #homepage_welcome__3uU06 {\r\n        font-size: 18px;\r\n        height: 300px;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr {\r\n        font-size: 15px;\r\n        width: 80%;\r\n        flex-direction: column;\r\n        margin-top: 3em;\r\n    }\r\n\r\n    #homepage_redirect__1dOEr>h1 {\r\n        margin: 0.5em 0;\r\n    }\r\n\r\n    #homepage_ws__19tcJ, #homepage_to__1ptRZ, #homepage_chat__yf5Wx {\r\n        padding-top: 0.5em;\r\n    }\r\n\r\n    .homepage_create__3loQB {\r\n        margin-top: 6em\r\n    }\r\n\r\n\r\n    .homepage_join__Py6xZ, .homepage_create__3loQB {\r\n\r\n        width: 100%;\r\n    }\r\n\r\n    .homepage_create__3loQB>h1, .homepage_join__Py6xZ>h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #homepage_roomc__2Yips>input, #homepage_roomj__WJaIv>input {\r\n        font-size: 20px;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/homepage.module.css"],"names":[],"mappings":";AACA;;CAEC;;;AAGD;IACI,6JAA6J;IAC7J,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;;IAE3B,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;;AAGA;IACI,sBAAsB;IACtB,qBAAqB;;AAEzB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;;IAExB;iBACa;AACjB;;;AAGA;IACI,oCAAoB;IACpB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,qCAAqB;IACrB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,mCAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;;AAGA;IACI;mBACe;IACf,eAAe;IACf,aAAa;IACb,6BAA6B;IAC7B,UAAU;IACV;;AAEJ;;;;AAIA;IACI,sBAAsB;IACtB,YAAY;IACZ,cAAc;IACd,UAAU;;IAEV,oCAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;;;AAIA;IACI,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,iCAAiC;AACrC;;;AAGA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ;iBACa;IACb,wCAAwC;AAC5C;;AAEA;;CAEC;;AAED;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;;CAEC;;;AAGD;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;;AAGA;;CAEC;;AAED;IACI,MAAM,UAAU;IAChB,IAAI,UAAU,CAAC;AACnB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,OAAO;AACf;;AAEA;IACI,MAAM,YAAY;IAClB,IAAI,QAAQ,CAAC;AACjB;;AAEA;IACI,MAAM,WAAW;IACjB,IAAI,MAAM;AACd;;;;AAIA;;CAEC;;AAED;;IAEI;QACI,aAAa;QACb,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;;AAGA;IACI;QACI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,eAAe;QACf,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,UAAU;QACV,sBAAsB;QACtB,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI;IACJ;;;IAGA;;QAEI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;AAEJ","file":"homepage.module.css","sourcesContent":["\r\n/*\r\nFirst Welcome section\r\n*/\r\n\r\n\r\n#welcome {\r\n    background-image: url(\"https://media.istockphoto.com/videos/4k-futuristic-network-artificial-intelligence-global-communication-video-id1054721720?s=640x640\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    height: 700px;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#wc, #to, #chat {\r\n    padding: 1em 0 0 0.2em;\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n\r\n#chat, #wc, #to {\r\n    animation-name: fade;\r\n    animation-duration: 1.5s;\r\n\r\n    text-shadow: 2px 2px red,\r\n    -2px -2px red;\r\n}\r\n\r\n\r\n#wc {\r\n    animation-name: left;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#chat {\r\n    animation-name: right;\r\n    animation-duration: 0.8s;\r\n    position: relative;\r\n}\r\n\r\n#to {\r\n    animation-name: top;\r\n    animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n\r\n#redirect {\r\n    text-shadow: 2px 2px black,\r\n    -2px -2px black;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 80%;\r\n    margin: 6em auto 0 auto\r\n    \r\n}\r\n\r\n\r\n\r\n.redirs {\r\n    background-color: gray;\r\n    color: white;\r\n    padding: 0.2em;\r\n    opacity: 0;\r\n\r\n    animation-name: fade;\r\n    animation-duration: 1s;\r\n    animation-delay: 1s;\r\n    animation-fill-mode: forwards;\r\n}\r\n\r\n\r\n\r\n.redirs:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    background-color: white;\r\n    transition: background-color 0.5s;  \r\n}\r\n\r\n\r\n.redirs>a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.redirs>a:hover  {\r\n    color: black;\r\n    text-shadow: 2px 2px white,\r\n    2px 2px white;\r\n    transition: color 0.5s, text-shadow 0.5s;  \r\n}\r\n\r\n/*\r\nJoining a chatroom\r\n*/\r\n\r\n.join {\r\n    width: 100%;\r\n    margin-top: 4em;\r\n}\r\n\r\n.join>h1 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\n#roomj {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomj>input {\r\n    height: 40px;\r\n    width: 40%;\r\n    font-size: 25px;\r\n}\r\n\r\n#roomj>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nCreating a room\r\n*/\r\n\r\n\r\n.create {\r\n    width: 100%;\r\n    margin-top: 10em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\n.create>h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n}\r\n\r\n#roomc {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 4em;\r\n}\r\n\r\n#roomc>input {\r\n    height: 40px;\r\n    font-size: 25px;\r\n    width: 40%;\r\n}\r\n\r\n#roomc>button {\r\n    height: 40px;\r\n    width: 15%;\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n/*\r\nAnimations\r\n*/\r\n\r\n@keyframes fade {\r\n    from {opacity: 0}\r\n    to {opacity: 1;}\r\n}\r\n\r\n@keyframes left {\r\n    from {left: -100%}\r\n    to {left: 0}\r\n}\r\n\r\n@keyframes right {\r\n    from {right: -100%}\r\n    to {right: 0;}\r\n}\r\n\r\n@keyframes top {\r\n    from {top: -300px}\r\n    to {top: 0}\r\n}\r\n\r\n\r\n\r\n/*\r\nResponsive\r\n*/\r\n\r\n@media (max-width: 1200px) {\r\n\r\n    #welcome {\r\n        height: 500px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 19px;\r\n    }\r\n\r\n    #ws, #to, #chat {\r\n        padding-top: 1em;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 850px) {\r\n    #welcome {\r\n        font-size: 28px;\r\n        height: 350px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 17px;\r\n        width: 95%;\r\n    }\r\n\r\n    #roomj>button, #roomc>button {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #welcome {\r\n        font-size: 18px;\r\n        height: 300px;\r\n    }\r\n\r\n    #redirect {\r\n        font-size: 15px;\r\n        width: 80%;\r\n        flex-direction: column;\r\n        margin-top: 3em;\r\n    }\r\n\r\n    #redirect>h1 {\r\n        margin: 0.5em 0;\r\n    }\r\n\r\n    #ws, #to, #chat {\r\n        padding-top: 0.5em;\r\n    }\r\n\r\n    .create {\r\n        margin-top: 6em\r\n    }\r\n\r\n\r\n    .join, .create {\r\n\r\n        width: 100%;\r\n    }\r\n\r\n    .create>h1, .join>h1 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #roomc>input, #roomj>input {\r\n        font-size: 20px;\r\n    }\r\n\r\n}"]}]);
// Exports
exports.locals = {
	"welcome": "homepage_welcome__3uU06",
	"wc": "homepage_wc__2kZkv",
	"to": "homepage_to__1ptRZ",
	"chat": "homepage_chat__yf5Wx",
	"fade": "homepage_fade__3ILGj",
	"left": "homepage_left__3xBF2",
	"right": "homepage_right__K04BT",
	"top": "homepage_top__UFxG1",
	"redirect": "homepage_redirect__1dOEr",
	"redirs": "homepage_redirs__Az5uI",
	"join": "homepage_join__Py6xZ",
	"roomj": "homepage_roomj__WJaIv",
	"create": "homepage_create__3loQB",
	"roomc": "homepage_roomc__2Yips",
	"ws": "homepage_ws__19tcJ"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZXBhZ2UubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDhFQUE4RSx3S0FBd0sscUNBQXFDLCtCQUErQixvQ0FBb0MsMEJBQTBCLDJCQUEyQix3QkFBd0IseUJBQXlCLEtBQUssNkVBQTZFLCtCQUErQiw4QkFBOEIsYUFBYSw2RUFBNkUsNkNBQTZDLGlDQUFpQywyREFBMkQsS0FBSyxpQ0FBaUMsNkNBQTZDLGlDQUFpQywyQkFBMkIsS0FBSywrQkFBK0IsOENBQThDLGlDQUFpQywyQkFBMkIsS0FBSyw2QkFBNkIsNENBQTRDLCtCQUErQiwyQkFBMkIsS0FBSyx1Q0FBdUMsMkRBQTJELHdCQUF3QixzQkFBc0Isc0NBQXNDLG1CQUFtQiw0Q0FBNEMseUNBQXlDLCtCQUErQixxQkFBcUIsdUJBQXVCLG1CQUFtQixpREFBaUQsK0JBQStCLDRCQUE0QixzQ0FBc0MsS0FBSywrQ0FBK0Msd0JBQXdCLHFCQUFxQixnQ0FBZ0MsMENBQTBDLE9BQU8sdUNBQXVDLDhCQUE4QixxQkFBcUIsS0FBSywwQ0FBMEMscUJBQXFCLHlEQUF5RCxpREFBaUQsT0FBTyxxRUFBcUUsb0JBQW9CLHdCQUF3QixLQUFLLGtDQUFrQywyQkFBMkIsd0JBQXdCLEtBQUssZ0NBQWdDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixLQUFLLHNDQUFzQyxxQkFBcUIsbUJBQW1CLHdCQUF3QixLQUFLLHVDQUF1QyxxQkFBcUIsbUJBQW1CLHdCQUF3QixLQUFLLHdFQUF3RSxvQkFBb0IseUJBQXlCLDJCQUEyQixLQUFLLG9DQUFvQyx3QkFBd0IsMkJBQTJCLEtBQUssZ0NBQWdDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHdCQUF3QixLQUFLLHNDQUFzQyxxQkFBcUIsd0JBQXdCLG1CQUFtQixLQUFLLHVDQUF1Qyxx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LFNBQVMsa0NBQWtDLDRCQUE0QixTQUFTLHdDQUF3Qyw0QkFBNEIsU0FBUyxTQUFTLEdBQUc7QUFDbmtYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jODdlOTg2NTQ2Yjg3MDY1MjY1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLypcXHJcXG5GaXJzdCBXZWxjb21lIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcblxcclxcbiNob21lcGFnZV93ZWxjb21lX18zdVUwNiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmlkZW9zLzRrLWZ1dHVyaXN0aWMtbmV0d29yay1hcnRpZmljaWFsLWludGVsbGlnZW5jZS1nbG9iYWwtY29tbXVuaWNhdGlvbi12aWRlby1pZDEwNTQ3MjE3MjA/cz02NDB4NjQwXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3YsICNob21lcGFnZV90b19fMXB0UlosICNob21lcGFnZV9jaGF0X195ZjVXeCB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAwIDAgMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9jaGF0X195ZjVXeCwgI2hvbWVwYWdlX3djX18ya1prdiwgI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV9mYWRlX18zSUxHajtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZWQsXFxyXFxuICAgIC0ycHggLTJweCByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV93Y19fMmtaa3Yge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfbGVmdF9fM3hCRjI7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZXBhZ2VfY2hhdF9feWY1V3gge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfcmlnaHRfX0swNEJUO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3RvX18xcHRSWiB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBob21lcGFnZV90b3BfX1VGeEcxO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXIge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCBibGFjayxcXHJcXG4gICAgLTJweCAtMnB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDZlbSBhdXRvIDAgYXV0b1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhvbWVwYWdlX3JlZGlyc19fQXo1dUkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgICBhbmltYXRpb24tbmFtZTogaG9tZXBhZ2VfZmFkZV9fM0lMR2o7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaG9tZXBhZ2VfcmVkaXJzX19BejV1STpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9yZWRpcnNfX0F6NXVJPmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX3JlZGlyc19fQXo1dUk+YTpob3ZlciAge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHdoaXRlLFxcclxcbiAgICAycHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCB0ZXh0LXNoYWRvdyAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSm9pbmluZyBhIGNoYXRyb29tXFxyXFxuKi9cXHJcXG5cXHJcXG4uaG9tZXBhZ2Vfam9pbl9fUHk2eFoge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXBhZ2Vfam9pbl9fUHk2eFo+aDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tal9fV0phSXY+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21qX19XSmFJdj5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5DcmVhdGluZyBhIHJvb21cXHJcXG4qL1xcclxcblxcclxcblxcclxcbi5ob21lcGFnZV9jcmVhdGVfXzNsb1FCIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlX2NyZWF0ZV9fM2xvUUI+aDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNob21lcGFnZV9yb29tY19fMllpcHM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVwYWdlX3Jvb21jX18yWWlwcz5idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG5BbmltYXRpb25zXFxyXFxuKi9cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX2ZhZGVfXzNJTEdqIHtcXHJcXG4gICAgZnJvbSB7b3BhY2l0eTogMH1cXHJcXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX2xlZnRfXzN4QkYyIHtcXHJcXG4gICAgZnJvbSB7bGVmdDogLTEwMCV9XFxyXFxuICAgIHRvIHtsZWZ0OiAwfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGhvbWVwYWdlX3JpZ2h0X19LMDRCVCB7XFxyXFxuICAgIGZyb20ge3JpZ2h0OiAtMTAwJX1cXHJcXG4gICAgdG8ge3JpZ2h0OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBob21lcGFnZV90b3BfX1VGeEcxIHtcXHJcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHh9XFxyXFxuICAgIHRvIHt0b3A6IDB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuUmVzcG9uc2l2ZVxcclxcbiovXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDYge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfd3NfXzE5dGNKLCAjaG9tZXBhZ2VfdG9fXzFwdFJaLCAjaG9tZXBhZ2VfY2hhdF9feWY1V3gge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXHJcXG4gICAgI2hvbWVwYWdlX3dlbGNvbWVfXzN1VTA2IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hvbWVwYWdlX3JlZGlyZWN0X18xZE9FciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lcGFnZV9yb29tal9fV0phSXY+YnV0dG9uLCAjaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAjaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDYge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2VfcmVkaXJlY3RfXzFkT0VyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lcGFnZV9yZWRpcmVjdF9fMWRPRXI+aDEge1xcclxcbiAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNob21lcGFnZV93c19fMTl0Y0osICNob21lcGFnZV90b19fMXB0UlosICNob21lcGFnZV9jaGF0X195ZjVXeCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWVwYWdlX2NyZWF0ZV9fM2xvUUIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNmVtXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmhvbWVwYWdlX2pvaW5fX1B5NnhaLCAuaG9tZXBhZ2VfY3JlYXRlX18zbG9RQiB7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZXBhZ2VfY3JlYXRlX18zbG9RQj5oMSwgLmhvbWVwYWdlX2pvaW5fX1B5NnhaPmgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaG9tZXBhZ2Vfcm9vbWNfXzJZaXBzPmlucHV0LCAjaG9tZXBhZ2Vfcm9vbWpfX1dKYUl2PmlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9TaGkvRGVza3RvcC9MaXZlIENoYXQvc3R5bGVzL2hvbWVwYWdlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBOztDQUVDOzs7QUFHRDtJQUNJLDZKQUE2SjtJQUM3Siw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjs7SUFFM0IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7O0FBRXpCOzs7QUFHQTtJQUNJLG9DQUFvQjtJQUNwQix3QkFBd0I7O0lBRXhCO2lCQUNhO0FBQ2pCOzs7QUFHQTtJQUNJLG9DQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSTttQkFDZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVjs7QUFFSjs7OztBQUlBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTs7SUFFVixvQ0FBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7Ozs7QUFJQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWjtpQkFDYTtJQUNiLHdDQUF3QztBQUM1Qzs7QUFFQTs7Q0FFQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBOztDQUVDOzs7QUFHRDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7O0FBR0E7O0NBRUM7O0FBRUQ7SUFDSSxNQUFNLFVBQVU7SUFDaEIsSUFBSSxVQUFVLENBQUM7QUFDbkI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxPQUFPO0FBQ2Y7O0FBRUE7SUFDSSxNQUFNLFlBQVk7SUFDbEIsSUFBSSxRQUFRLENBQUM7QUFDakI7O0FBRUE7SUFDSSxNQUFNLFdBQVc7SUFDakIsSUFBSSxNQUFNO0FBQ2Q7Ozs7QUFJQTs7Q0FFQzs7QUFFRDs7SUFFSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSTtJQUNKOzs7SUFHQTs7UUFFSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSlwiLFwiZmlsZVwiOlwiaG9tZXBhZ2UubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4vKlxcclxcbkZpcnN0IFdlbGNvbWUgc2VjdGlvblxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuI3dlbGNvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3ZpZGVvcy80ay1mdXR1cmlzdGljLW5ldHdvcmstYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtZ2xvYmFsLWNvbW11bmljYXRpb24tdmlkZW8taWQxMDU0NzIxNzIwP3M9NjQweDY0MFxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jd2MsICN0bywgI2NoYXQge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDAuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY2hhdCwgI3djLCAjdG8ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZTtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcclxcblxcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZWQsXFxyXFxuICAgIC0ycHggLTJweCByZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN3YyB7XFxyXFxuICAgIGFuaW1hdGlvbi1uYW1lOiBsZWZ0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXQge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogcmlnaHQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG8ge1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogdG9wO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNyZWRpcmVjdCB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrLFxcclxcbiAgICAtMnB4IC0ycHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogNmVtIGF1dG8gMCBhdXRvXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucmVkaXJzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucmVkaXJzOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJlZGlycz5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5yZWRpcnM+YTpob3ZlciAge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHdoaXRlLFxcclxcbiAgICAycHggMnB4IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzLCB0ZXh0LXNoYWRvdyAwLjVzOyAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSm9pbmluZyBhIGNoYXRyb29tXFxyXFxuKi9cXHJcXG5cXHJcXG4uam9pbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbi5qb2luPmgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbiNyb29taiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxyXFxufVxcclxcblxcclxcbiNyb29taj5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWo+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ3JlYXRpbmcgYSByb29tXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4uY3JlYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZT5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vbWM+aW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jvb21jPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbkFuaW1hdGlvbnNcXHJcXG4qL1xcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICAgIGZyb20ge29wYWNpdHk6IDB9XFxyXFxuICAgIHRvIHtvcGFjaXR5OiAxO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsZWZ0IHtcXHJcXG4gICAgZnJvbSB7bGVmdDogLTEwMCV9XFxyXFxuICAgIHRvIHtsZWZ0OiAwfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJpZ2h0IHtcXHJcXG4gICAgZnJvbSB7cmlnaHQ6IC0xMDAlfVxcclxcbiAgICB0byB7cmlnaHQ6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRvcCB7XFxyXFxuICAgIGZyb20ge3RvcDogLTMwMHB4fVxcclxcbiAgICB0byB7dG9wOiAwfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcblJlc3BvbnNpdmVcXHJcXG4qL1xcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG5cXHJcXG4gICAgI3dlbGNvbWUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcmVkaXJlY3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN3cywgI3RvLCAjY2hhdCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAjd2VsY29tZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyZWRpcmVjdCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyb29taj5idXR0b24sICNyb29tYz5idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgI3dlbGNvbWUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcmVkaXJlY3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JlZGlyZWN0PmgxIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMC41ZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjd3MsICN0bywgI2NoYXQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jcmVhdGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNmVtXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmpvaW4sIC5jcmVhdGUge1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNyZWF0ZT5oMSwgLmpvaW4+aDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNyb29tYz5pbnB1dCwgI3Jvb21qPmlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ3ZWxjb21lXCI6IFwiaG9tZXBhZ2Vfd2VsY29tZV9fM3VVMDZcIixcblx0XCJ3Y1wiOiBcImhvbWVwYWdlX3djX18ya1prdlwiLFxuXHRcInRvXCI6IFwiaG9tZXBhZ2VfdG9fXzFwdFJaXCIsXG5cdFwiY2hhdFwiOiBcImhvbWVwYWdlX2NoYXRfX3lmNVd4XCIsXG5cdFwiZmFkZVwiOiBcImhvbWVwYWdlX2ZhZGVfXzNJTEdqXCIsXG5cdFwibGVmdFwiOiBcImhvbWVwYWdlX2xlZnRfXzN4QkYyXCIsXG5cdFwicmlnaHRcIjogXCJob21lcGFnZV9yaWdodF9fSzA0QlRcIixcblx0XCJ0b3BcIjogXCJob21lcGFnZV90b3BfX1VGeEcxXCIsXG5cdFwicmVkaXJlY3RcIjogXCJob21lcGFnZV9yZWRpcmVjdF9fMWRPRXJcIixcblx0XCJyZWRpcnNcIjogXCJob21lcGFnZV9yZWRpcnNfX0F6NXVJXCIsXG5cdFwiam9pblwiOiBcImhvbWVwYWdlX2pvaW5fX1B5NnhaXCIsXG5cdFwicm9vbWpcIjogXCJob21lcGFnZV9yb29tal9fV0phSXZcIixcblx0XCJjcmVhdGVcIjogXCJob21lcGFnZV9jcmVhdGVfXzNsb1FCXCIsXG5cdFwicm9vbWNcIjogXCJob21lcGFnZV9yb29tY19fMllpcHNcIixcblx0XCJ3c1wiOiBcImhvbWVwYWdlX3dzX18xOXRjSlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==