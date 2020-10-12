webpackHotUpdate_N_E("pages/tienda",{

/***/ "./pages/tienda.jsx":
/*!**************************!*\
  !*** ./pages/tienda.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_shop_components_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shop_components/HeaderTienda */ "./components/shop_components/HeaderTienda.jsx");
/* harmony import */ var _components_shop_components_FooterTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop_components/FooterTienda */ "./components/shop_components/FooterTienda.jsx");
/* harmony import */ var _components_shop_components_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop_components/ContentCategoria */ "./components/shop_components/ContentCategoria.jsx");
/* harmony import */ var _components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop_components/ContentShop */ "./components/shop_components/ContentShop.jsx");
/* harmony import */ var _components_general_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/general_components/Title */ "./components/general_components/Title.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_shop_components_CategoriaItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop_components/CategoriaItem */ "./components/shop_components/CategoriaItem.jsx");
/* harmony import */ var _components_shop_components_ContentGeneric__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shop_components/ContentGeneric */ "./components/shop_components/ContentGeneric.jsx");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/tienda.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var itemsTest = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 2", "Item 3", "Item 4", "Item 5"];
var contentItem = [{
  talla: "XL",
  precio: "$3.50",
  agregadoHace: "Agregado hace 1 mes"
}, {
  talla: "XL",
  precio: "$3.50",
  agregadoHace: "Agregado hace 1 mes"
}, {
  talla: "XL",
  precio: "$3.50",
  agregadoHace: "Agregado hace 1 mes"
}, {
  talla: "XL",
  precio: "$3.50",
  agregadoHace: "Agregado hace 1 mes"
}];

var FirstPage = function FirstPage() {
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
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "../../src/assets/img/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: "ShopAR",
    descripcion: "\xA1Selecciona tu tienda favorita y comienza a experimentar la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, itemsTest.map(function (item, index) {
    return __jsx(_components_shop_components_CategoriaItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      }
    });
  })), __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_components_shop_components_ContentGeneric__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })))))), __jsx(_components_shop_components_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }));
};

_c = FirstPage;
/* harmony default export */ __webpack_exports__["default"] = (FirstPage);

var _c;

