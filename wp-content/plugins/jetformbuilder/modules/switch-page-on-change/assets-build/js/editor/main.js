/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/SwitchPageOnChangeButton.js":
/*!********************************************!*\
  !*** ./editor/SwitchPageOnChangeButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./editor/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar __ = wp.i18n.__;\nvar ToolbarButton = wp.components.ToolbarButton;\nvar _wp$primitives = wp.primitives,\n  SVG = _wp$primitives.SVG,\n  Path = _wp$primitives.Path;\nvar _JetFBHooks = JetFBHooks,\n  useBlockAttributes = _JetFBHooks.useBlockAttributes;\nvar SwitchPageOnChangeButton = function SwitchPageOnChangeButton() {\n  var _useBlockAttributes = useBlockAttributes(),\n    _useBlockAttributes2 = _slicedToArray(_useBlockAttributes, 2),\n    attributes = _useBlockAttributes2[0],\n    setAttributes = _useBlockAttributes2[1];\n  return wp.element.createElement(ToolbarButton, {\n    icon: wp.element.createElement(SVG, {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 24 24\"\n    }, wp.element.createElement(Path, {\n      d: \"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z\"\n    })),\n    title: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME] ? __(\"Click on the button to disable the \\nautomatic transition to the next page when the values are changed\", 'jet-form-builder') : __(\"Click on the button to enable automatic \\ntransition to the next page when the values are changed\", 'jet-form-builder'),\n    onClick: function onClick() {\n      return setAttributes(_defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME, !attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME]));\n    },\n    isActive: attributes[_constants__WEBPACK_IMPORTED_MODULE_0__.ATTRIBUTE_NAME]\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchPageOnChangeButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvU3dpdGNoUGFnZU9uQ2hhbmdlQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUU3QyxJQUNPQyxFQUFFLEdBQ0NDLEVBQUUsQ0FBQ0MsSUFBSSxDQURWRixFQUFFO0FBR1QsSUFDT0csYUFBYSxHQUNWRixFQUFFLENBQUNHLFVBQVUsQ0FEaEJELGFBQWE7QUFHcEIsSUFBQUUsY0FBQSxHQUdVSixFQUFFLENBQUNLLFVBQVU7RUFGaEJDLEdBQUcsR0FBQUYsY0FBQSxDQUFIRSxHQUFHO0VBQ0hDLElBQUksR0FBQUgsY0FBQSxDQUFKRyxJQUFJO0FBR1gsSUFBQUMsV0FBQSxHQUVVQyxVQUFVO0VBRGJDLGtCQUFrQixHQUFBRixXQUFBLENBQWxCRSxrQkFBa0I7QUFHekIsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUF3QkEsQ0FBQSxFQUFlO0VBQzVDLElBQUFDLG1CQUFBLEdBQXNDRixrQkFBa0IsQ0FBQyxDQUFDO0lBQUFHLG9CQUFBLEdBQUFDLGNBQUEsQ0FBQUYsbUJBQUE7SUFBbERHLFVBQVUsR0FBQUYsb0JBQUE7SUFBRUcsYUFBYSxHQUFBSCxvQkFBQTtFQUVqQyxPQUFPYixFQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2hCLGFBQWE7SUFDcEJpQixJQUFJLEVBQUduQixFQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUEsQ0FBQ1osR0FBRztNQUFDYyxLQUFLLEVBQUMsNEJBQTRCO01BQ2xDQyxPQUFPLEVBQUM7SUFBVyxHQUM5QnJCLEVBQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWCxJQUFJO01BQ0plLENBQUMsRUFBQztJQUF1RixDQUFDLENBQ3ZGLENBQUc7SUFDUkMsS0FBSyxFQUFHUixVQUFVLENBQUVqQixzREFBYyxDQUFFLEdBQzFCQyxFQUFFLDJHQUdWLGtCQUNELENBQUMsR0FDUUEsRUFBRSxzR0FHVixrQkFDRCxDQUNBO0lBQ0R5QixPQUFPLEVBQUcsU0FBQUEsUUFBQTtNQUFBLE9BQU1SLGFBQWEsQ0FBQVMsZUFBQSxLQUMxQjNCLHNEQUFjLEVBQUksQ0FBQ2lCLFVBQVUsQ0FBRWpCLHNEQUFjLENBQUUsQ0FDaEQsQ0FBQztJQUFBLENBQUU7SUFDTDRCLFFBQVEsRUFBR1gsVUFBVSxDQUFFakIsc0RBQWM7RUFBSSxDQUN6QyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlYSx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItc3dpdGNoLXBhZ2Utb24tY2hhbmdlLy4vZWRpdG9yL1N3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbi5qcz9kZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFUVFJJQlVURV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBUb29sYmFyQnV0dG9uLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBTVkcsXHJcblx0ICAgICAgUGF0aCxcclxuICAgICAgfSA9IHdwLnByaW1pdGl2ZXM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlQmxvY2tBdHRyaWJ1dGVzLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IFN3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBbIGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgXSA9IHVzZUJsb2NrQXR0cmlidXRlcygpO1xyXG5cclxuXHRyZXR1cm4gPFRvb2xiYXJCdXR0b25cclxuXHRcdGljb249eyA8U1ZHIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG5cdFx0ICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdFx0XHQ8UGF0aFxyXG5cdFx0XHRcdGQ9XCJNNi42IDZMNS40IDdsNC41IDUtNC41IDUgMS4xIDEgNS41LTYtNS40LTZ6bTYgMGwtMS4xIDEgNC41IDUtNC41IDUgMS4xIDEgNS41LTYtNS41LTZ6XCIvPlxyXG5cdFx0PC9TVkc+IH1cclxuXHRcdHRpdGxlPXsgYXR0cmlidXRlc1sgQVRUUklCVVRFX05BTUUgXVxyXG5cdFx0ICAgICAgICA/IF9fKFxyXG5cdFx0XHRcdGBDbGljayBvbiB0aGUgYnV0dG9uIHRvIGRpc2FibGUgdGhlIFxyXG5hdXRvbWF0aWMgdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBwYWdlIHdoZW4gdGhlIHZhbHVlcyBhcmUgY2hhbmdlZGAsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpXHJcblx0XHQgICAgICAgIDogX18oXHJcblx0XHRcdFx0YENsaWNrIG9uIHRoZSBidXR0b24gdG8gZW5hYmxlIGF1dG9tYXRpYyBcclxudHJhbnNpdGlvbiB0byB0aGUgbmV4dCBwYWdlIHdoZW4gdGhlIHZhbHVlcyBhcmUgY2hhbmdlZGAsXHJcblx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInLFxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0QXR0cmlidXRlcygge1xyXG5cdFx0XHRbIEFUVFJJQlVURV9OQU1FIF06ICFhdHRyaWJ1dGVzWyBBVFRSSUJVVEVfTkFNRSBdLFxyXG5cdFx0fSApIH1cclxuXHRcdGlzQWN0aXZlPXsgYXR0cmlidXRlc1sgQVRUUklCVVRFX05BTUUgXSB9XHJcblx0Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hQYWdlT25DaGFuZ2VCdXR0b247Il0sIm5hbWVzIjpbIkFUVFJJQlVURV9OQU1FIiwiX18iLCJ3cCIsImkxOG4iLCJUb29sYmFyQnV0dG9uIiwiY29tcG9uZW50cyIsIl93cCRwcmltaXRpdmVzIiwicHJpbWl0aXZlcyIsIlNWRyIsIlBhdGgiLCJfSmV0RkJIb29rcyIsIkpldEZCSG9va3MiLCJ1c2VCbG9ja0F0dHJpYnV0ZXMiLCJTd2l0Y2hQYWdlT25DaGFuZ2VCdXR0b24iLCJfdXNlQmxvY2tBdHRyaWJ1dGVzIiwiX3VzZUJsb2NrQXR0cmlidXRlczIiLCJfc2xpY2VkVG9BcnJheSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGVzIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpY29uIiwieG1sbnMiLCJ2aWV3Qm94IiwiZCIsInRpdGxlIiwib25DbGljayIsIl9kZWZpbmVQcm9wZXJ0eSIsImlzQWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/SwitchPageOnChangeButton.js\n");

/***/ }),

