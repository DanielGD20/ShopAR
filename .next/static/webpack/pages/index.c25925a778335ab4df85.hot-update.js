webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_general_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/general_components/Title */ "./components/general_components/Title.jsx");
/* harmony import */ var _components_index_components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index_components/Header */ "./components/index_components/Header.jsx");
/* harmony import */ var _components_index_components_MenuTiendas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index_components/MenuTiendas */ "./components/index_components/MenuTiendas.jsx");
/* harmony import */ var _components_index_components_ItemTienda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index_components/ItemTienda */ "./components/index_components/ItemTienda.jsx");
/* harmony import */ var _components_index_components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index_components/Footer */ "./components/index_components/Footer.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import fetch from "isomorphic-fetch";








var Index = function Index(props) {
  console.log(props.shops);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__["motion"].div, {
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
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_index_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    titulo: "ShopAR",
    descripcion: "\xA1Selecciona tu tienda favorita y comienza a experimentar la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ShopAR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_components_index_components_MenuTiendas__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.shops.map(function (tienda) {
    return __jsx(_components_index_components_ItemTienda__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: tienda.title,
      alt: tienda.alt,
      image: tienda.image,
      href: tienda.href,
      name: tienda.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    });
  }))), __jsx(_components_index_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }));
};

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var response, shops;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/shops");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            shops = _context.sent;
            console.log(shops);
            return _context.abrupt("return", {
              shops: shops
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic2hvcHMiLCJwYWdlRXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWFwIiwidGllbmRhIiwidGl0bGUiLCJhbHQiLCJpbWFnZSIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxLQUFsQjtBQUNBLFNBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsV0FBTyxFQUFDLFNBSFY7QUFJRSxZQUFRLEVBQUU7QUFDUkMsY0FBUSxFQUFFO0FBQ1JDLGVBQU8sRUFBRTtBQURELE9BREY7QUFJUkMsYUFBTyxFQUFFO0FBQ1BELGVBQU8sRUFBRSxDQURGO0FBRVBFLGtCQUFVLEVBQUU7QUFDVkMsa0JBQVEsRUFBRTtBQURBO0FBRkw7QUFKRCxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkUsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUNFLFVBQU0sRUFBQyxRQURUO0FBRUUsZUFBVyxFQUFDLG9GQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhCRixFQXVCRSxNQUFDLGdGQUFEO0FBQVcsU0FBSyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsS0FBSyxDQUFDRyxLQUFOLENBQVlNLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFdBQ0UsTUFBQywrRUFBRDtBQUNFLFdBQUssRUFBRUEsTUFBTSxDQUFDQyxLQURoQjtBQUVFLFNBQUcsRUFBRUQsTUFBTSxDQUFDRSxHQUZkO0FBR0UsV0FBSyxFQUFFRixNQUFNLENBQUNHLEtBSGhCO0FBSUUsVUFBSSxFQUFFSCxNQUFNLENBQUNJLElBSmY7QUFLRSxVQUFJLEVBQUVKLE1BQU0sQ0FBQ0MsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFTRCxHQVZBLENBREgsQ0FERixDQXZCRixFQXNDRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0Q0YsQ0FERjtBQTBDRCxDQTVDRDs7S0FBTVosSzs7QUE4Q05BLEtBQUssQ0FBQ2dCLGVBQU47QUFBQSw4TEFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQ0MsS0FBSyxDQUFDLGlDQUFELENBRE47O0FBQUE7QUFDaEJDLG9CQURnQjtBQUFBO0FBQUEsbUJBRUZBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZFOztBQUFBO0FBRWhCaEIsaUJBRmdCO0FBR3RCRixtQkFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFIc0IsNkNBSWY7QUFBRUEsbUJBQUssRUFBTEE7QUFBRixhQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9lSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjU5MjVhNzc4MzM1YWI0ZGY4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhfY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBNZW51VGllbmRhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL01lbnVUaWVuZGFzXCI7XG5pbXBvcnQgSXRlbVRpZW5kYSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL0l0ZW1UaWVuZGFcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXhfY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzLnNob3BzKTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXR1bG89XCJTaG9wQVJcIlxuICAgICAgICAgIGRlc2NyaXBjaW9uPVwiwqFTZWxlY2Npb25hIHR1IHRpZW5kYSBmYXZvcml0YSB5IGNvbWllbnphIGEgZXhwZXJpbWVudGFyIGxhXG4gICAgICAgIHJlYWxpZGFkIGF1bWVudGFkYSFcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q29udGFpbmVyIHRpdGxlPVwiU2hvcEFSXCI+XG4gICAgICAgIDxNZW51VGllbmRhcz5cbiAgICAgICAgICB7cHJvcHMuc2hvcHMubWFwKCh0aWVuZGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJdGVtVGllbmRhXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpZW5kYS50aXRsZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3RpZW5kYS5hbHR9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3RpZW5kYS5pbWFnZX1cbiAgICAgICAgICAgICAgICBocmVmPXt0aWVuZGEuaHJlZn1cbiAgICAgICAgICAgICAgICBuYW1lPXt0aWVuZGEudGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L01lbnVUaWVuZGFzPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zaG9wc1wiKTtcbiAgY29uc3Qgc2hvcHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHNob3BzKTtcbiAgcmV0dXJuIHsgc2hvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==