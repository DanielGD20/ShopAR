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
/* harmony import */ var _components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/general_components/header/Title */ "./components/general_components/header/Title.jsx");
/* harmony import */ var _components_index_components_topbot_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index_components/topbot/Header */ "./components/index_components/topbot/Header.jsx");
/* harmony import */ var _components_index_components_topbot_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index_components/topbot/Footer */ "./components/index_components/topbot/Footer.jsx");
/* harmony import */ var _components_index_components_tiendas_MenuTiendas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index_components/tiendas/MenuTiendas */ "./components/index_components/tiendas/MenuTiendas.jsx");
/* harmony import */ var _components_index_components_tiendas_ItemTienda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index_components/tiendas/ItemTienda */ "./components/index_components/tiendas/ItemTienda.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");



var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
//Import de conponentes de react





 //Import de librerias externas



var Index = function Index(_ref) {
  var shops = _ref.shops;
  //Funcion Principal
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
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_index_components_topbot_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    titulo: "ShopAR",
    descripcion: "\xA1Selecciona tu tienda favorita y comienza a experimentar la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ShopAR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_components_index_components_tiendas_MenuTiendas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, shops.map(function (tienda) {
    return __jsx(_components_index_components_tiendas_ItemTienda__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: tienda.title,
      alt: tienda.alt,
      image: tienda.image,
      href: tienda.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    });
  }))), __jsx(_components_index_components_topbot_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
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
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4Iiwic2hvcHMiLCJwYWdlRXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWFwIiwidGllbmRhIiwidGl0bGUiLCJhbHQiLCJpbWFnZSIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzNCO0FBQ0EsU0FDRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsV0FBTyxFQUFDLFNBRlY7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUlFLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUU7QUFDUkMsZUFBTyxFQUFFO0FBREQsT0FERjtBQUlSQyxhQUFPLEVBQUU7QUFDUEQsZUFBTyxFQUFFLENBREY7QUFFUEUsa0JBQVUsRUFBRTtBQUNWQyxrQkFBUSxFQUFFO0FBREE7QUFGTDtBQUpELEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWdCRSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1GQUFEO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxlQUFXLEVBQUMsb0ZBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBaEJGLEVBdUJFLE1BQUMsZ0ZBQUQ7QUFBVyxTQUFLLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxNQUFELEVBQVk7QUFDckIsV0FDRSxNQUFDLHVGQUFEO0FBQ0UsV0FBSyxFQUFFQSxNQUFNLENBQUNDLEtBRGhCO0FBRUUsU0FBRyxFQUFFRCxNQUFNLENBQUNFLEdBRmQ7QUFHRSxXQUFLLEVBQUVGLE1BQU0sQ0FBQ0csS0FIaEI7QUFJRSxVQUFJLEVBQUVILE1BQU0sQ0FBQ0ksSUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRCxHQVRBLENBREgsQ0FERixDQXZCRixFQXFDRSxNQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ0YsQ0FERjtBQXlDRCxDQTNDRDs7S0FBTVosSzs7QUE2Q05BLEtBQUssQ0FBQ2EsZUFBTjtBQUFBLCtMQUF3QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNDQyxLQUFLLENBQUMsaUNBQUQsQ0FETjs7QUFBQTtBQUNoQkMsb0JBRGdCO0FBQUE7QUFBQSxtQkFFRkEsUUFBUSxDQUFDQyxJQUFULEVBRkU7O0FBQUE7QUFFaEJoQixpQkFGZ0I7QUFHdEJpQixtQkFBTyxDQUFDQyxHQUFSLENBQVlsQixLQUFaO0FBSHNCLDZDQUlmO0FBQUVBLG1CQUFLLEVBQUxBO0FBQUYsYUFKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPZUQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA5YWFmNDM5NTAzZWM2OTFkNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0IGRlIGNvbnBvbmVudGVzIGRlIHJlYWN0XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvaGVhZGVyL1RpdGxlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4X2NvbXBvbmVudHMvdG9wYm90L0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL3RvcGJvdC9Gb290ZXJcIjtcbmltcG9ydCBNZW51VGllbmRhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleF9jb21wb25lbnRzL3RpZW5kYXMvTWVudVRpZW5kYXNcIjtcbmltcG9ydCBJdGVtVGllbmRhIGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4X2NvbXBvbmVudHMvdGllbmRhcy9JdGVtVGllbmRhXCI7XG5cbi8vSW1wb3J0IGRlIGxpYnJlcmlhcyBleHRlcm5hc1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgSW5kZXggPSAoeyBzaG9wcyB9KSA9PiB7XG4gIC8vRnVuY2lvbiBQcmluY2lwYWxcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXR1bG89XCJTaG9wQVJcIlxuICAgICAgICAgIGRlc2NyaXBjaW9uPVwiwqFTZWxlY2Npb25hIHR1IHRpZW5kYSBmYXZvcml0YSB5IGNvbWllbnphIGEgZXhwZXJpbWVudGFyIGxhXG4gICAgICAgIHJlYWxpZGFkIGF1bWVudGFkYSFcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q29udGFpbmVyIHRpdGxlPVwiU2hvcEFSXCI+XG4gICAgICAgIDxNZW51VGllbmRhcz5cbiAgICAgICAgICB7c2hvcHMubWFwKCh0aWVuZGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJdGVtVGllbmRhXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpZW5kYS50aXRsZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3RpZW5kYS5hbHR9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3RpZW5kYS5pbWFnZX1cbiAgICAgICAgICAgICAgICBocmVmPXt0aWVuZGEuaHJlZn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvTWVudVRpZW5kYXM+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3BzXCIpO1xuICBjb25zdCBzaG9wcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coc2hvcHMpO1xuICByZXR1cm4geyBzaG9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9