/***/ "./editor/SwitchPageOnChangeControls.js":
/*!**********************************************!*\
  !*** ./editor/SwitchPageOnChangeControls.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _SwitchPageOnChangeButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchPageOnChangeButton */ \"./editor/SwitchPageOnChangeButton.js\");\n\nvar BlockControls = wp.blockEditor.BlockControls;\nvar SwitchPageOnChangeControls = function SwitchPageOnChangeControls() {\n  return wp.element.createElement(BlockControls, {\n    group: \"other\"\n  }, wp.element.createElement(_SwitchPageOnChangeButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchPageOnChangeControls);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0U7QUFFbEUsSUFDT0MsYUFBYSxHQUNWQyxFQUFFLENBQUNDLFdBQVcsQ0FEakJGLGFBQWE7QUFJcEIsSUFBTUcsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUEwQkEsQ0FBQSxFQUFlO0VBQzlDLE9BQU9GLEVBQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNMLGFBQWE7SUFBQ00sS0FBSyxFQUFDO0VBQU8sR0FDbENMLEVBQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNOLGlFQUF3QixNQUFFLENBQ2IsQ0FBQztBQUNqQixDQUFDO0FBRUQsaUVBQWVJLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1zd2l0Y2gtcGFnZS1vbi1jaGFuZ2UvLi9lZGl0b3IvU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMuanM/NWUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpdGNoUGFnZU9uQ2hhbmdlQnV0dG9uIGZyb20gJy4vU3dpdGNoUGFnZU9uQ2hhbmdlQnV0dG9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCbG9ja0NvbnRyb2xzLFxyXG4gICAgICB9ID0gd3AuYmxvY2tFZGl0b3I7XHJcblxyXG5cclxuY29uc3QgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIDxCbG9ja0NvbnRyb2xzIGdyb3VwPVwib3RoZXJcIj5cclxuXHRcdDxTd2l0Y2hQYWdlT25DaGFuZ2VCdXR0b24gLz5cclxuXHQ8L0Jsb2NrQ29udHJvbHM+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHM7Il0sIm5hbWVzIjpbIlN3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbiIsIkJsb2NrQ29udHJvbHMiLCJ3cCIsImJsb2NrRWRpdG9yIiwiU3dpdGNoUGFnZU9uQ2hhbmdlQ29udHJvbHMiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImdyb3VwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/SwitchPageOnChangeControls.js\n");

