webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/processmanager.ts":
/*!*********************************!*\
  !*** ./utils/processmanager.ts ***!
  \*********************************/
/*! exports provided: processReducer, close, maximize, minimize, open, load, position, restore, size, taskbarElement, title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"processReducer\", function() { return processReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close\", function() { return close; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maximize\", function() { return maximize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minimize\", function() { return minimize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open\", function() { return open; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restore\", function() { return restore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"size\", function() { return size; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarElement\", function() { return taskbarElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _utils_programs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/programs */ \"./utils/programs.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"./node_modules/node-libs-browser/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/file */ \"./utils/file.ts\");\n/* harmony import */ var _utils_process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/process */ \"./utils/process.ts\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar addProcess = function addProcess(process, processes) {\n  var previousState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(processes), [_objectSpread(_objectSpread({}, process), previousState)]);\n};\n\nvar removeProcess = function removeProcess(id, processes) {\n  return processes.filter(function (process) {\n    return process.id !== id;\n  });\n};\n\nvar updateProcess = function updateProcess(id, updates, processes) {\n  return processes.map(function (process) {\n    return process.id === id ? _objectSpread(_objectSpread({}, process), updates) : process;\n  });\n};\n\nvar processReducer = function processReducer(processes, _ref) {\n  var id = _ref.id,\n      process = _ref.process,\n      updates = _ref.updates,\n      previousState = _ref.previousState;\n  if (id && updates) return updateProcess(id, updates, processes);\n  if (process) return addProcess(process, processes, previousState);\n  if (id) return removeProcess(id, processes);\n  return processes;\n};\nvar close = function close(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      id: id\n    });\n  };\n};\nvar maximize = function maximize(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      updates: {\n        maximized: true\n      },\n      id: id\n    });\n  };\n};\nvar minimize = function minimize(updateProcesses) {\n  return function (id) {\n    return updateProcesses({\n      updates: {\n        minimized: true\n      },\n      id: id\n    });\n  };\n};\nvar open = function open(processes, updateProcesses) {\n  return function (appFile, previousState, launchElement) {\n    var icon = appFile.icon,\n        name = appFile.name;\n    var existingProcessId = Object(_utils_process__WEBPACK_IMPORTED_MODULE_5__[\"getProcessId\"])(name);\n    if (processes.find(function (_ref2) {\n      var processId = _ref2.id;\n      return processId === existingProcessId;\n    })) return existingProcessId;\n    var loader = Object(_utils_programs__WEBPACK_IMPORTED_MODULE_2__[\"appLoader\"])(appFile);\n\n    if (loader) {\n      var process = new _utils_process__WEBPACK_IMPORTED_MODULE_5__[\"Process\"](_objectSpread({\n        loader: loader,\n        icon: icon,\n        name: name,\n        launchElement: launchElement\n      }, loader.loaderOptions));\n      updateProcesses({\n        process: process,\n        previousState: previousState\n      });\n      return process.id;\n    }\n\n    return '';\n  };\n};\nvar load = function load(processes, updateProcesses) {\n  return function (file, previousState, launchElement) {\n    var fileReader = new FileReader();\n    fileReader.addEventListener('loadend', function () {\n      var url = URL.createObjectURL(new Blob([new Uint8Array(fileReader.result)]));\n      var ext = Object(path__WEBPACK_IMPORTED_MODULE_3__[\"extname\"])(file.name).toLowerCase();\n      open(processes, updateProcesses)({\n        icon: Object(_utils_file__WEBPACK_IMPORTED_MODULE_4__[\"getFileIcon\"])('', ext),\n        name: Object(path__WEBPACK_IMPORTED_MODULE_3__[\"basename\"])(file.name, ext),\n        ext: ext,\n        url: url\n      }, previousState, launchElement);\n    });\n    fileReader.readAsArrayBuffer(file);\n  };\n};\nvar position = function position(updateProcesses) {\n  return function (id) {\n    return function (_event, _ref3) {\n      var x = _ref3.x,\n          y = _ref3.y;\n      return updateProcesses({\n        id: id,\n        updates: {\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar restore = function restore(updateProcesses) {\n  return function (id, key) {\n    return updateProcesses({\n      updates: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, false),\n      id: id\n    });\n  };\n};\nvar size = function size(updateProcesses) {\n  return function (id) {\n    return function (_event, _direction, _ref4, _delta, _ref5) {\n      var width = _ref4.offsetWidth,\n          height = _ref4.offsetHeight;\n      var x = _ref5.x,\n          y = _ref5.y;\n      return updateProcesses({\n        id: id,\n        updates: {\n          height: height,\n          width: width,\n          x: x,\n          y: y\n        }\n      });\n    };\n  };\n};\nvar taskbarElement = function taskbarElement(updateProcesses) {\n  return function (id, element) {\n    updateProcesses({\n      updates: {\n        taskbarElement: element\n      },\n      id: id\n    });\n  };\n};\nvar title = function title(updateProcesses) {\n  return function (id) {\n    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n    return updateProcesses({\n      updates: {\n        name: name\n      },\n      id: id\n    });\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcHJvY2Vzc21hbmFnZXIudHM/ZDgzNSJdLCJuYW1lcyI6WyJhZGRQcm9jZXNzIiwicHJvY2VzcyIsInByb2Nlc3NlcyIsInByZXZpb3VzU3RhdGUiLCJyZW1vdmVQcm9jZXNzIiwiaWQiLCJmaWx0ZXIiLCJ1cGRhdGVQcm9jZXNzIiwidXBkYXRlcyIsIm1hcCIsInByb2Nlc3NSZWR1Y2VyIiwiY2xvc2UiLCJ1cGRhdGVQcm9jZXNzZXMiLCJtYXhpbWl6ZSIsIm1heGltaXplZCIsIm1pbmltaXplIiwibWluaW1pemVkIiwib3BlbiIsImFwcEZpbGUiLCJsYXVuY2hFbGVtZW50IiwiaWNvbiIsIm5hbWUiLCJleGlzdGluZ1Byb2Nlc3NJZCIsImdldFByb2Nlc3NJZCIsImZpbmQiLCJwcm9jZXNzSWQiLCJsb2FkZXIiLCJhcHBMb2FkZXIiLCJQcm9jZXNzIiwibG9hZGVyT3B0aW9ucyIsImxvYWQiLCJmaWxlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJyZXN1bHQiLCJleHQiLCJleHRuYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRGaWxlSWNvbiIsImJhc2VuYW1lIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJwb3NpdGlvbiIsIl9ldmVudCIsIngiLCJ5IiwicmVzdG9yZSIsImtleSIsInNpemUiLCJfZGlyZWN0aW9uIiwiX2RlbHRhIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwiZWxlbWVudCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQ2pCQyxPQURpQixFQUVqQkMsU0FGaUI7QUFBQSxNQUdqQkMsYUFIaUIsdUVBR2EsRUFIYjtBQUFBLGdIQUlDRCxTQUpELG9DQUlpQkQsT0FKakIsR0FJNkJFLGFBSjdCO0FBQUEsQ0FBbkI7O0FBTUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxFQUFELEVBQWFILFNBQWI7QUFBQSxTQUNwQkEsU0FBUyxDQUFDSSxNQUFWLENBQWlCLFVBQUNMLE9BQUQ7QUFBQSxXQUFhQSxPQUFPLENBQUNJLEVBQVIsS0FBZUEsRUFBNUI7QUFBQSxHQUFqQixDQURvQjtBQUFBLENBQXRCOztBQUdBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJGLEVBRG9CLEVBRXBCRyxPQUZvQixFQUdwQk4sU0FIb0I7QUFBQSxTQUtwQkEsU0FBUyxDQUFDTyxHQUFWLENBQWMsVUFBQ1IsT0FBRDtBQUFBLFdBQ1pBLE9BQU8sQ0FBQ0ksRUFBUixLQUFlQSxFQUFmLG1DQUF5QkosT0FBekIsR0FBcUNPLE9BQXJDLElBQWlEUCxPQURyQztBQUFBLEdBQWQsQ0FMb0I7QUFBQSxDQUF0Qjs7QUFTTyxJQUFNUyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQzVCUixTQUQ0QixRQUdkO0FBQUEsTUFEWkcsRUFDWSxRQURaQSxFQUNZO0FBQUEsTUFEUkosT0FDUSxRQURSQSxPQUNRO0FBQUEsTUFEQ08sT0FDRCxRQURDQSxPQUNEO0FBQUEsTUFEVUwsYUFDVixRQURVQSxhQUNWO0FBQ2QsTUFBSUUsRUFBRSxJQUFJRyxPQUFWLEVBQW1CLE9BQU9ELGFBQWEsQ0FBQ0YsRUFBRCxFQUFLRyxPQUFMLEVBQWNOLFNBQWQsQ0FBcEI7QUFDbkIsTUFBSUQsT0FBSixFQUFhLE9BQU9ELFVBQVUsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXFCQyxhQUFyQixDQUFqQjtBQUNiLE1BQUlFLEVBQUosRUFBUSxPQUFPRCxhQUFhLENBQUNDLEVBQUQsRUFBS0gsU0FBTCxDQUFwQjtBQUNSLFNBQU9BLFNBQVA7QUFDRCxDQVJNO0FBVUEsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsZUFBRDtBQUFBLFNBQThDLFVBQ2pFUCxFQURpRTtBQUFBLFdBRXhETyxlQUFlLENBQUM7QUFBRVAsUUFBRSxFQUFGQTtBQUFGLEtBQUQsQ0FGeUM7QUFBQSxHQUE5QztBQUFBLENBQWQ7QUFJQSxJQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRCxlQUFEO0FBQUEsU0FBOEMsVUFDcEVQLEVBRG9FO0FBQUEsV0FFM0RPLGVBQWUsQ0FBQztBQUFFSixhQUFPLEVBQUU7QUFBRU0saUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBZ0NULFFBQUUsRUFBRkE7QUFBaEMsS0FBRCxDQUY0QztBQUFBLEdBQTlDO0FBQUEsQ0FBakI7QUFJQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxlQUFEO0FBQUEsU0FBOEMsVUFDcEVQLEVBRG9FO0FBQUEsV0FFM0RPLGVBQWUsQ0FBQztBQUFFSixhQUFPLEVBQUU7QUFBRVEsaUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBZ0NYLFFBQUUsRUFBRkE7QUFBaEMsS0FBRCxDQUY0QztBQUFBLEdBQTlDO0FBQUEsQ0FBakI7QUFJQSxJQUFNWSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUNsQmYsU0FEa0IsRUFFbEJVLGVBRmtCO0FBQUEsU0FHZixVQUNITSxPQURHLEVBRUhmLGFBRkcsRUFHSGdCLGFBSEcsRUFJUTtBQUFBLFFBQ0hDLElBREcsR0FDWUYsT0FEWixDQUNIRSxJQURHO0FBQUEsUUFDR0MsSUFESCxHQUNZSCxPQURaLENBQ0dHLElBREg7QUFFWCxRQUFNQyxpQkFBaUIsR0FBR0MsbUVBQVksQ0FBQ0YsSUFBRCxDQUF0QztBQUVBLFFBQUluQixTQUFTLENBQUNzQixJQUFWLENBQWU7QUFBQSxVQUFPQyxTQUFQLFNBQUdwQixFQUFIO0FBQUEsYUFBdUJvQixTQUFTLEtBQUtILGlCQUFyQztBQUFBLEtBQWYsQ0FBSixFQUNFLE9BQU9BLGlCQUFQO0FBRUYsUUFBTUksTUFBTSxHQUFHQyxpRUFBUyxDQUFDVCxPQUFELENBQXhCOztBQUVBLFFBQUlRLE1BQUosRUFBWTtBQUNWLFVBQU16QixPQUFPLEdBQUcsSUFBSTJCLHNEQUFKO0FBQ2RGLGNBQU0sRUFBTkEsTUFEYztBQUVkTixZQUFJLEVBQUpBLElBRmM7QUFHZEMsWUFBSSxFQUFKQSxJQUhjO0FBSWRGLHFCQUFhLEVBQWJBO0FBSmMsU0FLWE8sTUFBTSxDQUFDRyxhQUxJLEVBQWhCO0FBUUFqQixxQkFBZSxDQUFDO0FBQUVYLGVBQU8sRUFBUEEsT0FBRjtBQUFXRSxxQkFBYSxFQUFiQTtBQUFYLE9BQUQsQ0FBZjtBQUVBLGFBQU9GLE9BQU8sQ0FBQ0ksRUFBZjtBQUNEOztBQUVELFdBQU8sRUFBUDtBQUNELEdBL0JtQjtBQUFBLENBQWI7QUFpQ0EsSUFBTXlCLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQ2xCNUIsU0FEa0IsRUFFbEJVLGVBRmtCO0FBQUEsU0FHZixVQUNIbUIsSUFERyxFQUVINUIsYUFGRyxFQUdIZ0IsYUFIRyxFQUlNO0FBQ1QsUUFBTWEsVUFBVSxHQUFHLElBQUlDLFVBQUosRUFBbkI7QUFFQUQsY0FBVSxDQUFDRSxnQkFBWCxDQUE0QixTQUE1QixFQUF1QyxZQUFNO0FBQzNDLFVBQU1DLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQ1YsSUFBSUMsSUFBSixDQUFTLENBQUMsSUFBSUMsVUFBSixDQUFlUCxVQUFVLENBQUNRLE1BQTFCLENBQUQsQ0FBVCxDQURVLENBQVo7QUFHQSxVQUFNQyxHQUFHLEdBQUdDLG9EQUFPLENBQUNYLElBQUksQ0FBQ1YsSUFBTixDQUFQLENBQW1Cc0IsV0FBbkIsRUFBWjtBQUVBMUIsVUFBSSxDQUFDZixTQUFELEVBQVlVLGVBQVosQ0FBSixDQUNFO0FBQ0VRLFlBQUksRUFBRXdCLCtEQUFXLENBQUMsRUFBRCxFQUFLSCxHQUFMLENBRG5CO0FBRUVwQixZQUFJLEVBQUV3QixxREFBUSxDQUFDZCxJQUFJLENBQUNWLElBQU4sRUFBWW9CLEdBQVosQ0FGaEI7QUFHRUEsV0FBRyxFQUFIQSxHQUhGO0FBSUVOLFdBQUcsRUFBSEE7QUFKRixPQURGLEVBT0VoQyxhQVBGLEVBUUVnQixhQVJGO0FBVUQsS0FoQkQ7QUFrQkFhLGNBQVUsQ0FBQ2MsaUJBQVgsQ0FBNkJmLElBQTdCO0FBQ0QsR0E3Qm1CO0FBQUEsQ0FBYjtBQStCQSxJQUFNZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ25DLGVBQUQ7QUFBQSxTQUE4QyxVQUNwRVAsRUFEb0U7QUFBQSxXQUVoRCxVQUFDMkMsTUFBRDtBQUFBLFVBQVdDLENBQVgsU0FBV0EsQ0FBWDtBQUFBLFVBQWNDLENBQWQsU0FBY0EsQ0FBZDtBQUFBLGFBQ3BCdEMsZUFBZSxDQUFDO0FBQUVQLFVBQUUsRUFBRkEsRUFBRjtBQUFNRyxlQUFPLEVBQUU7QUFBRXlDLFdBQUMsRUFBREEsQ0FBRjtBQUFLQyxXQUFDLEVBQURBO0FBQUw7QUFBZixPQUFELENBREs7QUFBQSxLQUZnRDtBQUFBLEdBQTlDO0FBQUEsQ0FBakI7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDdkMsZUFBRDtBQUFBLFNBQThDLFVBQ25FUCxFQURtRSxFQUVuRStDLEdBRm1FO0FBQUEsV0FJbkV4QyxlQUFlLENBQUM7QUFDZEosYUFBTyxFQUFFLDhGQUFHNEMsR0FBTCxFQUFXLEtBQVgsQ0FETztBQUVkL0MsUUFBRSxFQUFGQTtBQUZjLEtBQUQsQ0FKb0Q7QUFBQSxHQUE5QztBQUFBLENBQWhCO0FBU0EsSUFBTWdELElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUN6QyxlQUFEO0FBQUEsU0FBOEMsVUFDaEVQLEVBRGdFO0FBQUEsV0FFMUMsVUFDdEIyQyxNQURzQixFQUV0Qk0sVUFGc0IsU0FJdEJDLE1BSnNCO0FBQUEsVUFHUEMsS0FITyxTQUdwQkMsV0FIb0I7QUFBQSxVQUdjQyxNQUhkLFNBR0FDLFlBSEE7QUFBQSxVQUtwQlYsQ0FMb0IsU0FLcEJBLENBTG9CO0FBQUEsVUFLakJDLENBTGlCLFNBS2pCQSxDQUxpQjtBQUFBLGFBTWJ0QyxlQUFlLENBQUM7QUFBRVAsVUFBRSxFQUFGQSxFQUFGO0FBQU1HLGVBQU8sRUFBRTtBQUFFa0QsZ0JBQU0sRUFBTkEsTUFBRjtBQUFVRixlQUFLLEVBQUxBLEtBQVY7QUFBaUJQLFdBQUMsRUFBREEsQ0FBakI7QUFBb0JDLFdBQUMsRUFBREE7QUFBcEI7QUFBZixPQUFELENBTkY7QUFBQSxLQUYwQztBQUFBLEdBQTlDO0FBQUEsQ0FBYjtBQVVBLElBQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2hELGVBQUQ7QUFBQSxTQUE4QyxVQUMxRVAsRUFEMEUsRUFFMUV3RCxPQUYwRSxFQUdqRTtBQUNUakQsbUJBQWUsQ0FBQztBQUFFSixhQUFPLEVBQUU7QUFBRW9ELHNCQUFjLEVBQUVDO0FBQWxCLE9BQVg7QUFBd0N4RCxRQUFFLEVBQUZBO0FBQXhDLEtBQUQsQ0FBZjtBQUNELEdBTDZCO0FBQUEsQ0FBdkI7QUFPQSxJQUFNeUQsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ2xELGVBQUQ7QUFBQSxTQUE4QyxVQUNqRVAsRUFEaUU7QUFBQSxRQUVqRWdCLElBRmlFLHVFQUUxRCxFQUYwRDtBQUFBLFdBR3hEVCxlQUFlLENBQUM7QUFBRUosYUFBTyxFQUFFO0FBQUVhLFlBQUksRUFBSkE7QUFBRixPQUFYO0FBQXFCaEIsUUFBRSxFQUFGQTtBQUFyQixLQUFELENBSHlDO0FBQUEsR0FBOUM7QUFBQSxDQUFkIiwiZmlsZSI6Ii4vdXRpbHMvcHJvY2Vzc21hbmFnZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcEZpbGUgfSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2dyYW1zJztcbmltcG9ydCB0eXBlIHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFJuZERyYWdDYWxsYmFjaywgUm5kUmVzaXplQ2FsbGJhY2sgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHR5cGUge1xuICBQcm9jZXNzQWN0aW9uLFxuICBQcm9jZXNzZXMsXG4gIFByb2Nlc3NTdGF0ZVxufSBmcm9tICdAL3R5cGVzL3V0aWxzL3Byb2Nlc3NtYW5hZ2VyJztcblxuaW1wb3J0IHsgYXBwTG9hZGVyIH0gZnJvbSAnQC91dGlscy9wcm9ncmFtcyc7XG5pbXBvcnQgeyBiYXNlbmFtZSwgZXh0bmFtZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZ2V0RmlsZUljb24gfSBmcm9tICdAL3V0aWxzL2ZpbGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc0lkLCBQcm9jZXNzIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcblxuY29uc3QgYWRkUHJvY2VzcyA9IChcbiAgcHJvY2VzczogUHJvY2VzcyxcbiAgcHJvY2Vzc2VzOiBQcm9jZXNzZXMsXG4gIHByZXZpb3VzU3RhdGU6IFByb2Nlc3NTdGF0ZSA9IHt9XG4pOiBQcm9jZXNzZXMgPT4gWy4uLnByb2Nlc3NlcywgeyAuLi5wcm9jZXNzLCAuLi5wcmV2aW91c1N0YXRlIH1dO1xuXG5jb25zdCByZW1vdmVQcm9jZXNzID0gKGlkOiBzdHJpbmcsIHByb2Nlc3NlczogUHJvY2Vzc2VzKTogUHJvY2Vzc2VzID0+XG4gIHByb2Nlc3Nlcy5maWx0ZXIoKHByb2Nlc3MpID0+IHByb2Nlc3MuaWQgIT09IGlkKTtcblxuY29uc3QgdXBkYXRlUHJvY2VzcyA9IChcbiAgaWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUHJvY2Vzc1N0YXRlLFxuICBwcm9jZXNzZXM6IFByb2Nlc3Nlc1xuKTogUHJvY2Vzc2VzID0+XG4gIHByb2Nlc3Nlcy5tYXAoKHByb2Nlc3MpID0+XG4gICAgcHJvY2Vzcy5pZCA9PT0gaWQgPyB7IC4uLnByb2Nlc3MsIC4uLnVwZGF0ZXMgfSA6IHByb2Nlc3NcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NSZWR1Y2VyID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgeyBpZCwgcHJvY2VzcywgdXBkYXRlcywgcHJldmlvdXNTdGF0ZSB9OiBQcm9jZXNzQWN0aW9uXG4pOiBQcm9jZXNzZXMgPT4ge1xuICBpZiAoaWQgJiYgdXBkYXRlcykgcmV0dXJuIHVwZGF0ZVByb2Nlc3MoaWQsIHVwZGF0ZXMsIHByb2Nlc3Nlcyk7XG4gIGlmIChwcm9jZXNzKSByZXR1cm4gYWRkUHJvY2Vzcyhwcm9jZXNzLCBwcm9jZXNzZXMsIHByZXZpb3VzU3RhdGUpO1xuICBpZiAoaWQpIHJldHVybiByZW1vdmVQcm9jZXNzKGlkLCBwcm9jZXNzZXMpO1xuICByZXR1cm4gcHJvY2Vzc2VzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlID0gKHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogdm9pZCA9PiB1cGRhdGVQcm9jZXNzZXMoeyBpZCB9KTtcblxuZXhwb3J0IGNvbnN0IG1heGltaXplID0gKHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogdm9pZCA9PiB1cGRhdGVQcm9jZXNzZXMoeyB1cGRhdGVzOiB7IG1heGltaXplZDogdHJ1ZSB9LCBpZCB9KTtcblxuZXhwb3J0IGNvbnN0IG1pbmltaXplID0gKHVwZGF0ZVByb2Nlc3NlczogRGlzcGF0Y2g8UHJvY2Vzc0FjdGlvbj4pID0+IChcbiAgaWQ6IHN0cmluZ1xuKTogdm9pZCA9PiB1cGRhdGVQcm9jZXNzZXMoeyB1cGRhdGVzOiB7IG1pbmltaXplZDogdHJ1ZSB9LCBpZCB9KTtcblxuZXhwb3J0IGNvbnN0IG9wZW4gPSAoXG4gIHByb2Nlc3NlczogUHJvY2Vzc2VzLFxuICB1cGRhdGVQcm9jZXNzZXM6IERpc3BhdGNoPFByb2Nlc3NBY3Rpb24+XG4pID0+IChcbiAgYXBwRmlsZTogQXBwRmlsZSxcbiAgcHJldmlvdXNTdGF0ZTogUHJvY2Vzc1N0YXRlLFxuICBsYXVuY2hFbGVtZW50OiBFdmVudFRhcmdldFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgeyBpY29uLCBuYW1lIH0gPSBhcHBGaWxlO1xuICBjb25zdCBleGlzdGluZ1Byb2Nlc3NJZCA9IGdldFByb2Nlc3NJZChuYW1lKTtcblxuICBpZiAocHJvY2Vzc2VzLmZpbmQoKHsgaWQ6IHByb2Nlc3NJZCB9KSA9PiBwcm9jZXNzSWQgPT09IGV4aXN0aW5nUHJvY2Vzc0lkKSlcbiAgICByZXR1cm4gZXhpc3RpbmdQcm9jZXNzSWQ7XG5cbiAgY29uc3QgbG9hZGVyID0gYXBwTG9hZGVyKGFwcEZpbGUpO1xuXG4gIGlmIChsb2FkZXIpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gbmV3IFByb2Nlc3Moe1xuICAgICAgbG9hZGVyLFxuICAgICAgaWNvbixcbiAgICAgIG5hbWUsXG4gICAgICBsYXVuY2hFbGVtZW50LFxuICAgICAgLi4ubG9hZGVyLmxvYWRlck9wdGlvbnNcbiAgICB9KTtcblxuICAgIHVwZGF0ZVByb2Nlc3Nlcyh7IHByb2Nlc3MsIHByZXZpb3VzU3RhdGUgfSk7XG5cbiAgICByZXR1cm4gcHJvY2Vzcy5pZDtcbiAgfVxuXG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKFxuICBwcm9jZXNzZXM6IFByb2Nlc3NlcyxcbiAgdXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPlxuKSA9PiAoXG4gIGZpbGU6IEZpbGUsXG4gIHByZXZpb3VzU3RhdGU6IFByb2Nlc3NTdGF0ZSxcbiAgbGF1bmNoRWxlbWVudDogRXZlbnRUYXJnZXRcbik6IHZvaWQgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShmaWxlUmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcildKVxuICAgICk7XG4gICAgY29uc3QgZXh0ID0gZXh0bmFtZShmaWxlLm5hbWUpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBvcGVuKHByb2Nlc3NlcywgdXBkYXRlUHJvY2Vzc2VzKShcbiAgICAgIHtcbiAgICAgICAgaWNvbjogZ2V0RmlsZUljb24oJycsIGV4dCksXG4gICAgICAgIG5hbWU6IGJhc2VuYW1lKGZpbGUubmFtZSwgZXh0KSxcbiAgICAgICAgZXh0LFxuICAgICAgICB1cmxcbiAgICAgIH0sXG4gICAgICBwcmV2aW91c1N0YXRlLFxuICAgICAgbGF1bmNoRWxlbWVudFxuICAgICk7XG4gIH0pO1xuXG4gIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9zaXRpb24gPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nXG4pOiBSbmREcmFnQ2FsbGJhY2sgPT4gKF9ldmVudCwgeyB4LCB5IH0pOiB2b2lkID0+XG4gIHVwZGF0ZVByb2Nlc3Nlcyh7IGlkLCB1cGRhdGVzOiB7IHgsIHkgfSB9KTtcblxuZXhwb3J0IGNvbnN0IHJlc3RvcmUgPSAodXBkYXRlUHJvY2Vzc2VzOiBEaXNwYXRjaDxQcm9jZXNzQWN0aW9uPikgPT4gKFxuICBpZDogc3RyaW5nLFxuICBrZXk6ICdtaW5pbWl6ZWQnIHwgJ21heGltaXplZCdcbik6IHZvaWQgPT5cbiAgdXBkYXRlUHJvY2Vzc2VzKHtcbiAgICB1cGRhdGVzOiB7IFtrZXldOiBmYWxzZSB9LFxuICAgIGlkXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2l6ZSA9ICh1cGRhdGVQcm9jZXNzZXM6IERpc3BhdGNoPFByb2Nlc3NBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmdcbik6IFJuZFJlc2l6ZUNhbGxiYWNrID0+IChcbiAgX2V2ZW50LFxuICBfZGlyZWN0aW9uLFxuICB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSxcbiAgX2RlbHRhLFxuICB7IHgsIHkgfVxuKTogdm9pZCA9PiB1cGRhdGVQcm9jZXNzZXMoeyBpZCwgdXBkYXRlczogeyBoZWlnaHQsIHdpZHRoLCB4LCB5IH0gfSk7XG5cbmV4cG9ydCBjb25zdCB0YXNrYmFyRWxlbWVudCA9ICh1cGRhdGVQcm9jZXNzZXM6IERpc3BhdGNoPFByb2Nlc3NBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmcsXG4gIGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50XG4pOiB2b2lkID0+IHtcbiAgdXBkYXRlUHJvY2Vzc2VzKHsgdXBkYXRlczogeyB0YXNrYmFyRWxlbWVudDogZWxlbWVudCB9LCBpZCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB0aXRsZSA9ICh1cGRhdGVQcm9jZXNzZXM6IERpc3BhdGNoPFByb2Nlc3NBY3Rpb24+KSA9PiAoXG4gIGlkOiBzdHJpbmcsXG4gIG5hbWUgPSAnJ1xuKTogdm9pZCA9PiB1cGRhdGVQcm9jZXNzZXMoeyB1cGRhdGVzOiB7IG5hbWUgfSwgaWQgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/processmanager.ts\n");

/***/ })

})