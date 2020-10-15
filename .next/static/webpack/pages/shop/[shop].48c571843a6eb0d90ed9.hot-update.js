webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./pages/shop/[shop].jsx":
/*!*******************************!*\
  !*** ./pages/shop/[shop].jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_shop_components_HeaderTienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop_components/HeaderTienda */ "./components/shop_components/HeaderTienda.jsx");
/* harmony import */ var _components_shop_components_FooterTienda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop_components/FooterTienda */ "./components/shop_components/FooterTienda.jsx");
/* harmony import */ var _components_shop_components_ContentCategoria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shop_components/ContentCategoria */ "./components/shop_components/ContentCategoria.jsx");
/* harmony import */ var _components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shop_components/ContentShop */ "./components/shop_components/ContentShop.jsx");
/* harmony import */ var _components_general_components_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general_components/Title */ "./components/general_components/Title.jsx");
/* harmony import */ var _components_shop_components_CategoriaItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shop_components/CategoriaItem */ "./components/shop_components/CategoriaItem.jsx");
/* harmony import */ var _components_general_components_CardComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/general_components/CardComponent */ "./components/general_components/CardComponent.jsx");
/* harmony import */ var _components_general_components_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/general_components/BiggerCardComponent */ "./components/general_components/BiggerCardComponent.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);



var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/shop/[shop].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var fakeData = [1, 2, 3, 4];

var ShopPage = function ShopPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      categoryClicked = _useState[0],
      setCategoryClicked = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  var shop = router.query.shop;
  var category = props.name + " Comunica";

  var renderDataCategory = function renderDataCategory(newState, nameCategory) {
    console.log(nameCategory);
    category = nameCategory;
    setCategoryClicked(newState);
  };

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_12__["motion"].div, {
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
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_HeaderTienda__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_ContentCategoria__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, props.categorias.map(function (categoria) {
    return __jsx(_components_shop_components_CategoriaItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
      categoryUrl: categoria.url,
      categoryName: categoria.name,
      categoryAlt: categoria.name,
      color: categoria.color,
      changeDataShop: renderDataCategory,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, fakeData.map(function (item) {
    return __jsx(_components_general_components_CardComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      imageUrl: "https://source.unsplash.com/random",
      imageAlt: "Al",
      title: "Element",
      description: "Element 1 description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    });
  })) : __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  })))))), __jsx(_components_shop_components_FooterTienda__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "SaJSxK9maYzLh5P5NVWhltBHhFw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"]];
});

_c = ShopPage;

ShopPage.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var response, categorias;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3000/api/categorias");

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            categorias = _context.sent;
            return _context.abrupt("return", {
              categorias: categorias
            });

          case 7:
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

/* harmony default export */ __webpack_exports__["default"] = (ShopPage);

var _c;