/***/ }),

/***/ "./editor/constants.js":
/*!*****************************!*\
  !*** ./editor/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ATTRIBUTE_NAME: () => (/* binding */ ATTRIBUTE_NAME),\n/* harmony export */   SUPPORT_NAME: () => (/* binding */ SUPPORT_NAME)\n/* harmony export */ });\nvar SUPPORT_NAME = 'jetFBSwitchPageOnChange';\nvar ATTRIBUTE_NAME = 'switch_on_change';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvY29uc3RhbnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFLLHlCQUF5QjtBQUNoRCxJQUFNQyxjQUFjLEdBQUcsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXN3aXRjaC1wYWdlLW9uLWNoYW5nZS8uL2VkaXRvci9jb25zdGFudHMuanM/NzI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTVVBQT1JUX05BTUUgICA9ICdqZXRGQlN3aXRjaFBhZ2VPbkNoYW5nZSc7XHJcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gJ3N3aXRjaF9vbl9jaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuXHRTVVBQT1JUX05BTUUsXHJcblx0QVRUUklCVVRFX05BTUUsXHJcbn07Il0sIm5hbWVzIjpbIlNVUFBPUlRfTkFNRSIsIkFUVFJJQlVURV9OQU1FIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/constants.js\n");

/***/ }),

