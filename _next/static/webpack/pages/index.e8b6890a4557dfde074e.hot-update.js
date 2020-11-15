webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/Taskbar/StartMenu.tsx":
/*!*************************************************!*\
  !*** ./components/System/Taskbar/StartMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/Taskbar/StartMenu.module.scss */ \"./styles/System/Taskbar/StartMenu.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/Taskbar/ButtonBar */ \"./components/System/Taskbar/ButtonBar.tsx\");\n/* harmony import */ var _components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/FileManager/FileManager */ \"./components/System/FileManager/FileManager.tsx\");\n/* harmony import */ var _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/System/FileManager/MenuView */ \"./components/System/FileManager/MenuView.tsx\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/StartMenu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar StartMenu = function StartMenu(_ref) {\n  _s();\n\n  var footerRef = _ref.footerRef;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(false),\n      showMenu = _useState[0],\n      setShowMenu = _useState[1];\n\n  var startButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n  var buttonsRef = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useState\"])(false),\n      mounted = _useState2[0],\n      setMounted = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useEffect\"])(function () {\n    return setMounted(true);\n  }, [footerRef]);\n  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_5__[\"createPortal\"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n    children: [showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menu,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_Taskbar_ButtonBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        startButtonRef: startButtonRef,\n        buttonsRef: buttonsRef,\n        setShowMenu: setShowMenu,\n        footerRef: footerRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 15\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_System_FileManager_FileManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        path: \"/start\",\n        render: _components_System_FileManager_MenuView__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        onChange: function onChange(cwd) {\n          return !cwd && setShowMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      ref: startButtonRef,\n      className: \"\".concat(_styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.start, \" \").concat(showMenu && _styles_System_Taskbar_StartMenu_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.menuOpen),\n      type: \"button\",\n      title: \"Start\",\n      onClick: function onClick() {\n        return setShowMenu(!showMenu);\n      },\n      onBlur: function onBlur(_ref2) {\n        var _buttonsRef$current;\n\n        var relatedTarget = _ref2.relatedTarget;\n\n        if (!relatedTarget) {\n          var _startButtonRef$curre;\n\n          startButtonRef === null || startButtonRef === void 0 ? void 0 : (_startButtonRef$curre = startButtonRef.current) === null || _startButtonRef$curre === void 0 ? void 0 : _startButtonRef$curre.focus();\n        } else if (!((_buttonsRef$current = buttonsRef.current) === null || _buttonsRef$current === void 0 ? void 0 : _buttonsRef$current.contains(relatedTarget))) {\n          setShowMenu(false);\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faWindows\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this), footerRef.current) : null;\n};\n\n_s(StartMenu, \"FheKokWGWHOZIn57x6Go4fSEsDQ=\");\n\n_c = StartMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartMenu);\n\nvar _c;\n\n$RefreshReg$(_c, \"StartMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4PzQ0MDAiXSwibmFtZXMiOlsiU3RhcnRNZW51IiwiZm9vdGVyUmVmIiwidXNlU3RhdGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic3RhcnRCdXR0b25SZWYiLCJ1c2VSZWYiLCJidXR0b25zUmVmIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiLCJjcmVhdGVQb3J0YWwiLCJzdHlsZXMiLCJtZW51IiwiTWVudVZpZXciLCJjd2QiLCJzdGFydCIsIm1lbnVPcGVuIiwicmVsYXRlZFRhcmdldCIsImN1cnJlbnQiLCJmb2N1cyIsImNvbnRhaW5zIiwiZmFXaW5kb3dzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FFSixHQUFHLFNBRkNBLFNBRUQsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFDTEMsV0FESzs7QUFFdEIsTUFBTUMsY0FBYyxHQUFHQyxvREFBTSxDQUFvQixJQUFwQixDQUE3QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Qsb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBekI7O0FBSHNCLG1CQUlRSixzREFBUSxDQUFDLEtBQUQsQ0FKaEI7QUFBQSxNQUlmTSxPQUplO0FBQUEsTUFJTkMsVUFKTTs7QUFNdEJDLHlEQUFTLENBQUM7QUFBQSxXQUFNRCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEdBQUQsRUFBeUIsQ0FBQ1IsU0FBRCxDQUF6QixDQUFUO0FBRUEsU0FBT08sT0FBTyxnQkFDVkcsOERBQVksZUFDVjtBQUFBLGVBQ0dSLFFBQVEsaUJBQ1A7QUFBSyxlQUFTLEVBQUVTLG1GQUFNLENBQUNDLElBQXZCO0FBQUEsOEJBQ0UscUVBQUMsNEVBQUQ7QUFDRSxzQkFBYyxFQUFFUixjQURsQjtBQUVFLGtCQUFVLEVBQUVFLFVBRmQ7QUFHRSxtQkFBVyxFQUFFSCxXQUhmO0FBSUUsaUJBQVMsRUFBRUg7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSxxRUFBQyxrRkFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsY0FBTSxFQUFFYSwrRUFGVjtBQUdFLGdCQUFRLEVBQUUsa0JBQUNDLEdBQUQ7QUFBQSxpQkFBUyxDQUFDQSxHQUFELElBQVFYLFdBQVcsQ0FBQyxLQUFELENBQTVCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFnQkU7QUFDRSxTQUFHLEVBQUVDLGNBRFA7QUFFRSxlQUFTLFlBQUtPLG1GQUFNLENBQUNJLEtBQVosY0FBcUJiLFFBQVEsSUFBSVMsbUZBQU0sQ0FBQ0ssUUFBeEMsQ0FGWDtBQUdFLFVBQUksRUFBQyxRQUhQO0FBSUUsV0FBSyxFQUFDLE9BSlI7QUFLRSxhQUFPLEVBQUU7QUFBQSxlQUFNYixXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLE9BTFg7QUFNRSxZQUFNLEVBQUUsdUJBQXVCO0FBQUE7O0FBQUEsWUFBcEJlLGFBQW9CLFNBQXBCQSxhQUFvQjs7QUFDN0IsWUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQUE7O0FBQ2xCYix3QkFBYyxTQUFkLElBQUFBLGNBQWMsV0FBZCxxQ0FBQUEsY0FBYyxDQUFFYyxPQUFoQixnRkFBeUJDLEtBQXpCO0FBQ0QsU0FGRCxNQUVPLElBQUkseUJBQUNiLFVBQVUsQ0FBQ1ksT0FBWix3REFBQyxvQkFBb0JFLFFBQXBCLENBQTZCSCxhQUE3QixDQUFELENBQUosRUFBMEQ7QUFDL0RkLHFCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixPQVpIO0FBQUEsNkJBY0UscUVBQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFa0IsNEVBQVNBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURVLEVBa0NWckIsU0FBUyxDQUFDa0IsT0FsQ0EsQ0FERixHQXFDVixJQXJDSjtBQXNDRCxDQWhERDs7R0FBTW5CLFM7O0tBQUFBLFM7QUFrRFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgQnV0dG9uQmFyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9CdXR0b25CYXInO1xuaW1wb3J0IEZpbGVNYW5hZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRmlsZU1hbmFnZXInO1xuaW1wb3J0IE1lbnVWaWV3IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTWVudVZpZXcnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGZhV2luZG93cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhcnRNZW51OiBSZWFjdC5GQzx7XG4gIGZvb3RlclJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRWxlbWVudCB8IG51bGw+O1xufT4gPSAoeyBmb290ZXJSZWYgfSkgPT4ge1xuICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RhcnRCdXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBidXR0b25zUmVmID0gdXNlUmVmPEhUTUxPTGlzdEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtmb290ZXJSZWZdKTtcblxuICByZXR1cm4gbW91bnRlZFxuICAgID8gY3JlYXRlUG9ydGFsKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgIHtzaG93TWVudSAmJiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgICA8QnV0dG9uQmFyXG4gICAgICAgICAgICAgICAgc3RhcnRCdXR0b25SZWY9e3N0YXJ0QnV0dG9uUmVmfVxuICAgICAgICAgICAgICAgIGJ1dHRvbnNSZWY9e2J1dHRvbnNSZWZ9XG4gICAgICAgICAgICAgICAgc2V0U2hvd01lbnU9e3NldFNob3dNZW51fVxuICAgICAgICAgICAgICAgIGZvb3RlclJlZj17Zm9vdGVyUmVmfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RmlsZU1hbmFnZXJcbiAgICAgICAgICAgICAgICBwYXRoPVwiL3N0YXJ0XCJcbiAgICAgICAgICAgICAgICByZW5kZXI9e01lbnVWaWV3fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY3dkKSA9PiAhY3dkICYmIHNldFNob3dNZW51KGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgcmVmPXtzdGFydEJ1dHRvblJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN0YXJ0fSAke3Nob3dNZW51ICYmIHN0eWxlcy5tZW51T3Blbn1gfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT1cIlN0YXJ0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZW51KCFzaG93TWVudSl9XG4gICAgICAgICAgICBvbkJsdXI9eyh7IHJlbGF0ZWRUYXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBzdGFydEJ1dHRvblJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghYnV0dG9uc1JlZi5jdXJyZW50Py5jb250YWlucyhyZWxhdGVkVGFyZ2V0IGFzIE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFXaW5kb3dzfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25hdj4sXG4gICAgICAgIGZvb3RlclJlZi5jdXJyZW50IGFzIEhUTUxFbGVtZW50XG4gICAgICApXG4gICAgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRNZW51O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/System/Taskbar/StartMenu.tsx\n");

/***/ })

})