$RefreshReg$(_c, "ShopPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZha2VEYXRhIiwiU2hvcFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY2F0ZWdvcnlDbGlja2VkIiwic2V0Q2F0ZWdvcnlDbGlja2VkIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvcCIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJuYW1lIiwicmVuZGVyRGF0YUNhdGVnb3J5IiwibmV3U3RhdGUiLCJuYW1lQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicGFnZUV4aXQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhdGVnb3JpYXMiLCJtYXAiLCJjYXRlZ29yaWEiLCJ1cmwiLCJjb2xvciIsIml0ZW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBakI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ29CQyxzREFBUSxDQUFDLEtBQUQsQ0FENUI7QUFBQSxNQUNuQkMsZUFEbUI7QUFBQSxNQUNGQyxrQkFERTs7QUFFMUIsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUYwQixNQUdsQkMsSUFIa0IsR0FHVEYsTUFBTSxDQUFDRyxLQUhFLENBR2xCRCxJQUhrQjtBQUkxQixNQUFJRSxRQUFRLEdBQUdSLEtBQUssQ0FBQ1MsSUFBTixHQUFhLFdBQTVCOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJC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R0FBTVQsUTtVQUVXTSxzRDs7O0tBRlhOLFE7O0FBb0ZOQSxRQUFRLENBQUMyQixlQUFUO0FBQUEsOExBQTJCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0ZDLEtBQUssQ0FBQyxzQ0FBRCxDQURIOztBQUFBO0FBQ25CQyxvQkFEbUI7QUFBQTtBQUFBLG1CQUVBQSxRQUFRLENBQUNDLElBQVQsRUFGQTs7QUFBQTtBQUVuQlYsc0JBRm1CO0FBQUEsNkNBR2xCO0FBQUVBLHdCQUFVLEVBQVZBO0FBQUYsYUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVyQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL1tzaG9wXS40OGM1NzE4NDNhNmViMGQ5MGVkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgSGVhZGVyVGllbmRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9IZWFkZXJUaWVuZGFcIjtcbmltcG9ydCBGb290ZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0Zvb3RlclRpZW5kYVwiO1xuaW1wb3J0IENvbnRlbnRDYXRlZ29yaWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0NvbnRlbnRDYXRlZ29yaWFcIjtcbmltcG9ydCBDb250ZW50U2hvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudFNob3BcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBDYXRlZ29yaWFJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9DYXRlZ29yaWFJdGVtXCI7XG5pbXBvcnQgQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQ2FyZENvbXBvbmVudFwiO1xuaW1wb3J0IEJpZ2dlckNhcmRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2VuZXJhbF9jb21wb25lbnRzL0JpZ2dlckNhcmRDb21wb25lbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBmYWtlRGF0YSA9IFsxLCAyLCAzLCA0XTtcblxuY29uc3QgU2hvcFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NhdGVnb3J5Q2xpY2tlZCwgc2V0Q2F0ZWdvcnlDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2hvcCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBsZXQgY2F0ZWdvcnkgPSBwcm9wcy5uYW1lICsgXCIgQ29tdW5pY2FcIjtcblxuICBjb25zdCByZW5kZXJEYXRhQ2F0ZWdvcnkgPSAobmV3U3RhdGUsIG5hbWVDYXRlZ29yeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG5hbWVDYXRlZ29yeSk7XG4gICAgY2F0ZWdvcnkgPSBuYW1lQ2F0ZWdvcnk7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBleGl0PVwicGFnZUV4aXRcIlxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgcGFnZUV4aXQ6IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkZXJUaWVuZGEgaW1hZ2VVcmw9XCIvaW1hZ2VzL2ZvdG8zLmpwZ1wiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXR1bG89e3Nob3B9XG4gICAgICAgICAgZGVzY3JpcGNpb249XCLCoVNlbGVjY2lvbmEgbGEgY2F0ZWdvcsOtYSBkZSBpbnRlcsOpcyB5IGRlaXNmcnV0YSBkZSBsYSByZWFsaWRhZCBhdW1lbnRhZGEhXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZGVyVGllbmRhPlxuICAgICAgPENvbnRhaW5lciB0aXRsZT1cIlNob3BBUiAtIFRpZW5kYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8Q29udGVudENhdGVnb3JpYT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2F0ZWdvcmlhcy5tYXAoKGNhdGVnb3JpYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVVybD17Y2F0ZWdvcmlhLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeU5hbWU9e2NhdGVnb3JpYS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5QWx0PXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2F0ZWdvcmlhLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURhdGFTaG9wPXtyZW5kZXJEYXRhQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NvbnRlbnRDYXRlZ29yaWE+XG5cbiAgICAgICAgICAgICAge2NhdGVnb3J5Q2xpY2tlZCA/IChcbiAgICAgICAgICAgICAgICA8Q29udGVudFNob3AgbmFtZT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAge2Zha2VEYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ9XCJBbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbGVtZW50IDEgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcCBuYW1lPXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICA8QmlnZ2VyQ2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS92WkpkWWw1SlZYWS82NjB4MzYwXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCaWdnZXIgY29tcG9uZW50IHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJiaWdnZXIgY29tcG9uZW50IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlclRpZW5kYSBocmVmPVwiL1wiIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuU2hvcFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYXRlZ29yaWFzXCIpO1xuICBjb25zdCBjYXRlZ29yaWFzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyBjYXRlZ29yaWFzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=