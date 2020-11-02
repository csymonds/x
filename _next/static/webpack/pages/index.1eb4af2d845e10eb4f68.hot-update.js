webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Programs/Winamp.tsx":
/*!****************************************!*\
  !*** ./components/Programs/Winamp.tsx ***!
  \****************************************/
/*! exports provided: default, loaderOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loaderOptions\", function() { return loaderOptions; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Programs/Winamp.module.scss */ \"./styles/Programs/Winamp.module.scss\");\n/* harmony import */ var _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_winamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/winamp */ \"./utils/winamp.ts\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/events */ \"./utils/events.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/Programs/Winamp.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar defaultDimensions = {\n  height: 232,\n  width: 275\n};\n\nvar getWebamp = function getWebamp() {\n  return document.getElementById('webamp');\n};\n\nvar Winamp = function Winamp(_ref) {\n  _s();\n\n  var onBlur = _ref.onBlur,\n      onClose = _ref.onClose,\n      onMinimize = _ref.onMinimize,\n      onFocus = _ref.onFocus,\n      updatePosition = _ref.updatePosition,\n      x = _ref.x,\n      y = _ref.y,\n      zIndex = _ref.zIndex,\n      minimized = _ref.minimized,\n      _ref$file = _ref.file;\n  _ref$file = _ref$file === void 0 ? {} : _ref$file;\n  var _ref$file$url = _ref$file.url,\n      url = _ref$file$url === void 0 ? '' : _ref$file$url,\n      _ref$file$name = _ref$file.name,\n      name = _ref$file$name === void 0 ? '' : _ref$file$name;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useState\"])(),\n      webamp = _useState[0],\n      setWebamp = _useState[1];\n\n  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useRef\"])(null);\n\n  var loadWebamp = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var _yield$import, WebampConstructor, webampConstructor, _ref3, containerElement;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! webamp */ \"./node_modules/webamp/built/webamp.bundle.js\", 7));\n\n            case 2:\n              _yield$import = _context.sent;\n              WebampConstructor = _yield$import[\"default\"];\n              webampConstructor = new WebampConstructor(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"webampOptions\"]);\n              _ref3 = elementRef, containerElement = _ref3.current;\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"closeEqualizer\"])(webampConstructor);\n              _context.next = 9;\n              return webampConstructor.renderWhenReady(containerElement);\n\n            case 9:\n              Object(_utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"appendElement\"])(containerElement, getWebamp()).focus();\n              onFocus();\n              Object(_utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"loadTrackOrSkin\"])(webampConstructor, url, name);\n              return _context.abrupt(\"return\", webampConstructor);\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loadWebamp() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    var tryDispose = function tryDispose() {\n      try {\n        webamp === null || webamp === void 0 ? void 0 : webamp.dispose();\n      } catch (_exception) {\n        /* eslint no-empty: off */\n      }\n    };\n\n    loadWebamp().then(function (loadedWebamp) {\n      setWebamp(loadedWebamp);\n    });\n    return tryDispose;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    webamp === null || webamp === void 0 ? void 0 : webamp.onClose(onClose);\n    webamp === null || webamp === void 0 ? void 0 : webamp.onMinimize(onMinimize);\n  }, [onClose, onMinimize, x, y]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n    className: _styles_Programs_Winamp_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.winamp,\n    cancel: _utils_winamp__WEBPACK_IMPORTED_MODULE_6__[\"touchControls\"],\n    dragHandleClassName: \"draggable\",\n    enableResizing: false,\n    enableUserSelectHack: false,\n    onBlur: onBlur,\n    onDrag: _utils_events__WEBPACK_IMPORTED_MODULE_7__[\"onTouchEventsOnly\"],\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_5__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onFocus: onFocus,\n    style: {\n      zIndex: zIndex,\n      visibility: minimized ? 'hidden' : 'visible'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"article\", {\n      ref: elementRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Winamp, \"MHRw76UTXYBqeRZ1eNXx9PZ9gkI=\");\n\n_c = Winamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Winamp);\nvar loaderOptions = _objectSpread({\n  windowed: false\n}, defaultDimensions);\n\nvar _c;\n\n$RefreshReg$(_c, \"Winamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4Pzk4NmUiXSwibmFtZXMiOlsiZGVmYXVsdERpbWVuc2lvbnMiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFdlYmFtcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJXaW5hbXAiLCJvbkJsdXIiLCJvbkNsb3NlIiwib25NaW5pbWl6ZSIsIm9uRm9jdXMiLCJ1cGRhdGVQb3NpdGlvbiIsIngiLCJ5IiwiekluZGV4IiwibWluaW1pemVkIiwiZmlsZSIsInVybCIsIm5hbWUiLCJ1c2VTdGF0ZSIsIndlYmFtcCIsInNldFdlYmFtcCIsImVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJsb2FkV2ViYW1wIiwiV2ViYW1wQ29uc3RydWN0b3IiLCJ3ZWJhbXBDb25zdHJ1Y3RvciIsIndlYmFtcE9wdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiY3VycmVudCIsImNsb3NlRXF1YWxpemVyIiwicmVuZGVyV2hlblJlYWR5IiwiYXBwZW5kRWxlbWVudCIsImZvY3VzIiwibG9hZFRyYWNrT3JTa2luIiwidXNlRWZmZWN0IiwidHJ5RGlzcG9zZSIsImRpc3Bvc2UiLCJfZXhjZXB0aW9uIiwidGhlbiIsImxvYWRlZFdlYmFtcCIsInN0eWxlcyIsIndpbmFtcCIsInRvdWNoQ29udHJvbHMiLCJvblRvdWNoRXZlbnRzT25seSIsImZvY3VzT25EcmFnIiwidmlzaWJpbGl0eSIsImxvYWRlck9wdGlvbnMiLCJ3aW5kb3dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsUUFBTSxFQUFFLEdBRGdCO0FBRXhCQyxPQUFLLEVBQUU7QUFGaUIsQ0FBMUI7O0FBS0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FB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QUFFQywyREFSZjtBQVNFLGNBQVUsRUFBRWxDLGNBVGQ7QUFVRSxXQUFPLEVBQUVELE9BVlg7QUFXRSxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFOQSxNQUFGO0FBQVVnQyxnQkFBVSxFQUFFL0IsU0FBUyxHQUFHLFFBQUgsR0FBYztBQUE3QyxLQVhUO0FBQUEsMkJBYUU7QUFBUyxTQUFHLEVBQUVPO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXBFRDs7R0FBTWhCLE07O0tBQUFBLE07QUFzRVNBLHFFQUFmO0FBRU8sSUFBTXlDLGFBQWE7QUFDeEJDLFVBQVEsRUFBRTtBQURjLEdBRXJCaEQsaUJBRnFCLENBQW5CIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9ncmFtcy9XaW5hbXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Qcm9ncmFtcy9XaW5hbXAubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSBXZWJhbXAgZnJvbSAnd2ViYW1wJztcbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5pbXBvcnQgdHlwZSB7IFdlYmFtcFN0b3JlIH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1Byb2dyYW1zL3dpbmFtcCc7XG5cbmltcG9ydCB7IGFwcGVuZEVsZW1lbnQsIGZvY3VzT25EcmFnIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBjbG9zZUVxdWFsaXplcixcbiAgbG9hZFRyYWNrT3JTa2luLFxuICB0b3VjaENvbnRyb2xzLFxuICB3ZWJhbXBPcHRpb25zXG59IGZyb20gJ0AvdXRpbHMvd2luYW1wJztcbmltcG9ydCB7IG9uVG91Y2hFdmVudHNPbmx5IH0gZnJvbSAnQC91dGlscy9ldmVudHMnO1xuaW1wb3J0IHsgUm5kIH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdERpbWVuc2lvbnMgPSB7XG4gIGhlaWdodDogMjMyLFxuICB3aWR0aDogMjc1XG59O1xuXG5jb25zdCBnZXRXZWJhbXAgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViYW1wJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbmNvbnN0IFdpbmFtcDogUmVhY3QuRkM8QXBwQ29tcG9uZW50PiA9ICh7XG4gIG9uQmx1cixcbiAgb25DbG9zZSxcbiAgb25NaW5pbWl6ZSxcbiAgb25Gb2N1cyxcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHgsXG4gIHksXG4gIHpJbmRleCxcbiAgbWluaW1pemVkLFxuICBmaWxlOiB7IHVybCA9ICcnLCBuYW1lID0gJycgfSA9IHt9XG59KSA9PiB7XG4gIGNvbnN0IFt3ZWJhbXAsIHNldFdlYmFtcF0gPSB1c2VTdGF0ZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4oKTtcbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGxvYWRXZWJhbXAgPSBhc3luYyAoKTogUHJvbWlzZTxXZWJhbXAgJiBXZWJhbXBTdG9yZT4gPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogV2ViYW1wQ29uc3RydWN0b3IgfSA9IGF3YWl0IGltcG9ydCgnd2ViYW1wJyk7XG4gICAgY29uc3Qgd2ViYW1wQ29uc3RydWN0b3IgPSBuZXcgV2ViYW1wQ29uc3RydWN0b3Iod2ViYW1wT3B0aW9ucykgYXMgV2ViYW1wICYgV2ViYW1wU3RvcmU7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJFbGVtZW50IH0gPSBlbGVtZW50UmVmIGFzIHtcbiAgICAgIGN1cnJlbnQ6IEhUTUxFbGVtZW50O1xuICAgIH07XG5cbiAgICBjbG9zZUVxdWFsaXplcih3ZWJhbXBDb25zdHJ1Y3Rvcik7XG4gICAgYXdhaXQgd2ViYW1wQ29uc3RydWN0b3IucmVuZGVyV2hlblJlYWR5KGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGFwcGVuZEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCwgZ2V0V2ViYW1wKCkpLmZvY3VzKCk7XG4gICAgb25Gb2N1cygpO1xuICAgIGxvYWRUcmFja09yU2tpbih3ZWJhbXBDb25zdHJ1Y3RvciwgdXJsLCBuYW1lKTtcblxuICAgIHJldHVybiB3ZWJhbXBDb25zdHJ1Y3RvcjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyeURpc3Bvc2UgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3ZWJhbXA/LmRpc3Bvc2UoKTtcbiAgICAgIH0gY2F0Y2ggKF9leGNlcHRpb24pIHtcbiAgICAgICAgLyogZXNsaW50IG5vLWVtcHR5OiBvZmYgKi9cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZFdlYmFtcCgpLnRoZW4oKGxvYWRlZFdlYmFtcCkgPT4ge1xuICAgICAgc2V0V2ViYW1wKGxvYWRlZFdlYmFtcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ5RGlzcG9zZTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2ViYW1wPy5vbkNsb3NlKG9uQ2xvc2UpO1xuICAgIHdlYmFtcD8ub25NaW5pbWl6ZShvbk1pbmltaXplKTtcbiAgfSwgW29uQ2xvc2UsIG9uTWluaW1pemUsIHgsIHldKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndpbmFtcH1cbiAgICAgIGNhbmNlbD17dG91Y2hDb250cm9sc31cbiAgICAgIGRyYWdIYW5kbGVDbGFzc05hbWU9XCJkcmFnZ2FibGVcIlxuICAgICAgZW5hYmxlUmVzaXppbmc9e2ZhbHNlfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICBvbkRyYWc9e29uVG91Y2hFdmVudHNPbmx5fVxuICAgICAgb25EcmFnU3RhcnQ9e2ZvY3VzT25EcmFnfVxuICAgICAgb25EcmFnU3RvcD17dXBkYXRlUG9zaXRpb259XG4gICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgc3R5bGU9e3sgekluZGV4LCB2aXNpYmlsaXR5OiBtaW5pbWl6ZWQgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIHJlZj17ZWxlbWVudFJlZn0gLz5cbiAgICA8L1JuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmFtcDtcblxuZXhwb3J0IGNvbnN0IGxvYWRlck9wdGlvbnMgPSB7XG4gIHdpbmRvd2VkOiBmYWxzZSxcbiAgLi4uZGVmYXVsdERpbWVuc2lvbnNcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Programs/Winamp.tsx\n");

/***/ })

})