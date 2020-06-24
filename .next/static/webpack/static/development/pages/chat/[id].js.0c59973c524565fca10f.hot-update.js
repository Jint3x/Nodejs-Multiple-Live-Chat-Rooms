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
exports.push([module.i, "#chatroom_heading__3YxxD {\r\n    font-size: 50px;\r\n    text-align: center;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n\r\n/*\r\nDisplay Messages\r\n*/\r\n\r\n#chatroom_msgLogger__XZUFJ {\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    color: white;\r\n    height: 500px;\r\n    width: 60%;\r\n    overflow: scroll;\r\n}\r\n\r\n#chatroom_messages__3kFUG {\r\n    padding-top: 0.3em;\r\n    padding-left: 0.5em;\r\n    list-style-type: none;\r\n    font-size: 40px;\r\n    \r\n}\r\n\r\n/*\r\nSend messages section\r\n*/\r\n\r\n#chatroom_sendMessages__3tNxv {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#chatroom_sendMessages__3tNxv>input {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 25px;\r\n}\r\n\r\n#chatroom_sendMessages__3tNxv>button {\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nPeople online\r\n*/\r\n\r\n#chatroom_connected__19Saz {\r\n    margin: 1em auto;\r\n    width: 60%;\r\n    padding-left: 10px\r\n}\r\n\r\n\r\n/* Responsive Design */\r\n\r\n@media (min-width: 3000px) {\r\n    #chatroom_heading__3YxxD {\r\n        font-size: 80px;\r\n    }\r\n\r\n    #chatroom_msgLogger__XZUFJ {\r\n        height: 1000px;\r\n    }\r\n\r\n\r\n    #chatroom_sendMessages__3tNxv>input {\r\n        height: 90px;\r\n        font-size: 35px;\r\n    }\r\n    \r\n    #chatroom_sendMessages__3tNxv>button {\r\n        height: 90px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #chatroom_connected__19Saz {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #chatroom_messages__3kFUG {\r\n        font-size: 60px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 2000px) {\r\n    #chatroom_heading__3YxxD {\r\n        font-size: 60px;\r\n    }\r\n\r\n    #chatroom_msgLogger__XZUFJ {\r\n        height: 700px;\r\n    }\r\n\r\n\r\n    #chatroom_sendMessages__3tNxv>input {\r\n        height: 70px;\r\n        font-size: 30px;\r\n    }\r\n    \r\n    #chatroom_sendMessages__3tNxv>button {\r\n        height: 70px;\r\n        font-size: 35px;\r\n    }\r\n\r\n    #chatroom_connected__19Saz {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #chatroom_messages__3kFUG {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1000px) {\r\n    #chatroom_heading__3YxxD {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #chatroom_msgLogger__XZUFJ {\r\n        height: 600px;\r\n    }\r\n\r\n    #chatroom_messages__3kFUG {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #chatroom_connected__19Saz {\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    #chatroom_connected__19Saz, #chatroom_sendMessages__3tNxv, #chatroom_msgLogger__XZUFJ {\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    #chatroom_heading__3YxxD {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #chatroom_sendMessages__3tNxv>input {\r\n        width: 70%;\r\n    }\r\n\r\n    #chatroom_sendMessages__3tNxv>button {\r\n        width: 30%;\r\n        font-size: 25px;\r\n    }\r\n\r\n    #chatroom_connected__19Saz {\r\n        padding-top: 15px;\r\n        font-size: 11px;\r\n    }\r\n\r\n    #chatroom_messages__3kFUG {\r\n        font-size: 25px;\r\n    }\r\n}", "",{"version":3,"sources":["C:/Users/Shi/Desktop/Live Chat/styles/chatroom.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;;;AAGA;;CAEC;;AAED;IACI,cAAc;IACd,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;;CAEC;;AAED;IACI,cAAc;IACd,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;AACnB;;AAEA;;CAEC;;AAED;IACI,gBAAgB;IAChB,UAAU;IACV;AACJ;;;AAGA,sBAAsB;;AAEtB;IACI;QACI,eAAe;IACnB;;IAEA;QACI,cAAc;IAClB;;;IAGA;QACI,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;;AAGA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;;IAGA;QACI,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,YAAY;QACZ,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;;AAGA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;QACV,eAAe;IACnB;;IAEA;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ","file":"chatroom.module.css","sourcesContent":["#heading {\r\n    font-size: 50px;\r\n    text-align: center;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n\r\n/*\r\nDisplay Messages\r\n*/\r\n\r\n#msgLogger {\r\n    margin: 0 auto;\r\n    background-color: black;\r\n    color: white;\r\n    height: 500px;\r\n    width: 60%;\r\n    overflow: scroll;\r\n}\r\n\r\n#messages {\r\n    padding-top: 0.3em;\r\n    padding-left: 0.5em;\r\n    list-style-type: none;\r\n    font-size: 40px;\r\n    \r\n}\r\n\r\n/*\r\nSend messages section\r\n*/\r\n\r\n#sendMessages {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#sendMessages>input {\r\n    width: 80%;\r\n    height: 50px;\r\n    font-size: 25px;\r\n}\r\n\r\n#sendMessages>button {\r\n    width: 20%;\r\n    height: 50px;\r\n    font-size: 30px;\r\n}\r\n\r\n/*\r\nPeople online\r\n*/\r\n\r\n#connected {\r\n    margin: 1em auto;\r\n    width: 60%;\r\n    padding-left: 10px\r\n}\r\n\r\n\r\n/* Responsive Design */\r\n\r\n@media (min-width: 3000px) {\r\n    #heading {\r\n        font-size: 80px;\r\n    }\r\n\r\n    #msgLogger {\r\n        height: 1000px;\r\n    }\r\n\r\n\r\n    #sendMessages>input {\r\n        height: 90px;\r\n        font-size: 35px;\r\n    }\r\n    \r\n    #sendMessages>button {\r\n        height: 90px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    #connected {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #messages {\r\n        font-size: 60px;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 2000px) {\r\n    #heading {\r\n        font-size: 60px;\r\n    }\r\n\r\n    #msgLogger {\r\n        height: 700px;\r\n    }\r\n\r\n\r\n    #sendMessages>input {\r\n        height: 70px;\r\n        font-size: 30px;\r\n    }\r\n    \r\n    #sendMessages>button {\r\n        height: 70px;\r\n        font-size: 35px;\r\n    }\r\n\r\n    #connected {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #messages {\r\n        font-size: 50px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 1000px) {\r\n    #heading {\r\n        font-size: 45px;\r\n    }\r\n\r\n    #msgLogger {\r\n        height: 600px;\r\n    }\r\n\r\n    #messages {\r\n        font-size: 35px;\r\n    }\r\n\r\n    #connected {\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media (max-width: 750px) {\r\n    #connected, #sendMessages, #msgLogger {\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    #heading {\r\n        font-size: 30px;\r\n    }\r\n\r\n    #sendMessages>input {\r\n        width: 70%;\r\n    }\r\n\r\n    #sendMessages>button {\r\n        width: 30%;\r\n        font-size: 25px;\r\n    }\r\n\r\n    #connected {\r\n        padding-top: 15px;\r\n        font-size: 11px;\r\n    }\r\n\r\n    #messages {\r\n        font-size: 25px;\r\n    }\r\n}"]}]);
// Exports
exports.locals = {
	"heading": "chatroom_heading__3YxxD",
	"msgLogger": "chatroom_msgLogger__XZUFJ",
	"messages": "chatroom_messages__3kFUG",
	"sendMessages": "chatroom_sendMessages__3tNxv",
	"connected": "chatroom_connected__19Saz"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2hhdHJvb20ubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2Qix3QkFBd0IsMkJBQTJCLDZCQUE2QixLQUFLLDRFQUE0RSx1QkFBdUIsZ0NBQWdDLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixLQUFLLG1DQUFtQywyQkFBMkIsNEJBQTRCLDhCQUE4Qix3QkFBd0IsYUFBYSxnRkFBZ0YsdUJBQXVCLG1CQUFtQixzQkFBc0IsNEJBQTRCLEtBQUssNkNBQTZDLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUssOENBQThDLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUsscUVBQXFFLHlCQUF5QixtQkFBbUIsK0JBQStCLHVFQUF1RSxrQ0FBa0MsNEJBQTRCLFNBQVMsd0NBQXdDLDJCQUEyQixTQUFTLHFEQUFxRCx5QkFBeUIsNEJBQTRCLFNBQVMsc0RBQXNELHlCQUF5Qiw0QkFBNEIsU0FBUyx3Q0FBd0MsNEJBQTRCLFNBQVMsdUNBQXVDLDRCQUE0QixTQUFTLEtBQUssd0NBQXdDLGtDQUFrQyw0QkFBNEIsU0FBUyx3Q0FBd0MsMEJBQTBCLFNBQVMscURBQXFELHlCQUF5Qiw0QkFBNEIsU0FBUyxzREFBc0QseUJBQXlCLDRCQUE0QixTQUFTLHdDQUF3Qyw0QkFBNEIsU0FBUyx1Q0FBdUMsNEJBQTRCLFNBQVMsS0FBSyx3Q0FBd0Msa0NBQWtDLDRCQUE0QixTQUFTLHdDQUF3QywwQkFBMEIsU0FBUyx1Q0FBdUMsNEJBQTRCLFNBQVMsd0NBQXdDLDZCQUE2QixTQUFTLEtBQUssbUNBQW1DLCtGQUErRix1QkFBdUIsU0FBUyxLQUFLLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLFNBQVMsaURBQWlELHVCQUF1QixTQUFTLGtEQUFrRCx1QkFBdUIsNEJBQTRCLFNBQVMsd0NBQXdDLDhCQUE4Qiw0QkFBNEIsU0FBUyx1Q0FBdUMsNEJBQTRCLFNBQVMsS0FBSyxPQUFPLGdIQUFnSCxVQUFVLFlBQVksYUFBYSxRQUFRLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLGdFQUFnRSx3QkFBd0IsMkJBQTJCLDZCQUE2QixLQUFLLDREQUE0RCx1QkFBdUIsZ0NBQWdDLHFCQUFxQixzQkFBc0IsbUJBQW1CLHlCQUF5QixLQUFLLG1CQUFtQiwyQkFBMkIsNEJBQTRCLDhCQUE4Qix3QkFBd0IsYUFBYSxnRUFBZ0UsdUJBQXVCLG1CQUFtQixzQkFBc0IsNEJBQTRCLEtBQUssNkJBQTZCLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUssOEJBQThCLG1CQUFtQixxQkFBcUIsd0JBQXdCLEtBQUsscURBQXFELHlCQUF5QixtQkFBbUIsK0JBQStCLHVFQUF1RSxrQkFBa0IsNEJBQTRCLFNBQVMsd0JBQXdCLDJCQUEyQixTQUFTLHFDQUFxQyx5QkFBeUIsNEJBQTRCLFNBQVMsc0NBQXNDLHlCQUF5Qiw0QkFBNEIsU0FBUyx3QkFBd0IsNEJBQTRCLFNBQVMsdUJBQXVCLDRCQUE0QixTQUFTLEtBQUssd0NBQXdDLGtCQUFrQiw0QkFBNEIsU0FBUyx3QkFBd0IsMEJBQTBCLFNBQVMscUNBQXFDLHlCQUF5Qiw0QkFBNEIsU0FBUyxzQ0FBc0MseUJBQXlCLDRCQUE0QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyx1QkFBdUIsNEJBQTRCLFNBQVMsS0FBSyx3Q0FBd0Msa0JBQWtCLDRCQUE0QixTQUFTLHdCQUF3QiwwQkFBMEIsU0FBUyx1QkFBdUIsNEJBQTRCLFNBQVMsd0JBQXdCLDZCQUE2QixTQUFTLEtBQUssbUNBQW1DLCtDQUErQyx1QkFBdUIsU0FBUyxLQUFLLG1DQUFtQyxrQkFBa0IsNEJBQTRCLFNBQVMsaUNBQWlDLHVCQUF1QixTQUFTLGtDQUFrQyx1QkFBdUIsNEJBQTRCLFNBQVMsd0JBQXdCLDhCQUE4Qiw0QkFBNEIsU0FBUyx1QkFBdUIsNEJBQTRCLFNBQVMsS0FBSyxHQUFHO0FBQy8rTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoYXRcXFtpZF0uanMuMGM1OTk3M2M1MjQ1NjVmY2ExMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNjaGF0cm9vbV9oZWFkaW5nX18zWXh4RCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG5EaXNwbGF5IE1lc3NhZ2VzXFxyXFxuKi9cXHJcXG5cXHJcXG4jY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSiB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdHJvb21fbWVzc2FnZXNfXzNrRlVHIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuM2VtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2VuZCBtZXNzYWdlcyBzZWN0aW9uXFxyXFxuKi9cXHJcXG5cXHJcXG4jY2hhdHJvb21fc2VuZE1lc3NhZ2VzX18zdE54diB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdHJvb21fc2VuZE1lc3NhZ2VzX18zdE54dj5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2hhdHJvb21fc2VuZE1lc3NhZ2VzX18zdE54dj5idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QZW9wbGUgb25saW5lXFxyXFxuKi9cXHJcXG5cXHJcXG4jY2hhdHJvb21fY29ubmVjdGVkX18xOVNheiB7XFxyXFxuICAgIG1hcmdpbjogMWVtIGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDAwcHgpIHtcXHJcXG4gICAgI2NoYXRyb29tX2hlYWRpbmdfXzNZeHhEIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjY2hhdHJvb21fc2VuZE1lc3NhZ2VzX18zdE54dj5pbnB1dCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICNjaGF0cm9vbV9zZW5kTWVzc2FnZXNfXzN0Tnh2PmJ1dHRvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXoge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNjaGF0cm9vbV9tZXNzYWdlc19fM2tGVUcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcXHJcXG4gICAgI2NoYXRyb29tX2hlYWRpbmdfXzNZeHhEIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNjaGF0cm9vbV9zZW5kTWVzc2FnZXNfXzN0Tnh2PmlucHV0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgI2NoYXRyb29tX3NlbmRNZXNzYWdlc19fM3ROeHY+YnV0dG9uIHtcXHJcXG4gICAgICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2hhdHJvb21fY29ubmVjdGVkX18xOVNheiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX21lc3NhZ2VzX18za0ZVRyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcbiAgICAjY2hhdHJvb21faGVhZGluZ19fM1l4eEQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNjaGF0cm9vbV9tc2dMb2dnZXJfX1haVUZKIHtcXHJcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX21lc3NhZ2VzX18za0ZVRyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXoge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI2NoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXosICNjaGF0cm9vbV9zZW5kTWVzc2FnZXNfXzN0Tnh2LCAjY2hhdHJvb21fbXNnTG9nZ2VyX19YWlVGSiB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAjY2hhdHJvb21faGVhZGluZ19fM1l4eEQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNjaGF0cm9vbV9zZW5kTWVzc2FnZXNfXzN0Tnh2PmlucHV0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX3NlbmRNZXNzYWdlc19fM3ROeHY+YnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX2Nvbm5lY3RlZF9fMTlTYXoge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2NoYXRyb29tX21lc3NhZ2VzX18za0ZVRyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvU2hpL0Rlc2t0b3AvTGl2ZSBDaGF0L3N0eWxlcy9jaGF0cm9vbS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7OztBQUdBOztDQUVDOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlOztBQUVuQjs7QUFFQTs7Q0FFQzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7Q0FFQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Y7QUFDSjs7O0FBR0Esc0JBQXNCOztBQUV0QjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7OztBQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7O0lBR0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcImZpbGVcIjpcImNoYXRyb29tLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuRGlzcGxheSBNZXNzYWdlc1xcclxcbiovXFxyXFxuXFxyXFxuI21zZ0xvZ2dlciB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVzc2FnZXMge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5TZW5kIG1lc3NhZ2VzIHNlY3Rpb25cXHJcXG4qL1xcclxcblxcclxcbiNzZW5kTWVzc2FnZXMge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbmRNZXNzYWdlcz5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2VuZE1lc3NhZ2VzPmJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblBlb3BsZSBvbmxpbmVcXHJcXG4qL1xcclxcblxcclxcbiNjb25uZWN0ZWQge1xcclxcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwMHB4KSB7XFxyXFxuICAgICNoZWFkaW5nIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbXNnTG9nZ2VyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNzZW5kTWVzc2FnZXM+aW5wdXQge1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAjc2VuZE1lc3NhZ2VzPmJ1dHRvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDkwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Nvbm5lY3RlZCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21lc3NhZ2VzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwMHB4KSB7XFxyXFxuICAgICNoZWFkaW5nIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbXNnTG9nZ2VyIHtcXHJcXG4gICAgICAgIGhlaWdodDogNzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI3NlbmRNZXNzYWdlcz5pbnB1dCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICNzZW5kTWVzc2FnZXM+YnV0dG9uIHtcXHJcXG4gICAgICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY29ubmVjdGVkIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVzc2FnZXMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gICAgI2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtc2dMb2dnZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVzc2FnZXMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNjb25uZWN0ZWQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI2Nvbm5lY3RlZCwgI3NlbmRNZXNzYWdlcywgI21zZ0xvZ2dlciB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAjaGVhZGluZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3NlbmRNZXNzYWdlcz5pbnB1dCB7XFxyXFxuICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzZW5kTWVzc2FnZXM+YnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Nvbm5lY3RlZCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVzc2FnZXMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImhlYWRpbmdcIjogXCJjaGF0cm9vbV9oZWFkaW5nX18zWXh4RFwiLFxuXHRcIm1zZ0xvZ2dlclwiOiBcImNoYXRyb29tX21zZ0xvZ2dlcl9fWFpVRkpcIixcblx0XCJtZXNzYWdlc1wiOiBcImNoYXRyb29tX21lc3NhZ2VzX18za0ZVR1wiLFxuXHRcInNlbmRNZXNzYWdlc1wiOiBcImNoYXRyb29tX3NlbmRNZXNzYWdlc19fM3ROeHZcIixcblx0XCJjb25uZWN0ZWRcIjogXCJjaGF0cm9vbV9jb25uZWN0ZWRfXzE5U2F6XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9