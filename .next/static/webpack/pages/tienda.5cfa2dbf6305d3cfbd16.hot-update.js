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
    className: "card-img-top",
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
    src: __webpack_require__(/*! ../../src/assets/img/ar.png */ "./src/assets/img/ar.png"),
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
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "post-preview-meta-details-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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

/***/ }),

/***/ "./src/assets/img/ar.png":
/*!*******************************!*\
  !*** ./src/assets/img/ar.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQ2FyZENvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1nL2FyLnBuZyJdLCJuYW1lcyI6WyJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiQ2FyZENvbXBvbmVudCIsInByb3BzIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxHQUFELEVBQU0sQ0FBQyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFmO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFNBQU8sRUFBRTtBQUNQQyxLQUFDLEVBQUUsRUFESTtBQUVQQyxXQUFPLEVBQUU7QUFGRixHQURNO0FBS2ZDLFNBQU8sRUFBRTtBQUNQRixLQUFDLEVBQUUsQ0FESTtBQUVQQyxXQUFPLEVBQUUsQ0FGRjtBQUdQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFUjtBQUZJO0FBSEw7QUFMTSxDQUFqQjs7QUFlQSxJQUFNUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksWUFBUSxFQUFFVCxRQUF0QjtBQUFnQyxhQUFTLEVBQUMsd0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw4QkFBYjtBQUE0QyxRQUFJLEVBQUMsSUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFFRSxPQUFHLEVBQUVTLEtBQUssQ0FBQ0MsUUFGYjtBQUdFLE9BQUcsRUFBRUQsS0FBSyxDQUFDRSxRQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkYsS0FBSyxDQUFDRyxLQUFsQyxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCSCxLQUFLLENBQUNJLFdBQWhDLENBRkYsQ0FORixFQVVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLE9BQUcsRUFBRUMsbUJBQU8sQ0FBQyw0REFBRCxDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLENBTEYsQ0FERixDQVZGLENBREYsQ0FERjtBQTRCRCxDQTdCRDs7S0FBTU4sYTtBQStCU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQSxpQ0FBaUMsdzFKIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RpZW5kYS41Y2ZhMmRiZjYzMDVkM2NmYmQxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldO1xuXG5jb25zdCBmYWRlSW5VcCA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHk6IDYwLFxuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IGVhc2luZyxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhsLTQgbWItNVwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZCBwb3N0LXByZXZpZXcgbGlmdCBoLTEwMFwiIGhyZWY9XCIjIVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlVXJsfVxuICAgICAgICAgIGFsdD17cHJvcHMuaW1hZ2VBbHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGFcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtaW1nXCJcbiAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vc3JjL2Fzc2V0cy9pbWcvYXIucG5nXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMtbmFtZVwiPlxuICAgICAgICAgICAgICAgIMKhUmVhbGlkYWQgQXVtZW50YWRhIVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29tcG9uZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBWUFBQUN0V0s2ZUFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFEaDVKUkVGVWVKenQzWG1RSEdVWngvSHZKaUhIaGl1Y0lVQWdvWklRQW9aSXVFTkFRVlFRVFJGT0RRRTVCQVdVUThwd0tKUWN4WDBKRkNvSVFoQUVCVkVweEtCSkVEbmtDZ2doSVJ6aE5DUWNJV1NYemJHNy92RnNzOU16L2ZidXpIYjNPejN6KzFSTmFlamQ3bWU2KzludWZ2dDlueGRFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJPckJDVUI3d2VkR3YrSGt5azJFOTkyeGZzUEpUaS9mQVloVU15V0lTQXdsaUVnTUpZaElEQ1dJU0F3bGlFZ01KWWhJRENXSVNBd2xpRWlNdkNiSUhNSnZkcmYzRzQ1RUdFLzRHRDN0TjV6SzVEVkJhazBEY0NRd0h6Z0w2T2MzSEFrb1FmemJCWGdDdUJVWUNWd0l6QVVtZVl4Sk9paEIvQmtDM0E0OEJ1eFV0R3c0Y0I4d0F4aVRjVnhTUUFtU3ZmN0FPY0Fyd0JUczlzcGxIK3g1NjFwZ1VQcWhTVEVsU0xZT0FsNEd6Z2NHUml6L0tPSy85UUZPQmhZQTN3ZDZweGFkbEZDQ1pHTXNNQk80QjlneVl2bHIyRFBIWU9CVVlHbkV6NndQM0FBOEMreVZScEJTU2dtU3JnMndnVm5QRUgxU2Z3cE1BN1lCN2dkV0FWY0RJNEJmQW0wUnYvTUZPcE50aThRamxoQWxTRHJXd0s0RUM0RGpLYjB0YXFlejFlb1NZR1hSOGcrd0VaQmZCR1k1dG5FUU1BLzRPZENZUU13U1FRbVN2SzhCTHdCWEF1dEdMSDhjYTdYNkxyQ29pM1U5RDN3Sk9CaFlHTEc4UC9CVDdQM0o0WldGSzNHVUlNa1pDVHdBUEFoc0hiSDhYYXpWYWpmS2Y2djhCMkEwbGd4TkVjczNBMzRIL0F1NzZraEM2aWxCbG1EUEFzSG5yWVRXdXc1d0JmQWlzRi9FOGhiZ0FtQVVjRWNQdGxPOG52YUluNWtBUEFYOEd0aXdCOXNxOWliaGZmZEJndXVXRkZSRFg2eGV3UGVBeFVXeEZINWNyVlpKMkJYNFQ4eTJsd0tuWWM5RFB0UkVYNnk4OHAwZ0U0SG5jSitjYzRBOU00aWpBVGdLK0Y5TUxDOWp6MFZaVTRKNDVDdEJ0Z0R1eG4weUxzRmFyYksrZFYwTHVCaTdEWFBGOWxlcytUZ3JTaENQc2s2UVJxdzV0Wm5vazI4bGNCWFJyVlpaMmdyNEUrNGtXUUZjQnF5ZFFTeEtFSSt5VEpEdkFHL2pQdWxjclZZKzdZTTFHcmhpWGdRY1RYdy9zSjVTZ25pVVJZS01CLzZOK3lTYkQreWZ3bmFUMGhzNENmZ1E5M2Q0Q210MlRvTVN4S00wRTJRd2NBdld6Y1BWT25RNi9scUh5clVlY0Iyd0duZWlUQWMyVFhpN1NoQ1Awa2lRZmxpL3FHVkVuMFN0MlB1RmpSTFlsZy9iQWcvalRwTGx3Tm5ZMi9ra0tFRThTanBCSmdHdjRqNTVIZ0hHOVhBYjFhS3I3L282Y0dBQzIxR0NlSlJVZ296QlJ1MjVUcFkzZ1VON0dtd1ZDcTZXbitMKzd2L0FyanFWVW9KNDFOTUU2ZXErdkFrNEZ4aVFVTHpWYWhPc1Y3SHJlV3MxdHAvV3EyRGRTaENQS2syUVlIUmVYTXZPbmNEbUNjZGI3WGJFZWhtNzlzbUh3SW1VTjVwUkNlSlJKUW15Ty9IdkJwN0JPdnZWcXdhc3QvRTd1UGZSZjdFK1lOMmhCUEdva2dRcG5rWXMrQ3dDanFHK2VqYkhHWWoxR3Y2TTZQM1YzYW5yYWlKQjZ2bWtXQWxjam8zanVCazdpR20rV2M2TEpxenF5bWpnajU1ajhhNmVFK1EwNEF6c3ZRZkFJY0JEMUc4ZHFrYXNZZUtram44dnhJYjFUdmNWVURXbzV3UlpVZkQvRzdGT2ZGL0JocmxlUzJVdE4zblVnQTNYblFlY0Ixd0ViRnl3ZkVYRTc5U05lazZRUWorbXMrV3FONTExcUg2QXRYelZxdkhBbzlodzNlRDdyNFdWUHhXVUlHQi9RWXRMZjRKZFFhN0hCa2J0bldsRTZkc0U2Mi9tNnF5NEg5bDBpYTk2U2hCN09EOEFtRXgwNVpDZ0Q5TjkySGlMUE9zUG5JbVZQVDBxWXZrcTRGS3MrLzZ5aU9WMVJ3bGkyb0Y3c1phYnM0bXVIRElKcTdwK01YWWJraWNOMkIrQXVkZ3p4cG9SUDNNL1ZzRHVKeWc1UHFjRUNXdkJUcUNSd0cwUnkvdGlyVHg1UzVCRzRCZkFzSWhsTDJHTkUwRW5SaW1nQkluMkhqYWh6UzVZNVpCQ0YzVXN6NU1tN05hcTBFZFlzbStQM1VKS0JDVkl2Q2V4cmhWVHNjb2hDN0dLaVhsME8vWlEzb3BkVFVaZ2pSQ3JmUVpWN1dxNUNUTXBiZGpKZFI5Mmk5TGlONXlLdFFISFlnbnlrdWRZY2tNSjBuM0xzYzU2ZWZhQzd3RHlScmRZSWpHVUlPbWFocFhYU1hvLzk4WjZJRitWOEhxbGlCSWtQU093WW5NM1l5MWh1eWUwM2drZDY3c0pPSVh1ajgrUUNpaEIwbk1GbmFXQmRxQzB6MU81aGdKM1VUckZ3VFhvT0taR096WWRXMkxWRFlzZGpoV2NPNWZ1endyVmlQV3luVWQwQVludHNHblpKQVZLa0hRc3hPYnh1RE5pMlFEQ0o3eHJrRllEY0ZqSHo3a0tTTnlOOVp1YTA2Tm94VWtKa3A2M2dXOERlMkF6MHhiYkhMdGxlb1RTV2FGMndHNmxYQVVrZ3VrVkRzVktFMGxLbENEcGV4U3JHbklNOEg3RThnbFl2Ni9DWTNFWjBRLzFTN0JKZThaamlTVXBVNEprb3czNERkWUo4bEtzVzNtaDB3bFArWHdhMXNNNHNCcDc2QitCbFQ5dFRTMVNDVkdDWkdzWjFwMThEUERuanYvMkYyd3NmS0U1V0RNdTJNU2cyMktqSGovSklFWXBvSzRtZml3QXZvVjFNMy9EOFRQbllQMi9Ic3dxS0NtbEJQRnJSc3l5eFNnNXZOTXRsa2dNSlloSWpMemVZdm1ZRjEzSzh6UTFVS2xTVnhDUkdFb1FrUmhLRUpFWVNoQ1JHSGw5U0s4MWUyR1Qxd1JtWTRVaXhETWxTSFhZR3V2TUdGaU5FcVFxNkJaTEpJWVNSQ1NHRWtRa2hoSkVKRVplSDlMSEVCNmpQUmRvOWhTTFJCdUlUU2NSYU1hT1U2N2tOVUh1QU1ZVy9Ic2NLbHhRYlVaanhiSUR6MkJEaFhORnQxZ2lNWlFnSWpHVUlDSXhsQ0FpTWZMNmtGNXJaZ1BIRmZ4N25xOUFKS3llRStROFlBVXduWEFOS2g5ZTd2aFVrLzVZcWFIRGZBZmlVejNmWW0yS1ZUUjhISnVzVXpwTnhoTDJmT3g5aHVUTUhPeXZmdkRwemhqMVhZRG5pMzR2K0xSaDcxWTJTeVBZSE5rTytDZlIrNmdkZUE3WXFadnJHbC8wdTA4bkhheTRWWklnWURNem5ZRFZ1STA2QVpwd1YxS3ZaZXNETjJEZDdLUDJTMUFUdUp3N0RpV0lSNVVtU0dCZDRHcXNSbTdVQ2ZFV1ZwbTkxdlVCVHNibVRJL2FENnV3L2JSdUJldFdnbmpVMHdRSmpBYitSdlRKMFE0OGhsVm1yMFY3QXkvaS91NFBFZTVMVlM0bGlFZEpKVWpnRzhBclJKOG9iY0J2Z1NFOTNFYTFHSTdWL0hVbHhnTGdtd2xzUnduaTBTZ3NLWUpQRXM4TWE5QlpRVDNxeEZrT25JMDFmK2JSbXNCRlFBdlIzeStvUE44M29lMDFFajVHb3hKYXIzaTJFWjF6Y0VTZFNHOEFoM2lMcm53TndCSEF1N2l2a0xjQ20zaUtUM0pxSERhTGsrdFdKR3JxdEdxekkvYWV4L1VkbmdSMjloYWQxSVJnSHNDb0U2d1Ztd2Q5WTIvUlJSc00zSUpkSGFMaWZnK1lTZzNVenBYMFRNSGVpM1RIQU96OVNCUHg5Ky85S294bFQyeEdxZUF6SmY3SG5mcDJ4TEhNRVdjTGNESDJQQ0xpZENWMnd0eENlWDlGTjhkbW5uWGRzcndHSEZoQlBDY1VyZWZHQ3RaeEFOWUM1WXJ0Zm1Dck10ZTVNL0F3c0U0RjhVaE9uVTc0eExtcWduVk13SWFRdWs3R21ZU0hCSGVsSnduUzFidWN1Y0MrWmF3dnNBL1djdGNPL0ozdVgyMGx4eVpRMnAyaUdaczl0bHk5c0dxSWk0ZytNVnVCWDJHdFlsMnBKRUc2Nmczd01mQWpLdXV4dlMrbHpjRS9xMkE5a2lQOUtMMEZhUUcrM01QMXJvM05hNzZDNkJQMUUrejlTdHo3aFhJU3BCZHdQRGFIb1NzeGJ3UTJxUFFMWVVsZHZLOVdZdFZrcEVhZFN1bkpkRVNDNngrQlRlbnN1dFVKWnJhTjB0MEVtWWoxcUhWdFl6Ykp6YjQxaXRLSC9RY1NXcmRVbVQ3QU80UVA5cDBwYmV1cjJIMi82eVNlZ2MxN1hxaXJCQmtLL0Q1bW5XK1N6c3ZMWXlLMnBlbnZhdERYQ1Iva0ZWaUxWRnI2QUQvRTNVdDJOZGE5UExnTmNpWElBR3prWTdOalBjMGR5OVBxbnQrQTlhRXEzT1oxS1cxTFBMcWU4RUhPYW1xQnJzWlpmQXljZ25VNUwwNlF1QmVVN2RnVlpXZ0czK0dRb3UyK2s4RTJKV1BGZndVblpiejlya2JxRmJjWXVUb1V0bVBQSUJNempMMGZuYzI5d1dkNGh0dVhEQ3dsZklCOWRWMC9FSGdkOThrZjkxbUN0Vjc1cUNNd3F5aVcvVHpFSUNucFJmamd0dUczRDFJLzRDemdVN3FYR0t1QWE0QkJQb0x0Y0Z0UlRFZDZqRVZTVU54cHJ4cXF1UXpCVGp4WGg4SjI3QTMyTnI0Q0xIQTc0YmltK2cxSGt2WUI0UU9jWmd0V3VYWUduaUFjMzZ1NDM1bjRNSnR3ZlB2N0RVZVM5aGpoQTN5dzMzQktOR0IvbGVjRDA2aThWM0FhK2xMNmtGNUoxeHlwWXBjVFBzRDMrQTBuVnlZVDNuZUwvWVlqYVpoSTZZUHZNSzhSNWNlVGhQZmR6WDdEa1RRMFVGcTE1RjZ2RWVYRFZFb2JEbmIxR3BHazVtaEtEL1pSUGdPcWNzTXBmWDgweTJkQWtxN2VsUGFFL1F3Ykl5Smg2d012RWQ1WHJjQU9Qb09TOUkzRHhqVVVIdmlsd0c0K2c2b3lHd0xQVW5xMXZjeG5VSktkRXlrOStFMVVOcGE4MW15TnZZTXAzaitQa2x4Qk9jbUJxeWs5Q2RxQVM3RUtpL1ZvQ3RIZFgrWmpWeFdwSXcxWU4zUlhiOW5jemVmZEEwT3dGcjJvZlRFZnpabFMxODRqK3NSb3hjcVBEdllXV2ZvR0FHZmk3alQ1Qk4wck9DRTFiakx1UW10TjJNTnBMZFd0SFlnTjBuTFY2bTNIaXRmbHRVaTNwR0FZOFhWNFc3Q2V0M21leTNBcjdCbkxOUXk0SGV2VVdXMzkxS1JLTkdEVGpCWDMvQzMrdklqZG11U2hxOG9HMlBUU3M0anZWaDlVZU85SnFTQ3BFNE93MnlwWG9ZVEN6eHhzem8ySlZFY3phQU5XMGZFTUxDbGNZK0VMUHcvVC9ZazVSVDQzR0xnRTk0UTZVYzhyTTRFTHNYY3F3MGgvNU9LR1dJblFhVmp0WGRma3BGRlhqQWVBUFZLT0wvZFUvcjVyYTJKRFRJK2p2SHE3WUVrekh5c2F0eENyVXJJSWVCK3JhTElVdTFKOWhyV2N0V0VsZy9waUQ5TnJZVmUwamJBcEZvWUNXMkRqTVVaU2ZpdlRoOEIwckluN2xUSi9WNlJMWTdIcEE2TGVObGZyWnhsd0YxYkpwUnB1QTNORlY1REtqY0dxZSt5TDllVnE5QnZPNTlxeGpvWXpzSmxxWjJMOXo2UUNTcEJrcklGTng3WVROdTNaV0t4ZlV4Wi9zZDhDWHNBNkdENkZEUy8rS0lQdDFnVWxTSHA2WXcvcUl6citkeWoyd25GanJEdjVJT3dab3hGTHBEN1k4V2pGUmp3Mlk4OHdTN0hubGNYWTg4dmIyTFBNcTloenhQS3N2cENJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJaUlpSWlJU0Y3OUg0enRrRDI3eFZqTkFBQUFBRWxGVGtTdVFtQ0NcIiJdLCJzb3VyY2VSb290IjoiIn0=