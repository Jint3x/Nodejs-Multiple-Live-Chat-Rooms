webpackHotUpdate("static\\development\\pages\\chat\\[id].js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/chatroom.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/chatroom.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "#chatroom_heading__3YxxD {\r\n    font-size: 50px;\r\n    text-align: center;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n\r\n/*\r\nDisplay Messages\r\n*/\r\n\r\n#chatroom_msgLogger__XZUFJ {\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    color: white;\r\n    height: 500px;\r\n    width: 60%;\r\n    overflow: scroll;\r\n}\r\n\r\n#chatroom_messages__3kFUG {\r\n    padding-top: 0.3em;\r\n    padding-left: 0.5em;\r\n    list-style-type: none;\r\n    font-size: 40px;\r\n    \r\n}\r\n\r\n/*\r\nSend messages section\r\n*/\r\n\r\n#chatroom_SendMessages__22Gm- {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#chatroom_SendMessages__22Gm->input {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 25px;\r\n}\r\n\r\n#chatroom_SendMessages__22Gm->button {\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nPeople online\r\n*/\r\n\r\n#chatroom_connected__19Saz {\r\n    margin: 1em auto;\r\n    width: 60%;\r\n    padding-left: 10px\r\n}\r\n\r\n\r\n/* Responsive Design */\r\n\r\n\r\n@media (max-width: 1000px) {\r\n    #chatroom_heading__3YxxD {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #chatroom_msgLogger__XZUFJ {\r\n        height: 600px;\r\n    }\r\n\r\n    #chatroom_messages__3kFUG {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #chatroom_connected__19Saz {\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    #chatroom_connected__19Saz, #chatroom_sendMessage__3r7VZ, #chatroom_msgLogger__XZUFJ {\r\n        width: 80%;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/chatroom.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;;;AAGA;;CAEC;;AAED;IACI,cAAc;IACd,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;;CAEC;;AAED;IACI,cAAc;IACd,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;;CAEC;;AAED;IACI,gBAAgB;IAChB,UAAU;IACV;AACJ;;;AAGA,sBAAsB;;;AAGtB;IACI;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;AAEJ","file":"chatroom.module.css","sourcesContent":["#heading {\r\n    font-size: 50px;\r\n    text-align: center;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n\r\n/*\r\nDisplay Messages\r\n*/\r\n\r\n#msgLogger {\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    color: white;\r\n    height: 500px;\r\n    width: 60%;\r\n    overflow: scroll;\r\n}\r\n\r\n#messages {\r\n    padding-top: 0.3em;\r\n    padding-left: 0.5em;\r\n    list-style-type: none;\r\n    font-size: 40px;\r\n    \r\n}\r\n\r\n/*\r\nSend messages section\r\n*/\r\n\r\n#SendMessages {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#SendMessages>input {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 25px;\r\n}\r\n\r\n#SendMessages>button {\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nPeople online\r\n*/\r\n\r\n#connected {\r\n    margin: 1em auto;\r\n    width: 60%;\r\n    padding-left: 10px\r\n}\r\n\r\n\r\n/* Responsive Design */\r\n\r\n\r\n@media (max-width: 1000px) {\r\n    #heading {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #msgLogger {\r\n        height: 600px;\r\n    }\r\n\r\n    #messages {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #connected {\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    #connected, #sendMessage, #msgLogger {\r\n        width: 80%;\r\n    }\r\n\r\n}"]}]);
// Exports
exports.locals = {
	"heading": "chatroom_heading__3YxxD",
	"msgLogger": "chatroom_msgLogger__XZUFJ",
	"messages": "chatroom_messages__3kFUG",
	"SendMessages": "chatroom_SendMessages__22Gm-",
	"connected": "chatroom_connected__19Saz",
	"sendMessage": "chatroom_sendMessage__3r7VZ"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2hhdHJvb20ubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2Qix3QkFBd0IsMkJBQTJCLDZCQUE2QixLQUFLLDRFQUE0RSx1QkFBdUIsZ0NBQWdDLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixLQUFLLG1DQUFtQywyQkFBMkIsNEJBQTRCLDhCQUE4Qix3QkFBd0IsYUFBYSxnRkFBZ0YsdUJBQXVCLG1CQUFtQixzQkFBc0IsNEJBQTRCLEtBQUssNkNBQTZDLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUssOENBQThDLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUsscUVBQXFFLHlCQUF5QixtQkFBbUIsK0JBQStCLDJFQUEyRSxrQ0FBa0MsNEJBQTRCLFNBQVMsd0NBQXdDLDBCQUEwQixTQUFTLHVDQUF1Qyw0QkFBNEIsU0FBUyx3Q0FBd0MsNkJBQTZCLFNBQVMsS0FBSyxtQ0FBbUMsOEZBQThGLHVCQUF1QixTQUFTLFNBQVMsT0FBTyxnSEFBZ0gsVUFBVSxZQUFZLGFBQWEsUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE9BQU8sY0FBYyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxnRUFBZ0Usd0JBQXdCLDJCQUEyQiw2QkFBNkIsS0FBSyw0REFBNEQsdUJBQXVCLGdDQUFnQyxxQkFBcUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsS0FBSyxtQkFBbUIsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLGFBQWEsZ0VBQWdFLHVCQUF1QixtQkFBbUIsc0JBQXNCLDRCQUE0QixLQUFLLDZCQUE2QixtQkFBbUIscUJBQXFCLHdCQUF3QixLQUFLLDhCQUE4QixtQkFBbUIscUJBQXFCLHdCQUF3QixLQUFLLHFEQUFxRCx5QkFBeUIsbUJBQW1CLCtCQUErQiwyRUFBMkUsa0JBQWtCLDRCQUE0QixTQUFTLHdCQUF3QiwwQkFBMEIsU0FBUyx1QkFBdUIsNEJBQTRCLFNBQVMsd0JBQXdCLDZCQUE2QixTQUFTLEtBQUssbUNBQW1DLDhDQUE4Qyx1QkFBdUIsU0FBUyxTQUFTLEdBQUc7QUFDam5IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGF0XFxbaWRdLmpzLjU4NDU2YjAwYzQ2MDQ0MzI1YzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY2hhdHJvb21faGVhZGluZ19fM1l4eEQge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuRGlzcGxheSBNZXNzYWdlc1xcclxcbiovXFxyXFxuXFxyXFxuI2NoYXRyb29tX21zZ0xvZ2dlcl9fWFpVRkoge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXRyb29tX21lc3NhZ2VzX18za0ZVRyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNlbmQgbWVzc2FnZXMgc2VjdGlvblxcclxcbiovXFxyXFxuXFxyXFxuI2NoYXRyb29tX1NlbmRNZXNzYWdlc19fMjJHbS0ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXRyb29tX1NlbmRNZXNzYWdlc19fMjJHbS0+aW5wdXQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoYXRyb29tX1NlbmRNZXNzYWdlc19fMjJHbS0+YnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUGVvcGxlIG9ubGluZVxcclxcbiovXFxyXFxuXFxyXFxuI2NoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXoge1xcclxcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAgICNjaGF0cm9vbV9oZWFkaW5nX18zWXh4RCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX21zZ0xvZ2dlcl9fWFpVRkoge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2hhdHJvb21fbWVzc2FnZXNfXzNrRlVHIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2hhdHJvb21fY29ubmVjdGVkX18xOVNheiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAjY2hhdHJvb21fY29ubmVjdGVkX18xOVNheiwgI2NoYXRyb29tX3NlbmRNZXNzYWdlX18zcjdWWiwgI2NoYXRyb29tX21zZ0xvZ2dlcl9fWFpVRkoge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9TaGkvRGVza3RvcC9MaXZlIENoYXQvc3R5bGVzL2NoYXRyb29tLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7O0FBR0E7O0NBRUM7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5COztBQUVBOztDQUVDOztBQUVEO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztDQUVDOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVjtBQUNKOzs7QUFHQSxzQkFBc0I7OztBQUd0QjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7QUFFSlwiLFwiZmlsZVwiOlwiY2hhdHJvb20ubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG5EaXNwbGF5IE1lc3NhZ2VzXFxyXFxuKi9cXHJcXG5cXHJcXG4jbXNnTG9nZ2VyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNtZXNzYWdlcyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjNlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNlbmQgbWVzc2FnZXMgc2VjdGlvblxcclxcbiovXFxyXFxuXFxyXFxuI1NlbmRNZXNzYWdlcyB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jU2VuZE1lc3NhZ2VzPmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNTZW5kTWVzc2FnZXM+YnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUGVvcGxlIG9ubGluZVxcclxcbiovXFxyXFxuXFxyXFxuI2Nvbm5lY3RlZCB7XFxyXFxuICAgIG1hcmdpbjogMWVtIGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgI2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtc2dMb2dnZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVzc2FnZXMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNjb25uZWN0ZWQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI2Nvbm5lY3RlZCwgI3NlbmRNZXNzYWdlLCAjbXNnTG9nZ2VyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVhZGluZ1wiOiBcImNoYXRyb29tX2hlYWRpbmdfXzNZeHhEXCIsXG5cdFwibXNnTG9nZ2VyXCI6IFwiY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSlwiLFxuXHRcIm1lc3NhZ2VzXCI6IFwiY2hhdHJvb21fbWVzc2FnZXNfXzNrRlVHXCIsXG5cdFwiU2VuZE1lc3NhZ2VzXCI6IFwiY2hhdHJvb21fU2VuZE1lc3NhZ2VzX18yMkdtLVwiLFxuXHRcImNvbm5lY3RlZFwiOiBcImNoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXpcIixcblx0XCJzZW5kTWVzc2FnZVwiOiBcImNoYXRyb29tX3NlbmRNZXNzYWdlX18zcjdWWlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==