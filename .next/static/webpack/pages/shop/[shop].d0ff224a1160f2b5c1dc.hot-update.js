webpackHotUpdate_N_E("pages/shop/[shop]",{

/***/ "./pages/shop/[shop].jsx":
/*!*******************************!*\
  !*** ./pages/shop/[shop].jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/general_components/Container */ "./components/general_components/Container.jsx");
/* harmony import */ var _components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shop_components/topbot/HeaderTienda */ "./components/shop_components/topbot/HeaderTienda.jsx");
/* harmony import */ var _components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shop_components/topbot/FooterTienda */ "./components/shop_components/topbot/FooterTienda.jsx");
/* harmony import */ var _components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shop_components/categorias/ContentCategoria */ "./components/shop_components/categorias/ContentCategoria.jsx");
/* harmony import */ var _components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop_components/ContentShop */ "./components/shop_components/ContentShop.jsx");
/* harmony import */ var _components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/general_components/header/Title */ "./components/general_components/header/Title.jsx");
/* harmony import */ var _components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shop_components/categorias/CategoriaItem */ "./components/shop_components/categorias/CategoriaItem.jsx");
/* harmony import */ var _components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/general_components/card/CardComponent */ "./components/general_components/card/CardComponent.jsx");
/* harmony import */ var _components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/general_components/card/BiggerCardComponent */ "./components/general_components/card/BiggerCardComponent.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/antho/Desktop/ShopAR/pages/shop/[shop].jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var ShopPage = function ShopPage() {
  _s();

  //Controladores de estado
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      categoryClicked = _useState[0],
      setCategoryClicked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nameCategory = _useState2[0],
      setNameCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      dataShopAsync = _useState3[0],
      setDataShopAsync = _useState3[1]; //Multiples fetch por componentes


  var categorias = [];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_12__["default"])("/api/categorias", fetcher),
      data = _useSWR.data;

  data == undefined ? categorias = [] : categorias = data; //Uso de router para obtener querys y categorias

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var shop = router.query.shop;
  var generalCategory = shop + " Comunica"; //Funcion para renderizar los datos de un componente hijo clickeado

  var renderDataCategory = function renderDataCategory(newState) {
    setCategoryClicked(newState);
  };

  var getCategoryName = function getCategoryName(nameCategory) {
    setNameCategory(nameCategory.toUpperCase());
  };

  var getItemShop = function getItemShop(items) {
    items == undefined ? setDataShopAsync([1]) : setDataShopAsync(items);
  }; //Use efect para cargar en true la pestaña de comunicacion apenas
  //se inicalice el componente


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCategoryClicked(true);
  }, []); //Funcion principal

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
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
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_components_shop_components_topbot_HeaderTienda__WEBPACK_IMPORTED_MODULE_2__["default"], {
    imageUrl: "/images/foto3.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_components_general_components_header_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    titulo: shop,
    descripcion: "\xA1Selecciona la categor\xEDa de inter\xE9s y deisfruta de la realidad aumentada!",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx(_components_general_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ShopAR - Tienda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_components_shop_components_categorias_ContentCategoria__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, categorias.map(function (categoria) {
    return __jsx(_components_shop_components_categorias_CategoriaItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      categoryUrl: categoria.url,
      categoryName: categoria.name,
      categoryAlt: categoria.name,
      color: categoria.color,
      changeDataShop: renderDataCategory,
      getCategoryName: getCategoryName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    });
  })), categoryClicked ? __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: generalCategory.toUpperCase(),
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(_components_general_components_card_BiggerCardComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: "https://source.unsplash.com/vZJdYl5JVXY/660x360",
    title: "Bigger component title",
    description: "bigger component description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_shop_components_ContentShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: nameCategory,
    getItemShop: getItemShop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, dataShopAsync.map(function (item) {
    return __jsx(_components_general_components_card_CardComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      imageUrl: item.imageUrl,
      imageAlt: item.imageAlt,
      title: item.title,
      description: item.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    });
  }))))))), __jsx(_components_shop_components_topbot_FooterTienda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }));
};