/***/ "./editor/getSupport.js":
/*!******************************!*\
  !*** ./editor/getSupport.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./editor/constants.js\");\n\nvar get = window._.get;\nfunction getSupport(settings) {\n  return get(settings, ['supports', _constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_NAME], false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSupport);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZ2V0U3VwcG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxJQUFRQyxHQUFHLEdBQUtDLE1BQU0sQ0FBQ0MsQ0FBQyxDQUFoQkYsR0FBRztBQUVYLFNBQVNHLFVBQVVBLENBQUVDLFFBQVEsRUFBRztFQUMvQixPQUFPSixHQUFHLENBQ1RJLFFBQVEsRUFDUixDQUFFLFVBQVUsRUFBRUwsb0RBQVksQ0FBRSxFQUM1QixLQUNELENBQUM7QUFDRjtBQUVBLGlFQUFlSSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXN3aXRjaC1wYWdlLW9uLWNoYW5nZS8uL2VkaXRvci9nZXRTdXBwb3J0LmpzPzgxY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU1VQUE9SVF9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgeyBnZXQgfSA9IHdpbmRvdy5fO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3VwcG9ydCggc2V0dGluZ3MgKSB7XHJcblx0cmV0dXJuIGdldChcclxuXHRcdHNldHRpbmdzLFxyXG5cdFx0WyAnc3VwcG9ydHMnLCBTVVBQT1JUX05BTUUgXSxcclxuXHRcdGZhbHNlLFxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFN1cHBvcnQ7Il0sIm5hbWVzIjpbIlNVUFBPUlRfTkFNRSIsImdldCIsIndpbmRvdyIsIl8iLCJnZXRTdXBwb3J0Iiwic2V0dGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/getSupport.js\n");

/***/ }),

/***/ "./editor/main.js":
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registerAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerAttribute */ \"./editor/registerAttribute.js\");\n/* harmony import */ var _SwitchPageOnChangeControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchPageOnChangeControls */ \"./editor/SwitchPageOnChangeControls.js\");\n/* harmony import */ var _SwitchPageOnChangeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchPageOnChangeButton */ \"./editor/SwitchPageOnChangeButton.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nvar addFilter = wp.hooks.addFilter;\naddFilter('blocks.registerBlockType', 'jet-form-builder/switch-page-on-change-support', _registerAttribute__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.JetFBComponents = _objectSpread(_objectSpread({}, window.JetFBComponents), {}, {\n  SwitchPageOnChangeControls: _SwitchPageOnChangeControls__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  SwitchPageOnChangeButton: _SwitchPageOnChangeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9EO0FBQ2tCO0FBQ0o7QUFFbEUsSUFDT0csU0FBUyxHQUNOQyxFQUFFLENBQUNDLEtBQUssQ0FEWEYsU0FBUztBQUdoQkEsU0FBUyxDQUNSLDBCQUEwQixFQUMxQixnREFBZ0QsRUFDaERILDBEQUNELENBQUM7QUFFRE0sTUFBTSxDQUFDQyxlQUFlLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNsQkYsTUFBTSxDQUFDQyxlQUFlO0VBQ3pCTiwwQkFBMEIsRUFBMUJBLG1FQUEwQjtFQUMxQkMsd0JBQXdCLEVBQXhCQSxpRUFBd0JBO0FBQUEsRUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItc3dpdGNoLXBhZ2Utb24tY2hhbmdlLy4vZWRpdG9yL21haW4uanM/MDk4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnaXN0ZXJBdHRyaWJ1dGUgZnJvbSAnLi9yZWdpc3RlckF0dHJpYnV0ZSc7XHJcbmltcG9ydCBTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scyBmcm9tICcuL1N3aXRjaFBhZ2VPbkNoYW5nZUNvbnRyb2xzJztcclxuaW1wb3J0IFN3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbiBmcm9tICcuL1N3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvc3dpdGNoLXBhZ2Utb24tY2hhbmdlLXN1cHBvcnQnLFxyXG5cdHJlZ2lzdGVyQXR0cmlidXRlLFxyXG4pO1xyXG5cclxud2luZG93LkpldEZCQ29tcG9uZW50cyA9IHtcclxuXHQuLi53aW5kb3cuSmV0RkJDb21wb25lbnRzLFxyXG5cdFN3aXRjaFBhZ2VPbkNoYW5nZUNvbnRyb2xzLFxyXG5cdFN3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbixcclxufTsiXSwibmFtZXMiOlsicmVnaXN0ZXJBdHRyaWJ1dGUiLCJTd2l0Y2hQYWdlT25DaGFuZ2VDb250cm9scyIsIlN3aXRjaFBhZ2VPbkNoYW5nZUJ1dHRvbiIsImFkZEZpbHRlciIsIndwIiwiaG9va3MiLCJ3aW5kb3ciLCJKZXRGQkNvbXBvbmVudHMiLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./editor/main.js\n");

