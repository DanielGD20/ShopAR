webpackHotUpdate_N_E("pages/tienda",{

/***/ "./components/general_components/CardComponent.jsx":
/*!*********************************************************!*\
  !*** ./components/general_components/CardComponent.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/components/general_components/CardComponent.jsx";


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

var CardComponent = function CardComponent(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: fadeInUp,
    className: "col-md-6 col-xl-4 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "card post-preview lift h-100",
    href: "#!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "card-img-top items",
    src: props.imageUrl,
    alt: props.imageAlt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, props.title), __jsx("p", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, props.description)), __jsx("div", {
    className: "card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "post-preview-meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "post-preview-meta-img",
    src: "/images/ar.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "post-preview-meta-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "post-preview-meta-details-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "\xA1Realidad Aumentada!"))))));
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQ2FyZENvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZWFzaW5nIiwiZmFkZUluVXAiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkNhcmRDb21wb25lbnQiLCJwcm9wcyIsImltYWdlVXJsIiwiaW1hZ2VBbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxHQUFELEVBQU0sQ0FBQyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFmO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQU8sRUFBRTtBQUNQQyxLQUFDLEVBQUUsRUFESTtBQUVQQyxXQUFPLEVBQUU7QUFGRixHQURNO0FBS2ZDLFNBQU8sRUFBRTtBQUNQRixLQUFDLEVBQUUsQ0FESTtBQUVQQyxXQUFPLEVBQUUsQ0FGRjtBQUdQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFUjtBQUZJO0FBSEw7QUFMTSxDQUFqQjs7QUFlQSxJQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksWUFBUSxFQUFFVCxRQUF0QjtBQUFnQyxhQUFTLEVBQUMsd0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUE0QyxRQUFJLEVBQUMsSUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG9CQURaO0FBRUUsT0FBRyxFQUFFUyxLQUFLLENBQUNDLFFBRmI7QUFHRSxPQUFHLEVBQUVELEtBQUssQ0FBQ0UsUUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJGLEtBQUssQ0FBQ0csS0FBbEMsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkgsS0FBSyxDQUFDSSxXQUFoQyxDQUZGLENBTkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBdUMsT0FBRyxFQUFDLGdCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixDQUZGLENBREYsQ0FWRixDQURGLENBREY7QUF5QkQsQ0ExQkQ7O0tBQU1MLGE7QUE0QlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpZW5kYS45Njk1Y2YxYjcyMTVhMmFkNjZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldO1xuXG5jb25zdCBmYWRlSW5VcCA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHk6IDYwLFxuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IGVhc2luZyxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhsLTQgbWItNVwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZCBwb3N0LXByZXZpZXcgbGlmdCBoLTEwMFwiIGhyZWY9XCIjIVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIGl0ZW1zXCJcbiAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlVXJsfVxuICAgICAgICAgIGFsdD17cHJvcHMuaW1hZ2VBbHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtaW1nXCIgc3JjPVwiL2ltYWdlcy9hci5wbmdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscy1uYW1lXCI+XG4gICAgICAgICAgICAgICAgwqFSZWFsaWRhZCBBdW1lbnRhZGEhXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9