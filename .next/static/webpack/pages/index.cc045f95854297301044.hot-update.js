webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_general_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/general_components/Title */ "./components/general_components/Title.jsx");
/* harmony import */ var _components_index_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index_components/Header */ "./components/index_components/Header.jsx");
/* harmony import */ var _components_index_components_MenuTiendas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/index_components/MenuTiendas */ "./components/index_components/MenuTiendas.jsx");
/* harmony import */ var _components_index_components_ItemTienda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index_components/ItemTienda */ "./components/index_components/ItemTienda.jsx");
/* harmony import */ var _components_index_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index_components/Footer */ "./components/index_components/Footer.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import fetch from "isomorphic-fetch";








var Index = function Index(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    exit: "pageExit",
    initial: "initial",
    animate: "animate",
    variants: {
      pageExit: {
        opacity: 0
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.6
        }
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_index_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "ShopAR",
    descripcion: "\xA1Selecciona tu tienda favorita y comienza a experimentar la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_components_index_components_MenuTiendas__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, props.shops.data.map(function (tienda) {
    return __jsx(_components_index_components_ItemTienda__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: tienda.title,
      alt: tienda.alt,
      image: tienda.image,
      href: tienda.href,
      name: tienda.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    });
  }))), __jsx(_components_index_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
}; // Index.getInitialProps = async (ctx) => {
//   const response = await fetch("http://localhost:3000/api/shops");
//   const data = await response.json();
//   return { shops: data };
// };


_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJwYWdlRXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic2hvcHMiLCJkYXRhIiwibWFwIiwidGllbmRhIiwidGl0bGUiLCJhbHQiLCJpbWFnZSIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN2QixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxXQUFPLEVBQUMsU0FGVjtBQUdFLFdBQU8sRUFBQyxTQUhWO0FBSUUsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBRTtBQUNSQyxlQUFPLEVBQUU7QUFERCxPQURGO0FBSVJDLGFBQU8sRUFBRTtBQUNQRCxlQUFPLEVBQUUsQ0FERjtBQUVQRSxrQkFBVSxFQUFFO0FBQ1ZDLGtCQUFRLEVBQUU7QUFEQTtBQUZMO0FBSkQsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZ0JFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNEVBQUQ7QUFDRSxVQUFNLEVBQUMsUUFEVDtBQUVFLGVBQVcsRUFBQyxvRkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUF1QkUsTUFBQyxnRkFBRDtBQUFXLFNBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxJQUFaLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFDaEMsV0FDRSxNQUFDLCtFQUFEO0FBQ0UsV0FBSyxFQUFFQSxNQUFNLENBQUNDLEtBRGhCO0FBRUUsU0FBRyxFQUFFRCxNQUFNLENBQUNFLEdBRmQ7QUFHRSxXQUFLLEVBQUVGLE1BQU0sQ0FBQ0csS0FIaEI7QUFJRSxVQUFJLEVBQUVILE1BQU0sQ0FBQ0ksSUFKZjtBQUtFLFVBQUksRUFBRUosTUFBTSxDQUFDQyxLQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVNELEdBVkEsQ0FESCxDQURGLENBdkJGLEVBc0NFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDRixDQURGO0FBMENELENBM0NELEMsQ0E2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBakRNWCxLO0FBbURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYzA0NWY5NTg1NDI5NzMwMTA0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhfY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNZW51VGllbmRhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL01lbnVUaWVuZGFzXCI7XG5pbXBvcnQgSXRlbVRpZW5kYSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL0l0ZW1UaWVuZGFcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhfY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGV4aXQ9XCJwYWdlRXhpdFwiXG4gICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICBwYWdlRXhpdDoge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0dWxvPVwiU2hvcEFSXCJcbiAgICAgICAgICBkZXNjcmlwY2lvbj1cIsKhU2VsZWNjaW9uYSB0dSB0aWVuZGEgZmF2b3JpdGEgeSBjb21pZW56YSBhIGV4cGVyaW1lbnRhciBsYVxuICAgICAgICByZWFsaWRhZCBhdW1lbnRhZGEhXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPENvbnRhaW5lciB0aXRsZT1cIlNob3BBUlwiPlxuICAgICAgICA8TWVudVRpZW5kYXM+XG4gICAgICAgICAge3Byb3BzLnNob3BzLmRhdGEubWFwKCh0aWVuZGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJdGVtVGllbmRhXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpZW5kYS50aXRsZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3RpZW5kYS5hbHR9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3RpZW5kYS5pbWFnZX1cbiAgICAgICAgICAgICAgICBocmVmPXt0aWVuZGEuaHJlZn1cbiAgICAgICAgICAgICAgICBuYW1lPXt0aWVuZGEudGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L01lbnVUaWVuZGFzPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zaG9wc1wiKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgcmV0dXJuIHsgc2hvcHM6IGRhdGEgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==