webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./pages/shop/[shop].jsx":
/*!*******************************!*\
  !*** ./pages/shop/[shop].jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shop_components/topbot/HeaderTienda */ "./components/shop_components/topbot/HeaderTienda.jsx");
/* harmony import */ var _components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop_components/topbot/FooterTienda */ "./components/shop_components/topbot/FooterTienda.jsx");
/* harmony import */ var _components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop_components/categorias/ContentCategoria */ "./components/shop_components/categorias/ContentCategoria.jsx");
/* harmony import */ var _components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shop_components/ContentShop */ "./components/shop_components/ContentShop.jsx");
/* harmony import */ var _components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/general_components/header/Title */ "./components/general_components/header/Title.jsx");
/* harmony import */ var _components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shop_components/categorias/CategoriaItem */ "./components/shop_components/categorias/CategoriaItem.jsx");
/* harmony import */ var _components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/general_components/card/CardComponent */ "./components/general_components/card/CardComponent.jsx");
/* harmony import */ var _components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/general_components/card/BiggerCardComponent */ "./components/general_components/card/BiggerCardComponent.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/shop/[shop].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var ShopPage = function ShopPage() {
  _s();

  //Controladores de estado
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      categoryClicked = _useState[0],
      setCategoryClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      nameCategory = _useState2[0],
      setNameCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataShopAsync = _useState3[0],
      setDataShopAsync = _useState3[1]; //Multiples fetch por componentes


  var categorias = [];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_13__["default"])("/api/categorias", fetcher),
      data = _useSWR.data;

  data == undefined ? categorias = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("categorias"), []) : categorias = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("categorias"), data); //Uso de router para obtener querys y categorias

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  var shop = router.query.shop;
  var generalCategory = shop + " Comunica"; //Funcion para renderizar los datos de un componente hijo clickeado

  var renderDataCategory = function renderDataCategory(newState) {
    setCategoryClicked(newState);
  };

  var getCategoryName = function getCategoryName(nameCategory) {
    setNameCategory(nameCategory.toUpperCase());
  };

  var getItemShop = function getItemShop(items) {
    items == undefined ? setDataShopAsync([]) : setDataShopAsync(items);
  }; // const { data } = useSWR(`/api/items/${nameCategory}`, fetcher);
  // setDataShopAsync(data);
  //Funcion principal


  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
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
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, categorias.map(function (categoria) {
    return __jsx(_components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      categoryUrl: categoria.url,
      categoryName: categoria.name,
      categoryAlt: categoria.name,
      color: categoria.color,
      changeDataShop: renderDataCategory,
      getCategoryName: getCategoryName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, dataShopAsync.map(function (item) {
    return __jsx(_components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      imageUrl: item.imageUrl,
      imageAlt: item.imageAlt,
      title: item.title,
      description: item.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "jq1tc3lJA+xYPKPxCzcJUvci5qo=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_13__["default"], next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = ShopPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Nob3AvW3Nob3BdLmpzeCJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlNob3BQYWdlIiwidXNlU3RhdGUiLCJjYXRlZ29yeUNsaWNrZWQiLCJzZXRDYXRlZ29yeUNsaWNrZWQiLCJuYW1lQ2F0ZWdvcnkiLCJzZXROYW1lQ2F0ZWdvcnkiLCJkYXRhU2hvcEFzeW5jIiwic2V0RGF0YVNob3BBc3luYyIsImNhdGVnb3JpYXMiLCJ1c2VTV1IiLCJkYXRhIiwidW5kZWZpbmVkIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvcCIsInF1ZXJ5IiwiZ2VuZXJhbENhdGVnb3J5IiwicmVuZGVyRGF0YUNhdGVnb3J5IiwibmV3U3RhdGUiLCJnZXRDYXRlZ29yeU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImdldEl0ZW1TaG9wIiwiaXRlbXMiLCJwYWdlRXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWFwIiwiY2F0ZWdvcmlhIiwibmFtZSIsImNvbG9yIiwiaXRlbSIsImltYWdlVXJsIiwiaW1hZ2VBbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtB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REgsQ0FERixDQTVCSixDQURGLENBREYsQ0FERixDQXRCRixFQXdFRSxNQUFDLHVGQUFEO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RUYsQ0FERjtBQTRFRCxDQTNHRDs7R0FBTXBDLFE7VUFRYVMsNEMsRUFJRkksc0Q7OztLQVpYYixRO0FBNkdTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL1tzaG9wXS43OTg3YzBhYTY4N2M4MmE3YzNkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9IZWFkZXJUaWVuZGFcIjtcbmltcG9ydCBGb290ZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9Gb290ZXJUaWVuZGFcIjtcbmltcG9ydCBDb250ZW50Q2F0ZWdvcmlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9jYXRlZ29yaWFzL0NvbnRlbnRDYXRlZ29yaWFcIjtcbmltcG9ydCBDb250ZW50U2hvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudFNob3BcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvaGVhZGVyL1RpdGxlXCI7XG5pbXBvcnQgQ2F0ZWdvcmlhSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvY2F0ZWdvcmlhcy9DYXRlZ29yaWFJdGVtXCI7XG5pbXBvcnQgQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9DYXJkQ29tcG9uZW50XCI7XG5pbXBvcnQgQmlnZ2VyQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9CaWdnZXJDYXJkQ29tcG9uZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuY29uc3QgU2hvcFBhZ2UgPSAoKSA9PiB7XG4gIC8vQ29udHJvbGFkb3JlcyBkZSBlc3RhZG9cbiAgY29uc3QgW2NhdGVnb3J5Q2xpY2tlZCwgc2V0Q2F0ZWdvcnlDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hbWVDYXRlZ29yeSwgc2V0TmFtZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YVNob3BBc3luYywgc2V0RGF0YVNob3BBc3luY10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9NdWx0aXBsZXMgZmV0Y2ggcG9yIGNvbXBvbmVudGVzXG4gIGNvbnN0IGNhdGVnb3JpYXMgPSBbXTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL2NhdGVnb3JpYXNcIiwgZmV0Y2hlcik7XG4gIGRhdGEgPT0gdW5kZWZpbmVkID8gKGNhdGVnb3JpYXMgPSBbXSkgOiAoY2F0ZWdvcmlhcyA9IGRhdGEpO1xuXG4gIC8vVXNvIGRlIHJvdXRlciBwYXJhIG9idGVuZXIgcXVlcnlzIHkgY2F0ZWdvcmlhc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzaG9wIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGdlbmVyYWxDYXRlZ29yeSA9IHNob3AgKyBcIiBDb211bmljYVwiO1xuXG4gIC8vRnVuY2lvbiBwYXJhIHJlbmRlcml6YXIgbG9zIGRhdG9zIGRlIHVuIGNvbXBvbmVudGUgaGlqbyBjbGlja2VhZG9cbiAgY29uc3QgcmVuZGVyRGF0YUNhdGVnb3J5ID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlOYW1lID0gKG5hbWVDYXRlZ29yeSkgPT4ge1xuICAgIHNldE5hbWVDYXRlZ29yeShuYW1lQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1TaG9wID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMgPT0gdW5kZWZpbmVkID8gc2V0RGF0YVNob3BBc3luYyhbXSkgOiBzZXREYXRhU2hvcEFzeW5jKGl0ZW1zKTtcbiAgfTtcblxuICAvLyBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihgL2FwaS9pdGVtcy8ke25hbWVDYXRlZ29yeX1gLCBmZXRjaGVyKTtcbiAgLy8gc2V0RGF0YVNob3BBc3luYyhkYXRhKTtcblxuICAvL0Z1bmNpb24gcHJpbmNpcGFsXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGV4aXQ9XCJwYWdlRXhpdFwiXG4gICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICBwYWdlRXhpdDoge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWRlclRpZW5kYSBpbWFnZVVybD1cIi9pbWFnZXMvZm90bzMuanBnXCI+XG4gICAgICAgIDxUaXRsZVxuICAgICAgICAgIHRpdHVsbz17c2hvcH1cbiAgICAgICAgICBkZXNjcmlwY2lvbj1cIsKhU2VsZWNjaW9uYSBsYSBjYXRlZ29yw61hIGRlIGludGVyw6lzIHkgZGVpc2ZydXRhIGRlIGxhIHJlYWxpZGFkIGF1bWVudGFkYSFcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkZXJUaWVuZGE+XG4gICAgICA8Q29udGFpbmVyIHRpdGxlPVwiU2hvcEFSIC0gVGllbmRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxDb250ZW50Q2F0ZWdvcmlhPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWFzLm1hcCgoY2F0ZWdvcmlhKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmlhSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5VXJsPXtjYXRlZ29yaWEudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZT17Y2F0ZWdvcmlhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlBbHQ9e2NhdGVnb3JpYS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjYXRlZ29yaWEuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGF0YVNob3A9e3JlbmRlckRhdGFDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICBnZXRDYXRlZ29yeU5hbWU9e2dldENhdGVnb3J5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQ29udGVudENhdGVnb3JpYT5cblxuICAgICAgICAgICAgICB7Y2F0ZWdvcnlDbGlja2VkID8gKFxuICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcFxuICAgICAgICAgICAgICAgICAgbmFtZT17Z2VuZXJhbENhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICBnZXRJdGVtU2hvcD17Z2V0SXRlbVNob3B9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJpZ2dlckNhcmRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vdlpKZFlsNUpWWFkvNjYweDM2MFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQmlnZ2VyIGNvbXBvbmVudCB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiYmlnZ2VyIGNvbXBvbmVudCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFNob3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50U2hvcCBuYW1lPXtuYW1lQ2F0ZWdvcnl9IGdldEl0ZW1TaG9wPXtnZXRJdGVtU2hvcH0+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU2hvcEFzeW5jLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17aXRlbS5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VBbHQ9e2l0ZW0uaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0NvbnRlbnRTaG9wPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyVGllbmRhIGhyZWY9XCIvXCIgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=