_s(ShopPage, "Boz5xUvmtXr2di8+2ctWrCPcpQQ=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_12__["default"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9bc2hvcF0uanN4Il0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiU2hvcFBhZ2UiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Q2xpY2tlZCIsInNldENhdGVnb3J5Q2xpY2tlZCIsIm5hbWVDYXRlZ29yeSIsInNldE5hbWVDYXRlZ29yeSIsImRhdGFTaG9wQXN5bmMiLCJzZXREYXRhU2hvcEFzeW5jIiwiY2F0ZWdvcmlhcyIsInVzZVNXUiIsImRhdGEiLCJ1bmRlZmluZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaG9wIiwicXVlcnkiLCJnZW5lcmFsQ2F0ZWdvcnkiLCJyZW5kZXJEYXRhQ2F0ZWdvcnkiLCJuZXdTdGF0ZSIsImdldENhdGVnb3J5TmFtZSIsInRvVXBwZXJDYXNlIiwiZ2V0SXRlbVNob3AiLCJpdGVtcyIsInVzZUVmZmVjdCIsInBhZ2VFeGl0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJjYXRlZ29yaWEiLCJuYW1lIiwiY29sb3IiLCJpdGVtIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFD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Q0FERixDQURGLENBdEJGLEVBd0VFLE1BQUMsdUZBQUQ7QUFBYyxRQUFJLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFRixDQURGO0FBNEVELENBL0dEOztHQUFNckMsUTtVQVFhUyw0QyxFQUlGSSxzRDs7O0tBWlhiLFE7QUFpSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvW3Nob3BdLmQwZmYyMjRhMTE2MGYyYjVjMWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dlbmVyYWxfY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBIZWFkZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9IZWFkZXJUaWVuZGFcIjtcbmltcG9ydCBGb290ZXJUaWVuZGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcF9jb21wb25lbnRzL3RvcGJvdC9Gb290ZXJUaWVuZGFcIjtcbmltcG9ydCBDb250ZW50Q2F0ZWdvcmlhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Nob3BfY29tcG9uZW50cy9jYXRlZ29yaWFzL0NvbnRlbnRDYXRlZ29yaWFcIjtcbmltcG9ydCBDb250ZW50U2hvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvQ29udGVudFNob3BcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvaGVhZGVyL1RpdGxlXCI7XG5pbXBvcnQgQ2F0ZWdvcmlhSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaG9wX2NvbXBvbmVudHMvY2F0ZWdvcmlhcy9DYXRlZ29yaWFJdGVtXCI7XG5pbXBvcnQgQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9DYXJkQ29tcG9uZW50XCI7XG5pbXBvcnQgQmlnZ2VyQ2FyZENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nZW5lcmFsX2NvbXBvbmVudHMvY2FyZC9CaWdnZXJDYXJkQ29tcG9uZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5jb25zdCBTaG9wUGFnZSA9ICgpID0+IHtcbiAgLy9Db250cm9sYWRvcmVzIGRlIGVzdGFkb1xuICBjb25zdCBbY2F0ZWdvcnlDbGlja2VkLCBzZXRDYXRlZ29yeUNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmFtZUNhdGVnb3J5LCBzZXROYW1lQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkYXRhU2hvcEFzeW5jLCBzZXREYXRhU2hvcEFzeW5jXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvL011bHRpcGxlcyBmZXRjaCBwb3IgY29tcG9uZW50ZXNcbiAgbGV0IGNhdGVnb3JpYXMgPSBbXTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCIvYXBpL2NhdGVnb3JpYXNcIiwgZmV0Y2hlcik7XG4gIGRhdGEgPT0gdW5kZWZpbmVkID8gKGNhdGVnb3JpYXMgPSBbXSkgOiAoY2F0ZWdvcmlhcyA9IGRhdGEpO1xuXG4gIC8vVXNvIGRlIHJvdXRlciBwYXJhIG9idGVuZXIgcXVlcnlzIHkgY2F0ZWdvcmlhc1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzaG9wIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGdlbmVyYWxDYXRlZ29yeSA9IHNob3AgKyBcIiBDb211bmljYVwiO1xuXG4gIC8vRnVuY2lvbiBwYXJhIHJlbmRlcml6YXIgbG9zIGRhdG9zIGRlIHVuIGNvbXBvbmVudGUgaGlqbyBjbGlja2VhZG9cbiAgY29uc3QgcmVuZGVyRGF0YUNhdGVnb3J5ID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnlDbGlja2VkKG5ld1N0YXRlKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlOYW1lID0gKG5hbWVDYXRlZ29yeSkgPT4ge1xuICAgIHNldE5hbWVDYXRlZ29yeShuYW1lQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSk7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1TaG9wID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMgPT0gdW5kZWZpbmVkID8gc2V0RGF0YVNob3BBc3luYyhbMV0pIDogc2V0RGF0YVNob3BBc3luYyhpdGVtcyk7XG4gIH07XG5cbiAgLy9Vc2UgZWZlY3QgcGFyYSBjYXJnYXIgZW4gdHJ1ZSBsYSBwZXN0YcOxYSBkZSBjb211bmljYWNpb24gYXBlbmFzXG4gIC8vc2UgaW5pY2FsaWNlIGVsIGNvbXBvbmVudGVcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhdGVnb3J5Q2xpY2tlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIC8vRnVuY2lvbiBwcmluY2lwYWxcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgZXhpdD1cInBhZ2VFeGl0XCJcbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgIHBhZ2VFeGl0OiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZGVyVGllbmRhIGltYWdlVXJsPVwiL2ltYWdlcy9mb3RvMy5qcGdcIj5cbiAgICAgICAgPFRpdGxlXG4gICAgICAgICAgdGl0dWxvPXtzaG9wfVxuICAgICAgICAgIGRlc2NyaXBjaW9uPVwiwqFTZWxlY2Npb25hIGxhIGNhdGVnb3LDrWEgZGUgaW50ZXLDqXMgeSBkZWlzZnJ1dGEgZGUgbGEgcmVhbGlkYWQgYXVtZW50YWRhIVwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWRlclRpZW5kYT5cbiAgICAgIDxDb250YWluZXIgdGl0bGU9XCJTaG9wQVIgLSBUaWVuZGFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPENvbnRlbnRDYXRlZ29yaWE+XG4gICAgICAgICAgICAgICAge2NhdGVnb3JpYXMubWFwKChjYXRlZ29yaWEpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWFJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlVcmw9e2NhdGVnb3JpYS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lPXtjYXRlZ29yaWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUFsdD17Y2F0ZWdvcmlhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NhdGVnb3JpYS5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhU2hvcD17cmVuZGVyRGF0YUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgIGdldENhdGVnb3J5TmFtZT17Z2V0Q2F0ZWdvcnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Db250ZW50Q2F0ZWdvcmlhPlxuXG4gICAgICAgICAgICAgIHtjYXRlZ29yeUNsaWNrZWQgPyAoXG4gICAgICAgICAgICAgICAgPENvbnRlbnRTaG9wXG4gICAgICAgICAgICAgICAgICBuYW1lPXtnZW5lcmFsQ2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIGdldEl0ZW1TaG9wPXtnZXRJdGVtU2hvcH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QmlnZ2VyQ2FyZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS92WkpkWWw1SlZYWS82NjB4MzYwXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCaWdnZXIgY29tcG9uZW50IHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJiaWdnZXIgY29tcG9uZW50IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50U2hvcD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnRTaG9wIG5hbWU9e25hbWVDYXRlZ29yeX0gZ2V0SXRlbVNob3A9e2dldEl0ZW1TaG9wfT5cbiAgICAgICAgICAgICAgICAgICAge2RhdGFTaG9wQXN5bmMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsPXtpdGVtLmltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUFsdD17aXRlbS5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvQ29udGVudFNob3A+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXJUaWVuZGEgaHJlZj1cIi9cIiAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==