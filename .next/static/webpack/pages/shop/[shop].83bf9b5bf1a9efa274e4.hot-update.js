webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./components/general_components/card/CardComponent.jsx":
/*!**************************************************************!*\
  !*** ./components/general_components/card/CardComponent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _general_components_card_ItemModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general_components/card/ItemModal */ "./components/general_components/card/ItemModal.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/components/general_components/card/CardComponent.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var easing = [0.6, -0.05, 0.01, 0.99];
var fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
var customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "14%",
    left: "27%",
    right: "40px",
    bottom: "",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "15px",
    outline: "none",
    padding: "20px",
    boxShadow: "0 0 20px gray"
  }
};
react_modal__WEBPACK_IMPORTED_MODULE_2___default.a.setAppElement("#__next");

var CardComponent = function CardComponent(_ref) {
  _s();

  var imageUrl = _ref.imageUrl,
      imageAlt = _ref.imageAlt,
      title = _ref.title,
      description = _ref.description;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setIsOpen = _useState[1];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: fadeInUp,
    className: "col-md-6 col-xl-4 mb-5",
    style: {
      cursor: "pointer"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "card post-preview lift h-100",
    href: "#!",
    onClick: openModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "card-img-top items",
    src: imageUrl,
    alt: imageAlt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, title), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, description)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "post-preview-meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "post-preview-meta-img",
    src: "/images/info.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "post-preview-meta-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("a", {
    "data-8code": "6rfgc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "post-preview-meta-details-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "M\xE1s Informaci\xF3n"))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: modalIsOpen,
    style: customStyles,
    onRequestClose: function onRequestClose() {
      return closeModal();
    },
    id: "modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_general_components_card_ItemModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: closeModal,
    imgModal: imageUrl,
    productName: title,
    description: description,
    price: "30.00",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })));
};

_s(CardComponent, "EOxo+0MXKxyCdUCTWpcfchJ0gFI=");

_c = CardComponent;
/* harmony default export */ __webpack_exports__["default"] = (CardComponent);

var _c;

$RefreshReg$(_c, "CardComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9DYXJkQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiY3VzdG9tU3R5bGVzIiwib3ZlcmxheSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGVudCIsImJvcmRlciIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsIldlYmtpdE92ZXJmbG93U2Nyb2xsaW5nIiwiYm9yZGVyUmFkaXVzIiwib3V0bGluZSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJDYXJkQ29tcG9uZW50IiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxFQURJO0FBRVBDLFdBQU8sRUFBRTtBQUZGLEdBRE07QUFLZkMsU0FBTyxFQUFFO0FBQ1BGLEtBQUMsRUFBRSxDQURJO0FBRVBDLFdBQU8sRUFBRSxDQUZGO0FBR1BFLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUUsR0FEQTtBQUVWQyxVQUFJLEVBQUVSO0FBRkk7QUFITDtBQUxNLENBQWpCO0FBY0EsSUFB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LGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsQ0FGRixDQURGLENBTkYsQ0FMRixFQXVCRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFRSxXQURWO0FBRUUsU0FBSyxFQUFFekIsWUFGVDtBQUdFLGtCQUFjLEVBQUU7QUFBQSxhQUFNMkIsVUFBVSxFQUFoQjtBQUFBLEtBSGxCO0FBSUUsTUFBRSxFQUFDLE9BSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsMEVBQUQ7QUFDRSxjQUFVLEVBQUVBLFVBRGQ7QUFFRSxZQUFRLEVBQUVQLFFBRlo7QUFHRSxlQUFXLEVBQUVFLEtBSGY7QUFJRSxlQUFXLEVBQUVDLFdBSmY7QUFLRSxTQUFLLEVBQUMsT0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0F2QkYsQ0FERjtBQXdDRCxDQWxERDs7R0FBTUosYTs7S0FBQUEsYTtBQW9EU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9bc2hvcF0uODNiZjliNWJmMWE5ZWZhMjc0ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEl0ZW1Nb2RhbCBmcm9tIFwiLi4vLi4vZ2VuZXJhbF9jb21wb25lbnRzL2NhcmQvSXRlbU1vZGFsXCI7XG5cbmNvbnN0IGVhc2luZyA9IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XTtcblxuY29uc3QgZmFkZUluVXAgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiA2MCxcbiAgICBvcGFjaXR5OiAwLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBlYXNpbmcsXG4gICAgfSxcbiAgfSxcbn07XG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KVwiLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMTQlXCIsXG4gICAgbGVmdDogXCIyNyVcIixcbiAgICByaWdodDogXCI0MHB4XCIsXG4gICAgYm90dG9tOiBcIlwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2NjY1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxNXB4XCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgYm94U2hhZG93OiBcIjAgMCAyMHB4IGdyYXlcIixcbiAgfSxcbn07XG5Nb2RhbC5zZXRBcHBFbGVtZW50KFwiI19fbmV4dFwiKTtcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9ICh7IGltYWdlVXJsLCBpbWFnZUFsdCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxuICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhsLTQgbWItNVwiXG4gICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZCBwb3N0LXByZXZpZXcgbGlmdCBoLTEwMFwiIGhyZWY9XCIjIVwiIG9uQ2xpY2s9e29wZW5Nb2RhbH0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGl0ZW1zXCIgc3JjPXtpbWFnZVVybH0gYWx0PXtpbWFnZUFsdH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXByZXZpZXctbWV0YVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0LXByZXZpZXctbWV0YS1pbWdcIiBzcmM9XCIvaW1hZ2VzL2luZm8ucG5nXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8YSBkYXRhLThjb2RlPVwiNnJmZ2NcIj48L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscy1uYW1lXCI+XG4gICAgICAgICAgICAgICAgTcOhcyBJbmZvcm1hY2nDs25cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8TW9kYWxcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IGNsb3NlTW9kYWwoKX1cbiAgICAgICAgaWQ9XCJtb2RhbFwiXG4gICAgICA+XG4gICAgICAgIDxJdGVtTW9kYWxcbiAgICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxuICAgICAgICAgIGltZ01vZGFsPXtpbWFnZVVybH1cbiAgICAgICAgICBwcm9kdWN0TmFtZT17dGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIHByaWNlPVwiMzAuMDBcIlxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==