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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_HeaderTienda__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    titulo: props.name,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_ContentCategoria__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 56,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
        lineNumber: 71,
        columnNumber: 23
      }
    });
  })) : __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  })))))), __jsx(_components_shop_components_FooterTienda__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "IZrmewxmWNv8z1czSWAquT/14fQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZha2VEYXRhIiwiU2hvcFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwiY2F0ZWdvcnlDbGlja2VkIiwic2V0Q2F0ZWdvcnlDbGlja2VkIiwiY2F0ZWdvcnkiLCJuYW1lIiwicmVuZGVyRGF0YUNhdGVnb3J5IiwibmV3U3RhdGUiLCJuYW1lQ2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicGFnZUV4aXQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhdGVnb3JpYXMiLCJtYXAiLCJjYXRlZ29yaWEiLCJ1cmwiLCJjb2xvciIsIml0ZW0iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFqQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDb0JDLHNEQUFRLENBQUMsS0FBRCxDQUQ1QjtBQUFBLE1BQ25CQyxlQURtQjtBQUFBLE1BQ0ZDLGtCQURFOztBQUUxQixNQUFJQyxRQUFRLEdBQUdKLEtBQUssQ0FBQ0ssSUFBTixHQUFhLFdBQTVCOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFXQyxZQUFYLEVBQTRCO0FBQ3JEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWjtBQUNBSixZQUFRLEdBQUdJLFlBQVg7QUFDQUwsc0JBQWtCLENBQUNJLFFBQUQsQ0FBbEI7QUFDRCxHQUpE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QUFELENBREg7O0FBQUE7QUFDbkJDLG9CQURtQjtBQUFBO0FBQUEsbUJBRUFBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZBOztBQUFBO0FBRW5CVixzQkFGbUI7QUFBQSw2Q0FHbEI7QUFBRUEsd0JBQVUsRUFBVkE7QUFBRixhQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWpCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvW3Nob3BdLjMzNDI0YzM2NTQ1ZDdkZDM2OWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0hlYWRlclRpZW5kYVwiO1xuaW1wb3J0IEZvb3RlclRpZW5kYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvRm9vdGVyVGllbmRhXCI7XG5pbXBvcnQgQ29udGVudENhdGVnb3JpYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudENhdGVnb3JpYVwiO1xuaW1wb3J0IENvbnRlbnRTaG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9Db250ZW50U2hvcFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IENhdGVnb3JpYUl0ZW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL0NhdGVnb3JpYUl0ZW1cIjtcbmltcG9ydCBDYXJkQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9DYXJkQ29tcG9uZW50XCI7XG5pbXBvcnQgQmlnZ2VyQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvQmlnZ2VyQ2FyZENvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBmYWtlRGF0YSA9IFsxLCAyLCAzLCA0XTtcblxuY29uc3QgU2hvcFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NhdGVnb3J5Q2xpY2tlZCwgc2V0Q2F0ZWdvcnlDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IGNhdGVnb3J5ID0gcHJvcHMubmFtZSArIFwiIENvbXVuaWNhXCI7XG5cbiAgY29uc3QgcmVuZGVyRGF0YUNhdGVnb3J5ID0gKG5ld1N0YXRlLCBuYW1lQ2F0ZWdvcnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lQ2F0ZWdvcnkpO1xuICAgIGNhdGVnb3J5ID0gbmFtZUNhdGVnb3J5O1xuICAgIHNldENhdGVnb3J5Q2xpY2tlZChuZXdTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyVGllbmRhIGltYWdlVXJsPVwiL2ltYWdlcy9mb3RvMy5qcGdcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0dWxvPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIGRlc2NyaXBjaW9uPVwiwqFTZWxlY2Npb25hIGxhIGNhdGVnb3LDrWEgZGUgaW50ZXLDqXMgeSBkZWlzZnJ1dGEgZGUgbGEgcmVhbGlkYWQgYXVtZW50YWRhIVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlclRpZW5kYT5cbiAgICAgIDxDb250YWluZXIgdGl0bGU9XCJTaG9wQVIgLSBUaWVuZGFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPENvbnRlbnRDYXRlZ29yaWE+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNhdGVnb3JpYXMubWFwKChjYXRlZ29yaWEpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlVcmw9e2NhdGVnb3JpYS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lPXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFsdD17Y2F0ZWdvcmlhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NhdGVnb3JpYS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhU2hvcD17cmVuZGVyRGF0YUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Db250ZW50Q2F0ZWdvcmlhPlxuXG4gICAgICAgICAgICAgIHtjYXRlZ29yeUNsaWNrZWQgPyAoXG4gICAgICAgICAgICAgICAgPENvbnRlbnRTaG9wIG5hbWU9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICAgIHtmYWtlRGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQWx0PVwiQWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRWxlbWVudCAxIGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8Q29udGVudFNob3AgbmFtZT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgPEJpZ2dlckNhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vdlpKZFlsNUpWWFkvNjYweDM2MFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmlnZ2VyIGNvbXBvbmVudCB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmlnZ2VyIGNvbXBvbmVudCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFNob3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXJUaWVuZGEgaHJlZj1cIi9cIiAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cblNob3BQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY2F0ZWdvcmlhc1wiKTtcbiAgY29uc3QgY2F0ZWdvcmlhcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHsgY2F0ZWdvcmlhcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9