/***/ }),

/***/ "./editor/registerAttribute.js":
/*!*************************************!*\
  !*** ./editor/registerAttribute.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getSupport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSupport */ \"./editor/getSupport.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./editor/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nfunction registerAttribute(settings, name) {\n  if (!(0,_getSupport__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(settings)) {\n    return settings;\n  }\n  settings.attributes = _objectSpread(_objectSpread({}, settings.attributes), {}, _defineProperty({}, _constants__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_NAME, {\n    type: 'boolean',\n    default: false\n  }));\n  return settings;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerAttribute);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvcmVnaXN0ZXJBdHRyaWJ1dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ087QUFFN0MsU0FBU0UsaUJBQWlCQSxDQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRztFQUM1QyxJQUFLLENBQUNKLHVEQUFVLENBQUVHLFFBQVMsQ0FBQyxFQUFHO0lBQzlCLE9BQU9BLFFBQVE7RUFDaEI7RUFFQUEsUUFBUSxDQUFDRSxVQUFVLEdBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNmSCxRQUFRLENBQUNFLFVBQVUsT0FBQUUsZUFBQSxLQUNwQk4sc0RBQWMsRUFBSTtJQUNuQk8sSUFBSSxFQUFFLFNBQVM7SUFDZkMsT0FBTyxFQUFFO0VBQ1YsQ0FBQyxFQUNEO0VBRUQsT0FBT04sUUFBUTtBQUNoQjtBQUVBLGlFQUFlRCxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItc3dpdGNoLXBhZ2Utb24tY2hhbmdlLy4vZWRpdG9yL3JlZ2lzdGVyQXR0cmlidXRlLmpzPzhjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFN1cHBvcnQgZnJvbSAnLi9nZXRTdXBwb3J0JztcclxuaW1wb3J0IHsgQVRUUklCVVRFX05BTUUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckF0dHJpYnV0ZSggc2V0dGluZ3MsIG5hbWUgKSB7XHJcblx0aWYgKCAhZ2V0U3VwcG9ydCggc2V0dGluZ3MgKSApIHtcclxuXHRcdHJldHVybiBzZXR0aW5ncztcclxuXHR9XHJcblxyXG5cdHNldHRpbmdzLmF0dHJpYnV0ZXMgPSB7XHJcblx0XHQuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLFxyXG5cdFx0WyBBVFRSSUJVVEVfTkFNRSBdOiB7XHJcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcclxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiBzZXR0aW5ncztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJBdHRyaWJ1dGU7Il0sIm5hbWVzIjpbImdldFN1cHBvcnQiLCJBVFRSSUJVVEVfTkFNRSIsInJlZ2lzdGVyQXR0cmlidXRlIiwic2V0dGluZ3MiLCJuYW1lIiwiYXR0cmlidXRlcyIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJ0eXBlIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./editor/registerAttribute.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/main.js");
/******/ 	
/******/ })()
;