"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_redirect_to_page_render_js"],{

/***/ "./editor/form-actions/redirect.to.page/render.js":
/*!********************************************************!*\
  !*** ./editor/form-actions/redirect.to.page/render.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar _JetFBActions = JetFBActions,\n  getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\nvar _JetFBComponents = JetFBComponents,\n  AdvancedModalControl = _JetFBComponents.AdvancedModalControl;\n\n/**\r\n * Internal dependencies\r\n */\nvar _wp$components = wp.components,\n  TextControl = _wp$components.TextControl,\n  ToggleControl = _wp$components.ToggleControl,\n  SelectControl = _wp$components.SelectControl,\n  BaseControl = _wp$components.BaseControl,\n  CheckboxControl = _wp$components.CheckboxControl;\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n  useState = _wp$element.useState,\n  useEffect = _wp$element.useEffect;\nvar _JetFBHooks = JetFBHooks,\n  withRequestFields = _JetFBHooks.withRequestFields;\nvar withSelect = wp.data.withSelect;\nvar applyFilters = wp.hooks.applyFilters;\nfunction RedirectToPageRender(props) {\n  var source = props.source,\n    label = props.label,\n    settings = props.settings,\n    onChangeSetting = props.onChangeSetting,\n    onChangeSettingObj = props.onChangeSettingObj,\n    requestFields = props.requestFields;\n  var _useState = useState(source.redirect_types),\n    _useState2 = _slicedToArray(_useState, 2),\n    typePages = _useState2[0],\n    setTypePages = _useState2[1];\n  var _useState3 = useState([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    fields = _useState4[0],\n    setFields = _useState4[1];\n  useEffect(function () {\n    var hasInserted = requestFields.findIndex(function (field) {\n      return 'inserted_post_id' === field.value;\n    });\n    if (-1 === hasInserted) {\n      setTypePages(function (prev) {\n        return prev.filter(function (type) {\n          return 'inserted_post' !== type.value;\n        });\n      });\n    }\n    var filterTypes = applyFilters('jet.fb.redirect_to_page.types', [], props);\n    if (filterTypes.length) {\n      setTypePages(function (prev) {\n        return [].concat(_toConsumableArray(prev), _toConsumableArray(filterTypes));\n      });\n    }\n    setFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));\n  }, []);\n  var isChecked = function isChecked(name) {\n    var args_fields = Array.from(settings.redirect_args || []);\n    return Boolean(args_fields.includes(name));\n  };\n  var onChangeRedirectArgs = function onChangeRedirectArgs(value, field_name) {\n    var redirect_args = Array.from(settings.redirect_args || []);\n    if (!value) {\n      var field_id = redirect_args.indexOf(field_name);\n      redirect_args.splice(field_id, 1);\n    } else {\n      redirect_args.push(field_name);\n    }\n    onChangeSettingObj({\n      redirect_args: redirect_args\n    });\n  };\n\n  /* eslint-disable jsx-a11y/no-onchange */\n  return wp.element.createElement(\"div\", {\n    key: \"redirect_to_page\"\n  }, wp.element.createElement(SelectControl, {\n    className: \"full-width\",\n    key: \"redirect_type\",\n    label: label('redirect_type'),\n    labelPosition: \"side\",\n    value: settings.redirect_type,\n    options: typePages,\n    onChange: function onChange(redirect_type) {\n      return onChangeSettingObj({\n        redirect_type: redirect_type\n      });\n    }\n  }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {\n    key: \"redirect_type_page\",\n    className: \"full-width\",\n    label: label('redirect_page'),\n    labelPosition: \"side\",\n    value: settings.redirect_page,\n    options: source.pages,\n    onChange: function onChange(redirect_page) {\n      return onChangeSettingObj({\n        redirect_page: redirect_page\n      });\n    }\n  }), 'custom_url' === settings.redirect_type && wp.element.createElement(AdvancedModalControl, {\n    value: settings.redirect_url,\n    label: label('redirect_url'),\n    macroWithCurrent: true,\n    onChangePreset: function onChangePreset(redirect_url) {\n      return onChangeSettingObj({\n        redirect_url: redirect_url\n      });\n    },\n    onChangeMacros: function onChangeMacros(name) {\n      var _settings$redirect_ur;\n      return onChangeSettingObj({\n        redirect_url: ((_settings$redirect_ur = settings.redirect_url) !== null && _settings$redirect_ur !== void 0 ? _settings$redirect_ur : '') + name\n      });\n    }\n  }, function (_ref) {\n    var instanceId = _ref.instanceId;\n    return wp.element.createElement(TextControl, {\n      id: instanceId,\n      value: settings.redirect_url,\n      onChange: function onChange(redirect_url) {\n        return onChangeSettingObj({\n          redirect_url: redirect_url\n        });\n      }\n    });\n  }), wp.element.createElement(BaseControl, {\n    label: label('redirect_args'),\n    key: \"redirect_args_control\"\n  }, wp.element.createElement(\"div\", {\n    className: \"jet-user-fields-map__list\"\n  }, fields.map(function (_ref2, index) {\n    var name = _ref2.name;\n    return wp.element.createElement(CheckboxControl, {\n      key: \"checkbox_args_\".concat(name, \"_\").concat(index),\n      label: name,\n      checked: isChecked(name),\n      onChange: function onChange(newVal) {\n        return onChangeRedirectArgs(newVal, name);\n      }\n    });\n  }))), wp.element.createElement(TextControl, {\n    key: \"redirect_hash_control\",\n    label: label('redirect_hash'),\n    value: settings.redirect_hash,\n    onChange: function onChange(redirect_hash) {\n      return onChangeSettingObj({\n        redirect_hash: redirect_hash\n      });\n    }\n  }));\n  /* eslint-enable jsx-a11y/no-onchange */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(withRequestFields)(RedirectToPageRender));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUVVQyxZQUFZO0VBRGZDLG1CQUFtQixHQUFBRixhQUFBLENBQW5CRSxtQkFBbUI7QUFHMUIsSUFBQUMsZ0JBQUEsR0FFVUMsZUFBZTtFQURsQkMsb0JBQW9CLEdBQUFGLGdCQUFBLENBQXBCRSxvQkFBb0I7O0FBRzNCO0FBQ0E7QUFDQTtBQUNBLElBQUFDLGNBQUEsR0FNVUMsRUFBRSxDQUFDQyxVQUFVO0VBTGhCQyxXQUFXLEdBQUFILGNBQUEsQ0FBWEcsV0FBVztFQUNYQyxhQUFhLEdBQUFKLGNBQUEsQ0FBYkksYUFBYTtFQUNiQyxhQUFhLEdBQUFMLGNBQUEsQ0FBYkssYUFBYTtFQUNiQyxXQUFXLEdBQUFOLGNBQUEsQ0FBWE0sV0FBVztFQUNYQyxlQUFlLEdBQUFQLGNBQUEsQ0FBZk8sZUFBZTtBQUd0QixJQUFRQyxFQUFFLEdBQUtQLEVBQUUsQ0FBQ1EsSUFBSSxDQUFkRCxFQUFFO0FBRVYsSUFBQUUsV0FBQSxHQUdVVCxFQUFFLENBQUNVLE9BQU87RUFGYkMsUUFBUSxHQUFBRixXQUFBLENBQVJFLFFBQVE7RUFDUkMsU0FBUyxHQUFBSCxXQUFBLENBQVRHLFNBQVM7QUFHaEIsSUFBQUMsV0FBQSxHQUE4QkMsVUFBVTtFQUFoQ0MsaUJBQWlCLEdBQUFGLFdBQUEsQ0FBakJFLGlCQUFpQjtBQUV6QixJQUFRQyxVQUFVLEdBQUtoQixFQUFFLENBQUNpQixJQUFJLENBQXRCRCxVQUFVO0FBRWxCLElBQVFFLFlBQVksR0FBS2xCLEVBQUUsQ0FBQ21CLEtBQUssQ0FBekJELFlBQVk7QUFFcEIsU0FBU0Usb0JBQW9CQSxDQUFFQyxLQUFLLEVBQUc7RUFFdEMsSUFDT0MsTUFBTSxHQU1IRCxLQUFLLENBTlJDLE1BQU07SUFDTkMsS0FBSyxHQUtGRixLQUFLLENBTFJFLEtBQUs7SUFDTEMsUUFB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U0FBUyxDQUFFQyxJQUFLLENBQUc7TUFDN0JtQixRQUFRLEVBQUcsU0FBQUEsU0FBQWUsTUFBTTtRQUFBLE9BQUkzQixvQkFBb0IsQ0FBRTJCLE1BQU0sRUFDaERsQyxJQUFLLENBQUM7TUFBQTtJQUFFLENBQ1QsQ0FBQztFQUFBLENBQ0gsQ0FDSSxDQUNPLENBQUMsRUFDZGxELEVBQUEsQ0FBQVUsT0FBQSxDQUFBcUQsYUFBQSxDQUFDN0QsV0FBVztJQUNYOEQsR0FBRyxFQUFDLHVCQUF1QjtJQUMzQnpDLEtBQUssRUFBR0EsS0FBSyxDQUFFLGVBQWdCLENBQUc7SUFDbENrQixLQUFLLEVBQUdqQixRQUFRLENBQUM2RCxhQUFlO0lBQ2hDaEIsUUFBUSxFQUFHLFNBQUFBLFNBQUFnQixhQUFhO01BQUEsT0FBSTNELGtCQUFrQixDQUM3QztRQUFFMkQsYUFBYSxFQUFiQTtNQUFjLENBQUUsQ0FBQztJQUFBO0VBQUUsQ0FDdEIsQ0FDRyxDQUFDO0VBRVA7QUFDRDs7QUFFQSxpRUFBZXJFLFVBQVUsQ0FBRUQsaUJBQWtCLENBQUMsQ0FBRUssb0JBQXFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzP2U0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIGdldEZvcm1GaWVsZHNCbG9ja3MsXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgQWR2YW5jZWRNb2RhbENvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5jb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuXHQgICAgICBTZWxlY3RDb250cm9sLFxyXG5cdCAgICAgIEJhc2VDb250cm9sLFxyXG5cdCAgICAgIENoZWNrYm94Q29udHJvbCxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZVN0YXRlLFxyXG5cdCAgICAgIHVzZUVmZmVjdCxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xyXG5cclxuZnVuY3Rpb24gUmVkaXJlY3RUb1BhZ2VSZW5kZXIoIHByb3BzICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBzb3VyY2UsXHJcblx0XHQgICAgICBsYWJlbCxcclxuXHRcdCAgICAgIHNldHRpbmdzLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nLFxyXG5cdFx0ICAgICAgb25DaGFuZ2VTZXR0aW5nT2JqLFxyXG5cdFx0ICAgICAgcmVxdWVzdEZpZWxkcyxcclxuXHQgICAgICB9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IFsgdHlwZVBhZ2VzLCBzZXRUeXBlUGFnZXMgXSA9IHVzZVN0YXRlKCBzb3VyY2UucmVkaXJlY3RfdHlwZXMgKTtcclxuXHRjb25zdCBbIGZpZWxkcywgc2V0RmllbGRzIF0gICAgICAgPSB1c2VTdGF0ZSggW10gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRjb25zdCBoYXNJbnNlcnRlZCA9IHJlcXVlc3RGaWVsZHMuZmluZEluZGV4KFxyXG5cdFx0XHRmaWVsZCA9PiAnaW5zZXJ0ZWRfcG9zdF9pZCcgPT09IGZpZWxkLnZhbHVlICk7XHJcblxyXG5cdFx0aWYgKCAtMSA9PT0gaGFzSW5zZXJ0ZWQgKSB7XHJcblx0XHRcdHNldFR5cGVQYWdlcyhcclxuXHRcdFx0XHRwcmV2ID0+IHByZXYuZmlsdGVyKCB0eXBlID0+ICdpbnNlcnRlZF9wb3N0JyAhPT0gdHlwZS52YWx1ZSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSBhcHBseUZpbHRlcnMoICdqZXQuZmIucmVkaXJlY3RfdG9fcGFnZS50eXBlcycsIFtdLFxyXG5cdFx0XHRwcm9wcyApO1xyXG5cclxuXHRcdGlmICggZmlsdGVyVHlwZXMubGVuZ3RoICkge1xyXG5cdFx0XHRzZXRUeXBlUGFnZXMoIHByZXYgPT4gKFxyXG5cdFx0XHRcdFsgLi4ucHJldiwgLi4uZmlsdGVyVHlwZXMgXVxyXG5cdFx0XHQpICk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0RmllbGRzKCBbIC4uLmdldEZvcm1GaWVsZHNCbG9ja3MoKSwgLi4ucmVxdWVzdEZpZWxkcyBdICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0Y29uc3QgaXNDaGVja2VkID0gZnVuY3Rpb24gKCBuYW1lICkge1xyXG5cdFx0Y29uc3QgYXJnc19maWVsZHMgPSBBcnJheS5mcm9tKCBzZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XHJcblxyXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGFyZ3NfZmllbGRzLmluY2x1ZGVzKCBuYW1lICkgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNoYW5nZVJlZGlyZWN0QXJncyA9IGZ1bmN0aW9uICggdmFsdWUsIGZpZWxkX25hbWUgKSB7XHJcblx0XHRsZXQgcmVkaXJlY3RfYXJncyA9IEFycmF5LmZyb20oIHNldHRpbmdzLnJlZGlyZWN0X2FyZ3MgfHwgW10gKTtcclxuXHJcblx0XHRpZiAoICF2YWx1ZSApIHtcclxuXHRcdFx0Y29uc3QgZmllbGRfaWQgPSByZWRpcmVjdF9hcmdzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcclxuXHJcblx0XHRcdHJlZGlyZWN0X2FyZ3Muc3BsaWNlKCBmaWVsZF9pZCwgMSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHJlZGlyZWN0X2FyZ3MucHVzaCggZmllbGRfbmFtZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZWRpcmVjdF9hcmdzIH0gKTtcclxuXHR9O1xyXG5cclxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGtleT1cInJlZGlyZWN0X3RvX3BhZ2VcIj5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF90eXBlXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdHlwZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdHlwZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHR5cGVQYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF90eXBlID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdHsgcmVkaXJlY3RfdHlwZSB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHR7ICdzdGF0aWNfcGFnZScgPT09IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgJiYgPFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF90eXBlX3BhZ2VcIlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9wYWdlJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9wYWdlIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLnBhZ2VzIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X3BhZ2UgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZWRpcmVjdF9wYWdlIH0gKSB9XHJcblx0XHRcdC8+IH1cclxuXHJcblx0XHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxBZHZhbmNlZE1vZGFsQ29udHJvbFxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdXJsIH1cclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdXJsJyApIH1cclxuXHRcdFx0XHRtYWNyb1dpdGhDdXJyZW50XHJcblx0XHRcdFx0b25DaGFuZ2VQcmVzZXQ9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZWRpcmVjdF91cmwgfSxcclxuXHRcdFx0XHQpIH1cclxuXHRcdFx0XHRvbkNoYW5nZU1hY3Jvcz17IG5hbWUgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7XHJcblx0XHRcdFx0XHRyZWRpcmVjdF91cmw6IChcclxuXHRcdFx0XHRcdFx0c2V0dGluZ3MucmVkaXJlY3RfdXJsID8/ICcnXHJcblx0XHRcdFx0XHQpICsgbmFtZSxcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0eyAoIHsgaW5zdGFuY2VJZCB9ICkgPT4gPFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRpZD17IGluc3RhbmNlSWQgfVxyXG5cdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0XHR7IHJlZGlyZWN0X3VybCB9LFxyXG5cdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0Lz4gfVxyXG5cdFx0XHQ8L0FkdmFuY2VkTW9kYWxDb250cm9sPiB9XHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9hcmdzJyApIH1cclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9hcmdzX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XHJcblx0XHRcdFx0XHR7IGZpZWxkcy5tYXAoICggeyBuYW1lIH0sIGluZGV4ICkgPT4gPENoZWNrYm94Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGtleT17IGBjaGVja2JveF9hcmdzXyR7IG5hbWUgfV8keyBpbmRleCB9YCB9XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cclxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNDaGVja2VkKCBuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlUmVkaXJlY3RBcmdzKCBuZXdWYWwsXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lICkgfVxyXG5cdFx0XHRcdFx0XHQvPixcclxuXHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJyZWRpcmVjdF9oYXNoX2NvbnRyb2xcIlxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9oYXNoJyApIH1cclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X2hhc2ggfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfaGFzaCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHR7IHJlZGlyZWN0X2hhc2ggfSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBSZWRpcmVjdFRvUGFnZVJlbmRlciApO1xyXG5cclxuIl0sIm5hbWVzIjpbIl9KZXRGQkFjdGlvbnMiLCJKZXRGQkFjdGlvbnMiLCJnZXRGb3JtRmllbGRzQmxvY2tzIiwiX0pldEZCQ29tcG9uZW50cyIsIkpldEZCQ29tcG9uZW50cyIsIkFkdmFuY2VkTW9kYWxDb250cm9sIiwiX3dwJGNvbXBvbmVudHMiLCJ3cCIsImNvbXBvbmVudHMiLCJUZXh0Q29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwiQmFzZUNvbnRyb2wiLCJDaGVja2JveENvbnRyb2wiLCJfXyIsImkxOG4iLCJfd3AkZWxlbWVudCIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIl9KZXRGQkhvb2tzIiwiSmV0RkJIb29rcyIsIndpdGhSZXF1ZXN0RmllbGRzIiwid2l0aFNlbGVjdCIsImRhdGEiLCJhcHBseUZpbHRlcnMiLCJob29rcyIsIlJlZGlyZWN0VG9QYWdlUmVuZGVyIiwicHJvcHMiLCJzb3VyY2UiLCJsYWJlbCIsInNldHRpbmdzIiwib25DaGFuZ2VTZXR0aW5nIiwib25DaGFuZ2VTZXR0aW5nT2JqIiwicmVxdWVzdEZpZWxkcyIsIl91c2VTdGF0ZSIsInJlZGlyZWN0X3R5cGVzIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidHlwZVBhZ2VzIiwic2V0VHlwZVBhZ2VzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJoYXNJbnNlcnRlZCIsImZpbmRJbmRleCIsImZpZWxkIiwidmFsdWUiLCJwcmV2IiwiZmlsdGVyIiwidHlwZSIsImZpbHRlclR5cGVzIiwibGVuZ3RoIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaXNDaGVja2VkIiwibmFtZSIsImFyZ3NfZmllbGRzIiwiQXJyYXkiLCJmcm9tIiwicmVkaXJlY3RfYXJncyIsIkJvb2xlYW4iLCJpbmNsdWRlcyIsIm9uQ2hhbmdlUmVkaXJlY3RBcmdzIiwiZmllbGRfbmFtZSIsImZpZWxkX2lkIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2xhc3NOYW1lIiwibGFiZWxQb3NpdGlvbiIsInJlZGlyZWN0X3R5cGUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJyZWRpcmVjdF9wYWdlIiwicGFnZXMiLCJyZWRpcmVjdF91cmwiLCJtYWNyb1dpdGhDdXJyZW50Iiwib25DaGFuZ2VQcmVzZXQiLCJvbkNoYW5nZU1hY3JvcyIsIl9zZXR0aW5ncyRyZWRpcmVjdF91ciIsIl9yZWYiLCJpbnN0YW5jZUlkIiwiaWQiLCJtYXAiLCJfcmVmMiIsImluZGV4IiwiY2hlY2tlZCIsIm5ld1ZhbCIsInJlZGlyZWN0X2hhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/form-actions/redirect.to.page/render.js\n");

/***/ })

}]);