$RefreshReg$(_c, "FirstPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGllbmRhLmpzeCJdLCJuYW1lcyI6WyJpdGVtc1Rlc3QiLCJjb250ZW50SXRlbSIsInRhbGxhIiwicHJlY2lvIiwiYWdyZWdhZG9IYWNlIiwiRmlyc3RQYWdlIiwicGFnZUV4aXQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2hCLFFBRGdCLEVBRWhCLFFBRmdCLEVBR2hCLFFBSGdCLEVBSWhCLFFBSmdCLEVBS2hCLFFBTGdCLEVBTWhCLFFBTmdCLEVBT2hCLFFBUGdCLEVBUWhCLFFBUmdCLEVBU2hCLFFBVGdCLENBQWxCO0FBV0EsSUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLE9BQUssRUFBRSxJQURUO0FBRUVDLFFBQU0sRUFBRSxPQUZWO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQURrQixFQU1sQjtBQUNFRixPQUFLLEVBQUUsSUFEVDtBQUVFQyxRQUFNLEVBQUUsT0FGVjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FOa0IsRUFXbEI7QUFDRUYsT0FBSyxFQUFFLElBRFQ7QUFFRUMsUUFBTSxFQUFFLE9BRlY7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBWGtCLEVBZ0JsQjtBQUNFRixPQUFLLEVBQUUsSUFEVDtBQUVFQyxRQUFNLEVBQUUsT0FGVjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FoQmtCLENBQXBCOztBQXVCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsV0FBTyxFQUFDLFNBSFY7QUFJRSxZQUFRLEVBQUU7QUFDUkMsY0FBUSxFQUFFO0FBQ1JDLGVBQU8sRUFBRTtBQURELE9BREY7QUFJUkMsYUFBTyxFQUFFO0FBQ1BELGVBQU8sRUFBRSxDQURGO0FBRVBFLGtCQUFVLEVBQUU7QUFDVkMsa0JBQVEsRUFBRTtBQURBO0FBRkw7QUFKRCxLQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FnQkUsTUFBQyxnRkFBRDtBQUFjLFlBQVEsRUFBQyxnQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNEVBQUQ7QUFDRSxVQUFNLEVBQUMsUUFEVDtBQUVFLGVBQVcsRUFBQyxvRkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUF1QkUsTUFBQyxnRkFBRDtBQUFXLFNBQUssRUFBQyxpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixTQUFTLENBQUNXLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUIsV0FBTyxNQUFDLGlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkEsQ0FESCxDQURGLEVBTUUsTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQURGLENBREYsQ0FERixDQXZCRixFQXVDRSxNQUFDLGdGQUFEO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0YsQ0FERjtBQTJDRCxDQTVDRDs7S0FBTVIsUztBQThDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGllbmRhLmVlNjllOWJmMTJiZWM4ZjllNjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJUaWVuZGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0hlYWRlclRpZW5kYVwiO1xuaW1wb3J0IEZvb3RlclRpZW5kYSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvRm9vdGVyVGllbmRhXCI7XG5pbXBvcnQgQ29udGVudENhdGVnb3JpYSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudENhdGVnb3JpYVwiO1xuaW1wb3J0IENvbnRlbnRTaG9wIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9Db250ZW50U2hvcFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBDYXRlZ29yaWFJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9DYXRlZ29yaWFJdGVtXCI7XG5pbXBvcnQgQ29udGVudEdlbmVyaWMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0NvbnRlbnRHZW5lcmljXCI7XG5cbmNvbnN0IGl0ZW1zVGVzdCA9IFtcbiAgXCJJdGVtIDFcIixcbiAgXCJJdGVtIDJcIixcbiAgXCJJdGVtIDNcIixcbiAgXCJJdGVtIDRcIixcbiAgXCJJdGVtIDVcIixcbiAgXCJJdGVtIDJcIixcbiAgXCJJdGVtIDNcIixcbiAgXCJJdGVtIDRcIixcbiAgXCJJdGVtIDVcIixcbl07XG5jb25zdCBjb250ZW50SXRlbSA9IFtcbiAge1xuICAgIHRhbGxhOiBcIlhMXCIsXG4gICAgcHJlY2lvOiBcIiQzLjUwXCIsXG4gICAgYWdyZWdhZG9IYWNlOiBcIkFncmVnYWRvIGhhY2UgMSBtZXNcIixcbiAgfSxcbiAge1xuICAgIHRhbGxhOiBcIlhMXCIsXG4gICAgcHJlY2lvOiBcIiQzLjUwXCIsXG4gICAgYWdyZWdhZG9IYWNlOiBcIkFncmVnYWRvIGhhY2UgMSBtZXNcIixcbiAgfSxcbiAge1xuICAgIHRhbGxhOiBcIlhMXCIsXG4gICAgcHJlY2lvOiBcIiQzLjUwXCIsXG4gICAgYWdyZWdhZG9IYWNlOiBcIkFncmVnYWRvIGhhY2UgMSBtZXNcIixcbiAgfSxcbiAge1xuICAgIHRhbGxhOiBcIlhMXCIsXG4gICAgcHJlY2lvOiBcIiQzLjUwXCIsXG4gICAgYWdyZWdhZG9IYWNlOiBcIkFncmVnYWRvIGhhY2UgMSBtZXNcIixcbiAgfSxcbl07XG5cbmNvbnN0IEZpcnN0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyVGllbmRhIGltYWdlVXJsPVwiLi4vLi4vc3JjL2Fzc2V0cy9pbWcvZm90bzMuanBnXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdHVsbz1cIlNob3BBUlwiXG4gICAgICAgICAgZGVzY3JpcGNpb249XCLCoVNlbGVjY2lvbmEgdHUgdGllbmRhIGZhdm9yaXRhIHkgY29taWVuemEgYSBleHBlcmltZW50YXIgbGFcbiAgICAgICAgcmVhbGlkYWQgYXVtZW50YWRhIVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlclRpZW5kYT5cbiAgICAgIDxDb250YWluZXIgdGl0bGU9XCJTaG9wQVIgLSBUaWVuZGFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPENvbnRlbnRDYXRlZ29yaWE+XG4gICAgICAgICAgICAgICAge2l0ZW1zVGVzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPENhdGVnb3JpYUl0ZW0gLz47XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQ29udGVudENhdGVnb3JpYT5cbiAgICAgICAgICAgICAgPENvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICAgIDxDb250ZW50R2VuZXJpYyAvPlxuICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyVGllbmRhIGhyZWY9XCIvXCIgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXJzdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9